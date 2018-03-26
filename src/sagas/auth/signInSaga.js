import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { post } from '../../utils/fetch';

import { initSignIn, verifySignIn, changeStep, resetStore } from '../../redux/modules/auth/signIn';
import { login } from '../../redux/modules/app/app';
import Toast from '../../utils/toaster';


function* initSignInIterator({ payload }) {
  try {
    const data = yield call(post, '/user/login/initiate', payload);
    yield put(initSignIn.success(data.verification));
    yield put(changeStep('verifySignIn'));
  } catch (e) {
    if (e.error.isJoi) {
      yield call([Toast, Toast.red], { message: e.error.details[0].message });
      yield put(initSignIn.failure());
    } else {
      yield call([Toast, Toast.red], { message: e.message });
      yield put(initSignIn.failure());
    }
  }
}

function* initSignInSaga() {
  yield takeLatest(
    initSignIn.REQUEST,
    initSignInIterator
  );
}


function* verifySignInIterator({ payload }) {
  try {
    const data = yield call(post, '/user/login/verify', payload);
    yield put(verifySignIn.success());
    yield put(login(data.accessToken));
    yield put(resetStore());
    yield put(push('/wallets'));
  } catch (e) {
    if (e.error.isJoi) {
      yield call([Toast, Toast.red], { message: e.error.details[0].message });
      yield put(verifySignIn.failure());
    } else {
      yield call([Toast, Toast.red], { message: e.message });
      yield put(verifySignIn.failure());
    }
  }
}

function* verifySignInSaga() {
  yield takeLatest(
    verifySignIn.REQUEST,
    verifySignInIterator
  );
}


export default function* () {
  yield all([
    fork(initSignInSaga),
    fork(verifySignInSaga)
  ]);
}
