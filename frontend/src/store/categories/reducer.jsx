import { GET_BRAND_BY_ID_REQUEST } from "../brands/actionType";
import {
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_CATEGORIES_CHILDREN_REQUEST,
  GET_CATEGORIES_CHILDREN_SUCCESS,
  GET_CATEGORY_BY_ID_REQUEST,
  GET_CATEGORY_BY_ID_SUCCESS,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
} from "./actionType";

const initialState = {
  categories: [],
  categoriesChildren: [],
  category: {
    name: "",
    thumbnail: "",
    type: "Category",
  },
  loading: true,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_REQUEST:
    case CREATE_CATEGORY_REQUEST:
    case GET_CATEGORY_BY_ID_REQUEST:
    case UPDATE_CATEGORY_REQUEST:
    case DELETE_CATEGORY_REQUEST:
    case GET_CATEGORIES_CHILDREN_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_CATEGORIES_SUCCESS:
    case CREATE_CATEGORY_SUCCESS:
    case UPDATE_CATEGORY_SUCCESS:
    case DELETE_CATEGORY_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case GET_CATEGORIES_CHILDREN_SUCCESS:
      return { ...state, loading: false, categoriesChildren: action.payload };
    case GET_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        category: {
          ...action.payload.category,
          products: action.payload.products.data,
        },
        meta: {
          current_page: action.payload.products.current_page,
          last_page: action.payload.products.last_page,
        },
      };
    default:
      return state;
  }
};
