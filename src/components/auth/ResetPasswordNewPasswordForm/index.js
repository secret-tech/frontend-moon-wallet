import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { passwordValidate } from '../../../utils/validators';

import RenderPassword from '../../_forms/RenderPassword';

const ResetPasswordNewPasswordForm = (props) => {
  const {
    handleSubmit,
    invalid,
    fetching
  } = props;

  return (
    <form onSubmit={handleSubmit}>

      <Field
        component={RenderPassword}
        placeholder="New password"
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
          text="Reset password"
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

export default FormComponent;
