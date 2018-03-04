import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_IMPORT_WALLET_POPUP = 'wallets/importWallet/OPEN_IMPORT_WALLET_POPUP';
export const CLOSE_IMPORT_WALLET_POPUP = 'wallets/importWallet/CLOSE_IMPORT_WALLET_POPUP';
export const TOGGLE_IMPORT_WALLET_POPUP = 'wallets/importWallet/TOGGLE_IMPORT_WALLET_POPUP';

export const openImportWalletPopup = createAction(OPEN_IMPORT_WALLET_POPUP);
export const closeImportWalletPopup = createAction(CLOSE_IMPORT_WALLET_POPUP);
export const toggleImportWalletPopup = createAction(TOGGLE_IMPORT_WALLET_POPUP);

const initialState = from({
  popupIsOpen: false
});

export default createReducer({
  [OPEN_IMPORT_WALLET_POPUP]: (state) => (
    state.merge({
      popupIsOpen: true
    })
  ),

  [CLOSE_IMPORT_WALLET_POPUP]: (state) => (
    state.merge({
      popupIsOpen: false
    })
  ),

  [TOGGLE_IMPORT_WALLET_POPUP]: (state) => (
    state.merge({
      popupIsOpen: !state.popupIsOpen
    })
  )
}, initialState);
