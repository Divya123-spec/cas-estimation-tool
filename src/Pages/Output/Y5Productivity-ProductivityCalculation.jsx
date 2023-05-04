import { Table, TableHeader, TableContainer, TableRow, DataTable, TableHead, TableBody, TableCell } from 'carbon-components-react';
import React from 'react'

import { englishValue } from '../../Utils/CommonFunc';
import './MainOutput.scss';

import { useSelector } from 'react-redux';

const headerData = [englishValue('PC_Productivity_Values'), englishValue('PC_L1.5'), englishValue('PC_L2'), englishValue('PC_L3'), englishValue('PC_L4'), englishValue('PC_Minor_Enh.'), englishValue('PC_Testing'), englishValue('PC_Total')];
const names = ['DevSecOps', 'Automation', 'Cloud', 'Testing', 'Efficiency'];
const productivityValues = ['Productivity On Effort In Hours', 'Productivity %', 'Productivity In Scope']
function prepareData(table, jsonData) {
    table.data[1]['L1.5'] = `${jsonData.sumOfFinalProductivityPercentageByLevels.l1}%`
    table.data[1]['L2'] = `${jsonData.sumOfFinalProductivityPercentageByLevels.l2}%`
    table.data[1]['L3'] = `${jsonData.sumOfFinalProductivityPercentageByLevels.l3}%`
    table.data[1]['L4'] = `${jsonData.sumOfFinalProductivityPercentageByLevels.l4}%`
    table.data[1]['Minor Enh'] = `${jsonData.sumOfFinalProductivityPercentageByLevels.minEnh}%`
    table.data[1]['Testing'] = `${jsonData.sumOfFinalProductivityPercentageByLevels.testing}%`
    table.data[1]['Total'] = ''

    table.data[2]['L1.5'] = jsonData.effortsRemainingAfterProductivityByLevels.l1
    table.data[2]['L2'] = jsonData.effortsRemainingAfterProductivityByLevels.l2
    table.data[2]['L3'] = jsonData.effortsRemainingAfterProductivityByLevels.l3
    table.data[2]['L4'] = jsonData.effortsRemainingAfterProductivityByLevels.l4
    table.data[2]['Minor Enh'] = jsonData.effortsRemainingAfterProductivityByLevels.minEnh
    table.data[2]['Testing'] = jsonData.effortsRemainingAfterProductivityByLevels.testing
    table.data[2]['Total'] = jsonData.sumOfEffortsRemainingAfterProductivity
}
function Y5ProductivityProductivityCalculation({ title, id }) {

    const pcData = useSelector(state => state.userOutputData.defaultOutputData.response.intermediateOutputs.
        productivityOutput)

    const y1PCTableData = [];
    names.map((name, index) => y1PCTableData[index] = { name });

    for (const obj of y1PCTableData) {
        obj.data = []
        productivityValues.map(value => obj.data.push({ "Productivity Values": value }));
    }
    y1PCTableData[0].data[0]['L1.5'] = pcData.baseLineEffortsDetailsFromY5?.baseLineEffortsByLevels.l1|| pcData.efficiencyCalculation.productivityCalculationY1.effortsRemainingAfterProductivityByLevels.l1
    y1PCTableData[0].data[0]['L2'] = pcData.baseLineEffortsDetailsFromY5?.baseLineEffortsByLevels.l2|| pcData.efficiencyCalculation.productivityCalculationY1.effortsRemainingAfterProductivityByLevels.l2
    y1PCTableData[0].data[0]['L3'] = pcData.baseLineEffortsDetailsFromY5?.baseLineEffortsByLevels.l3|| pcData.efficiencyCalculation.productivityCalculationY1.effortsRemainingAfterProductivityByLevels.l3
    y1PCTableData[0].data[0]['L4'] = pcData.baseLineEffortsDetailsFromY5?.baseLineEffortsByLevels.l4|| pcData.efficiencyCalculation.productivityCalculationY1.effortsRemainingAfterProductivityByLevels.l4
    y1PCTableData[0].data[0]['Minor Enh'] = pcData.baseLineEffortsDetailsFromY5?.baseLineEffortsByLevels.minEnh|| pcData.efficiencyCalculation.productivityCalculationY1.effortsRemainingAfterProductivityByLevels.minEnh
    y1PCTableData[0].data[0]['Testing'] = pcData.baseLineEffortsDetailsFromY5?.baseLineEffortsByLevels.testing|| pcData.efficiencyCalculation.productivityCalculationY1.effortsRemainingAfterProductivityByLevels.testing
    y1PCTableData[0].data[0]['Total'] = pcData.baseLineEffortsDetailsFromY5?.sumOfBaseLineEfforts|| pcData.efficiencyCalculation.productivityCalculationY1.effortsRemainingAfterProductivityByLevels.sumOfEffortsRemainingAfterProductivity

    prepareData(y1PCTableData[0], pcData.devSecOpsCalculation.productivityCalculationY5);
    prepareData(y1PCTableData[1], pcData.automationCalculation.productivityCalculationY5);
    prepareData(y1PCTableData[2], pcData.cloudCalculation.productivityCalculationY5);
    prepareData(y1PCTableData[3], pcData.testingCalculation.productivityCalculationY5);
    prepareData(y1PCTableData[4], pcData.efficiencyCalculation.productivityCalculationY5);

    
    for (let i = 1; i < y1PCTableData.length; i++) {
        // y1PCTableData[i].data[0] = y1PCTableData[i - 1].data[2]
        y1PCTableData[i].data[0]['L1.5'] = y1PCTableData[i - 1].data[2]['L1.5']
        y1PCTableData[i].data[0]['L2'] = y1PCTableData[i - 1].data[2]['L2']
        y1PCTableData[i].data[0]['L3'] = y1PCTableData[i - 1].data[2]['L3']
        y1PCTableData[i].data[0]['L4'] = y1PCTableData[i - 1].data[2]['L4']
        y1PCTableData[i].data[0]['Minor Enh'] = y1PCTableData[i - 1].data[2]['Minor Enh']
        y1PCTableData[i].data[0]['Testing'] = y1PCTableData[i - 1].data[2]['Testing']
        y1PCTableData[i].data[0]['Total'] = y1PCTableData[i - 1].data[2]['Total']
  
    }

    return (
        <div className='outputMainHead2' id={id}>
            <div className='outputMain'>
                <div className='mainOutputs'>
                    <DataTable
                        rows={y1PCTableData}
                        headers={headerData}>
                        {({ rows, headers, getHeaderProps }) => (
                            <TableContainer
                                title={englishValue(title)}
                                description=''
                            >
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            {headers.map((header) => (
                                                <TableHeader >
                                                    {header}
                                                </TableHeader>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            y1PCTableData.map(item => (
                                                <React.Fragment>
                                                    <TableRow>
                                                        <TableCell colSpan={headerData.length}>
                                                            <strong>{item.name}</strong>
                                                        </TableCell>
                                                    </TableRow>
                                                    {
                                                           item.data.map(i => {
                                                            if(i['Productivity Values']=='Productivity In Scope'){
                                                                return ( <TableRow className="table-no-border">
                                                                <TableCell className="tableBold">{i['Productivity Values']}</TableCell>
                                                                <TableCell className="tableBold">{i['L1.5']}</TableCell>
                                                                <TableCell className="tableBold">{i.L2}</TableCell>
                                                                <TableCell className="tableBold">{i.L3}</TableCell>
                                                                <TableCell className="tableBold">{i.L4}</TableCell>
                                                                <TableCell className="tableBold">{i['Minor Enh']}</TableCell>
                                                                <TableCell className="tableBold">{i.Testing}</TableCell>
                                                                <TableCell className="tableBold">{i.Total}</TableCell>
                                                            </TableRow>)
                                                            } 
                                                            else{
                                                                return ( <TableRow className="table-no-border">
                                                                <TableCell>{i['Productivity Values']}</TableCell>
                                                                <TableCell>{i['L1.5']}</TableCell>
                                                                <TableCell>{i.L2}</TableCell>
                                                                <TableCell>{i.L3}</TableCell>
                                                                <TableCell>{i.L4}</TableCell>
                                                                <TableCell>{i['Minor Enh']}</TableCell>
                                                                <TableCell>{i.Testing}</TableCell>
                                                                <TableCell>{i.Total}</TableCell>
                                                            </TableRow>)
                                                            }
                                                            
                                                        }
                                                           
                                                        )
                                                    }

                                                </React.Fragment>

                                            ))
                                        }

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                    </DataTable>
                </div>
            </div>
        </div>
    )
}

export default Y5ProductivityProductivityCalculation
