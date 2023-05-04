import React, { useState, useEffect } from 'react';
import NavBar from '../../../Components/CommonFuncs/NavBar/Navbar';
import HeaderInputs from '../../OpportunityInputsParameter/HeaderInputs';
import { Content, Accordion, AccordionItem, DataTable, TableContainer, Table, TableHead, TableRow, TableBody, TableHeader, TableCell, TextInput, Select, SelectItem, TooltipIcon } from 'carbon-components-react';
import { englishValue, NumberValidationPercentage, NumberValidation } from "../../../Utils/CommonFunc";
import { breadcrumb } from '../../../Components/CommonFuncs/BreadCumbs';
import './Automation.scss';
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
import { UpArrow, DownArrow, Information12 } from '../../../Components/CommonFuncs/Icons';
import { CheckmarkFilled16, ErrorFilled16, WarningFilled16 } from '@carbon/icons-react';
import HelperText from '../../../Components/CommonFuncs/HelperText';
import { Automation_appScopeCoveredPercentage } from '../../../Components/CommonFuncs/formula/formulaProductivity_automation';
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
const Automation = React.memo((props) => {
    const [initialstate, setInitialstate] = useState(props.userInpuData.defaultInputData['response']['estimate'].userInputs)
    const [client, setClient] = useState(true);
    const { disableBtn, tableCellInput } = UseCustomInput(initialstate.security, props.userInpuData);
    const [resetHandleFlag, setresetHandleFlag] = useState(false);
    const [NewHandleFlag, setNewHandleFlag] = useState(false);
    const [readOnlyStatus, setreadOnlyStatus] = useState(false);
    const [FocusFlag, setFocusFlag] = useState(false);
    const [FocusValueIdFlag, setFocusValueIdFlag] = useState('');

    useEffect(() => {
        let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData)

        let readOnlyStatus = false;
        if (props.userestimateState.state === 'InReview' || props.userestimateState.state === 'Approved') {
            readOnlyStatus = true;
        } else if (props.userestimateState.reviewerEmail === userData.email || props.userestimateState.state === "ReWork") {
            readOnlyStatus = true;
        }
        setreadOnlyStatus(readOnlyStatus)
        if (resetHandleFlag || NewHandleFlag) {
            setInitialstate({ ...props.userInpuData.defaultInputData['response']['estimate'].userInputs });
            setresetHandleFlag(false);
            setNewHandleFlag(false)
        }
    })
    function handleDropDownChangerpa(e, cell) {
        let ObjBtnStatus = {
            errorBtn: false,
            cheackBtn: false
        }
        let initialStateData = initialstate;
        let keyvalue = keyDropdownkey(e.target.value, props.userDropDownData.defaultDropDown['response'].defaultDropdown.rpaToolLicenseCostClientVsIBM)

        initialStateData['automation']['rpaToolLicenseCostClientVsIBMDefaultSelection'] = keyvalue;
        input_validation_main(props, userInputData, ObjBtnStatus);
        let btnInput = btnFunction(ObjBtnStatus);
        props.userInputDataEditFormulaInfo(initialstate, btnInput);
        setNewHandleFlag(true);
        setInitialstate({ ...initialStateData });
    }
    function handleDropDownChangemonitoring(e, cell) {
        let ObjBtnStatus = {
            errorBtn: false,
            cheackBtn: false
        }
        let initialStateData = initialstate;
        let keyvalue = keyDropdownkey(e.target.value, props.userDropDownData.defaultDropDown['response'].defaultDropdown.monitoringOfAutomationBOTsClientVsIBM)
        initialStateData['automation']['monitoringOfAutomationBOTsClientVsIBMDefaultSelection'] = keyvalue;
        input_validation_main(props, userInputData, ObjBtnStatus);
        let btnInput = btnFunction(ObjBtnStatus);
        setNewHandleFlag(true);
        props.userInputDataEditFormulaInfo(initialstate, btnInput);

        setInitialstate({ ...initialStateData });
    }
    
    const valueDropdownVal = (callvalue, objvalue) => {
        let selectvalue = '';
        let dataOptions = objvalue.forEach((item) => {
            if (item.key == callvalue) {
                selectvalue = item.value
            }
        }
        );
        return selectvalue;
    }
    const keyDropdownkey = (callvalue, objvalue) => {
        let selectvalue = '';
        let dataOptions = objvalue.forEach((item) => {
            if (item.value == callvalue) {
                selectvalue = item.key
            }
        }
        );
        return selectvalue;
    }

   
    const selectDropDownDynamicrpaTool = (cell) => {

        let dataOptions = props.userDropDownData.defaultDropDown['response'].defaultDropdown.rpaToolLicenseCostClientVsIBM.map((item) => {
            return (
                <SelectItem key={item.key} value={item.value} text={item.value} />
            )
        }
        );
        let readOnlyStatusData = readOnlyStatus ? 'readonly' : ''
        return (
            <Select className="SelectClass"
                labelText=''
                onChange={e => handleDropDownChangerpa(e, cell)}
                // adding diabled true or false for in review/approved/rework  JIRA - bug id 621/622
                disabled={readOnlyStatus}
                value={valueDropdownVal(cell, props.userDropDownData.defaultDropDown['response'].defaultDropdown.rpaToolLicenseCostClientVsIBM)}>
                {dataOptions}
            </Select>

        )
    }

    const selectDropDownDynamicmonitoringOfAutomation = (cell) => {

        let dataOptions = props.userDropDownData.defaultDropDown['response'].defaultDropdown.monitoringOfAutomationBOTsClientVsIBM.map((item) => {
            return (
                <SelectItem key={item.key} value={item.value} text={item.value} />
            )
        }
        );
        let readOnlyStatusData = readOnlyStatus ? 'readonly' : ''
        return (
            <Select className="SelectClass"
                labelText=''
                onChange={e => handleDropDownChangemonitoring(e, cell)}
                // adding diabled true or false for in review/approved/rework  JIRA - bug id 621/622
                disabled={readOnlyStatus}
                value={valueDropdownVal(cell, props.userDropDownData.defaultDropDown['response'].defaultDropdown.monitoringOfAutomationBOTsClientVsIBM)}>
                {dataOptions}

            </Select>

        )
    }
    //1st accordin
    const AccordionAutomationEffort = (dataDisplay, client, title) => {
        let AutomateObj = {
            automationEffortAndCostDistributionPercentage: dataDisplay['automationEffortAndCostDistributionPercentage'],
            rpaToolLicenseCostClientVsIBMDefaultSelection: dataDisplay['rpaToolLicenseCostClientVsIBMDefaultSelection'],
            monitoringOfAutomationBOTsClientVsIBMDefaultSelection: dataDisplay['monitoringOfAutomationBOTsClientVsIBMDefaultSelection']
        };
        let arrayAitomate = Object.entries(AutomateObj)
        return (
            <Accordion>
                <AccordionItem title={title} open={client}>
                    <div className="table-class">
                        <DataTable
                            rows={[]}
                            headers={["", "", englishValue('simple'), englishValue('medium'), englishValue('complex')]}>
                            {({ rows, headers, getHeaderProps }) => (
                                <TableContainer >
                                    <Table>
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
                                        <TableBody>
                                            {
                                                arrayAitomate.map((item) => {
                                                    if (item[0] === 'automationEffortAndCostDistributionPercentage') {
                                                        return (
                                                            <>
                                                                <TableRow>
                                                                    <TableCell className='iconRow'>
                                                                        {Object.keys(item[1].uiStatus.iconStatus).length !== 0 ?
                                                                            <>
                                                                                {item[1].uiStatus.iconStatus.ok ?
                                                                                    <span className="tickmark-class"><CheckmarkFilled16 /></span>
                                                                                    :
                                                                                    <>
                                                                                        {item[1].uiStatus.iconStatus.warning ?
                                                                                            <>

                                                                                                <span className="warning-class">
                                                                                                    <TooltipIcon tooltipText='jjj' direction='right'>
                                                                                                        <WarningFilled16 />
                                                                                                    </TooltipIcon>
                                                                                                </span>


                                                                                            </>

                                                                                            :
                                                                                            <>
                                                                                                <span className="error-class">  <TooltipIcon tooltipText='ERROR:Distribution is not 100%. Please add up to 100%.' direction='right'>
                                                                                                    <ErrorFilled16 />
                                                                                                </TooltipIcon></span>

                                                                                            </>
                                                                                        }
                                                                                    </>
                                                                                }
                                                                            </>
                                                                            :
                                                                            ''
                                                                        }

                                                                    </TableCell>
                                                                    <TableCell className="tableBold">{englishValue(item[0])}</TableCell>
                                                                    <TableCell>

                                                                        {FocusFlag && FocusValueIdFlag == `automation_${item[0]}_simple` ?
                                                                            <TextInput
                                                                                type='text'
                                                                                labelText=''
                                                                                id={`automation_${item[0]}_simple`}
                                                                                name={`automation_${item[0]}_simple`}
                                                                                value={`${item[1].simple}`}
                                                                                readOnly={readOnlyStatus}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handlerChange}
                                                                                onFocus={handlerFocus}
                                                                            /> :
                                                                            <TextInput
                                                                                type='text'
                                                                                labelText=''
                                                                                id={`automation_${item[0]}_simple`}
                                                                                name={`automation_${item[0]}_simple`}
                                                                                value={`${item[1].simple}%`}
                                                                                readOnly={readOnlyStatus}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handlerChange}
                                                                                onFocus={handlerFocus}
                                                                            />}
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        {FocusFlag && FocusValueIdFlag == `automation_${item[0]}_medium` ?
                                                                            <TextInput
                                                                                type='text'
                                                                                labelText=''
                                                                                id={`automation_${item[0]}_medium`}
                                                                                name={`automation_${item[0]}_medium`}
                                                                                value={`${item[1].medium}`}
                                                                                readOnly={readOnlyStatus}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handlerChange}
                                                                                onFocus={handlerFocus}
                                                                            /> : <TextInput
                                                                                type='text'
                                                                                labelText=''
                                                                                id={`automation_${item[0]}_medium`}
                                                                                name={`automation_${item[0]}_medium`}
                                                                                value={`${item[1].medium}%`}
                                                                                readOnly={readOnlyStatus}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handlerChange}
                                                                                onFocus={handlerFocus}
                                                                            />}
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        {FocusFlag && FocusValueIdFlag == `automation_${item[0]}_complex` ?
                                                                            <TextInput
                                                                                type='text'
                                                                                labelText=''
                                                                                id={`automation_${item[0]}_complex`}
                                                                                name={`automation_${item[0]}_complex`}
                                                                                value={`${item[1].complex}`}
                                                                                readOnly={readOnlyStatus}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handlerChange}
                                                                                onFocus={handlerFocus}
                                                                            /> : <TextInput
                                                                                type='text'
                                                                                labelText=''
                                                                                id={`automation_${item[0]}_complex`}
                                                                                name={`automation_${item[0]}_complex`}
                                                                                value={`${item[1].complex}%`}
                                                                                readOnly={readOnlyStatus}
                                                                                onChange={handlerChangeData}
                                                                                onBlur={handlerChange}
                                                                                onFocus={handlerFocus}
                                                                            />}
                                                                    </TableCell>


                                                                </TableRow>
                                                                <TableRow className='RowSpace'></TableRow>
                                                            </>
                                                        )
                                                    } else if (item[0] === 'rpaToolLicenseCostClientVsIBMDefaultSelection') {
                                                        return (
                                                            <>

                                                                <TableRow>
                                                                    <TableCell ></TableCell>
                                                                    <TableCell className="tableBold">{englishValue(item[0])}
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        {selectDropDownDynamicrpaTool(item[1])}
                                                                    </TableCell>

                                                                </TableRow>
                                                                <TableRow className='RowSpace'></TableRow>
                                                            </>
                                                        )
                                                    } else if (item[0] === 'monitoringOfAutomationBOTsClientVsIBMDefaultSelection') {
                                                        return (
                                                            <TableRow>

                                                                <TableCell></TableCell>
                                                                <TableCell className="tableBold">{englishValue(item[0])}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {selectDropDownDynamicmonitoringOfAutomation(item[1])}
                                                                </TableCell>

                                                            </TableRow>
                                                        )
                                                    }
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}
                        </DataTable>
                    </div>
                </AccordionItem>
            </Accordion>
        )
    }

    //2nd accordin

    const AccordionDistributionOnetime = (client, title) => {

        return (
            <Accordion>
                <AccordionItem title={title} open={client}>
                    <div className="table-class">
                        <DataTable
                            rows={[]}
                            headers={["", ""]}>
                            {({ rows, headers, getHeaderProps }) => (
                                <TableContainer >
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="tableBold"><p>{englishValue('AnnualPlatform')}</p>
                                                    <HelperText helperTextVal={englishValue('Distribution1')}></HelperText>
                                                </TableCell>
                                                <TableCell className="tableBold">${initialstate['additionalCostInfo']['costForCognitiveAgentAssist_USD']}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="tableBold">
                                                    <p> {englishValue('OneAutomationTeam')}</p>
                                                    <HelperText helperTextVal={englishValue('Distribution2')}></HelperText>
                                                </TableCell>
                                                <TableCell className="tableBold">${initialstate['additionalCostInfo']['costForECATools_USD']}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}
                        </DataTable>
                    </div>
                </AccordionItem>
            </Accordion>
        )
    }
  
    //3rd new
    // automation with a new linear format without dropdown JIRA 452
    const AccordionAutomationcombination2 = (dataDisplay, client, title) => {

       
        let AutomateObj = {
            combinationOfAutomationToolsUsed: dataDisplay['combinationOfAutomationToolsUsed']
        };
        let arrayAitomate = Object.entries(AutomateObj)
        return (
            <Accordion>
                <AccordionItem title={title} open={client}>
                    <div className="table-class">
                        <DataTable
                            rows={[]}
                            headers={["", "", englishValue('BluePrisimHeader'), englishValue('WDGHeader'), englishValue('UIPathHeader'), englishValue('AutomationHeader')]}>
                            {({ rows, headers, getHeaderProps }) => (
                                <TableContainer >
                                    <Table>
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
                                        <TableBody>
                                            {
                                                arrayAitomate.map((item) => {
                                                    if (item[0] === 'combinationOfAutomationToolsUsed') {
                                                        return (
                                                            <TableRow>
                                                                <TableCell className='iconRow'>
                                                                    {Object.keys(item[1].uiStatus.iconStatus).length !== 0 ?
                                                                        <>
                                                                            {item[1].uiStatus.iconStatus.ok ?
                                                                                <span className="tickmark-class"><CheckmarkFilled16 /></span>
                                                                                :
                                                                                <>
                                                                                    {item[1].uiStatus.iconStatus.warning ?
                                                                                        <>

                                                                                            <span className="warning-class">
                                                                                                <TooltipIcon tooltipText='warning' direction='right'>
                                                                                                    <WarningFilled16 />
                                                                                                </TooltipIcon>
                                                                                            </span>


                                                                                        </>

                                                                                        :
                                                                                        <>
                                                                                            <span className="error-class">  <TooltipIcon tooltipText='ERROR:Distribution is not 100%. Please add up to 100%.' direction='right'>
                                                                                                <ErrorFilled16 />
                                                                                            </TooltipIcon></span>

                                                                                        </>
                                                                                    }
                                                                                </>
                                                                            }
                                                                        </>
                                                                        :
                                                                        ''
                                                                    }

                                                                </TableCell>
                                                                <TableCell className="tableBold">
                                                                    <p>{englishValue(item[0])}</p>
                                                                    <div className='helpertextVal'>
                                                                        <p><Information12 /> {englishValue('Boterror')}</p>
                                                                    </div>

                                                                </TableCell>
                                                                
                                                                <TableCell className='automationatble'>
                                                                    {FocusFlag && FocusValueIdFlag == `automation_${item[0]}_bluePrismPercentage` ?
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_bluePrismPercentage`}
                                                                            name={`automation_${item[0]}_bluePrismPercentage`}
                                                                            value={`${item[1].bluePrismPercentage}`}
                                                                            onChange={handlerChangeData}
                                                                            readOnly={readOnlyStatus}
                                                                            onBlur={handlerChange}
                                                                            onFocus={handlerFocus}

                                                                        /> :
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_bluePrismPercentage`}
                                                                            name={`automation_${item[0]}_bluePrismPercentage`}
                                                                            value={`${item[1].bluePrismPercentage}%`}
                                                                            onChange={handlerChangeData}
                                                                            readOnly={readOnlyStatus}
                                                                            onBlur={handlerChange}
                                                                            onFocus={handlerFocus}

                                                                        />}
                                                                </TableCell>
                                                                <TableCell className='automationatble'>
                                                                    {FocusFlag && FocusValueIdFlag == `automation_${item[0]}_wdgPercentage` ?
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_wdgPercentage`}
                                                                            name={`automation_${item[0]}_wdgPercentage`}
                                                                            value={`${item[1].wdgPercentage}`}
                                                                            readOnly={readOnlyStatus}
                                                                            onChange={handlerChangeData}
                                                                            onBlur={handlerChange}
                                                                            onFocus={handlerFocus}
                                                                        /> :
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_wdgPercentage`}
                                                                            name={`automation_${item[0]}_wdgPercentage`}
                                                                            value={`${item[1].wdgPercentage}%`}
                                                                            readOnly={readOnlyStatus}
                                                                            onChange={handlerChangeData}
                                                                            onBlur={handlerChange}
                                                                            onFocus={handlerFocus}
                                                                        />}
                                                                </TableCell>
                                                                <TableCell className='automationatble'>
                                                                    {FocusFlag && FocusValueIdFlag == `automation_${item[0]}_uiPathPercentage` ?
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_uiPathPercentage`}
                                                                            name={`automation_${item[0]}_uiPathPercentage`}
                                                                            value={`${item[1].uiPathPercentage}`}
                                                                            onFocus={handlerFocus}
                                                                            readOnly={readOnlyStatus}
                                                                            onChange={handlerChangeData}
                                                                            onBlur={handlerChange}
                                                                        /> :
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_uiPathPercentage`}
                                                                            name={`automation_${item[0]}_uiPathPercentage`}
                                                                            value={`${item[1].uiPathPercentage}%`}
                                                                            onFocus={handlerFocus}
                                                                            readOnly={readOnlyStatus}
                                                                            onChange={handlerChangeData}
                                                                            onBlur={handlerChange}
                                                                        />}
                                                                </TableCell>
                                                                <TableCell className='automationatble'>
                                                                    {FocusFlag && FocusValueIdFlag == `automation_${item[0]}_automationAnywherePercentage` ?
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_automationAnywherePercentage`}
                                                                            name={`automation_${item[0]}_automationAnywherePercentage`}
                                                                            value={`${item[1].automationAnywherePercentage}`}
                                                                            readOnly={readOnlyStatus}
                                                                            onChange={handlerChangeData}
                                                                            onBlur={handlerChange}
                                                                            onFocus={handlerFocus}
                                                                        /> :
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_automationAnywherePercentage`}
                                                                            name={`automation_${item[0]}_automationAnywherePercentage`}
                                                                            value={`${item[1].automationAnywherePercentage}%`}
                                                                            readOnly={readOnlyStatus}
                                                                            onChange={handlerChangeData}
                                                                            onBlur={handlerChange}
                                                                            onFocus={handlerFocus}
                                                                        />}
                                                                </TableCell>


                                                            </TableRow>
                                                        )
                                                    }
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}
                        </DataTable>
                    </div>
                </AccordionItem>
            </Accordion>
        )
    }
    //4th accordin
    const AccordionmonitoringCoverage = (dataDisplay, client, title) => {
        let AutomateObj = {
            monitoringCoverageOfAutomationBOTsAoccCoverage: dataDisplay['monitoringCoverageOfAutomationBOTsAoccCoverage']
        };
        let arrayAitomate = Object.entries(AutomateObj)
        return (
            <Accordion>
                <AccordionItem title={title} open={client}>
                    <div className="table-class">
                        <DataTable
                            rows={[]}
                            headers={["", "", englishValue('Bronze'), englishValue('Silver'), englishValue('Gold')]}>
                            {({ rows, headers, getHeaderProps }) => (
                                <TableContainer >
                                    <Table>
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
                                        <TableBody>
                                            {
                                                arrayAitomate.map((item) => {
                                                    if (item[0] === 'monitoringCoverageOfAutomationBOTsAoccCoverage') {
                                                        return (
                                                            <TableRow>
                                                                <TableCell className='iconRow'>
                                                                    {Object.keys(item[1].uiStatus.iconStatus).length !== 0 ?
                                                                        <>
                                                                            {item[1].uiStatus.iconStatus.ok ?
                                                                                <span className="tickmark-class"><CheckmarkFilled16 /></span>
                                                                                :
                                                                                <>
                                                                                    {item[1].uiStatus.iconStatus.warning ?
                                                                                        <>

                                                                                            <span className="warning-class">
                                                                                                <TooltipIcon tooltipText='warning' direction='right'>
                                                                                                    <WarningFilled16 />
                                                                                                </TooltipIcon>
                                                                                            </span>


                                                                                        </>

                                                                                        :
                                                                                        <>
                                                                                            <span className="error-class">  <TooltipIcon tooltipText='ERROR:Distribution is not 100%. Please add up to 100%.' direction='right'>
                                                                                                <ErrorFilled16 />
                                                                                            </TooltipIcon></span>

                                                                                        </>
                                                                                    }
                                                                                </>
                                                                            }
                                                                        </>
                                                                        :
                                                                        ''
                                                                    }

                                                                </TableCell>
                                                                <TableCell className="tableBold">
                                                                    <p>{englishValue(item[0])}</p>
                                                                    <div className='helpertextVal'>
                                                                        <p><Information12 /> {englishValue('Boterror')}</p>
                                                                    </div>

                                                                </TableCell>
                                                                <TableCell>

                                                                    {FocusFlag && FocusValueIdFlag == `automation_${item[0]}_bronzeMonitoringPercentage` ?
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_bronzeMonitoringPercentage`}
                                                                            name={`automation_${item[0]}_bronzeMonitoringPercentage`}
                                                                            value={`${item[1].bronzeMonitoringPercentage}`}
                                                                            onFocus={handlerFocus}
                                                                            readOnly={readOnlyStatus}
                                                                            onChange={handlerChangeData}
                                                                            onBlur={handlerChange}
                                                                        /> :
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_bronzeMonitoringPercentage`}
                                                                            name={`automation_${item[0]}_bronzeMonitoringPercentage`}
                                                                            value={`${item[1].bronzeMonitoringPercentage}%`}
                                                                            onFocus={handlerFocus}
                                                                            readOnly={readOnlyStatus}
                                                                            onChange={handlerChangeData}
                                                                            onBlur={handlerChange}
                                                                        />}
                                                                </TableCell>
                                                                <TableCell>

                                                                    {FocusFlag && FocusValueIdFlag == `automation_${item[0]}_silverMonitoringPercentage` ?
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_silverMonitoringPercentage`}
                                                                            name={`automation_${item[0]}_silverMonitoringPercentage`}
                                                                            value={`${item[1].silverMonitoringPercentage}`}
                                                                            readOnly={readOnlyStatus}
                                                                            onChange={handlerChangeData}
                                                                            onBlur={handlerChange}
                                                                            onFocus={handlerFocus}

                                                                        /> :
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_silverMonitoringPercentage`}
                                                                            name={`automation_${item[0]}_silverMonitoringPercentage`}
                                                                            value={`${item[1].silverMonitoringPercentage}%`}
                                                                            onChange={handlerChangeData}
                                                                            readOnly={readOnlyStatus}
                                                                            onBlur={handlerChange}
                                                                            onFocus={handlerFocus}

                                                                        />}
                                                                </TableCell>
                                                                <TableCell>

                                                                    {FocusFlag && FocusValueIdFlag == `automation_${item[0]}_goldMonitoringPercentage` ?
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_goldMonitoringPercentage`}
                                                                            name={`automation_${item[0]}_goldMonitoringPercentage`}
                                                                            value={`${item[1].goldMonitoringPercentage}`}
                                                                            readOnly={readOnlyStatus}
                                                                            onChange={handlerChangeData}
                                                                            onBlur={handlerChange}
                                                                            onFocus={handlerFocus}
                                                                        /> :
                                                                        <TextInput
                                                                            type='text'
                                                                            labelText=''
                                                                            id={`automation_${item[0]}_goldMonitoringPercentage`}
                                                                            name={`automation_${item[0]}_goldMonitoringPercentage`}
                                                                            value={`${item[1].goldMonitoringPercentage}%`}
                                                                            readOnly={readOnlyStatus}
                                                                            onChange={handlerChangeData}
                                                                            onBlur={handlerChange}
                                                                            onFocus={handlerFocus}
                                                                        />}
                                                                </TableCell>


                                                            </TableRow>
                                                        )
                                                    }
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}
                        </DataTable>
                    </div>
                </AccordionItem>
            </Accordion>
        )
    }

    //5th accordin

    const AccordiondigitalWorkerScopeOnPerformActivities = (dataDisplay, client, title) => {
        let AutomateObj = {
            digitalPMOScope: dataDisplay['digitalWorkerScopeOnPerformActivities']['digitalPMOScope'],
            digitalQAScope: dataDisplay['digitalWorkerScopeOnPerformActivities']['digitalQAScope'],
            ticketManagerScope: dataDisplay['digitalWorkerScopeOnPerformActivities']['ticketManagerScope'],
            jobMonitorScope: dataDisplay['digitalWorkerScopeOnPerformActivities']['jobMonitorScope'],
            ansibleMoniringScope: dataDisplay['digitalWorkerScopeOnPerformActivities']['ansibleMoniringScope']
        };
        let arrayAitomate = Object.entries(AutomateObj)
        return (
            <Accordion>
                <AccordionItem title={title} open={client}>
                    <div className="table-class">
                        <DataTable
                            rows={[]}
                            headers={[]}>
                            {({ rows, headers, getHeaderProps }) => (
                                <TableContainer >
                                    <Table>
                                        <TableBody>
                                            {
                                                arrayAitomate.map((item) => {
                                                    let newvalue = `${item[0]}Percentage`
                                                    return (
                                                        <TableRow>
                                                            <TableCell className='iconRow'>
                                                                {Object.keys(item[1].uiStatus.iconStatus).length !== 0 ?
                                                                    <>
                                                                        {item[1].uiStatus.iconStatus.ok ?
                                                                            <span className="tickmark-class"><CheckmarkFilled16 /></span>
                                                                            :
                                                                            <>
                                                                                {item[1].uiStatus.iconStatus.warning ?
                                                                                    <>

                                                                                        <span className="warning-class">
                                                                                            <TooltipIcon tooltipText={englishValue(`${item[0]}_warning`)} direction='right'>
                                                                                                <WarningFilled16 />
                                                                                            </TooltipIcon>
                                                                                        </span>


                                                                                    </>

                                                                                    :
                                                                                    <>
                                                                                        <span className="error-class">  <TooltipIcon tooltipText='error' direction='right'>
                                                                                            <ErrorFilled16 />
                                                                                        </TooltipIcon></span>

                                                                                    </>
                                                                                }
                                                                            </>
                                                                        }
                                                                    </>
                                                                    :
                                                                    ''
                                                                }

                                                            </TableCell>
                                                            <TableCell className="tableBold">
                                                                <p> {englishValue(item[0])}</p>
                                                                <div className='helpertextVal'>
                                                                    <p><Information12 /> {englishValue(`${item[0]}_warning`)}</p>
                                                                </div>
                                                            </TableCell>
                                                            <TableCell>

                                                                {FocusFlag && FocusValueIdFlag == `automation_digitalWorkerScopeOnPerformActivities_${item[0]}_${newvalue}` ?
                                                                    <TextInput
                                                                        type='text'
                                                                        labelText=''
                                                                        id={`automation_digitalWorkerScopeOnPerformActivities_${item[0]}_${newvalue}`}
                                                                        name={`automation_digitalWorkerScopeOnPerformActivities_${item[0]}_${newvalue}`}
                                                                        value={`${item[1][newvalue]}`}
                                                                        readOnly={readOnlyStatus}
                                                                        onChange={handlerChangeDatadigitalWorker}
                                                                        onBlur={handlerChangedigitalWorker}
                                                                        onFocus={handlerFocus}

                                                                    /> :
                                                                    <TextInput
                                                                        type='text'
                                                                        labelText=''
                                                                        id={`automation_digitalWorkerScopeOnPerformActivities_${item[0]}_${newvalue}`}
                                                                        name={`automation_digitalWorkerScopeOnPerformActivities_${item[0]}_${newvalue}`}
                                                                        value={`${item[1][newvalue]}%`}
                                                                        readOnly={readOnlyStatus}
                                                                        onChange={handlerChangeDatadigitalWorker}
                                                                        onBlur={handlerChangedigitalWorker}
                                                                        onFocus={handlerFocus}

                                                                    />}
                                                            </TableCell>



                                                        </TableRow>
                                                    )

                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}
                        </DataTable>
                    </div>
                </AccordionItem>
            </Accordion>
        )
    }

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
        setNewHandleFlag(true);
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
        setFocusValueIdFlag("");
        setFocusFlag(false);
        if (parseFloat(IntitalValue) === parseFloat(e.target.value)) {

        } else {
            userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = parseFloat(e.target.value)
            switch (idOppParameter) {
                case "automation_automationEffortAndCostDistributionPercentage_simple":
                    // security_appSecurityScopeDistributionPercentage_C98(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
                case "automation_automationEffortAndCostDistributionPercentage_medium":
                    // security_appSecurityScopeDistributionPercentage_D98(props, userInputData);
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
                case "automation_automationEffortAndCostDistributionPercentage_complex":
                    // security_appSecurityScopeDistributionPercentage_E98(props, userInputData);
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
            if ((valueOppParameter[1]).includes('Percentage') || (valueOppParameter[2]).includes('Percentage')) {
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
    const handlerChangedigitalWorker = (e) => {
        let ObjBtnStatus = {
            errorBtn: false,
            cheackBtn: false
        }
        let valueChange = e.target.id;
        let valueOppParameter = valueChange.split('_');
        let idOppParameter = valueOppParameter[0] + '_' + valueOppParameter[1] + '_' + valueOppParameter[2] + '_' + [valueOppParameter[3]];
        let userData = props.userInpuData.defaultInputData.response;
        let userInputData = userData['estimate']['userInputs'];
        var IntitalValue = userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]][valueOppParameter[3]];
        if (parseFloat(IntitalValue) === parseFloat(e.target.value)) {

        } else {
            userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]][valueOppParameter[3]] = parseFloat(e.target.value);
            switch (idOppParameter) {
                case "automation_digitalWorkerScopeOnPerformActivities_digitalPMOScope_digitalPMOScopePercentage":
                    Automation_appScopeCoveredPercentage(props, userInputData)
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
                case "automation_digitalWorkerScopeOnPerformActivities_digitalQAScope_digitalQAScopePercentage":
                    Automation_appScopeCoveredPercentage(props, userInputData)
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
                case "automation_digitalWorkerScopeOnPerformActivities_ticketManagerScope_ticketManagerScopePercentage":
                    Automation_appScopeCoveredPercentage(props, userInputData)
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
                case "automation_digitalWorkerScopeOnPerformActivities_jobMonitorScope_jobMonitorScopePercentage":
                    Automation_appScopeCoveredPercentage(props, userInputData)
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
                case "automation_digitalWorkerScopeOnPerformActivities_ansibleMoniringScope_ansibleMoniringScopePercentage":
                    Automation_appScopeCoveredPercentage(props, userInputData)
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
                default:
                    inputEditDataNormal(userInputData, ObjBtnStatus);
                    break;
            }
            inputEditDataNormal(userInputData, ObjBtnStatus);

        }
    };

    const handlerChangeDatadigitalWorker = (e) => {
        let valueChange = e.target.id;
        let valueOppParameter = valueChange.split('_');
        var newState = JSON.parse(JSON.stringify(initialstate));
        if (e.target.value === '' || e.target.value === '%') {
            newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]][valueOppParameter[3]] = 0;
            setInitialstate({ ...newState });
        } else if (e.target.value === '0' || e.target.value === '0%') {
            newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]][valueOppParameter[3]] = 0;
            setInitialstate({ ...newState });
        } else {
            let value = e.target.value.replace(/^0+/, 0);
            newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]][valueOppParameter[3]] = value;
            if ((valueOppParameter[3]).includes('Percentage')) {
                let value = (e.target.value.replace(/%/, ''));
                value = value.replace(/^0+/, 0)
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


   

    let userData = props.userInpuData.defaultInputData.response;
    let userInputData = userData['estimate']['userInputs'];
    return (
        <div className="inputName">
            <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />
            <NavBar title='automation'
                userNavBar={props.userInpuData.defaultInputData['response']['estimate']}
                {...props}
            />
            <Content>
                <HeaderInputs {...props}
                    userData1={props.userInpuData.defaultInputData['response']['estimate']}
                    title='input'
                    resetHandler={resetHandler}
                ></HeaderInputs>
                <div className='automationInputMainHead'>
                    <div className="breadCrumbgeneral">
                        {breadcrumb('Automation')}
                        <div className="accordianAll">
                            <span className="collapseAll" onClick={() => {
                                setClient(false)
                            }
                            }
                            >{englishValue('collapseAll')}<span className="upArrow"><UpArrow /></span></span>
                            <span className="expandAll" onClick={() => setClient(true)}>{englishValue('expandAll')}<span className="downArrow"><DownArrow /></span></span>
                        </div>
                    </div>
                    <div className='automationInputMain'>
                        <div className="heading">

                        </div>
                        <div className="Accordion-class">
                            {AccordionAutomationEffort(initialstate['automation'], "true", englishValue('AutomationEffort'))}
                        </div>
                        <div className="Accordion-class">
                            {AccordionDistributionOnetime(client, englishValue('DistributionOnetime'))}
                        </div>

                        <div className="Accordion-class">
                            {AccordionAutomationcombination2(initialstate['automation'], client, englishValue('AutomationTools'))}
                        </div>
                        {/* <div className="Accordion-class3">
                            {AccordionAutomationcombination(initialstate['automation'], client, englishValue('AutomationTools'))}
                        </div> */}
                        <div className="Accordion-class">
                            {AccordionmonitoringCoverage(initialstate['automation'], client, englishValue('BotMonitoring(AOCC coverage)'))}
                        </div>
                        <div className="Accordion-class5">
                            {AccordiondigitalWorkerScopeOnPerformActivities(initialstate['automation'], client, englishValue('DWScopeActivities'))}
                        </div>

                    </div>
                </div>
                <Feedback/>
            </Content>
        </div>
    );
});
export default connect(mapStateToProps, mapDispatchToProps)(Automation);