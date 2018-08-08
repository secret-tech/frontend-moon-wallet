import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { post } from '../../utils/fetch';

import { initSignUp, verifySignUp, changeStep, resetStore } from '../../redux/modules/auth/signUp';
import { login } from '../../redux/modules/app/app';
import Toast from '../../utils/toaster';
import * as routes from '../../routes';


function* initSignUpIterator({ payload }) {
  try {
    const data = yield call(post, '/user', payload);
    yield put(initSignUp.success(data.verification));
    yield put(changeStep('verifySignUp'));
  } catch (e) {
    yield call([Toast, Toast.red], { message: e.message });
    yield put(initSignUp.failure());
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
    yield put(push(routes.WALLETS));
  } catch (e) {
    yield call([Toast, Toast.red], { message: e.message });
    yield put(initSignUp.failure());
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
