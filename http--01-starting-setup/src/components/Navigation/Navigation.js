import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const navigation = (props) => (
    <header className="Navigation">
        <nav>
            <ul>
                <li><NavLink 
                to="/" 
                exact
                activeClassName="my-active"
                activeStyle={{
                    color: '#ccc',
                    fontWeight: 'bold'
                }}>HOME</NavLink></li>
                <li><NavLink to={{
                    pathname: "/new-post",
                    hash: "#gosomewhereelse",
                    search: "?jaishreeram=true"
                }}>NEW POSTS</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default navigation;