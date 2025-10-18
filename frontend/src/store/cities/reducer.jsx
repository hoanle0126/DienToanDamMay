import { GET_CITIES_REQUEST, GET_CITIES_SUCCESS } from "./actionType";

const initialState = {
  cities: [],
};

export const cityReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CITIES_SUCCESS:
      return { ...state, cities: action.payload, loading: false };
    default:
      return state;
  }
};
