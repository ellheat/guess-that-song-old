const USERS_LIST = [];


const addUser = (user) => {
  USERS_LIST.push(user);
};
const removeUser = () => {

};

const getUsersList = () => {
  return USERS_LIST;
};

module.exports = {
  addUser,
  removeUser,
  getUsersList,
};
