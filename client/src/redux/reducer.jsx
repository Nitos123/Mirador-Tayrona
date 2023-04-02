import {
  GET_ALL_ROOMS,
  GET_TRANSPORTE,
  GET_DESAYUNO,
  GET_COMIDAS,
  GET_ROOM_DETAIL,
  GET_MAX_PRICE,
  GET_MIN_PRICE,
  GET_TYPE,
} from "./actions";
const initialState = {
  rooms: [],
  roomsCopy: [],
  transporte: [],
  desayuno: [],
  comidas: [],
  detail: [],
  order: "DESCENDING", // por defecto ordena de mayor a menor
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
      let filteredRooms = [];
      if (action.payload.includes("matrimonial")) {
        filteredRooms = [
          ...state.roomsCopy.filter((room) => room.type === "matrimonial"),
        ];
      }
      if (action.payload.includes("individual")) {
        filteredRooms = [
          ...filteredRooms,
          ...state.roomsCopy.filter((room) => room.type === "individual"),
        ];
      }
      if (action.payload.includes("familiar")) {
        filteredRooms = [
          ...filteredRooms,
          ...state.roomsCopy.filter((room) => room.type === "familiar"),
        ];
      }

      // ordenar según la variable order
      let sortedRooms = filteredRooms;
      if (state.order === "DESCENDING") {
        sortedRooms = [...filteredRooms].sort((a, b) => b.price - a.price);
      } else if (state.order === "ASCENDING") {
        sortedRooms = [...filteredRooms].sort((a, b) => a.price - b.price);
      }

      return {
        ...state,
        rooms: sortedRooms,
      };

    case GET_MAX_PRICE:
      const sortedRoomsDescending = [...state.rooms].sort(
        (a, b) => b.price - a.price
      );
      return {
        ...state,
        rooms: sortedRoomsDescending,
        order: "DESCENDING",
      };

    case GET_MIN_PRICE:
      const sortedRoomsAscending = [...state.rooms].sort(
        (a, b) => a.price - b.price
      );
      return {
        ...state,
        rooms: sortedRoomsAscending,
        order: "ASCENDING",
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
