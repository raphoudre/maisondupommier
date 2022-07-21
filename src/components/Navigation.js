import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">
                <p>Home</p>
            </NavLink>
            <NavLink to="/about">
                <p>A propos</p>
            </NavLink>
        </div>
    );
};

export default Navigation;