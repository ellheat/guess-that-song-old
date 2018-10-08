import envConfig from 'env-config';
import { eventChannel } from 'redux-saga';
import { UsersActions } from './users.redux';

function addUser(emit, socket) {
  socket.io.on(envConfig.socketEvents.addUser, (data) => {
    emit(UsersActions.connectUserSuccess(data));
  });
}

function getUsersList(emit, socket) {
  socket.io.on(envConfig.socketEvents.usersLists, (data) => {
    emit(UsersActions.getUsersList(data));
  });
}

export function usersListeners(socket) {
  return eventChannel(emit => {
    addUser(emit, socket);
    getUsersList(emit, socket);
    return () => {};
  });
}
