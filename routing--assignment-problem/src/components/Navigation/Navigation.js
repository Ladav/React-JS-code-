import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const navigation = () => {
    return(
        <div className="Navigation">
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/users">Users</NavLink>
        </div>
    );
};

export default navigation;