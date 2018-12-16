import { eventChannel } from 'redux-saga';
import { SongsActions } from './songs.redux';

function getSong(emit, socket) {
  socket.on(process.env.REACT_APP_SOCKET_EVENT_GET_SONG, (data) => {
    emit(SongsActions.getSongSuccess(data));
  });
}

export function songsListeners(socket) {
  return eventChannel(emit => {
    getSong(emit, socket);
    return () => {};
  });
}
