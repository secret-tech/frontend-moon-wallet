import { from } from 'seamless-immutable';
import { createReducer, createAction, createSubmitAction } from '../../../utils/actions';

export const OPEN_CHANGE_PASSWORD_POPUP = 'settings/changePassword/OPEN_CHANGE_PASSWORD_POPUP';
export const CLOSE_CHANGE_PASSWORD_POPUP = 'settings/changePassword/CLOSE_CHANGE_PASSWORD_POPUP';
export const TOGGLE_CHANGE_PASSWORD_POPUP = 'settings/changePassword/TOGGLE_CHANGE_PASSWORD_POPUP';
export const INIT_CHANGE_PASSWORD = 'settings/changePassword/INIT_CHANGE_PASSWORD';
export const VERIFY_CHANGE_PASSWORD = 'settings/changePassword/VERIFY_CHANGE_PASSWORD';
export const CHANGE_STEP = 'settings/changePassword/CHANGE_STEP';
export const RESET_STORE = 'settings/changePassword/RESET_STORE';

export const openChangePasswordPopup = createAction(OPEN_CHANGE_PASSWORD_POPUP);
export const closeChangePasswordPopup = createAction(CLOSE_CHANGE_PASSWORD_POPUP);
export const toggleChangePasswordPopup = createAction(TOGGLE_CHANGE_PASSWORD_POPUP);
export const initChangePassword = createSubmitAction(INIT_CHANGE_PASSWORD);
export const verifyChangePassword = createSubmitAction(VERIFY_CHANGE_PASSWORD);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  popupIsOpen: false,
  fetching: false,
  step: 'initChangePassword',
  verification: {
    verificationId: '',
    method: 'email'
  }
});

export default createReducer({
  [OPEN_CHANGE_PASSWORD_POPUP]: (state) => (
    state.merge({
      popupIsOpen: true
    })
  ),

  [CLOSE_CHANGE_PASSWORD_POPUP]: (state) => (
    state.merge({
      popupIsOpen: false
    })
  ),

  [TOGGLE_CHANGE_PASSWORD_POPUP]: (state) => (
    state.merge({
      popupIsOpen: !state.popupIsOpen
    })
  ),

  [initChangePassword.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [initChangePassword.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      verification: payload
    })
  ),

  [initChangePassword.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifyChangePassword.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [verifyChangePassword.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifyChangePassword.FAILURE]: (state) => (
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
