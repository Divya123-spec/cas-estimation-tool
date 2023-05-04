import * as actionTypes from '../actions/ActionType';

const initialState = {
    flag:false,
    label:''
};

const ScreenLoaderAppReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.SCREEN_LOADER_SHOW:
            return {
                flag:action.data.flag,
                label:action.data.labelName
            };
        case actionTypes.SCREEN_LOADER_HIDE:
            return {
                flag:false,
                label:''
            };
          
        default:
            return state;
    }
};
export default ScreenLoaderAppReducer;
