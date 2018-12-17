const { socket, event, namespace } = require('../../server/socket');
const { characterPicker } = require('../../config/characters');
const { addUser, removeUser, getUserList } = require('../../components/users');


socket.multiplayer.on(event.connect, (e) => {
  const character = characterPicker();

  addUser(character, e.client.id, namespace.multiplayer);

  e.emit(event.addPlayer, character);
  socket.multiplayer.emit(event.playerList, getUserList(namespace.multiplayer));

  e.on(event.disconnect, () => {
    removeUser(e.client.id, namespace.multiplayer).then((characterName) => {
      socket.multiplayer.emit(event.playerList, getUserList(namespace.multiplayer));
      console.log(`${characterName} has been disconnected - ${namespace.multiplayer.replace('/', '')}`.warning); // eslint-disable-line
    });
  });
});
