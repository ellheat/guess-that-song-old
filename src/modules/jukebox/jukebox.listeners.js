import { eventChannel } from 'redux-saga';
import { JukeboxActions } from './jukebox.redux';

function getPlaylist(emit, socket) {
  socket.on(process.env.REACT_APP_SOCKET_EVENT_GET_PLAYLIST, (data) => {
    emit(JukeboxActions.getPlaylistSuccess(data));
  });
}

export function jukeboxListeners(socket) {
  return eventChannel(emit => {
    getPlaylist(emit, socket);
    return () => {};
  });
}
