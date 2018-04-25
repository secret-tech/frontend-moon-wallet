import React from 'react';
import { translate } from 'react-i18next';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { emailValidate, passwordValidate } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';
import RenderPassword from '../../_forms/RenderPassword';

const SignInForm = (props) => {
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
        placeholder={t('auth:signIn.form.email')}
        name="email"
        type="email"
        large
        fill
        validate={emailValidate}/>

      <Field
        component={RenderPassword}
        placeholder={t('auth:signIn.form.password')}
        name="password"
        type="password"
        large
        fill
        validate={passwordValidate}/>

      <div>
        <Button
          type="submit"
          className="pt-large pt-fill"
          intent={Intent.PRIMARY}
          text={t('auth:signIn.form.signIn')}
          disabled={invalid}
          loading={fetching}/>
      </div>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'signIn',
  initialValues: {
    email: '',
    password: ''
  }
})(SignInForm);
const TranslatedComponent = translate(['auth'])(FormComponent);
export default TranslatedComponent;
