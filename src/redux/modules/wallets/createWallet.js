import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_CREATE_WALLET_POPUP = 'wallets/createWallet/OPEN_CREATE_WALLET_POPUP';
export const CLOSE_CREATE_WALLET_POPUP = 'wallets/createWallet/CLOSE_CREATE_WALLET_POPUP';
export const TOGGLE_CREATE_WALLET_POPUP = 'wallets/createWallet/TOGGLE_CREATE_WALLET_POPUP';

export const openCreateWalletPopup = createAction(OPEN_CREATE_WALLET_POPUP);
export const closeCreateWalletPopup = createAction(CLOSE_CREATE_WALLET_POPUP);
export const toggleCreateWalletPopup = createAction(TOGGLE_CREATE_WALLET_POPUP);

const initialState = from({
  popupIsOpen: false
});

export default createReducer({
  [OPEN_CREATE_WALLET_POPUP]: (state) => (
    state.merge({
      popupIsOpen: true
    })
  ),

  [CLOSE_CREATE_WALLET_POPUP]: (state) => (
    state.merge({
      popupIsOpen: false
    })
  ),

  [TOGGLE_CREATE_WALLET_POPUP]: (state) => (
    state.merge({
      popupIsOpen: !state.popupIsOpen
    })
  )
}, initialState);
