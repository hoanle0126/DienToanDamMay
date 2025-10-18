import { axiosClient } from "@/axios/axiosClient";
import {
  ADD_ORDER_FAILURE,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
} from "./actionType";

export const addOrder = (order) => async (dispatch) => {
  dispatch({ type: ADD_ORDER_REQUEST });
  await axiosClient
    .post("/orders", order)
    .then((data) => {
      dispatch({ type: ADD_ORDER_SUCCESS, payload: data.data });
    })
    .catch((e) => {
      dispatch({ type: ADD_ORDER_FAILURE, error: e });
    });
};
