import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { fullNameValidate, emailValidate, passwordValidate, paymentPasswordValidate, required } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';
import RenderPassword from '../../_forms/RenderPassword';
import RenderPaymentPassword from '../../_forms/RenderPaymentPassword';
import RenderCheckbox from '../../_forms/RenderCheckbox';

const SignUpForm = (props) => {
  const {
    handleSubmit,
    invalid,
    fetching
  } = props;

  return (
    <form onSubmit={handleSubmit}>

      <Field
        component={RenderInput}
        placeholder="Name"
        name="name"
        type="text"
        large
        fill
        validate={fullNameValidate}/>

      <Field
        component={RenderInput}
        placeholder="Email"
        name="email"
        type="email"
        large
        fill
        validate={emailValidate}/>

      <Field
        component={RenderPassword}
        placeholder="Password"
        name="password"
        type="password"
        large
        fill
        tip
        validate={passwordValidate}/>

      <Field
        component={RenderPaymentPassword}
        placeholder="Payment password"
        name="paymentPassword"
        type="password"
        large
        fill
        tip
        validate={paymentPasswordValidate}/>

      <Field
        component={RenderCheckbox}
        label="Agree terms and conditions"
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
          text="Sign up"
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

export default FormComponent;
