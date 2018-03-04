import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction } from '../../../utils/actions';

export const FETCH_TXS = 'wallet/txs/FETCH_TXS';

export const fetchTxs = createAsyncAction(FETCH_TXS);

const initialState = from({
  fetching: false,
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
}, initialState);
