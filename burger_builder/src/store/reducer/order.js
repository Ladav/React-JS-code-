import * as actionTypes from '../action/actionTypes';
import updateObject from '../utility';

const initialState = {
    orders: [],
    loading: false,
    error: false,
    purchased: false
};

const purchaseInit = (state, action) => {
    return updateObject(state, { purchased: false });
};
const purchaseOrderStart = (state, action) => {
    return updateObject(state, { loading: true });
};
const purchaseOrderSuccess = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.orderId
    };
    return updateObject(state, {
        orders: state.orders.concat(newOrder),
        loading: false,
        purchased: true
    });
};
const purchaseOrderFailed = (state, action) => {
    return updateObject(state, { loading: false });
};
const fetchOrderStart = (state, action) => {
    return updateObject(state, { loading: true });
};
const fetchOrderSuccess = (state, action) => {
    return {
        ...state,
        orders: action.orders,
        loading: false
    };
};
const fetchOrderfailed = (state, action) => {
    return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
        case actionTypes.PURCHASE_ORDER_START: return purchaseOrderStart(state, action);
        case actionTypes.PURCHASE_ORDER_SUCCESS: return purchaseOrderSuccess(state, action);
        case actionTypes.PURCHASE_ORDER_FAILED: return purchaseOrderFailed(state, action);
        case actionTypes.FETCH_ORDER_START: return fetchOrderStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrderSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAILED: return fetchOrderfailed(state, action);
        default: return state;
    }
};

export default reducer;