import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { get } from '../../utils/fetch';
import { fetchUser } from '../../redux/modules/app/user';
import Toast from '../../utils/toaster';


function* fetchUserIterator() {
  try {
    const data = yield call(get, '/user/me');
    yield put(fetchUser.success(data));
  } catch (e) {
    yield call([Toast, Toast.red], { message: 'Looks like server is down. Try again later' });
    yield call(console.log, e);
    yield put(fetchUser.failure());
  }
}

function* fetchUserSaga() {
  yield takeLatest(
    fetchUser.REQUEST,
    fetchUserIterator
  );
}


export default function* () {
  yield all([
    fork(fetchUserSaga)
  ]);
}
