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
export const CARRITO_USER = "CARRITO_USER"
export const GET_CAR = "GET_CAR"

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
export const carritoUser = (start, end, userMail, roomId)=>{
  return async function (dispatch) {
    const usuarios = (await axios.get("/usuarios")).data.filter(user=> user.email === userMail);
    const id = usuarios[0]._id
    const startUTC = new Date(start).toISOString().slice(0, 10);
const endUTC = new Date(end).toISOString().slice(0, 10);
    const data = {
      start:  startUTC,
      end: endUTC,
      userId: id,
      idRoom: roomId
    }
   
    
    try {
      const response = await axios.patch("/usuarios/dateRoom", data)
      
      console.log(response.data, "como va ser")
      dispatch({ type: CARRITO_USER, payload: response.data });
      return response.data
      
    } catch (error) {
      console.log(error.response.status)
      return error.response.status
    }
    // Hacer algo con la respuesta del servidor, por ejemplo:
  };
}
export const getCar = (email) => {
  return async function (dispatch) {
      const usuarios = (await axios.get("/usuarios")).data.filter(user=> user.email === email);
      const id = usuarios[0]._id
      const response = await axios.get(`/usuarios`);
      const user = response.data;
      const usuario = user.filter(user=> user._id === id);
      const roomId = usuario[0].carrito[0].rooms.map(room => room.idRoom)
      const room = (await axios.get("/room")).data.filter(room => roomId.includes(room._id));
      console.log(room)
      dispatch({ type: GET_CAR, payload: room });
   
  };
};
