import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { required } from '../../../utils/validators';

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
        className="pt-input pt-large pt-fill"
        validate={required}/>

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
    password: ''
  }
})(ResetPasswordNewPasswordForm);

export default FormComponent;
