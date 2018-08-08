import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { post } from '../../utils/fetch';
import Toast from '../../utils/toaster';

import { initCreateWallet } from '../../redux/modules/wallets/createWallet';


function* initCreateWalletIterator({ payload }) {
  try {
    yield call(post, '/user/me/wallets', payload);
    yield put(initCreateWallet.success());
    yield call([Toast, Toast.green], { message: 'Wallet created!' });
  } catch (e) {
    yield call([Toast, Toast.red], { message: e.message });
    yield put(initCreateWallet.failure());
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
