const socketIO = require('socket.io');
const { app, port } = require('../index');


const io = socketIO.listen(app.listen(port.sockets));

// module namespace
const namespace = {
  jukebox: 'jukebox',
  multi: 'multi',
  speed: 'speed',
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
};

// sockets
const sockets = {
  jukebox: io.of(namespace.jukebox),
  multi: io.of(namespace.multi),
  speed: io.of(namespace.speed),
};

module.exports = {
  socket: sockets,
  event: events,
};
