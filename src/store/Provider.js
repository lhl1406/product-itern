import Context from './Context';
import React from 'react';
import { useReducer } from 'react';
import UserReducer from '../reducer/UserReducer';
import TaskReducer from '../reducer/TaskReducer';
import { initialStateTask, initialState } from '../reducer/constraint';

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const [stateTask, dispatchTask] = useReducer(TaskReducer, initialStateTask);

    return (
        <Context.Provider value={[state, dispatch, stateTask, dispatchTask]}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
