import React from 'react';
import {
    GET_TASK_LIST_BY_IDU,
    UP_DATE_TASK,
    initialStateTask,
} from './constraint';

const TaskReducer = (state = initialStateTask, action) => {
    switch (action.type) {
        case GET_TASK_LIST_BY_IDU: {
            return {
                ...state,
                taskList: action.payload,
            };
        }
        case UP_DATE_TASK: {
            return {
                ...state,
                taskList: state.taskList.map((item) =>
                    action.payload.id == item.id ? action.payload : item
                ),
            };
        }
        default:
            return state;
    }
};

export default TaskReducer;
