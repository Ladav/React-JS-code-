import * as actionType from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id : new Date().getTime(), value: action.result}) // concat will return a new array and will not alter the original array where as if had used push it will mutate the original array also
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