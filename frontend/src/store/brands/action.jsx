import { axiosClient } from "@/axios/axiosClient";
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

export const getAllBrands =
  ({ onSuccess = () => {} }) =>
  async (dispatch) => {
    dispatch({ type: GET_ALL_BRANDS_REQUEST });
    try {
      axiosClient.get("/brands").then((data) => {
        dispatch({ type: GET_ALL_BRANDS_SUCCESS, payload: data.data });
        onSuccess(data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

export const addNewBrand = (brand) => async (dispatch) => {
  dispatch({ type: ADD_BRAND_REQUEST });
  try {
    axiosClient.post("/brands", brand).then((data) => {
      dispatch({ type: ADD_BRAND_SUCCESS, payload: data.data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBrandById =
  ({ id, onSuccess = () => {}, search = "" }) =>
  async (dispatch) => {
    dispatch({ type: GET_BRAND_BY_ID_REQUEST });
    try {
      axiosClient.get("/brands/" + id + search).then((data) => {
        console.log("url", "/brands/" + id + search);
        dispatch({ type: GET_BRAND_BY_ID_SUCCESS, payload: data.data });
        onSuccess();
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateBrand = (brand, id) => async (dispatch) => {
  dispatch({ type: UPDATE_BRAND_REQUEST });
  try {
    axiosClient.put("/brands/" + id, brand).then((data) => {
      dispatch({ type: UPDATE_BRAND_SUCCESS, payload: data.data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBrand = (id) => async (dispatch) => {
  dispatch({ type: DELETE_BRAND_REQUEST });
  try {
    axiosClient.delete("/brands/" + id).then((data) => {
      console.log(data.data);
      dispatch({ type: DELETE_BRAND_SUCCESS, payload: data.data });
    });
  } catch (error) {
    console.log(error);
  }
};
