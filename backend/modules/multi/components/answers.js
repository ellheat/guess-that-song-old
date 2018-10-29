const { TRACKS_ARRAY } = require('../../../utils/spotify');

let TRACKS_ANSWER_ARRAY = [];

const getTracksWithPreviewUrl = () => {
  TRACKS_ANSWER_ARRAY = TRACKS_ARRAY.filter(track => track.preview_url);
};

module.exports = {
  getTrackWithPreviewUrl,
};
