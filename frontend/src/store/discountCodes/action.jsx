import { axiosClient } from "@/axios/axiosClient";
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

export const getAllCodes = () => async (dispatch) => {
  dispatch({ type: GET_ALL_CODE_REQUEST });
  axiosClient.get("/discount-codes").then((data) => {
    console.log("code",data)
    dispatch({ type: GET_ALL_CODE_SUCCESS, payload: data.data });
  });
};

export const addDiscountCode =
  ({ code }) =>
  async (dispatch) => {
    dispatch({ type: ADD_CODE_REQUEST });
    axiosClient.post("/discount-codes", code).then((data) => {
      dispatch({ type: ADD_CODE_SUCCESS, payload: data.data });
    });
  };

export const getDiscountCodeById =
  ({ id }) =>
  async (dispatch) => {
    dispatch({ type: GET_CODE_REQUEST });
    axiosClient.get("/discount-codes/" + id).then((data) => {
      dispatch({ type: GET_CODE_SUCCESS, payload: data.data });
    });
  };

export const updateDiscountCode =
  ({ code, id }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_CODE_REQUEST });
    axiosClient.put("/discount-codes/" + id, code).then((data) => {
      dispatch({ type: UPDATE_CODE_SUCCESS, payload: data.data });
    });
  };

export const deleteDiscountCode =
  ({ id }) =>
  async (dispatch) => {
    dispatch({ type: DELETE_CODE_REQUEST });
    axiosClient.delete("/discount-codes/" + id).then((data) => {
      dispatch({ type: DELETE_CODE_SUCCESS, payload: data.data });
    });
  };
