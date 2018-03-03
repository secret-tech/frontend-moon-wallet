import React from 'react';
import { Dialog, Button, Intent } from '@blueprintjs/core';

import CreateWalletForm from '../../../components/wallets/CreateWalletForm';

const CreateWalletPopup = (props) => (
  <Dialog
    title="Create wallet"
    className="pt-dark"
    {...props}>

    <div className="pt-dialog-body">
      <CreateWalletForm/>
    </div>

    {/* <div className="pt-dialog-footer">
      <div className="pt-dialog-footer-actions">
        <Button text="Cancel" onClick={() => props.onClose()}/>
        <Button intent={Intent.PRIMARY} text="Create"/>
      </div>
    </div> */}

  </Dialog>
);

export default CreateWalletPopup;
