import * as actionTypes from '../actions/ActionType';

const initialState = {
 EstimateButton:true,   
 SaveButton:false,
 CalculateButton:false,
 RestButton:false,
 SendForReivewButton:false,
 Export:false,
 inputButton:false,
 outputButton:false,
 calculateModal:false,
 saveModal:false

}

const UserInputStatusReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.USER_DEFAULT_STATUS_DATA:
            return {
                ...action.data
            };     
            default:
            return state;
    }   
};


export default UserInputStatusReducer;