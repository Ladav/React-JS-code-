import React from 'react';

import classes from './Order.css';

const order = (props) => {
    let ingredients = '';
    Object.keys(props.ingredients)
        .forEach(ingredient => {
            ingredients = ingredients + `${ingredient}:${props.ingredients[ingredient]} `;
        });
        
    return (
        <div className={classes.Order}>
            <p>Ingredients- {ingredients}</p>
            <p>Price- <strong>${props.price}</strong></p>
        </div>
    );
};

export default order;