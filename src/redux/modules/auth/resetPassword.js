import { from } from 'seamless-immutable';
import { createReducer, createAction, createSubmitAction } from '../../../utils/actions';

export const INIT_RESET_PASSWORD = 'auth/resetPassword/INIT_RESET_PASSWORD';
export const VERIFY_RESET_PASSWORD = 'auth/resetPassword/VERIFY_RESET_PASSWORD';
export const SET_NEW_PASSWORD = 'auth/resetPassword/SET_NEW_PASSWORD';
export const CHANGE_STEP = 'auth/resetPassword/CHANGE_STEP';
export const RESET_STORE = 'auth/resetPassword/RESET_STORE';

export const initResetPassword = createSubmitAction(INIT_RESET_PASSWORD);
export const verifyResetPassword = createSubmitAction(VERIFY_RESET_PASSWORD);
export const setNewPassword = createSubmitAction(SET_NEW_PASSWORD);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  step: 'initResetPassword',
  fetching: false,
  email: '',
  code: '',
  resetId: '',
  verification: {
    verificationId: '',
    method: ''
  }
});

export default createReducer({
  [initResetPassword.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [initResetPassword.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      email: payload.email,
      verification: payload.verification
    })
  ),

  [initResetPassword.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifyResetPassword.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [verifyResetPassword.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      resetId: payload
    })
  ),

  [verifyResetPassword.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [setNewPassword.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [setNewPassword.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [setNewPassword.FAILURE]: (state) => (
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
