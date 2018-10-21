export default {
  baseURL: '/',
  socketPort: 4444,
  socketEvents: {
    connect: 'connect',
    disconnect: 'disconnect',
    addUser: 'addUser',
    removeUser: 'removeUser',
    usersLists: 'usersLists',
    addPoints: 'addPoints',
    getSong: 'getSong',
  },
};
