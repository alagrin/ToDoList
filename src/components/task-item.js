import React from 'react';

const TaskItem = (props) => {
    return (
        <li className="list-group-item">{props.taskItem}</li>
    );
}

export default TaskItem;