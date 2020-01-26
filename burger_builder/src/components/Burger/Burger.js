import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientName => {
        return [...Array(props.ingredients[ingredientName])].map((_, i) => {
            return <BurgerIngredient key={ingredientName + i} type={ingredientName} />
        });
    }).reduce((prevEl, curEl) => {
        return prevEl.concat(curEl);
    }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;