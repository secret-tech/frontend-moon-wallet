import { setTimeout } from 'timers';

const me = {
  wallets: [
    {
      ticker: 'ETH',
      address: '0xdb369b56BA7b07cF287f611Fbf0DAA4A8a4C2751',
      tokens: [
        {
          contractAddress: '0xc31382ef54b77be67605980197b76a40417b5a74',
          name: 'My Token',
          symbol: 'SAV',
          decimals: 18
        }
      ]
    }
  ],
  preferences: {
    notifications: {
      user_signin: false,
      user_change_password: false,
      user_reset_password: true
    },
    verifications: {
      user_signin: false,
      user_change_password: false,
      transaction_send: true
    }
  },
  email: 'existing@test.com',
  name: 'John Smith',
  defaultVerificationMethod: 'email'
};

const walletsList = [
  {
    id: '0x001',
    name: 'My awesome wallet',
    address: '0xa27d9c3959db67a4f608650b491C0c157e627091',
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
    address: '0xba770c7e4f9d6535b0f56ead596e3791c9cca4f6',
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
    address: '0x4bc7a1dbafa927017d584d155f677cd22cf27f69',
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
    address: '0xb0c8beb8571b911cabf0159be13758b546607de9',
    color: 4,
    icon: 4,
    balances: []
  }
];

const txsList1 = [
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

const txsList2 = [
  {
    direction: 'out',
    value: '1240000000',
    symbol: 'XNN',
    txHash: '0x0123456789ababab1235758ab4',
    status: 'failure',
    date: 1516041312
  }
];

const txsList3 = [
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
  }
];

const txsList4 = [];

const balances1 = [
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
];

const balances2 = [
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
];

const balances3 = [
  {
    symbol: 'DASH',
    value: '1238.48457493'
  }
];

const balances4 = [];

const initTransferFunds = {
  verification: {
    verificationId: '7fa96769-7bcc-4705-b544-02a83707cfc8',
    method: 'google'
  }
};

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

const initSignUp = {
  verification: {
    id: '3ed09e0a-72e1-417b-a05c-f0f08a5e1ffa',
    method: 'email'
  },
  email: 'ortga@gmail.com',
  name: 'John Smith',
  agreeTos: true,
  isVerified: false,
  defaultVerificationMethod: 'email'
};

const verifySignUp = {
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhYTQzMzA0LTNhMTEtNDNkNy05NjNhLTRmNDA0OTY2MDVmMyIsImxvZ2luIjoidGVzdEB0ZXN0LmNvbSIsImRldmljZUlkIjoiZGV2aWNlIiwianRpIjoiM2FhNDMzMDQtM2ExMS00M2Q3LTk2M2EtNGY0MDQ5NjYwNWYzZGV2aWNlMTUwNzcxOTg1MzcwNiIsImlhdCI6MTUwNzcxOTg1MzcwNiwic3ViIjoiNWJiMzg5NzEtMWYyMi00Zjk5LWE5MDQtNjJmYjQ0NDMwYWI0IiwiYXVkIjoiamluY29yLmNvbSIsImV4cCI6MTUwNzcyMDQ1ODUwNn0.vaZtMpPlPZDSLCVpMMC2dpCvbSram9mXNBPAaxSupKc'
};

const getMock = (path) => {
  console.log(`[GET] ${path}`);
  switch (path) {
    case '/user/me':
      return me;
    case '/user/wallets':
      return walletsList;
    case '/wallet/transactions/0xa27d9c3959db67a4f608650b491C0c157e627091':
      return txsList1;
    case '/wallet/transactions/0xba770c7e4f9d6535b0f56ead596e3791c9cca4f6':
      return txsList2;
    case '/wallet/transactions/0x4bc7a1dbafa927017d584d155f677cd22cf27f69':
      return txsList3;
    case '/wallet/transactions/0xb0c8beb8571b911cabf0159be13758b546607de9':
      return txsList4;
    case '/wallet/balances/0xa27d9c3959db67a4f608650b491C0c157e627091':
      return balances1;
    case '/wallet/balances/0xba770c7e4f9d6535b0f56ead596e3791c9cca4f6':
      return balances2;
    case '/wallet/balances/0x4bc7a1dbafa927017d584d155f677cd22cf27f69':
      return balances3;
    case '/wallet/balances/0xb0c8beb8571b911cabf0159be13758b546607de9':
      return balances4;
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
    case '/user/signUp/initiate':
      return initSignUp;
    case '/user/signUp/verify':
      return verifySignUp;
    case '/wallet/transfer/initiate':
      return initTransferFunds;
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
    }, 1500);
  });

export const post = (basePath, body) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(postMock(basePath, body));
    }, 1500);
  });

export const put = (basePath, body) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(putMock(basePath, body));
    }, 1500);
  });
