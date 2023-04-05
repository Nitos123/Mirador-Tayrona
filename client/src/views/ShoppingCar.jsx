import React from "react";
import { Link } from "react-router-dom";
import "../styles/ShoppingCar.scss";

const ShoppingCar = (props) => {
  return (
    <div>
      <h1>Estoy en Shoppingcar</h1>

      <Link to="/rooms">
        <button>Shopping Continue</button>
      </Link>

      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          rerum, corrupti maiores perspiciatis optio laborum dolore soluta
          fugiat molestiae distinctio assumenda, necessitatibus odit aut libero
          delectus explicabo, quaerat temporibus excepturi.
        </p>
      </div>
    </div>
  );
};

export default ShoppingCar;
