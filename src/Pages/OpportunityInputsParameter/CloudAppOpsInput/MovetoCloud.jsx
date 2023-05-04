import React, { useState, useEffect } from 'react';
import NavBar from '../../../Components/CommonFuncs/NavBar/Navbar';
import HeaderInputs from '../HeaderInputs';
import { Content } from 'carbon-components-react';
import { englishValue, NumberValidationPercentage, NumberValidation, arrCoversionOrder, arrangeColumn } from "../../../Utils/CommonFunc";
import TableData from '../../../Components/CommonFuncs/TableInput';

import LoaderApp from '../../LoaderApp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UseCustomInput from '../UseCustomInput';
import { actionCreators } from '../../../store/actions/ActionCreator';
import { CheckmarkFilled16, WarningFilled16, ErrorFilled16 } from '@carbon/icons-react';
import "./MovetoCloud.scss"
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TextInput } from 'carbon-components-react';
import percentageIdentificationJSON from '../../../Json/percentageIdentificationJSON.json';
import { moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_C135, moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_D135, moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_E135, moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_F135, moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_G135, moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_H135, moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_I135 } from '../../../Components/CommonFuncs/formula/FormulaComponent_MoveToCloud';
import { cloud_appScopeCoveredPercentage } from '../../../Components/CommonFuncs/formula/formulaProductivity_cloud';
import { input_validation_main } from '../../../Components/CommonFuncs/formula/Validations/ValidationMain';
const displayData = { ...percentageIdentificationJSON.moveToCloud }

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
// MOVE TO CLOUD 

