import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import walletsListSaga from './wallets/walletsListSaga';

export default function* () {
  yield all([
    fork(formActionSaga),
    fork(walletsListSaga)
  ]);
}
