import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { post } from '../../utils/fetch';
import Toast from '../../utils/toaster';
import { initTransferFunds, verifyTransferFunds, changeStep, resetStore } from '../../redux/modules/wallet/transferFunds';


const transformTransferTokensData = (req) => {
  const res = {
    amount: Number(req.amount),
    mnemonic: req.mnemonic,
    to: req.to,
    from: req.from,
    paymentPassword: '12345678' // TODO remove payment password
  };

  if (req.currency === 'eth_transfer') {
    res.type = req.currency;
  } else {
    res.type = 'erc20_transfer';
    res.contractAddress = req.currency;
  }

  if (req.gas) {
    res.gas = String(req.gasAmount);
  }

  if (req.gasPrice) {
    res.gasPrice = String(req.gasPrice);
  }

  return res;
};

function* initTransferFundsIterator({ payload }) {
  try {
    const data = yield call(post, '/dashboard/transaction/initiate', transformTransferTokensData(payload));
    yield put(initTransferFunds.success(data));
    yield put(changeStep('verifyTransferFunds'));
  } catch (e) {
    yield call([Toast, Toast.red], { message: e.message });
    yield put(initTransferFunds.failure());
  }
}

function* initTransferFundsSaga() {
  yield takeLatest(
    initTransferFunds.REQUEST,
    initTransferFundsIterator
  );
}


function* verifyTransferFundsIterator({ payload }) {
  try {
    yield call(post, '/dashboard/transaction/verify', payload);
    yield put(verifyTransferFunds.success());
    yield call([Toast, Toast.green], { message: 'Transaction successfully created!' });
    yield put(resetStore());
  } catch (e) {
    yield call([Toast, Toast.red], { message: e.message });
    yield put(verifyTransferFunds.failure());
  }
}

function* verifyTransferFundsSaga() {
  yield takeLatest(
    verifyTransferFunds.REQUEST,
    verifyTransferFundsIterator
  );
}


export default function* () {
  yield all([
    fork(initTransferFundsSaga),
    fork(verifyTransferFundsSaga)
  ]);
}
