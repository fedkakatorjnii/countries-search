import {
  APIActionTypes,
  REQUEST_LIST,
  FETCH_LIST,
  Country,
  SET_SEARCH_COUNTRY,
  SET_ACTIVE,
  SET_FAVORITES,
  SET_ERROR,
  SET_LOADING,
} from "./types";

export function setSeatchCountry(name: string): APIActionTypes {
  return {
    type: SET_SEARCH_COUNTRY,
    payload: name,
  };
}

export function requestListCountries(countries: Country[]): APIActionTypes {
  return {
    type: REQUEST_LIST,
    payload: countries,
  };
}

export function fetchListCountries(name: string): APIActionTypes {
  return {
    type: FETCH_LIST,
    payload: name,
  };
}

export function setActive(name: string | undefined): APIActionTypes {
  return {
    type: SET_ACTIVE,
    payload: name,
  };
}

export function setFavorites(names: string[]): APIActionTypes {
  return {
    type: SET_FAVORITES,
    payload: names,
  };
}

export function setError(error?: string): APIActionTypes {
  return {
    type: SET_ERROR,
    payload: error,
  };
}

export function setLoading(value: boolean): APIActionTypes {
  return {
    type: SET_LOADING,
    payload: value,
  };
}
