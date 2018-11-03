const USERS_LIST = [];


const addUser = (user, id) => {
  user.id = id;
  USERS_LIST.push(user);
};

const removeUser = (id) => new Promise((resolve) => {
  const removedUser = USERS_LIST.find(user => user.id === id);
  USERS_LIST.splice(USERS_LIST.indexOf(removedUser), 1);
  resolve(removedUser.name);
});

const getUsersList = () => {
  return USERS_LIST;
};

module.exports = {
  addUser,
  removeUser,
  getUsersList,
};
