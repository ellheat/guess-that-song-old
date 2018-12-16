import axios from 'axios';
import { when, pipe, is, not, evolve } from 'ramda';
import { decamelizeKeys, camelizeKeys } from 'humps';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

api.interceptors.request.use(evolve({
  data: when(pipe(is(FormData), not), decamelizeKeys),
}), (error) => Promise.reject(error));

api.interceptors.response.use(evolve({
  data: camelizeKeys,
}), (error) => {
  return Promise.reject(error);
});

export default api;
