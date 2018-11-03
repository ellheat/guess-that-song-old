const { app, port } = require('./app');

const socketIO = require('socket.io');
const io = socketIO.listen(app.listen(port.sockets));

// namespace
const namespace = {
  jukebox: '/jukebox',
  multi: '/multi',
  speed: '/speed',
};

// sockets
const sockets = {
  jukebox: io.of(namespace.jukebox),
  multi: io.of(namespace.multi),
  speed: io.of(namespace.speed),
};

// events
const events = {
  connect: 'connect',
  disconnect: 'disconnect',
  addPlayer: 'addPlayer',
  removePlayer: 'removePlayer',
  playersList: 'playersList',
  addPoints: 'addPoints',
  getSong: 'getSong',
  getPlaylist: 'getPlaylist',
};

module.exports = {
  socket: sockets,
  event: events,
};
