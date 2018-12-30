const Pusher = require('pusher');
const pusherKeys = require('../json/pusher');

const pusher = new Pusher({
  appId: pusherKeys.appId,
  key: pusherKeys.key,
  secret: pusherKeys.secretKey,
  cluster: 'eu',
  useTLS: true,
});

// namespace
const namespace = {
  jukebox: 'jukebox',
  multiplayer: 'multiplayer',
  speed: 'speed',
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
  pusher,
  event: events,
  namespace,
};
