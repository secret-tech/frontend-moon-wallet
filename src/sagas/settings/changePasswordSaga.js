import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { post } from '../../utils/fetch';

import { initChangePassword, verifyChangePassword, changeStep, resetStore } from '../../redux/modules/settings/changePassword';


function* initChangePasswordIterator({ payload }) {
  try {
    const data = yield call(post, '/user/me/changePassword/initiate', payload);
    yield put(initChangePassword.success(data.verification));
    yield put(changeStep('verifyChangePassword'));
  } catch (e) {
    yield put(initChangePassword.failure(e));
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
    yield put(resetStore());
  } catch (e) {
    yield put(verifyChangePassword.failure(e));
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
