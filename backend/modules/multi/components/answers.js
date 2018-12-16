const { getPlaylist } = require('../../../utils/spotify');

const getTracksWithPreviewUrl = () => {
  TRACKS_ANSWER_ARRAY = getPlaylist().filter(track => track.preview_url);
};

module.exports = {
  getTracksWithPreviewUrl,
};
