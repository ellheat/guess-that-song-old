const { router } = require('../../server/app');
const { spotifyAuthorization } = require('../../utils/spotify');

router.get('/authorize', (req, res) => {
  spotifyAuthorization().then(data => {
    res.send(data);
  });
});
