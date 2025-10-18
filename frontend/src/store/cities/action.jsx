import { axiosClient } from "@/axios/axiosClient";
import {
  GET_CITIES_FAILURE,
  GET_CITIES_REQUEST,
  GET_CITIES_SUCCESS,
} from "./actionType";

export const getAllCities = () => async (dispatch) => {
  dispatch({ type: GET_CITIES_REQUEST });
  await axiosClient
    .get("/list_cities")
    .then((data) => {
      console.log(data.data);
      dispatch({ type: GET_CITIES_SUCCESS, payload: data.data });
    })
    .catch((e) => {
      dispatch({ type: GET_CITIES_FAILURE, error: e });
    });
};
