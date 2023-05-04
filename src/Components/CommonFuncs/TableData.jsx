import React from 'react';
import { DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TableContainer } from 'carbon-components-react';
import { englishValue } from "../../Utils/CommonFunc";
import "../../Pages/OpportunityInputsParameter/CloudAppOpsInput/MultipleAccoridon.scss"

//Table to display Data

const TableData = (props) => {
    return (
        <DataTable rows={props.rows} headers={props.headers}>
            {({ rows, headers, getHeaderProps, getTableProps }) => (
                <TableContainer
                    title={props.title}
                    description={props.description}
                >
                    <Table {...getTableProps()}>
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
                                    if (typeof (tds[1]) == 'number') {
                                        return (
                                            <TableRow>
                                                <TableCell className='labelrow'>{englishValue(tds[0])}</TableCell>
                                                <TableCell >{tds[1]}</TableCell>
                                            </TableRow>
                                        )
                                    }
                                    else {
                                        return (
                                            <>
                                                <TableRow>
                                                    <TableCell className='labelrow'>
                                                        <span>{englishValue(tds[0])}</span>
                                                    </TableCell>
                                                    {tds[0] === 'productivityYoY' || tds[0] === 'productivityCumulative' || 
                                                    tds[0] === 'productivityYearlyAppliedPercentage' ?
                                                        <>
                                                            <TableCell className="productivityOutput" ></TableCell>
                                                            {Object.keys(tds[1]).map((key) => {
                                                                return <TableCell className="productivityOutput" >
                                                                    {tds[1][key]}%</TableCell>;
                                                            })}
                                                        </>
                                                        :

                                                        <>
                                                            {tds[0] === 'distributionPercentageOfTotalFTEsInScope' ? <>

                                                                {Object.keys(tds[1]).map((key) => {
                                                                    return <TableCell className="distributionOutput" >
                                                                        {tds[1][key]}%</TableCell>;
                                                                })}
                                                                <TableCell className="distributionOutput" ></TableCell>
                                                                <TableCell className="distributionOutput" ></TableCell>
                                                            </> :
                                                                <>
                                                                    {Object.keys(tds[1]).map((key) => {
                                                                        return <TableCell className="nonEdtible-class" >
                                                                            {tds[1][key]}</TableCell>;
                                                                    })}
                                                                </>
                                                            }

                                                        </>
                                                    }

                                                </TableRow>
                                            </>
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
export default TableData;