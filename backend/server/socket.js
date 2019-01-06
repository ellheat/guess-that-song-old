const { app, port } = require('./app');

const socketIO = require('socket.io');
const io = socketIO.listen(app.listen(port.sockets));

// namespace
const namespace = {
  jukebox: '/jukebox',
  multiplayer: '/multiplayer',
  speed: '/speed',
};

// sockets
const sockets = {
  jukebox: io.of(namespace.jukebox),
  multiplayer: io.of(namespace.multiplayer),
  speed: io.of(namespace.speed),
};

// events
const events = {
  connect: 'connect',
  disconnect: 'disconnect',
  addPlayer: 'addPlayer',
  removePlayer: 'removePlayer',
  playerList: 'playerList',
  addPoints: 'addPoints',
  getSong: 'getSong',
  getPlaylist: 'getPlaylist',
};

module.exports = {
  socket: sockets,
  event: events,
  namespace,
};
