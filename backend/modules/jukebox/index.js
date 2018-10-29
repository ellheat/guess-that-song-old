const { socket, event } = require('../../server/socket');
const { TRACKS_ARRAY } = require('../../utils/spotify');

socket.jukebox.on(event.connect, (e) => {
  console.log('somebody join to jukebox');
  console.log('TRACKS_ARRAY.length', TRACKS_ARRAY.length);
  e.emit(event.getPlaylist, TRACKS_ARRAY);
});

