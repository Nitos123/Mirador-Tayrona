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

            <div>
              <img
                className="product-img"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/277574212.jpg?k=621dbc8e6f3d0217c4d6f28b08a682d817474d4eecb717bf929722fad00f255c&o=&hp=1"
                alt="front-part-house"
              />
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
