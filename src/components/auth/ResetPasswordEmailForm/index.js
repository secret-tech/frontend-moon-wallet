import React from 'react';
import { translate } from 'react-i18next';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { emailValidate } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';

const ResetPasswordEmailForm = (props) => {
  const {
    t,
    handleSubmit,
    invalid,
    fetching
  } = props;

  return (
    <form onSubmit={handleSubmit}>

      <Field
        component={RenderInput}
        placeholder={t('auth:resetPassword.form.email')}
        name="email"
        type="email"
        large
        fill
        validate={emailValidate}/>

      <div>
        <Button
          type="submit"
          className="pt-large pt-fill"
          intent={Intent.PRIMARY}
          text={t('auth:resetPassword.form.resetPassword')}
          disabled={invalid}
          loading={fetching}/>
      </div>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'resetPasswordEmail',
  initialValues: {
    email: ''
  }
})(ResetPasswordEmailForm);
const TranslatedComponent = translate(['auth'])(FormComponent);
export default TranslatedComponent;
