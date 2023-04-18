import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { SweetAprovedPayment, SweetRejectedPayment } from "./Sweet";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

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
      SweetRejectedPayment(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      SweetAprovedPayment(paymentIntent.status);
      navigate("/");
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
    </form>
  );
}

//

function Payment(props) {
  const carrito = useSelector((state) => state.carrito);

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  let totalPrice = 0;

  for (let i = 0; i < carrito.length; i++) {
    totalPrice += carrito[i].total;
  }

  useEffect(() => {
    axios.get("/config").then((response) => {
      const { publishableKey } = response.data;
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    axios
      .post("/create-payment-intent", {
        amount: totalPrice,
      })
      .then((response) => {
        const { clientSecret } = response.data;
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
