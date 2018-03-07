import { from } from 'seamless-immutable';
import { createReducer, createAction, createSubmitAction } from '../../../utils/actions';

export const OPEN_TRANSFER_FUNDS_POPUP = 'wallet/transferFunds/OPEN_TRANSFER_FUNDS_POPUP';
export const CLOSE_TRANSFER_FUNDS_POPUP = 'wallet/transferFunds/CLOSE_TRANSFER_FUNDS_POPUP';
export const INIT_TRANSFER_FUNDS = 'wallet/transferFunds/INIT_TRANSFER_FUNDS';
export const VERIFY_TRANSFER_FUNDS = 'wallet/transferFunds/VERIFY_TRANSFER_FUNDS';
export const CHANGE_STEP = 'wallet/transferFunds/CHANGE_STEP';
export const RESET_STORE = 'wallet/transferFunds/RESET_STORE';

export const openTransferFundsPopup = createAction(OPEN_TRANSFER_FUNDS_POPUP);
export const closeTransferFundsPopup = createAction(CLOSE_TRANSFER_FUNDS_POPUP);
export const initTransferFunds = createSubmitAction(INIT_TRANSFER_FUNDS);
export const verifyTransferFunds = createSubmitAction(VERIFY_TRANSFER_FUNDS);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  popupIsOpen: false,
  step: 'initTransferFunds',
  fetching: false,
  verification: {
    verificationId: '',
    method: 'email'
  }
});

export default createReducer({
  [OPEN_TRANSFER_FUNDS_POPUP]: (state) => (
    state.merge({
      popupIsOpen: true
    })
  ),

  [CLOSE_TRANSFER_FUNDS_POPUP]: (state) => (
    state.merge({
      popupIsOpen: false
    })
  ),

  [initTransferFunds.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [initTransferFunds.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      verification: payload.verification
    })
  ),

  [initTransferFunds.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifyTransferFunds.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [verifyTransferFunds.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifyTransferFunds.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [CHANGE_STEP]: (state, { payload }) => (
    state.merge({
      step: payload
    })
  ),

  [RESET_STORE]: (state) => state.merge(initialState)
}, initialState);
