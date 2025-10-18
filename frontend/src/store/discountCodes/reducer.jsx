import {
  ADD_CODE_REQUEST,
  ADD_CODE_SUCCESS,
  DELETE_CODE_REQUEST,
  DELETE_CODE_SUCCESS,
  GET_ALL_CODE_REQUEST,
  GET_ALL_CODE_SUCCESS,
  GET_CODE_REQUEST,
  GET_CODE_SUCCESS,
  UPDATE_CODE_REQUEST,
  UPDATE_CODE_SUCCESS,
} from "./actionType";

const initialState = {
  code: {},
  codes: [],
  loading: false,
};

export const discountCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CODE_REQUEST:
    case ADD_CODE_REQUEST:
    case GET_CODE_REQUEST:
    case UPDATE_CODE_REQUEST:
    case DELETE_CODE_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_CODE_SUCCESS:
    case ADD_CODE_SUCCESS:
    case UPDATE_CODE_SUCCESS:
    case DELETE_CODE_SUCCESS:
      return { ...state, codes: action.payload, loading: false };
    case GET_CODE_SUCCESS:
      return { ...state, code: action.payload, loading: false };
    default:
      return state;
  }
};
