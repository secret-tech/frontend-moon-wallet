import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { post } from '../../utils/fetch';
import Toast from '../../utils/toaster';
import * as routes from '../../routes';

import {
  initResetPassword,
  verifyResetPassword,
  setNewPassword,
  changeStep,
  resetStore
} from '../../redux/modules/auth/resetPassword';


function* initResetPasswordIterator({ payload }) {
  try {
    const { verification } = yield call(post, '/user/resetPassword/initiate', payload);
    const body = { verification, email: payload.email };
    yield put(initResetPassword.success(body));
    yield put(changeStep('verifyResetPassword'));
  } catch (e) {
    yield call([Toast, Toast.red], { message: e.message });
    yield put(initResetPassword.failure());
  }
}

function* initResetPasswordSaga() {
  yield takeLatest(
    initResetPassword.REQUEST,
    initResetPasswordIterator
  );
}


function* verifyResetPasswordIterator({ payload }) {
  try {
    const { resetId } = yield call(post, '/user/resetPassword/verify', payload);
    yield put(verifyResetPassword.success(resetId));
    yield put(changeStep('setNewPassword'));
  } catch (e) {
    yield call([Toast, Toast.red], { message: e.message });
    yield put(verifyResetPassword.failure());
  }
}

function* verifyResetPasswordSaga() {
  yield takeLatest(
    verifyResetPassword.REQUEST,
    verifyResetPasswordIterator
  );
}


function* setNewPasswordIterator({ payload }) {
  try {
    yield call(post, '/user/resetPassword/enter', payload);
    yield put(setNewPassword.success());
    yield put(resetStore());
    yield put(push(routes.SIGN_IN));
    yield call([Toast, Toast.green], { message: 'Password was changed successfully!' });
  } catch (e) {
    yield call([Toast, Toast.red], { message: e.message });
    yield put(setNewPassword.failure());
  }
}

function* setNewPasswordSaga() {
  yield takeLatest(
    setNewPassword.REQUEST,
    setNewPasswordIterator
  );
}


export default function* () {
  yield all([
    fork(initResetPasswordSaga),
    fork(verifyResetPasswordSaga),
    fork(setNewPasswordSaga)
  ]);
}
