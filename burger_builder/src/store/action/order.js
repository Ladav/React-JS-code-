import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

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