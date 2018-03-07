import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import queryString from 'query-string';

import { initResetPassword, verifyResetPassword, setNewPassword } from '../../../redux/modules/auth/resetPassword';

import ResetPasswordEmailForm from '../../../components/auth/ResetPasswordEmailForm';
import VerifyResetPasswordForm from '../../../components/auth/VerifyResetPasswordForm';
import ResetPasswordNewPasswordForm from '../../../components/auth/ResetPasswordNewPasswordForm';

import namedRoutes from '../../../routes';
import s from './styles.css';

const ResetPassword = (props) => {
  const {
    step,
    fetching,
    verification: {
      verificationId,
      method
    }
  } = props;

  const qp = queryString.parse(props.location.search);

  const renderStep = (s) => {
    if (s === 'setNewPassword') {
      return (
        <ResetPasswordNewPasswordForm
          onSubmit={setNewPassword}
          fetching={fetching}
          method={method}
          initialValues={{
            verification: { verificationId }
          }}/>
      );
    }

    if (qp.verificationId && qp.code) {
      return (
        <VerifyResetPasswordForm
          onSubmit={verifyResetPassword}
          fetching={fetching}
          initialValues={{
            verification: {
              verificationId: qp.verificationId,
              code: qp.code
            }
          }}/>
      );
    }

    if (s === 'initResetPassword') {
      return (
        <ResetPasswordEmailForm
          onSubmit={initResetPassword}
          fetching={fetching}/>
      );
    }

    return (
      <VerifyResetPasswordForm
        onSubmit={verifyResetPassword}
        fetching={fetching}
        method={method}
        initialValues={{
          verification: { verificationId }
        }}/>
    );
  };

  return (
    <div className={s.container}>
      <div className={s.form}>
        {renderStep(step)}
      </div>
      <div className={s.fp}>
        <Link to={namedRoutes.signIn}>Sign in</Link>
      </div>
      <div className={s.bottomLink}>
        Not have an account?{' '}
        <Link to={namedRoutes.signUp}>Sign up!</Link>
      </div>
    </div>
  );
};

const ComponentWithRouter = withRouter(ResetPassword);
export default connect((state) => ({
  ...state.auth.resetPassword
}))(ComponentWithRouter);
