import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { passwordValidate } from '../../../utils/validators';

import RenderPassword from '../../_forms/RenderPassword';

const InitChangePasswordForm = (props) => {
  const {
    handleSubmit,
    invalid,
    fetching
  } = props;

  return (
    <form onSubmit={handleSubmit}>

      <Field
        component={RenderPassword}
        placeholder="Old password"
        name="oldPassword"
        fill
        validate={passwordValidate}/>

      <Field
        component={RenderPassword}
        placeholder="New password"
        name="newPassword"
        fill
        tip
        validate={passwordValidate}/>

      <div>
        <Button
          type="submit"
          className="pt-fill"
          intent={Intent.PRIMARY}
          text="Change password"
          disabled={invalid}
          loading={fetching}/>
      </div>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'initChangePassword',
  initialValues: {
    oldPassword: '',
    newPassword: ''
  }
})(InitChangePasswordForm);

export default FormComponent;
