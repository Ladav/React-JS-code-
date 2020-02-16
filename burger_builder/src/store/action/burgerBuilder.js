import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (payload) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: payload.ingName
    };
};

export const removeIngredient = (payload) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: payload.ingName
    };
};

export const setIngredient = (ingredients) => {
    return {
        type: actionTypes.INIT_INGREDIENTS,
        ingredients: ingredients
    };
};

export const ingredientFetchFailed = () => {
    return {
        type: actionTypes.INGREDIENT_FETCH_FAILED
    };  
};

export const initIngredient = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(res => {
                dispatch(setIngredient(res.data));
            })
            .catch(error => {
                dispatch(ingredientFetchFailed());
            });
    };
};


