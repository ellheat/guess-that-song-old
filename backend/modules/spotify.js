const concat = require('lodash.concat');
const spotifyKeys = require('../json/spotify');
const SpotifyWebApi = require('spotify-web-api-node');

let TRACKS_ARRAY = [];
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

const getPlaylistItems = (offset) => new Promise((resolve, reject) => {
  spotifyApi.getPlaylistTracks(spotifyKeys.playlistId, {
    offset,
    limit: LIMIT,
    fields: 'items',
  }).then(
    data => {
      const trackArrayWithShortInfo = data.body.items.map(item => {
        return {
          id: item.track.id,
          artist: item.track.artists[0].name,
          title: item.track.name,
          album: item.track.album.name,
          url: item.track.href,
          previewUrl: item.track.preview_url,
        };
      });
      TRACKS_ARRAY = concat(TRACKS_ARRAY, trackArrayWithShortInfo);
      resolve();
    },
    err => {
      console.log('Something went wrong!', err); // eslint-disable-line
      reject();
    }
  );
});

const getPlaylistAllItems = (totalPlaylistTracks) => new Promise(async (resolve) => {
  let offset = 0;
  while (offset <= totalPlaylistTracks) {
    await getPlaylistItems(offset);
    offset += LIMIT;
  }
  resolve();
});

const getPlaylist = () => new Promise(async () => {
  await getPlaylistCountTotalItems().then(async (totalPlaylistTracks) => {
    console.log(`All playlist tracks: ${totalPlaylistTracks}`.information); // eslint-disable-line
    await getPlaylistAllItems(totalPlaylistTracks);
  });
  console.log(TRACKS_ARRAY[0]); // eslint-disable-line
  console.log(`Downloaded tracks: ${TRACKS_ARRAY.length}`.information); // eslint-disable-line
});


module.exports = {
  getSpotifyToken,
  getPlaylist,
  TRACKS_ARRAY,
};
