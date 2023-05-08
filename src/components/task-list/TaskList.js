import React, { useState } from 'react';
import './tasklist.css';
import { CheckCircle, DashSquare, ListTask } from 'react-bootstrap-icons';
import { updateTodo } from '../../api';
import { useStore } from '../../store/Hooks';
const TaskList = (props) => {
    // const [stateTask, dispatchTask] = props.useStore;
    const [state, dispatch, stateTask, dispatchTask] = useStore();
    const [isItemClick, setItemClick] = useState(null);
    const taskList = stateTask.taskList;
    const handleClick = async (item) => {
        setItemClick(item.id);
        try {
            const respone = await updateTodo(item.id, { completed: true });
            dispatchTask({ type: 'UP_DATE_TASK', payload: respone.data });
        } catch (error) {
            dispatchTask({ type: 'FETCH_ERROR', payload: error.message });
        }
        setItemClick(null);
    };
    return (
        <div className='task__list'>
            <div className='label'>
                <span className='lable-list'>Tasks</span>
                <div className='lable-border'></div>
            </div>
            <ul className='table__task'>
                {taskList.length > 0 ? (
                    taskList
                        .sort((a, b) => {
                            return a.completed - b.completed;
                        })
                        .map((item) => (
                            <li key={item.id} className='task-item'>
                                <div className='task-icon'>
                                    {item.completed ? (
                                        <CheckCircle className='check-circle-icon' />
                                    ) : (
                                        <DashSquare className='check-square-icon' />
                                    )}
                                    <span className='task-tile'>
                                        {item.title || item.name}
                                    </span>
                                </div>
                                {!item.completed && (
                                    <>
                                        <div className='button-update'>
                                            <img
                                                className={`img-loading ${
                                                    isItemClick == item.id
                                                        ? 'loading'
                                                        : ''
                                                }`}
                                                src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831'
                                                alt=''
                                            />
                                            <button
                                                className={`task-btn  ${
                                                    isItemClick == item.id
                                                        ? 'loading'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    handleClick(item)
                                                }
                                            >
                                                Make done
                                            </button>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))
                ) : (
                    <div className='table-empty'>No data</div>
                )}
            </ul>
            <div className='done-task-total'>
                Done {taskList.filter((item) => item.completed).length}/
                {taskList.length} tasks
            </div>
        </div>
    );
};

export default TaskList;
