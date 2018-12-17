const { namespace } = require('../server/socket');

const USER_LIST = {
  [namespace.multiplayer]: [],
  [namespace.speed]: [],
};

const addUser = (user, id, namespace) => {
  user.id = id;
  USER_LIST[namespace].push(user);
  console.log(`${user.name} has joined - ${namespace.replace('/', '')}`.information); // eslint-disable-line
};

const removeUser = (id, namespace) => new Promise((resolve) => {
  const removedUser = USER_LIST[namespace].find(user => user.id === id);
  USER_LIST[namespace].splice(USER_LIST[namespace].indexOf(removedUser), 1);
  resolve(removedUser.name);
});

const getUserList = (namespace) => {
  return USER_LIST[namespace];
};

module.exports = {
  addUser,
  removeUser,
  getUserList,
};
