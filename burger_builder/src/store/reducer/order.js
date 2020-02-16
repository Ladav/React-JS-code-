import * as actionTypes from '../action/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_ORDER_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PURCHASE_ORDER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                orders: state.orders.concat(newOrder),
                loading: false
            };
        case actionTypes.PURCHASE_ORDER_FAILED:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;