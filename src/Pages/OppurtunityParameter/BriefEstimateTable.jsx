import React, { useState } from 'react';
import { ModalHeader, Modal, Table, TableHead, TableHeader, TableRow, TableBody, TableCell, DataTable, TableContainer } from 'carbon-components-react';
import { Delete16 } from '../../Components/CommonFuncs/Icons';
import { englishValue } from '../../Utils/CommonFunc';

function BriefEstimateTable(props) {
    const headers = [englishValue('WorkstreamEstimate'), englishValue('SubWorkstream'), englishValue('code'),
    englishValue('L1.5Hrs'), englishValue('L2Hrs'), englishValue('L3Hrs'), englishValue('L4Hrs'), englishValue('MinEnhHrs'), englishValue('AdhocUplift%')];

    return (
        <DataTable
            rows={props.dataRow}
            headers={headers}
        >
            {({ rows, headers, getHeaderProps }) => (
                <TableContainer >
                    <Table>

                        <TableHead>
                            <TableRow>
                                {headers.map((header) => (
                                    <TableHeader key={header}>{header}</TableHeader>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.dataRow.map((row, index) =>
                                <>
                                    {row.subWorkStreams.map((ele) =>
                                        <TableRow >
                                            <>
                                                <TableCell>{row.workStream}</TableCell>
                                                <TableCell>{ele.subWorkStream}</TableCell>
                                                <TableCell>{ele.code}</TableCell>
                                                <TableCell>{ele.hoursPerTicket.l_1}</TableCell>
                                                <TableCell>{ele.hoursPerTicket.l_2}</TableCell>
                                                <TableCell>{ele.hoursPerTicket.l_3}</TableCell>
                                                <TableCell>{ele.hoursPerTicket.l_4}</TableCell>
                                                <TableCell>{ele.hoursPerTicket.min_enh}</TableCell>
                                                <TableCell>{ele.adhocUpliftPercentage}</TableCell>
                                            </>
                                        </TableRow>
                                    )}
                                </>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </DataTable>

    );
}



export default BriefEstimateTable;
