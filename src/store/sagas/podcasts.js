import { call, put } from "redux-saga/effects";

//API
import axios from "../../services/axios";

import {Service} from "../../services/service"

//Podcasts
import PodcastsActions from "../ducks/podcasts";

export function* load() {
  try {
    const  {data}  = yield call(Service.get);
    yield put(PodcastsActions.loadSuccess(data));
  } catch (err) {
    yield put(PodcastsActions.loadFailure());
  }
}
