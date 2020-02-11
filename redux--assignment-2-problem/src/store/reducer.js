import * as actionType from './actions';

const intialState = {
    persons: []
};

const reducer = (state = intialState, action) => {
    if(action.type === actionType.ADD_PERSON) {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: action.personData.name,
            age: action.personData.age
        };
        return {
            persons: [...state.persons, newPerson]
        };
    }

    if(action.type === actionType.DELETE_PERSON) {
        return {
            persons: state.persons.filter(person => action.id !== person.id)
        };
    }

    return state;
};

export default reducer;