import React, { Component } from 'react';
import './App.css';
import Taskbar from './components/taskbar';
import DisplayList from './components/displaylist';

const taskItem = {
  text: 'test',
  text2: 'test2'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskItems: taskItem
    };
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <Taskbar />
        </div>
        <DisplayList taskItems={this.state.taskItems}/>
        </div>
    );
  }
};


export default App;
