import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_DEPOSIT_FUNDS_POPUP = 'wallet/depositFunds/OPEN_DEPOSIT_FUNDS_POPUP';
export const CLOSE_DEPOSIT_FUNDS_POPUP = 'wallets/depositFunds/CLOSE_DEPOSIT_FUNDS_POPUP';

export const openDepositFundsPopup = createAction(OPEN_DEPOSIT_FUNDS_POPUP);
export const closeDepositFundsPopup = createAction(CLOSE_DEPOSIT_FUNDS_POPUP);

const initialState = from({
  popupIsOpen: false
});

export default createReducer({
  [OPEN_DEPOSIT_FUNDS_POPUP]: (state) => (
    state.merge({
      popupIsOpen: true
    })
  ),

  [CLOSE_DEPOSIT_FUNDS_POPUP]: (state) => (
    state.merge({
      popupIsOpen: false
    })
  )
}, initialState);
