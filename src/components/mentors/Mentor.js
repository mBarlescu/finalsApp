import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Mentor extends Component {
	render() {
		return (
			<div>
				<p>list of subjects, postal code, and availability? maybe? </p>
				<NavLink to='/edit/subjects'>Edit Subjects</NavLink>
			</div>
		);
	}
}
