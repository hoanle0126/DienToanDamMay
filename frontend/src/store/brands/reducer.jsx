import {
  ADD_BRAND_REQUEST,
  ADD_BRAND_SUCCESS,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  GET_ALL_BRANDS_REQUEST,
  GET_ALL_BRANDS_SUCCESS,
  GET_BRAND_BY_ID_REQUEST,
  GET_BRAND_BY_ID_SUCCESS,
  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_SUCCESS,
} from "./actionType";

const initialState = {
  brand: {},
  brands: [],
  loading: true,
};

export const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BRANDS_REQUEST:
    case ADD_BRAND_REQUEST:
    case GET_BRAND_BY_ID_REQUEST:
    case UPDATE_BRAND_REQUEST:
    case DELETE_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_BRANDS_SUCCESS:
    case ADD_BRAND_SUCCESS:
    case UPDATE_BRAND_SUCCESS:
    case DELETE_BRAND_SUCCESS:
      return { ...state, loading: false, brands: action.payload };
    case GET_BRAND_BY_ID_SUCCESS:
      console.log("test", action.payload);
      return {
        ...state,
        loading: false,
        brand: {
          ...action.payload.brand,
          products: action.payload.products.data,
        },
        meta: {
          current_page:action.payload.products.current_page,
          last_page:action.payload.products.last_page,
        },
      };
    default:
      return state;
  }
};
