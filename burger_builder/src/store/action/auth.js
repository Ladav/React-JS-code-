import * as actionTypes from './actionTypes';

export const authSuccess = () => {
    return {
        type: actionTypes.AUTH_SUCCESS
    };
};
export const authFailed = () => {
    return {
        type: actionTypes.AUTH_FAILED
    };
};
export const authStart = (email, pwd) => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const auth = (email, pwd) => {
    return dispatch => {
        dispatch(authStart());
    };
};
