import envConfig from 'env-config';
import io from 'socket.io-client';


export default class Socket {
  socket = null;

  initialize() {
    this.socket = io(`${envConfig.url}:${envConfig.socket.port}`);
  }

  changeNamespace(namespace) {
    this.socket.nsp = namespace;
  }

  get io() {
    return this.socket;
  }
}
