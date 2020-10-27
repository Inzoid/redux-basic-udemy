import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter  - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter  + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter  - action.value
            }
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({
                    id: Math.random(),
                    value: state.counter,
                })
            }
        case actionTypes.DELETE_RESULTS:
            const updatedArray = state.results.filter((result, index) => result.id !== action.resultId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}

export default reducer;