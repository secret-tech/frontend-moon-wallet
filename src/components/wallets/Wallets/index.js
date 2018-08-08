import React from 'react';
import { translate } from 'react-i18next';

import WalletsList from '../../../containers/wallets/WalletsList';
import WalletsPopups from '../../../containers/wallets/WalletsPopups';
import WalletsControls from '../../../containers/wallets/WalletsControls';

import s from './styles.css';

const Wallets = ({ t }) => (
  <div className={s.wallets}>
    <div className={s.title}>
      <h1>{t('title')}</h1>

      <WalletsControls/>
    </div>

    <div className={s.body}>
      <WalletsList/>
    </div>

    <WalletsPopups/>
  </div>
);

export default translate('wallets')(Wallets);
