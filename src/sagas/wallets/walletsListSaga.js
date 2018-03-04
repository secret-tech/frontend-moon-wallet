import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { get } from '../../utils/fetch';
import { fetchWallets } from '../../redux/modules/wallets/walletsList';


function* fetchWalletsIterator() {
  try {
    const data = yield call(get, '/user/wallets');
    yield put(fetchWallets.success(data));
  } catch (e) {
    yield put(fetchWallets.failure(e));
  }
}

function* fetchWalletsSaga() {
  yield takeLatest(
    fetchWallets.REQUEST,
    fetchWalletsIterator
  );
}


export default function* () {
  yield all([
    fork(fetchWalletsSaga)
  ]);
}
