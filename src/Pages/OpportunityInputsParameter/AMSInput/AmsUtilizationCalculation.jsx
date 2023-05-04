import React, { useEffect, useState } from 'react'
import { englishValue, OnlyAllowNumberValidation } from '../../../Utils/CommonFunc'
import { TextInput, TableContainer, TableRow, TableHeader, TableCell, TableHead, Table, TableBody, TooltipIcon } from 'carbon-components-react';
import './amsInput.scss';
import { AmsUtilizationUpdate } from '../../../Components/CommonFuncs/formula/FormulaComponent_applicationCost';
import { ErrorFilled16, CheckmarkFilled16 } from '@carbon/icons-react';
let HeaderTitle = ''
const headers = [
    englishValue('YearlyUtilization'),
    englishValue('Hours'),
    englishValue("Onshore_Offshore_Ratio")
];

function AmsUtilizationCalculation({ data, ...props }) {

    const effortEstimationParameters = props.userInpuData.defaultInputData.response.estimate.userInputs.effortEstimationParameters;
   // for removing ish hrs which was previously in json pushing other rows except ish hrs
    let temp = [];
    for (const key in data) {
        if (key !== "iscHrs") {
            temp.push({
                yearlyUtilization: key,
                hours: data[key],
                onShoreOfshoreRatio: ""
            })
        }
    }
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData)
    let readOnlyStatus = false;
    if (props.UserState === 'InReview' || props.UserState === 'Approved') {
        readOnlyStatus = true;
    } else if (props.UserEmail === userData.email || props.UserState === "ReWork") {
        readOnlyStatus = true;
    }
    // { onsitePercentage, offshorePercentage }    // fetching the onshoreratio clolumn values Onshore:Offshore Ratio against rows        
    temp = temp.map((i) => {

        if (i.yearlyUtilization === "localHrs") {
            i.onShoreOfshoreRatio = (effortEstimationParameters.onsitePercentage * (25 / 100))
        }
        if (i.yearlyUtilization === "contractorsOnsiteHrs") {
            i.onShoreOfshoreRatio = (effortEstimationParameters.onsitePercentage * (25 / 100))
        }
        if (i.yearlyUtilization === "landedHrs") {
            i.onShoreOfshoreRatio = (effortEstimationParameters.onsitePercentage * (50 / 100))
        }
        if (i.yearlyUtilization === "offshoreHrs") {
            i.onShoreOfshoreRatio = (effortEstimationParameters.offshorePercentage * (90 / 100))
        }
        if (i.yearlyUtilization === "offshoreContractorsHrs") {
            i.onShoreOfshoreRatio = (effortEstimationParameters.offshorePercentage * (10 / 100))
        }
        // if (index === 6) {
        //     i.push((effortEstimationParameters.offshorePercentage / 90))
        // }
        return i;
    })
    // totaling of Onshore:Offshore Ratio values against IBM Weighted Utilization	
    let sum = 0;
    for (const i of temp) {
        if (typeof i.onShoreOfshoreRatio === "number") {
            sum += i.onShoreOfshoreRatio;
        }
    }
        // totaling of Hours valuesIBM Weighted Utilization	

    let IBM_Weighted_Utilization = 0;
    for (const item of temp) {
        if (item.hours && item.onShoreOfshoreRatio) {
            IBM_Weighted_Utilization = IBM_Weighted_Utilization + ((item.hours * item.onShoreOfshoreRatio) / 100)
        }
    }
    temp = temp.map((i) => {
        if (i.yearlyUtilization === "ibmWeightedUtilizationAnnualHrs") {
            i.onShoreOfshoreRatio = sum;
            i.hours = IBM_Weighted_Utilization.toFixed(0);
        }
        if (i.yearlyUtilization === "ibmWeightedUtilizationMonthlyHrs") {
            i.hours = (IBM_Weighted_Utilization / 12).toFixed(0)
        }
        return i;
    })
    const [state, setState] = useState(temp);
    useEffect(() => {
        if (props.resetHandleFlag) {
            const effortEstimationParameters = props.userInpuData.defaultInputData.response.estimate.userInputs.effortEstimationParameters;
          
            let temp = [];
            let temdata = props.userInpuData.defaultInputData.response.estimate.userInputs.ams.amsUtilizationCalculation
            for (const key in temdata) {
                if (key !== "iscHrs") {
                    temp.push({
                        yearlyUtilization: key,
                        hours: temdata[key],
                        onShoreOfshoreRatio: ""
                    })
                }
            }
            // { onsitePercentage, offshorePercentage }            
            temp = temp.map((i) => {
                if (i.yearlyUtilization === "localHrs") {
                    i.onShoreOfshoreRatio = (effortEstimationParameters.onsitePercentage * (25 / 100))
                }
                if (i.yearlyUtilization === "contractorsOnsiteHrs") {
                    i.onShoreOfshoreRatio = (effortEstimationParameters.onsitePercentage * (25 / 100))
                }
                if (i.yearlyUtilization === "landedHrs") {
                    i.onShoreOfshoreRatio = (effortEstimationParameters.onsitePercentage * (50 / 100))
                }
                if (i.yearlyUtilization === "offshoreHrs") {
                    i.onShoreOfshoreRatio = (effortEstimationParameters.offshorePercentage * (90 / 100))
                }
                if (i.yearlyUtilization === "offshoreContractorsHrs") {
                    i.onShoreOfshoreRatio = (effortEstimationParameters.offshorePercentage * (10 / 100))
                }
                // if (index === 6) {
                //     i.push((effortEstimationParameters.offshorePercentage / 90))
                // }
                return i;
            })
            let sum = 0;
            for (const i of temp) {
                if (typeof i.onShoreOfshoreRatio === "number") {
                    sum += i.onShoreOfshoreRatio;
                }
            }
            //totaling of IBM Weighted Utilization (Monthly)

            let IBM_Weighted_Utilization = 0;
            for (const item of temp) {
                if (item.hours && item.onShoreOfshoreRatio) {
                    IBM_Weighted_Utilization = IBM_Weighted_Utilization + ((item.hours * item.onShoreOfshoreRatio) / 100)
                }
            }
            temp = temp.map((i) => {
                if (i.yearlyUtilization === "ibmWeightedUtilizationAnnualHrs") {
                    i.onShoreOfshoreRatio = sum;
                    i.hours = IBM_Weighted_Utilization.toFixed(0);
                }
                if (i.yearlyUtilization === "ibmWeightedUtilizationMonthlyHrs") {
                    i.hours = (IBM_Weighted_Utilization / 12).toFixed(0)
                }
                return i;
            })

            setState(temp)
        }

    })


    function handlChange(e, _index) {
        let { value } = e.target;
       
        if (!OnlyAllowNumberValidation(e, value)) {
            return;
        }
        if (value.length > 5) {
            return
        }
        if (value.startsWith("00")) {
            return
        }
        if (Number(value) > 99999) {
            return
        }
        if (value.length >= 2 && value.startsWith("0")) {
            value = value.slice(1)
        }
        if (value === '' || value === '%') {
            value = 0;
        }
        let temp = state.map((i, index) => {
            if (index === _index) {
                i.hours = value;
            }
            return i;
        })
        let IBM_Weighted_Utilization = 0;
        for (let i = 1; i < 6; i++) {
            IBM_Weighted_Utilization = IBM_Weighted_Utilization + ((temp[i].hours * temp[i].onShoreOfshoreRatio) / 100)
        }
        temp = temp.map((i) => {
            if (i.yearlyUtilization === "ibmWeightedUtilizationAnnualHrs") {
                i.hours = IBM_Weighted_Utilization.toFixed(0);
            }
            if (i.yearlyUtilization === "ibmWeightedUtilizationMonthlyHrs") {
                i.hours = (IBM_Weighted_Utilization / 12).toFixed(0)
            }
            return i;
        })
        setState([...temp]);
    }
    
    function handleBlur() {
        const t = props.userInpuData.defaultInputData.response.estimate.userInputs.ams;
        for (const item of state) {
     //jira -779- Amsutilization UI status error
            if (item.yearlyUtilization == 'uiStatus') {
                if (t.amsUtilizationCalculation.ibmWeightedUtilizationMonthlyHrs < 145 || t.amsUtilizationCalculation.ibmWeightedUtilizationMonthlyHrs > 185) {
                    t.amsUtilizationCalculation['uiStatus'] = {
                        iconStatus:{
                        ok: false,
                        warning: false,
                        warningMessage: ""
                    }
                    }
                } else {
                    t.amsUtilizationCalculation[item.yearlyUtilization] = (item.hours);
                }
            } else {
                t.amsUtilizationCalculation[item.yearlyUtilization] = Number(item.hours);
            }
        }
        AmsUtilizationUpdate(props, t, props.UserState, props.UserEmail);
    }
    function ErrorHandler(){

    }
    if (props.idTitle === 'ams_UtilizationCalculation') {
        HeaderTitle = (<span className='AMSHeader'>{englishValue('UtilizationCalculation')}
            {props.userInpuData.defaultInputData.response.estimate.userInputs.ams.amsUtilizationCalculation.ibmWeightedUtilizationMonthlyHrs< 145 ||props.userInpuData.defaultInputData.response.estimate.userInputs.ams.amsUtilizationCalculation.ibmWeightedUtilizationMonthlyHrs > 185 ?
                <>
                {/* //tooltip validation for number range */}
                    <span className="error-class" style={{ paddingLeft: '1rem' }}>
                        
                        <TooltipIcon tooltipText='The utilization is out of viable range, please correct before proceeding.' direction='right'>
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
        <div className="ams-utilization-calculation">
            <TableContainer
                title={HeaderTitle}>
                <Table >
                    <TableHead>
                        <TableRow >
                            {
                                headers.map((header) => (
                                    <TableHeader >
                                        {header}
                                    </TableHeader>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            state.map((i, pos) =>

                                <TableRow>
                                    {['uiStatus'].includes(i.yearlyUtilization) ? <></> : <>
                                        {
                                            ["ibmWeightedUtilizationMonthlyHrs"].includes(i.yearlyUtilization)
                                                ?
                                                <>
                                                {/* Number validation for the IBM Weighted Utilization (Monthly) */}
                                                    <TableCell>{englishValue(i.yearlyUtilization) ? englishValue(i.yearlyUtilization) : i}
                                                        <p className={i.hours < 145 || i.hours > 185 ? 'errorHours rangeHour' : 'rangeHour'}>Range :145 - 185</p>
                                                    </TableCell>
                                                </>
                                                :
                                                <TableCell>{englishValue(i.yearlyUtilization) ? englishValue(i.yearlyUtilization) : i}</TableCell>

                                        }
                                        {
                                            ["ibmWeightedUtilizationAnnualHrs", "ibmWeightedUtilizationMonthlyHrs"].includes(i.yearlyUtilization)
                                                ?
                                                <>
                                                    {
                                                        ["ibmWeightedUtilizationMonthlyHrs"].includes(i.yearlyUtilization) ?
                                                            <TableCell style={{ paddingLeft: "20px" }} className={i.hours < 145 || i.hours > 185 ? 'errorHours' : ''}>{i.hours ? i.hours : ""}</TableCell>
                                                            :
                                                            <TableCell style={{ paddingLeft: "20px" }}>{i.hours ? i.hours : ""}</TableCell>
                                                    }
                                                </>
                                                :
                                                <TableCell >
                                                    <TextInput
                                                        // type="number"
                                                        className="additional-field1"
                                                        name='wt_hrs'
                                                        value={i.hours}
                                                        onChange={e => handlChange(e, pos)}
                                                        readOnly={readOnlyStatus}
                                                        onBlur={handleBlur}
                                                    />
                                                </TableCell>
                                        }
                                        <TableCell style={{ paddingLeft: "106px" }}>{i.onShoreOfshoreRatio && typeof i.onShoreOfshoreRatio === "number" ? `${i.onShoreOfshoreRatio.toFixed(2)} %` : ""}</TableCell>

                                    </>
                                    }

                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AmsUtilizationCalculation
