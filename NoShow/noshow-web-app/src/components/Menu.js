import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    const activeStyle = {
        color: 'blue',
        fontSize: '1rem'
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink to="/register" activeStyle={activeStyle}>Register</NavLink></li>
                <li><NavLink to="/reservation" activeStyle={activeStyle}>Reservation</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;