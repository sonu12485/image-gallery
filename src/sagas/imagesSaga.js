import { takeEvery, select, call, put } from "redux-saga/effects";

import { IMAGES } from "../constants";

import fetchImages from "../api/fetchImages";

import { loadImagesSuccess, loadImagesError } from "../actions/images";

const getState = state => {
  return state.pageNumber;
};

function* handleImagesLoad() {
  try {
    const pageNumber = yield select(getState);
    const images = yield call(fetchImages, pageNumber);
    yield put(loadImagesSuccess(images));
  } catch (e) {
    yield put(loadImagesError(e));
  }
}

function* imagesSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default imagesSaga;
