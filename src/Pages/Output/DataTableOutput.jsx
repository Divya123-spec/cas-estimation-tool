import React from 'react';
import { DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TableContainer, TextInput, TooltipIcon } from 'carbon-components-react';
import '../../Components/CommonFuncs/TableInput.scss';
import { CheckmarkFilled16, WarningFilled16, ErrorFilled16 } from '@carbon/icons-react';
import { englishValue } from '../../Utils/CommonFunc';

// Header data
const DataTableOutput = (props) => {
    let automationOut = props.automationOutput;
    let AutomationArray = '';
    let AutomationArrayinfo = '';

    const arrCoversionOrder = (originalArr, orderArr) => {
        let newOrderedArr = [];
        orderArr.forEach((ele) => {
            originalArr.forEach((e) => {
                if (ele == e[0]) {
                    newOrderedArr.push(e);
                }
            });
        });
        return newOrderedArr;
    };


    if (automationOut) {
        AutomationArray = Object.entries(automationOut);
        // arrange the objects in a format JIRA 519
        AutomationArrayinfo = arrCoversionOrder(AutomationArray, [
            "numberOfUCsFromAutomationEstimationTool",
            "rpaBuildAndMaintainCost",
            "rpaToolLicenseCost",
            "aoccCost",
            "totalCost"

        ]);

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
                                    if (header !== 'Application Complexity' && header !== '') {
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
                                    else {
                                        return (
                                            <TableHeader className="headingStart" colSpan={2} {...getHeaderProps({ header })}>
                                            </TableHeader>
                                        )
                                    }
                                })}
                            </TableRow>
                            <TableRow>
                                {props.header2.map((header) => {
                                    if (header !== 'Range') {
                                        return (
                                            <TableHeader colSpan={2} className='BorderClass borderbottomClass midHeader aligncontents' {...getHeaderProps({ header })}>
                                                {header}
                                            </TableHeader>
                                        )
                                    } else if (header === 'Range') {
                                        return (
                                            <TableHeader className='BorderClass borderbottomClass midHeader aligncontents' {...getHeaderProps({ header })}>
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
                                    } else if (header === 'ARC' || header === 'Y1') {
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
                            {props.title == 'Automation Summary' ?
                                <>
                                    {AutomationArrayinfo.map(tds => {
                                        if (tds[0] === 'numberOfUCsFromAutomationEstimationTool') {
                                            return (
                                                <TableRow>
                                                    <TableCell className='BorderClass2'>{englishValue(tds[0])}</TableCell>
                                                    <TableCell colSpan={4} className='BorderClass textaligin'>{tds[1].simple}</TableCell>

                                                    <TableCell colSpan={4} className='BorderClass textaligin'>{tds[1].medium}</TableCell>

                                                    <TableCell colSpan={4} className='BorderClass textaligin'>{tds[1].complex}</TableCell>

                                                </TableRow>
                                            )
                                        }
                                        else {
                                            if (tds[0] === 'totalCost') {
                                                return (
                                                    <TableRow>
                                                        <TableCell className="tableBold BorderClass2" > {englishValue(tds[0])}</TableCell>

                                                        <TableCell className="tableBold" >{tds[1].simple.lowRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className="tableBold BorderClass" >{tds[1].simple.lowRange.annualRecurringCostInUSD}</TableCell>
                                                        <TableCell className="tableBold" >{tds[1].simple.highRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className="tableBold BorderClass" >{tds[1].simple.highRange.annualRecurringCostInUSD}</TableCell>

                                                        <TableCell className="tableBold" >{tds[1].medium.lowRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className="tableBold BorderClass" >{tds[1].medium.lowRange.annualRecurringCostInUSD}</TableCell>
                                                        <TableCell className="tableBold" >{tds[1].medium.highRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className="tableBold BorderClass" >{tds[1].medium.highRange.annualRecurringCostInUSD}</TableCell>

                                                        <TableCell className="tableBold" >{tds[1].complex.lowRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className="tableBold BorderClass" >{tds[1].complex.lowRange.annualRecurringCostInUSD}</TableCell>
                                                        <TableCell className="tableBold" >{tds[1].complex.highRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className="tableBold BorderClass" >{tds[1].complex.highRange.annualRecurringCostInUSD}</TableCell>

                                                        <TableCell className="tableBold" >{tds[1].totalOneTimeCostInUSD}</TableCell>
                                                        <TableCell className="tableBold " >{tds[1].totalAnnualRecurringCostInUSD}</TableCell>

                                                    </TableRow>
                                                )
                                            } else {
                                                return (
                                                    <TableRow>
                                                        <TableCell className='BorderClass2'>{englishValue(tds[0])}</TableCell>

                                                        <TableCell >{tds[1].simple.lowRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className='BorderClass'>{tds[1].simple.lowRange.annualRecurringCostInUSD}</TableCell>
                                                        <TableCell >{tds[1].simple.highRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className='BorderClass'>{tds[1].simple.highRange.annualRecurringCostInUSD}</TableCell>

                                                        <TableCell >{tds[1].medium.lowRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className='BorderClass'>{tds[1].medium.lowRange.annualRecurringCostInUSD}</TableCell>
                                                        <TableCell >{tds[1].medium.highRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className='BorderClass'>{tds[1].medium.highRange.annualRecurringCostInUSD}</TableCell>

                                                        <TableCell >{tds[1].complex.lowRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className='BorderClass'>{tds[1].complex.lowRange.annualRecurringCostInUSD}</TableCell>
                                                        <TableCell >{tds[1].complex.highRange.oneTimeCostInUSD}</TableCell>
                                                        <TableCell className='BorderClass'>{tds[1].complex.highRange.annualRecurringCostInUSD}</TableCell>

                                                        <TableCell >{tds[1].totalOneTimeCostInUSD}</TableCell>
                                                        <TableCell >{tds[1].totalAnnualRecurringCostInUSD}</TableCell>

                                                    </TableRow>
                                                )
                                            }

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
export default DataTableOutput;
