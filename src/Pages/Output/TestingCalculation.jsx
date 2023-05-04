import React, { useState } from 'react';
import NavBar from '../../Components/CommonFuncs/NavBar/Navbar';
import { Content, DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import HeaderInputs from '../OpportunityInputsParameter/HeaderInputs';
import './MainOutput.scss';
import { currencyCoverter, englishValue } from '../../Utils/CommonFunc';
import LoaderApp from '../LoaderApp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/actions/ActionCreator';
import Feedback from '../Feedback/Feedback';
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
};


const TestingCalculation = (props) => {
    let summaryData = Object.entries(props.userOutputData.defaultOutputData.response.intermediateOutputs.testingOutput['testingCostSummary']);
   
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
  let summaryDatainfo = arrCoversionOrder(summaryData, [
    "deploymentCostOTCForIQP_USD",
    "maintenanceCostMRCForIQP_USD",
    "licenseCostOTCForIQPForY1_USD",
    "licenseCostOTCForIQPForY2_USD",
    "licenseCostOTCForIQPForY3_USD",
    "totalCostForAllYears_USD"
  ]);

    const headerData = [englishValue('CostType'), englishValue('ServiceType'), englishValue('Testing_Simple'), englishValue('Testing_Medium'), englishValue('Testing_Complex'), englishValue('Testing_Total')];
    //let monthlyEffortsByFTEs = [props.userOutputData.defaultOutputData.response.intermediateOutputs.CostTypeOutput];
    return (
        <div className="inputName" id='TestingCostSummary'>
            <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />
            <NavBar {...props} userNavBar={props.userInpuData.defaultInputData['response']['estimate']}
                title='TestingCalculation'></NavBar>
            <Content>
                <HeaderInputs  {...props} userData1={props.userInpuData.defaultInputData['response']['estimate']}
                    title='output'
                > </HeaderInputs>
                <div className='outputMainHead'>
                    <div className='outputMain'>
                        <div className='mainOutputs'>
                            <DataTable
                                rows={summaryData}
                                headers={headerData}>
                                {({ rows, headers, getHeaderProps }) => (
                                    <TableContainer
                                        title={englishValue('TestingCostSummary')}
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
                                            <TableBody >
                                                {
                                                    summaryDatainfo.map(item => (
                                                        <>

                                                            {item[0] === "totalCostForAllYears_USD" ? <>
                                                                <TableRow>
                                                                    <TableCell className="tableBold">{englishValue(`${item[0]}_CostType`)}</TableCell>
                                                                    <TableCell className="tableBold">{englishValue(`${item[0]}_ServiceType`)}</TableCell>
                                                                    <TableCell className="tableBold"> {currencyCoverter(item[1].simple)}</TableCell>
                                                                    <TableCell className="tableBold"> {currencyCoverter(item[1].medium)}</TableCell>
                                                                    <TableCell className="tableBold"> {currencyCoverter(item[1].complex)}</TableCell>
                                                                    <TableCell className="tableBold"> {currencyCoverter(item[1].total)}</TableCell>
                                                                </TableRow>
                                                            </> : <>
                                                                <TableRow>
                                                                    <TableCell>{englishValue(`${item[0]}_CostType`)}</TableCell>
                                                                    <TableCell>{englishValue(`${item[0]}_ServiceType`)}</TableCell>
                                                                    <TableCell> {currencyCoverter(item[1].simple)}</TableCell>
                                                                    <TableCell> {currencyCoverter(item[1].medium)}</TableCell>
                                                                    <TableCell> {currencyCoverter(item[1].complex)}</TableCell>
                                                                    <TableCell> {currencyCoverter(item[1].total)}</TableCell>
                                                                </TableRow>
                                                            </>}
                                                        </>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                )}
                            </DataTable>
                        </div>
                    </div>
                    <div className="MiddleLine">
                        <p style={{ fontSize: "14px" }}>Note:</p>
                        <p style={{ fontSize: "14px" }}>1. FTEs used for the calculation is {props.userOutputData.defaultOutputData.response.intermediateOutputs.testingOutput['testingFTEsEstimated']}</p>
                        <p style={{ fontSize: "14px" }}>2. IGNITE will not be activated for {'<'} 5 FTE</p>
                        <p style={{ fontSize: "14px" }}>3. License cost for 3 years used for the calculation is $ {props.userOutputData.defaultOutputData.response.intermediateOutputs.testingOutput['licenseCost_USD']}</p>
                    </div>
                </div>
                <Feedback/>
            </Content>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(TestingCalculation);