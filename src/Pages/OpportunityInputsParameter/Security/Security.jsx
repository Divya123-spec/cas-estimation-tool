import React, { useState, useEffect } from 'react';
import NavBar from '../../../Components/CommonFuncs/NavBar/Navbar';
import HeaderInputs from '../../OpportunityInputsParameter/HeaderInputs';
import { Content } from 'carbon-components-react';
import { englishValue, NumberValidationPercentage, NumberValidation, arrCoversionOrder, arrangeColumn } from "../../../Utils/CommonFunc";
import { breadcrumb } from '../../../Components/CommonFuncs/BreadCumbs';
import './Security.scss';
import {
    security_appSecurityScopeDistributionPercentage_C98,
    security_appSecurityScopeDistributionPercentage_D98,
    security_appSecurityScopeDistributionPercentage_E98,
    security_remediationTicketsDistributionPercentage_C101,
    security_remediationTicketsDistributionPercentage_D101,
    security_remediationTicketsDistributionPercentage_E101
} from "../../../Components/CommonFuncs/formula/FormulaComponent_Security"
import TableData from '../../../Components/CommonFuncs/TableInput';
import UseCustomInput, { UseSecurityCustomInput } from '../UseCustomInput';
import LoaderApp from '../../LoaderApp';
import { input_validation_main } from '../../../Components/CommonFuncs/formula/Validations/ValidationMain';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store/actions/ActionCreator';
import { connect } from 'react-redux';
import Feedback from '../../Feedback/Feedback';
function mapStateToProps(state) {
    return {
        userDropDownData: state.userDropDown,
        userInpuData: state.userInputData,
        userOutputData: state.userOutputData,
        userSessionData: state.userSessionData,
        userApiIbmWeightedUtilize: state.ApiIbmWeightedUtilize,
        userCalculateTicketPercentage: state.CalculateTicketPercentage,
        userYearOneBaselineTestingFTEs: state.YearOneBaselineTestingFTEs,
        userinputStatusData: state.inputStatus,
        userestimateState: state.userEstimateState,
        userNavbarToggle: state.userNavbarReducer,
        userAppScreenLoader: state.userScreenLoaderApp,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
const Security = React.memo((props) => {
    const [initialstate, setInitialstate] = useState(props.userInpuData.defaultInputData['response']['estimate'].userInputs)

    let { disableBtn, tableCellInput } = UseCustomInput(initialstate.security, props.userInpuData);
   //reagranging of rows
    tableCellInput =  arrCoversionOrder(tableCellInput, [
        "appSecurityScopeDistributionPercentage",
        "appCountSecurityScopeBasedDistribution",
        "numberOfScansPlannedPerYearPerApp",
        "remediationTicketsDistributionPercentage",
        "remediationTicketsCountDistribution",
        "remediationFTEDistribution",
        "uiStatus"
    ]);
    tableCellInput=arrangeColumn(tableCellInput,['simple','medium','complex','total','range','uiStatus'])
    const [resetHandleFlag, setresetHandleFlag] = useState(false);
    const [NewHandleFlag, setNewHandleFlag] = useState(false);
    const [FocusFlag, setFocusFlag] = useState(false);
    const [FocusValueIdFlag, setFocusValueIdFlag] = useState('');
    useEffect(() => {
        if (resetHandleFlag || NewHandleFlag) {
            setInitialstate({ ...props.userInpuData.defaultInputData['response']['estimate'].userInputs });
            setresetHandleFlag(false);
            setNewHandleFlag(false)
        }
    })

    const resetHandler = () => {

        setresetHandleFlag(true);
    }
    const btnFunction = (objBtn) => {
        let inputBtnData = {}
        if (objBtn.errorBtn) {
            inputBtnData = {
                RestButton: true,
                EstimateButton: true,
                SaveButton: false,
                CalculateButton: false,
                SendForReivewButton: false,
                Export: false,
                inputButton: false,
                outputButton: false,
                calculateModal: false,
                saveModal: false
            }
        }
        else {
            inputBtnData = {
                RestButton: true, EstimateButton: true,
                SaveButton: false,
                CalculateButton: true,
                SendForReivewButton: false,
                Export: false,
                inputButton: true,
                outputButton: false,
                calculateModal: false,
                saveModal: false
            }
        }
        return inputBtnData
    }
    const inputEditDataNormal = (userInputData, objStatus) => {

        let value1 = Math.round(((Number(userInputData['general']['criticalAppPercentageOfTotalApps']['total'])-1).toFixed(2)));
        let value2 = Math.round(((Number(userInputData['general']['criticalAppPercentageOfTotalApps']['total']) + 6).toFixed(2)));
        let value3 = `${value1}%-${value2}%`;
        userInputData['security']['appSecurityScopeDistributionPercentage']['range'] = value3
        input_validation_main(props, userInputData, objStatus);
        let btnInput = btnFunction(objStatus);
        setNewHandleFlag(true)
        props.userInputDataEditFormulaInfo(userInputData, btnInput);

    }
    const handlerFocus = (e) => {
        let valueChange = e.target.id;
        setFocusValueIdFlag(valueChange);
        setFocusFlag(true);
    }
    const handlerChange = (e) => {
        let ObjBtnStatus = {
            errorBtn: false,
            cheackBtn: false
        }
        let valueChange = e.target.id;
        let valueOppParameter = valueChange.split('_');
        let idOppParameter = valueOppParameter[0] + '_' + valueOppParameter[1] + '_' + valueOppParameter[2];
        let userData = props.userInpuData.defaultInputData.response;
        let userInputData = userData['estimate']['userInputs'];
        var IntitalValue = userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]];
        setFocusValueIdFlag('');
        setFocusFlag(false);
        if (parseFloat(IntitalValue) === parseFloat(e.target.value)) {

        } else {
            userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = parseFloat(e.target.value)
            switch (idOppParameter) {
                case "security_appSecurityScopeDistributionPercentage_simple":
                    security_appSecurityScopeDistributionPercentage_C98(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
                case "security_appSecurityScopeDistributionPercentage_medium":
                    security_appSecurityScopeDistributionPercentage_D98(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
                case "security_appSecurityScopeDistributionPercentage_complex":
                    security_appSecurityScopeDistributionPercentage_E98(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
                case "security_remediationTicketsDistributionPercentage_simple":
                    security_remediationTicketsDistributionPercentage_C101(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
                case "security_remediationTicketsDistributionPercentage_medium":
                    security_remediationTicketsDistributionPercentage_D101(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
                case "security_remediationTicketsDistributionPercentage_complex":
                    security_remediationTicketsDistributionPercentage_E101(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
                default:
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
            }
        }
    };


    const handlerChangeData = (e) => {
        let valueChange = e.target.id;
        let valueOppParameter = valueChange.split('_');
        var newState = JSON.parse(JSON.stringify(initialstate));
        if (e.target.value === '' || e.target.value === '%') {
            newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = 0;
            setInitialstate({ ...newState });
        } else if (e.target.value === '0' || e.target.value === '0%') {
            newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = 0;
            setInitialstate({ ...newState });
        } else {
            let value = e.target.value.replace(/^0+/, 0);
            newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = value;
            if ((valueOppParameter[1]).includes('Percentage')) {
                let value = (e.target.value.replace(/%/, ''));
                value = value.replace(/^0+/, 0)
                newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = value;
                if (NumberValidationPercentage((value))) {
                    setInitialstate({ ...newState });
                }
            }
            else {
                if (NumberValidation((e.target.value))) {
                    setInitialstate({ ...newState });
                }

            }
        }



    }
    let userData = props.userInpuData.defaultInputData.response;
    let userInputData = userData['estimate']['userInputs'];
    //Start -- setting dynamic range
    let value1 = Math.round(((Number(userInputData['general']['criticalAppPercentageOfTotalApps']['total'])-1).toFixed(2)));
        let value2 = Math.round(((Number(userInputData['general']['criticalAppPercentageOfTotalApps']['total']) + 6).toFixed(2)));

    let value3 = `${value1}%-${value2}%`

    //end
    return (
        <div className="inputName">
            <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />

            <NavBar title='security'
                userNavBar={props.userInpuData.defaultInputData['response']['estimate']}
                {...props}
            />
            <Content>
                <HeaderInputs {...props}
                    userData1={props.userInpuData.defaultInputData['response']['estimate']}
                    title='input'
                    resetHandler={resetHandler}
                ></HeaderInputs>
                <div className='securityInputMainHead'>
                    <div className='securityInput'>
                        {breadcrumb('Security')}
                    </div>
                    <div className='securityInputMain'>
                        <div className="heading">
                            {englishValue('ApplicationCategory')}
                        </div>
                        <div className='table-class'>
                            <TableData
                                title=""
                                description=""
                                idTitle="security"
                                handlerChange={handlerChange}
                                headers={["", "", englishValue('simple'), englishValue('medium'), englishValue('complex'), englishValue('total'), englishValue('range')]}
                                rows={tableCellInput}
                                UserState={props.userestimateState.state}
                                UserEmail={props.userestimateState.reviewerEmail}
                                rangeData={value3}
                                handlerChangeData={handlerChangeData}
                                handlerFocus={handlerFocus}
                                FocusFlag={FocusFlag}
                                FocusValueIdFlag={FocusValueIdFlag}
                            ></TableData>
                        </div>
                    </div>
                </div>
                <Feedback/>
            </Content>
        </div>
    );
});
export default connect(mapStateToProps, mapDispatchToProps)(Security);