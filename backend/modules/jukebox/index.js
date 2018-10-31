const { socket, event } = require('../../server/socket');
const { getPlaylist } = require('../../utils/spotify');

socket.jukebox.on(event.connect, (e) => {
  console.log('somebody join to jukebox');
  console.log('TRACKS_ARRAY.length', getPlaylist().length);
  e.emit(event.getPlaylist, getPlaylist());
});

