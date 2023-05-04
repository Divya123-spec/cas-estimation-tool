import React, { Component } from "react";

import './Pages/Dashboard/UserEstimates/UserEstimate.scss';
import './Pages/Export/Export.css';

import { Route, Switch, withRouter, Redirect, } from "react-router-dom";
import NotFound from "./Components/CommonFuncs/NotFound";
import GeneralInput from "./Pages/OpportunityInputsParameter/GeneralInput/GeneralInput";
import CloudAppOpps from "./Pages/OpportunityInputsParameter/CloudAppOpsInput/CloudAppOpps";
import AmsInput from "./Pages/OpportunityInputsParameter/AMSInput/AMS";
import TestingInput from "./Pages/OpportunityInputsParameter/Testing/Testing";
import SecurityInput from "./Pages/OpportunityInputsParameter/Security/Security";
import NonLabour from "./Pages/OpportunityInputsParameter/NonLabour/NonLabour";
import HeaderUser from "./Components/CommonFuncs/Header/HeaderUser";
import OpportunityParameters from "./Pages/OpportunityInputsParameter/OpportunityParameters/OpportunityParameters";
import MainOutput from "./Pages/Output/MainOutput";
import MainOutputCharts from './Pages/Output/ChartsDisplay';
import TermsConditions from "./Pages/OpportunityInputsParameter/TermsConditions/TermsConditions";
import Dashboard from "./Pages/OpportunityInputsParameter/Dashboard/Dashboard";
import AMSCalculation from "./Pages/Output/AmsCalculation";
import Transition from "./Pages/OpportunityInputsParameter/Transition/Transition";
import ProductivityCalculation from "./Pages/Output/ProductivityCalculation";
import CloudCalculation from "./Pages/Output/CloudComplexity";
import Authentication from "./Components/CommonFuncs/Authentication";
import { englishValue } from "./Utils/CommonFunc";
import PrivateRoute from "./Components/CommonFuncs/NavBar/PrivateRouter";
import AuthenticationRouter from "./Components/CommonFuncs/NavBar/AuthenticationRouter";
import EffortBaselinePerTech from "./Pages/Output/EffortBaselinePerTech";
import ProductivityInput from "./Pages/ProductivityInput/Productivity Input";
import TestingCalculation from "./Pages/Output/TestingCalculation";
import SecurityCalculation from "./Pages/Output/SecurityCalculation";
import Automation from "./Pages/OpportunityInputsParameter/Automation/Automation";
import AutomationCalculation from "./Pages/Output/AutomationCalculation";
import YearRomOutputMain from "./Pages/Output/YearRomOutputMain";


export class RouteComponent extends Component {

    render() {
        return (

            <Switch>
                <Route path="/" exact component={Authentication} />
                <Route path="/TermsConditions" component={TermsConditions} />
                <AuthenticationRouter path="/dashboard" component={Dashboard} />
                <PrivateRoute path='/OppParamter' component={OpportunityParameters} />
                <PrivateRoute path='/ProductivityInput' component={ProductivityInput} />
                <PrivateRoute path='/general' component={GeneralInput} />
                <PrivateRoute path='/AMSInput' component={AmsInput} />
                <PrivateRoute path='/testing' component={TestingInput} />
                <PrivateRoute path='/security' component={SecurityInput} />
                <PrivateRoute path='/nonLabour' component={NonLabour} />
                <PrivateRoute path='/transition' component={Transition} />
                <PrivateRoute path='/cloudApps' component={CloudAppOpps} />
                <PrivateRoute path='/automation' component={Automation} />
                <PrivateRoute path='/mainOutput' component={MainOutput} />
                <PrivateRoute path='/YearROMCost' component={YearRomOutputMain} />            
                <PrivateRoute path='/AMSCalculation' component={AMSCalculation} />
                <PrivateRoute path='/ProductivityCalculation' component={ProductivityCalculation} />
                <PrivateRoute path='/CloudCalculation' component={CloudCalculation} />
                <PrivateRoute path='/mainOutputCharts' component={MainOutputCharts} />
                <PrivateRoute path='/EffortBaselinePerTech' component={EffortBaselinePerTech} />
                <PrivateRoute path='/TestingCalculation' component={TestingCalculation} />
                <PrivateRoute path='/SecurityCalculation' component={SecurityCalculation} />
                <PrivateRoute path='/AutomationCalculation' component={AutomationCalculation} />
                <Route component={NotFound} />
            </Switch>

        );
    }
}
export default withRouter(RouteComponent);
