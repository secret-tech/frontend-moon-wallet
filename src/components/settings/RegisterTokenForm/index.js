import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { required } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';

const RegisterTokenForm = (props) => {
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
        className="pt-input pt-fill"
        disabled
        validate={required}/>

      <Field
        component={RenderInput}
        placeholder="Name"
        name="name"
        className="pt-input pt-fill"
        validate={required}/>

      <Field
        component={RenderInput}
        placeholder="Symbol"
        name="symbol"
        className="pt-input pt-fill"
        validate={required}/>

      <Field
        component={RenderInput}
        placeholder="Decimals"
        name="decimals"
        className="pt-input pt-fill"
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
  form: 'registerToken',
  initialValues: {
    walletAddress: '',
    contractAddress: '',
    name: '',
    symbol: '',
    decimals: ''
  }
})(RegisterTokenForm);

export default FormComponent;
