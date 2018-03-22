import { from } from 'seamless-immutable';
import { createReducer, createAction, createSubmitAction } from '../../../utils/actions';

export const OPEN_REGISTER_TOKEN_POPUP = 'settings/registerCustomToken/OPEN_REGISTER_TOKEN_POPUP';
export const CLOSE_REGISTER_TOKEN_POPUP = 'settings/registerCustomToken/CLOSE_CHANGE_PASSWORD_POPUP';
export const FETCH_TOKEN_INFO = 'settings/registerCustomToken/FETCH_TOKEN_INFO';
export const REGISTER_TOKEN = 'settings/registerCustomToken/REGISTER_TOKEN';
export const CHANGE_STEP = 'settings/registerCustomToken/CHANGE_STEP';
export const RESET_STORE = 'settings/registerCustomToken/RESET_STORE';

export const openRegisterTokenPopup = createAction(OPEN_REGISTER_TOKEN_POPUP);
export const closeRegisterTokenPopup = createAction(CLOSE_REGISTER_TOKEN_POPUP);
export const fetchTokenInfo = createSubmitAction(FETCH_TOKEN_INFO);
export const registerToken = createSubmitAction(REGISTER_TOKEN);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  popupIsOpen: false,
  fetching: false,
  step: 'registerTokenAddress',
  token: {
    contractAddress: '',
    name: '',
    symbol: '',
    decimals: 18
  }
});

export default createReducer({
  [OPEN_REGISTER_TOKEN_POPUP]: (state) => (
    state.merge({
      popupIsOpen: true
    })
  ),

  [CLOSE_REGISTER_TOKEN_POPUP]: (state) => state.merge(initialState),

  [fetchTokenInfo.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [fetchTokenInfo.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      token: payload
    })
  ),

  [fetchTokenInfo.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [registerToken.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [registerToken.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [registerToken.FAILURE]: (state) => (
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
