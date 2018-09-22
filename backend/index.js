require('./config/colors');

const express = require('express');
const socketio = require('socket.io');

const port = require('./config/ports');
const socket = require('./config/sockets');

const { characterPicker, getCharacters } = require('./config/characters');

const app = express();
const io = socketio.listen(app.listen(port.sockets));

io.sockets.on(socket.connection, () => {
  let character = characterPicker();
  io.sockets.emit(socket.join, character);
  console.log(`${character.name} connected`.success); // eslint-disable-line
});

app.listen(port.api, () => {
  console.log(`Backend listening on port ${port.api}!`.success);
  getCharacters().then(() => console.log('Characters created'));
}); // eslint-disable-line
