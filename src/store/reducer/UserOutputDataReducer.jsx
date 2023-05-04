import * as actionTypes from '../actions/ActionType';

const initialState = {

};

const UserOutputDataReducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case actionTypes.USER_DEFAULT_OUTPUT_DATA:
            return {
                defaultOutputData:action.data 
            };
        case actionTypes.USER_DEFAULT_OUTPUT_DATA_EDIT:
            return {
                defaultOutputData:action.data
            };
            case actionTypes.USER_DEFAULT_OUTPUT_DATA_SAVE:
                return {
                    defaultOutputData:action.data
                };
                case actionTypes.USER_DEFAULT_OUTPUT_DATA_ESTIMATEID:
                    return {
                        defaultOutputData:{
                            "response":{
                                'intermediateOutputs':{...action.data['response']['estimate']['intermediateOutputs']}, 
                                'finalOutputs': {...action.data['response']['estimate']['finalOutputs']},
                                'entityVersionsUsedInCalculation': {...action.data['response']['estimate']['entityVersionsUsedInCalculation']}
                            },
                            status: "SUCCESS",
                            errors :[]
                            }
                    };
                case actionTypes.USER_DEFAULT_SEND_FOR_REVIEW_DATA:
                    return {
                        defaultOutputData:action.data
                    }; 
                    case actionTypes.USER_DEFAULT_OUTPUT_DELETE:
                        return {
                        };
        default:
            return state;
    }   
};

export default UserOutputDataReducer;
