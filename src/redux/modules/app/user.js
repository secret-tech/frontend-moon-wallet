import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction } from '../../../utils/actions';

export const FETCH_USER = 'app/user/FETCH_USER';

export const fetchUser = createAsyncAction(FETCH_USER);

const initialState = from({
  fetching: false,
  wallets: [],
  email: '',
  name: '',
  defaultVerificationMethod: 'email'
});

export default createReducer({
  [fetchUser.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [fetchUser.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      ...payload
    })
  ),

  [fetchUser.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),
}, initialState);
