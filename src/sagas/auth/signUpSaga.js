import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { post } from '../../utils/fetch';

import { initSignUp, verifySignUp, changeStep, resetStore } from '../../redux/modules/auth/signUp';
import { login } from '../../redux/modules/app/app';


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
    yield put(initSignUp.failure(e));
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
    yield put(push('/app/wallets'));
  } catch (e) {
    yield put(verifySignUp.failure(e));
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
