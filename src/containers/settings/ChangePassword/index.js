import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';

import { openChangePasswordPopup, closeChangePasswordPopup } from '../../../redux/modules/settings/changePassword';

import ChangePasswordPopup from '../ChangePasswordPopup';

const ChangePassword = (props) => {
  const {
    openChangePasswordPopup,
    closeChangePasswordPopup,
    popupIsOpen
  } = props;

  return (
    <div>
      <Button
        icon="lock"
        text="Change password..."
        onClick={() => openChangePasswordPopup()}/>

      <ChangePasswordPopup
        isOpen={popupIsOpen}
        onClose={() => closeChangePasswordPopup()}/>
    </div>
  );
};

export default connect(
  (state) => ({ ...state.settings.changePassword }),
  {
    openChangePasswordPopup,
    closeChangePasswordPopup
  }
)(ChangePassword);
