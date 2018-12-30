import { put, takeLatest, call, take, select } from 'redux-saga/effects';
import { PlayerActions, PlayerTypes } from './player.redux';
import { playerListeners } from './player.listeners';
import { selectMultiplayer } from '../pusher/pusher.selectors';
import api from '../../services/api';

export function* connectPlayer({ namespace }) {
  try {
    let pusher = null;

    if (namespace === process.env.REACT_APP_SOCKET_NAME_MULTIPLAYER) {
      pusher = yield select(selectMultiplayer);
    }

    const { data } = yield api.get('/multiplayer/connect');
    yield put(PlayerActions.connectSuccess(data));

    const channel = yield call(playerListeners, pusher);
    while (true) {
      const action = yield take(channel);
      yield put(action);
    }
  } catch (e) {
    console.log(e); // eslint-disable-line
  }
}

export default function* playerSaga() {
  yield takeLatest(PlayerTypes.CONNECT, connectPlayer);
}
