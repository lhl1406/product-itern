import React from 'react';
import { GET_USER_LIST, SELECT_USER, initialState } from './constraint';

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LIST: {
            return {
                ...state,
                userList: [...action.payload],
            };
        }
        case SELECT_USER: {
            return {
                ...state,
                userSelecter: action.payload,
            };
        }

        default:
            return state;
    }
};

export default UserReducer;
