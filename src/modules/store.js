import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';
import createCompressor from 'redux-persist-transform-compress';
import { Iterable } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import createReducer, { records } from './reducers';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['locales'],
  transforms: [
    immutableTransform({ records }),
    createCompressor(),
  ],
};

export default function configureStore(initialState = {}) {
  const persistedReducer = persistReducer(persistConfig, createReducer());
  const middlewares = [
    sagaMiddleware,
  ];

  const enhancers = [];

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  } else if (process.env.NODE_ENV === 'development') {
    const stateTransformer = (state) => {
      const result = {};
      for (const property in state) {
        if (state.hasOwnProperty(property) && Iterable.isIterable(state[property])) {
          result[property] = state[property].toJS();
        } else {
          result[property] = state[property];
        }
      }
      return result;
    };

    middlewares.push(createLogger({ stateTransformer }));
  }

  const store = createStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers,
    )
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const createReducers = require('./reducers').default;
      const nextReducers = createReducers(store.asyncReducers);

      store.replaceReducer(nextReducers);
    });
  }

  return { store, persistor };
}
