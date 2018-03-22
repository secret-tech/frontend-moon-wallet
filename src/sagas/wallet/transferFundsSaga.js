import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { post } from '../../utils/fetch';
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
    yield put(initTransferFunds.failure(e));
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
    yield put(resetStore());
  } catch (e) {
    yield put(verifyTransferFunds.failure(e));
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
