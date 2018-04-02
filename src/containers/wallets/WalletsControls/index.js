import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';

import { openCreateWalletPopup } from '../../../redux/modules/wallets/createWallet';
import { openImportWalletPopup } from '../../../redux/modules/wallets/importWallet';

import s from './styles.css';

const WalletsControls = (props) => (
  <div className={s.buttons}>
    {/* <Button iconName="import" text="Import wallet"
      onClick={() => props.openImportWalletPopup()}/> */}
    <Button iconName="add" text="Create new wallet"
      onClick={() => props.openCreateWalletPopup()}/>
  </div>
);

const ConnectedComponent = connect(
  null,
  {
    openCreateWalletPopup,
    openImportWalletPopup
  }
)(WalletsControls);
export default ConnectedComponent;
