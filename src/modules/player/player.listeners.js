import { eventChannel } from 'redux-saga';
import { PlayerActions } from './player.redux';

function getPlayerList(emit, pusher) {
  console.log('getPlayerList');
  pusher.bind(process.env.REACT_APP_SOCKET_EVENT_PLAYER_LIST, (data) => {
    console.log('pusher', pusher);
    emit(PlayerActions.getListSuccess(data));
  });
}

export function playerListeners(pusher) {
  return eventChannel(emit => {
    getPlayerList(emit, pusher);
    return () => {};
  });
}
