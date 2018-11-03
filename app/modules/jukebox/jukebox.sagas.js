import envConfig from 'env-config';
import { put, takeLatest, call, take, select } from 'redux-saga/effects';
import { JukeboxTypes } from './jukebox.redux';
import { jukeboxListeners } from './jukebox.listeners';
import { selectJukeboxSocket } from '../socket/socket.selectors';

export function* getPlaylist() {
  const socket = yield select(selectJukeboxSocket);

  socket.io.emit(envConfig.socket.event.connect);
  const channel = yield call(jukeboxListeners, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export default function* jukeboxSaga() {
  yield takeLatest(JukeboxTypes.GET_PLAYLIST, getPlaylist);
}
