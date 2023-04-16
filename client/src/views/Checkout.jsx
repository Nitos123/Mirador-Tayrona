import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import "../styles/Checkout.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  restoreCartFromLocalStorage,
  carritoUser,
  deleteCar,
  deleteLocalStorage
} from "../redux/actions";
import { useAuth } from "../context/authContext";

const checkOut = (props) => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const carrito = useSelector((state) => state.carrito);
  

  useEffect(() => {
    dispatch(restoreCartFromLocalStorage("carrito"));
    if (user && user.email) {
      const userMail = user.email;
      dispatch(carritoUser(userMail));
    }
  }, [dispatch, user]);
  

  const borrarLocal=(id)=>{
    dispatch(deleteLocalStorage(id, carrito))
    

  }

  const deleteData = async(id) => {
    if (user && user.email) {
      const userMail = user.email;
      
      await dispatch(deleteCar(userMail, id));
      await  dispatch(carritoUser(userMail));
    }
  };
 ;

  useEffect(() => {
    dispatch(restoreCartFromLocalStorage("carrito"));
    if (user && user.email) {
      const userMail = user.email;
      dispatch(carritoUser(userMail));
    }
  }, [dispatch]);

  return (
    <div>
      <section>
        <div className="columns-login">
          <div>
            <Link to="/home">
              <button className="back">Back to home</button>
            </Link>
            <div>
              {carrito?.map((carrito) => (
               
                <div>
                  {!user && <button onClick={()=>borrarLocal(carrito._id)} ></button>}
                  {user && <button onClick={()=>deleteData(carrito.id)} >X</button>}
                  <img
                    src={carrito.image[0]}
                    alt={carrito.name}
                    width="300em"
                  />
                  <p>name: {carrito.name}</p>
                  <p>precio dia: {carrito.price}</p>
                  <p>dias: {carrito.dias}</p>
                  <p>total: {carrito.total}</p>
                </div>
              ))}
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
