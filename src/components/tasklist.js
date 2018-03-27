import React, { Component } from 'react';

class TaskList extends Component {
  render() {
    return (
      <ul className="list-group">
        <h4>You have {this.props.taskCount} tasks on this list.</h4>
        {
          this.props.tasks.map(task => <li key={task} className="list-group-item">{task}</li> )
          }
      </ul>
      );
    }
  }

export default TaskList;