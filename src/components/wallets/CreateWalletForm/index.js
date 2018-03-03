import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { required } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';

import s from './styles.css';

const CreateWalletForm = (props) => {
  const {
    handleSubmit,
    invalid,
    // error, // TODO handle errors
    // fetching
  } = props;

  // const renderButton = () =>
  //   (fetching
  //     ? (<Button color="primary" className="px-4"
  //      disabled={true}><i className="fa fa-cog fa-spin fa-fw"/> Loading</Button>)
  //     : (<Button color="primary" className="px-4" disabled={invalid}>Login</Button>));

  return (
    <form onSubmit={handleSubmit}>

      <Field
        component={RenderInput}
        label="Name"
        name="name"
        type="text"
        validate={required}/>

      <div className={s.buttons}>
        <Button intent={Intent.PRIMARY} text="Create" disabled={invalid}/>
      </div>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'createWallet',
  initialValues: {
    name: '',
    color: 1,
    icon: 1
  }
})(CreateWalletForm);

export default FormComponent;
