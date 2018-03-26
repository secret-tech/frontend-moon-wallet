import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { post } from '../../utils/fetch';

import { initSignUp, verifySignUp, changeStep, resetStore } from '../../redux/modules/auth/signUp';
import { login } from '../../redux/modules/app/app';
import Toast from '../../utils/toaster';


function* initSignUpIterator({ payload }) {
  try {
    const body = {
      agreeTos: true,
      paymentPassword: '12345678', // TODO dont forget delete that shit :)
      ...payload
    };
    const data = yield call(post, '/user', body);
    yield put(initSignUp.success(data.verification));
    yield put(changeStep('verifySignUp'));
  } catch (e) {
    if (e.error.isJoi) {
      yield call([Toast, Toast.red], { message: e.error.details[0].message });
      yield put(initSignUp.failure());
    } else {
      yield call([Toast, Toast.red], { message: e.message });
      yield put(initSignUp.failure());
    }
  }
}

function* initSignUpSaga() {
  yield takeLatest(
    initSignUp.REQUEST,
    initSignUpIterator
  );
}


function* verifySignUpIterator({ payload }) {
  try {
    const data = yield call(post, '/user/activate', payload);
    yield put(verifySignUp.success());
    yield put(login(data.accessToken));
    yield put(resetStore());
    yield put(push('/wallets'));
  } catch (e) {
    if (e.error.isJoi) {
      yield call([Toast, Toast.red], { message: e.error.details[0].message });
      yield put(verifySignUp.failure());
    } else {
      yield call([Toast, Toast.red], { message: e.message });
      yield put(verifySignUp.failure());
    }
  }
}

function* verifySignUpSaga() {
  yield takeLatest(
    verifySignUp.REQUEST,
    verifySignUpIterator
  );
}


export default function* () {
  yield all([
    fork(initSignUpSaga),
    fork(verifySignUpSaga)
  ]);
}
