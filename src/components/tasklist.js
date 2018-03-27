import React, { Component } from 'react';

class TaskList extends Component {
  render() {
    return (
      <ul className="list-group">
        {
          this.props.tasks.map(task => <li className="list-group-item">{task}</li> )
          }
      </ul>
      );
    }
  }

export default TaskList;