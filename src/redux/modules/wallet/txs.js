import { from } from 'seamless-immutable';
import { createReducer, createAction, createAsyncAction } from '../../../utils/actions';

export const FETCH_TXS = 'wallet/txs/FETCH_TXS';
export const START_TXS_POLLING = 'wallet/txs/START_TXS_POLLING';
export const END_TXS_POLLING = 'wallet/txs/END_TXS_POLLING';

export const fetchTxs = createAsyncAction(FETCH_TXS);
export const startTxsPolling = createAction(START_TXS_POLLING);
export const endTxsPolling = createAction(END_TXS_POLLING);

const initialState = from({
  fetching: false,
  polling: false,
  txs: []
});

export default createReducer({
  [fetchTxs.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [fetchTxs.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      txs: payload
    })
  ),

  [fetchTxs.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [START_TXS_POLLING]: (state) => (
    state.merge({
      polling: true
    })
  ),

  [END_TXS_POLLING]: (state) => (
    state.merge({
      polling: false
    })
  )
}, initialState);
