import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Navigation from './Navigation';
import Register from './components/Register';
import Login from './components/Login';
import Mentor from './components/mentors/Mentor';
import Subjects from './components/mentors/Subjects';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path ='/' component={Home} exact />
          <Route path ='/register' component={Register} exact />
          <Route path ='/login' component={Login} exact/>
          <Route path ='/edit' component={Mentor} exact/>
          <Route path='/edit/subjects' component={Subjects} exact/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
