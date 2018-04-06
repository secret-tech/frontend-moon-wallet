import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { FocusStyleManager } from '@blueprintjs/core';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import './assets/main.css';
import './assets/fonts/Roboto/stylesheet.css';

import configureStore, { history } from './redux/configureStore';
import Main from './containers/app/Main';

const store = configureStore({});

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Main/>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

FocusStyleManager.onlyShowFocusOnTabs();

if (module.hot) {
  module.hot.accept('./containers/app/Main', () => {
    render(require('./containers/app/Main').default);
  });
}
