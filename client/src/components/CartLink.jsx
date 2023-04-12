// import React from "react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { getAllReviews } from "../redux/actions";
// import axios from "axios";

// const CartLink = ({ user }) => {
//   const dispatch = useDispatch();
//   const [cart, setCart] = useState(null); // Agrega un estado para almacenar el carrito

//   const findCartById = async (id) => {
//     const cart = await axios.get(`/carrito/${id}`);
   
//     return cart.data; // Retorna solo los datos de la respuesta
//   };

//   useEffect(() => {
//     const fetchReviews = async () => {
//       await dispatch(getAllReviews());
//     };
//     fetchReviews();
//   }, []);

//   const allUser = useSelector((state) => state.users);

//   const userByEmail = allUser.filter((u) => u.email === user.email);
//   console.log("este usuarios:", userByEmail);

//   console.log('usuario encontrado:' ,userByEmail)

//   useEffect(() => {
//     const getCart = async () => {
//       const cartEncontrado = await findCartById(userByEmail[0].carrito);
//       console.log('este es el carrito entontrado',cartEncontrado)
//       setCart(cartEncontrado);
//     };
 
//       getCart();
    
//   }, [dispatch]);

//   console.log('este es el carrito stado',cart)

//   return (
//     <Link to="/checkout">
//       <FontAwesomeIcon icon={faShoppingCart} />
//       {cart && cart.total > 0 && (
//         <span className="cart-count">{cart.total}</span>
//       )}
//     </Link>
//   );
// };

// export default CartLink;
