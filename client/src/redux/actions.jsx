import axios from "axios";

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
export const CARRITO_ADD_USER = "CARRITO_ADD_USER"

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

// export const getUsers = () => {
//   return async function (dispatch) {
//     const users = await axios.get("/usuarios");
//     dispatch({ type: GET_USERS, payload: users.data });
//   };
// };

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

const users = async () => {
  return await axios.get("/usuarios");
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

export const getAllReviews = async () => {
  return async function (dispatch) {
    // const allUsers = users.data;
    const allUsers = (await axios.get(`/usuarios`)).data;
    console.log("recibiendo los usuarios", allUsers);
    dispatch({
      type: GET_ALL_REVIEWS,
      payload: allUsers,
    });
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
    try {
      const response = await axios.get("/usuarios")
      if (response && response.data) {
        const usuarios = response.data
        const user = usuarios.filter(usuario => usuario.email === userMail)
        console.log(user[0].carrito)
        const roomsId = user[0].carrito.map(room=> room.idRoom)
        const rooms = await Promise.all(roomsId.map(async (roomId) => {
          const response = await axios.get(`/room/${roomId}`);
          return response.data;
        }));
        
        console.log(rooms);
        
        dispatch({type: CARRITO_USER, payload: rooms })
      } else {
        console.log("No se encontraron datos en la respuesta")
      }
    } catch (error) {
      console.log("Hubo un error al obtener los datos:", error)
    }
  }
}

export const carritoAddUser = (userMail, start, end, id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/usuarios");
      if (response && response.data) {
        const usuarios = response.data;
        const user = usuarios.filter((usuario) => usuario.email === userMail);
        console.log(user[0]._id);
        const inicio = new Date(start).toISOString().slice(0, 10);
        const fin = new Date(end).toISOString().slice(0, 10);
        console.log(inicio, fin, id);

        const date = {
          start: inicio,
          end: fin,
          userId: user[0]._id,
          idRoom: id,
        };
        console.log(date);
        await axios.patch("/usuarios/dateRoom", date);

        // Obtener los datos de la habitación que acaba de agregarse al carrito
        const responseRoom = await axios.get(`/room/${id}`);
        const roomData = responseRoom.data;

        // Devolver los datos de la habitación junto con el mensaje "hola"
        dispatch({ type: CARRITO_ADD_USER, payload: { message: "hola", room: roomData } });
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

export const checkReservationDates = (roomId, startDate, endDate) => {
  return async function (dispatch) {
    try {
      const roomDetail = await axios.get(`/room/${roomId}`);
      const bookedDates = roomDetail.data.bookedDates;
      console.log(bookedDates);

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

      if (isAvailable) {
        console.log(isAvailable);
        console.log("Las fechas están disponibles.");
      } else {
        console.log(isAvailable);
        console.log("Las fechas no están disponibles.");
      }

      dispatch({ type: CHECK_RESERVATION_DATES, payload: !isAvailable });
    } catch (error) {
      console.error(error);
    }
  };
};
