import { DataTable, Table, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow, TextInput } from 'carbon-components-react'
import React from 'react'
import './RetiringApllication.scss';
import { englishValue } from '../../Utils/CommonFunc';

function RetiringApplication(props) {
    let retiringApplication = {
        'numberOfAppsInScopeYoYIncludingGrowth': props.numberOfAppsInScopeYoYIncludingGrowth,
        'numberOfAppsInScopeYoYGettingRetiredOnly': props.numberOfAppsInScopeYoYGettingRetiredOnly,
        'finalApplicationScopeYoY': props.finalApplicationScopeYoY
    }
    let retiringApplicationArray = Object.entries(retiringApplication);
    return (
        <div className='retiringApplicationClass'>
            <DataTable rows={retiringApplicationArray} headers={props.headers}>
                {({ rows, headers, getHeaderProps, getTableProps }) => (

                    <Table >
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
                            {retiringApplicationArray.map((tds, index) => {
                                return (
                                    <TableRow className='retiringApplicationrow'>
                                        {tds[0] == 'finalApplicationScopeYoY' ? <TableCell className="nonEdtible-class tableBold" >{englishValue(tds[0])}
                                            {props.retiringApplicationError ? <div className="HelperRange">
                                                <span className="errorRange">{englishValue('rangeNoApplication')}</span></div> : <></>}
                                        </TableCell> : <> <TableCell>{englishValue(tds[0])}</TableCell></>
                                        }

                                        {Object.keys(tds[1]).map((key) => {
                                            var sr = tds[0] + '_' + key;
                                            if (tds[0] == 'numberOfAppsInScopeYoYIncludingGrowth' || tds[0] === 'numberOfAppsInScopeYoYGettingRetiredOnly') {
                                                return (
                                                    <TableCell key={key} >
                                                        <TextInput
                                                            type={'text'}
                                                            value={tds[1][key]}
                                                             onBlur={props.handleChangeRetiringApplicationBlur}
                                                            id={sr}
                                                            name={key}
                                                            readOnly={props.readOnlyValue}
                                                            onChange={props.handleChangeRetiringApplication}

                                                        />
                                                    </TableCell>
                                                )

                                            } else {
                                                // if (tds[0] == 'finalApplicationScopeYoY') {
                                                //     return <TableCell className="nonEdtible-class" >{tds[1][key]}
                                                //         {Number(tds[1][key]) > 1 && Number(tds[1][key]) < 99999 ? <></> : <div className="HelperRange">
                                                //             <span className="errorRange">{englishValue('rangeNoApplication')}</span></div>}
                                                //     </TableCell>;
                                                // } else {
                                                return <TableCell className="nonEdtible-class tableBold" >{tds[1][key]}
                                                </TableCell>;
                                                // }

                                            }
                                        })
                                        }

                                    </TableRow>

                                )

                            })}
                        </TableBody>
                    </Table>
                )}
            </DataTable>
        </div>
    )
}

export default RetiringApplication