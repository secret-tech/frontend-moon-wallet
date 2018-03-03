import React from 'react';
import { Button } from '@blueprintjs/core';

import WalletsList from '../../../containers/wallets/WalletsList';

import s from './styles.css';

const Wallets = () => (
  <div className={s.wallets}>
    <div className={s.title}>
      <h1>Wallets</h1>

      <div className={s.buttons}>
        <Button iconName="import" text="Import wallet" />
        <Button iconName="add" text="Create new wallet" />
      </div>
    </div>

    <div className={s.body}>
      <WalletsList/>
    </div>
  </div>
);

export default Wallets;
