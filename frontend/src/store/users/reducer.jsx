import {
  ADD_ADDRESS_REQUEST,
  ADD_ADDRESS_SUCCESS,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_ORDER_FAILURE,
  ADD_ORDER_REQUEST,
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SHOW_ADDRESS_REQUEST,
  SHOW_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_REQUEST,
  UPDATE_ADDRESS_SUCCESS,
} from "./actionType";

const initialState = {
  user: {},
  cities: [],
  addressValue: {
    districts: [],
    wards: [],
  },
  loading: false,
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case GET_USER_REQUEST:
    case LOGOUT_REQUEST:
    case ADD_CART_REQUEST:
    case ADD_ADDRESS_REQUEST:
    case SHOW_ADDRESS_REQUEST:
    case UPDATE_ADDRESS_REQUEST:
    case DELETE_ADDRESS_REQUEST:
    case ADD_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case GET_USER_SUCCESS:
    case ADD_CART_SUCCESS:
    case ADD_ADDRESS_SUCCESS:
    case UPDATE_ADDRESS_SUCCESS:
    case DELETE_ADDRESS_SUCCESS:
    case ADD_ORDER_FAILURE:
      return { ...state, user: action.payload, loading: false };
    case SHOW_ADDRESS_SUCCESS:
      return { ...state, addressValue: action.payload, loading: false };
    case LOGOUT_SUCCESS:
      return { ...state, user: {}, loading: false };
    default:
      return state;
  }
};
