require('./config/colors');

const { configureServer } = require('./server/app');

configureServer().then(() => {
  require('./routes');
  require('./modules');
});
