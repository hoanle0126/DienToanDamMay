import {
  GET_ALL_FLASH_DEALS_REQUEST,
  GET_ALL_FLASH_DEALS_SUCCESS,
  UPDATE_FLASH_DEAL_REQUEST,
  UPDATE_FLASH_DEAL_SUCCESS,
} from "./actionType";

const initialState = {
  flashDeal: {
    products: [],
  },
  loading: true,
};

export const flashDealReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_FLASH_DEALS_REQUEST:
    case UPDATE_FLASH_DEAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_FLASH_DEALS_SUCCESS:
    case UPDATE_FLASH_DEAL_SUCCESS:
      return { ...state, loading: false, flashDeal: action.payload };
    default:
      return state;
  }
};
