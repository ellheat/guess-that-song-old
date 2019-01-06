import { all, fork } from 'redux-saga/effects';
import socketSaga from './socket/socket.sagas';
import playerSaga from './player/player.sagas';
import jukeboxSaga from './jukebox/jukebox.sagas';


export default function* rootSaga() {
  yield all([
    fork(socketSaga),
    fork(playerSaga),
    fork(jukeboxSaga),
  ]);
}
