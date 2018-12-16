import { put, takeLatest, call, take, select } from 'redux-saga/effects';
import { SongsTypes } from './songs.redux';
import { songsListeners } from './songs.listeners';
import { SocketActions } from '../socket/socket.redux';
import { selectSocket } from '../socket/socket.selectors';

export function* getSong() {
  const socket = yield select(selectSocket);

  yield put(SocketActions.createSocket(socket.io));
  const channel = yield call(songsListeners, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export default function* songsSaga() {
  yield takeLatest(SongsTypes.GET_SONG, getSong);
}
