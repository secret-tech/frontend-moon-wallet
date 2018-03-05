import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import namedRoutes from '../../../routes';

import SignIn from '../../auth/SingIn';
import SignUp from '../../../components/auth/SignUp';

import s from './styles.css';

class AuthWrapper extends Component {
  render() {
    return (
      <div className={s.auth}>
        <div className={s.logo}></div>
        <Route exact path={namedRoutes.signIn} component={SignIn}/>
        <Route exact path={namedRoutes.signUp} component={SignUp}/>
      </div>
    );
  }
}

// const ConnectedComponent = connect(null)(Auth);
// const ComponentWithRouter = withRouter(ConnectedComponent);
export default AuthWrapper;
