import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { restoreCartFromLocalStorage, carritoUser } from "../redux/actions";
import { useAuth } from "../context/authContext";
import { SweetAprovedPayment, SweetRejectedPayment } from "./Sweet";

export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,

      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
      SweetRejectedPayment(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("Payment status" + paymentIntent.status);
      SweetAprovedPayment();
    } else {
      setMessage("unexpected state");
    }

    //

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={isProcessing} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>

      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}

//

//

//

function Payment(props) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const carrito = useSelector((state) => state.carrito);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  let totalPrice = 0;

  for (let i = 0; i < carrito.length; i++) {
    totalPrice += carrito[i].price;
  }

  useEffect(() => {
    dispatch(restoreCartFromLocalStorage("carrito"));
    if (user && user.email) {
      const userMail = user.email;
      dispatch(carritoUser(userMail));
    }
  }, [dispatch]);

  useEffect(() => {
    fetch("http://localhost:8080/config").then(async (r) => {
      const { publishableKey } = await r.json();

      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",

      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();

      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
      <div>
        <h3>Total Price: {totalPrice}$</h3>
      </div>
      {setStripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
