import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { get } from '../../utils/fetch';
import Toast from '../../utils/toaster';

import { fetchUser } from '../../redux/modules/app/user';
import { initCreateWallet } from '../../redux/modules/wallets/createWallet';


function* fetchUserIterator() {
  try {
    const data = yield call(get, '/user/me');
    yield put(fetchUser.success(data));
  } catch (e) {
    yield call([Toast, Toast.red], { message: 'Looks like server is down. Try again later' });
    yield put(fetchUser.failure());
  }
}

function* fetchUserSaga() {
  yield takeLatest(
    [
      fetchUser.REQUEST,
      initCreateWallet.SUCCESS
    ],
    fetchUserIterator
  );
}


export default function* () {
  yield all([
    fork(fetchUserSaga)
  ]);
}
