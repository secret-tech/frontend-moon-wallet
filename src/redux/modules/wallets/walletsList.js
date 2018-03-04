import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction } from '../../../utils/actions';

export const FETCH_WALLETS = 'wallets/walletsList/FETCH_WALLETS';

export const fetchWallets = createAsyncAction(FETCH_WALLETS);

const initialState = from({
  fetching: false,
  wallets: []
});

export default createReducer({
  [fetchWallets.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [fetchWallets.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      wallets: payload
    })
  ),

  [fetchWallets.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),
}, initialState);
