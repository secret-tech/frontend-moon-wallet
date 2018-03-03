import { combineReducers, routerReducer as routing } from 'redux-seamless-immutable';
import { reducer as form } from 'redux-form';

import app from './modules/app/app';

import walletsList from './modules/wallets/walletsList';

export default combineReducers({
  routing,
  form,

  app: combineReducers({
    app
  }),

  auth: combineReducers({}),

  wallets: combineReducers({
    walletsList
  }),

  singleWallet: combineReducers({}),

  settings: combineReducers({})
});
