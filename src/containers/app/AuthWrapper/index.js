import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import namedRoutes from '../../../routes';

import SignIn from '../../../components/auth/SingIn';
import SignUp from '../../../components/auth/SignUp';

class AuthWrapper extends Component {
  render() {
    return (
      <div>
        <Route exact path={namedRoutes.signIn} component={SignIn}/>
        <Route exact path={namedRoutes.signUp} component={SignUp}/>
        <Redirect from={namedRoutes.auth} to={namedRoutes.signIn}/>
      </div>
    );
  }
}

// const ConnectedComponent = connect(null)(Auth);
// const ComponentWithRouter = withRouter(ConnectedComponent);
export default AuthWrapper;
