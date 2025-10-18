import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_REVIEW_REQUEST,
  ADD_REVIEW_SUCCESS,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "./actionType";

const initialState = {
  product: {},
  products: [],
  loading: false,
  error: null,
  meta: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
    case ADD_PRODUCT_REQUEST:
    case GET_PRODUCT_BY_ID_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case DELETE_PRODUCT_REQUEST:
    case ADD_REVIEW_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_PRODUCTS_SUCCESS:
    case ADD_PRODUCT_SUCCESS:
    case UPDATE_PRODUCT_SUCCESS:
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload.data,
        meta: action.payload.meta,
        loading: false,
      };
    case GET_PRODUCT_BY_ID_SUCCESS:
    case ADD_REVIEW_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    default:
      return { ...state };
  }
};
