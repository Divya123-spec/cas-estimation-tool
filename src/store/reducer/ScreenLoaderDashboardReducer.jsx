import * as actionTypes from '../actions/ActionType';

const initialState = {
    flag: false,
    label: '',
    flagVersion: false,
    labelVersion: '',
    flagMigration: false,
    labelMigration: ''
};

const ScreenLoaderDashboardReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.SCREEN_LOADER_SHOW_DASH:
            return {
                ...state,
                flag: action.data.flag,
                label: action.data.labelName
            };
        case actionTypes.SCREEN_LOADER_HIDE_DASH:
            return {
                ...state,
                flag: false,
                label: ''
            };
        case actionTypes.SCREEN_LOADER_SHOW_DASH_MIGRATION:
            return {
                ...state,
                flagMigration: action.data.flag,
                labelMigration: action.data.labelName
            };
        case actionTypes.SCREEN_LOADER_HIDE_DASH_MIGRATION:
            return {
                ...state,
                flagMigration: false,
                labelMigration: ''
            };
        case actionTypes.SCREEN_POPUP_SHOW:
            return {
                ...state,
                flagVersion: action.data.flagVersion,
                labelVersion: action.data.labelNameVersion,
                labelVersionStatus: action.data.labelVersionStatus,
                ownerEmail: action.data.ownerEmail
            };
        case actionTypes.SCREEN_POPUP_HIDE:
            return {
                ...state,
                flagVersion: false,
                labelVersion: '',
                labelVersionStatus: '',
                ownerEmail: ''
            };
        default:
            return state;
    }
};
export default ScreenLoaderDashboardReducer;
