import React from 'react';
import './ListComponent.css';

class ListComponent extends React.PureComponent{
	render() {
		return(
		<div>
			<h1>{this.props.name}'s To Do List</h1>
			<ul> 
			  {this.props.list.map(text => <li>{text}</li>)}
			</ul>
		</div>
		);
	}
};

export default ListComponent;

//test