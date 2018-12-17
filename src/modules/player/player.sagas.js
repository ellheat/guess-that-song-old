import { put, takeLatest, call, take, select } from 'redux-saga/effects';
import { PlayerTypes } from './player.redux';
import { playerListeners } from './player.listeners';
import { selectMultiplayerSocket } from '../socket/socket.selectors';

export function* connectPlayer({ namespace }) {
  let socket = null;

  if (namespace === process.env.REACT_APP_SOCKET_NAME_MULTIPLAYER) {
    socket = yield select(selectMultiplayerSocket);
  }

  socket.io.emit(process.env.REACT_APP_SOCKET_EVENT_CONNECT);

  const channel = yield call(playerListeners, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export default function* playerSaga() {
  yield takeLatest(PlayerTypes.CONNECT, connectPlayer);
}
