import React from 'react';
import { connect } from 'react-redux';
import { Dialog } from '@blueprintjs/core';

import { initChangePassword, verifyChangePassword } from '../../../redux/modules/settings/changePassword';

import InitChangePasswordForm from '../../../components/settings/InitChangePasswordForm';
import VerifyChangePasswordForm from '../../../components/settings/VerifyChangePasswordForm';

const ChangePasswordPopup = (props) => {
  const {
    theme,
    step,
    fetching,
    verification: {
      verificationId
    }
  } = props;

  const renderStep = () => {
    switch (step) {
      case 'initChangePassword':
        return (
          <InitChangePasswordForm
            onSubmit={initChangePassword}
            fetching={fetching}/>
        );
      case 'verifyChangePassword':
        return (
          <VerifyChangePasswordForm
            onSubmit={verifyChangePassword}
            fetching={fetching}
            initialValues={{
              verification: { verificationId }
            }}/>
        );
      default:
        return (<div>Something went wrong</div>);
    }
  };

  return (
    <Dialog
      style={{ width: '300px', paddingBottom: '0px' }}
      title="Change password"
      className={theme}
      {...props}>

      <div className="pt-dialog-body">
        {renderStep()}
      </div>
    </Dialog>
  );
};

export default connect((state) => ({
  ...state.settings.changePassword,
  ...state.app.theme
}))(ChangePasswordPopup);
