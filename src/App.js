import React from 'react';
import logo from './logo.svg';
import './App.css';

import AddTask from './components/AddTask/AddTask';
import ListComponent from './components/ListComponent/ListComponent';

const myName = prompt('What is the name?');

class App extends React.Component {
  
  constructor(props) {
		super(props);
		this.state = {
			name: myName,
			list: []
		};

		this.addToList = this.addToList.bind(this);
	};

	addToList(value) {
		this.setState({
			list: [...this.state.list, value]
		});
	}

  render() {
    return (
      <div className="App">
        <img className ="App-logo" src={logo} alt='mylogo' />
        <ListComponent list={this.state.list} name={this.state.name} />
        <AddTask addToList={this.addToList}/>
      </div>
    );
  }
};


export default App;
