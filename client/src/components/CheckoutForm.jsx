import { React, useState } from "react";
import "../styles/Checkout.scss";

const initialState = {
  nameOnCard: "",
  cardNumber: "",
  expirationDate: "",
  cvv: "",
};

const CheckoutForm = (props) => {
  const [checkoutForm, setCheckoutForm] = useState(initialState);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setCheckoutForm({
      ...checkoutForm,
      [property]: value,
    });
  };
  return (
    <div>
      <div className="form-container">
        <div>
          <h3>Card Details</h3>
          <h3>Card type</h3>
        </div>
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

        <form className="login-form">
          <div>
            <div>
              <label>Name on Card: </label>
            </div>

            <div>
              <input name="name" type="text" onChange={changeHandler} />
            </div>

            <label>Card Number: </label>
            <div>
              <input name="email" type="text" onChange={changeHandler} />
            </div>

            <div className="card-detail-form">
              <div>
                <label>Expiration Day: </label>
                <div>
                  <input name="password" type="text" onChange={changeHandler} />
                </div>
              </div>

              <div>
                <label>CVV: </label>
                <div>
                  <input name="password" type="text" onChange={changeHandler} />
                </div>
              </div>
            </div>

            <div className="total-form">
              <div>
                <h4>Subtotal</h4>
              </div>
              <div>
                <h4>1000</h4>
              </div>
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
              <button>Checkout</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
