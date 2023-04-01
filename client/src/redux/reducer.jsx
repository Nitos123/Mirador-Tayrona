import {
  GET_ALL_ROOMS,
  GET_TRANSPORTE,
  GET_DESAYUNO,
  GET_COMIDAS,
} from "./actions";

const initialState = {
  rooms: [],
  transporte: [],
  desayuno: [],
  comidas: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ROOMS:
      return {
        ...state,
        rooms: action.payload,
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

    default:
      return { ...state };
  }
};

export default rootReducer;
