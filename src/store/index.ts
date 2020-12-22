import { apiReducer } from "./api/reducers";
import createSagaMiddleware from "redux-saga";

import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import rootSaga from "./saga";

const rootReducer = combineReducers({
  api: apiReducer,
});

// prettier-ignore
// @ts-ignore
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(saga))
);
saga.run(rootSaga);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("favorites", JSON.stringify(state.api.favorites));
});

export type RootState = ReturnType<typeof rootReducer>;
