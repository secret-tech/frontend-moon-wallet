import React from 'react';

import Balances from '../../../containers/wallet/Balances';
import Txs from '../../../containers/wallet/Txs';

import s from './styles.css';

const Wallet = () => (
  <div className={s.container}>
    <div className={s.body}>
      <main className={s.main}>
        <h1>Transactions</h1>
        <Txs/>
      </main>
      <aside className={s.sidebar}>
        <Balances/>
      </aside>
    </div>
  </div>
);

export default Wallet;
