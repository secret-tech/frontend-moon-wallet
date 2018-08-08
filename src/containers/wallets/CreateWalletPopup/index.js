import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import windowSize from 'react-window-size';
import { Dialog } from '@blueprintjs/core';

import { initCreateWallet } from '../../../redux/modules/wallets/createWallet';

import CreateWalletForm from '../../../components/wallets/CreateWalletForm';

const CreateWalletPopup = (props) => {
  const {
    t,
    windowWidth
  } = props;

  const calcWidth = windowWidth > 400 ? '400px' : windowWidth - 40;

  return (
    <Dialog
      style={{ width: calcWidth, paddingBottom: '0px' }}
      title={t('createWalletPopup.title')}
      {...props}>

      <div className="pt-dialog-body">
        <CreateWalletForm
          onSubmit={initCreateWallet}
          fetching={props.fetching}/>
      </div>
    </Dialog>
  );
};

const TranslatedComponent = translate('wallets')(CreateWalletPopup);
const ConnectedComponent = connect((state) => ({
  fetching: state.wallets.createWallet.fetching,
  ...state.app.theme
}))(TranslatedComponent);
const ComponentWithSize = windowSize(ConnectedComponent);
export default ComponentWithSize;
