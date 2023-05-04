import React, { useState, useEffect } from 'react';
import NavBar from '../../../Components/CommonFuncs/NavBar/Navbar';
import HeaderInputs from '../HeaderInputs';
import { Content } from 'carbon-components-react';
import { englishValue, NumberValidationPercentage, NumberValidation, arrCoversionOrder, arrangeColumn } from "../../../Utils/CommonFunc";
import { breadcrumb } from "../../../Components/CommonFuncs/BreadCumbs";
import './Testing.scss';
import {
    testing_testingFTEDistributionPercentage_C93,
    testing_testingFTEDistributionPercentage_D93,
    testing_testingFTEDistributionPercentage_E93,
    testing_testingAdditionalFTECountDistribution_F95
} from "../../../Components/CommonFuncs/formula/FormulaComponent_Testing"
import TableData from '../../../Components/CommonFuncs/TableInput';
import UseCustomInput from '../UseCustomInput';
import LoaderApp from '../../LoaderApp';
import { calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs } from '../../../Components/CommonFuncs/formula/FormulaComponent_applicationTechnology';
import { input_validation_main } from '../../../Components/CommonFuncs/formula/Validations/ValidationMain';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store/actions/ActionCreator';
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
//AMS Estimates Data 
const Testing = React.memo((props) => {
    const [initialstate, setInitialstate] = useState(props.userInpuData.defaultInputData['response']['estimate'].userInputs)

    let { tableCellInput } = UseCustomInput(initialstate.testing);

    //reagranging of rows
    tableCellInput =  arrCoversionOrder(tableCellInput, [
        "testingFTEDistributionPercentage",
        "testingFTECountDistribution",
        "testingAdditionalFTECountDistribution",
        "totalTestFTEInSolutionCountDistribution",
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

        input_validation_main(props, userInputData, objStatus);
        let btnInput = btnFunction(objStatus);
        setNewHandleFlag(true)
        props.userInputDataEditFormulaInfo(userInputData, btnInput);

    }
    const inputEditBaselineTestingFTEs = (userInputData, objStatus) => {
        props.resetDashcalculateMinEnhWtHrs(userInputData).then((res) => {
            if (res.status === 'SUCCESS') {
                //Now API output change feilds calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs
                calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs(props, userInputData, res.data);
                input_validation_main(props, userInputData, objStatus);
                let btnInput = btnFunction(objStatus);
                setNewHandleFlag(true)
                props.userInputDataEditFormulaInfo(userInputData, btnInput);

            }

            else {
                if (res.errorCode === 'ERRCAS401B') {
                    props.history.push('/');
                }else{
                    alert(englishValue('TechnicalError'))
                }
               
                let btnInput = btnFunction(objStatus);
                setNewHandleFlag(true)
                props.userInputDataEditFormulaInfo(userInputData, btnInput);

            }
        }).catch((err) => {
            alert(englishValue('TechnicalError'))
            let btnInput = btnFunction(objStatus);
            setNewHandleFlag(true)
            props.userInputDataEditFormulaInfo(userInputData, btnInput);
        });
    };
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
        let idOppParameter = valueOppParameter[1] + '_' + valueOppParameter[2];
        let userData = props.userInpuData.defaultInputData.response;
        let userInputData = userData['estimate']['userInputs'];
        var IntitalValue = userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]];
        setFocusValueIdFlag("");
        setFocusFlag(false);
        if (parseFloat(IntitalValue) === parseFloat(e.target.value)) {

        }
        else {
            if (idOppParameter == "testingAdditionalFTECountDistribution_total") {
                userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = (e.target.value);
            } else {
                userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = parseFloat(e.target.value);
            }
            switch (idOppParameter) {
                case "testingFTEDistributionPercentage_simple":
                    testing_testingFTEDistributionPercentage_C93(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case "testingFTEDistributionPercentage_medium":
                    testing_testingFTEDistributionPercentage_D93(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case "testingFTEDistributionPercentage_complex":
                    testing_testingFTEDistributionPercentage_E93(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case "testingAdditionalFTECountDistribution_total":
                    testing_testingAdditionalFTECountDistribution_F95(props, userInputData);
                    inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus)
                    break;
                default:
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
                value = value.replace(/^0+/, 0);
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


    return (
        <div className="inputName">
            <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />

            <NavBar {...props}
                userNavBar={props.userInpuData.defaultInputData['response']['estimate']}
                title='testing'></NavBar>
            <Content>
                <HeaderInputs
                    userData1={props.userInpuData.defaultInputData['response']['estimate']}
                    {...props}
                    title='input'

                    resetHandler={resetHandler}

                ></HeaderInputs>
                <div className='testingInputMainHead'>
                    <div className='testingInput'>
                        {breadcrumb('Testing')}
                    </div>
                    <div className='testingInputMain'>
                        <div className="heading">
                            {englishValue('ApplicationCategory')}
                        </div>
                        <div className='table-class'>
                            <TableData
                                title=""
                                description=""
                                idTitle="testing"
                                handlerChange={handlerChange}
                                headers={["", "", englishValue('simple'), englishValue('medium'), englishValue('complex'), englishValue('total'), englishValue('range')]}
                                rows={tableCellInput}
                                UserState={props.userestimateState.state}
                                UserEmail={props.userestimateState.reviewerEmail}
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
export default connect(mapStateToProps, mapDispatchToProps)(Testing);