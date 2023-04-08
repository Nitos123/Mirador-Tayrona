import { React, useState } from "react";
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

const stripePromise = loadStripe(
  "pk_test_51MtdRJAxd88LZv2eI3ZXSTGWh0VL8z8i799gIye6ke36gZzmc7H73kJvKRmgW7msmfdIhz0VwCql9Koq7WdGo3Zg009lR7Uc3t"
);

//

const StripeForm = () => {
  const stripe = useStripe();

  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      console.log(paymentMethod);

      const { id } = paymentMethod;

      try {
        const { data } = await axios.post("/api/checkout", {
          id,
          amount: 10 * 100,
        });

        console.log(data);

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Card Details</h3>

          <img
            className="product-img"
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/277574212.jpg?k=621dbc8e6f3d0217c4d6f28b08a682d817474d4eecb717bf929722fad00f255c&o=&hp=1"
            alt="front-part-house"
          />

          <h3>Price: 100$</h3>
        </div>

        <h3>Card type</h3>

        <div>
          <div className="cards-image">
            <div>
              <img
                className="image-checkout"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
              />
            </div>

            <div>
              <img
                className="image-checkout"
                src="https://www.delitosfinancieros.org/wp-content/uploads/2017/10/mastercard_bank_money_card_20426_2048x1240.jpg"
              />
            </div>

            <div>
              <img
                className="image-checkout"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/2560px-RuPay.svg.png"
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
            <h4>1000</h4>
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
};

const CheckoutForm = (props) => {
  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
          <StripeForm />
        </Elements>
      </div>
    </div>
  );
};

export default CheckoutForm;
