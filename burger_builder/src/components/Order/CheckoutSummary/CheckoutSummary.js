import React from 'react';
// import { Redirect } from 'react-router-dom';

import Burger from '../../../components/Burger/Burger';
import Button from '../../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h2>We hope it tastes Well :)</h2>
            <div style={{ width: '90%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
};

export default checkoutSummary;