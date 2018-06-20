import { from } from 'seamless-immutable';
import { createReducer, createAction, createAsyncAction } from '../../../utils/actions';

export const FETCH_TXS = 'wallet/txs/FETCH_TXS';
export const START_TXS_POLL = 'wallet/txs/START_TXS_POLL';
export const END_TXS_POLL = 'wallet/txs/END_TXS_POLL';

export const fetchTxs = createAsyncAction(FETCH_TXS);
export const startTxsPoll = createAction(START_TXS_POLL);
export const endTxsPoll = createAction(END_TXS_POLL);

const initialState = from({
  fetching: false,
  polling: false,
  count: 0,
  limit: 50,
  page: 0,
  data: []
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
      ...payload
    })
  ),

  [fetchTxs.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [START_TXS_POLL]: (state) => (
    state.merge({
      polling: true
    })
  ),

  [END_TXS_POLL]: (state) => (
    state.merge({
      polling: false
    })
  )
}, initialState);
