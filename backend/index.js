require('./config/colors');

const express = require('express');
const socketio = require('socket.io');

const port = require('./config/ports');
const socket = require('./config/sockets');

const { characterPicker, getCharacters } = require('./config/characters');
const { addUser, getUsersList } = require('./modules/users');

const app = express();
const io = socketio.listen(app.listen(port.sockets));

io.sockets.on(socket.connect, () => {
  let character = characterPicker();

  addUser(character);
  io.sockets.emit(socket.addUser, character);
  io.sockets.emit(socket.usersLists, getUsersList());

  io.sockets.emit(socket.join, character);
  console.log(`${character.name} connected - (${e.handshake.headers['user-agent']})`.success); // eslint-disable-line
});

io.sockets.on(socket.disconnect, () => {
  console.log(`${character.name} has been diconnected`.warning); // eslint-disable-line
});

app.listen(port.api, () => {
  console.log(`Backend listening on port ${port.api}!`.success); // eslint-disable-line
  getCharacters().then(() => console.log('Characters created'.success)); // eslint-disable-line
}); // eslint-disable-line
