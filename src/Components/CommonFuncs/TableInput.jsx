import React from 'react';
import { DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TableContainer, TextInput, TooltipIcon, Select, SelectItem } from 'carbon-components-react';
import { englishValue, infoValue, currencyCoverter, ErrorValue, warningValue } from "../../Utils/CommonFunc";
import "../../Pages/OpportunityInputsParameter/CloudAppOpsInput/MultipleAccoridon.scss"
import HelperText from './HelperText';
import './TableInput.scss';
import percentageIdentificationJSON from '../../Json/percentageIdentificationJSON.json';
import { CheckmarkFilled16, WarningFilled16, ErrorFilled16 } from '@carbon/icons-react';
//Table to display Data
const displayData = { ...percentageIdentificationJSON.general }
const TableInput = (props) => {
    //checking if new/rework --- then readonlystatus is true which means user can edit the data else the feilds will be disabled
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData)
    let readOnlyStatus = false;
    if (props.UserState === 'InReview' || props.UserState === 'Approved') {
        readOnlyStatus = true;
    } else if (props.UserEmail === userData.email || props.UserState === "ReWork") {
        readOnlyStatus = true;
    }
    //setting the dymaic range in security and displaying in the warning text  in line 172
    let valueRange = ''
    if (props.idTitle === 'security') {
        valueRange = `${englishValue('Typicalsecuritywithin')} ${props.rangeData} ${englishValue('range1')}`
    }
    var sr;
    var HeaderTitle;

    // returning the value  for the particular key
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
    {/* JIRAA 688 AIOPs  */ }
    // displaying the 2 dropdowns in Aipos in general
    const selectDropDownDynamAiposTool = (cell, valuedropdown, valueselection) => {

        let dataOptions = props.userDropDownData.defaultDropDown['response'].defaultDropdown[valuedropdown].map((item) => {
            return (
                <SelectItem key={item.key} value={item.value} text={item.value} />
            )
        }
        );
        let readOnlyStatusData = readOnlyStatus ? 'readonly' : ''
        return (
            <Select className="SelectClass"
                labelText=''
                id={`${valuedropdown}_general_${valueselection}`}
                onChange={e => props.handlerChangeSelectHandler(e, cell)}
                // adding diabled true or false for in review/approved/rework  JIRA - bug id 621/622
                disabled={readOnlyStatus}
                value={valueDropdownVal(cell, props.userDropDownData.defaultDropDown['response'].defaultDropdown[valuedropdown])}>
                {dataOptions}
            </Select>

        )
    }

    //display the error if total sum of ams is not 100 % else tick mark green icon will be displayed
    if (props.idTitle === 'ams_ticketsDistribution') {
        HeaderTitle = (<span className='AMSHeader'>{englishValue('YoYTickets')}
            {props.AmsError ?
                <>
                    <span className="error-class" style={{ paddingLeft: '1rem' }}>
                        <TooltipIcon tooltipText={englishValue('Sumticket')} direction='right'>
                            <ErrorFilled16 />
                        </TooltipIcon></span>
                </>
                :
                <>
                    <span className="tickmark-class" style={{ paddingLeft: '1rem' }}><CheckmarkFilled16 /></span>
                </>
            }
        </span >)
    } else {
        HeaderTitle = props.title
    }
    return (
        <DataTable rows={props.rows} headers={props.headers}>
            {({ rows, headers, getHeaderProps, getTableProps }) => (
                <TableContainer
                    title={HeaderTitle}
                    description={props.description}
                >

                    <Table {...getTableProps()}>
                        {/* display Headers in the column */}
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
                            {props.rows.map(tds => {
                                if (tds[0] !== 'uiStatus') {
                                    //not going inside this if now after ams utilization is changed
                                    if (typeof (tds[1]) == 'number') {
                                        return (
                                            <TableRow>
                                                <TableCell className='labelrow'>{englishValue(tds[0])}</TableCell>
                                                <TableCell >{tds[1]}</TableCell>
                                            </TableRow>
                                        )
                                    } else if (
                                        //General Aiops dropdown
                                        tds[0] == "aiOpsObservabilityToolDefaultSelection"
                                    ) {
                                        return (
                                            <TableRow>
                                                <TableCell className="dropdown-label2"></TableCell>
                                                <TableCell className="dropdown-label">{englishValue('aiOpsObservabilityToolDefaultSelection')}</TableCell>
                                                <TableCell>
                                                    {selectDropDownDynamAiposTool(tds[1], 'aiOpsObservabilityTools', 'aiOpsObservabilityToolDefaultSelection')}
                                                </TableCell>
                                            </TableRow>
                                        );

                                    } else if (tds[0] == "aiOpsArmToolDefaultSelection") {
                                        //General Aiops dropdown
                                        return (
                                            <TableRow>
                                                <TableCell></TableCell>
                                                <TableCell className="dropdown-label">{englishValue('aiOpsArmToolDefaultSelection')}</TableCell>
                                                <TableCell>
                                                    {selectDropDownDynamAiposTool(tds[1], 'aiOpsArmTools', 'aiOpsArmToolDefaultSelection')}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    }
                                    else {
                                        return (
                                            <TableRow>
                                                {/* only for ams */}
                                                {props.title === 'YoY Tickets' ?
                                                    <>
                                                        <TableCell className='labelrow'>
                                                            <span>{englishValue(tds[0])}</span>
                                                        </TableCell>
                                                    </>
                                                    :
                                                    <>
                                                        {/* for other Application */}
                                                        <TableCell className='iconRow'>
                                                            {Object.keys(tds[1].uiStatus.iconStatus).length !== 0 ?
                                                                <>
                                                                    {tds[1].uiStatus.iconStatus.ok ?
                                                                        <span className="tickmark-class"><CheckmarkFilled16 /></span>
                                                                        :
                                                                        <>
                                                                            {tds[1].uiStatus.iconStatus.warning ?
                                                                                <>
                                                                                    {(props.idTitle === 'security') && (tds[0] === "appSecurityScopeDistributionPercentage") ?
                                                                                        <>
                                                                                            {/* creating a value dynamic Range above  */}
                                                                                            <span className="warning-class">
                                                                                                <TooltipIcon tooltipText={valueRange} direction='right'>
                                                                                                    <WarningFilled16 />
                                                                                                </TooltipIcon>
                                                                                            </span>
                                                                                        </>
                                                                                        :
                                                                                        <>
                                                                                            <span className="warning-class">
                                                                                                {/* displaying value of warning from English JSON */}
                                                                                                <TooltipIcon tooltipText={warningValue(tds[0])} direction='right'>
                                                                                                    <WarningFilled16 />
                                                                                                </TooltipIcon>
                                                                                            </span>
                                                                                        </>
                                                                                    }
                                                                                </>

                                                                                :
                                                                                <>
                                                                                    {/* displaying error */}
                                                                                    {(props.idTitle === 'cloudAppOps') && (tds[0] === 'sumTotalCloudApps') ?
                                                                                        <>
                                                                                            {/* sumTotalCloudApps made in UI not in JSON that comes from API*/}
                                                                                            <span className="error-class"> <TooltipIcon tooltipText={englishValue('sumTotalCloudAppsError')} direction='right'>
                                                                                                <ErrorFilled16 />
                                                                                            </TooltipIcon></span>
                                                                                        </> :
                                                                                        <>
                                                                                            {(props.idTitle === 'general') && (tds[0] === 'sumTotalGeneral') ?
                                                                                                <>
                                                                                                    {/* sumTotalGeneral made in UI not in JSON that comes from API*/}
                                                                                                    <span className="error-class">  <TooltipIcon tooltipText={englishValue('sumTotalGeneralError')} direction='right'>
                                                                                                        <ErrorFilled16 />
                                                                                                    </TooltipIcon></span>
                                                                                                </> :
                                                                                                <>
                                                                                                    <span className="error-class">  <TooltipIcon tooltipText={ErrorValue(tds[0])} direction='right'>
                                                                                                        <ErrorFilled16 />
                                                                                                    </TooltipIcon></span>
                                                                                                </>
                                                                                            }
                                                                                        </>
                                                                                    }

                                                                                </>
                                                                            }
                                                                        </>
                                                                    }
                                                                </>
                                                                :
                                                                ''
                                                            }

                                                        </TableCell>
                                                        <TableCell className='labelrow'>
                                                            <h6>{englishValue(tds[0])}</h6>
                                                            {tds[0] === 'totalTestFTEInSolutionCountDistribution' ? <>
                                                                {/* this for for testing FTE */}
                                                                {Number(tds[1].total) < 5 ?
                                                                    <>
                                                                        <HelperText helperTextVal={englishValue('IGNITENotactivated')}></HelperText>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <HelperText helperTextVal={englishValue('IGNITEactivated')}></HelperText>
                                                                    </>
                                                                }
                                                            </> : <>
                                                                {/* here it checks if tds[0] is a object  or not (object means its has a helper text  value) we created object in English JSON */}
                                                                {infoValue(tds[0]) !== "" ?
                                                                    <HelperText helperTextVal={infoValue(tds[0])}></HelperText>
                                                                    : ""}
                                                            </>}

                                                        </TableCell>

                                                    </>

                                                }

                                                {Object.keys(tds[1]).map((key) => {
                                                    let valText = '';
                                                    if (tds[1][key] !== '') {
                                                        valText = `${tds[1][key]}%`
                                                    }
                                                    if (key !== 'uiStatus') {
                                                        if ((tds[0].includes('Percentage') && key !== 'range') || (tds[0] === 'additionalADCapacityHrsDistribution') || (tds[0] === 'sumTotalAMS') || (tds[0] === 'sumTotalGeneral') || (tds[0] === 'sumTotalCloudApps')) {
                                                            if (displayData[tds[0]]) {
                                                                //General AD capacity
                                                                if (Object.keys(displayData[tds[0]].fields).length !== 0) {
                                                                     // only for general Monthly additional ad capaticty display the values
                                                                    let textVal;
                                                                    if (displayData[tds[0]].fields[key]) {
                                                                        textVal = `${(tds[1][key])}%`
                                                                    }
                                                                    else {
                                                                        textVal = `${(tds[1][key])}`
                                                                    }
                                                                    if (tds[1]['uiStatus']['editableStatus'][key]) {

                                                                        sr = props.idTitle + '_' + tds[0] + '_' + key;
                                                                        //  if a particular id gets focus so we remove % sign from it
                                                                        return <TableCell key={key} >
                                                                            {props.FocusFlag && props.FocusValueIdFlag == sr ?
                                                                                <TextInput
                                                                                    // id="estimate-title"
                                                                                    type='text'
                                                                                    labelText=''
                                                                                    id={sr}
                                                                                    onBlur={props.handlerChange}
                                                                                    name={key}
                                                                                    value={tds[1][key]}
                                                                                    readOnly={readOnlyStatus}
                                                                                    onChange={props.handlerChangeData}
                                                                                    onFocus={props.handlerFocus}
                                                                                />
                                                                                :
                                                                                <TextInput
                                                                                    // id="estimate-title"
                                                                                    type='text'
                                                                                    labelText=''
                                                                                    id={sr}
                                                                                    onBlur={props.handlerChange}
                                                                                    name={key}
                                                                                    value={textVal}
                                                                                    readOnly={readOnlyStatus}
                                                                                    onChange={props.handlerChangeData}
                                                                                    onFocus={props.handlerFocus}
                                                                                />
                                                                            }
                                                                        </TableCell>;
                                                                    }
                                                                    else {
                                                                        if ((tds[0] === 'sumTotalAMS')) {
                                                                            return <TableCell className="nonEdtible-class AMSTotal" >{textVal}</TableCell>;
                                                                        }
                                                                        return <TableCell className="nonEdtible-class" >{textVal}</TableCell>;
                                                                    }
                                                                }
                                                                else {
                                                                    // for the rest percentage values
                                                                    if (tds[1]['uiStatus']['editableStatus'][key]) {
                                                                        sr = props.idTitle + '_' + tds[0] + '_' + key;
                                                                        return <TableCell key={key} >
                                                                            {props.FocusFlag && props.FocusValueIdFlag == sr ?
                                                                                <TextInput
                                                                                    // id="estimate-title"
                                                                                    type='text'
                                                                                    labelText=''
                                                                                    id={sr}
                                                                                    name={key}
                                                                                    onBlur={props.handlerChange}
                                                                                    value={tds[1][key]}
                                                                                    readOnly={readOnlyStatus}
                                                                                    onChange={props.handlerChangeData}
                                                                                    onFocus={props.handlerFocus}                                                                     // value={valText}
                                                                                />
                                                                                :
                                                                                <TextInput
                                                                                    // id="estimate-title"
                                                                                    type='text'
                                                                                    labelText=''
                                                                                    id={sr}
                                                                                    name={key}
                                                                                    onBlur={props.handlerChange}
                                                                                    value={valText}
                                                                                    readOnly={readOnlyStatus}
                                                                                    onChange={props.handlerChangeData}
                                                                                    onFocus={props.handlerFocus}                                                                     // value={valText}
                                                                                />
                                                                            }
                                                                        </TableCell>;
                                                                    }
                                                                    else {
                                                                        return <TableCell className="nonEdtible-class" >{valText}</TableCell>;
                                                                    }
                                                                }
                                                            }
                                                            else {
                                                                //for normal keys in which we dont display %
                                                                if (tds[1]['uiStatus']['editableStatus'][key]) {

                                                                    sr = props.idTitle + '_' + tds[0] + '_' + key;
                                                                    return <TableCell key={key} >
                                                                        {props.FocusFlag && props.FocusValueIdFlag == sr ? <TextInput
                                                                            // id="estimate-title"
                                                                            type='text'
                                                                            onBlur={props.handlerChange}
                                                                            labelText=''
                                                                            id={sr}
                                                                            name={key}
                                                                            value={tds[1][key]}
                                                                            readOnly={readOnlyStatus}
                                                                            onChange={props.handlerChangeData}
                                                                            onFocus={props.handlerFocus}
                                                                        /> : <TextInput
                                                                            // id="estimate-title"
                                                                            type='text'
                                                                            onBlur={props.handlerChange}
                                                                            labelText=''
                                                                            id={sr}
                                                                            name={key}
                                                                            value={valText}
                                                                            readOnly={readOnlyStatus}
                                                                            onChange={props.handlerChangeData}
                                                                            onFocus={props.handlerFocus}
                                                                        />

                                                                        }


                                                                    </TableCell>;
                                                                } else if (((props.idTitle === 'general') || (props.idTitle === 'cloudAppOps') || (props.idTitle === 'ams_ticketsDistribution')) &&
                                                                    ((tds[0] === "sumTotalAMS") || (tds[0] === "sumTotalGeneral") || (tds[0] === "sumTotalCloudApps"))) {
                                                                    if (tds[1][key] == 100.00) {
                                                                        return <TableCell className="nonEdtible-class " >{valText}</TableCell>;
                                                                    } else {
                                                                        return <TableCell className="nonEdtible-class errorSumValidation" >{valText}</TableCell>;
                                                                    }

                                                                }
                                                                else {

                                                                    return <TableCell className="nonEdtible-class" >{valText}</TableCell>;
                                                                }
                                                            }


                                                        }
                                                        else {
                                                            // if feilds are not  percentage 
                                                            if (tds[1]['uiStatus']['editableStatus'][key]) {
                                                                // if feilds are not  percentage  and are editable then display this text input 

                                                                sr = props.idTitle + '_' + tds[0] + '_' + key;

                                                                return <TableCell key={key} >
                                                                    <TextInput
                                                                        // id="estimate-title"
                                                                        type='text'
                                                                        labelText=''
                                                                        id={sr}
                                                                        onBlur={props.handlerChange}
                                                                        name={key}
                                                                        value={tds[1][key]}
                                                                        readOnly={readOnlyStatus}
                                                                        onChange={props.handlerChangeData}
                                                                    />

                                                                </TableCell>;
                                                            }
                                                            else {
                                                                // if feilds are not  percentage  and are not editable then display this  as a normal Table cell
                                                                if (tds[0] === 'typicalCostDistribution_USD' && key !== 'range') {
                                                                    // display value in $so we use a common function of currency converter
                                                                    return <TableCell className="nonEdtible-class" >{currencyCoverter(tds[1][key])}</TableCell>;
                                                                } else {
                                                                    if (typeof (tds[1][key]) == 'number') {
                                                                        return <TableCell className="nonEdtible-class" >{Number(tds[1][key]).toFixed(2)}</TableCell>;
                                                                    } else {
                                                                        if ((key === 'range') && (props.idTitle === 'security') && (tds[0] === "appSecurityScopeDistributionPercentage")) {
                                                                            return <TableCell className="nonEdtible-class" >{props.rangeData}</TableCell>;

                                                                        }
                                                                        else {
                                                                            return <TableCell className="nonEdtible-class" >{tds[1][key]}</TableCell>;

                                                                        }

                                                                    }

                                                                }

                                                            }
                                                        }

                                                    }

                                                })}
                                            </TableRow>
                                        )
                                    }

                                }
                            }
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </DataTable>
    );
}
export default TableInput;