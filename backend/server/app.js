const express = require('express');
const port = require('../config/ports');
const app = express();

const { getCharacters } = require('../config/characters');
const { getSpotifyToken, fetchPlaylist } = require('../utils/spotify');


const configureServer = () => new Promise((resolve) => {
  app.listen(port.api, () => {
    console.log(`Backend listening on port ${port.api}!`.success); // eslint-disable-line
    getCharacters().then(() => console.log('Characters created'.success)); // eslint-disable-line
    getSpotifyToken().then(() => {
      console.log('Spotify token created'.success); // eslint-disable-line
      fetchPlaylist().then(() => resolve());
    });
  });
});


module.exports = {
  app,
  port,
  configureServer,
};
