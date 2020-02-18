import * as actionTypes from '../action/actionTypes';

const initialState = {
    userEmail: null,
    userPassword: null
}
const reducer = (state, action) => {
    console.log(action)
    if(action.type === actionTypes.LOGIN_USER) {
        return {
            userEmail: action.email,
            userPassword: action.pwd
        };
    }
    return state;
};

export default reducer;