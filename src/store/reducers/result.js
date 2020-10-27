import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({
                    id: Math.random(),
                    value: action.result,
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