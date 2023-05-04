import * as actionTypes from '../actions/ActionType';

const initialState ="";

const CalculateTicketPercentageReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.CALCULATE_TICKET_PERCENTAGE:
            return {...action.data};
        default:
            return state;
    }
};
export default CalculateTicketPercentageReducer;
