import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import "../styles/Checkout.scss";
import { useDispatch, useSelector } from "react-redux";
import { restoreCartFromLocalStorage, carritoUser } from "../redux/actions";
import { useAuth } from "../context/authContext";




 const checkOut = (props) => {
  const { user } = useAuth();
   const dispatch= useDispatch() 
   const carrito = useSelector(state => state.carrito)
   

  useEffect(()=>{
   
    dispatch(restoreCartFromLocalStorage("carrito"))
    if (user && user.email) {
      const userMail = user.email
      dispatch(carritoUser(userMail))
    }

  },[dispatch])


  return (
    <div>
      <section>
        <div className="columns-login">
          <div>
            <Link to="/home">
              <button className="back">Back to home</button>
            </Link>
           <div>
            {carrito?.map(carrito => <div>
              <img src={carrito.image[0]|| carrito.image} alt={carrito.name} width="300em" />
            <p>{carrito.name}</p>
            <p>{carrito.price}</p>
            </div>)}
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
