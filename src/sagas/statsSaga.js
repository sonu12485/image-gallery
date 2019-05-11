import { take, call, put } from "redux-saga/effects";

import { IMAGES } from "../constants";

import fetchStats from "../api/fetchStats";

import { statsLoaded } from "../actions/stats";

function* statsSaga() {
  while (true) {
    const res = yield take(IMAGES.LOAD_SUCCESS);

    const images = res.payload;

    try {
      for (let i = 0; i < images.length; i++) {
        const stats = yield call(fetchStats, images[i].id);

        console.log(stats);

        yield put(statsLoaded(images[i].id, stats.downloads.total));
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default statsSaga;
