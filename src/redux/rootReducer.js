import { combineReducers, routerReducer as routing } from 'redux-seamless-immutable';
import { reducer as form } from 'redux-form';

import app from './modules/app/app';

import signIn from './modules/auth/signIn';

import walletsList from './modules/wallets/walletsList';
import createWallet from './modules/wallets/createWallet';
import editWallet from './modules/wallets/editWallet';
import exportWallet from './modules/wallets/exportWallet';
import importWallet from './modules/wallets/importWallet';

import txs from './modules/wallet/txs';

export default combineReducers({
  routing,
  form,

  app: combineReducers({
    app
  }),

  auth: combineReducers({
    signIn
  }),

  wallets: combineReducers({
    walletsList,
    createWallet,
    editWallet,
    exportWallet,
    importWallet
  }),

  wallet: combineReducers({
    txs
  }),

  settings: combineReducers({})
});
