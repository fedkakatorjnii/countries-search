import { call, put, takeEvery } from "redux-saga/effects";
import { requestListCountries, setLoading, setError } from "./actions";
import { FETCH_LIST, Country } from "./types";
import axios from "axios";

const API_URL = "https://restcountries.eu/rest/v2";

function* listWorker(props: { type: typeof FETCH_LIST; payload: string }) {
  try {
    if (props.payload.length === 0) {
      yield put(requestListCountries([]));
      yield put(setError());
      yield put(setLoading(false));
    } else {
      yield put(setError());
      yield put(setLoading(true));
      const payload = yield call(getCountries, props.payload);
      yield put(requestListCountries(payload));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setError("Что-то пошло не так."));
    yield put(requestListCountries([]));
  }
}

async function getCountries(name: string) {
  const res = await axios.get<Country[]>(`${API_URL}/name/${name}`);

  return res.data;
}

export const apiSaga = [takeEvery(FETCH_LIST, listWorker)];
