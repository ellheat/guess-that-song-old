import { put, takeLatest } from 'redux-saga/effects';
import { SocketTypes, SocketActions } from './socket.redux';
import Socket from '../../services/socket';

const socket = new Socket();

export function* initializeSocket() {
  socket.initialize();
  yield put(SocketActions.initializeSuccess(socket.io));
}

export default function* socketSaga() {
  yield takeLatest(SocketTypes.INITIALIZE, initializeSocket);
}
