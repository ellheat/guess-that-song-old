import { put, takeLatest, call, take, select } from 'redux-saga/effects';
import { JukeboxTypes } from './jukebox.redux';
import { jukeboxListeners } from './jukebox.listeners';
import { selectJukeboxSocket } from '../socket/socket.selectors';

export function* getPlaylist() {
  const socket = yield select(selectJukeboxSocket);

  socket.io.emit(process.env.REACT_APP_SOCKET_EVENT_CONNECT);
  const channel = yield call(jukeboxListeners, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export default function* jukeboxSaga() {
  yield takeLatest(JukeboxTypes.GET_PLAYLIST, getPlaylist);
}
