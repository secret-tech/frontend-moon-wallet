import React from 'react';
import { reduxForm, Field, FormSection } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { twoFactorCode } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';

import s from './styles.css';

const VerifyChangePasswordForm = (props) => {
  const {
    handleSubmit,
    invalid,
    fetching,
    method
  } = props;

  const renderTip = () => {
    if (!method) return null;
    if (method === 'google') {
      return (
        <div className={s.tip}>
          To verify signing in - enter PIN code from Google Authenticator
        </div>
      );
    }

    return (
      <div className={s.tip}>
        To verify signing in - enter PIN code from email
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit}>

      {renderTip()}

      <FormSection name="verification">
        <Field
          component={RenderInput}
          placeholder="Verification code"
          name="code"
          type="text"
          fill
          validate={twoFactorCode}/>
      </FormSection>

      <div>
        <Button
          type="submit"
          className="pt-fill"
          intent={Intent.PRIMARY}
          text="Verify change password"
          disabled={invalid}
          loading={fetching}/>
      </div>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'verifyChangePassword',
  initialValues: {
    verification: {
      code: '',
      verificationId: ''
    }
  }
})(VerifyChangePasswordForm);

export default FormComponent;
