import React from 'react';

import classes from './Logo.css';

import burgerLogo from '../../assets/img/burger-logo.png'
const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="logo"></img>
    </div>
);

export default logo;