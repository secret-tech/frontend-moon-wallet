import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { post } from '../../utils/fetch';
import Toast from '../../utils/toaster';
import { initCreateWallet } from '../../redux/modules/wallets/createWallet';


function* initCreateWalletIterator({ payload }) {
  try {
    yield call(post, '/user/wallets', payload);
    yield put(initCreateWallet.success());
    yield call([Toast, Toast.green], { message: 'Wallet created!' });
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
