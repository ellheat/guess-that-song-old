const { socket, event } = require('../../server/socket');
const { getPlaylist } = require('../../utils/spotify');

socket.jukebox.on(event.connect, (e) => {
  e.emit(event.getPlaylist, getPlaylist());
});

