import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { removeToken, setToken, getToken, isAuth } from '../../utils/auth';
import { get } from '../../utils/fetch';
import Toast from '../../utils/toaster';
import * as routes from '../../routes';

import {
  login,
  setAuthState,
  LOGIN,
  CHECK_AUTH,
  LOGOUT,
  fetchUser,
  logout
} from '../../redux/modules/app/app';


function* loginIterator({ payload: token }) {
  yield call(setToken, token);
  yield put(setAuthState({ authorized: true, token }));
}

function* loginSaga() {
  yield takeLatest(
    LOGIN,
    loginIterator
  );
}


function* checkAuthIterator() {
  const auth = yield call(isAuth);

  if (auth) {
    const token = yield call(getToken);
    yield put(login(token));
  } else {
    yield put(setAuthState({ authorized: false, token: '' }));
  }
}

function* checkAuthSaga() {
  yield takeLatest(
    CHECK_AUTH,
    checkAuthIterator
  );
}


function* logoutIterator() {
  yield call(removeToken);
  yield put(setAuthState({ authorized: false, token: '' }));
  yield put(push(routes.SIGN_IN));
}

function* logoutSaga() {
  yield takeLatest(
    LOGOUT,
    logoutIterator
  );
}


function* fetchUserIterator() {
  try {
    const data = yield call(get, '/user/me');
    yield put(fetchUser.success(data));
  } catch (e) {
    if (e.status === 401) {
      yield put(logout());
    } else {
      yield call([Toast, Toast.red], { message: 'Looks like server is down. Try again later' });
      yield call(console.log, e);
      yield put(fetchUser.failure());
    }
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
    fork(loginSaga),
    fork(checkAuthSaga),
    fork(logoutSaga),
    fork(fetchUserSaga)
  ]);
}
