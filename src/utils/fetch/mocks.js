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

const initSignIn = {
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhYTQzMzA0LTNhMTEtNDNkNy05NjNhLTRmNDA0OTY2MDVmMyIsImxvZ2luIjoidGVzdEB0ZXN0LmNvbSIsImRldmljZUlkIjoiZGV2aWNlIiwianRpIjoiM2FhNDMzMDQtM2ExMS00M2Q3LTk2M2EtNGY0MDQ5NjYwNWYzZGV2aWNlMTUwNzcxOTg1MzcwNiIsImlhdCI6MTUwNzcxOTg1MzcwNiwic3ViIjoiNWJiMzg5NzEtMWYyMi00Zjk5LWE5MDQtNjJmYjQ0NDMwYWI0IiwiYXVkIjoiamluY29yLmNvbSIsImV4cCI6MTUwNzcyMDQ1ODUwNn0.vaZtMpPlPZDSLCVpMMC2dpCvbSram9mXNBPAaxSupKc',
  isVerified: false,
  verification: {
    verificationId: '7fa96769-7bcc-4705-b544-02a83707cfc8',
    method: 'email'
  }
};

const verifySignIn = {
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhYTQzMzA0LTNhMTEtNDNkNy05NjNhLTRmNDA0OTY2MDVmMyIsImxvZ2luIjoidGVzdEB0ZXN0LmNvbSIsImRldmljZUlkIjoiZGV2aWNlIiwianRpIjoiM2FhNDMzMDQtM2ExMS00M2Q3LTk2M2EtNGY0MDQ5NjYwNWYzZGV2aWNlMTUwNzcxOTg1MzcwNiIsImlhdCI6MTUwNzcxOTg1MzcwNiwic3ViIjoiNWJiMzg5NzEtMWYyMi00Zjk5LWE5MDQtNjJmYjQ0NDMwYWI0IiwiYXVkIjoiamluY29yLmNvbSIsImV4cCI6MTUwNzcyMDQ1ODUwNn0.vaZtMpPlPZDSLCVpMMC2dpCvbSram9mXNBPAaxSupKc',
  isVerified: false
};

const getMock = (path) => {
  console.log(`[GET] ${path}`);
  switch (path) {
    case '/user/wallets':
      return walletsList;
    case '/wallet/transactions':
      return transactionsList;
    case '/wallet/transactionsEmpty':
      return [];
    default:
      throw new Error('[ERR] mock for this route not specified');
  }
};

const postMock = (path, body) => {
  console.log('[POST]', path, body);
  switch (path) {
    case '/user/signIn/initiate':
      return initSignIn;
    case '/user/signIn/verify':
      return verifySignIn;
    default:
      return null;
  }
};


const putMock = (path, body) => {
  console.log(`[PUT] ${path}`, body);
  switch (path) {
    default:
      throw new Error('[ERR] mock fot this route not specified');
  }
};

export const get = (basePath) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(getMock(basePath));
    }, 2500);
  });

export const post = (basePath, body) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(postMock(basePath, body));
    }, 2500);
  });

export const put = (basePath, body) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(putMock(basePath, body));
    }, 2500);
  });
