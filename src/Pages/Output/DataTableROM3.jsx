import React from 'react';
import { DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TableContainer, TextInput, TooltipIcon } from 'carbon-components-react';
import '../../Components/CommonFuncs/TableInput.scss';
import { CheckmarkFilled16, WarningFilled16, ErrorFilled16 } from '@carbon/icons-react';
import { currencyCoverter, englishValue } from '../../Utils/CommonFunc';


// This file code represents the ROM cost output in the application
const DataTableROM3 = (props) => {
    let outputYearOneROMCost = props.outputYearOneROMCostSecurity;
    let outputYearOneROMCostSecurityArray = '';
    if (outputYearOneROMCost) {
        outputYearOneROMCostSecurityArray = (outputYearOneROMCost);
     
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

                            {props.title == 'TESTING (Used if test FTE >=5)' ?
                                <>
                                    {outputYearOneROMCostSecurityArray.map(tds => {


                                        if (tds[0] === 'costsForY1') {
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
                                                    <TableCell className="tableBold BorderClass">{typeof (tds[1].complex.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>


                                                    <TableCell className="tableBold BorderClass" >{typeof (tds[1].totalOfLowRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfLowRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass" >{typeof (tds[1].totalOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfHighRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold " >{typeof (tds[1].averageOfOneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold " >{typeof (tds[1].averageOfMonthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfMonthlyRecurringCostInUSD)}` : ''}</TableCell>

                                                </TableRow>
                                            )
                                        }



                                        else if (tds[0] === 'perApplicationCostPerYear' || tds[0] === 'perApplicationCostPerMonth') {
                                            return (
                                                <TableRow>
                                                    <TableCell className="BorderClass2"  > {englishValue(tds[0])}</TableCell>


                                                    <TableCell >{typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell >{typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>



                                                    <TableCell >{typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell >{typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>


                                                    <TableCell >{typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell >{typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>


                                                    <TableCell className="tableBold BorderClass" >{typeof (tds[1].totalOfLowRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfLowRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold BorderClass" >{typeof (tds[1].totalOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfHighRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold " >{typeof (tds[1].averageOfOneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="tableBold " >{typeof (tds[1].averageOfmonthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfmonthlyRecurringCostInUSD)}` : ''}</TableCell>

                                                </TableRow>
                                            )
                                        }

                                        else if (tds[0] === 'igniteSetupCost' || tds[0] === 'igniteLicenseCost') {
                                            return (
                                                <TableRow>
                                                    <TableCell className='BorderClass2'>{englishValue(tds[0])}</TableCell>


                                                    <TableCell >{typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell >{typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>


                                                    <TableCell >{typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell >{typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>


                                                    <TableCell >{typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell >{typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>



                                                    <TableCell className="BorderClass"  >{typeof (tds[1].totalOfLowRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfLowRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass" >{typeof (tds[1].totalOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfHighRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell  >{typeof (tds[1].averageOfOneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell >{typeof (tds[1].averageOfMonthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfMonthlyRecurringCostInUSD)}` : ''}</TableCell>

                                                </TableRow>
                                            )
                                        }


                                        else {
                                            return (
                                                <TableRow>
                                                    <TableCell className='BorderClass2'>{englishValue(tds[0])}</TableCell>

                                                    <TableCell >{typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell >{typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].simple.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>


                                                    <TableCell >{typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell >{typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].medium.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>

                                                    <TableCell >{typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>
                                                    <TableCell >{typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass">{typeof (tds[1].complex.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.monthlyRecurringCostInUSD)}` : ''}</TableCell>


                                                    <TableCell className="BorderClass"  >{typeof (tds[1].totalOfLowRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfLowRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell className="BorderClass" >{typeof (tds[1].totalOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].totalOfHighRangeInUSD)}` : ''}</TableCell>
                                                    <TableCell  >{typeof (tds[1].averageOfOneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell >{typeof (tds[1].averageOfMonthlyRecurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfMonthlyRecurringCostInUSD)}` : ''}</TableCell>

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
export default DataTableROM3;
