const { TRACKS_ARRAY } = require('../../../utils/spotify');

let TRACKS_ANSWER_ARRAY = [];

const getTracksWithPreviewUrl = () => {
  console.log(TRACKS_ARRAY);
  console.log(TRACKS_ANSWER_ARRAY);
  TRACKS_ANSWER_ARRAY = TRACKS_ARRAY.filter(track => track.preview_url);
};

module.exports = {
  getTracksWithPreviewUrl,
};
