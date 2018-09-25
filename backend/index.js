require('./config/colors');

const express = require('express');
const socketio = require('socket.io');

const port = require('./config/ports');
const socket = require('./config/sockets');

const { characterPicker, getCharacters } = require('./config/characters');

const app = express();
const io = socketio.listen(app.listen(port.sockets));

io.sockets.on(socket.connection, (e) => {
  let character = characterPicker();
  io.sockets.emit(socket.join, character);
  console.log(`${character.name} connected - (${e.handshake.headers['user-agent']})`.success); // eslint-disable-line
});

app.listen(port.api, () => {
  console.log(`Backend listening on port ${port.api}!`.success); // eslint-disable-line
  getCharacters().then(() => console.log('Characters created'.success)); // eslint-disable-line
}); // eslint-disable-line
