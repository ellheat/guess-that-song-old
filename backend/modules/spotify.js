const spotifyKeys = require('../json/spotify');
const SpotifyWebApi = require('spotify-web-api-node');


const spotifyApi = new SpotifyWebApi({
  clientId: spotifyKeys.clientId,
  clientSecret: spotifyKeys.clientSecret,
});

const getSpotifyToken = () => new Promise((resolve, reject) => {
  spotifyApi.clientCredentialsGrant().then(
    data => {
      spotifyApi.setAccessToken(data.body.access_token);
      resolve();
    },
    err => {
      console.log('Something went wrong!', err); // eslint-disable-line
      reject();
    }
  );
});

const getPlaylist = () => new Promise((resolve, reject) => {
  spotifyApi.getPlaylistTracks('77wVSZr3D0umeAvvMyeBGA', {
    offset: 1,
    limit: 1,
    fields: 'items',
  }).then(
    data => resolve(data.body),
    err => {
      console.log('Something went wrong!', err); // eslint-disable-line
      reject();
    }
  );
});


module.exports = {
  getSpotifyToken,
  getPlaylist,
};
