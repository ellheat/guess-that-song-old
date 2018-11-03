import envConfig from 'env-config';
import { eventChannel } from 'redux-saga';
import { SongsActions } from './songs.redux';

function getSong(emit, socket) {
  socket.on(envConfig.socketEvents.getSong, (data) => {
    emit(SongsActions.getSongSuccess(data));
  });
}

export function songsListeners(socket) {
  return eventChannel(emit => {
    getSong(emit, socket);
    return () => {};
  });
}
