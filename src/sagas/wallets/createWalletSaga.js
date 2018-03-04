import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { post } from '../../utils/fetch';
import { initCreateWallet } from '../../redux/modules/wallets/createWallet';


function* initCreateWalletIterator({ payload }) {
  try {
    yield call(post, '/user/wallets', payload);
    yield put(initCreateWallet.success());
  } catch (e) {
    yield put(initCreateWallet.failure(e));
  }
}

function* initCreateWalletSaga() {
  yield takeLatest(
    initCreateWallet.REQUEST,
    initCreateWalletIterator
  );
}


export default function* () {
  yield all([
    fork(initCreateWalletSaga)
  ]);
}
