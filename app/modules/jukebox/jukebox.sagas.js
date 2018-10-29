import envConfig from 'env-config';
import { put, takeLatest, call, take, select } from 'redux-saga/effects';
import { JukeboxTypes } from './jukebox.redux';
import { jukeboxListeners } from './jukebox.listeners';
import { SocketActions } from '../socket/socket.redux';
import { selectSocket } from '../socket/socket.selectors';
import Socket from '../../services/socket';

const socket = new Socket();

export function* getPlaylist() {
  // const socket = yield select(selectSocket);
  socket.initialize();

  console.log(envConfig.socket.namespace.jukebox);
  console.log(envConfig.socket.event.connect);

  console.log(socket.io);

  socket.io.nsp = envConfig.socket.namespace.jukebox;
  console.log(socket.io);

  socket.io.emit(envConfig.socket.event.connect);
  // yield put(SocketActions.createSocket(socket.io));
  const channel = yield call(jukeboxListeners, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export default function* jukeboxSaga() {
  yield takeLatest(JukeboxTypes.GET_PLAYLIST, getPlaylist);
}
