import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { post } from '../../utils/fetch';

import { initChangePassword, verifyChangePassword, changeStep, resetStore } from '../../redux/modules/settings/changePassword';
import Toast from '../../utils/toaster';


function* initChangePasswordIterator({ payload }) {
  try {
    const data = yield call(post, '/user/me/changePassword/initiate', payload);
    yield put(initChangePassword.success(data.verification));
    yield put(changeStep('verifyChangePassword'));
  } catch (e) {
    yield call([Toast, Toast.red], { message: e.message });
    yield put(initChangePassword.failure());
  }
}

function* initChangePasswordSaga() {
  yield takeLatest(
    initChangePassword.REQUEST,
    initChangePasswordIterator
  );
}


function* verifyChangePasswordIterator({ payload }) {
  try {
    yield call(post, '/user/me/changePassword/verify', payload);
    yield put(verifyChangePassword.success());
    yield call([Toast, Toast.green], { message: 'Password successfully changed!' });
    yield put(resetStore());
  } catch (e) {
    yield call([Toast, Toast.red], { message: e.message });
    yield put(verifyChangePassword.failure());
  }
}

function* verifyChangePasswordSaga() {
  yield takeLatest(
    verifyChangePassword.REQUEST,
    verifyChangePasswordIterator
  );
}


export default function* () {
  yield all([
    fork(initChangePasswordSaga),
    fork(verifyChangePasswordSaga)
  ]);
}
