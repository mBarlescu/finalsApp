import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Mentor extends Component {
  constructor(props) {
	    super(props);
	    this.state = {
	      subjects: ['psychology', 'science'],
	      search: '',
    	}
    }

    listofUsers(){
  	const subjects = this.state.subjects;

  	return subjects.map((subject, index) => {

  		return (
  			<div key={subject}>
  				<span>{subject}</span>
  			</div>
  		)
  	})
  }


	render() {
		return (
			<div>
				{this.listofUsers()}
				<NavLink to='/edit/subjects'>Edit Subjects</NavLink>
			</div>
		);
	}
}
