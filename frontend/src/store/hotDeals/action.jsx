import { axiosClient } from "@/axios/axiosClient";
import {
  ADD_HOT_DEAL_REQUEST,
  ADD_HOT_DEAL_SUCCESS,
  DELETE_HOT_DEAL_REQUEST,
  DELETE_HOT_DEAL_SUCCESS,
  GET_ALL_HOT_DEALS_REQUEST,
  GET_ALL_HOT_DEALS_SUCCESS,
  GET_HOT_DEAL_BY_ID_REQUEST,
  GET_HOT_DEAL_BY_ID_SUCCESS,
  UPDATE_HOT_DEAL_REQUEST,
  UPDATE_HOT_DEAL_SUCCESS,
} from "./actionType";

export const getAllHotDeals = () => async (dispatch) => {
  dispatch({ type: GET_ALL_HOT_DEALS_REQUEST });
  try {
    axiosClient.get("/hot-deals").then((data) => {
      dispatch({ type: GET_ALL_HOT_DEALS_SUCCESS, payload: data.data });
      console.log(data.data)
    });
  } catch (error) {
    console.log(error);
  }
};

export const addNewHotDeal = (hot_deal) => async (dispatch) => {
  dispatch({ type: ADD_HOT_DEAL_REQUEST });
  try {
    axiosClient.post("/hot-deals", hot_deal).then((data) => {
      dispatch({ type: ADD_HOT_DEAL_SUCCESS, payload: data.data });
      alert("Success")
    });
  } catch (error) {
    console.log(error);
  }
};

export const getHotDealsById = (id) => async (dispatch) => {
  dispatch({ type: GET_HOT_DEAL_BY_ID_REQUEST });
  try {
    axiosClient.get("/hot-deals/" + id).then((data) => {
      dispatch({ type: GET_HOT_DEAL_BY_ID_SUCCESS, payload: data.data });
      console.log("hot-deals", data.data);
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateHotDeal = (hot_deal, id) => async (dispatch) => {
  dispatch({ type: UPDATE_HOT_DEAL_REQUEST });
  try {
    axiosClient.put("/hot-deals/" + id, hot_deal).then((data) => {
      dispatch({ type: UPDATE_HOT_DEAL_SUCCESS, payload: data.data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteHotDeal = (id) => async (dispatch) => {
  dispatch({ type: DELETE_HOT_DEAL_REQUEST });
  try {
    axiosClient.delete("/hot-deals/" + id).then((data) => {
      console.log(data.data);
      dispatch({ type: DELETE_HOT_DEAL_SUCCESS, payload: data.data });
    });
  } catch (error) {
    console.log(error);
  }
};
