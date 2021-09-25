import { all, takeEvery, put, fork } from "redux-saga/effects";
import { message } from "antd";
import {
  getTrendingiphy,
  getSearchgiphy,
  getSearchSuggestion
} from "services/giphy";
import giphyActions from "./actions";
const {
  successGetTrendingGiphy,
  successMoreGetSearchGiphy,
  successGetSearchSuggestion
} = giphyActions;

export function* getTrendingGiphyHandler() {
  yield takeEvery(giphyActions.REQUEST_GET_TRENDING_GIPHY, function*({
    payload
  }) {
    try {
      let response = yield getTrendingiphy(payload);
      if (response.status === 200) {
        if (payload.offset === 0) {
          yield put(successGetTrendingGiphy(response.data));
        } else {
          yield put(successMoreGetSearchGiphy(response.data));
        }
      } else {
        throw response;
      }
    } catch (e) {
      message.error(e.response.data.message);
    }
  });
}

export function* getSearchGiphyHandler() {
  yield takeEvery(giphyActions.REQUEST_GET_SEARCH_GIPHY, function*({
    payload
  }) {
    try {
      let response = yield getSearchgiphy(payload);
      if (response.status === 200) {
        if (payload.offset === 0) {
          yield put(successGetTrendingGiphy(response.data));
        } else {
          yield put(successMoreGetSearchGiphy(response.data));
        }
      } else {
        throw response;
      }
    } catch (e) {
      message.error(e.response.data.message);
    }
  });
}

export function* getSearchSuggestionHandler() {
  yield takeEvery(giphyActions.REQUEST_GET_SEARCH_SUGGESTION, function*({
    payload
  }) {
    try {
      let response = yield getSearchSuggestion(payload);
      if (response.status === 200) {
        yield put(successGetSearchSuggestion(response.data));
      } else {
        throw response;
      }
    } catch (e) {
      message.error(e.response.data.message);
    }
  });
}

export default function* authSagas() {
  yield all([
    fork(getTrendingGiphyHandler),
    fork(getSearchGiphyHandler),
    fork(getSearchSuggestionHandler)
  ]);
}
