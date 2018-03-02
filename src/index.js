import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import 'normalize.css';
import './assets/main.css';
import './assets/fonts/Roboto/stylesheet.css';

import configureStore, { history } from './redux/configureStore';
import routes from './routes';

const store = configureStore({});

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {routes}
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

if (module.hot) {
  module.hot.accept('./routes', () => {
    render(require('./routes').default);
  });
}
