import React, { useState, useEffect } from 'react';
import './HeaderInputs.scss';
import { Button, InlineNotification } from 'carbon-components-react';
import DeleteMyestimate from './DeleteMyestimate';
import SaveModal from './SaveModal';
import ResetModal from './ResetModal';
import SendForReviewModal from './SendforReviewModal';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions/ActionCreator";
import HeaderInputModal from './HeaderInputModal';
import { englishValue } from '../../Utils/CommonFunc';
import ExportInprogressModal from './ExportInprogressModal';
import ButtonMigrationModal from '../Versoning/ButtonMigrationModal';
import RecalculationModal from '../Versoning/RecalculationModal';
import inputService from "../../services/InputService";
import StaffingModal from '../Versoning/StaffingModal';
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
function mapStateToProps(state) {
    return {
        userSessionData: state.userSessionData,
        userAppScreenLoader: state.screendashLoader,
        calculateLoader: true
    };
}
let dashboardValue = '/dashboard'
const HeaderInputs = (props) => {

    let estimateJson = null
    if (props.userSessionData) {
        if (props.userSessionData.savedEstimateData !== undefined &&
            Object.keys(props.userSessionData.savedEstimateData).length > 0) {
            estimateJson = props.userSessionData.savedEstimateData['response']['estimate']
        }
    }
    //check maintance flag
    //start
    let userDataMaintance = window.localStorage.getItem('isMaintenancePlanned');
    userDataMaintance = JSON.parse(userDataMaintance);
    let isMaintenancePlannedMsg = window.localStorage.getItem('isMaintenancePlannedMsg');
    isMaintenancePlannedMsg = JSON.parse(isMaintenancePlannedMsg);
    //let userDataMaintance=false;
    //end
    //my estimw btn
    const estimateHandler = () => {
        props.showScreenLoader('EstimateBtn');
        let InputData = { "data": { "userInfo": { "email": props.userData1.ownerEmail } } }
        props.userMyEstimateData(InputData).then((res) => {
            if (res.status === 'SUCCESS') {
                props.userinputStatus({
                    RestButton: false, EstimateButton: true,
                    SaveButton: false,
                    CalculateButton: false,
                    SendForReivewButton: false,
                    Export: false,
                    outputButton: false,
                    inputButton: false,
                    calculateModal: false,
                    saveModal: false
                });
                props.resetDashBoard();
                props.history.push(dashboardValue);
                props.navigationInputToggleDefault();
                props.navigationInputToggleInputProductivityDefault();
                props.navigationInputToggleOutputProductivityDefault();
                props.hideScreenLoader();
            }
            else {
                if (res.errorCode === 'ERRCAS401B') {
                    props.history.push('/');
                } else {
                    alert(englishValue('TechnicalError'))
                }
                props.hideScreenLoader();

            }

        }).catch((err) => {
            alert(englishValue('TechnicalError'))
            props.hideScreenLoader();
        });
    }
    const SectorIndustryHandler = () => {
        let newArr = [];
        props?.userDropDownData?.defaultDropDown['response']['defaultDropdown']?.sector?.map(sectorObj => {
            sectorObj.industry?.map(ele => newArr.push(ele))
        })

        return newArr;

    }
    const getHeaderModelString = () => {
        // return (<ExportInprogressModal {...props}/>)
        if (estimateJson != null)
            return (<HeaderInputModal industry={SectorIndustryHandler()}
                salesStage={props.userDropDownData.defaultDropDown.response.defaultDropdown.salesStage}
                {...props} estimate={estimateJson}></HeaderInputModal>)
        else
            return (<HeaderInputModal {...props} ></HeaderInputModal>)

    }

    const generateStaffinghandler = () => {
        // get generate staffing excel files from API
        props.showScreenLoader();
        let estimateId =
            props.userInpuData.defaultInputData.response.estimate["_id"];
        let filenme =
            props.userInpuData.defaultInputData.response.estimate.estimationTitle + "_" + props.userInpuData.defaultInputData.response.estimate.clientName;
        inputService.exportDataGenerateStaffing(
            estimateId,
            `${filenme}`, props
        );

    };
    //calculate btn
    const calculateHandler = () => {
        // let InputData = { "data": props.userInpuData.defaultInputData['response'] }
        // // props.calculateHandler(true, 'calculateBtn');
        //  props.calculateHandler(true, 'calculateBtn');
        let newArr = [];
        newArr = props.userInpuData.defaultInputData['response']['estimate']['userInputs']['appTechnologyDistribution']['stdNonStdWorkStreams'];
        var newArrayDisttibution = newArr.filter((ele) => {
            if (ele.code != '-') {
                return ele
            }
        });
        newArrayDisttibution.forEach(ele => {
            delete ele['id'];
        }
        );
        props.userInpuData.defaultInputData['response']['estimate']['userInputs']['appTechnologyDistribution']['stdNonStdWorkStreams'] = newArrayDisttibution
        let cloudNewArr = props.userInpuData.defaultInputData['response']['estimate']['userInputs']['cloudAppOps'];
        delete cloudNewArr['sumTotalCloudApps'];
        props.userInpuData.defaultInputData['response']['estimate']['userInputs']['cloudAppOps'] = cloudNewArr;
        let generalNewArr = props.userInpuData.defaultInputData['response']['estimate']['userInputs']['general'];
        delete generalNewArr['sumTotalGeneral'];
        props.userInpuData.defaultInputData['response']['estimate']['userInputs']['general'] = generalNewArr;
        let amsNewArr = props.userInpuData.defaultInputData['response']['estimate']['userInputs']['ams']['ticketsDistribution'];
        delete amsNewArr['sumTotalAMS'];

        props.userInpuData.defaultInputData['response']['estimate']['userInputs']['ams']['ticketsDistribution'] = amsNewArr;
        // adding  entityVersionsUsedInCalculation for schema validator 
        if (props.userInpuData.defaultInputData['response']['estimate']['_id']) {
            props.userInpuData.defaultInputData['response']['estimate']['entityVersionsUsedInCalculation'] =
                props.userOutputData.defaultOutputData['response']['entityVersionsUsedInCalculation']
        }
        let InputData = { "data": props.userInpuData.defaultInputData['response'] };
        props.showScreenLoader('calculateBtn');

        // calculate and save toghther so whatever we had in save will be in success of calculate API
        let sendReview = true;
        if (props.userInpuData.defaultInputData['response'].estimate.saleStage === 'rom') {
            sendReview = false;
        }
        var inputDataStatus = {
            RestButton: false,
            EstimateButton: true,
            SaveButton: false,
            CalculateButton: false,
            SendForReivewButton: sendReview,
            Export: true,
            outputButton: true,
            inputButton: true,
            calculateModal: false,
            saveModal: true
        };

        props.userOutputDataEdit(InputData).then((res) => {
            if (res.status === 'SUCCESS') {
                if (res.data.response.isRecalculationPerformed) {
                    props.showScreenPopupVersion('Recalculation', '', '');
                }
                // props.userinputStatus({
                //     RestButton: true,
                //     EstimateButton: true,
                //     SaveButton: true,
                //     CalculateButton: false,
                //     SendForReivewButton: false,
                //     Export: false,
                //     outputButton: true,
                //     inputButton: true,
                //     calculateModal: true,
                //     saveModal: false
                // })

                props.userinputStatus(inputDataStatus);

                props.hideScreenLoader();
                props.navigationInputToggleDefault();
                props.navigationInputToggleInputProductivityDefault();
                props.navigationInputToggleOutputProductivityDefault();
                //JIRA -756  adding recent entity version in input   for schema validator
                props.userInpuData.defaultInputData['response']['estimate']['entityVersionsUsedInCalculation'] =
                    res.data.response.entityVersionsUsedInCalculation
                props.history.push('/mainOutput')
            }
            else {
                if (res.errorCode === 'ERRCAS401B') {
                    props.history.push('/');
                    // 409 error for migration flow
                } else if (res.errorCode === 'ERRCAS409') {
                    props.showButtonMigrationPopup();
                }else if (res.errorCode === 'ERRCASDB409'){
                    alert(res.errorMessage)
                } 
                else {
                    alert(englishValue('TechnicalError'))
                }
                props.hideScreenLoader();
            }
        }).catch((err) => {
            alert(englishValue('TechnicalError'))
            props.hideScreenLoader();
        });
    }
    const saveHandler = () => {
        let cloudNewArr = props.userInpuData.defaultInputData['response']['estimate']['userInputs']['cloudAppOps'];
        delete cloudNewArr['sumTotalCloudApps'];
        props.userInpuData.defaultInputData['response']['estimate']['userInputs']['cloudAppOps'] = cloudNewArr;
        let generalNewArr = props.userInpuData.defaultInputData['response']['estimate']['userInputs']['general'];
        delete generalNewArr['sumTotalGeneral'];
        props.userInpuData.defaultInputData['response']['estimate']['userInputs']['general'] = generalNewArr;
        let amsNewArr = props.userInpuData.defaultInputData['response']['estimate']['userInputs']['ams']['ticketsDistribution'];
        delete amsNewArr['sumTotalAMS'];
        props.userInpuData.defaultInputData['response']['estimate']['userInputs']['ams']['ticketsDistribution'] = amsNewArr;
        let InputData = {
            "data": {
                "estimate": {
                    ...props.userInpuData.defaultInputData['response'].estimate,
                    'intermediateOutputs': { ...props.userOutputData.defaultOutputData.response.intermediateOutputs },
                    'finalOutputs': { ...props.userOutputData.defaultOutputData.response.finalOutputs },
                    'entityVersionsUsedInCalculation': { ...props.userOutputData.defaultOutputData.response.entityVersionsUsedInCalculation }
                }
            }
        }
        props.showScreenLoader('saveBtn');
        let sendReview = true;
        if (props.userInpuData.defaultInputData['response'].estimate.saleStage === 'rom') {
            sendReview = false;
        }
        var inputDataStatus = {
            RestButton: false,
            EstimateButton: true,
            SaveButton: false,
            CalculateButton: false,
            SendForReivewButton: sendReview,
            Export: true,
            outputButton: true,
            inputButton: true,
            calculateModal: false,
            saveModal: true
        };
        props.userOutputDataSave(InputData).then((res) => {
            if (res.status === 'SUCCESS') {
                props.userinputStatus(inputDataStatus);
                props.hideScreenLoader();
                if (res.recalculate) {
                    props.showScreenPopupVersion('Recalculation', '', '');
                }

            }
            else {
                if (res.errorCode === 'ERRCAS401B') {
                    props.history.push('/');
                    // 409 error for migration flow
                } else if (res.errorCode === 'ERRCAS409') {
                    props.showButtonMigrationPopup();
                } else {
                    alert(englishValue('TechnicalError'))
                }
                props.hideScreenLoader();
            }
        }).catch((err) => {
            alert(englishValue('TechnicalError'))
            props.hideScreenLoader();
        });
    }
    //reset btn
    const resetHandler = () => {
        props.showScreenLoader('ResetBtn');
        let userValue = props.userInpuData.defaultInputData['response'];
        let idValue = userValue.estimate['_id'];
        let userDataOwner = window.localStorage.getItem('userData');
        if (userDataOwner) {
            userDataOwner = JSON.parse(userDataOwner);
        }
        let userData = {
            "data": {
                "estimationBasicDetails": {
                    "estimationTitle": userValue.estimate.estimationTitle,
                    "opportunityId": userValue.estimate.opportunityId,
                    "opportunityName": userValue.estimate.opportunityName,
                    "opportunityShortDesc": userValue.estimate.opportunityShortDesc,
                    "clientName": userValue.estimate.clientName,
                    "saleStage": userValue.estimate.saleStage,
                    "industry": userValue.estimate.industry,
                    "ownerEmail": userDataOwner.email,
                    "ownerName": userDataOwner.name
                }
            }
        }
        if (idValue === '') {
            props.userInputDataEditData(userData).then((res) => {
                if (res.status === 'SUCCESS') {
                    props.resetHandler();
                    props.navigationInputToggleOutputProductivityDefault();
                    props.hideScreenLoader();

                }
                else {
                    if (res.errorCode === 'ERRCAS401B') {
                        props.history.push('/');
                    } else {
                        alert(englishValue('TechnicalError'))
                    }
                    props.hideScreenLoader();
                }
            }).catch((err) => {
                alert(englishValue('TechnicalError'))
                props.hideScreenLoader();

            });
        }
        else {
            // getSavedEstimate
            props.getSavedEstimateReset(idValue).then((res) => {
                if (res.status === 'SUCCESS') {
                    props.resetHandler();
                    props.navigationInputToggleOutputProductivityDefault();
                    props.hideScreenLoader();
                    if (res.data?.inputData?.response?.isRecalculationPerformed) {
                        props.showScreenPopupVersion('Recalculation', '', '');
                    }

                }
                else {
                    if (res.errorCode === 'ERRCAS401B') {
                        props.history.push('/');
                        // 409 error for migration flow
                    } else if (res.errorCode === 'ERRCAS409') {
                        props.showButtonMigrationPopup();
                    } else {
                        alert(englishValue('TechnicalError'))
                    }
                    props.hideScreenLoader();
                }

            }).catch((err) => {
                alert(englishValue('TechnicalError'))

                props.hideScreenLoader();

            });
        }
    }

    const SectorIndustryHandler1 = () => {
        let newArr = [];
        props?.userDropDownData?.defaultDropDown['response']['defaultDropdown']?.sector?.map(sectorObj => {
            sectorObj.industry?.map(ele => newArr.push(ele))
        })
        return newArr;
    }
    //displaying the industry value on header
    const getIndustryValue = (IndustryKey) => {
        let IndustryValue = '';

        SectorIndustryHandler1().forEach((item, index) => {
            if (item.key === IndustryKey) {
                IndustryValue = item.value;
            }
        });
        return IndustryValue;
    }
    const sendForReviewHandler = () => {

    }
    // for to myestimates
    const isFromEstimateDashboard = () => {
        let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData)
        if (props.userestimateState !== undefined) {
            return props.userestimateState.ownerEmail === userData.email
        }
        return false;

    }
    // all status checking
    const isNew = () => {
        return "New" === props.userestimateState.state;
    }
    const isReWork = () => {
        return "Rework" === props.userestimateState.state;
    }
    const isInReview = () => {
        return "InReview" === props.userestimateState.state;
    }
    const isInApproved = () => {
        return "Approved" === props.userestimateState.state;
    }

    //Generate Staffing Button
    const GenerateStaffing = () => {
        // return (<ExportInprogressModal {...props}/>)
        if (props.title === "output")

            return (
                <Button kind="tertiary" className="saveModal" onClick={generateStaffinghandler}
                    disabled={!props.userinputStatusData.Export}>{englishValue('GenerateStaffing')}</Button>)

        // <HeaderInputModal industry={props.userDropDownData.defaultDropDown.response.defaultDropdown.industry}
        //     salesStage={props.userDropDownData.defaultDropDown.response.defaultDropdown.salesStage}
        //     {...props} estimate={estimateJson}></HeaderInputModal>
        else {

        }
    }

    //save button
    const saveModalString = () => {
        if (isFromEstimateDashboard()) {
            if (isNew()) {
                if (props.title === "input") {
                } else {
                    // hide the save button as now save and calculate toghther

                    // return (<Button className="savebutton" onClick={saveHandler}
                    //     disabled={!props.userinputStatusData.SaveButton}>{englishValue('Save')}</Button>);
                }
            } else if (isReWork()) {
                if (props.title === "input") {
                } else {

                    // hide the save button as now save and calculate toghther

                    // return (<Button onClick={saveHandler}
                    //     disabled={!props.userinputStatusData.SaveButton}>{englishValue('Save')}</Button>)
                }
            }
        }
    }

    // claclute button
    const calculateModelString = () => {
        if (isFromEstimateDashboard()) {
            if (isNew()) {
                if (props.title === "output") {
                } else {
                    return (<Button className="calculatebutton" onClick={calculateHandler}
                        disabled={!props.userinputStatusData.CalculateButton}>{englishValue('Calculate')}</Button>)
                }
            } else if (isReWork()) {
                if (props.title === "output") {
                } else {
                    return (<Button className="calculatebutton" onClick={calculateHandler}
                        disabled={!props.userinputStatusData.CalculateButton}>{englishValue('Calculate')}</Button>)
                }
            }
        }
    }

    //reset button
    const restModelString = () => {
        if (isFromEstimateDashboard()) {
            if (isNew()) {
                if (props.title === "output") {
                } else {
                    return (<ResetModal resetHandler={resetHandler}
                        resetButtonStatus={props.userinputStatusData.RestButton}></ResetModal>)
                }
            } else if (isReWork()) {
                if (props.title === "output") {
                } else {
                    return (<ResetModal resetHandler={resetHandler}
                        resetButtonStatus={props.userinputStatusData.RestButton}></ResetModal>)
                }
            }
        }
    }

    //send for review
    const sendforReviewModelString = () => {
        if (isFromEstimateDashboard()) {
            if (isNew()) {
                if (props.title === "input") {
                } else {
                    return (<SendForReviewModal {...props} sendForreivewButtonStatus={props.userinputStatusData.SendForReivewButton}
                        sendForReviewHandler={sendForReviewHandler}  ></SendForReviewModal>)
                }
            } else if (isReWork()) {
                if (props.title === "input") {
                } else {
                    return (<SendForReviewModal {...props} sendForreivewButtonStatus={props.userinputStatusData.SendForReivewButton}
                        sendForReviewHandler={sendForReviewHandler}  ></SendForReviewModal>)
                }
            }
        }
    }
    // for to be reviewdtab
    const isFromReviewDashboard = () => {
        let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData)
        if (props.userestimateState !== undefined) {
            return props.userestimateState.reviewerEmail === userData.email
        }
        return false;
    }
    //close button
    const closeModelString = () => {
        if (isFromReviewDashboard()) {
            if (isInReview()) {
                return (<Button kind="tertiary" onClick={() => {
                    props.resetDashBoard();
                    props.navigationInputToggleDefault();
                    props.navigationInputToggleInputProductivityDefault();
                    props.navigationInputToggleOutputProductivityDefault();
                    props.history.push(dashboardValue)
                }}>Close</Button>)
            } else if (isReWork()) {
                return (<Button kind="tertiary" onClick={() => {
                    props.resetDashBoard();
                    props.navigationInputToggleDefault();
                    props.navigationInputToggleInputProductivityDefault();
                    props.navigationInputToggleOutputProductivityDefault();
                    props.history.push(dashboardValue)
                }}>Close</Button>)
            } else if (isInApproved()) {
                return (<Button kind="tertiary" onClick={() => {
                    props.resetDashBoard();
                    props.navigationInputToggleDefault();
                    props.navigationInputToggleInputProductivityDefault();
                    props.navigationInputToggleOutputProductivityDefault();
                    props.history.push(dashboardValue)
                }}>Close</Button>)
            }
        }
    }

    return (
        <>
            {/* tost notification for generate staffing btn */}
            {props.userSessionData?.staffingPopup ? <StaffingModal {...props}></StaffingModal> : ''}
            {props.userAppScreenLoader?.labelVersion == 'Recalculation' ?
                <RecalculationModal {...props}></RecalculationModal>
                : ''}
            {props.userSessionData.migrationButtonPopup ?
                <ButtonMigrationModal {...props}></ButtonMigrationModal>
                : ''}
            <div className='HeaderInputdiv'>
                <div className='OppIdClientName'>
                    {/* displaying headers */}
                    <p>{englishValue('opportunityId')}: <span className="ValueClass">{props.userData1['opportunityId']}  </span></p>
                    <p>{englishValue("clientName")}: <span className="ValueClass">{props.userData1['clientName']}</span></p>

                </div>
                <div>
                    <p>{englishValue('opportunityName')}:<span className="ValueClass"> {props.userData1['opportunityName']} </span></p>
                    <p>{englishValue('Industry')}: <span className="ValueClass">{getIndustryValue(props.userData1['industry'])}</span></p>
                </div>
                <div>
                    {/* <Button kind="tertiary" className='BtnReset' onClick={resetHandler}>RESET</Button> */}
                    <DeleteMyestimate {...props} estimateHandler={estimateHandler}></DeleteMyestimate>
                </div>
            </div>
            <div className='InputBtndiv'>
                <div className='InputBtndivHead'>
                    <div className='OppIdClientName'>
                        <p>{englishValue('estimateTitle')}: <span className="ValueClass">{props.userData1['estimationTitle']}</span></p>
                        <p>{englishValue('saleStage')}: <span className="ValueClass">{props.userData1['saleStage'].toUpperCase()}</span></p>
                    </div>
                    <div>
                        <p>{englishValue('status')}: <span className="ValueClass"> {props.userData1['state']} </span></p>
                        <p>{englishValue('Creator')}: <span className="ValueClass"> {props.userData1['ownerName']} </span></p>
                    </div>
                </div>
{/* displaying few btn hiding some btn depending on input output */}
                <div className='btnDisplay'>
                    {GenerateStaffing()}
                    {sendforReviewModelString()}
                    {restModelString()}
                    {calculateModelString()}
                    {getHeaderModelString()}
                    {saveModalString()}
                    {closeModelString()}
                </div>

            </div>
            {userDataMaintance ? <div className='inlineNotifcationDeatiled'>
                <InlineNotification title='' subtitle={isMaintenancePlannedMsg} kind='info' />
            </div> : <></>}


        </>
    );

};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderInputs);

