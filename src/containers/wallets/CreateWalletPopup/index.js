import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import windowDimensions from 'react-window-dimensions';
import { Dialog } from '@blueprintjs/core';

import { initCreateWallet } from '../../../redux/modules/wallets/createWallet';

import CreateWalletForm from '../../../components/wallets/CreateWalletForm';

const CreateWalletPopup = (props) => {
  const {
    t,
    width
  } = props;

  const calcWidth = width > 400 ? '400px' : width - 40;

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
const ComponentWithSize = windowDimensions(ConnectedComponent);
export default ComponentWithSize;
