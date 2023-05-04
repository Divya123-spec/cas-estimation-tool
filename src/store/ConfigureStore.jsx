import { applyMiddleware, compose, createStore, combineReducers } from "redux";

import thunk from "redux-thunk";
import UserInputDataReducer  from "./reducer/UserInputDataReducer";
import UserInputStatusReducer from './reducer/UserInputStatusReducer';
import UserDropDownReducer  from "./reducer/UserDropDownReducer";
import UserInpuDataFullReducer  from "./reducer/UserInpuDataFullReducer";
import UserOutputDataReducer  from "./reducer/UserOutputDataReducer";
import UserSavedEstimateReducer from "./reducer/UserSavedEstimateReducer";
import ScreenLoaderAppReducer from "./reducer/ScreenLoaderAppReducer"
import ApiIbmWeightedUtilization from "./reducer/ApiIbmWeightedUtilization";
import CalculateTicketPercentageReducer from "./reducer/CalculateTicketPercentageReducer";
import YearOneBaselineTestingFTEsReducer from "./reducer/YearOneBaselineTestingFTEsReducer";
import userEstimateStateReducer from "./reducer/userEstimateStateReducer";
import NavbarReducer from "./reducer/NavbarReducer";
import ScreenLoaderDashboardReducer from "./reducer/ScreenLoaderDashboardReducer";
import UserLoginReducer from "./reducer/UserLoginReducer";
import UserInputNonLabourStub from "./reducer/UserInputNonLabourStubReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const middleware = [thunk];
export const configureStore = () => {
  const reducers = combineReducers({
    userDropDown: UserDropDownReducer,
    userInputData: UserInputDataReducer,
    userOutputData:UserOutputDataReducer,
    userFullData:UserInpuDataFullReducer,
    userSessionData:UserSavedEstimateReducer,
    ApiIbmWeightedUtilize:ApiIbmWeightedUtilization,
    CalculateTicketPercentage:CalculateTicketPercentageReducer,
    YearOneBaselineTestingFTEs:YearOneBaselineTestingFTEsReducer,
    inputStatus:UserInputStatusReducer,
    userEstimateState:userEstimateStateReducer,
    userNavbarReducer:NavbarReducer,
    userScreenLoaderApp:ScreenLoaderAppReducer,
    screendashLoader:ScreenLoaderDashboardReducer,
    UserLogin:UserLoginReducer,
    userNonLabourStub:UserInputNonLabourStub
});

const middleware = [
    thunk
];

return createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

};
