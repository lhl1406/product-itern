import React, { useState, useRef } from 'react';
import { ChevronDown, Search } from 'react-bootstrap-icons';
import UserList from '../user-list/UserList';
import { useStore } from '../../store/Hooks';
import { useEffect } from 'react';
import { fetchUserList, fetchUserTodos } from '../../api';
import {
    GET_TASK_LIST_BY_IDU,
    GET_USER_LIST,
    SELECT_USER,
    FETCH_ERROR,
} from '../../reducer/constraint';

import './userselect.css';
const UserSelect = () => {
    const [visible, setVisible] = useState(false);
    const inpRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [state, dispatch, stateTask, dispatchTask] = useStore();
    useEffect(() => {
        async function fetchData() {
            try {
                const respone = await fetchUserList();
                dispatch({
                    type: GET_USER_LIST,
                    payload: respone.data,
                });
            } catch (error) {
                dispatch({ type: FETCH_ERROR, payload: error.message });
            }
        }
        fetchData();
    }, [dispatch]);

    const handleOnFocus = () => {
        setVisible(true);
        inpRef.current.placeholder = inputValue
            ? inputValue
            : inpRef.current.placeholder;
        setInputValue('');
    };
    const handleOnBlur = async () => {
        setInputValue(inpRef.current.placeholder);
        try {
            const respone = await fetchUserTodos(state.userSelecter);
            dispatchTask({
                type: GET_TASK_LIST_BY_IDU,
                payload: respone.data,
            });
        } catch (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
        }
        setVisible(false);
    };
    const searchByNameUser = () => {
        setInputValue(inpRef.current.value);
        if (!inpRef.current.value == '') {
            state.userList.filter((user) => {
                return user.name.toLowerCase().includes(inpRef.current.value);
            });
            dispatch({
                type: GET_USER_LIST,
                payload: state.userList.filter((user) => {
                    return user.name
                        .toLowerCase()
                        .includes(inpRef.current.value);
                }),
            });
        } else {
            async function fetchData() {
                try {
                    const respone = await fetchUserList();
                    dispatch({
                        type: GET_USER_LIST,
                        payload: respone.data,
                    });
                } catch (error) {
                    dispatch({ type: FETCH_ERROR, payload: error.message });
                }
            }
            fetchData();
        }
    };

    const handleOnclick = async (id) => {
        try {
            const respone = await fetchUserTodos(id);
            dispatchTask({
                type: GET_TASK_LIST_BY_IDU,
                payload: respone.data,
            });
        } catch (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
        }
        dispatch({
            type: SELECT_USER,
            payload: id,
        });
        const userSelecter = state.userList.find((item) => item.id === id);
        inpRef.current.value = userSelecter.name;
        setInputValue(userSelecter.name);
        setVisible(false);
    };
    return (
        <>
            <div className='select__group'>
                <div className='label'>
                    <span className='lable-user'>User</span>
                    <div className='lable-border'></div>
                </div>
                <div className='input-group'>
                    <input
                        placeholder='Select user'
                        className={`select-user ${visible ? 'active' : ''}`}
                        onFocus={handleOnFocus}
                        onChange={searchByNameUser}
                        onBlur={handleOnBlur}
                        name=''
                        id=''
                        value={inputValue}
                        ref={inpRef}
                    ></input>
                    <UserList
                        visible={visible}
                        userList={state.userList}
                        onClick={handleOnclick}
                        userSelecter={state.userSelecter}
                    />
                    <span className='icon'>
                        {!visible ? <ChevronDown /> : <Search />}
                    </span>
                </div>
            </div>
        </>
    );
};

export default UserSelect;
