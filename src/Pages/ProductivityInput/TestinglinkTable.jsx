import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableHeader, TableRow, DataTable, TableContainer, TableBody, TableCell } from 'carbon-components-react';
import { Delete16 } from '../../Components/CommonFuncs/Icons';
import { englishValue } from '../../Utils/CommonFunc';

const headers = [englishValue('productivityLever'), englishValue('clientMaturityLevelSelectionKey'), englishValue('y1'),
englishValue('y2'), englishValue('y3'), englishValue('y4'), englishValue('y5'), englishValue('y6'), englishValue('y7')];

function TestinglinkTable(props) {
    const [state, setState] = useState([]);
    useEffect(() => {
       
        const datatesting = props.data.userDropDownData.defaultDropDown['response'].productivity;
        const newobj = [];
        datatesting.testingLevers.forEach(ele => {
           
            for (const cml of ele.clientMaturityLevelOptions) {
                let keyVal=cml.key;
                newobj.push({
                    'productivityLever': `${ele.productivityLever}`,
                    'clientMaturityLevelSelectionKey': cml.value,
                    'y1': `${ele.productivityPercentageByClientMaturityLevel[keyVal].y1}%`,
                    'y2': `${ele.productivityPercentageByClientMaturityLevel[keyVal].y2}%`,
                    'y3': `${ele.productivityPercentageByClientMaturityLevel[keyVal].y3}%`,
                    'y4': `${ele.productivityPercentageByClientMaturityLevel[keyVal].y4}%`,
                    'y5': `${ele.productivityPercentageByClientMaturityLevel[keyVal].y5}%`,
                    'y6': `${ele.productivityPercentageByClientMaturityLevel[keyVal].y6}%`,
                    'y7': `${ele.productivityPercentageByClientMaturityLevel[keyVal].y7}%`
                })

            }

        });

        setState(newobj);
    }, [props.data])
    return (
        <div className="devlinkclass">
            {props.data.userDropDownData.defaultDropDown['response'].productivity.testingLevers[0].productivityPercentageByClientMaturityLevel ? <>
                <DataTable
                    rows={state}
                    headers={headers}>
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
                                    {
                                        state.map((item) => (
                                            <TableRow >
                                                <TableCell>{item.productivityLever}</TableCell>
                                                <TableCell>{item.clientMaturityLevelSelectionKey}</TableCell>
                                                <TableCell>{item.y1}</TableCell>
                                                <TableCell>{item.y2}</TableCell>
                                                <TableCell>{item.y3}</TableCell>
                                                <TableCell>{item.y4}</TableCell>
                                                <TableCell>{item.y5}</TableCell>
                                                <TableCell>{item.y6}</TableCell>
                                                <TableCell>{item.y7}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </DataTable>
            </> : <div className='dataPopup'>
                <h4>No Data Available</h4>
            </div>}

        </div>
    );
}



export default TestinglinkTable;
