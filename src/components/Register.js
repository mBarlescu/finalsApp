import React, { Component } from 'react';

export default class Register extends Component {
  render() {
    return (
      <div>
        <form method='post'>
          <div>
            <label for='name'>Name:</label>
            <input type='text' id='name' name='name' />
          </div>
          <div>
            <label for='password'>Password:</label>
            <input type='password' id='password' name='password'/>
          </div>    
          <div>
            <label for='password'>Confirm Password:</label>
            <input type='password' id='password' name='password'/>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
