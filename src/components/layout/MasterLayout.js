import React from 'react';
import Header from '../header/Header';
const MasterLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='container'>{children}</div>
        </>
    );
};

export default MasterLayout;
