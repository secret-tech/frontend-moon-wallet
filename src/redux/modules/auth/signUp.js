import { from } from 'seamless-immutable';
import { createReducer, createAction, createSubmitAction } from '../../../utils/actions';

export const INIT_SIGN_UP = 'auth/signUp/INIT_SIGN_IN';
export const VERIFY_SIGN_UP = 'auth/signUp/VERIFY_SIGN_UP';
export const CHANGE_STEP = 'auth/signUp/CHANGE_STEP';
export const RESET_STORE = 'auth/signUp/RESET_STORE';

export const initSignUp = createSubmitAction(INIT_SIGN_UP);
export const verifySignUp = createSubmitAction(VERIFY_SIGN_UP);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  step: 'initSignUp',
  fetching: false,
  verification: {
    verificationId: '',
    method: ''
  }
});

export default createReducer({
  [CHANGE_STEP]: (state, { payload }) => (
    state.merge({
      step: payload
    })
  ),

  [RESET_STORE]: (state) => state.merge(initialState),

  [initSignUp.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [initSignUp.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      verification: payload
    })
  ),

  [initSignUp.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifySignUp.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [verifySignUp.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifySignUp.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  )
}, initialState);
