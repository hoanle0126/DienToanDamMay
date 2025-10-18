import { axiosClient } from "@/axios/axiosClient";
import {
  GET_ALL_FLASH_DEALS_REQUEST,
  GET_ALL_FLASH_DEALS_SUCCESS,
  UPDATE_FLASH_DEAL_REQUEST,
  UPDATE_FLASH_DEAL_SUCCESS,
} from "./actionType";

export const getFlashDeals = () => async (dispatch) => {
  dispatch({ type: GET_ALL_FLASH_DEALS_REQUEST });
  try {
    axiosClient.get("/flash-deals").then((data) => {
      dispatch({ type: GET_ALL_FLASH_DEALS_SUCCESS, payload: data.data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateFlashDeals = (flashDeal) => async (dispatch) => {
  dispatch({ type: UPDATE_FLASH_DEAL_REQUEST });
  try {
    axiosClient.post("/flash-deals", flashDeal).then((data) => {
      dispatch({ type: UPDATE_FLASH_DEAL_SUCCESS, payload: data.data });
      console.log(data.data);
    });
  } catch (error) {
    console.log(error);
  }
};
