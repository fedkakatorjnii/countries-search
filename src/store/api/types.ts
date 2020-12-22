export const SET_ACTIVE = "SET_ACTIVE";
export const SET_FAVORITES = "SET_FAVORITES";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_SEARCH = "SET_SEARCH";
export const SET_SEARCH_COUNTRY = "SET_SEARCH_COUNTRY";

export const FETCH_LIST = "FETCH_LIST";
export const REQUEST_LIST = "REQUEST_LIST";

type TLanguages = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export interface Country {
  /** Название страны на англ */
  name: string;
  /** Название страны на родном */
  nativeName: string;
  /** Флаг страны */
  flag: string;
  /** Код страны */
  numericCode: string;
  /** ? */
  languages: TLanguages[];
  /** Граничащие страны */
  borders: string[];
  /** Переводы */
  translations: Record<string, string>;
  /** Код страны */
  alpha3Code: string;
}

export interface APIState {
  seatchCountry: string;
  countries: Country[];
  active: string | undefined;
  favorites: string[];
  loading: boolean;
  error?: string;
}

interface SetSeatchCountry {
  type: typeof SET_SEARCH_COUNTRY;
  payload: string;
}

interface SetLoading {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface SetError {
  type: typeof SET_ERROR;
  payload: string | undefined;
}

interface SetActive {
  type: typeof SET_ACTIVE;
  payload: string | undefined;
}

interface SetFavorites {
  type: typeof SET_FAVORITES;
  payload: string[];
}

interface FetchListAction {
  type: typeof FETCH_LIST;
  payload: string;
}

interface RequestListAction {
  type: typeof REQUEST_LIST;
  payload: Country[];
}

export type APIActionTypes =
  | SetSeatchCountry
  | FetchListAction
  | RequestListAction
  | SetActive
  | SetFavorites
  | SetLoading
  | SetError;
