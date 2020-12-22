import {
  SET_SEARCH_COUNTRY,
  SET_ACTIVE,
  SET_FAVORITES,
  SET_LOADING,
  SET_ERROR,
  APIState,
  APIActionTypes,
  REQUEST_LIST,
} from "./types";

const initialState: APIState = {
  seatchCountry: "",
  countries: [],
  active: undefined,
  favorites: [],
  loading: false,
};

export const apiReducer = (state = initialState, action: APIActionTypes) => {
  switch (action.type) {
    case SET_SEARCH_COUNTRY: {
      return {
        ...state,
        seatchCountry: action.payload,
      };
    }
    case REQUEST_LIST: {
      return {
        ...state,
        countries: [...action.payload],
      };
    }
    case SET_ACTIVE: {
      return {
        ...state,
        active: action.payload,
      };
    }
    case SET_FAVORITES: {
      return {
        ...state,
        favorites: action.payload,
      };
    }

    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
