/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import React from 'react';
import ReactDOM from 'react-dom';

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';
import FontFaceObserver from 'fontfaceobserver';
import 'normalize.css/normalize.css';
import './theme/global';
import configureStore from './modules/store';
import UnsupportedBrowserDetection from './utils/unsupportedBrowserDetection';
import browserHistory from './utils/history';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const { store, persistor } = configureStore(initialState);

const render = () => {
  const NextApp = require('./routes').default;

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={browserHistory}>
          <NextApp />
        </Router>
      </PersistGate>
    </Provider>,
    document.getElementById('app')
  );
};

const initApp = async () => {
  const detection = new UnsupportedBrowserDetection();
  if (!detection.isSupported()) {
    return;
  }

  // Chunked polyfill for browsers without Intl support
  if (!window.Intl) {
    (new Promise((resolve) => {
      resolve(require('intl'));
    }))
      .then(() => Promise.all([
        require('intl/locale-data/jsonp/en.js'),
        require('intl/locale-data/jsonp/pl.js'),
      ]))
      .then(() => render())
      .catch((err) => {
        throw err;
      });
  } else {
    render();
  }
};

initApp();
