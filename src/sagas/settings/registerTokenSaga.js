import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { get, post } from '../../utils/fetch';
import Toast from '../../utils/toaster';

import { fetchTokenInfo, registerToken, changeStep, resetStore } from '../../redux/modules/settings/registerCustomToken';
import { fetchBalances } from '../../redux/modules/wallet/balances';


function* fetchTokenInfoIterator({ payload }) {
  try {
    const data = yield call(get, `/dashboard/erc20TokenInfo?contractAddress=${payload.contractAddress}`);
    yield put(fetchTokenInfo.success(data));
    yield put(changeStep('registerToken'));
  } catch (e) {
    if (e.status === 404) {
      yield put(fetchTokenInfo.success(payload));
      yield put(changeStep('registerToken'));
    } else {
      yield call([Toast, Toast.red], { message: e.message });
      yield put(fetchTokenInfo.failure());
    }
  }
}

function* fetchTokenInfoSaga() {
  yield takeLatest(
    fetchTokenInfo.REQUEST,
    fetchTokenInfoIterator
  );
}


function* registerTokenIterator({ payload }) {
  try {
    yield call(post, '/user/me/erc20token/register', payload);
    yield put(registerToken.success());
    yield put(resetStore());
    yield put(fetchBalances(payload.walletAddress));
    yield call([Toast, Toast.green], { message: 'Token registered' });
  } catch (e) {
    yield call([Toast, Toast.red], { message: e.message });
    yield put(registerToken.failure());
  }
}

function* registerTokenSaga() {
  yield takeLatest(
    registerToken.REQUEST,
    registerTokenIterator
  );
}


export default function* () {
  yield all([
    fork(fetchTokenInfoSaga),
    fork(registerTokenSaga)
  ]);
}
