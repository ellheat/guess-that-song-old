const { getPlaylist } = require('../../../utils/spotify');

let TRACKS_ANSWER_ARRAY = [];

const getTracksWithPreviewUrl = () => {
  TRACKS_ANSWER_ARRAY = getPlaylist().filter(track => track.preview_url);
};

module.exports = {
  getTracksWithPreviewUrl,
};
