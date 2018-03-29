import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { required } from '../../../utils/validators';

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
        className="pt-input pt-fill"
        validate={required}/>

      <Field
        component={RenderPassword}
        placeholder="New password"
        name="newPassword"
        className="pt-input pt-fill"
        tip={true}
        validate={required}/>

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
