import React, { Component } from 'react';
import './App.css';
import DetailPage from './page/Detail';
import LoginPage from './page/Login';
import HomePage from './page/Home';
import PrivateRoute from './auth/PrivateRoute'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute path="/article/:id" component={DetailPage} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
