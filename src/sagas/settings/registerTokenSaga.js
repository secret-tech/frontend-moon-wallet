import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { get, post } from '../../utils/fetch';

import { fetchTokenInfo, registerToken, changeStep, resetStore } from '../../redux/modules/settings/registerCustomToken';


function* fetchTokenInfoIterator({ payload }) {
  try {
    const data = yield call(get, `/dashboard/erc20TokenInfo?contractAddress=${payload.contractAddress}`);
    yield put(fetchTokenInfo.success(data));
    yield put(changeStep('registerToken'));
  } catch (e) {
    yield call(console.log, e);
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
  } catch (e) {
    yield call(console.log, e);
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
