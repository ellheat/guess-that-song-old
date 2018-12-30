const express = require('express');
const router = express.Router(); // eslint-disable-line

const { endpoint } = require('../../server/routes');
const { pusher, event, namespace } = require('../../server/pusher');
const { characterPicker } = require('../../config/characters');
const { addUser, removeUser, getUserList } = require('../../components/users');

let i = 0;

router.get(endpoint.connect, (req, res) => {
  const character = characterPicker();

  i += 1;

  addUser(character, i, namespace.multiplayer);
  res.status(200).send(character);

  pusher.trigger(namespace.multiplayer, event.playerList, getUserList(namespace.multiplayer));
  //
  // e.on(event.disconnect, () => {
  //   removeUser(e.client.id, namespace.multiplayer).then((characterName) => {
  //     pusher.trigger(namespace.multiplayer, event.playerList, getUserList(namespace.multiplayer));
  //     console.log(`${characterName} has been disconnected - ${namespace.multiplayer.replace('/', '')}`.warning); // eslint-disable-line
  //   });
  // });
});

module.exports = router;
