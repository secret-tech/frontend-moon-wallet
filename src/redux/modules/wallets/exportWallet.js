import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_EXPORT_WALLET_POPUP = 'wallets/exportWallet/OPEN_EXPORT_WALLET_POPUP';
export const CLOSE_EXPORT_WALLET_POPUP = 'wallets/exportWallet/CLOSE_EXPORT_WALLET_POPUP';

export const openExportWalletPopup = createAction(OPEN_EXPORT_WALLET_POPUP);
export const closeExportWalletPopup = createAction(CLOSE_EXPORT_WALLET_POPUP);

const initialState = from({
  popupIsOpen: false,
  walletAddress: ''
});

export default createReducer({
  [OPEN_EXPORT_WALLET_POPUP]: (state, { payload }) => (
    state.merge({
      popupIsOpen: true,
      walletAddress: payload
    })
  ),

  [CLOSE_EXPORT_WALLET_POPUP]: (state) => (
    state.merge({
      popupIsOpen: false
    })
  )
}, initialState);
