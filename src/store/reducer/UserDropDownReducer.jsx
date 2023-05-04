import * as actionTypes from '../actions/ActionType';

const initialState = {

};

const UserDropDownReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.USER_DEFAULT_DROP_DATA:
            return {
                defaultDropDown: action.data,
                modalOpen: false,
                errorPage: false,
                error: '',
            };
        //close Modal
        case actionTypes.USER_DASHBOARD_DATA_RESET_MODAL_CLOSE: {
            return {
                ...state,
                modalOpen: false
            }
        }
        case actionTypes.USER_DEFAULT_DROP_DATA_EDIT:
            return {
                defaultDropDown: action.data,
                modalOpen: true,
                errorPage: false,
                error: '',
            };
        case actionTypes.USER_DEFAULT_DROP_DATA_ERROR:
            return {
                defaultDropDown: {
                    ...state.defaultDropDown,
                    status: action.data.errorStatus
                },
                modalOpen: false,
                errorPage: true,
                error: action.data.errorMessage,
            };
        case actionTypes.USER_DEFAULT_DROP_DATA_INPUT_ERROR:
            return {
                ...state,
                modalOpen: false,
                error: action.data.errorMessage,
            };
        case actionTypes.USER_DEFAULT_OUTPUT_MYESTIMATE_DATA:
            return {
                ...state,
                modalOpen: false
            };
        default:
            return state;
    }
};
export default UserDropDownReducer;
