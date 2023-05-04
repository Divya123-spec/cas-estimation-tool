import React, { useState } from 'react';
import NavBar from '../../Components/CommonFuncs/NavBar/Navbar';
import { Content } from 'carbon-components-react';
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell }
  from 'carbon-components-react';
import HeaderInputs from '../OpportunityInputsParameter/HeaderInputs';
import './MainOutput.scss';
import { englishValue } from '../../Utils/CommonFunc';
import LoaderApp from '../LoaderApp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/actions/ActionCreator';
import Feedback from '../Feedback/Feedback';

// This js file has the code Complexity&cloud calculation output section in Application.
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
const CloudComplexity = (props) => {

  let headerData = [englishValue('Type of ticket / service'), englishValue('currentBaselineHours'),
  englishValue('hoursSimple'), englishValue('hoursMedium'),
  englishValue('hoursComplex'), englishValue('complexityBaselineWtHours'), englishValue('Wthours')]

  let monthlyEffortsByFTEs = Object.entries
    (props.userOutputData.defaultOutputData.response.intermediateOutputs.
      complexityAndCloudOutput.complexityAndCloudAppsBaselineWtHoursOrPercentage);


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
    "baselineWtHoursForL1",
    "baselineWtHoursForL2",
    "baselineWtHoursForL3",
    "baselineWtHoursForL4",
    "baselineWtHoursForMinorEnhancements",
    "baselineWtPercentageForAdhocActivities"
  ]);

  return (
    <div className="inputName">
      <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />

      <NavBar title='CloudCalculation' {...props} userNavBar={props.userInpuData.defaultInputData['response']['estimate']}> </NavBar>
      <Content>
        <HeaderInputs {...props} userData1={props.userInpuData.defaultInputData['response']['estimate']}
          title='output'
        > </HeaderInputs>
        <div className='outputMainHead'>
          <div className='outputMain'>
            <div className='mainOutputs'>
              <DataTable rows={monthlyEffortsByFTEs} headers={[1, 2, 4, 5, 6, 7]}>
                {({ rows, headers, getHeaderProps }) => (
                  <TableContainer
                    title={englishValue('effortComplexity')}
                    description={englishValue('changesEffort')}
                  >
                    <Table >
                      <TableHead>
                        <TableRow>
                          {headerData.map((header) => (
                            <TableHeader >
                              {header}
                            </TableHeader>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody >
                        {monthlyinfo.map(rtx =>
                          <TableRow>
                            <>
                              {rtx[0] === "baselineWtPercentageForAdhocActivities" ? <>
                                <TableCell>{englishValue(rtx[0])}</TableCell>
                                <TableCell>{rtx[1].currentBaselinePercentage}%</TableCell>
                                <TableCell>{rtx[1].percentageSimple}%</TableCell>
                                <TableCell>{rtx[1].percentageMedium}%</TableCell>
                                <TableCell>{rtx[1].percentageComplex}%</TableCell>
                                <TableCell>{rtx[1].complexityBaselineWtPercentage}%</TableCell>
                                {/* <TableCell>{`${rtx[1].complexityChangePercentage}%`}</TableCell> */}
                                <TableCell>{rtx[1].cloudAppsBaselineWtPercentage}%</TableCell>
                              </> : <>
                                <TableCell>{englishValue(rtx[0])}</TableCell>
                                <TableCell>{rtx[1].currentBaselineHours}</TableCell>
                                <TableCell>{rtx[1].hoursSimple}</TableCell>
                                <TableCell>{rtx[1].hoursMedium}</TableCell>
                                <TableCell>{rtx[1].hoursComplex}</TableCell>
                                <TableCell>{rtx[1].complexityBaselineWtHours}</TableCell>
                                {/* <TableCell>{`${rtx[1].complexityChangePercentage}%`}</TableCell> */}
                                <TableCell>{rtx[1].cloudAppsBaselineWtHours}</TableCell>
                              </>}
                            </>
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
export default connect(mapStateToProps, mapDispatchToProps)(CloudComplexity);

