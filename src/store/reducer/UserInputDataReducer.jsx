import * as actionTypes from '../actions/ActionType';

const initialState = {

};

const UserInputDataReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.USER_DEFAULT_INPUT_DATA:
            return {
                defaultInputData: action.data,
                errorPage: false,
                error: '',
            };
        case actionTypes.USER_DEFAULT_INPUT_DATA_ESTIMATEID:
            return {
                defaultInputData: {
                    "response": {
                        "estimate": {
                            ...action.data['response']['estimate'],
                            'intermediateOutputs': {},
                            'finalOutputs': {}
                        },
                        status: "SUCCESS",
                        errors: []
                    }
                },
                errorPage: false,
                error: '',
            };
        case actionTypes.USER_DEFAULT_INPUT_DATA_EDIT_SAVE:
            return {
                defaultInputData: {
                    "response": {
                        ...state.defaultInputData['response'],
                        "estimate": {
                            ...state.defaultInputData['response']['estimate'],
                            "_id": action.data.idsaved,
                            "_rev":action.data.revid
                        },
                        status: "SUCCESS",
                        errors: []
                    }
                },
                errorPage: false,
                error: '',
            };
            case actionTypes.USER_DEFAULT_INPUT_STATUS_REVID_EDIT_SAVE:
                return {
                    defaultInputData: {
                        "response": {
                            ...state.defaultInputData['response'],
                            "estimate": {
                                ...state.defaultInputData['response']['estimate'],
                                "state": action.data.status,
                                "_rev":action.data.revid
                            },
                            status: "SUCCESS",
                            errors: []
                        }
                    },
                    errorPage: false,
                    error: '',
                };
                case actionTypes.USER_DEFAULT_INPUT_STATUS_REVID_REWORK_SAVE:
                    return {
                        defaultInputData: {
                            "response": {
                                ...state.defaultInputData['response'],
                                "estimate": {
                                    ...state.defaultInputData['response']['estimate'],
                                    "_rev":action.data.revid
                                },
                                status: "SUCCESS",
                                errors: []
                            }
                        },
                        errorPage: false,
                        error: '',
                    };
        case actionTypes.USER_DEFAULT_INPUT_DATA_EDIT:
            return {
                defaultInputData: action.data,
                errorPage: false,
                error: '',
            };
        case actionTypes.USER_DEFAULT_INPUT_DATA_ERROR:
            return {
                defaultInputData: {
                    ...state.defaultInputData,
                    status: action.data.errorStatus
                },
                errorPage: true,
                error: action.data.errorMessage,
            };
        case actionTypes.USER_DEFAULT_INPUT_DATA_FORMULA:
            return {
                defaultInputData: {
                    ...state.defaultInputData,
                    'response': {
                        "estimate": {
                            ...state.defaultInputData.response.estimate,
                            "userInputs": {
                                ...state.defaultInputData.response.estimate.userInputs,
                                [action.data.dataTypeUser]: { ...action.data.dataTypeUser }
                            }
                        }
                    }
                },
                errorPage: false,
                error: '',
            };
        case actionTypes.USER_DEFAULT_INPUT_DATA_FORMULA_USERINPUT:
            return {
                defaultInputData: {
                    ...state.defaultInputData,
                    'response': {
                        "estimate": {
                            ...state.defaultInputData.response.estimate,
                            "userInputs": {
                                ...action.data
                            }
                        }
                    }
                },
                errorPage: false,
                error: '',
            };
        case actionTypes.UPDATE_USER_INPUT_FIELDS:
           
            return {
                defaultInputData: {
                    ...state.defaultInputData,
                    'response': {
                        "estimate": {
                            ...state.defaultInputData.response.estimate,
                            "userInputs": {
                                ...state.defaultInputData.response.estimate.userInputs,
                                [action.payload.key]: action.payload.data
                            }
                        }
                    }
                },
                errorPage: false,
                error: '',
            };
        default:
            return state;
    }
};
export default UserInputDataReducer;
