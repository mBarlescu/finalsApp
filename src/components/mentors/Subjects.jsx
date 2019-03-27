import React, { Component } from 'react';

export default class Subjects extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      subjects: ['psychology', 'science']
      	
    	}
    	this.subjects = ['computer', 'chem', 'history']
    	console.log(this.state.subjects)
    	this.remove = this.remove.bind(this);
    }
  listofUsers(){
  	const subjects = this.state.subjects;

  	return subjects.map((subject, index) => {

  		return (
  			<div key={subject}>
  				<span>{subject}</span>
  				<button onClick={() => this.remove(subject)}> delete </button>
  			</div>
  		)
  	})
  }
  remove(subject){

  	const filtered = this.state.subjects.filter((each)=>{

  		return each !== subject
  	})

  	this.setState({subjects: filtered}, function() {
  		console.log('yoolo', this.state.subjects)
  	})

		}




	render() {
		return (
			<div>
				{this.listofUsers()}
				<br>
				<div>

				</div>
			</div>
		);
	}
}
