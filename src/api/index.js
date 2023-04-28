import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com';

export const fetchUserList = () => {
    return axios.get(`${URL}/users`);
};

export const fetchUserTodos = (payload) => {
    return axios.get(`${URL}/users/${payload}/todos`);
};

export const updateTodo = (taskId, payload) => {
    return axios.patch(`${URL}/todos/${taskId}`, payload);
};
