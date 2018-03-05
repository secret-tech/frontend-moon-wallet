import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { post } from '../../utils/fetch';
import { initSignUp, verifySignUp, changeStep, resetStore } from '../../redux/modules/auth/signUp';


function* initSignUpIterator({ payload }) {
  try {
    const data = yield call(post, '/user/signUp/initiate', payload);
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
    yield call(post, '/user/signUp/verify', payload);
    yield put(verifySignUp.success());
    yield put(resetStore());
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
