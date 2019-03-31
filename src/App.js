


import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Navigation from './Navigation';
import Register from './components/Register';
import Login from './components/Login';
import Mentor from './components/mentors/Mentor';
import Subjects from './components/mentors/Subjects';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'


const axios = require('axios');

library.add(faIgloo)



class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        response: '',
        post: '',
        responsePost: '',
      }
    }
  componentDidMount() {
    console.log('hello there');
    axios.get('http://localhost:3000/api/hello')
      .then(res => {
        console.log('get request', res.data.express)
      })
      .catch(err => {
        console.log('error', err)
      })
  }



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
