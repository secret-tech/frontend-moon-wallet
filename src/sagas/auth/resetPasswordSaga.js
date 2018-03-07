import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { SubmissionError } from 'redux-form';
import { post } from '../../utils/fetch';
import { namedRoutes } from '../../routes';

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
    if (e.error.isJoi) {
      yield put(initResetPassword.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(initResetPassword.failure(new SubmissionError({
        _error: e.message
      })));
    }
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
    if (e.error.isJoi) {
      yield put(verifyResetPassword.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(verifyResetPassword.failure(new SubmissionError({
        _error: e.message
      })));
    }
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
    yield put(push(namedRoutes.signIn));
  } catch (e) {
    if (e.error.isJoi) {
      yield put(setNewPassword.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(setNewPassword.failure(new SubmissionError({
        _error: e.message
      })));
    }
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
