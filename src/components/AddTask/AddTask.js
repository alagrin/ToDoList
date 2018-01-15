import React from 'react';
import './AddTask.css';

export class AddTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}
	
	handleSubmit(e) {
		e.preventDefault();
		this.props.addToList(this.state.value);

	}

	render() {
		return (
			<form>
			  <textarea value={this.state.value} onChange={this.handleChange} placeholder="Submit your task here"/>
			  <button onClick={this.handleSubmit}>Submit</button>
			</form>
			);
	}
};

export default AddTask;