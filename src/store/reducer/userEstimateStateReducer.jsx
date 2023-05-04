import * as actionTypes from '../actions/ActionType';

const initialState ="";

const userEstimateStateReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.USER_ESTIMATE_STATE_DATA:
            return{
                ...action.data
            }
        default:
            return state;
    }
};
export default userEstimateStateReducer;
