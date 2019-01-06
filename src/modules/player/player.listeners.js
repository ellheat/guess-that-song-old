import { eventChannel } from 'redux-saga';
import { PlayerActions } from './player.redux';

function addPlayer(emit, socket) {
  socket.on(process.env.REACT_APP_SOCKET_EVENT_ADD_PLAYER, (data) => {
    emit(PlayerActions.connectSuccess(data));
  });
}

function getPlayerList(emit, socket) {
  socket.on(process.env.REACT_APP_SOCKET_EVENT_PLAYER_LIST, (data) => {
    emit(PlayerActions.getListSuccess(data));
  });
}

export function playerListeners(socket) {
  return eventChannel(emit => {
    addPlayer(emit, socket);
    getPlayerList(emit, socket);
    return () => {};
  });
}
