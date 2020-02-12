import * as actionType from '../actions/actions';

const intialState = {
    counter: 0
};

const reducer = (state = intialState, action) => {
    console.log('[counter Reducer executed]');
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
    }
    return state;
};

export default reducer;