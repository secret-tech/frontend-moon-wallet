import { createReducer, createAction } from '../../../utils/actions';

export const SELECT_WALLET = 'wallet/selectedWallet/SELECT_WALLET';

export const selectWallet = createAction(SELECT_WALLET);

const initialState = '';

export default createReducer({
  [SELECT_WALLET]: (state, { payload }) => payload
}, initialState);
