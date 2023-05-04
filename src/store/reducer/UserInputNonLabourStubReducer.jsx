import * as actionTypes from '../actions/ActionType';

const initialState = {

};

const UserInputNonLabourStub = (state, action) => {
    state = state || initialState;
    switch (action.type) {    
        case actionTypes.USER_INPUT_NON_LABOUR_STUB:
            return {...action.data};
        default:
            return state;
    }
};
export default UserInputNonLabourStub;
