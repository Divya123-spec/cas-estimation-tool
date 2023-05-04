import React, { useState, useEffect } from 'react';
import NavBar from '../../../Components/CommonFuncs/NavBar/Navbar';
import HeaderInputs from '../HeaderInputs';
import { Content } from 'carbon-components-react';
import { englishValue, arrCoversionOrder, arrangeRows, arrangeColumn } from "../../../Utils/CommonFunc";
import { breadcrumb } from '../../../Components/CommonFuncs/BreadCumbs';
import './amsInput.scss';
import TableData from '../../../Components/CommonFuncs/TableInput';
import { NumberValidation, NumberValidationPercentage } from '../../../Utils/CommonFunc'
import LoaderApp from '../../LoaderApp';
import {
    ams_annualNumberOfTickets_I9,
    ams_annualNumberOfTickets_J9,
    ams_annualNumberOfTickets_K9,
    ams_annualNumberOfTickets_L9,
    ams_annualNumberOfTickets_M9,
    ams_annualNumberOfTickets_N9,
    ams_annualNumberOfTickets_O9,
    ams_annualNumberOfTickets_J10,
    ams_annualNumberOfTickets_K10,
    ams_annualNumberOfTickets_L10,
    ams_annualNumberOfTickets_M10,
    ams_annualNumberOfTickets_N10,
    ams_annualNumberOfTickets_O10

} from '../../../Components/CommonFuncs/formula/FormulaComponent_AMS';
import { calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs } from '../../../Components/CommonFuncs/formula/FormulaComponent_applicationTechnology';
import { input_validation_main } from '../../../Components/CommonFuncs/formula/Validations/ValidationMain';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store/actions/ActionCreator';
import AmsUtilizationCalculation from "./AmsUtilizationCalculation";
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

