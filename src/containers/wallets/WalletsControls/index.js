import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Button } from '@blueprintjs/core';

import { openCreateWalletPopup } from '../../../redux/modules/wallets/createWallet';
import { openImportWalletPopup } from '../../../redux/modules/wallets/importWallet';

import s from './styles.css';

const WalletsControls = (props) => (
  <div className={s.buttons}>
    {/* <Button icon="import" text="Import wallet"
      onClick={() => props.openImportWalletPopup()}/> */}
    <Button icon="add" text={props.t('walletsControls.createButton')}
      onClick={() => props.openCreateWalletPopup()}/>
  </div>
);

const TranslatedComponent = translate('wallets')(WalletsControls);
const ConnectedComponent = connect(
  null,
  {
    openCreateWalletPopup,
    openImportWalletPopup
  }
)(TranslatedComponent);
export default ConnectedComponent;
