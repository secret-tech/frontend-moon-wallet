import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { withRouter, Link } from 'react-router-dom';
import queryString from 'query-string';

import { initSignIn, verifySignIn } from '../../../redux/modules/auth/signIn';

import SignInForm from '../../../components/auth/SignInForm';
import VerifySignInForm from '../../../components/auth/VerifySignInForm';

import * as routes from '../../../routes';
import s from './styles.css';

const SignIn = (props) => {
  const {
    t,
    step,
    fetching,
    verification: {
      verificationId,
      method
    }
  } = props;

  const qp = queryString.parse(props.location.search);

  const renderStep = (s) => {
    if (qp.verificationId && qp.code) {
      return (
        <VerifySignInForm
          onSubmit={verifySignIn}
          fetching={fetching}
          initialValues={{
            verification: {
              verificationId: qp.verificationId,
              code: qp.code
            }
          }}/>
      );
    }

    if (s === 'initSignIn') {
      return (
        <SignInForm
          onSubmit={initSignIn}
          fetching={fetching}/>
      );
    }

    return (
      <VerifySignInForm
        onSubmit={verifySignIn}
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
        <Link to={routes.RESET_PASSWORD}>{t('auth:signIn.forgotPassword')}</Link>
      </div>
      <div className={s.bottomLink}>
        {t('auth:signIn.notHaveAnAccount')}{' '}
        <Link to={routes.SIGN_UP}>{t('auth:signIn.signUp')}</Link>
      </div>
    </div>
  );
};

const ComponentWithRouter = withRouter(SignIn);
const TranslatedComponent = translate(['auth'])(ComponentWithRouter);
export default connect((state) => ({
  ...state.auth.signIn
}))(TranslatedComponent);
