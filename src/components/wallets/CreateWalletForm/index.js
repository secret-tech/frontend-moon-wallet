import React from 'react';
import { reduxForm } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

// import { required } from '../../../utils/validators';
//
// import RenderInput from '../../_forms/RenderInput';

import s from './styles.css';

const CreateWalletForm = (props) => {
  const {
    handleSubmit,
    invalid,
    fetching
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.buttons}>
        <Button
          type="submit"
          intent={Intent.PRIMARY}
          text="Create"
          disabled={invalid}
          loading={fetching}/>
      </div>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'createWallet',
  initialValues: {
    type: 'ETH',
    paymentPassword: '12312344'
  }
})(CreateWalletForm);

export default FormComponent;
