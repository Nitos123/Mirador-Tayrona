import { React, useState } from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import "../styles/Checkout.scss";

const checkOut = (props) => {
  return (
    <div>
      <section>
        <div className="columns-login">
          <div>
            <Link to="/home">
              <button className="back">Back to home</button>
            </Link>

            <div>
              <p>Booked rooms</p>
              <p>You have 3 items in your cart</p>
            </div>
          </div>

          <div className="txt-container">
            <CheckoutForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default checkOut;
