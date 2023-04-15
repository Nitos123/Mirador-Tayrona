import axios from "axios";
import { Await } from "react-router-dom";

export const GET_ALL_ROOMS = "GET_ROOMS";
export const GET_TRANSPORTE = "GET_TRANSPORTE";
export const GET_DESAYUNO = "GET_DESAYUNO";
export const GET_COMIDAS = "GET_COMIDAS";
export const GET_ROOM_DETAIL = "GET_ROOM_DETAIL";
export const GET_TYPE = "GET_TYPE";
export const GET_MAX_PRICE = "GET_MAX_PRICE";
export const GET_MIN_PRICE = "GET_MIN_PRICE";
export const RESET = "RESET";
export const CARRITO_USER = "CARRITO_USER";
export const GET_CAR = "GET_CAR";
export const LOCAL_CARRITO = "LOCAL_CARRITO";
export const RESTORE_CART_FROM_LOCAL_STORAGE =
  "RESTORE_CART_FROM_LOCAL_STORAGE";
export const POST_REVIEW = "POST_REVIEW";
export const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
export const CHECK_RESERVATION_DATES = "CHECK_RESERVATION_DATES";
export const CARRITO_ADD_USER = "CARRITO_ADD_USER";
export const CAR_ITEMS_NUMBER = "CAR_ITEMS_NUMBER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const DELETE_USER = "DELETE_USER";
export const DELETE_LOCAL_STORAGE = " DELETE_LOCAL_STORAGE";
export const FILTER_BY_AVAILABLE_DATE = " FILTER_BY_AVAILABLE_DATE";

export const getAllRooms = () => {
  return async function (dispatch) {
    const rooms = await axios.get("/room");
    dispatch({ type: GET_ALL_ROOMS, payload: rooms.data });
  };
};

export const getTransporte = () => {
  return async function (dispatch) {
    const transporte = await axios.get("/transporte");
    dispatch({ type: GET_TRANSPORTE, payload: transporte.data });
  };
};

export const getDesayuno = () => {
  return async function (dispatch) {
    const desayuno = await axios.get("/desayuno");
    dispatch({ type: GET_DESAYUNO, payload: desayuno.data });
  };
};

export const getAllUsers = () => {
  return async function (dispatch) {
    const users = await axios.get("http://localhost:8080/usuarios");
    dispatch({ type: GET_ALL_USERS, payload: users.data });
  };
};

export const getAllReviews = () => {
  return async function (dispatch) {
    const allUsers = await axios.get(`/usuarios`);
    dispatch({ type: GET_ALL_REVIEWS, payload: users.allUsers });
  };
};

export const getComidas = () => {
  return async function (dispatch) {
    const comidas = await axios.get("/comidas");
    dispatch({ type: GET_COMIDAS, payload: comidas.data });
  };
};

export const getRoomDetail = (id) => {
  return async function (dispatch) {
    const roomDetail = await axios.get(`/room/${id}`);

    dispatch({ type: GET_ROOM_DETAIL, payload: roomDetail.data });
  };
};

export const getMaxPrice = () => {
  return {
    type: GET_MAX_PRICE,
  };
};

export const postReview = (payload, id) => {
  return async () => {
    try {
      const response = await axios.patch(
        `/usuarios/${id}/comentarios`,
        payload
      );
      return response;
    } catch (error) {
      alert(error);
    }
  };
};

export const getMinPrice = () => {
  return {
    type: GET_MIN_PRICE,
  };
};

export const getType = (type) => {
  return {
    type: "GET_TYPE",
    payload: type,
  };
};

export function reset() {
  return {
    type: RESET,
  };
}

//PREGUNTAR ANTES DE MANIPULAR ESTA ACCION, LOGICA MUY COMPLEJA
export const carritoUser = (userMail) => {
  return async function (dispatch) {
    const response = await axios.get("/usuarios");
    // console.log(response);
    if (response && response.data) {
      const usuarios = response.data;
      const user = usuarios.filter((usuario) => usuario.email === userMail);

      const carritoItems = user[0].carrito.map((item) => {
        return {
          image: item.image,
          name: item.name,
          price: item.price,
          total: item.total,
          dias: item.dias,
          id: item._id,
        };
      });

      dispatch({ type: CARRITO_USER, payload: carritoItems });
      // Aquí puedes hacer lo que necesites con el array de habitaciones
    }
  };
};

