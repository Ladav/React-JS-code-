import * as actionTypes from '../action/actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    bacon: 0.5,
    cheese: 0.7,
    meat: 1.8,
    salad: 0.4
};

const addIngredients = (state, action) => {
    return {
        ...state,
        ingredients : {
            ...state.ingredients,
            [action.ingredientName] : state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
};
const removeIngredients = (state, action) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    };
};
const initIngredients = (state, action) => {
    return {
        ...state,
        ingredients: {
            ...action.ingredients
        },
        totalPrice: 4,
        error: false
    };
};
const ingredientFetchFailed = (state, action) => {
    return {
        ...state,
        error: !state.error
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredients(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredients(state, action);
        case actionTypes.INIT_INGREDIENTS: return initIngredients(state, action);
        case actionTypes.INGREDIENT_FETCH_FAILED: return ingredientFetchFailed(state, action);
        default: return state;
    }
};

export default reducer;