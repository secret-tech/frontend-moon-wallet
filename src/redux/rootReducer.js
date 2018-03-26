import { combineReducers, routerReducer as routing } from 'redux-seamless-immutable';
import { reducer as form } from 'redux-form';

import app from './modules/app/app';
import user from './modules/app/user';
import theme from './modules/app/theme';

import signIn from './modules/auth/signIn';
import signUp from './modules/auth/signUp';
import resetPassword from './modules/auth/resetPassword';

import walletsList from './modules/wallets/walletsList';
import createWallet from './modules/wallets/createWallet';
import editWallet from './modules/wallets/editWallet';
import exportWallet from './modules/wallets/exportWallet';
import importWallet from './modules/wallets/importWallet';

import txs from './modules/wallet/txs';
import balances from './modules/wallet/balances';
import selectedWallet from './modules/wallet/selectedWallet';
import depositFunds from './modules/wallet/depositFunds';
import transferFunds from './modules/wallet/transferFunds';
import txDetails from './modules/wallet/txDetails';

import changePassword from './modules/settings/changePassword';
import registerCustomToken from './modules/settings/registerCustomToken';

export default combineReducers({
  routing,
  form,

  app: combineReducers({
    app,
    user,
    theme
  }),

  auth: combineReducers({
    signIn,
    signUp,
    resetPassword
  }),

  wallets: combineReducers({
    walletsList,
    createWallet,
    editWallet,
    exportWallet,
    importWallet
  }),

  wallet: combineReducers({
    txs,
    balances,
    selectedWallet,
    depositFunds,
    transferFunds,
    txDetails
  }),

  settings: combineReducers({
    changePassword,
    registerCustomToken
  })
});
