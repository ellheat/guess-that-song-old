import { put, takeLatest } from 'redux-saga/effects';
import { SocketTypes, SocketActions } from './socket.redux';
import Socket from '../../services/socket';

const socket = new Socket();

export function* initializeSocket({ namespace }) {
  socket.initialize(namespace);
  yield put(SocketActions.initializeSuccess(socket.io));
}

export function* destroySocket({ namespace }) {
  socket.destroy();
  yield put(SocketActions.destroySuccess(namespace));
}

export default function* socketSaga() {
  yield takeLatest(SocketTypes.INITIALIZE, initializeSocket);
  yield takeLatest(SocketTypes.DESTROY, destroySocket);
}
