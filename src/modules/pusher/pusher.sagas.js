import { put, takeLatest } from 'redux-saga/effects';
import { PusherTypes, PusherActions } from './pusher.redux';
import Pusher from '../../services/pusher';

const pusher = new Pusher();

export function* initializePusher({ namespace }) {
  pusher.initialize(namespace);
  yield put(PusherActions.initializeSuccess({ pusher: pusher.pusherJS, namespace }));
}

export function* destroyPusher({ namespace }) {
  pusher.destroy();
  yield put(PusherActions.destroySuccess(namespace));
}

export default function* socketSaga() {
  yield takeLatest(PusherTypes.INITIALIZE, initializePusher);
  yield takeLatest(PusherTypes.DESTROY, destroyPusher);
}
