import {
  GET_ALL_ROOMS,
  GET_TRANSPORTE,
  GET_DESAYUNO,
  GET_COMIDAS,
  GET_ROOM_DETAIL,
  GET_MAX_PRICE,
  GET_MIN_PRICE,
  GET_TYPE,
  GET_ALL_REVIEWS,
  RESET,
  GET_CAR,
  POST_REVIEW,
  LOCAL_CARRITO,
  RESTORE_CART_FROM_LOCAL_STORAGE,
  CHECK_RESERVATION_DATES,
  CARRITO_USER,
  CAR_ITEMS_NUMBER,
  GET_ALL_USERS,
} from "./actions";

const initialState = {
  rooms: [],
  roomsCopy: [],
  transporte: [],
  desayuno: [],
  comidas: [],
  detail: [],
  carrito: [],
  users: [],
  reviews: [],
  carItems: [],
  order: "DESCENDING", // por defecto ordena de mayor a menor
  dataConflict: null,
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

    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case POST_REVIEW:
      return {
        ...state,
      };

    case GET_ALL_REVIEWS:
      console.log("-------->", action.payload.coments);
      return {
        ...state,
        reviews: action.payload,
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

    case RESET:
      return {
        ...state,
        rooms: [...state.roomsCopy],
      };
    case GET_CAR:
      return {
        ...state,
        carrito: [...state.carrito, ...action.payload],
      };

    case LOCAL_CARRITO:
      return {
        ...state,
        carrito: [...action.payload],
      };
    case RESTORE_CART_FROM_LOCAL_STORAGE:
      return {
        ...state,
        carrito: action.payload,
      };
    case CHECK_RESERVATION_DATES:
      return {
        ...state,
        dataConflict: action.payload,
      };
    case CARRITO_USER:
      return {
        ...state,
        carrito: action.payload,
      };
    case CAR_ITEMS_NUMBER:
      return {
        ...state,
        carItems: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
