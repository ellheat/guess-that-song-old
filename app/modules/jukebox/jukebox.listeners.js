import envConfig from 'env-config';
import { eventChannel } from 'redux-saga';
import { JukeboxActions } from './jukebox.redux';

function getPlaylist(emit, socket) {
  socket.io.on(envConfig.socket.event.getPlaylist, (data) => {
    emit(JukeboxActions.getPlaylistSuccess(data));
  });
}

export function jukeboxListeners(socket) {
  return eventChannel(emit => {
    getPlaylist(emit, socket);
    return () => {};
  });
}
