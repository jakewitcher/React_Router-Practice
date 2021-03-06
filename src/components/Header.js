import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Page</NavLink>
            <NavLink to="/contact">Contact Page</NavLink>
        </div>
    )
}

export default Header;