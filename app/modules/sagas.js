import { all, fork } from 'redux-saga/effects';
import usersSaga from './users/users.sagas';
//<-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
  yield all([
    fork(usersSaga),
    //<-- INJECT MODULE SAGA -->
  ]);
}
