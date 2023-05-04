import React from 'react';
import { DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TableContainer, TextInput, TooltipIcon } from 'carbon-components-react';
import '../../Components/CommonFuncs/TableInput.scss';
import { CheckmarkFilled16, WarningFilled16, ErrorFilled16 } from '@carbon/icons-react';
import { currencyCoverter, englishValue } from '../../Utils/CommonFunc';

// This file code represents the ROM cost output in the application
// const arrCoversionOrder = (originalArr, orderArr) => {
//     let newOrderedArr = [];
//     orderArr.forEach((ele) => {
//       originalArr.forEach((e) => {
//         if (ele == e[0]) {
//             newOrderedArr.push(e)
//         }
//       })
//     })
//     return newOrderedArr;
//   }
const DataTableROM = (props) => {
    let outputYearOneROMCost = props.outputYearOneROMCostSecurity;
    let outputYearOneROMCostSecurityArray = '';
    if (outputYearOneROMCost) {
        outputYearOneROMCostSecurityArray = (outputYearOneROMCost);
        // if( props.title == 'AUTOMATION'){
        //     outputYearOneROMCostSecurityArray=  arrCoversionOrder(outputYearOneROMCostSecurityArray,["numberOfUCsFromAutomationEstimationTool", "costRpaAoccLicense", "costCognitiveAgentAssist", "costECATools", "costDigitalPMO", "costDigitalQA",
        //     "costDigitalTicketManager", "costDigitalJobMonitor", "costSubTotal", "annualRecurringCostForY1", "costsForY1", "perApplicationCostPerYear",
        //     "perApplicationCostPerMonth"])
        // }
       
    }


    return (
        <DataTable rows={[]} headers={props.headerMain}>
            {({ rows, headers, getHeaderProps, getTableProps }) => (
                <TableContainer
                    title={props.title}
                    description={props.description}
                >

                    <Table {...getTableProps()}>
                        <TableHead>
                            <TableRow>
                                {props.headerMain.map((header) => {
                                    if (header !== 'Application Complexity' && header !== 'TOTALS' && header !== 'Average') {
                                        return (
                                            <TableHeader colSpan={4} className='BorderClass borderbottomClass aligncontents' {...getHeaderProps({ header })}>
                                                {header}
                                            </TableHeader>
                                        )
                                    } else if (header == 'Application Complexity') {
                                        return (
                                            <TableHeader className='BorderClass borderbottomClass aligncontents' {...getHeaderProps({ header })}>
                                                {header}
                                            </TableHeader>
                                        )
                                    } else if (header == 'Average') {
                                        return (
                                            <TableHeader colSpan={2} className='BorderClass borderbottomClass aligncontents' {...getHeaderProps({ header })}>
                                                {header}
                                            </TableHeader>
                                        )
                                    } else if (header == 'TOTALS') {
                                        return (
                                            <TableHeader colSpan={2} className='BorderClass borderbottomClass aligncontents' {...getHeaderProps({ header })}>
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
                            <TableRow>
                                {props.header2.map((header) => {
                                    if (header !== 'Range' && header !== 'HIGH' && header !== 'LOW') {
                                        return (
                                            <TableHeader colSpan={2} className='BorderClass aligncontents borderbottomClass midHeader' {...getHeaderProps({ header })}>
                                                {header}
                                            </TableHeader>
                                        )
                                    } else if (header === 'Range') {
                                        return (
                                            <TableHeader className='BorderClass aligncontents borderbottomClass midHeader' {...getHeaderProps({ header })}>
                                                {header}
                                            </TableHeader>
                                        )
                                    } else if (header === 'HIGH' || header === 'LOW') {
                                        return (
                                            <TableHeader className='BorderClass aligncontents borderbottomClass midHeader' {...getHeaderProps({ header })}>
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
                            <TableRow>
                                {props.header3.map((header) => {
                                    if (header === 'OTC') {
                                        return (
                                            <TableHeader  {...getHeaderProps({ header })}>
                                                {header}
                                            </TableHeader>
                                        )
                                    } else if (header === 'MRC') {
                                        return (
                                            <TableHeader className='BorderClass ' {...getHeaderProps({ header })}>
                                                {header}
                                            </TableHeader>
                                        )
                                    } else if (header === 'ARC') {
                                        return (
                                            <TableHeader className='BorderClass ' {...getHeaderProps({ header })}>
                                                {header}
                                            </TableHeader>
                                        )
                                    }
                                    else if (header == '') {
                                        return (
                                            <TableHeader className="headingStart" className='BorderClass'{...getHeaderProps({ header })}>
                                            </TableHeader>
                                        )
                                    }
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {props.title == 'Security (Used for On-Premises solutions only)' ||
                                props.title == 'TESTING (Use if test FTE >=5)' ||
                                props.title == 'AUTOMATION' || props.title == 'CORE APPLICATION SUPPORT' ?
                                <>
                                    {outputYearOneROMCostSecurityArray.map(tds => {


                                        if (tds[0] === 'totalPriceY1' || tds[0] === 'costsForY1') {
                                            return (
                                                <TableRow>
                                                    <TableCell className="tableBold BorderClass2"  > {englishValue(tds[0])}</TableCell>
                                                    <TableCell className="tableBold">{typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].simple.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold">{typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].simple.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell className="tableBold">{typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].medium.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold">{typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].medium.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell className="tableBold">{typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].complex.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold">{typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].complex.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell className="tableBold BorderClass" >{typeof (tds[1].totalOfLowRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfLowRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass" >{typeof (tds[1].totalOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfHighRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold " >{typeof (tds[1].averageOfOneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold " >{typeof (tds[1].averageOfAnnualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfAnnualRecurringCostInUSD)}` : ''}</TableCell>

                                                </TableRow>
                                            )
                                        }
                                        else if (tds[0] === 'totalCostsY1' || tds[0] === 'subTotalCostsY1') {
                                            return (
                                                <TableRow>
                                                    <TableCell className="tableBold BorderClass2"  > {englishValue(tds[0])}</TableCell>

                                                    <TableCell className="tableBold">{typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].simple.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold">{typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].simple.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell className="tableBold">{typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].medium.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold">{typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].medium.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell className="tableBold">{typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].complex.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold">{typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBtableBold BorderClassold">{typeof (tds[1].complex.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell className="tableBold BorderClass" >{typeof (tds[1].totalOfLowRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfLowRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass" >{typeof (tds[1].totalOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfHighRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold " >{typeof (tds[1].averageOfOneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold " >{typeof (tds[1].averageOfMonthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfMonthlyRecurringCostInUSD)}` : ''}</TableCell>

                                                </TableRow>
                                            )
                                        }
                                        else if (tds[0] === 'perApplicationPricePerYear' || tds[0] === 'perApplicationPricePerMonth') {
                                            return (
                                                <TableRow>
                                                    <TableCell className="BorderClass2"  > {englishValue(tds[0])}</TableCell>

                                                    <TableCell className="tableBold">{typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].simple.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold">{typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].simple.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>


                                                    <TableCell className="tableBold">{typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].medium.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold">{typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].medium.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>


                                                    <TableCell className="tableBold">{typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].complex.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold">{typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].complex.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].totalOfLowRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfLowRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].totalOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfHighRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold">{typeof (tds[1].averageOfOneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold ">{typeof (tds[1].averageOfAnnualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfAnnualRecurringCostInUSD)}` : ''}</TableCell>


                                                </TableRow>
                                            )
                                        }

                                        else if (tds[0] === 'devOpsIntegrationPrice') {
                                            return (
                                                <TableRow>
                                                    <TableCell className="BorderClass2"  > {englishValue(tds[0])}</TableCell>

                                                    <TableCell >{typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell>{typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>


                                                    <TableCell >{typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell>{typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell >{typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell>{typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>


                                                    <TableCell className="BorderClass" >{typeof (tds[1].totalOfLowRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfLowRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].totalOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfHighRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell>{typeof (tds[1].averageOfOneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell ></TableCell>

                                                </TableRow>
                                            )
                                        }


                                        else if (tds[0] === 'perApplicationCostPerYear' || tds[0] === 'perApplicationCostPerMonth') {
                                            return (
                                                <TableRow>

                                                    <TableCell className="BorderClass2"  > {englishValue(tds[0])}</TableCell>


                                                    <TableCell >{typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell>{typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell >{typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell>{typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell >{typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell>{typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].totalOfLowRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfLowRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].totalOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfHighRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold " ></TableCell>
                                                    <TableCell className="tableBold " ></TableCell>

                                                </TableRow>
                                            )
                                        }

                                        else if (tds[0] === 'numberOfUCsFromAutomationEstimationTool') {
                                            return (
                                                <TableRow>
                                                    <TableCell className='BorderClass2'>{englishValue(tds[0])}</TableCell>
                                                    <TableCell colSpan={4} className='BorderClass textaligin'>{typeof (tds[1].simple) !== 'undefined' ? `${tds[1].simple}` : ''}</TableCell>
                                                    <TableCell colSpan={4} className='BorderClass textaligin'>{typeof (tds[1].medium) !== 'undefined' ? `${tds[1].medium}` : ''}</TableCell>
                                                    <TableCell colSpan={4} className='BorderClass textaligin'>{typeof (tds[1].complex) !== 'undefined' ? `${tds[1].complex}` : ''}</TableCell>
                                                    <TableCell colSpan={2} className='BorderClass textaligin'>{typeof (tds[1].total) !== 'undefined' ? `${tds[1].total}` : ''}</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell ></TableCell>
                                                </TableRow>
                                            )
                                        }


                                        else if (tds[0] === 'rangeFTEs') {
                                            return (
                                                <TableRow>
                                                    <TableCell className='BorderClass2'> {englishValue(tds[0])}</TableCell>


                                                    <TableCell ></TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.lowRange.fteMRC) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.fteMRC)}` : ''}</TableCell>
                                                    <TableCell ></TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.highRange.fteMRC) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.fteMRC)}` : ''}</TableCell>


                                                    <TableCell ></TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.lowRange.fteMRC) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.fteMRC)}` : ''}</TableCell>
                                                    <TableCell ></TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.highRange.fteMRC) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.fteMRC)}` : ''}</TableCell>


                                                    <TableCell ></TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.lowRange.fteMRC) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.fteMRC)}` : ''}</TableCell>
                                                    <TableCell ></TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.highRange.fteMRC) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.fteMRC)}` : ''}</TableCell>


                                                    <TableCell className='BorderClass'>{typeof (tds[1].totalOfLowRange) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfLowRange)}` : ''}</TableCell>
                                                    <TableCell className='BorderClass'>{typeof (tds[1].totalOfHighRange) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfHighRange)}` : ''}</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>


                                                </TableRow>
                                            )
                                        }
                                        // else if (tds[0] === 'bandMix') {
                                        //     return (
                                        //         <TableRow>
                                        //             <TableCell className='BorderClass2'> {englishValue(tds[0])}</TableCell>

                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].simple.lowRange.bandMixMRC}</TableCell>
                                        //             <TableCell ></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].simple.highRange.bandMixMRC}</TableCell>

                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].medium.lowRange.bandMixMRC}</TableCell>
                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].medium.highRange.bandMixMRC}</TableCell>

                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].complex.lowRange.bandMixMRC}</TableCell>
                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].complex.highRange.bandMixMRC}</TableCell>

                                        //             <TableCell className='BorderClass'>{tds[1].totalOfLowRange}</TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].totalOfHighRange}</TableCell>
                                        //             <TableCell></TableCell>
                                        //             <TableCell></TableCell>
                                        //         </TableRow>
                                        //     )
                                        // }
                                        else if (tds[0] === 'costPerHour') {
                                            return (
                                                <TableRow>
                                                    <TableCell className='BorderClass2'> {englishValue(tds[0])}</TableCell>


                                                    <TableCell ></TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell ></TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>



                                                    <TableCell ></TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell ></TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell ></TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell ></TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>


                                                    <TableCell className='BorderClass'>{typeof (tds[1].totalOfLowRange) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfLowRange)}` : ''}</TableCell>
                                                    <TableCell className='BorderClass'>{typeof (tds[1].totalOfHighRange) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfHighRange)}` : ''}</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                            )
                                        }
                                        // else if (tds[0] === 'labourCostPerMonthPerMRC') {
                                        //     return (
                                        //         <TableRow>
                                        //             <TableCell className='BorderClass2'> {englishValue(tds[0])}</TableCell>

                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].simple.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].simple.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell ></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].simple.highRange.monthlyRecurringCostInUSD ? `$${tds[1].simple.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].medium.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].medium.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].medium.highRange.monthlyRecurringCostInUSD ? `$${tds[1].medium.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].complex.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].complex.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].complex.highRange.monthlyRecurringCostInUSD ? `$${tds[1].complex.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='BorderClass'>{tds[1].totalOfLowRange ? `$${tds[1].totalOfLowRange}` : ''}</TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].totalOfHighRange ? `$${tds[1].totalOfHighRange}` : ''}</TableCell>
                                        //             <TableCell></TableCell>
                                        //             <TableCell></TableCell>
                                        //         </TableRow>
                                        //     )
                                        // }

                                        // else if (tds[0] === 'labourCostPerSteadyStateInY1') {
                                        //     return (
                                        //         <TableRow>
                                        //             <TableCell className='BorderClass3'> {englishValue(tds[0])}</TableCell>

                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].simple.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].simple.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell ></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].simple.highRange.monthlyRecurringCostInUSD ? `$${tds[1].simple.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].medium.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].medium.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].medium.highRange.monthlyRecurringCostInUSD ? `$${tds[1].medium.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].complex.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].complex.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell></TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].complex.highRange.monthlyRecurringCostInUSD ? `$${tds[1].complex.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='BorderClass'>{tds[1].totalOfLowRangeInUSD ? `$${tds[1].totalOfLowRangeInUSD}` : ''}</TableCell>
                                        //             <TableCell className='BorderClass'>{tds[1].totalOfHighRangeInUSD ? `$${tds[1].totalOfHighRangeInUSD}` : ''}</TableCell>
                                        //             <TableCell></TableCell>
                                        //             <TableCell></TableCell>
                                        //         </TableRow>
                                        //     )
                                        // }
                                        // else if (tds[0] === 'costProductivityFPL') {
                                        //     return (
                                        //         <TableRow>
                                        //             <TableCell className='BorderClass3 RowColor'> {englishValue(tds[0])}</TableCell>

                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].simple.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].simple.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor' ></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].simple.highRange.monthlyRecurringCostInUSD ? `$${tds[1].simple.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].medium.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].medium.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].medium.highRange.monthlyRecurringCostInUSD ? `$${tds[1].medium.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].complex.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].complex.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].complex.highRange.monthlyRecurringCostInUSD ? `$${tds[1].complex.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='BorderClass RowColor'>{tds[1].totalOfLowRangeInUSD ? `$${tds[1].totalOfLowRangeInUSD}` : ''}</TableCell>
                                        //             <TableCell className='BorderClass RowColor' >{tds[1].totalOfHighRangeInUSD ? `$${tds[1].totalOfHighRangeInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>

                                        //             <TableCell className='RowColor'> {tds[1].averageOfMonthlyRecurringCostInUSD ? `$${tds[1].averageOfMonthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //         </TableRow>
                                        //     )
                                        // }
                                        // else if (tds[0] === 'costProductivityAQL') {
                                        //     return (
                                        //         <TableRow>
                                        //             <TableCell className='BorderClass3 RowColor'> {englishValue(tds[0])}</TableCell>

                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].simple.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].simple.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].simple.highRange.monthlyRecurringCostInUSD ? `$${tds[1].simple.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].medium.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].medium.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].medium.highRange.monthlyRecurringCostInUSD ? `$${tds[1].medium.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].complex.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].complex.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].complex.highRange.monthlyRecurringCostInUSD ? `$${tds[1].complex.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='BorderClass RowColor'>{tds[1].totalOfLowRangeInUSD ? `$${tds[1].totalOfLowRangeInUSD}` : ''}</TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].totalOfHighRangeInUSD ? `$${tds[1].totalOfHighRangeInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='RowColor'>{tds[1].averageOfMonthlyRecurringCostInUSD ? `$${tds[1].averageOfMonthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //         </TableRow>
                                        //     )
                                        // }
                                        // else if (tds[0] === 'costProductivityAgileCoach') {
                                        //     return (
                                        //         <TableRow>
                                        //             <TableCell className='BorderClass2 RowColor'> {englishValue(tds[0])}</TableCell>

                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].simple.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].simple.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].simple.highRange.monthlyRecurringCostInUSD ? `$${tds[1].simple.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].medium.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].medium.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].medium.highRange.monthlyRecurringCostInUSD ? `$${tds[1].medium.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].complex.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].complex.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].complex.highRange.monthlyRecurringCostInUSD ? `$${tds[1].complex.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='BorderClass RowColor'>{tds[1].totalOfLowRangeInUSD ? `$${tds[1].totalOfLowRangeInUSD}` : ''}</TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].totalOfHighRangeInUSD ? `$${tds[1].totalOfHighRangeInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='RowColor'>{tds[1].averageOfMonthlyRecurringCostInUSD ? `$${tds[1].averageOfMonthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //         </TableRow>
                                        //     )
                                        // }
                                        // else if (tds[0] === 'transitionNonLabourCosts' || tds[0] === 'transitionLabourCosts') {
                                        //     return (
                                        //         <TableRow>
                                        //             <TableCell className='BorderClass2 RowColor'> {englishValue(tds[0])}</TableCell>


                                        //             <TableCell className='RowColor'>{tds[1].simple.lowRange.oneTimeCostInUSD ? `$${tds[1].simple.lowRange.oneTimeCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='BorderClass RowColor'></TableCell>
                                        //             <TableCell className='RowColor'>{tds[1].simple.highRange.oneTimeCostInUSD ? `$${tds[1].simple.highRange.oneTimeCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='BorderClass RowColor'></TableCell>


                                        //             <TableCell className='RowColor'>{tds[1].medium.lowRange.oneTimeCostInUSD ? `$${tds[1].medium.lowRange.oneTimeCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='BorderClass RowColor'></TableCell>
                                        //             <TableCell className='RowColor'>{tds[1].medium.highRange.oneTimeCostInUSD ? `$${tds[1].medium.highRange.oneTimeCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='BorderClass RowColor'></TableCell>


                                        //             <TableCell className='RowColor'>{tds[1].complex.lowRange.oneTimeCostInUSD ? `$${tds[1].complex.lowRange.oneTimeCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='BorderClass RowColor'></TableCell>
                                        //             <TableCell className='RowColor'>{tds[1].complex.highRange.oneTimeCostInUSD ? `$${tds[1].complex.highRange.oneTimeCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='BorderClass RowColor'></TableCell>

                                        //             <TableCell className='BorderClass RowColor'>{tds[1].totalOfLowRangeInUSD ? `$${tds[1].totalOfLowRangeInUSD}` : ''}</TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].totalOfHighRangeInUSD ? `$${tds[1].totalOfHighRangeInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //         </TableRow>
                                        //     )
                                        // }
                                        // else if (tds[0] === 'nonLabourCosts') {
                                        //     return (
                                        //         <TableRow>
                                        //             <TableCell className='BorderClass2 RowColor'> {englishValue(tds[0])}</TableCell>

                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].simple.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].simple.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].simple.highRange.monthlyRecurringCostInUSD ? `$${tds[1].simple.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].medium.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].medium.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].medium.highRange.monthlyRecurringCostInUSD ? `$${tds[1].medium.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].complex.lowRange.monthlyRecurringCostInUSD ? `$${tds[1].complex.lowRange.monthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].complex.highRange.monthlyRecurringCostInUSD ? `$${tds[1].complex.highRange.monthlyRecurringCostInUSD}` : ''}</TableCell>

                                        //             <TableCell className='BorderClass RowColor'>{tds[1].totalOfLowRangeInUSD ? `$${tds[1].totalOfLowRangeInUSD}` : ''}</TableCell>
                                        //             <TableCell className='BorderClass RowColor'>{tds[1].totalOfHighRangeInUSD ? `$${tds[1].totalOfHighRangeInUSD}` : ''}</TableCell>
                                        //             <TableCell className='RowColor'></TableCell>
                                        //             <TableCell className='RowColor'>{tds[1].averageOfMonthlyRecurringCostInUSD ? `$${tds[1].averageOfMonthlyRecurringCostInUSD}` : ''}</TableCell>
                                        //         </TableRow>
                                        //     )
                                        // }
                                        else {
                                            return (
                                                <TableRow>
                                                    <TableCell className='BorderClass2'>{englishValue(tds[0])}</TableCell>


                                                    <TableCell >{typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell>{typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>


                                                    <TableCell >{typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell>{typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell >{typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.lowRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.annualRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell>{typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.highRange.annualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.annualRecurringCostInUSD)}` : ''}</TableCell>




                                                    <TableCell className="BorderClass"  >{typeof (tds[1].totalOfLowRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfLowRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass" >{typeof (tds[1].totalOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfHighRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell  >{typeof (tds[1].averageOfOneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell >{typeof (tds[1].averageOfAnnualRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfAnnualRecurringCostInUSD)}` : ''}</TableCell>

                                                </TableRow>
                                            )
                                        }


                                    }


                                    )}
                                </> : ''
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </DataTable>
    );
}
export default DataTableROM;
