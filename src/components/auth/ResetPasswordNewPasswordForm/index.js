import React from 'react';
import { translate } from 'react-i18next';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { passwordValidate } from '../../../utils/validators';

import RenderPassword from '../../_forms/RenderPassword';

const ResetPasswordNewPasswordForm = (props) => {
  const {
    t,
    handleSubmit,
    invalid,
    fetching
  } = props;

  return (
    <form onSubmit={handleSubmit}>

      <Field
        component={RenderPassword}
        placeholder={t('auth:resetPassword.form.newPassword')}
        name="password"
        large
        fill
        tip
        validate={passwordValidate}/>

      <div>
        <Button
          type="submit"
          className="pt-large pt-fill"
          intent={Intent.PRIMARY}
          text={t('auth:resetPassword.form.setNewPassword')}
          disabled={invalid}
          loading={fetching}/>
      </div>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'resetPasswordNewPasswordEmail',
  initialValues: {
    password: '',
    email: '',
    resetId: ''
  }
})(ResetPasswordNewPasswordForm);
const TranslatedComponent = translate(['auth'])(FormComponent);
export default TranslatedComponent;
