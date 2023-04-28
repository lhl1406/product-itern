import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, ArrowLeftCircle, ChevronLeft } from 'react-bootstrap-icons';
import './header.css';
const Header = () => {
    const { pathname } = useLocation();

    const headerNav = [
        {
            display: 'test',
            path: '/test',
        },
        {
            display: 'Todo',
            path: '/todo',
        },
    ];
    const active = headerNav.findIndex((e) => e.path == pathname);
    return (
        <div className='header'>
            <div className='section__header'>
                <label htmlFor='menu'>
                    <List className='icon-menu'></List>
                </label>
                <Link to='/' className='img-logo'>
                    <img
                        src='https://geekup.vn/Icons/geekup-logo-general.svg'
                        alt='logo'
                    ></img>
                </Link>
                <input type='checkbox' hidden id='menu' />
                <div className='list-menu'>
                    {headerNav.map((item, i) => (
                        <Link
                            key={i}
                            className={`item-menu ${
                                i === active ? 'active' : ''
                            }`}
                            to={item.path}
                        >
                            {item.display}
                        </Link>
                    ))}
                    <label htmlFor='menu'>
                        <div className='icon-close-menu'>
                            <ChevronLeft className='arrow-icon'></ChevronLeft>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;
