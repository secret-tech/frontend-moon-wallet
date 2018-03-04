import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_EDIT_WALLET_POPUP = 'wallets/editWallet/OPEN_EDIT_WALLET_POPUP';
export const CLOSE_EDIT_WALLET_POPUP = 'wallets/editWallet/CLOSE_EDIT_WALLET_POPUP';

export const openEditWalletPopup = createAction(OPEN_EDIT_WALLET_POPUP);
export const closeEditWalletPopup = createAction(CLOSE_EDIT_WALLET_POPUP);

const initialState = from({
  popupIsOpen: false,
  walletAddress: ''
});

export default createReducer({
  [OPEN_EDIT_WALLET_POPUP]: (state, { payload }) => (
    state.merge({
      popupIsOpen: true,
      walletAddress: payload
    })
  ),

  [CLOSE_EDIT_WALLET_POPUP]: (state) => (
    state.merge({
      popupIsOpen: false
    })
  )
}, initialState);
