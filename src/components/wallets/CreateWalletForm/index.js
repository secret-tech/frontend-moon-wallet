import React from 'react';
import { reduxForm } from 'redux-form';
import { translate } from 'react-i18next';
import { Button, Intent } from '@blueprintjs/core';

// import { required } from '../../../utils/validators';
//
// import RenderInput from '../../_forms/RenderInput';

import s from './styles.css';

const CreateWalletForm = (props) => {
  const {
    t,
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
          text={t('createWalletForm.submit')}
          disabled={invalid}
          loading={fetching}/>
      </div>
    </form>
  );
};

const TranslatedComponent = translate('wallets')(CreateWalletForm);
const FormComponent = reduxForm({
  form: 'createWallet',
  initialValues: {
    type: 'ETH',
    paymentPassword: '12345678'
  }
})(TranslatedComponent);

export default FormComponent;
