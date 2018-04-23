import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { emailValidate, passwordValidate } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';
import RenderPassword from '../../_forms/RenderPassword';

const SignInForm = (props) => {
  const {
    handleSubmit,
    invalid,
    fetching
  } = props;

  return (
    <form onSubmit={handleSubmit}>

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
        validate={passwordValidate}/>

      <div>
        <Button
          type="submit"
          className="pt-large pt-fill"
          intent={Intent.PRIMARY}
          text="Sign in"
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

export default FormComponent;
