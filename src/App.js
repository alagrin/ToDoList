import React, { Component } from 'react';
import './App.css';
import TaskList from './components/tasklist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      tasks: [],
      taskCount: 0
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
      tasks: [...this.state.tasks, this.state.term],
      taskCount: this.state.taskCount + 1
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <h1>My Task List</h1>
        <div className="row">
          <div className="col">
            <input onChange={this.handleChange} type="text" />
          </div>
          <div className="col">
            <button onClick={this.onSubmit} className="btn btn-primary">Submit</button>
          </div>
        </div>
        <TaskList taskCount={this.state.taskCount} tasks={this.state.tasks}/>
        </div>
    );
  }
}


export default App;
