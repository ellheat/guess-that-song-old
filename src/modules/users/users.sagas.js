import { put, takeLatest, call, take } from 'redux-saga/effects';
import { UsersTypes } from './users.redux';
import { usersListeners } from './users.listeners';
import { SocketActions } from '../socket/socket.redux';
import Socket from '../../services/socket';

const socket = new Socket();

export function* connectUser() {
  socket.initialize();
  socket.io.emit(process.env.REACT_APP_SOCKET_EVENT_CONNECT);

  yield put(SocketActions.createSocket(socket.io));
  yield put(SongsActions.getSong());

  const channel = yield call(usersListeners, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export default function* usersSaga() {
  yield takeLatest(UsersTypes.CONNECT_USER, connectUser);
}
