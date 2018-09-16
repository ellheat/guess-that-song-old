require('./config/colors');

const express = require('express');
const socketio = require('socket.io');

const port = require('./config/ports');
const socket = require('./config/sockets');

const app = express();
const io = socketio.listen(app.listen(port.sockets));


io.sockets.on(socket.connection, (e) => {
  console.log('user connected'.success, e); // eslint-disable-line
});

app.listen(port.api, () => console.log(`Backend listening on port ${port.api}!`.success)); // eslint-disable-line
