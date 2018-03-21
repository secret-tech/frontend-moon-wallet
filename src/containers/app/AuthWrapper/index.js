import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import namedRoutes from '../../../routes';

import SignIn from '../../auth/SingIn';
import SignUp from '../../auth/SignUp';
import ResetPassword from '../../auth/ResetPassword';
import Error404 from '../../../components/common/Error404';

import s from './styles.css';

class AuthWrapper extends Component {
  render() {
    const e404 = () => (
      <div className={s.e404}><Error404/></div>
    );

    return (
      <div className={s.auth}>
        <div className={s.logo}>
          <img src={require('../../../assets/images/logo.svg')}/>
        </div>
        <Switch>
          <Route path={namedRoutes.signIn} component={SignIn}/>
          <Route path={namedRoutes.signUp} component={SignUp}/>
          <Route path={namedRoutes.resetPassword} component={ResetPassword}/>
          <Route component={e404}/>
        </Switch>
      </div>
    );
  }
}

// const ConnectedComponent = connect(null)(Auth);
// const ComponentWithRouter = withRouter(ConnectedComponent);
export default AuthWrapper;
