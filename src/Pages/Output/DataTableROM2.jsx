import React from 'react';
import { DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TableContainer, TextInput, TooltipIcon } from 'carbon-components-react';
import '../../Components/CommonFuncs/TableInput.scss';
import { CheckmarkFilled16, WarningFilled16, ErrorFilled16 } from '@carbon/icons-react';
import { currencyCoverter, englishValue } from '../../Utils/CommonFunc';


// This file code represents the ROM cost output in the application
const DataTableROM2 = (props) => {
    let outputYearOneROMCost = props.outputYearOneROMCostSecurity;
    let outputYearOneROMCostSecurityArray = '';
    if (outputYearOneROMCost) {
        outputYearOneROMCostSecurityArray = (outputYearOneROMCost);
       
    }


    return (
        <DataTable rows={[]} headers={props.headerMain_2}>
            {({ rows, headers, getHeaderProps, getTableProps }) => (
                <TableContainer
                    title={props.title}
                    description={props.description}
                >

                    <Table {...getTableProps()}>
                        <TableHead>
                            <TableRow>
                                {props.headerMain_2.map((header) => {
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
                                    }
                                    else if (header == 'Average') {
                                        return (
                                            <TableHeader colSpan={2} className='BorderClass borderbottomClass aligncontents' {...getHeaderProps({ header })}>
                                                {header}
                                            </TableHeader>
                                        )
                                    }
                                    else if (header == 'TOTALS') {
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
                                {props.header_4.map((header) => {

                                    if (header === 'Range') {
                                        return (
                                            <TableHeader className='BorderClass aligncontents borderbottomClass midHeader' {...getHeaderProps({ header })}>
                                                {header}
                                            </TableHeader>
                                        )
                                    }

                                    else if (header !== 'Range' && header !== 'HIGH' && header !== 'LOW') {
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
                                {props.header_5.map((header) => {
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
                                    }
                                    else if (header == '') {
                                        return (
                                            <TableHeader className="headingStart BorderClass" {...getHeaderProps({ header })}>
                                            </TableHeader>
                                        )
                                    }
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.title == 'Total Costs for All Applications' || props.title == 'Cost per Application (Monthly for Year 1)' ?
                                <>
                                    {outputYearOneROMCostSecurityArray.map(tds => {
                                             
                                        // dispalying data in bold 
                                        if (tds[0] === 'totalCostMonthly' || tds[0] === 'totalCostTotal') {
                                            return (
                                                <TableRow>
                                                    <TableCell className="tableBold BorderClass2"  > {englishValue(tds[0])}</TableCell>

                                                    <TableCell className="tableBold" >{currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}</TableCell>
                                                    <TableCell className="tableBold BorderClass" >{currencyCoverter(tds[1].simple.lowRange.recurringCostInUSD)}</TableCell>
                                                    <TableCell className="tableBold" >{currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}</TableCell>
                                                    <TableCell className="tableBold BorderClass" >{currencyCoverter(tds[1].simple.highRange.recurringCostInUSD)}</TableCell>

                                                    <TableCell className="tableBold" >{currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}</TableCell>
                                                    <TableCell className="tableBold BorderClass" >{currencyCoverter(tds[1].medium.lowRange.recurringCostInUSD)}</TableCell>
                                                    <TableCell className="tableBold" >{currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}</TableCell>
                                                    <TableCell className="tableBold BorderClass" >{currencyCoverter(tds[1].medium.highRange.recurringCostInUSD)}</TableCell>

                                                    <TableCell className="tableBold" >{currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}</TableCell>
                                                    <TableCell className="tableBold BorderClass" >{currencyCoverter(tds[1].complex.lowRange.recurringCostInUSD)}</TableCell>
                                                    <TableCell className="tableBold" >{currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}</TableCell>
                                                    <TableCell className="tableBold BorderClass" >{currencyCoverter(tds[1].complex.highRange.recurringCostInUSD)}</TableCell>

                                                    <TableCell className="tableBold BorderClass" >{currencyCoverter(tds[1].totalOfLowRangeInUSD)}</TableCell>
                                                    <TableCell className="tableBold BorderClass"> {currencyCoverter(tds[1].totalOfHighRangeInUSD)}</TableCell>
                                                    <TableCell className="tableBold" >{currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{currencyCoverter(tds[1].averageRecurringCostInUSD)}</TableCell>
                                                    <TableCell >{tds[1].distributionHighPercentage}%</TableCell>
                                                </TableRow>
                                            )
                                        }


                                        else {
                                            return (
                                                <TableRow>
                                                    <TableCell className='BorderClass2'>{englishValue(tds[0])}</TableCell>

                                                    <TableCell >{currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}</TableCell>
                                                    <TableCell className='BorderClass'>{currencyCoverter(tds[1].simple.lowRange.recurringCostInUSD)}</TableCell>
                                                    <TableCell >{currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}</TableCell>
                                                    <TableCell className='BorderClass'>{currencyCoverter(tds[1].simple.highRange.recurringCostInUSD)}</TableCell>

                                                    <TableCell >{currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}</TableCell>
                                                    <TableCell className='BorderClass'>{currencyCoverter(tds[1].medium.lowRange.recurringCostInUSD)}</TableCell>
                                                    <TableCell >{currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}</TableCell>
                                                    <TableCell className='BorderClass'>{currencyCoverter(tds[1].medium.highRange.recurringCostInUSD)}</TableCell>

                                                    <TableCell >{currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}</TableCell>
                                                    <TableCell className='BorderClass'>{currencyCoverter(tds[1].complex.lowRange.recurringCostInUSD)}</TableCell>
                                                    <TableCell >{currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}</TableCell>
                                                    <TableCell className='BorderClass'>{currencyCoverter(tds[1].complex.highRange.recurringCostInUSD)}</TableCell>


                                                    <TableCell className="BorderClass" >{currencyCoverter(tds[1].totalOfLowRangeInUSD)}</TableCell>
                                                    <TableCell className="BorderClass" >{currencyCoverter(tds[1].totalOfHighRangeInUSD)}</TableCell>
                                                    <TableCell >{currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}</TableCell>
                                                    <TableCell className="tableBold BorderClass">{currencyCoverter(tds[1].averageRecurringCostInUSD)}</TableCell>
                                                    <TableCell >{tds[1].distributionHighPercentage}%</TableCell>

                                                </TableRow>
                                            )
                                        }


                                    }




                                    )}
                                </> :

                                <>
                                    {outputYearOneROMCostSecurityArray.map(tds => {

                                        if (tds[0] === 'totalCostYearly') {
                                            return (
                                                <TableRow>
                                                    <TableCell className="tableBold BorderClass2"  > {englishValue(tds[0])}</TableCell>

                                                    <TableCell className="tableBold" >
                                                        {typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}

                                                    </TableCell>
                                                    <TableCell className="tableBold BorderClass" >

                                                        {typeof (tds[1].simple.lowRange.recurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.recurringCostInUSD)}` : ''}

                                                    </TableCell>
                                                    <TableCell className="tableBold" >
                                                        {typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}

                                                    </TableCell>
                                                    <TableCell className="tableBold BorderClass" >
                                                        {typeof (tds[1].simple.highRange.recurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.recurringCostInUSD)}` : ''}

                                                    </TableCell>

                                                    <TableCell className="tableBold" >
                                                        {typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}

                                                    </TableCell>
                                                    <TableCell className="tableBold BorderClass" >
                                                        {typeof (tds[1].medium.lowRange.recurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.recurringCostInUSD)}` : ''}

                                                    </TableCell>
                                                    <TableCell className="tableBold" >
                                                        {typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}

                                                    </TableCell>
                                                    <TableCell className="tableBold BorderClass" >

                                                        {typeof (tds[1].medium.highRange.recurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.recurringCostInUSD)}` : ''}

                                                    </TableCell>

                                                    <TableCell className="tableBold" >
                                                        {typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}

                                                    </TableCell>
                                                    <TableCell className="tableBold BorderClass" >
                                                        {typeof (tds[1].complex.lowRange.recurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.recurringCostInUSD)}` : ''}

                                                    </TableCell>
                                                    <TableCell className="tableBold" >
                                                        {typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}


                                                    </TableCell>
                                                    <TableCell className="tableBold BorderClass" >

                                                        {typeof (tds[1].complex.highRange.recurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.recurringCostInUSD)}` : ''}

                                                    </TableCell>

                                                    <TableCell className="tableBold BorderClass" >
                                                        {typeof (tds[1].averageOfLowRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfLowRangeInUSD)}` : ''}

                                                    </TableCell>
                                                    <TableCell className="tableBold BorderClass" >
                                                        {typeof (tds[1].averageOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfHighRangeInUSD)}` : ''}


                                                    </TableCell>
                                                    <TableCell className="tableBold " >
                                                        {typeof (tds[1].avgOfAvgOfLowAndHighRangesInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].avgOfAvgOfLowAndHighRangesInUSD)}` : ''}

                                                    </TableCell>
                                                    <TableCell className="tableBold BorderClass">
                                                        {typeof (tds[1].avgOfAvgOfLowAndHighRangesAndAvgOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].avgOfAvgOfLowAndHighRangesAndAvgOfHighRangeInUSD)}` : ''}

                                                    </TableCell>
                                                    <TableCell >
                                                        {typeof (tds[1].distributionHighPercentage) !== 'undefined' ? `${tds[1].distributionHighPercentage}` : ''}%</TableCell>
                                                </TableRow>
                                            )
                                        }


                                        else {
                                            return (
                                                <TableRow>
                                                    <TableCell className='BorderClass2'>{englishValue(tds[0])}</TableCell>

                                                    <TableCell >{typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}</TableCell>
                                                    <TableCell className='BorderClass'>
                                                        {typeof (tds[1].simple.lowRange.recurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.lowRange.recurringCostInUSD)}` : ''}
                                                    </TableCell>
                                                    <TableCell >
                                                        {typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}
                                                    </TableCell>
                                                    <TableCell className='BorderClass'>
                                                        {typeof (tds[1].simple.highRange.recurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].simple.highRange.recurringCostInUSD)}` : ''}
                                                    </TableCell>

                                                    <TableCell >
                                                        {typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}
                                                    </TableCell>
                                                    <TableCell className='BorderClass'>
                                                        {typeof (tds[1].medium.lowRange.recurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.lowRange.recurringCostInUSD)}` : ''}
                                                    </TableCell>
                                                    <TableCell >
                                                        {typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}
                                                    </TableCell>
                                                    <TableCell className='BorderClass'>
                                                        {typeof (tds[1].medium.highRange.recurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].medium.highRange.recurringCostInUSD)}` : ''}
                                                    </TableCell>

                                                    {/* <TableCell >${tds[1].medium.lowRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className='BorderClass'>${tds[1].medium.lowRange.recurringCostInUSD}</TableCell>
                                                        <TableCell $>{tds[1].medium.highRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className='BorderClass'>${tds[1].medium.highRange.recurringCostInUSD}</TableCell> */}

                                                    <TableCell >
                                                        {typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}
                                                    </TableCell>
                                                    <TableCell className='BorderClass'>
                                                        {typeof (tds[1].complex.lowRange.recurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.lowRange.recurringCostInUSD)}` : ''}
                                                    </TableCell>
                                                    <TableCell >
                                                        {typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}

                                                    </TableCell>
                                                    <TableCell className='BorderClass'>
                                                        {typeof (tds[1].complex.highRange.recurringCostInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].complex.highRange.recurringCostInUSD)}` : ''}
                                                    </TableCell>

                                                    <TableCell className="BorderClass" >
                                                        {typeof (tds[1].averageOfLowRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfLowRangeInUSD)}` : ''}
                                                    </TableCell>
                                                    <TableCell className="BorderClass" >
                                                        {typeof (tds[1].averageOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].averageOfHighRangeInUSD)}` : ''}
                                                    </TableCell>
                                                    <TableCell >
                                                        {typeof (tds[1].avgOfAvgOfLowAndHighRangesInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].avgOfAvgOfLowAndHighRangesInUSD)}` : ''}
                                                    </TableCell>
                                                    <TableCell className="BorderClass">
                                                        {typeof (tds[1].avgOfAvgOfLowAndHighRangesAndAvgOfHighRangeInUSD) !== 'undefined' ? `${currencyCoverter(tds[1].avgOfAvgOfLowAndHighRangesAndAvgOfHighRangeInUSD)}` : ''}
                                                    </TableCell>
                                                    <TableCell >
                                                        {typeof (tds[1].distributionHighPercentage) !== 'undefined' ? `${tds[1].distributionHighPercentage}` : ''}
                                                        %</TableCell>



                                                </TableRow>
                                            )
                                        }



                                    }

                                    )}
                                </>

                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </DataTable>
    );
}
export default DataTableROM2;
