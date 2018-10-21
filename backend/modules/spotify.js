const concat = require('lodash.concat');
const spotifyKeys = require('../json/spotify');
const SpotifyWebApi = require('spotify-web-api-node');

let TRACKS_ARRAY = [];
let OFFSET = 0;
const LIMIT = 100;


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

const getPlaylistCountTotalItems = () => new Promise((resolve, reject) => {
  spotifyApi.getPlaylist(spotifyKeys.playlistId, {
    fields: 'tracks',
  }).then(
    data => resolve(data.body.tracks.total),
    err => {
      console.log('Something went wrong!', err); // eslint-disable-line
      reject();
    }
  );
});

const getPlaylistItems = () => new Promise((resolve, reject) => {
  spotifyApi.getPlaylistTracks(spotifyKeys.playlistId, {
    offset: OFFSET,
    limit: LIMIT,
    fields: 'items',
  }).then(
    data => {
      OFFSET += LIMIT;
      TRACKS_ARRAY = concat(TRACKS_ARRAY, data.body.items.filter(item => item.track.preview_url));
      resolve();
    },
    err => {
      console.log('Something went wrong!', err); // eslint-disable-line
      reject();
    }
  );
});

const getPlaylistAllItems = (totalPlaylistTracks) => new Promise(async (resolve) => {
  while (OFFSET <= totalPlaylistTracks) {
    await getPlaylistItems();
  }
  resolve();
});

const getPlaylist = () => new Promise(async () => {
  await getPlaylistCountTotalItems().then(async (totalPlaylistTracks) => {
    console.log(`All playlist tracks: ${totalPlaylistTracks}`.information); // eslint-disable-line
    await getPlaylistAllItems(totalPlaylistTracks);
  });
  console.log(`Downloaded tracks: ${TRACKS_ARRAY.length}`.information); // eslint-disable-line
});


module.exports = {
  getSpotifyToken,
  getPlaylist,
};
