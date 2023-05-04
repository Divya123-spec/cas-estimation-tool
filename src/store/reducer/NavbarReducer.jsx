import * as actionTypes from '../actions/ActionType';

const initialState = {
    NavbarToggle: false,
    NavbarToggleInputProd: false,
    NavbarToggleOutputProd: false,
};

const NavbarReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.NAVBAR_INPUT_TOGGLE:
            return { ...state, NavbarToggle: !state.NavbarToggle };
        case actionTypes.NAVBAR_INPUT_TOGGLE_INPUT_PRODUCTIVITY:
            return { ...state, NavbarToggleInputProd: !state.NavbarToggleInputProd };
        case actionTypes.NAVBAR_INPUT_TOGGLE_OUTPUT_PRODUCTIVITY:
            return { ...state, NavbarToggleOutputProd: !state.NavbarToggleOutputProd };
        case actionTypes.NAVBAR_INPUT_TOGGLE_DEFAULT:
            return { ...state, NavbarToggle: false };
        case actionTypes.NAVBAR_INPUT_TOGGLE_INPUT_PRODUCTIVITY_DEFAULT:
            return { ...state, NavbarToggleInputProd: false };
        case actionTypes.NAVBAR_INPUT_TOGGLE_OUTPUT_PRODUCTIVITY_DEFAULT:
            return { ...state, NavbarToggleOutputProd: false };
        case actionTypes.NAVBAR_INPUT_TOGGLE_OUTPUT_PRODUCTIVITY_DEFAULT_OPEN:
            return { ...state, NavbarToggleOutputProd: true };
        default:
            return state;
    }
};
export default NavbarReducer;
