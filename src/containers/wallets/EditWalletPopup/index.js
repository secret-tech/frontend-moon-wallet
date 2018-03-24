import React from 'react';
import { Dialog, Button, Intent } from '@blueprintjs/core';

const EditWalletPopup = (props) => (
  <Dialog
    title="Edit wallet"
    {...props}>

    <div className="pt-dialog-body">
      Edit {props.walletAddress} form
    </div>

    <div className="pt-dialog-footer">
      <div className="pt-dialog-footer-actions">
        <Button text="Cancel" onClick={() => props.onClose()}/>
        <Button intent={Intent.PRIMARY} text="Import"/>
      </div>
    </div>

  </Dialog>
);

export default EditWalletPopup;
