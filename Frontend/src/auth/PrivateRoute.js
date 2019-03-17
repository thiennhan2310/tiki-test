import React from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom'
function PrivateRoute({ component: Component, isAuth,...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function mapStateToProps(state){
 return {
  isAuth : !!state.auth.token
 }
}
export default connect(mapStateToProps,null)(PrivateRoute)