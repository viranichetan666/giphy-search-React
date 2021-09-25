import { all } from "redux-saga/effects";
import giphySagas from "./giphy/saga";

export default function* rootSaga() {
  yield all([giphySagas()]);
}
