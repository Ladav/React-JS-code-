import React from 'react';

import classes from './Order.css';

const order = (props) => {
    let ingredients = [];
    for(let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }
    
    const ingredientsOutput = ingredients.map(i => {
        return <span style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            padding: '5px',
            border: '1px solid #ccc',
        }} key={i.name}>{i.name}: ({i.amount})</span>
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients- {ingredientsOutput}</p>
            <p>Price- <strong>${Number.parseFloat(props.price).toFixed(2) }</strong></p>
        </div>
    );
};

export default order;