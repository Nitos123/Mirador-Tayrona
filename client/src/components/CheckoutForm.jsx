import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Checkout.scss";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import "../styles/Checkout.scss";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { restoreCartFromLocalStorage, carritoUser } from "../redux/actions";
import { useAuth } from "../context/authContext";
import "../styles/CheckoutForm.scss";

const stripePromise = loadStripe(
  "pk_test_51MtdRJAxd88LZv2eI3ZXSTGWh0VL8z8i799gIye6ke36gZzmc7H73kJvKRmgW7msmfdIhz0VwCql9Koq7WdGo3Zg009lR7Uc3t"
);

const StripeForm = (props) => {
  const stripe = useStripe();
  const { user } = useAuth();
  const dispatch = useDispatch();

  const elements = useElements();

  const carrito = useSelector((state) => state.carrito);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post("/api/checkout", {
          id,
          amount: 10 * 100,
        });

        elements.getElement(CardElement).clear();
      } catch (error) {}
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Card Details</h3>
        </div>

        <div className="products-container">
          <div>
            {carrito?.map((carro) => {
              return <div> {carro.name}</div>;
            })}
          </div>

          <div>
            {carrito?.map((carro) => {
              return <div> {carro.price}</div>;
            })}
          </div>
        </div>

        <h3>Card types</h3>
        <div>
          <div className="cards-image">
            <div>
              <img
                className="image-checkout"
                src="https://res.cloudinary.com/ds8n6d63e/image/upload/v1681423455/Hostel-tayrona/2560px-Visa_Inc._logo.svg_zjh3rt.png"
              />
            </div>

            <div>
              <img
                className="image-checkout"
                src="https://res.cloudinary.com/ds8n6d63e/image/upload/v1681423482/Hostel-tayrona/mastercard_bank_money_card_20426_2048x1240_keb903.jpg"
              />
            </div>

            <div>
              <img
                className="image-checkout"
                src="https://res.cloudinary.com/ds8n6d63e/image/upload/v1681423506/Hostel-tayrona/2560px-RuPay.svg_x80o6e.png"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <CardElement className="form-control" />
        </div>
        <div className="total-form">
          <div>
            <h4>Total</h4>
          </div>

          <div>
            <h3>{totalPrice}</h3>
          </div>
        </div>
        <div>
          <button className="btn btn-success" disabled={!stripe}>
            {loading ? (
              <div className="spinner-border text-light" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              "CHECKOUT"
            )}
          </button>
        </div>
      </form>
    </div>
  );
  d;
};

const CheckoutForm = (props) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <StripeForm />
      </Elements>
    </div>
  );
};

export default CheckoutForm;
