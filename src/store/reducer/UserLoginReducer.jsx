import * as actionTypes from '../actions/ActionType';

const initialState ="";

const UserLoginReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.USER_LOGIN_DATA:
            return {
                token:action.data.response.token,
                user:action.data.response.user
            };
        default:
            return state;
    }
};
export default UserLoginReducer;
