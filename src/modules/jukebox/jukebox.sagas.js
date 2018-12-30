import { put, takeLatest, call, take, select } from 'redux-saga/effects';
import { JukeboxTypes } from './jukebox.redux';
import { jukeboxListeners } from './jukebox.listeners';
import { selectJukebox } from '../pusher/pusher.selectors';

export function* getPlaylist() {
  // const pusher = yield select(selectJukebox);

  // const channel = yield call(jukeboxListeners, socket);
  // while (true) {
  //   const action = yield take(channel);
  //   yield put(action);
  // }
}

export default function* jukeboxSaga() {
  yield takeLatest(JukeboxTypes.GET_PLAYLIST, getPlaylist);
}
