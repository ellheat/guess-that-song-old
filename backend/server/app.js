const express = require('express');
const port = require('../config/ports');
const app = express();

const { getCharacters } = require('../config/characters');
const { getSpotifyToken, getPlaylist } = require('../utils/spotify');

app.listen(port.api, () => {
  console.log(`Backend listening on port ${port.api}!`.success); // eslint-disable-line
  getCharacters().then(() => console.log('Characters created'.success)); // eslint-disable-line
  getSpotifyToken().then(() => {
    console.log('Token created'.success); // eslint-disable-line
    getPlaylist();
  });
});

module.exports = {
  app,
  port,
};
