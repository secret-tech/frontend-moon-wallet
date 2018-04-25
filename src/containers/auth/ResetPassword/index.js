import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { withRouter, Link } from 'react-router-dom';
import queryString from 'query-string';

import { initResetPassword, verifyResetPassword, setNewPassword } from '../../../redux/modules/auth/resetPassword';

import ResetPasswordEmailForm from '../../../components/auth/ResetPasswordEmailForm';
import VerifyResetPasswordForm from '../../../components/auth/VerifyResetPasswordForm';
import ResetPasswordNewPasswordForm from '../../../components/auth/ResetPasswordNewPasswordForm';

import * as routes from '../../../routes';
import s from './styles.css';

const ResetPassword = (props) => {
  const {
    t,
    step,
    fetching,
    email,
    resetId,
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
            email,
            resetId
          }}/>
      );
    }

    if (qp.verificationId && qp.code) {
      return (
        <VerifyResetPasswordForm
          onSubmit={verifyResetPassword}
          fetching={fetching}
          initialValues={{
            email,
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
          email,
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
        <Link to={routes.SIGN_IN}>{t('auth:resetPassword.signIn')}</Link>
      </div>
      <div className={s.bottomLink}>
        {t('auth:resetPassword.notHaveAnAccount')}{' '}
        <Link to={routes.SIGN_UP}>{t('auth:resetPassword.signUp')}</Link>
      </div>
    </div>
  );
};

const ComponentWithRouter = withRouter(ResetPassword);
const TranslatedComponent = translate(['auth'])(ComponentWithRouter);
export default connect((state) => ({
  ...state.auth.resetPassword
}))(TranslatedComponent);