const MovetoCloud = (props) => {
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData)
    let readOnlyStatus = false;
    if (props.UserState === 'InReview' || props.UserState === 'Approved') {
        readOnlyStatus = true;
    } else if (props.UserEmail === userData.email && props.UserState === "Rework") {
        readOnlyStatus = true;
    }
    const [initialstate, setInitialstate] = useState(props.userInpuData.defaultInputData['response']['estimate'].userInputs)
    let { tableCellInput } = UseCustomInput(initialstate.moveToCloud);
    //rearranging of rows
    tableCellInput = arrCoversionOrder(tableCellInput, [
        "nonCloudAppsPercentagePlannedToMoveToCloudEachYear",
        "appsNotOnCloudAtStartOfYear",
        "appsCountToBeMovingToCloudYoY",
        "appsTotalOnCloudByEndOfYear",
        "appsTotalNotOnCloudByEndOfYear",
        "uiStatus"
    ]);
    tableCellInput = arrangeColumn(tableCellInput, ['y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7', 'uiStatus'])
    const [FocusFlag, setFocusFlag] = useState(false);
    const [FocusValueIdFlag, setFocusValueIdFlag] = useState('');

    const [resetHandleFlag, setresetHandleFlag] = useState(false);
    const [NewHandleFlag, setNewHandleFlag] = useState(false);


    useEffect(() => {
        if (props.resetHandleFlag) {
            setInitialstate({ ...props.userInpuData.defaultInputData['response']['estimate'].userInputs });
            // setresetHandleFlag(false);
            // setNewHandleFlag(false)
        }
    })

    const handlerFocus = (e) => {
        let valueChange = e.target.id;
        setFocusValueIdFlag(valueChange);
        setFocusFlag(true);
    }


    // changed the handle change  function and updated with the AMS.jsx handle change function which contains stringify to make a copy of the object 

    // JIRA 632 / 634 /663
    const handlerChangeData = (e) => {
        let valueChange = e.target.id;
        let valueOppParameter = valueChange.split('_');
        var newState = JSON.parse(JSON.stringify(initialstate));
        if (e.target.value === '' || e.target.value === '%') {

            newState['moveToCloud'][valueOppParameter[0]][valueOppParameter[1]] = 0;

            setInitialstate({ ...newState });
        } else if (e.target.value === '0' || e.target.value === '0%') {

            newState['moveToCloud'][valueOppParameter[0]][valueOppParameter[1]] = 0;

            setInitialstate({ ...newState });
        }
        else {
            let value = e.target.value.replace(/^0+/, 0);
            newState['moveToCloud'][valueOppParameter[0]][valueOppParameter[1]] = value;
            if ((valueOppParameter[0]).includes('Percentage')) {
                let value = (e.target.value.replace(/%/, ''))
                value = value.replace(/^0+/, 0);

                newState['moveToCloud'][valueOppParameter[0]][valueOppParameter[1]] = value;

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

    const btnFunction = (objBtn) => {
        let inputBtnData = {}
        if (objBtn.errorBtn) {
            // Start JIRA https://jsw.ibm.com/browse/CMIWET-618
            //output and itermediate output should be diabled so added a if condition for Approve and Inreview outbtton will be disabled(true)
            if ((props.UserState === 'InReview' || props.UserState === 'Approved') || (props.UserEmail === userData.email && props.UserState === "Rework")) {
                inputBtnData = {
                    RestButton: true,
                    EstimateButton: true,
                    SaveButton: false,
                    CalculateButton: false,
                    SendForReivewButton: false,
                    Export: false,
                    inputButton: false,
                    outputButton: true,
                    calculateModal: false,
                    saveModal: false
                }
            } else {
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

        }
        else {
            if ((props.UserState === 'InReview' || props.UserState === 'Approved') || (props.UserEmail === userData.email && props.UserState === "Rework")) {
                inputBtnData = {
                    RestButton: true, EstimateButton: true,
                    SaveButton: false,
                    CalculateButton: true,
                    SendForReivewButton: false,
                    Export: true,
                    inputButton: true,
                    outputButton: true,
                    calculateModal: false,
                    saveModal: false
                }
            } else {
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




        }
        return inputBtnData
    }
    const MovetoCloudUpdate = (props, userInputData) => {
        let ObjBtnStatus = {
            errorBtn: false,
            cheackBtn: false
        }
        input_validation_main(props, userInputData, ObjBtnStatus);
        let btnInput = btnFunction(ObjBtnStatus)
        props.userInputDataEditFormulaInfo(userInputData, btnInput);
    }

    function handleBlur(e) {
        const temp = { ...initialstate };
        const t = temp.moveToCloud;

        let valueChange = e.target.id;
        let valueOppParameter = valueChange.split('_');
        let idOppParameter = valueOppParameter[0] + '_' + valueOppParameter[1];
        // let userData = props.userInpuData.defaultInputData.response;
        let userInputData = { ...initialstate };
        setFocusValueIdFlag('');
        setFocusFlag(false);

        // check weather intial value in redux is equal to present value id yes state should not update JIRA -
        // START JIRA-
        let userData1 = props.userInpuData.defaultInputData.response;
        let userInputData1 = userData1['estimate']['userInputs'];
        var IntitalValue1 = userInputData1['moveToCloud'][valueOppParameter[0]][valueOppParameter[1]];

        if (parseFloat(IntitalValue1) === parseFloat(e.target.value)) {
            //jira 806 for the values are converting as a string to convert back to number

            userInputData['moveToCloud'][valueOppParameter[0]][valueOppParameter[1]] = parseFloat(e.target.value);
            MovetoCloudUpdate(props, userInputData)
        }
        else {
            // END JIRA -
            userInputData['moveToCloud'][valueOppParameter[0]][valueOppParameter[1]] = parseFloat(e.target.value);

            switch (idOppParameter) {
                case 'nonCloudAppsPercentagePlannedToMoveToCloudEachYear_y1':
                    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_C135(props, userInputData);
                    cloud_appScopeCoveredPercentage(props, userInputData);
                    MovetoCloudUpdate(props, userInputData)
                    break;
                case 'nonCloudAppsPercentagePlannedToMoveToCloudEachYear_y2':
                    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_D135(props, userInputData);
                    cloud_appScopeCoveredPercentage(props, userInputData);
                    MovetoCloudUpdate(props, userInputData)
                    break;
                case 'nonCloudAppsPercentagePlannedToMoveToCloudEachYear_y3':
                    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_E135(props, userInputData);
                    cloud_appScopeCoveredPercentage(props, userInputData);
                    MovetoCloudUpdate(props, userInputData)
                    break;
                case 'nonCloudAppsPercentagePlannedToMoveToCloudEachYear_y4':
                    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_F135(props, userInputData);
                    cloud_appScopeCoveredPercentage(props, userInputData);
                    MovetoCloudUpdate(props, userInputData)
                    break;
                case 'nonCloudAppsPercentagePlannedToMoveToCloudEachYear_y5':
                    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_G135(props, userInputData);
                    cloud_appScopeCoveredPercentage(props, userInputData);
                    MovetoCloudUpdate(props, userInputData)
                    break;
                case 'nonCloudAppsPercentagePlannedToMoveToCloudEachYear_y6':
                    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_H135(props, userInputData);
                    cloud_appScopeCoveredPercentage(props, userInputData);
                    MovetoCloudUpdate(props, userInputData)
                    break;
                case 'nonCloudAppsPercentagePlannedToMoveToCloudEachYear_y7':
                    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_I135(props, userInputData);
                    cloud_appScopeCoveredPercentage(props, userInputData);
                    MovetoCloudUpdate(props, userInputData)
                    break;
                default:
                    MovetoCloudUpdate(props, userInputData)
                    break;

            }


            setNewHandleFlag(true)
        }
    }

    return (
        <div className="clientCloudDiv">
            <div className='movetoInputMainHead'>

                <div className='movetoInputMain'>
                    <div className="heading">
                        {englishValue('MovetoCloud')}
                        <span className="tickmark-class" style={{ paddingLeft: '1rem' }}><CheckmarkFilled16 /></span>

                    </div>
                    <div className='table-class'>
                        <div className="MovetocloudMain">
                            <DataTable rows={tableCellInput} idTitle="movetocloud" headers={["", "", englishValue('Y1'), englishValue('Y2'), englishValue('Y3'), englishValue('Y4'), englishValue('Y5'), englishValue('Y6'), englishValue('Y7')]}>
                                {({ rows, headers, getHeaderProps }) => (
                                    <TableContainer
                                    >
                                        <Table >
                                            <TableHead>
                                                <TableRow>
                                                    {headers.map((header) => {
                                                        if (header.length !== 0) {
                                                            return (
                                                                <TableHeader {...getHeaderProps({ header })}>
                                                                    {header}
                                                                </TableHeader>
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <TableHeader className="headingStart" {...getHeaderProps({ header })}>
                                                                </TableHeader>
                                                            )
                                                        }
                                                    })}
                                                </TableRow>
                                            </TableHead>

                                            <TableBody >
                                                {tableCellInput.map(rtx =>

                                                    <TableRow>

                                                        {rtx[0] === "nonCloudAppsPercentagePlannedToMoveToCloudEachYear" ?

                                                            <>
                                                                <TableCell className='iconRow'> {rtx[1].uiStatus.iconStatus.ok ? <span className="tickmark-class"><CheckmarkFilled16 /></span> : ""} </TableCell>
                                                                <TableCell className='labelrow'>{englishValue(rtx[0])}</TableCell>
                                                                {/* third column of first row condition  */}
                                                                <TableCell>
                                                                    {
                                                                        rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ?
                                                                            <>
                                                                                {FocusFlag && FocusValueIdFlag == `${rtx[0]}_y1` ?
                                                                                    <TextInput
                                                                                        className="cloudInput"
                                                                                        id={`${rtx[0]}_y1`}
                                                                                        name="y1"
                                                                                        value={`${rtx[1].y1}`}
                                                                                        onChange={handlerChangeData}
                                                                                        onBlur={handleBlur}
                                                                                        readOnly={readOnlyStatus}
                                                                                        onFocus={handlerFocus}
                                                                                    /> :
                                                                                    <TextInput
                                                                                        className="cloudInput"
                                                                                        id={`${rtx[0]}_y1`}
                                                                                        name="y1"
                                                                                        value={`${rtx[1].y1}%`}
                                                                                        onChange={handlerChangeData}
                                                                                        onBlur={handleBlur}
                                                                                        readOnly={readOnlyStatus}
                                                                                        onFocus={handlerFocus}
                                                                                    />}
                                                                            </>
                                                                            : rtx[1].y1
                                                                    }
                                                                </TableCell>
                                                                {/* fourth column of first row condition  same for others */}
                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y2 === true || rtx[0].includes('Percentage') ?
                                                                    <>
                                                                        {FocusFlag && FocusValueIdFlag == `${rtx[0]}_y2` ?

                                                                            <TextInput
                                                                                className="cloudInput"
                                                                                id={`${rtx[0]}_y2`}
                                                                                name="y2"
                                                                                value={`${rtx[1].y2}`}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handleBlur}
                                                                                readOnly={readOnlyStatus}
                                                                                onFocus={handlerFocus}
                                                                            /> :
                                                                            <TextInput
                                                                                className="cloudInput"
                                                                                id={`${rtx[0]}_y2`}
                                                                                name="y2"
                                                                                value={`${rtx[1].y2}%`}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handleBlur}
                                                                                readOnly={readOnlyStatus}
                                                                                onFocus={handlerFocus}
                                                                            />}
                                                                    </>
                                                                    : rtx[1].y2
                                                                }
                                                                </TableCell>
                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y3 === true || rtx[0].includes('Percentage') ?
                                                                    <>
                                                                        {FocusFlag && FocusValueIdFlag == `${rtx[0]}_y3` ?

                                                                            <TextInput
                                                                                className="cloudInput"
                                                                                id={`${rtx[0]}_y3`}
                                                                                name="y3"
                                                                                value={`${rtx[1].y3}`}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handleBlur}
                                                                                readOnly={readOnlyStatus}
                                                                                onFocus={handlerFocus}
                                                                            /> :
                                                                            <TextInput
                                                                                className="cloudInput"
                                                                                id={`${rtx[0]}_y3`}
                                                                                name="y3"
                                                                                value={`${rtx[1].y3}%`}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handleBlur}
                                                                                readOnly={readOnlyStatus}
                                                                                onFocus={handlerFocus}
                                                                            />}
                                                                    </>
                                                                    : rtx[1].y3
                                                                } </TableCell>
                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y4 === true || rtx[0].includes('Percentage') ?
                                                                    <>
                                                                        {FocusFlag && FocusValueIdFlag == `${rtx[0]}_y4` ?

                                                                            <TextInput
                                                                                className="cloudInput"
                                                                                id={`${rtx[0]}_y4`}
                                                                                name="y4"
                                                                                value={`${rtx[1].y4}`}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handleBlur}
                                                                                readOnly={readOnlyStatus}
                                                                                onFocus={handlerFocus} />
                                                                            : <TextInput
                                                                                className="cloudInput"
                                                                                id={`${rtx[0]}_y4`}
                                                                                name="y4"
                                                                                value={`${rtx[1].y4}%`}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handleBlur}
                                                                                readOnly={readOnlyStatus}
                                                                                onFocus={handlerFocus} />}</>
                                                                    : rtx[1].y4
                                                                } </TableCell>
                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y5 === true || rtx[0].includes('Percentage') ?
                                                                    <>
                                                                        {FocusFlag && FocusValueIdFlag == `${rtx[0]}_y5` ?
                                                                            <TextInput
                                                                                className="cloudInput"
                                                                                id={`${rtx[0]}_y5`}
                                                                                name="y5"
                                                                                value={`${(rtx[1].y5)}`}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handleBlur}
                                                                                readOnly={readOnlyStatus}
                                                                                onFocus={handlerFocus}
                                                                            /> : <TextInput
                                                                                className="cloudInput"
                                                                                id={`${rtx[0]}_y5`}
                                                                                name="y5"
                                                                                value={`${(rtx[1].y5)}%`}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handleBlur}
                                                                                readOnly={readOnlyStatus}
                                                                                onFocus={handlerFocus}
                                                                            />}</>
                                                                    : rtx[1].y5
                                                                } </TableCell>
                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y6 === true || rtx[0].includes('Percentage') ?
                                                                    <>
                                                                        {FocusFlag && FocusValueIdFlag == `${rtx[0]}_y6` ?
                                                                            <TextInput
                                                                                className="cloudInput"
                                                                                id={`${rtx[0]}_y6`}
                                                                                name="y6"
                                                                                value={`${(rtx[1].y6)}`}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handleBlur}
                                                                                readOnly={readOnlyStatus}
                                                                                onFocus={handlerFocus}
                                                                            /> : <TextInput
                                                                                className="cloudInput"
                                                                                id={`${rtx[0]}_y6`}
                                                                                name="y6"
                                                                                value={`${(rtx[1].y6)}%`}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handleBlur}
                                                                                readOnly={readOnlyStatus}
                                                                                onFocus={handlerFocus}
                                                                            />}</>
                                                                    : rtx[1].y6
                                                                } </TableCell>
                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y7 === true || rtx[0].includes('Percentage') ?

                                                                    <>
                                                                        {FocusFlag && FocusValueIdFlag == `${rtx[0]}_y7` ?
                                                                            <TextInput
                                                                                className="cloudInput"
                                                                                id={`${rtx[0]}_y7`}
                                                                                name="y7"
                                                                                value={`${(rtx[1].y7)}`}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handleBlur}
                                                                                readOnly={readOnlyStatus}
                                                                                onFocus={handlerFocus}
                                                                            /> : <TextInput
                                                                                className="cloudInput"
                                                                                id={`${rtx[0]}_y7`}
                                                                                name="y7"
                                                                                value={`${(rtx[1].y7)}%`}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handleBlur}
                                                                                readOnly={readOnlyStatus}
                                                                                onFocus={handlerFocus}
                                                                            />}</>
                                                                    : rtx[1].y7
                                                                } </TableCell>
                                                            </>
                                                            : <>
                                                                {rtx[0] === "appsNotOnCloudAtStartOfYear" ?
                                                                    <>
                                                                        <TableCell className='iconRow'> {rtx[1].uiStatus.iconStatus.ok ? <span className="tickmark-class"><CheckmarkFilled16 /></span> : ""} </TableCell>
                                                                        <TableCell className='labelrow'>{englishValue(rtx[0])}</TableCell>
                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y1).toFixed()}%`} /> : rtx[1].y1} </TableCell>
                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y2).toFixed()}%`} /> : rtx[1].y2} </TableCell>
                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y3).toFixed()}%`} /> : rtx[1].y3} </TableCell>
                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y4).toFixed()}%`} /> : rtx[1].y4} </TableCell>
                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y5).toFixed()}%`} /> : rtx[1].y5} </TableCell>
                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y6).toFixed()}%`} /> : rtx[1].y6} </TableCell>
                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y7).toFixed()}%`} /> : rtx[1].y7} </TableCell>

                                                                    </>
                                                                    : <>
                                                                        {rtx[0] === "appsCountToBeMovingToCloudYoY" ?
                                                                            <>
                                                                                <TableCell className='iconRow'> {rtx[1].uiStatus.iconStatus.ok ? <span className="tickmark-class"><CheckmarkFilled16 /></span> : ""} </TableCell>
                                                                                <TableCell className='labelrow'>{englishValue(rtx[0])}</TableCell>
                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y1).toFixed()}%`} /> : rtx[1].y1} </TableCell>
                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y2).toFixed()}%`} /> : rtx[1].y2} </TableCell>
                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y3).toFixed()}%`} /> : rtx[1].y3} </TableCell>
                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y4).toFixed()}%`} /> : rtx[1].y4} </TableCell>
                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y5).toFixed()}%`} /> : rtx[1].y5} </TableCell>
                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y6).toFixed()}%`} /> : rtx[1].y6} </TableCell>
                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y7).toFixed()}%`} /> : rtx[1].y7} </TableCell>
                                                                            </>
                                                                            : <>
                                                                                {rtx[0] === "appsTotalOnCloudByEndOfYear" ?
                                                                                    <>
                                                                                        <TableCell className='iconRow'> {rtx[1].uiStatus.iconStatus.ok ? <span className="tickmark-class"><CheckmarkFilled16 /></span> : ""} </TableCell>
                                                                                        <TableCell className='labelrow'>{englishValue(rtx[0])}</TableCell>
                                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y1).toFixed()}%`} /> : rtx[1].y1} </TableCell>
                                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y2).toFixed()}%`} /> : rtx[1].y2} </TableCell>
                                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y3).toFixed()}%`} /> : rtx[1].y3} </TableCell>
                                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y4).toFixed()}%`} /> : rtx[1].y4} </TableCell>
                                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y5).toFixed()}%`} /> : rtx[1].y5} </TableCell>
                                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y6).toFixed()}%`} /> : rtx[1].y6} </TableCell>
                                                                                        <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true || rtx[0].includes('Percentage') ? <TextInput className="cloudInput" value={`${Number(rtx[1].y7).toFixed()}%`} /> : rtx[1].y7} </TableCell>
                                                                                    </>
                                                                                    : <>
                                                                                        {rtx[0] === "appsTotalNotOnCloudByEndOfYear" ?
                                                                                            <>
                                                                                                <TableCell className='iconRow'> {rtx[1].uiStatus.iconStatus.ok ? <span className="tickmark-class"><CheckmarkFilled16 /></span> : ""} </TableCell>
                                                                                                <TableCell className='labelrow'>{englishValue(rtx[0])}</TableCell>
                                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y1 === true ? <TextInput value={(rtx[1].y1)} /> : rtx[1].y1} </TableCell>
                                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y2 === true ? <TextInput value={(rtx[1].y2)} /> : rtx[1].y2} </TableCell>
                                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y3 === true ? <TextInput value={(rtx[1].y3)} /> : rtx[1].y3} </TableCell>
                                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y4 === true ? <TextInput value={(rtx[1].y4)} /> : rtx[1].y4} </TableCell>
                                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y5 === true ? <TextInput value={(rtx[1].y5)} /> : rtx[1].y5} </TableCell>
                                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y6 === true ? <TextInput value={(rtx[1].y6)} /> : rtx[1].y6} </TableCell>
                                                                                                <TableCell >{rtx[1].uiStatus.editableStatus.y7 === true ? <TextInput value={(rtx[1].y7)} /> : rtx[1].y7} </TableCell>
                                                                                            </>
                                                                                            : <>

                                                                                            </>}
                                                                                    </>}
                                                                            </>}
                                                                    </>}
                                                            </>}

                                                    </TableRow>
                                                )}

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                )}
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(MovetoCloud);