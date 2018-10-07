import envConfig from 'env-config';
import io from 'socket.io-client';

export const socket = io(`${envConfig.url}:${envConfig.socketPort}`);
