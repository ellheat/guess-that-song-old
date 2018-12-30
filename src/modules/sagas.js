import { all, fork } from 'redux-saga/effects';
import pusherSaga from './pusher/pusher.sagas';
import playerSaga from './player/player.sagas';
import jukeboxSaga from './jukebox/jukebox.sagas';


export default function* rootSaga() {
  yield all([
    fork(pusherSaga),
    fork(playerSaga),
    fork(jukeboxSaga),
  ]);
}
