import React, { Component } from 'react';
import './App.css';
import TaskList from './components/tasklist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      tasks: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      term: e.target.value
    });
  }

  onSubmit() {
    this.setState({
      tasks: [...this.state.tasks, this.state.term]
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <h1>My Task List</h1>
        <div className="row">
          <div>
              <input onChange={this.handleChange} type="text" />
              <button onClick={this.onSubmit} className="btn-primary">Submit</button>
          </div>
        </div>
        <TaskList tasks={this.state.tasks}/>
        </div>
    );
  }
};


export default App;
