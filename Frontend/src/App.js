import React, { Component } from 'react';
import './App.css';
import AddPage from './page/Add';
import LoginPage from './page/Login';
import HomePage from './page/Home';
import EditPage from './page/Edit';
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
          <Route path="/admin/article/add" component={AddPage} />
          <Route path="/admin/article/:id/edit" component={EditPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
