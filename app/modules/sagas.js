import { all, fork } from 'redux-saga/effects';
import usersSaga from './users/users.sagas';
import songsSaga from './songs/songs.sagas';
//<-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
  yield all([
    fork(usersSaga),
    fork(songsSaga),
    //<-- INJECT MODULE SAGA -->
  ]);
}
