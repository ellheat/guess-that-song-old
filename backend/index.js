require('./config/colors');

const express = require('express');
const socketIO = require('socket.io');

const port = require('./config/ports');

const { characterPicker, getCharacters } = require('./config/characters');
const { addUser, removeUser, getUsersList } = require('./modules/users');
const { getSpotifyToken, getPlaylist } = require('./modules/spotify');

const app = express();
const io = socketIO.listen(app.listen(port.sockets));

const socket = new Socket(io);

socket.initialize();

io.sockets.on(socket.event.connect, (e) => {
  let character = characterPicker();

  addUser(character, e.client.id);
  e.emit(socket.event.addPlayer, character);
  io.sockets.emit(socket.event.playersList, getUsersList());

  e.on(socket.event.disconnect, () => {
    removeUser(e.client.id).then((characterName) => {
      io.sockets.emit(socket.event.playersList, getUsersList());
      console.log(`${characterName} has been disconnected`.warning); // eslint-disable-line
    });
  });

  console.log(`${character.name} connected`.success, `- (${e.handshake.headers['user-agent']})`); // eslint-disable-line
});

io.sockets.on(socket.event.disconnect, () => {
  console.log(`${character.name} has been diconnected`.warning); // eslint-disable-line
});

app.listen(port.api, () => {
  console.log(`Backend listening on port ${port.api}!`.success); // eslint-disable-line
  getCharacters().then(() => console.log('Characters created'.success)); // eslint-disable-line
  getSpotifyToken().then(() => {
    console.log('Token created'.success); // eslint-disable-line
    getPlaylist();
  });
});


modules.export = {
  app,
  port,
};