const AMS = React.memo((props) => {
    const [initialstate, setInitialstate] = useState(props.userInpuData.defaultInputData['response']['estimate'].userInputs)
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
    const sumAMSHandler = () => {
        let totalPercent = 100;
        const inScopeL1DistributionPercentage = initialstate['ams']['ticketsDistribution']['inScopeL1DistributionPercentage'];
        const inScopeL2DistributionPercentage = initialstate['ams']['ticketsDistribution']['inScopeL2DistributionPercentage'];
        const inScopeL3DistributionPercentage = initialstate['ams']['ticketsDistribution']['inScopeL3DistributionPercentage'];
        const inScopeL4DistributionPercentage = initialstate['ams']['ticketsDistribution']['inScopeL4DistributionPercentage'];
        const inScopeMinorEnchDistributionPercentage = initialstate['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage'];

        let y2 = (((Number(initialstate['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y2'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y2'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y2'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y2'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y2']))).toFixed(2));


        let y3 = (((Number(initialstate['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y3'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y3'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y3'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y3'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y3']))).toFixed(2));

        let y4 = (((Number(initialstate['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y4'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y4'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y4'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y4'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y4']))).toFixed(2));

        let y5 = (((Number(initialstate['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y5'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y5'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y5'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y5'])) +
            (Number(initialstate['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y5']))).toFixed(2));

        let y6 = (
            (inScopeL1DistributionPercentage['y6'] ? Number(inScopeL1DistributionPercentage['y6']) : 0) +
            (inScopeL2DistributionPercentage['y6'] ? Number(inScopeL2DistributionPercentage['y6']) : 0) +
            (inScopeL3DistributionPercentage['y6'] ? Number(inScopeL3DistributionPercentage['y6']) : 0) +
            (inScopeL4DistributionPercentage['y6'] ? Number(inScopeL4DistributionPercentage['y6']) : 0) +
            (inScopeMinorEnchDistributionPercentage['y6'] ? Number(inScopeMinorEnchDistributionPercentage['y6']) : 0)
        ).toFixed(2);

        let y7 = (
            (inScopeL1DistributionPercentage['y7'] ? Number(inScopeL1DistributionPercentage['y7']) : 0) +
            (inScopeL2DistributionPercentage['y7'] ? Number(inScopeL2DistributionPercentage['y7']) : 0) +
            (inScopeL3DistributionPercentage['y7'] ? Number(inScopeL3DistributionPercentage['y7']) : 0) +
            (inScopeL4DistributionPercentage['y7'] ? Number(inScopeL4DistributionPercentage['y7']) : 0) +
            (inScopeMinorEnchDistributionPercentage['y7'] ? Number(inScopeMinorEnchDistributionPercentage['y7']) : 0)
        ).toFixed(2);


        let sumy2 = parseFloat((parseFloat(totalPercent) - parseFloat(y2)).toFixed(2));
        let sumy3 = parseFloat((parseFloat(totalPercent) - parseFloat(y3)).toFixed(2));
        let sumy4 = parseFloat((parseFloat(totalPercent) - parseFloat(y4)).toFixed(2));
        let sumy5 = parseFloat((parseFloat(totalPercent) - parseFloat(y5)).toFixed(2));
        let sumy6 = parseFloat((parseFloat(totalPercent) - parseFloat(y6)).toFixed(2));
        let sumy7 = parseFloat((parseFloat(totalPercent) - parseFloat(y7)).toFixed(2));
        //0/05 -0.05
        if (((sumy2 >= (-0.6)) && (sumy2 <= 0.6))) {
            y2 = 100

        }
        if (((sumy3 >= (-0.6)) && (sumy3 <= 0.6))) {
            y3 = 100
        }
        if (((sumy4 >= (-0.6)) && (sumy4 <= 0.6))) {
            y4 = 100
        }
        if (((sumy5 >= (-0.6)) && (sumy5 <= 0.6))) {
            y5 = 100
        }
        if (((sumy6 >= (-0.6)) && (sumy6 <= 0.6))) {
            y6 = 100
        }
        if (((sumy7 >= (-0.6)) && (sumy7 <= 0.6))) {
            y7 = 100
        }

        let sumAms = {
            "y1": "",
            "y2": y2,
            "y3": y3,
            "y4": y4,
            "y5": y5,
            "y6": y6,
            "y7": y7,

            "uiStatus": {
                "iconStatus": {

                },
                "editableStatus": {
                    "y1": false,
                    "y2": false,
                    "y3": false,
                    "y4": false,
                    "y5": false,
                    "y6": false,
                    "y7": false,
                }
            }
        }
        initialstate['ams']['ticketsDistribution']['sumTotalAMS'] = sumAms
        if (((parseFloat(y2).toFixed(2)) !== totalPercent.toFixed(2)) || ((parseFloat(y3).toFixed(2)) !== totalPercent.toFixed(2)) || ((parseFloat(y4).toFixed(2)) !== totalPercent.toFixed(2)) || ((parseFloat(y5).toFixed(2)) !== totalPercent.toFixed(2)) || ((parseFloat(y6).toFixed(2)) !== totalPercent.toFixed(2)) || ((parseFloat(y7).toFixed(2)) !== totalPercent.toFixed(2))) {
            return true
        } else {

            return false
        }


    }
    sumAMSHandler();


    var tableCellTicket = Object.entries(initialstate.ams.ticketsDistribution);
    //rearranging of rows
    tableCellTicket = arrCoversionOrder(tableCellTicket, [
        "annualNumberOfTickets",
        "descopedTickets",
        "batchJobsTickets",
        "inScopeTicketVolumeAnnual",
        "inScopeTicketVolumeMonthly",
        "inScopeL1DistributionPercentage",
        "inScopeL2DistributionPercentage",
        "inScopeL3DistributionPercentage",
        "inScopeL4DistributionPercentage",
        "inScopeMinorEnchDistributionPercentage",
        "uiStatus",
        "sumTotalAMS"
    ]);
    //rearranging of columns
    tableCellTicket = arrangeColumn(tableCellTicket, ['y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7', 'uiStatus'])
    var tableCellUtilization = initialstate.ams.amsUtilizationCalculation;

    //rearranging of rows Amsutilization
    tableCellUtilization = arrangeRows(tableCellUtilization, [
        "blendedClientUtilizationAnnualHrs",
        "localHrs",
        "contractorsOnsiteHrs",
        "landedHrs",
        "offshoreHrs",
        "offshoreContractorsHrs",
        "ibmWeightedUtilizationAnnualHrs",
        "ibmWeightedUtilizationMonthlyHrs",
        "inScopeL4DistributionPercentage",
        "uiStatus"
    ]);

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

        setNewHandleFlag(true)


    }
    const handlerFocus = (e) => {
        let valueChange = e.target.id;
        setFocusValueIdFlag(valueChange);
        setFocusFlag(true);
    }
    const handleBlurChange = () => {
        setNewHandleFlag(true)
    }
    const inputEditBaselineTestingFTEs = (userInputData, objStatus) => {
        props.resetDashcalculateMinEnhWtHrs(userInputData).then((res) => {
            if (res.status === 'SUCCESS') {
                //Now API output change feilds calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs
                calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs(props, userInputData, res.data);
                input_validation_main(props, userInputData, objStatus);
                //change the btn status enabled or disabled depending on erorrs on checking validation
                let btnInput = btnFunction(objStatus);
                 // for reset to work properly and render our component
                setNewHandleFlag(true)
                // edit the redux data after all calculation of values
                props.userInputDataEditFormulaInfo(userInputData, btnInput);

            }

            else {
                if (res.errorCode === 'ERRCAS401B') {
                    props.history.push('/');
                } else {
                    alert(englishValue('TechnicalError'))
                }

                input_validation_main(props, userInputData, objStatus);
                let btnInput = btnFunction(objStatus);

                setNewHandleFlag(true)
                props.userInputDataEditFormulaInfo(userInputData, btnInput);

            }
        }).catch((err) => {
            alert(englishValue('TechnicalError'))
            input_validation_main(props, userInputData, objStatus);
            let btnInput = btnFunction(objStatus);

            setNewHandleFlag(true)
            props.userInputDataEditFormulaInfo(userInputData, btnInput);
        });
    }
    const handlerChange = (e) => {
        let ObjBtnStatus = {
            errorBtn: false,
            cheackBtn: false
        }
        let valueChange = e.target.id;
        let valueOppParameter = valueChange.split('_');
        let idOppParameter = valueOppParameter[2] + '_' + valueOppParameter[3];
        let userData = props.userInpuData.defaultInputData.response;
        let userInputData = userData['estimate']['userInputs'];
        var IntitalValue = userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]][valueOppParameter[3]];
        setFocusFlag(false);
        setFocusValueIdFlag('');
        if (parseFloat(IntitalValue) === parseFloat(e.target.value)) {
        }

        else {
            userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]][valueOppParameter[3]] = parseFloat(e.target.value)
            switch (idOppParameter) {
                case 'descopedTickets_y1':
                    ams_annualNumberOfTickets_I9(props, userInputData);
                    inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus)
                    break;
                case 'descopedTickets_y2':
                    ams_annualNumberOfTickets_J9(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case 'descopedTickets_y3':
                    ams_annualNumberOfTickets_K9(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case 'descopedTickets_y4':
                    ams_annualNumberOfTickets_L9(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case 'descopedTickets_y5':
                    ams_annualNumberOfTickets_M9(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case 'descopedTickets_y6':
                    ams_annualNumberOfTickets_N9(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case 'descopedTickets_y7':
                    ams_annualNumberOfTickets_O9(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case 'batchJobsTickets_y2':
                    ams_annualNumberOfTickets_J10(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case 'batchJobsTickets_y3':
                    ams_annualNumberOfTickets_K10(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case 'batchJobsTickets_y4':
                    ams_annualNumberOfTickets_L10(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case 'batchJobsTickets_y5':
                    ams_annualNumberOfTickets_M10(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case 'batchJobsTickets_y6':
                    ams_annualNumberOfTickets_N10(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
                    break;
                case 'batchJobsTickets_y7':
                    ams_annualNumberOfTickets_O10(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus)
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

            newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]][valueOppParameter[3]] = 0;

            setInitialstate({ ...newState });
        } else if (e.target.value === '0' || e.target.value === '0%') {

            newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]][valueOppParameter[3]] = 0;

            setInitialstate({ ...newState });
        }
        else {
            let value = e.target.value.replace(/^0+/, 0);
            newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]][valueOppParameter[3]] = value;
            if ((valueOppParameter[2]).includes('Percentage')) {
                let value = (e.target.value.replace(/%/, ''))
                value = value.replace(/^0+/, 0);
                newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]][valueOppParameter[3]] = value;

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
                title='AMSInput' />
            <Content>
                <HeaderInputs {...props}
                    userData1={props.userInpuData.defaultInputData['response']['estimate']}
                    title='input'
                    resetHandler={resetHandler}

                ></HeaderInputs>
                <div className='amsInputMainHead'>
                    <div className='amsInput'>
                        {breadcrumb('AMS')}
                    </div>
                    <div className='amsInputMain'>
                        <div className='UtilizationCalculation'>
                            <AmsUtilizationCalculation
                                userInpuData={props.userInpuData}
                                data={tableCellUtilization}
                                resetHandleFlag={resetHandleFlag}
                                UserState={props.userestimateState.state}
                                UserEmail={props.userestimateState.reviewerEmail}
                                idTitle="ams_UtilizationCalculation"
                                {...props}
                            />

                        </div>
                        <div className='TicketDistribution'>
                            <TableData
                                title={englishValue('YoYTickets')}
                                description={englishValue('GetInputs')}
                                idTitle="ams_ticketsDistribution"
                                headers={["", englishValue('Y1'), englishValue('Y2'), englishValue('Y3'), englishValue('Y4'), englishValue('Y5'), englishValue('Y6'), englishValue('Y7')]}
                                rows={tableCellTicket}
                                handlerChange={handlerChange}
                                UserState={props.userestimateState.state}
                                UserEmail={props.userestimateState.reviewerEmail}
                                handlerChangeData={handlerChangeData}
                                AmsError={sumAMSHandler()}
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
export default connect(mapStateToProps, mapDispatchToProps)(AMS);