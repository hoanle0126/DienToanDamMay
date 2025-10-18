import { axiosClient } from "@/axios/axiosClient";
import {
  CREATE_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_CATEGORIES_CHILDREN_FAILURE,
  GET_CATEGORIES_CHILDREN_REQUEST,
  GET_CATEGORIES_CHILDREN_SUCCESS,
  GET_CATEGORY_BY_ID_FAILURE,
  GET_CATEGORY_BY_ID_REQUEST,
  GET_CATEGORY_BY_ID_SUCCESS,
  UPDATE_CATEGORY_FAILURE,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
} from "./actionType";

export const getAllCategories = () => async (dispatch) => {
  dispatch({ type: GET_ALL_CATEGORIES_REQUEST });
  try {
    axiosClient
      .get("/categories")
      .then((data) => {
        dispatch({ type: GET_ALL_CATEGORIES_SUCCESS, payload: data.data });
      })
      .catch((e) => dispatch({ type: GET_ALL_CATEGORIES_FAILURE, payload: e }));
  } catch (e) {
    dispatch({ type: GET_ALL_CATEGORIES_FAILURE, payload: e });
  }
};

export const createCategory = (category) => async (dispatch) => {
  dispatch({ type: CREATE_CATEGORY_REQUEST });
  try {
    axiosClient
      .post("/categories", category)
      .then((data) => {
        dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: CREATE_CATEGORY_FAILURE, payload: e });
      });
  } catch (e) {
    dispatch({ type: CREATE_CATEGORY_FAILURE, payload: e });
  }
};

export const getCategoryById =
  ({ id: id, onSuccess }) =>
  async (dispatch) => {
    dispatch({ type: GET_CATEGORY_BY_ID_REQUEST });
    try {
      await axiosClient
        .get("/categories/" + id)
        .then((data) => {
          dispatch({ type: GET_CATEGORY_BY_ID_SUCCESS, payload: data.data });
          onSuccess();
        })
        .catch((e) => {
          dispatch({ type: GET_CATEGORY_BY_ID_FAILURE, payload: e });
        });
    } catch (error) {
      dispatch({ type: GET_CATEGORY_BY_ID_FAILURE, payload: error });
    }
  };

export const updateCategory = (id, category) => async (dispatch) => {
  dispatch({ type: UPDATE_CATEGORY_REQUEST });
  try {
    axiosClient
      .put("/categories/" + id, category)
      .then((data) => {
        dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: data.data });
      })
      .catch((e) => {
        dispatch({ type: UPDATE_CATEGORY_FAILURE, error: e });
        console.log(e);
      });
  } catch (e) {
    dispatch({ type: UPDATE_CATEGORY_FAILURE, error: e });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  dispatch({ type: DELETE_CATEGORY_REQUEST });
  try {
    axiosClient.delete("/categories/" + id).then((data) => {
      dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data.data });
    });
  } catch (error) {
    dispatch({ type: DELETE_CATEGORY_FAILURE, error: error });
  }
};

export const getCategoriesChildren = () => async (dispatch) => {
  dispatch({ type: GET_CATEGORIES_CHILDREN_REQUEST });
  try {
    axiosClient.get("/categories-children").then((data) => {
      dispatch({ type: GET_CATEGORIES_CHILDREN_SUCCESS, payload: data.data });
    });
  } catch (error) {
    dispatch({ type: GET_CATEGORIES_CHILDREN_FAILURE, error: error });
  }
};
