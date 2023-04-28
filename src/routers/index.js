import Home from '../pages/Home';
import ToDo from '../pages/todo/Todo';
const publicRouters = [
    {
        path: '/',
        component: Home,
        layout: null,
    },
    {
        path: '/todo',
        component: ToDo,
        layout: null,
    },
];
const privateRouters = [];

export { privateRouters, publicRouters };
