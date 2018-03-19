import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { post } from '../../utils/fetch';
import { initTransferFunds, verifyTransferFunds, changeStep, resetStore } from '../../redux/modules/wallet/transferFunds';


function* initTransferFundsIterator({ payload }) {
  try {
    const data = yield call(post, '/wallet/transfer/initiate', payload);
    yield put(initTransferFunds.success(data));
    yield put(changeStep('verifyTransferFunds'));
  } catch (e) {
    yield put(initTransferFunds.failure(e));
  }
}

function* initTransferFundsSaga() {
  yield takeLatest(
    initTransferFunds.REQUEST,
    initTransferFundsIterator
  );
}


function* verifyTransferFundsIterator({ payload }) {
  try {
    yield call(post, '/wallet/transfer/verify', payload);
    yield put(verifyTransferFunds.success());
    yield put(resetStore());
  } catch (e) {
    yield put(verifyTransferFunds.failure(e));
  }
}

function* verifyTransferFundsSaga() {
  yield takeLatest(
    verifyTransferFunds.REQUEST,
    verifyTransferFundsIterator
  );
}


export default function* () {
  yield all([
    fork(initTransferFundsSaga),
    fork(verifyTransferFundsSaga)
  ]);
}
