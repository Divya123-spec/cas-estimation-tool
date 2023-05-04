import * as actionTypes from '../actions/ActionType';

const initialState = {

};

const UserInpuDataFullReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.USER_INPUT_DATA:
            return {
                ...state,
                arr: action.data
            };
        case actionTypes.USER_INPUT_DATA_EDIT:
            return {
                ...state,
                arr: [
                    { ...state.arr[0] },
                    {
                        ...state.arr[1],
                        response: {
                            estimate: {
                                ...state.arr[1]['response']['estimate'],
                                ...action.data
                            }
                        }
                    },
                    { ...state.arr[2] },
                ]
            };
        case actionTypes.USER_INPUT_DATA_EDIT_DROPDOWN:
            return {
                ...state,
                arr: [
                    { ...action.data },
                    { ...state.arr[1] },
                    { ...state.arr[2] },
                ]
            };
        case actionTypes.USER_INPUT_DATA_EDIT_INPUT:
            return {
                ...state,
                arr: [
                    { ...state.arr[0] },
                    { ...action.data },
                    { ...state.arr[2] },
                ]
            };
        case actionTypes.USER_INPUT_DATA_EDIT_OUTPUT:
            return {
                ...state,
                arr: [
                    { ...state.arr[0] },
                    {
                        ...state.arr[1],
                        response: {
                            estimate: {
                                ...state.arr[1]['response']['estimate'],
                                ...action.data
                            }
                        }
                    },
                    { ...state.arr[2] },
                ]
            };
        default:
            return state;
    }
};
export default UserInpuDataFullReducer;
