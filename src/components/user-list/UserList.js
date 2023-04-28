import React from 'react';
import './userlist.css';
import { Box } from 'react-bootstrap-icons';

const UserList = (props) => {
    const userList = props.userList;
    const idSelect = props.userSelecter;
    const visible = props.visible;
    return (
        <>
            <div
                className={`user__container ${visible ? 'active' : ''} ${
                    userList.length < 4 ? 'change-height' : ''
                }`}
            >
                <ul className='user__list'>
                    {userList &&
                        userList.map((item, i) => (
                            <li
                                className={`user-item ${
                                    idSelect == item.id ? 'active' : ''
                                }`}
                                key={item.id}
                                onClick={() => props.onClick(item.id)}
                            >
                                {item.name}
                            </li>
                        ))}
                    {userList.length <= 0 && (
                        <div className='empty-user'>
                            <Box></Box>
                        </div>
                    )}
                </ul>
            </div>
        </>
    );
};

export default UserList;
