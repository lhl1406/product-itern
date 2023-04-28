import React from 'react';

import Home from '../pages/Home';
import ToDo from '../pages/ToDo';
import { Routes, Route } from 'react-router-dom';

const Routers = () => {
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<ToDo />} />
    </Routes>;
};

export default Routers;
