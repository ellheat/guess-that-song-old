import envConfig from 'env-config';
import { put, takeLatest, call, take } from 'redux-saga/effects';
import { UsersTypes } from './users.redux';
import { usersListeners } from './users.listeners';
import { socket } from '../../services/socket';


export function* connectUser() {
  socket.emit(envConfig.socketEvents.connect);

  const channel = yield call(usersListeners, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function* disconnectUser() {
  socket.emit(envConfig.disconnect);
}

export default function* usersSaga() {
  yield takeLatest(UsersTypes.CONNECT_USER, connectUser);
  yield takeLatest(UsersTypes.DISCONNECT_USER, disconnectUser);
}
