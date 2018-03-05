import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { get } from '../../utils/fetch';
import { fetchBalances } from '../../redux/modules/wallet/balances';


function* fetchBalancesIterator({ payload }) {
  try {
    const data = yield call(get, `/wallet/balances/${payload}`);
    yield put(fetchBalances.success(data));
  } catch (e) {
    yield put(fetchBalances.failure(e));
  }
}

function* fetchBalancesSaga() {
  yield takeLatest(
    fetchBalances.REQUEST,
    fetchBalancesIterator
  );
}


export default function* () {
  yield all([
    fork(fetchBalancesSaga)
  ]);
}
