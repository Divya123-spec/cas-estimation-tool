import * as actionTypes from '../actions/ActionType';

const initialState ="";

const YearOneBaselineTestingFTEsReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.YEAR_BASELINE_TESTING:
            return {...action.data};
        default:
            return state;
    }
};
export default YearOneBaselineTestingFTEsReducer;
