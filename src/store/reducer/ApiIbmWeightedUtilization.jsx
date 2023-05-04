import * as actionTypes from '../actions/ActionType';

const initialState ="";

const ApiIbmWeightedUtilization = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.WEIGHTED_UTILIZATION_HOURS:
            return {...action.data};
        default:
            return state;
    }
};
export default ApiIbmWeightedUtilization;
