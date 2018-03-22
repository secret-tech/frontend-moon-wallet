import { from } from 'seamless-immutable';
import { createReducer, createAction, createAsyncAction } from '../../../utils/actions';

export const FETCH_BALANCES = 'wallet/balances/FETCH_BALANCES';
export const START_BALANCES_POLL = 'wallet/balances/START_BALANCES_POLL';
export const END_BALANCES_POLL = 'wallet/balances/END_BALANCES_POLL';

export const fetchBalances = createAsyncAction(FETCH_BALANCES);
export const startBalancesPoll = createAction(START_BALANCES_POLL);
export const endBalancesPoll = createAction(END_BALANCES_POLL);

const initialState = from({
  fetching: false,
  polling: false,
  ethBalance: '0',
  erc20TokensBalance: []
});

export default createReducer({
  [fetchBalances.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [fetchBalances.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      ...payload
    })
  ),

  [fetchBalances.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [START_BALANCES_POLL]: (state) => (
    state.merge({
      polling: true
    })
  ),

  [END_BALANCES_POLL]: (state) => (
    state.merge({
      polling: false
    })
  )
}, initialState);
