import React from 'react';
import { connect } from 'react-redux';
import { Dialog } from '@blueprintjs/core';

import { fetchTokenInfo, registerToken } from '../../../redux/modules/settings/registerCustomToken';

import RegisterTokenAddressForm from '../../../components/settings/RegisterTokenAddressForm';
import RegisterTokenForm from '../../../components/settings/RegisterTokenForm';

const RegisterCustomTokenPopup = (props) => {
  const {
    theme,
    step,
    fetching,
    walletAddress,
    token,
    wallets
  } = props;

  const walletsOptions = wallets.map((wallet) => ({
    value: wallet.address,
    label: wallet.address
  }));

  const renderStep = () => {
    switch (step) {
      case 'registerTokenAddress':
        return (
          <RegisterTokenAddressForm
            onSubmit={fetchTokenInfo}
            fetching={fetching}/>
        );
      case 'registerToken':
        return (
          <RegisterTokenForm
            onSubmit={registerToken}
            fetching={fetching}
            walletsOptions={walletsOptions}
            initialValues={{
              walletAddress,
              ...token
            }}/>
        );
      default:
        return 'Something went wrong';
    }
  };

  return (
    <Dialog
      style={{ width: '300px', paddingBottom: '0px' }}
      title="Register custom token"
      className={theme}
      {...props}>

      <div className="pt-dialog-body">
        {renderStep()}
      </div>
    </Dialog>
  );
};

export default connect((state) => ({
  ...state.settings.registerCustomToken,
  walletAddress: state.wallet.selectedWallet,
  wallets: state.app.user.wallets,
  ...state.app.theme
}))(RegisterCustomTokenPopup);
