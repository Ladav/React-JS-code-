export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    };
};
export const decrement = () => {
    return {
        type: DECREMENT
    };
};
export const add = (payload) => {
    return {
        type: ADD,
        value: payload.value
    };
};
export const subtract = (payload) => {
    return {
        type: SUBTRACT,
        value: payload.value
    };
};
export const storeResult = (payload) => {
    return {
        type: STORE_RESULT,
        result: payload.result
    };
};
export const deleteResult = (payload) => {
    return {
        type: DELETE_RESULT,
        id: payload.id
    };
};