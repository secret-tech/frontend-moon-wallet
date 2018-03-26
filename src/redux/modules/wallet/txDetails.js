import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_TX_DETAILS_POPUP = 'wallet/txDetails/OPEN_TX_DETAILS_POPUP';
export const CLOSE_TX_DETAILS_POPUP = 'wallet/txDetails/CLOSE_TX_DETAILS_POPUP';

export const openTxDetailsPopup = createAction(OPEN_TX_DETAILS_POPUP);
export const closeTxDetailsPopup = createAction(CLOSE_TX_DETAILS_POPUP);

const initialState = from({
  popupIsOpen: false,
  id: '',
  transactionHash: '',
  timestamp: '',
  blockNumber: '',
  contractAddress: '',
  from: '',
  to: '',
  amount: '',
  status: '',
  type: '',
  direction: '',
  token: {
    contractAddress: '',
    symbol: '',
    name: '',
    decimals: ''
  }
});

export default createReducer({
  [OPEN_TX_DETAILS_POPUP]: (state, { payload }) => (
    state.merge({
      popupIsOpen: true,
      ...payload
    })
  ),

  [CLOSE_TX_DETAILS_POPUP]: (state) => (
    state.merge(initialState)
  )
}, initialState);
