import axios from "axios";

export const GET_ALL_ROOMS = "GET_ROOMS";
export const GET_TRANSPORTE = "GET_TRANSPORTE";
export const GET_DESAYUNO = "GET_DESAYUNO";
export const GET_COMIDAS = "GET_COMIDAS";
export const GET_ROOM_DETAIL = "GET_ROOM_DETAIL";
export const GET_TYPE = "GET_TYPE"

export const getAllRooms = () => {
  return async function (dispatch) {
    const rooms = await axios.get("http://localhost:8080/room");
    dispatch({ type: GET_ALL_ROOMS, payload: rooms.data });
  };
};

export const getTransporte = () => {
  return async function (dispatch) {
    const transporte = await axios.get("http://localhost:8080/transporte");
    dispatch({ type: GET_TRANSPORTE, payload: transporte.data });
  };
};

export const getDesayuno = () => {
  return async function (dispatch) {
    const desayuno = await axios.get("http://localhost:8080/desayuno");
    dispatch({ type: GET_DESAYUNO, payload: desayuno.data });
  };
};

export const getComidas = () => {
  return async function (dispatch) {
    const comidas = await axios.get("http://localhost:8080/comidas");
    dispatch({ type: GET_COMIDAS, payload: comidas.data });
  };
};

export const getRoomDetail = (id) => {
  return async function (dispatch) {
    const roomDetail = await axios.get(`http://localhost:8080/room/${id}`);

    dispatch({ type: GET_ROOM_DETAIL, payload: roomDetail.data });
  };
};

export const getMaxPrice = () => {
  return async function (dispatch) {
    const roomDetail = await axios.get(`http://localhost:8080/room`);

    dispatch({ type: GET_ROOM_DETAIL, payload: roomDetail.data });
  };
};

export const getType = (type) => {
  return {
    type: 'GET_TYPE',
    payload: type

  }
};
