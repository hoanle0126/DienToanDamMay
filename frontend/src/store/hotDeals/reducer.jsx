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

const initialState = {
  hot_deal: {
    banners: [],
    deal_times: [
      {
        products: [],
        time: "2025-06-27T16:09:28.216Z",
      },
    ],
  },
  hot_deals: [],
  loading: true,
};

export const hotDealReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HOT_DEALS_REQUEST:
    case ADD_HOT_DEAL_REQUEST:
    case GET_HOT_DEAL_BY_ID_REQUEST:
    case UPDATE_HOT_DEAL_REQUEST:
    case DELETE_HOT_DEAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_HOT_DEALS_SUCCESS:
    case ADD_HOT_DEAL_SUCCESS:
    case UPDATE_HOT_DEAL_SUCCESS:
    case DELETE_HOT_DEAL_SUCCESS:
      return { ...state, loading: false, hot_deals: action.payload };
    case GET_HOT_DEAL_BY_ID_SUCCESS:
      console.log("test", action.payload);
      return { ...state, loading: false, hot_deal: action.payload };
    default:
      return state;
  }
};
