export default {
  baseURL: '/',
  socket: {
    port: 4444,
    namespace: {
      jukebox: '/jukebox',
      multi: '/multi',
      speed: '/speed',
    },
    event: {
      connect: 'connect',
      disconnect: 'disconnect',
      addUser: 'addUser',
      removeUser: 'removeUser',
      usersLists: 'usersLists',
      addPoints: 'addPoints',
      getSong: 'getSong',
      getPlaylist: 'getPlaylist',
    },
  },
};
