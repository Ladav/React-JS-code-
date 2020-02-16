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

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.INIT_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...action.ingredients
                }
            };
        case actionTypes.INGREDIENT_FETCH_FAILED:
            return {
                ...state,
                error: !state.error
            };
        default:
            return state;
    }
};

export default reducer;