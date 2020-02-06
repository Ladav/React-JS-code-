import React from 'react';
import { Redirect } from 'react-router-dom';

import Burger from '../../../components/Burger/Burger';
import Button from '../../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h2>We hope it tastes Well :)</h2>
            <Burger ingredients={props.ingredients} />
            <Button btnType="Danger" clicked>CANCEL</Button>
            <Button btnType="Success" clicked>CONTINUE</Button>
        </div>
    )
};

export default checkoutSummary;