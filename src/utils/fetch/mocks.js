import { setTimeout } from 'timers';

const walletsList = [
  {
    id: '0x001',
    name: 'My awesome wallet',
    address: '0x2AE99c889ea685F314fE8Bfb80787F1E500f31D1',
    color: 1,
    icon: 1,
    balances: [
      {
        symbol: 'ETH',
        value: '14.123456789123456789'
      },
      {
        symbol: 'JCR',
        value: '192938.987654321123456789'
      },
      {
        symbol: 'XNN',
        value: '19000000'
      },
      {
        symbol: 'B2B',
        value: '123.123123123123'
      },
      {
        symbol: 'STAR',
        value: '102384.1238390483'
      },
      {
        symbol: 'LTC',
        value: '38848.3838238487598'
      },
      {
        symbol: 'BTC',
        value: '1.39485923823903'
      },
      {
        symbol: 'DASH',
        value: '1238.48457493'
      }
    ]
  },
  {
    id: '0x002',
    name: 'My another wallet',
    address: '0x2AE99c889ea685F314fE8Bfb80787F1E500f31D2',
    color: 2,
    icon: 2,
    balances: [
      {
        symbol: 'LTC',
        value: '38848.3838238487598'
      },
      {
        symbol: 'BTC',
        value: '1.39485923823903'
      },
      {
        symbol: 'DASH',
        value: '1238.48457493'
      }
    ]
  },
  {
    id: '0x003',
    name: 'Untitled wallet',
    address: '0x2AE99c889ea685F314fE8Bfb80787F1E500f31D3',
    color: 3,
    icon: 3,
    balances: [
      {
        symbol: 'DASH',
        value: '1238.48457493'
      }
    ]
  },
  {
    id: '0x003',
    name: 'Empty wallet',
    address: '0x2AE99c889ea685F314fE8Bfb80787F1E500f31D4',
    color: 4,
    icon: 4,
    balances: []
  }
];

const transactionsList = [
  {
    direction: 'in',
    value: '19',
    symbol: 'ETH',
    txHash: '0x0123456789ababab1235758ab2',
    status: 'pending',
    date: 1520086973
  },
  {
    direction: 'out',
    value: '234',
    symbol: 'JCR',
    txHash: '0x0123456789ababab1235758ab3',
    status: 'success',
    date: 1519479863
  },
  {
    direction: 'out',
    value: '1240000000',
    symbol: 'XNN',
    txHash: '0x0123456789ababab1235758ab4',
    status: 'failure',
    date: 1516041312
  }
];

const getMock = (path) => {
  console.log(`GET ${path}`);
  switch (path) {
    case '/user/wallets':
      return walletsList;
    case '/wallet/transactions':
      return transactionsList;
    case '/wallet/transactionsEmpty':
      return [];
    default:
      return 'mock for this GET route not specified';
  }
};

const postMock = (path, body) => {
  console.log(`POST ${path}`, body);
  switch (path) {
    default:
      return 'mock for this POST route not specified';
  }
};


const putMock = (path, body) => {
  console.log(`PUT ${path}`, body);
  switch (path) {
    default:
      return 'mock fot this PUT route not specified';
  }
};

export const get = (basePath) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(getMock(basePath));
    }, 1000);
  });

export const post = (basePath, path, body) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(postMock(path, body));
    }, 1000);
  });

export const put = (path, body) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(putMock(path, body));
    }, 1000);
  });
