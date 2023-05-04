import React, { useState } from 'react';
import NavBar from '../../Components/CommonFuncs/NavBar/Navbar';
import { Content } from 'carbon-components-react';
import HeaderInputs from '../OpportunityInputsParameter/HeaderInputs';
import './MainOutput.scss';
import { englishValue } from '../../Utils/CommonFunc';
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import LoaderApp from '../LoaderApp';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/actions/ActionCreator';
import { connect } from 'react-redux';
import Feedback from '../Feedback/Feedback';

// This js file has the code AMSCalculation output section in Application.
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
const AmsCalculation = (props) => {

    let monthlyEffortsByFTEs = Object.entries
        (props.userOutputData.defaultOutputData.response.intermediateOutputs.
            amsOutput.unitEffortForTicketsAndUplifts);

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
     // arrange the objects in a format JIRA 519
    let monthlyinfo = arrCoversionOrder(monthlyEffortsByFTEs, [
        "cloudAppsBaselineWtHoursForL1",
        "cloudAppsBaselineWtHoursForL2",
        "cloudAppsBaselineWtHoursForL3",
        "cloudAppsBaselineWtHoursForL4",
        "cloudAppsBaselineWtHoursForMinorEnhancements",
        "optionalCapacityOfHours",
        "cloudAppsBaselineWtPercentageForAdhocActivities",
        "testEffortsPercentageInL3Tickets",
        "testEffortsPercentageInMinorEnhAndOptionalCapacity"


    ]);
    return (
        <div className="inputName">
            <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />

            <NavBar {...props} userNavBar={props.userInpuData.defaultInputData['response']['estimate']}
                title='AMSCalculation'></NavBar>
            <Content>
                <HeaderInputs  {...props} userData1={props.userInpuData.defaultInputData['response']['estimate']}
                    title='output'
                > </HeaderInputs>
                <div className='outputMainHead'>
                    <div className='outputMain'>
                        <div className='mainOutputs'>
                            <DataTable rows={monthlyinfo} headers={[englishValue('Average Resolution Effort / Complexity'), englishValue('Hours')]}>
                                {({ rows, headers, getHeaderProps }) => (
                                    <TableContainer
                                        title={englishValue('unitEfforts')}
                                        description={englishValue('getUplifts')}
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
                                            <TableBody >
                                                {monthlyinfo.map(rtx =>
                                                    <TableRow >
                                                        {rtx[0] === "cloudAppsBaselineWtPercentageForAdhocActivities" ||
                                                            rtx[0] === "testEffortsPercentageInL3Tickets" ||
                                                            rtx[0] === "testEffortsPercentageInMinorEnhAndOptionalCapacity" ?
                                                            <>
                                                                <TableCell>{englishValue(rtx[0])}</TableCell>
                                                                <TableCell>{`${rtx[1]}%`}</TableCell>
                                                            </> : <>
                                                                <TableCell>{englishValue(rtx[0])}</TableCell>
                                                                <TableCell>{rtx[1]}</TableCell>
                                                            </>}
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                )}
                            </DataTable>
                        </div>
                    </div>
                </div>
                <Feedback/>
            </Content>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(AmsCalculation);