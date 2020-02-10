import * as actionType from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            const newState = Object.assign({}, state); // remember it will not deeply clone the state and that's ok because we are not altering the result(which is a ref type, so containing a ref to the object in the state) in any way in this case.
            newState.counter++;
            return newState;
        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case actionType.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            };
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id : new Date().getTime(), value: state.counter}) // concat will return a new array and will not alter the original array where as if had used push it will mutate the original array also
            };
        case actionType.DELETE_RESULT:
            const newResultsArr = state.results.filter(result => result.id !== action.resultElId)
            return {
                ...state,
                results:  newResultsArr
            }
    }

    return state;
};

export default reducer;