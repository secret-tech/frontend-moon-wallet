import React from 'react';

import WalletsList from '../../../containers/wallets/WalletsList';
import WalletsPopups from '../../../containers/wallets/WalletsPopups';
import WalletsControls from '../../../containers/wallets/WalletsControls';

import s from './styles.css';

const Wallets = () => (
  <div className={s.wallets}>
    <div className={s.title}>
      <h1>Wallets</h1>

      <WalletsControls/>
    </div>

    <div className={s.body}>
      <WalletsList/>
    </div>

    <WalletsPopups/>
  </div>
);

export default Wallets;
