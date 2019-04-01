import React, { Component } from 'react';
import Availability from './Availability';
import axios from 'axios';

export default class Subjects extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      subjects: ['psychology', 'science'],
	      search: '',
	 			price: 0,
	 			availability: {
	 				Sunday: false,
	 				Monday: false,
	 				Tuesday: false,
	 				Wednesday: false,
	 				Thursday: false,
	 				Friday: false,
	 				Saturday: false,
	 			},
	 			post: '',
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

  handleSubmit(e){
  	e.preventDefault();
  	let text = this.state.post;
  	axios.post('http://localhost:3000/api/world', { text } )
  	.then(res => {
  		console.log('published', res)
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

	inputValue(e){
		e.preventDefault();
		let text = e.target.value;
		console.log('dude', e.target.value)
		this.setState({post: text});
		console.log('OK MAN', this.state)
	}

	componentDidMount(){
		console.log('state', this.state)
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
							return <div key={subject}>
								<button onClick={this.addSubject.bind(this)}>{subject}</button>
							</div>
						})}
					</div>
				</div>
				<div>
					<h3>Price</h3>
					<div class="slidecontainer">
  					<input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
					</div>
				</div>
				<div>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<p>
							Post to Server:
						</p>
						<input type='text' value={this.state.post} onChange={this.inputValue.bind(this)}
						/>
						<button type='submit'>Submit</button>
					</form>
				</div>
				<h1>{this.state.post}</h1>
				<h1>process.env.USER</h1>
			</div>
		);
	}
}
