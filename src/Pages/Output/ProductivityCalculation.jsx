import React, { useState } from 'react';
import NavBar from '../../Components/CommonFuncs/NavBar/Navbar';
import { Content, DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import HeaderInputs from '../OpportunityInputsParameter/HeaderInputs';
import './MainOutput.scss';
import { englishValue } from '../../Utils/CommonFunc';
import LoaderApp from '../LoaderApp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/actions/ActionCreator';
import Y1ProductivityProductivityCalculation from "./Y1Productivity-ProductivityCalculation";
import Y2ProductivityProductivityCalculation from "./Y2Productivity-ProductivityCalculation";
import Y3ProductivityProductivityCalculation from "./Y3Productivity-ProductivityCalculation";
import Y4ProductivityProductivityCalculation from "./Y4Productivity-ProductivityCalculation";
import Y5ProductivityProductivityCalculation from "./Y5Productivity-ProductivityCalculation";
import Y6ProductivityProductivityCalculation from "./Y6Productivity-ProductivityCalculation";
import Y7ProductivityProductivityCalculation from "./Y7Productivity-ProductivityCalculation";
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
}

// for displaying all productivity calculation on the application
const ProductivityCalculation = (props) => {
  const headerData = [englishValue('PC_Productivity'), englishValue('PC_Y1'), englishValue('PC_Y2'),
  englishValue('PC_Y3'), englishValue('PC_Y4'), englishValue('PC_Y5'), englishValue('PC_Y6'),
  englishValue('PC_Y7')];

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
  let monthlyEffortsByFTEs = Object.entries
    (props.userOutputData.defaultOutputData.response.intermediateOutputs.
      productivityOutput.productivitySummaryInPercentageByLevers);
  // arrange the objects in a format JIRA 519
  monthlyEffortsByFTEs = arrCoversionOrder(monthlyEffortsByFTEs, [
    "devSecOps",
    "automation",
    "testing",
    "efficiency",
    "cloud",
    "totalYoY",
    "cumulative",
    "annualProductivityUsed"
  ]);
  //let monthlyEffortsByFTEs = [props.userOutputData.defaultOutputData.response.intermediateOutputs.productivityOutput];

  return (
    <div className="inputName" id={englishValue("Summary")}>
      <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />

      <NavBar {...props} userNavBar={props.userInpuData.defaultInputData['response']['estimate']}

        title='ProductivityCalculation'></NavBar>
      <Content>
        <HeaderInputs  {...props} userData1={props.userInpuData.defaultInputData['response']['estimate']}
          title='output'
        > </HeaderInputs>



        <div className='outputMainHead'>
          <div className='outputMain'>
            <div className='mainOutputs'>
              <DataTable
                rows={monthlyEffortsByFTEs}
                headers={headerData}>
                {({ rows, headers, getHeaderProps }) => (
                  <TableContainer
                    title={englishValue('Summary')}
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
                          monthlyEffortsByFTEs.map(item => (

                            <>
                              {item[0] === "devSecOps" || item[0] === "automation" || item[0] === "cloud" || item[0] === "testing" || item[0] === "efficiency" || item[0] === "annualProductivityUsed" ? <>

                                <TableRow>
                                  <TableCell>{englishValue(item[0])}</TableCell>
                                  <TableCell>{(item[1].y1)}%</TableCell>
                                  <TableCell>{(item[1].y2)}%</TableCell>
                                  <TableCell>{(item[1].y3)}%</TableCell>
                                  <TableCell>{(item[1].y4)}%</TableCell>
                                  <TableCell>{(item[1].y5)}%</TableCell>
                                  <TableCell>{(item[1].y6)}%</TableCell>
                                  <TableCell>{(item[1].y7)}%</TableCell>
                                </TableRow>

                              </> : <>
                              <TableRow>
                                {/* for YOY and cumalitive */}
                                  <TableCell className="tableBold">{englishValue(item[0])}</TableCell>
                                  <TableCell className="tableBold">{(item[1].y1)}%</TableCell>
                                  <TableCell className="tableBold">{(item[1].y2)}%</TableCell>
                                  <TableCell className="tableBold">{(item[1].y3)}%</TableCell>
                                  <TableCell className="tableBold">{(item[1].y4)}%</TableCell>
                                  <TableCell className="tableBold">{(item[1].y5)}%</TableCell>
                                  <TableCell className="tableBold">{(item[1].y6)}%</TableCell>
                                  <TableCell className="tableBold">{(item[1].y7)}%</TableCell>
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

          <Y1ProductivityProductivityCalculation title={englishValue('Y1 Productivity')} id={englishValue("Y1Productivity")} />
          <Y2ProductivityProductivityCalculation title={englishValue('Y2 Productivity')} id={englishValue("Y2Productivity")} />
          <Y3ProductivityProductivityCalculation title={englishValue('Y3 Productivity')} id={englishValue("Y3Productivity")} />
          <Y4ProductivityProductivityCalculation title={englishValue('Y4 Productivity')} id={englishValue("Y4Productivity")} />
          <Y5ProductivityProductivityCalculation title={englishValue('Y5 Productivity')} id={englishValue("Y5Productivity")} />
          <Y6ProductivityProductivityCalculation title={englishValue('Y6 Productivity')} id={englishValue("Y6Productivity")} />
          <Y7ProductivityProductivityCalculation title={englishValue('Y7 Productivity')} id={englishValue("Y7Productivity")} />

        </div>
        <Feedback/>
      </Content>
    </div>
  );

}
export default connect(mapStateToProps, mapDispatchToProps)(ProductivityCalculation);