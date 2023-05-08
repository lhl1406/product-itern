import React from 'react';
import UserSelect from '../../components/user-select/UserSelect';
import TaskList from '../../components/task-list/TaskList';

import './todo.css';
const ToDo = () => {
    return (
        <>
            <UserSelect />
            <TaskList />
        </>
    );
};

export default ToDo;
