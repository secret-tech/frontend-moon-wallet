import React from 'react';

import Balances from '../../../containers/wallet/Balances';

import s from './styles.css';

const Wallet = () => (
  <div className={s.container}>
    <div className={s.body}>
      <main className={s.main}>main</main>
      <aside className={s.sidebar}>
        <Balances/>
      </aside>
    </div>
  </div>
);

export default Wallet;
