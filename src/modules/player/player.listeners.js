import { eventChannel } from 'redux-saga';
import { PlayerActions } from './player.redux';

function addPlayer(emit, pusher) {
  console.log('pusher', pusher);
  pusher.bind(process.env.REACT_APP_SOCKET_EVENT_ADD_PLAYER, (data) => {
    console.log('pusher addPlayer', data);
    emit(PlayerActions.connectSuccess(data));
  });
}

function getPlayerList(emit, pusher) {
  console.log('pusher', pusher);
  pusher.bind(process.env.REACT_APP_SOCKET_EVENT_PLAYER_LIST, (data) => {
    console.log('pusher getPlayerList', data);
    emit(PlayerActions.getListSuccess(data));
  });
}

export function playerListeners(pusher) {
  return eventChannel(emit => {
    getPlayerList(emit, pusher);
    return () => {};
  });
}
