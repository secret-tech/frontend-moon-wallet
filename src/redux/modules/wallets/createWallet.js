import { from } from 'seamless-immutable';
import { createReducer, createAction, createSubmitAction } from '../../../utils/actions';

export const OPEN_CREATE_WALLET_POPUP = 'wallets/createWallet/OPEN_CREATE_WALLET_POPUP';
export const CLOSE_CREATE_WALLET_POPUP = 'wallets/createWallet/CLOSE_CREATE_WALLET_POPUP';
export const TOGGLE_CREATE_WALLET_POPUP = 'wallets/createWallet/TOGGLE_CREATE_WALLET_POPUP';
export const INIT_CREATE_WALLET = 'wallets/createWallet/CREATE_WALLET';

export const openCreateWalletPopup = createAction(OPEN_CREATE_WALLET_POPUP);
export const closeCreateWalletPopup = createAction(CLOSE_CREATE_WALLET_POPUP);
export const toggleCreateWalletPopup = createAction(TOGGLE_CREATE_WALLET_POPUP);
export const initCreateWallet = createSubmitAction(INIT_CREATE_WALLET);

const initialState = from({
  popupIsOpen: false,
  fetching: false
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
  ),

  [initCreateWallet.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [initCreateWallet.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [initCreateWallet.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  )
}, initialState);
