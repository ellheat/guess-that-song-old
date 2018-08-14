const express = require('express');
const socketio = require('socket.io');
const colors = require('colors');

const port = require('./config/ports');
const socket = require('./config/sockets');

const app = express();
const io = socketio.listen(app.listen(port.sockets));


colors.setTheme({
  success: 'green',
  warn: 'yellow',
  error: 'red',
});

io.sockets.on(socket.connection, () => {
  console.log('user connected'.success); // eslint-disable-line
});

app.listen(port.api, () => console.log(`Backend listening on port ${port.api}!`.success)); // eslint-disable-line
