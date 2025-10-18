import { axiosClient } from "@/axios/axiosClient";
import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_REVIEW_REQUEST,
  ADD_REVIEW_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "./actionType";

export const getAllProducts =
  ({ paginate = 18, page = 1, search = "", excluding = [] }) =>
  async (dispatch) => {
    dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
    await axiosClient
      .get(
        "/products?paginate=" +
          paginate +
          "&page=" +
          page +
          "&search=" +
          search +
          "&excluding=" +
          excluding
      )
      .then((data) => {
        dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data.data });
        console.log(data.data.data);
      })
      .catch((error) => {
        dispatch({ type: GET_ALL_PRODUCTS_FAILURE, payload: error });
      });
  };

export const addProduct = (products, action) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });
  await axiosClient
    .post("/products", products)
    .then((data) => {
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data.data });
      action();
    })
    .catch((error) => {
      dispatch({ type: ADD_PRODUCT_FAILURE, payload: error });
    });
};

export const getProductById = (id, action) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_BY_ID_REQUEST });
  await axiosClient
    .get("/products/" + id)
    .then((data) => {
      dispatch({ type: GET_PRODUCT_BY_ID_SUCCESS, payload: data.data });
      action();
    })
    .catch((error) => {
      dispatch({ type: GET_PRODUCT_BY_ID_FAILURE, payload: error });
    });
};

export const updateProduct = (products, id) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });
  await axiosClient
    .put("/products/" + id, products)
    .then((data) =>
      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data.data })
    )
    .catch((error) => {
      dispatch({ type: UPDATE_PRODUCT_FAILURE, error: error });
    });
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  await axiosClient
    .delete("/products/" + id)
    .then((data) =>
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data.data })
    )
    .catch((error) => {
      dispatch({ type: DELETE_PRODUCT_FAILURE, error: error });
    });
};

export const addReview =
  ({ review }) =>
  async (dispatch) => {
    dispatch({ type: ADD_REVIEW_REQUEST });
    await axiosClient.post("/reviews", review).then((data) => {
      dispatch({ type: ADD_REVIEW_SUCCESS, payload: data.data });
    });
  };
