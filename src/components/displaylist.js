import React from 'react';
import TaskItem from './task-item';

const DisplayList = (props) => {
    return (
      <ul className="list-group">
        <TaskItem taskItems={props.taskItems}/>
      </ul>
      );
    }

export default DisplayList;