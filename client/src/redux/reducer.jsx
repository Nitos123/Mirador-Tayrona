import {
  GET_ALL_ROOMS,
  GET_TRANSPORTE,
  GET_DESAYUNO,
  GET_COMIDAS,
  GET_ROOM_DETAIL,
  GET_TYPE,
} from "./actions";

const initialState = {
  rooms: [],
  roomsCopy: [],
  transporte: [],
  desayuno: [],
  comidas: [],
  detail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ROOMS:
      return {
        ...state,
        rooms: action.payload,
        roomsCopy: action.payload,
      };

    case GET_TRANSPORTE:
      return {
        ...state,
        transporte: action.payload,
      };

    case GET_COMIDAS:
      return {
        ...state,
        comidas: action.payload,
      };

    case GET_DESAYUNO:
      return {
        ...state,
        desayuno: action.payload,
      };

    case GET_ROOM_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_TYPE:
      const selectedType = action.payload;
      const filteredRooms = state.rooms.filter(
        (room) => room.type === selectedType
      );
      return {
        ...state,
        filteredRooms: filteredRooms,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
