import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { get } from '../../utils/fetch';
import { fetchTxs } from '../../redux/modules/wallet/txs';


function* fetchTxsIterator({ payload }) {
  try {
    const data = yield call(get, `/wallet/transactions/${payload}`);
    yield put(fetchTxs.success(data));
  } catch (e) {
    yield put(fetchTxs.failure(e));
  }
}

function* fetchTxsSaga() {
  yield takeLatest(
    fetchTxs.REQUEST,
    fetchTxsIterator
  );
}


export default function* () {
  yield all([
    fork(fetchTxsSaga)
  ]);
}
