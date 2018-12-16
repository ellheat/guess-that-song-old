const promptDirectory = require('inquirer-directory');

const addReduxModuleGenerator = require('./config/plop/reduxModule');
const addReduxContainerGenerator = require('./config/plop/reduxContainer');
const addReactComponentGenerator = require('./config/plop/reactComponent');

module.exports = function (plop) {
  plop.setPrompt('directory', promptDirectory);

  addReduxModuleGenerator(plop);
  addReduxContainerGenerator(plop);
  addReactComponentGenerator(plop);
};
