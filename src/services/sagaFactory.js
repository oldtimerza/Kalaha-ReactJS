import { call, put, takeEvery } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import typeFactory from "./typeFactory";
import actionFactory from "./actionFactory";

const sagaFactory = function(name, url, optionsConstructor) {
  const types = typeFactory(name);
  const actions = actionFactory(name);

  function* handle(action) {
    yield put(actions.loading(true));
    try {
      const result = yield call(fetch, url, optionsConstructor(action));
      const json = yield result.json();
      if (json.status && json.status >= 400) {
        throw new Error(json.error);
      }
      yield put(actions.store(json));
    } catch (e) {
      yield put(actions.error(e));
    }
    yield put(actions.loading(false));
  }

  const root = function* root() {
    yield takeEvery(types.fetchingType, handle);
  };

  return { root };
};

export default sagaFactory;
