import React, { Component } from 'react';

export default class Subjects extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      subjects: ['psychology', 'science'],
	      search: '',
    	}
    	this.subjects = ['computer', 'chem', 'history']
    	console.log(this.state.subjects)
    	this.remove = this.remove.bind(this);
    	this.list = ['computer science', 'history', 'poker']
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

	updateSearch(event) {
			this.setState({search: event.target.value.substr(0,20)});
	}

	addSubject(event) {
		const newSubjects = this.state.subjects.slice();
		if(newSubjects.indexOf(event.target.innerHTML) === -1){


		newSubjects.push(event.target.innerHTML)
		this.setState({subjects: newSubjects})
		}
	}




	render() {
		let filtered = this.list.filter(
			(list) => {
				return list.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
			})
		return (
			<div>
				{this.listofUsers()}
				<br/>
				<div>
					<h3>Add</h3>
					<input type='text'
						value={this.state.search}
						onChange={this.updateSearch.bind(this)} />
				</div>
				<div>
					<div>
						{filtered.map((subject) =>{
							return <div>
								<button onClick={this.addSubject.bind(this)}>{subject}</button>
							</div>
						})}
					</div>
				</div>
			</div>
		);
	}
}
