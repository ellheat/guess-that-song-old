import envConfig from 'env-config';
import io from 'socket.io-client';


export default class Socket {
  socket = null;

  initialize(namespace) {
    this.socket = io(`${envConfig.url}:${envConfig.socket.port}`);
    this.socket.nsp = namespace;
  }

  destroy() {
    this.socket.destroy();
  }

  get io() {
    return this.socket;
  }
}