export const carritoAddUser = (userMail, start, end, id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/usuarios");
      if (response && response.data) {
        const usuarios = response.data;
        const user = usuarios.filter((usuario) => usuario.email === userMail);

        function getNumberOfDays(start, end) {
          const oneDay = 24 * 60 * 60 * 1000; // Milisegundos en un día
          const startDate = new Date(start);
          const endDate = new Date(end);
          const diffDays = Math.round(Math.abs((endDate - startDate) / oneDay));
          return diffDays;
        }

        const inicio = new Date(start).toISOString().slice(0, 10);
        const fin = new Date(end).toISOString().slice(0, 10);

        const responseRoom = await axios.get(`/room/${id}`);

        const room = responseRoom.data;
        const image = room.image[0];
        const price = room.price;
        const name = room.name;
        const dias = getNumberOfDays(start, end);
        const totalHabitacion = price * dias;

        const date = {
          start: inicio,
          end: fin,
          userId: user[0]._id,
          idRoom: id,
          image: image,
          price: price,
          name: name,
          dias: dias,
          total: totalHabitacion,
        };

        await axios.patch("/usuarios/dateRoom", date);

        // Obtener los datos de la habitación que acaba de agregarse al carrito
        const roomData = responseRoom.data;

        // Devolver los datos de la habitación junto con el mensaje "hola"
        dispatch({
          type: CARRITO_ADD_USER,
          payload: { message: "hola", room: roomData },
        });
      }
    } catch (error) {
      console.log("Hubo un error al obtener los datos:", error);
    }
  };
};

export const localCarrito = (id) => {
  return async function (dispatch) {
    try {
      const rooms = (await axios.get("/room")).data;
      const room = rooms.filter((room) => room._id === id)[0];
      const cartData = JSON.parse(localStorage.getItem("carrito")) || [];
      const ruta = [...cartData]; // Paso 1
      ruta.push(room); // Paso 2
      localStorage.setItem("carrito", JSON.stringify(ruta)); // Paso 3
      console.log(ruta);
      dispatch({ type: LOCAL_CARRITO, payload: ruta });
    } catch (error) {
      console.error(error);
    }
  };
};

export const restoreCartFromLocalStorage = () => {
  const cartData = JSON.parse(localStorage.getItem("carrito")) || [];
  return {
    type: "RESTORE_CART_FROM_LOCAL_STORAGE",
    payload: cartData,
  };
};

export const checkReservationDates = (endDate, startDate, roomId) => {
  return async function (dispatch) {
    try {
      const roomDetail = await axios.get(`/room/${roomId}`);
      const bookedDates = roomDetail.data.bookedDates;

      // Convertir las fechas a objetos Date
      const checkInDate = new Date(startDate);
      const checkOutDate = new Date(endDate);

      // Validar si las fechas están disponibles
      const isAvailable = !bookedDates.some(({ start, end }) => {
        const bookedStartDate = new Date(start);
        const bookedEndDate = new Date(end);

        return (
          (checkInDate >= bookedStartDate && checkInDate < bookedEndDate) ||
          (checkOutDate > bookedStartDate && checkOutDate <= bookedEndDate)
        );
      });

      dispatch({ type: CHECK_RESERVATION_DATES, payload: isAvailable });
    } catch (error) {
      console.error(error);
    }
  };
};

export const filterByAvailableDate = (startDate, endDate) => {
  return {
    type: FILTER_BY_AVAILABLE_DATE,
    payload: {
      startDate,
      endDate,
    },
  };
};

export const carItemsNumber = (userMail) => {
  return async function (dispatch) {
    const response = await axios.get("/usuarios");

    if (response && response.data) {
      const usuarios = response.data;
      const user = usuarios.filter(
        (usuario) => usuario.email === userMail.email
      );
      // console.log(user);
      const total = user[0].carrito.length;
      // console.log(total);

      dispatch({ type: CAR_ITEMS_NUMBER, payload: total });
    }
  };
};

export const deleteCar = (userMail, id) => {
  return async function (dispatch) {
    try {
      // Obtener la información actualizada del usuario desde el servidor
      const response = await axios.get("/usuarios");

      if (response && response.data) {
        const usuarios = response.data;
        const user = usuarios.find((usuario) => usuario.email === userMail);

        // Encontrar el objeto del carrito con el _id igual al que se pasa como parámetro
        const item = user.carrito.find((item) => item._id === id);
        const userId = user._id;
        const carId = item._id;
        const data = {
          id: carId,
          userId: userId,
        };

        await axios.patch("/usuario/deleteCart", data);

        // Obtener la información actualizada del usuario desde el servidor
        const responseUpdated = await axios.get("/usuarios");
        if (responseUpdated && responseUpdated.data) {
          const usuario = responseUpdated.data.find(
            (usuario) => usuario.email === userMail
          );
          const carritoUser = usuario.carrito;
          // Obtener el array del carrito del usuario desde la respuesta actualizada

          dispatch({
            type: DELETE_USER,
            payload: carritoUser,
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteLocalStorage = (id, carrito) => {
  return async function (dispatch) {
    const car2 = [...carrito];
    let idFound = false;
    const limpieza = car2.filter((car) => {
      if (car._id === id && !idFound) {
        idFound = true;
        return false;
      }
      return true;
    });
    localStorage.setItem("carrito", JSON.stringify(limpieza));
    console.log(limpieza);
    dispatch({ type: DELETE_LOCAL_STORAGE, payload: limpieza });
  };
};
