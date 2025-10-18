import { axiosClient } from "@/axios/axiosClient";
import {
  ADD_ADDRESS_FAILURE,
  ADD_ADDRESS_REQUEST,
  ADD_ADDRESS_SUCCESS,
  ADD_CART_FAILURE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_ORDER_FAILURE,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  DELETE_ADDRESS_FAILURE,
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SHOW_ADDRESS_FAILURE,
  SHOW_ADDRESS_REQUEST,
  SHOW_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_FAILURE,
  UPDATE_ADDRESS_REQUEST,
  UPDATE_ADDRESS_SUCCESS,
} from "./actionType";

export const login = (user) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axiosClient
    .post("/login", user)
    .then((data) => {
      localStorage.setItem("token", data.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: data.data.user });
      console.log(data);
    })
    .catch((e) => {
      dispatch({ type: LOGIN_FAILURE, error: e });
    });
};

export const register = (user) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  axiosClient
    .post("/register", user)
    .then((data) => {
      dispatch({ type: REGISTER_SUCCESS, payload: data.data });
    })
    .catch((e) => {
      dispatch({ type: REGISTER_FAILURE, error: e });
    });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  axiosClient
    .post("/logout")
    .then(() => {
      localStorage.removeItem("token");
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch((e) => {
      dispatch({ type: LOGOUT_FAILURE, error: e });
    });
};

export const getUser = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  axiosClient.get("/user").then((data) => {
    console.log("User: ", data.data);
    dispatch({ type: GET_USER_SUCCESS, payload: data.data });
  });
};

export const addCart = (cart) => async (dispatch) => {
  dispatch({ type: ADD_CART_REQUEST });
  await axiosClient
    .post("/carts", cart)
    .then((data) => {
      dispatch({ type: ADD_CART_SUCCESS, payload: data.data });
    })
    .catch((e) => {
      dispatch({ type: ADD_CART_FAILURE, error: e });
    });
};

export const addNewAddress = (address) => async (dispatch) => {
  dispatch({ type: ADD_ADDRESS_REQUEST });
  await axiosClient
    .post("/addresses", address)
    .then((data) => {
      dispatch({ type: ADD_ADDRESS_SUCCESS, payload: data.data });
    })
    .catch((e) => {
      dispatch({ type: ADD_ADDRESS_FAILURE, error: e });
    });
};

export const showAddress = (id) => async (dispatch) => {
  dispatch({ type: SHOW_ADDRESS_REQUEST });
  await axiosClient
    .get("/addresses/" + id)
    .then((data) => {
      dispatch({ type: SHOW_ADDRESS_SUCCESS, payload: data.data });

      return data.data;
    })
    .catch((e) => {
      dispatch({ type: SHOW_ADDRESS_FAILURE, error: e });
    });

  return {};
};

export const updateAddress = (address, id) => async (dispatch) => {
  dispatch({ type: UPDATE_ADDRESS_REQUEST });
  await axiosClient
    .put("/addresses/" + id, address)
    .then((data) => {
      dispatch({ type: UPDATE_ADDRESS_SUCCESS, payload: data.data });

      return data.data;
    })
    .catch((e) => {
      dispatch({ type: UPDATE_ADDRESS_FAILURE, error: e });
    });

  return {};
};

export const deleteAddress = (id) => async (dispatch) => {
  dispatch({ type: DELETE_ADDRESS_REQUEST });
  await axiosClient
    .delete("/addresses/" + id)
    .then((data) => {
      dispatch({ type: DELETE_ADDRESS_SUCCESS, payload: data.data });

      return data.data;
    })
    .catch((e) => {
      dispatch({ type: DELETE_ADDRESS_FAILURE, error: e });
    });

  return {};
};

export const addOrder = (order) => async (dispatch) => {
  dispatch({ type: ADD_ORDER_REQUEST });
  await axiosClient
    .post("/orders", order)
    .then((data) => {
      dispatch({ type: ADD_ORDER_SUCCESS, payload: data.data });
    })
    .catch((e) => {
      console.log(e)
      dispatch({ type: ADD_ORDER_FAILURE, error: e });
    });
};
