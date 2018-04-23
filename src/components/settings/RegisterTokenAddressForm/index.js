import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { required } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';

const RegisterTokenAddressForm = (props) => {
  const {
    handleSubmit,
    invalid,
    fetching
  } = props;

  return (
    <form onSubmit={handleSubmit}>

      <Field
        component={RenderInput}
        placeholder="Contact address"
        name="contractAddress"
        fill
        validate={required}/>

      <div>
        <Button
          type="submit"
          className="pt-fill"
          intent={Intent.PRIMARY}
          text="OK"
          disabled={invalid}
          loading={fetching}/>
      </div>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'registerTokenAddress',
  initialValues: {
    contractAddress: ''
  }
})(RegisterTokenAddressForm);

export default FormComponent;
