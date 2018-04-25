import React from 'react';
import { translate } from 'react-i18next';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { fullNameValidate, emailValidate, passwordValidate, paymentPasswordValidate, required } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';
import RenderPassword from '../../_forms/RenderPassword';
import RenderPaymentPassword from '../../_forms/RenderPaymentPassword';
import RenderCheckbox from '../../_forms/RenderCheckbox';

const SignUpForm = (props) => {
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
        placeholder={t('auth:signUp.form.name')}
        name="name"
        type="text"
        large
        fill
        validate={fullNameValidate}/>

      <Field
        component={RenderInput}
        placeholder={t('auth:signUp.form.email')}
        name="email"
        type="email"
        large
        fill
        validate={emailValidate}/>

      <Field
        component={RenderPassword}
        placeholder={t('auth:signUp.form.password')}
        name="password"
        type="password"
        large
        fill
        tip
        validate={passwordValidate}/>

      <Field
        component={RenderPaymentPassword}
        placeholder={t('auth:signUp.form.paymentPassword')}
        name="paymentPassword"
        type="password"
        large
        fill
        tip
        validate={paymentPasswordValidate}/>

      <Field
        component={RenderCheckbox}
        label={t('auth:signUp.form.agreement')}
        large={true}
        name="agreeTos"
        large
        fill
        validate={required}/>

      <div>
        <Button
          type="submit"
          className="pt-large pt-fill"
          intent={Intent.PRIMARY}
          text={t('auth:signUp.form.signUp')}
          disabled={invalid}
          loading={fetching}/>
      </div>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'signUp',
  initialValues: {
    name: '',
    email: '',
    password: '',
    paymentPassword: '',
    agreeTos: false
  }
})(SignUpForm);
const TranslatedComponent = translate(['auth'])(FormComponent);
export default TranslatedComponent;
