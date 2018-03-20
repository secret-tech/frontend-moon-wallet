import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { FocusStyleManager } from '@blueprintjs/core';

import 'normalize.css';
import '@blueprintjs/core/dist/blueprint.css';
import './assets/main.css';
import './assets/fonts/Roboto/stylesheet.css';

import configureStore, { history } from './redux/configureStore';
import App from './containers/app/App';

const store = configureStore({});

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App/>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

FocusStyleManager.onlyShowFocusOnTabs();

if (module.hot) {
  module.hot.accept('./containers/app/App', () => {
    render(require('./containers/app/App').default);
  });
}
