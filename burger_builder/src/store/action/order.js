import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseInit = () => {    // to redirect to index after order purchased
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const purchaseOrderSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_ORDER_SUCCESS,
        prderId: id,
        orderData: orderData,
    };
};

export const purchaseOrderFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_ORDER_FAILED,
        error: error
    };
};

export const purchaseOrderStart = () => {
    return { type: actionTypes.PURCHASE_ORDER_START }
};

export const purchaseOrder = (payload) => {
    return dispatch => {
        dispatch(purchaseOrderStart());
        axios.post('/orders.json', payload.orderData)
            .then(res => {
                dispatch(purchaseOrderSuccess(res.data.name, payload.orderData));
            })
            .catch(error => {
                dispatch(purchaseOrderFailed(error));
            });
    };
};

export const addOrders = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFailed = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILED,
        error: error
    };
};
export const fetchOrderStart = () => {
    return { type: actionTypes.FETCH_ORDER_START }
};

export const fetchOrders = (ordersData) => {
    return dispatch => {
        dispatch(fetchOrderStart());
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                
                for(let uniqueOrder in res.data) {
                   fetchedOrders.push({...res.data[uniqueOrder], id: uniqueOrder});
                }

                dispatch(addOrders(fetchedOrders));
            })
            .catch(error => {
                dispatch(fetchOrdersFailed(error));
            });
    };
};