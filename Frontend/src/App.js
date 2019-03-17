import React, { Component } from 'react';
import './App.css';
import AddPage from './page/Add';
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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/admin/add" component={AddPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
