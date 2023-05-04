import { Table, TableHeader, TableContainer, TableRow, DataTable, TableHead, TableBody, TableCell } from 'carbon-components-react';
import React from 'react'
import { englishValue } from '../../Utils/CommonFunc';
import './MainOutput.scss';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/actions/ActionCreator';
import { isObject } from 'lodash';


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
function mapStateToProps(state) {
    return {
        userDropDownData: state.userDropDown,
        userInpuData: state.userInputData,
        userOutputData: state.userOutputData,
        userSessionData: state.userSessionData,
        userApiIbmWeightedUtilize: state.ApiIbmWeightedUtilize,
        userCalculateTicketPercentage: state.CalculateTicketPercentage,
        userYearOneBaselineTestingFTEs: state.YearOneBaselineTestingFTEs,
        userinputStatusData: state.inputStatus,
        userestimateState: state.userEstimateState,
        userNavbarToggle: state.userNavbarReducer,
        userAppScreenLoader: state.userScreenLoaderApp
    };
}

function prepareData(table, jsonData) {
    table.data[1]['L1.5'] = `${(jsonData.sumOfFinalProductivityPercentageByLevels.l1)}%`
    table.data[1]['L2'] = `${(jsonData.sumOfFinalProductivityPercentageByLevels.l2)}%`
    table.data[1]['L3'] = `${(jsonData.sumOfFinalProductivityPercentageByLevels.l3)}%`
    table.data[1]['L4'] = `${(jsonData.sumOfFinalProductivityPercentageByLevels.l4)}%`
    table.data[1]['Minor Enh'] = `${(jsonData.sumOfFinalProductivityPercentageByLevels.minEnh)}%`
    table.data[1]['Testing'] = `${(jsonData.sumOfFinalProductivityPercentageByLevels.testing)}%`
    table.data[1]['Total'] = ''

    table.data[2]['L1.5'] = jsonData.effortsRemainingAfterProductivityByLevels.l1
    table.data[2]['L2'] = jsonData.effortsRemainingAfterProductivityByLevels.l2
    table.data[2]['L3'] = jsonData.effortsRemainingAfterProductivityByLevels.l3
    table.data[2]['L4'] = jsonData.effortsRemainingAfterProductivityByLevels.l4
    table.data[2]['Minor Enh'] = jsonData.effortsRemainingAfterProductivityByLevels.minEnh
    table.data[2]['Testing'] = jsonData.effortsRemainingAfterProductivityByLevels.testing
    table.data[2]['Total'] = jsonData.sumOfEffortsRemainingAfterProductivity
}

const headerData = [englishValue('PC_Productivity_Values'), englishValue('PC_L1.5'), englishValue('PC_L2'), englishValue('PC_L3'), englishValue('PC_L4'), englishValue('PC_Minor_Enh.'), englishValue('PC_Testing'), englishValue('PC_Total')];
const names = ['DevSecOps', 'Automation', 'Cloud', 'Testing', 'Efficiency'];
const productivityValues = ['Productivity On Effort In Hours', 'Productivity %', 'Productivity In Scope']

function Y1ProductivityProductivityCalculation({ id, title }) {
    const pcData = useSelector(state => state.userOutputData.defaultOutputData.response.intermediateOutputs.
        productivityOutput)


    const y1PCTableData = [];
    // add names in this y1PCTableData array
    names.map((name, index) => y1PCTableData[index] = { name });
    for (const obj of y1PCTableData) {
        obj.data = []
        // add data  in this obj.data array inside  y1PCTableData
        productivityValues.map(value => obj.data.push({ "Productivity Values": value }));
    }

    //adding remaing values for 1st object
    y1PCTableData[0].data[0]['L1.5'] = pcData.baseLineEffortsDetailsFromY1.baseLineEffortsByLevels.l1
    y1PCTableData[0].data[0]['L2'] = pcData.baseLineEffortsDetailsFromY1.baseLineEffortsByLevels.l2
    y1PCTableData[0].data[0]['L3'] = pcData.baseLineEffortsDetailsFromY1.baseLineEffortsByLevels.l3
    y1PCTableData[0].data[0]['L4'] = pcData.baseLineEffortsDetailsFromY1.baseLineEffortsByLevels.l4
    y1PCTableData[0].data[0]['Minor Enh'] = pcData.baseLineEffortsDetailsFromY1.baseLineEffortsByLevels.minEnh
    y1PCTableData[0].data[0]['Testing'] = pcData.baseLineEffortsDetailsFromY1.baseLineEffortsByLevels.testing
    y1PCTableData[0].data[0]['Total'] = pcData.baseLineEffortsDetailsFromY1.sumOfBaseLineEfforts


    ////adding remaing values for rest of the obejct in y1PCTableData aaray
    prepareData(y1PCTableData[0], pcData.devSecOpsCalculation.productivityCalculationY1);
    prepareData(y1PCTableData[1], pcData.automationCalculation.productivityCalculationY1);
    prepareData(y1PCTableData[2], pcData.cloudCalculation.productivityCalculationY1);
    prepareData(y1PCTableData[3], pcData.testingCalculation.productivityCalculationY1);
    prepareData(y1PCTableData[4], pcData.efficiencyCalculation.productivityCalculationY1);



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
        // displaying data in form of rows
        <div className='outputMainHead2' id={id}>
            <div className='outputMain'>
                <div className='mainOutputs' >
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
                                                        {/* spanning all the columns to write one data only */}
                                                        <TableCell colSpan={headerData.length}>
                                                            <strong>{item.name}</strong>
                                                        </TableCell>
                                                    </TableRow>
                                                    {
                                                        item.data.map(i => {
                                                            if (i['Productivity Values'] == 'Productivity In Scope') {
                                                                return (<TableRow className="table-no-border">
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
                                                            else {
                                                                return (<TableRow className="table-no-border">
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

export default connect(mapStateToProps, mapDispatchToProps)(Y1ProductivityProductivityCalculation);
