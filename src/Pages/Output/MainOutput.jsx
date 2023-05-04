import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions/ActionCreator";
import NavBar from "../../Components/CommonFuncs/NavBar/Navbar";
import HeaderInputs from "../OpportunityInputsParameter/HeaderInputs";
import "./MainOutput.scss";
import {
  Content,
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TooltipIcon,
  Button,
} from "carbon-components-react";
import Calculatemodal from "../../Pages/OpportunityInputsParameter/Calculatemodal";

import { englishValue } from "../../Utils/CommonFunc";
import LoaderApp from "../LoaderApp";
import SaveModal from "../OpportunityInputsParameter/SaveModal";
import SevenyearOutput from "./SevenyearOutput";
import EffortDistByTech from "./EffortDistByTech";
import { Download16 } from "@carbon/icons-react";
import inputService from "../../services/InputService";
import { FormulaVersion } from "../../Components/CommonFuncs/formula/FormulaVersionChange";
import Feedback from "../Feedback/Feedback";

// this file code represents the  Effort output section in apllication
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
    userAppScreenLoader: state.userScreenLoaderApp,
    userNonLabourStub: state.userNonLabourStub
  };
}
// functio  to display effor output in application
//AMS Estimates Data
const MainOutput = (props) => {
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
  let headerData4 = [
    englishValue("Suggested SQUADs"),
    englishValue("V Large"),
    englishValue("Large"),
    englishValue("Med"),
    englishValue("Small"),
    englishValue("totalSquads"),
  ];
  let headerData3 = [
    englishValue("FTE Post Productivity"),
    englishValue("FTE/Month - Y1"),
    englishValue("FTE/Month - Y2"),
    englishValue("FTE/Month - Y3"),
    englishValue("FTE/Month - Y4"),
    englishValue("FTE/Month - Y5"),
    englishValue("FTE/Month - Y6"),
    englishValue("FTE/Month - Y7"),
  ];
  let headerData1 = [
    englishValue("EffortByFTE(per month)"),
    englishValue("Simple"),
    englishValue("Moderate"),
    englishValue("Complex"),
    englishValue("Day1FTE"),
    englishValue("EndY1FTE"),
  ];
  let headerData2 = [
    englishValue("EffortInHours(per month)"),
    englishValue("Simple"),
    englishValue("Moderate"),
    englishValue("Complex"),
    englishValue("Day1"),
    englishValue("EndY1"),
  ];
  let monthlyEffortsByFTEs = Object.entries(
    props.userOutputData.defaultOutputData["response"]["finalOutputs"]
      .outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs
  );

  let monthlyinfo = arrCoversionOrder(monthlyEffortsByFTEs, [
    "incidentsMonthlyFTEs",
    "minorEnhMonthlyFTEs",
    "optionalCapacityMonthlyFTEs",
    "testingMonthlyFTEs",
    "additionalTestingMonthlyFTEs",
    "adhocActivitiesMonthlyFTEs",
    "automationMonthlyFTEs",
    "socMonthlyFTEs",
    "devOpsMonthlyFTEs",
    "securityMonthlyFTEs",
    "totalFTEsInScope",
    "governanceUpliftFTEs",
    "totalFTEsInScopeIncludingGovernanceUplift",
    "distributionPercentageOfTotalFTEsInScope",
  ]);

  // let monthlyinfo = [...monthlyEffortsByFTEs.slice(0, 3),
  // monthlyEffortsByFTEs[4], monthlyEffortsByFTEs[5],
  // monthlyEffortsByFTEs[3], monthlyEffortsByFTEs[6],
  // monthlyEffortsByFTEs[12], monthlyEffortsByFTEs[13],
  // monthlyEffortsByFTEs[7], monthlyEffortsByFTEs[11],
  // monthlyEffortsByFTEs[10], monthlyEffortsByFTEs[9], monthlyEffortsByFTEs[8]]
  let monthlyEffortsInHours = Object.entries(
    props.userOutputData.defaultOutputData["response"]["finalOutputs"]
      .outputEffort.yearOneEffortOutput.monthlyEffortsInHours
  );

  let monthlyHoursinfo = arrCoversionOrder(monthlyEffortsInHours, [
    "incidentsMonthlyHrs",
    "minorEnhMonthlyHrs",
    "optionalCapacityMonthlyHrs",
    "testingMonthlyHrs",
    "additionalTestingMonthlyHrs",
    "adhocActivitiesMonthlyHrs",
    "automationMonthlyHrs",
    "socMonthlyHrs",
    "devOpsMonthlyHrs",
    // "totalFTEs",9
    "securityMonthlyHrs",
    "totalHoursInScope",
    "governanceUpliftHrs",
    "totalHoursInScopeIncludingGovernanceUplift",
  ]);

  //   const versionSystemFormula =()=>{
  //     FormulaVersion(props)

  // }

  let transtionYear = Math.ceil(
    Number(
      props.userInpuData.defaultInputData.response.estimate.userInputs.basicInfo
        .dealDurationInMonths
    ) / 12
  );

  let monthlySuggestedSquads = Object.entries(
    props.userOutputData.defaultOutputData["response"]["finalOutputs"]
      .outputEffort.yearOneEffortOutput.suggestedSquads
  );
  let postProductivityGovernanceUpliftFTEs = props.userOutputData.defaultOutputData["response"]["finalOutputs"]
    .outputEffort?.fiveYearFTEsOutput?.postProductivityGovernanceUpliftFTEs;
  let appDecommissionFTEs = props.userOutputData.defaultOutputData["response"]["finalOutputs"]
    .outputEffort?.fiveYearFTEsOutput?.appDecommissionFTEs;
  let fiveYearOutput = {
    ...props.userOutputData.defaultOutputData["response"]["finalOutputs"]
      .outputEffort.fiveYearFTEsOutput.postProductivityFTEs,
    ...props.userOutputData.defaultOutputData["response"]["finalOutputs"]
      .outputEffort.fiveYearFTEsOutput
      .postProductivityAutomationAndSecurityFTEs,
    ...props.userOutputData.defaultOutputData["response"]["finalOutputs"]
      .outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs,
    ...props.userOutputData.defaultOutputData["response"]["finalOutputs"]
      .outputEffort.fiveYearFTEsOutput
      .totalFTEsYoYCumulativeAndYearlyAppliedProductivity,
    ...props.userOutputData.defaultOutputData["response"]["finalOutputs"]
      .outputEffort.fiveYearFTEsOutput
      .subTotalFTEsSupportAndTransformResources,
    // postProductivityGovernanceUpliftFTEs added as object in JIRA 1110
    postProductivityGovernanceUpliftFTEs,
    //retring app appDecommissionFTEs
    appDecommissionFTEs

  };
  let fiveYear = Object.entries(fiveYearOutput);

  const handlerExport = () => {
    let estimateId =
      props.userInpuData.defaultInputData.response.estimate["_id"];
    let filenme =
      props.userInpuData.defaultInputData.response.estimate.estimationTitle;
    inputService.exportDataFetchOutput(
      estimateId,
      `${filenme}_EffortOutputData`
    );
  };

  const newFiveYear = arrCoversionOrder(fiveYear, [
    "productivityOnL1MonthlyFTEsForY1",
    "productivityOnL2MonthlyFTEsForY1",
    "productivityOnL3MonthlyFTEsForY1",
    "productivityOnL4MonthlyFTEsForY1",
    "productivityOnMinorEnhMonthlyFTEsForY1",
    "productivityOnOptionalCapacityMonthlyFTEsForY1",
    "productivityOnAdhocActivitiesMonthlyFTEsForY1",
    "productivityOnTestingMonthlyFTEsForY1",
    "productivityOnAdditionalTestingMonthlyFTEsForY1",
    "productivityOnSecurityMonthlyFTEsForY1",
    "subTotalSupportFTEs",
    // "totalFTEs",9
    "productivityOnAutomationMonthlyFTEsForY1",
    "productivityOnSOCMonthlyFTEsForY1",
    "productivityOnDevOpsMonthlyFTEsForY1",
    "subTotalTransformResourcesFTEs",
    //
    "appDecommissionFTEs",
    //  {/* postProductivityGovernanceUpliftFTEs adding this governanace uplift condition JIRA 1110 */}
    "postProductivityGovernanceUpliftFTEs",
    "totalFTEsPostProductivity",
    "productivityYoY",
    "productivityCumulative",
    "productivityYearlyAppliedPercentage",
  ]);

  var HeaderTitle;
  HeaderTitle = (
    <div
      className={
        props.userinputStatusData.Export
          ? "OutputMainData"
          : "OutputMainDataDisable"
      }
    >
      <p className="mainHeadersOutput">{englishValue("5YearFTEOutput")}</p>
      {/* Label and icon both should be clikced JIRA */}
      {props.userinputStatusData.Export ?
        <>
          <TooltipIcon className="DownloadBtn" tooltipText='Download Effort Output Data as Excel'>
            <a onClick={props.userinputStatusData.Export ? handlerExport : ''} ><span>Download Effort Output</span>
              <Download16 />
            </a>
          </TooltipIcon>
        </> : <a onClick={props.userinputStatusData.Export ? handlerExport : ''} ><span>Download Effort Output</span>
          <Download16 />
        </a>}
    </div>
  );

  return (
    <div className="inputName">
      <LoaderApp
        loaderBtn={props.userAppScreenLoader.flag}
        labelLoader={props.userAppScreenLoader.label}
      />

      <NavBar
        {...props}
        userNavBar={props.userInpuData.defaultInputData["response"]["estimate"]}
        title="mainOutput"
      ></NavBar>
      <Content>
        <HeaderInputs
          {...props}
          title="output"
          userData1={
            props.userInpuData.defaultInputData["response"]["estimate"]
          }
        >
          {" "}
        </HeaderInputs>
        {props.userinputStatusData.calculateModal ? (
          <Calculatemodal {...props} />
        ) : (
          ""
        )}
        {props.userinputStatusData.saveModal ? <SaveModal {...props} /> : ""}
        {/* <Button onClick={versionSystemFormula}>CalculateVersion</Button> */}
        <div className="outputMainHead">
          <div className="outputMain">


            {/* <div className='mainOutputs'>

                            <DataTable rows={monthlySuggestedSquads} headers={[1, 2, 4, 5, 6, 7]}>
                                {({ rows, headers, getHeaderProps }) => (
                                    <TableContainer
                                        title={englishValue('SuggestedSQUADs')}
                                    >
                                        <Table >
                                            <TableHead>
                                                <TableRow>
                                                    {headerData4.map((header) => (
                                                        <TableHeader >
                                                            {header}
                                                        </TableHeader>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody >
                                                {monthlySuggestedSquads.map(rtx =>

                                                    <>
                                                        {rtx[0] === "totalSquads" ? <>

                                                            <TableRow>
                                                                <TableCell className="tableBold">{englishValue(rtx[0])}</TableCell>
                                                                <TableCell className="tableBold">{rtx[1].vLarge}</TableCell>
                                                                <TableCell className="tableBold">{rtx[1].large}</TableCell>
                                                                <TableCell className="tableBold">{rtx[1].medium}</TableCell>
                                                                <TableCell className="tableBold">{rtx[1].small}</TableCell>
                                                                <TableCell className="tableBold">{rtx[1].totalSquads}</TableCell>
                                                            </TableRow>

                                                        </> : <>
                                                            <TableRow>
                                                                <TableCell >{englishValue(rtx[0])}</TableCell>
                                                                <TableCell>{rtx[1].vLarge}</TableCell>
                                                                <TableCell>{rtx[1].large}</TableCell>
                                                                <TableCell>{rtx[1].medium}</TableCell>
                                                                <TableCell>{rtx[1].small}</TableCell>
                                                                <TableCell>{rtx[1].totalSquads}</TableCell>
                                                            </TableRow>
                                                        </>}
                                                    </>)}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                )}
                            </DataTable>

                        </div> */}
            <div className="mainOutputs"></div>
            <div className="mainOutputs fiveYearOutputs">
              <DataTable
                rows={monthlyEffortsByFTEs}
                headers={[1, 2, 4, 5, 6, 7]}
              >
                {({ rows, headers, getHeaderProps }) => (
                  <TableContainer
                    title={HeaderTitle}
                    description={englishValue("7YearFTEOutput(FTEsPermonth)")}
                  >
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableHeader>
                            {" "}
                            {englishValue("FTE Post Productivity")}
                          </TableHeader>
                          <TableHeader
                            className={
                              transtionYear == 1 ? " borderOutput" : ""
                            }
                          >
                            {englishValue("FTE/Month - Y1")}
                          </TableHeader>
                          <TableHeader
                            className={
                              transtionYear == 2 ? " borderOutput" : ""
                            }
                          >
                            {englishValue("FTE/Month - Y2")}
                          </TableHeader>
                          <TableHeader
                            className={
                              transtionYear == 3 ? " borderOutput" : ""
                            }
                          >
                            {englishValue("FTE/Month - Y3")}
                          </TableHeader>
                          <TableHeader
                            className={
                              transtionYear == 4 ? " borderOutput" : ""
                            }
                          >
                            {englishValue("FTE/Month - Y4")}
                          </TableHeader>
                          <TableHeader
                            className={
                              transtionYear == 5 ? " borderOutput" : ""
                            }
                          >
                            {englishValue("FTE/Month - Y5")}
                          </TableHeader>
                          <TableHeader
                            className={
                              transtionYear == 6 ? " borderOutput" : ""
                            }
                          >
                            {englishValue("FTE/Month - Y6")}
                          </TableHeader>
                          <TableHeader
                            className={
                              transtionYear == 7 ? " borderOutput" : ""
                            }
                          >
                            {englishValue("FTE/Month - Y7")}
                          </TableHeader>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {newFiveYear.map((rtx) => (
                          <TableRow>
                            {rtx[0] === "appDecommissionFTEs" ? (
                            <>
                            {rtx[1]?<>
                              <TableCell className="tableBold">
                                {englishValue(rtx[0])}
                              </TableCell>
                              <TableCell
                                className={
                                  transtionYear >= 1
                                    ? transtionYear == 1
                                      ? " borderOutput  tableBoldValue"
                                      : "  tableBoldValue"
                                    : "tableBold"
                                }
                              >
                                {rtx[1].postProductivityAppDecommissionFTEsForY1}
                              </TableCell>
                              <TableCell
                                className={
                                  transtionYear >= 2
                                    ? transtionYear == 2
                                      ? " borderOutput  tableBoldValue"
                                      : "  tableBoldValue"
                                    : "tableBold"
                                }
                              >
                                {rtx[1].postProductivityAppDecommissionFTEsForY2}
                              </TableCell>
                              <TableCell
                                className={
                                  transtionYear >= 3
                                    ? transtionYear == 3
                                      ? " borderOutput tableBoldValue "
                                      : "  tableBoldValue"
                                    : "tableBold"
                                }
                              >
                                {rtx[1].postProductivityAppDecommissionFTEsForY3}
                              </TableCell>
                              <TableCell
                                className={
                                  transtionYear >= 4
                                    ? transtionYear == 4
                                      ? " borderOutput tableBoldValue "
                                      : "  tableBoldValue"
                                    : "tableBold"
                                }
                              >
                                {rtx[1].postProductivityAppDecommissionFTEsForY4}
                              </TableCell>
                              <TableCell
                                className={
                                  transtionYear >= 5
                                    ? transtionYear == 5
                                      ? " borderOutput tableBoldValue "
                                      : "  tableBoldValue"
                                    : "tableBold"
                                }
                              >
                                {rtx[1].postProductivityAppDecommissionFTEsForY5}
                              </TableCell>
                              <TableCell
                                className={
                                  transtionYear >= 6
                                    ? transtionYear == 6
                                      ? " borderOutput tableBoldValue "
                                      : "  tableBoldValue"
                                    : "tableBold"
                                }
                              >
                                {rtx[1].postProductivityAppDecommissionFTEsForY6}
                              </TableCell>
                              <TableCell
                                className={
                                  transtionYear >= 7
                                    ? transtionYear == 7
                                      ? " borderOutput  tableBoldValue"
                                      : "  tableBoldValue"
                                    : "tableBold"
                                }
                              >
                                {rtx[1].postProductivityAppDecommissionFTEsForY7}
                              </TableCell>
                            </>:''}
                            </>
                            ) : <>
                              {rtx[0] === "totalFTEsPostProductivity" ? (
                                <>
                                  <TableCell className="tableBold">
                                    {englishValue(rtx[0])}
                                  </TableCell>
                                  <TableCell
                                    className={
                                      transtionYear >= 1
                                        ? transtionYear == 1
                                          ? " borderOutput  tableBoldValue"
                                          : "  tableBoldValue"
                                        : "tableBold"
                                    }
                                  >
                                    {rtx[1].totalPostProductivityMonthlyFTEsForY1}
                                  </TableCell>
                                  <TableCell
                                    className={
                                      transtionYear >= 2
                                        ? transtionYear == 2
                                          ? " borderOutput  tableBoldValue"
                                          : "  tableBoldValue"
                                        : "tableBold"
                                    }
                                  >
                                    {rtx[1].totalPostProductivityMonthlyFTEsForY2}
                                  </TableCell>
                                  <TableCell
                                    className={
                                      transtionYear >= 3
                                        ? transtionYear == 3
                                          ? " borderOutput  tableBoldValue"
                                          : "  tableBoldValue"
                                        : "tableBold"
                                    }
                                  >
                                    {rtx[1].totalPostProductivityMonthlyFTEsForY3}
                                  </TableCell>
                                  <TableCell
                                    className={
                                      transtionYear >= 4
                                        ? transtionYear == 4
                                          ? " borderOutput  tableBoldValue"
                                          : "  tableBoldValue"
                                        : "tableBold"
                                    }
                                  >
                                    {rtx[1].totalPostProductivityMonthlyFTEsForY4}
                                  </TableCell>
                                  <TableCell
                                    className={
                                      transtionYear >= 5
                                        ? transtionYear == 5
                                          ? " borderOutput  tableBoldValue"
                                          : "  tableBoldValue"
                                        : "tableBold"
                                    }
                                  >
                                    {rtx[1].totalPostProductivityMonthlyFTEsForY5}
                                  </TableCell>
                                  <TableCell
                                    className={
                                      transtionYear >= 6
                                        ? transtionYear == 6
                                          ? " borderOutput  tableBoldValue"
                                          : "  tableBoldValue"
                                        : "tableBold"
                                    }
                                  >
                                    {rtx[1].totalPostProductivityMonthlyFTEsForY6}
                                  </TableCell>
                                  <TableCell
                                    className={
                                      transtionYear >= 7
                                        ? transtionYear == 7
                                          ? " borderOutput  tableBoldValue"
                                          : "  tableBoldValue"
                                        : "tableBold"
                                    }
                                  >
                                    {rtx[1].totalPostProductivityMonthlyFTEsForY7}
                                  </TableCell>
                                </>
                              ) : (
                                <>
                                  {rtx[0] === "subTotalSupportFTEs" ? (
                                    <>
                                      <TableCell className="tableBold">
                                        {englishValue(rtx[0])}
                                      </TableCell>
                                      <TableCell
                                        className={
                                          transtionYear >= 1
                                            ? transtionYear == 1
                                              ? " borderOutput  tableBoldValue"
                                              : "  tableBoldValue"
                                            : "tableBold"
                                        }
                                      >
                                        {rtx[1].subTotalPostProductivityMonthlyFTEsForY1}
                                      </TableCell>
                                      <TableCell
                                        className={
                                          transtionYear >= 2
                                            ? transtionYear == 2
                                              ? " borderOutput  tableBoldValue"
                                              : "  tableBoldValue"
                                            : "tableBold"
                                        }
                                      >
                                        {rtx[1].subTotalPostProductivityMonthlyFTEsForY2}
                                      </TableCell>
                                      <TableCell
                                        className={
                                          transtionYear >= 3
                                            ? transtionYear == 3
                                              ? " borderOutput tableBoldValue "
                                              : "  tableBoldValue"
                                            : "tableBold"
                                        }
                                      >
                                        {rtx[1].subTotalPostProductivityMonthlyFTEsForY3}
                                      </TableCell>
                                      <TableCell
                                        className={
                                          transtionYear >= 4
                                            ? transtionYear == 4
                                              ? " borderOutput tableBoldValue "
                                              : "  tableBoldValue"
                                            : "tableBold"
                                        }
                                      >
                                        {rtx[1].subTotalPostProductivityMonthlyFTEsForY4}
                                      </TableCell>
                                      <TableCell
                                        className={
                                          transtionYear >= 5
                                            ? transtionYear == 5
                                              ? " borderOutput tableBoldValue "
                                              : "  tableBoldValue"
                                            : "tableBold"
                                        }
                                      >
                                        {rtx[1].subTotalPostProductivityMonthlyFTEsForY5}
                                      </TableCell>
                                      <TableCell
                                        className={
                                          transtionYear >= 6
                                            ? transtionYear == 6
                                              ? " borderOutput tableBoldValue "
                                              : "  tableBoldValue"
                                            : "tableBold"
                                        }
                                      >
                                        {rtx[1].subTotalPostProductivityMonthlyFTEsForY6}
                                      </TableCell>
                                      <TableCell
                                        className={
                                          transtionYear >= 7
                                            ? transtionYear == 7
                                              ? " borderOutput  tableBoldValue"
                                              : "  tableBoldValue"
                                            : "tableBold"
                                        }
                                      >
                                        {rtx[1].subTotalPostProductivityMonthlyFTEsForY7}
                                      </TableCell>
                                    </>
                                  ) : (
                                    <>
                                      {rtx[0] === "subTotalTransformResourcesFTEs" ? (
                                        <>
                                          <TableCell className="tableBold">
                                            {englishValue(rtx[0])}
                                          </TableCell>
                                          <TableCell
                                            className={
                                              transtionYear >= 1
                                                ? transtionYear == 1
                                                  ? " borderOutput  tableBoldValue"
                                                  : "  tableBoldValue"
                                                : "tableBold"
                                            }
                                          >
                                            {rtx[1].subTotalPostProductivityMonthlyFTEsForY1}
                                          </TableCell>
                                          <TableCell
                                            className={
                                              transtionYear >= 2
                                                ? transtionYear == 2
                                                  ? " borderOutput  tableBoldValue"
                                                  : "  tableBoldValue"
                                                : "tableBold"
                                            }
                                          >
                                            {rtx[1].subTotalPostProductivityMonthlyFTEsForY2}
                                          </TableCell>
                                          <TableCell
                                            className={
                                              transtionYear >= 3
                                                ? transtionYear == 3
                                                  ? " borderOutput tableBoldValue "
                                                  : "  tableBoldValue"
                                                : "tableBold"
                                            }
                                          >
                                            {rtx[1].subTotalPostProductivityMonthlyFTEsForY3}
                                          </TableCell>
                                          <TableCell
                                            className={
                                              transtionYear >= 4
                                                ? transtionYear == 4
                                                  ? " borderOutput tableBoldValue "
                                                  : "  tableBoldValue"
                                                : "tableBold"
                                            }
                                          >
                                            {rtx[1].subTotalPostProductivityMonthlyFTEsForY4}
                                          </TableCell>
                                          <TableCell
                                            className={
                                              transtionYear >= 5
                                                ? transtionYear == 5
                                                  ? " borderOutput tableBoldValue "
                                                  : "  tableBoldValue"
                                                : "tableBold"
                                            }
                                          >
                                            {rtx[1].subTotalPostProductivityMonthlyFTEsForY5}
                                          </TableCell>
                                          <TableCell
                                            className={
                                              transtionYear >= 6
                                                ? transtionYear == 6
                                                  ? " borderOutput tableBoldValue "
                                                  : "  tableBoldValue"
                                                : "tableBold"
                                            }
                                          >
                                            {rtx[1].subTotalPostProductivityMonthlyFTEsForY6}
                                          </TableCell>
                                          <TableCell
                                            className={
                                              transtionYear >= 7
                                                ? transtionYear == 7
                                                  ? " borderOutput  tableBoldValue"
                                                  : "  tableBoldValue"
                                                : "tableBold"
                                            }
                                          >
                                            {rtx[1].subTotalPostProductivityMonthlyFTEsForY7}
                                          </TableCell>
                                        </>
                                      ) :
                                        (
                                          <>
                                            {/* postProductivityGovernanceUpliftFTEs adding this governanace uplift condition JIRA 1110 */}
                                            {rtx[0] === "postProductivityGovernanceUpliftFTEs" ? (
                                              <>
                                                <TableCell className="tableBold">
                                                  {englishValue(rtx[0])}
                                                </TableCell>
                                                <TableCell
                                                  className={
                                                    transtionYear >= 1
                                                      ? transtionYear == 1
                                                        ? " borderOutput  tableBoldValue"
                                                        : "  tableBoldValue"
                                                      : "tableBold"
                                                  }
                                                >
                                                  {rtx[1].postProductivityMonthlyFTEsForY1}
                                                </TableCell>
                                                <TableCell
                                                  className={
                                                    transtionYear >= 2
                                                      ? transtionYear == 2
                                                        ? " borderOutput  tableBoldValue"
                                                        : "  tableBoldValue"
                                                      : "tableBold"
                                                  }
                                                >
                                                  {rtx[1].postProductivityMonthlyFTEsForY2}
                                                </TableCell>
                                                <TableCell
                                                  className={
                                                    transtionYear >= 3
                                                      ? transtionYear == 3
                                                        ? " borderOutput tableBoldValue "
                                                        : "  tableBoldValue"
                                                      : "tableBold"
                                                  }
                                                >
                                                  {rtx[1].postProductivityMonthlyFTEsForY3}
                                                </TableCell>
                                                <TableCell
                                                  className={
                                                    transtionYear >= 4
                                                      ? transtionYear == 4
                                                        ? " borderOutput tableBoldValue "
                                                        : "  tableBoldValue"
                                                      : "tableBold"
                                                  }
                                                >
                                                  {rtx[1].postProductivityMonthlyFTEsForY4}
                                                </TableCell>
                                                <TableCell
                                                  className={
                                                    transtionYear >= 5
                                                      ? transtionYear == 5
                                                        ? " borderOutput tableBoldValue "
                                                        : "  tableBoldValue"
                                                      : "tableBold"
                                                  }
                                                >
                                                  {rtx[1].postProductivityMonthlyFTEsForY5}
                                                </TableCell>
                                                <TableCell
                                                  className={
                                                    transtionYear >= 6
                                                      ? transtionYear == 6
                                                        ? " borderOutput tableBoldValue "
                                                        : "  tableBoldValue"
                                                      : "tableBold"
                                                  }
                                                >
                                                  {rtx[1].postProductivityMonthlyFTEsForY6}
                                                </TableCell>
                                                <TableCell
                                                  className={
                                                    transtionYear >= 7
                                                      ? transtionYear == 7
                                                        ? " borderOutput  tableBoldValue"
                                                        : "  tableBoldValue"
                                                      : "tableBold"
                                                  }
                                                >
                                                  {rtx[1].postProductivityMonthlyFTEsForY7}
                                                </TableCell>
                                              </>
                                            ) :
                                              (
                                                <>
                                                  {rtx[0] === "productivityYoY" ? (
                                                    <>
                                                      <TableCell>
                                                        {englishValue(rtx[0])}
                                                      </TableCell>
                                                      <TableCell
                                                        className={
                                                          transtionYear >= 1
                                                            ? transtionYear == 1
                                                              ? " borderOutput  tableBoldValue"
                                                              : "  tableBoldValue"
                                                            : ""
                                                        }
                                                      >
                                                        {rtx[1].productivityYoYForY1}%
                                                      </TableCell>
                                                      <TableCell
                                                        className={
                                                          transtionYear >= 2
                                                            ? transtionYear == 2
                                                              ? " borderOutput  tableBoldValue"
                                                              : "  tableBoldValue"
                                                            : ""
                                                        }
                                                      >
                                                        {rtx[1].productivityYoYForY2}%
                                                      </TableCell>
                                                      <TableCell
                                                        className={
                                                          transtionYear >= 3
                                                            ? transtionYear == 3
                                                              ? " borderOutput tableBoldValue "
                                                              : "  tableBoldValue"
                                                            : ""
                                                        }
                                                      >
                                                        {rtx[1].productivityYoYForY3}%
                                                      </TableCell>
                                                      <TableCell
                                                        className={
                                                          transtionYear >= 4
                                                            ? transtionYear == 4
                                                              ? " borderOutput tableBoldValue "
                                                              : "  tableBoldValue"
                                                            : ""
                                                        }
                                                      >
                                                        {rtx[1].productivityYoYForY4}%
                                                      </TableCell>
                                                      <TableCell
                                                        className={
                                                          transtionYear >= 5
                                                            ? transtionYear == 5
                                                              ? " borderOutput tableBoldValue "
                                                              : "  tableBoldValue"
                                                            : ""
                                                        }
                                                      >
                                                        {rtx[1].productivityYoYForY5}%
                                                      </TableCell>
                                                      <TableCell
                                                        className={
                                                          transtionYear >= 6
                                                            ? transtionYear == 6
                                                              ? " borderOutput tableBoldValue "
                                                              : "  tableBoldValue"
                                                            : ""
                                                        }
                                                      >
                                                        {rtx[1].productivityYoYForY6}%
                                                      </TableCell>
                                                      <TableCell
                                                        className={
                                                          transtionYear >= 7
                                                            ? transtionYear == 7
                                                              ? " borderOutput  tableBoldValue"
                                                              : "  tableBoldValue"
                                                            : ""
                                                        }
                                                      >
                                                        {rtx[1].productivityYoYForY7}%
                                                      </TableCell>
                                                    </>
                                                  ) : (
                                                    <>
                                                      {rtx[0] === "productivityCumulative" ? (
                                                        <>
                                                          <TableCell>
                                                            {englishValue(rtx[0])}
                                                          </TableCell>
                                                          <TableCell
                                                            className={
                                                              transtionYear >= 1
                                                                ? transtionYear == 1
                                                                  ? " borderOutput  tableBoldValue"
                                                                  : "  tableBoldValue"
                                                                : ""
                                                            }
                                                          >
                                                            {rtx[1].productivityCumulativeForY1}%
                                                          </TableCell>
                                                          <TableCell
                                                            className={
                                                              transtionYear >= 2
                                                                ? transtionYear == 2
                                                                  ? " borderOutput  tableBoldValue"
                                                                  : "  tableBoldValue"
                                                                : ""
                                                            }
                                                          >
                                                            {rtx[1].productivityCumulativeForY2}%
                                                          </TableCell>
                                                          <TableCell
                                                            className={
                                                              transtionYear >= 3
                                                                ? transtionYear == 3
                                                                  ? " borderOutput  tableBoldValue"
                                                                  : "  tableBoldValue"
                                                                : ""
                                                            }
                                                          >
                                                            {rtx[1].productivityCumulativeForY3}%
                                                          </TableCell>
                                                          <TableCell
                                                            className={
                                                              transtionYear >= 4
                                                                ? transtionYear == 4
                                                                  ? " borderOutput  tableBoldValue"
                                                                  : "  tableBoldValue"
                                                                : ""
                                                            }
                                                          >
                                                            {rtx[1].productivityCumulativeForY4}%
                                                          </TableCell>
                                                          <TableCell
                                                            className={
                                                              transtionYear >= 5
                                                                ? transtionYear == 5
                                                                  ? " borderOutput  tableBoldValue"
                                                                  : "  tableBoldValue"
                                                                : ""
                                                            }
                                                          >
                                                            {rtx[1].productivityCumulativeForY5}%
                                                          </TableCell>
                                                          <TableCell
                                                            className={
                                                              transtionYear >= 6
                                                                ? transtionYear == 6
                                                                  ? " borderOutput  tableBoldValue"
                                                                  : "  tableBoldValue"
                                                                : ""
                                                            }
                                                          >
                                                            {rtx[1].productivityCumulativeForY6}%
                                                          </TableCell>
                                                          <TableCell
                                                            className={
                                                              transtionYear >= 7
                                                                ? transtionYear == 7
                                                                  ? " borderOutput  tableBoldValue"
                                                                  : "  tableBoldValue"
                                                                : ""
                                                            }
                                                          >
                                                            {rtx[1].productivityCumulativeForY7}%
                                                          </TableCell>
                                                        </>
                                                      ) : (
                                                        <>
                                                          {rtx[0] ===
                                                            "productivityYearlyAppliedPercentage" ? (
                                                            <>
                                                              <TableCell>
                                                                {englishValue(rtx[0])}
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 1
                                                                    ? transtionYear == 1
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {
                                                                  rtx[1]
                                                                    .productivityYearlyAppliedPercentageForY1
                                                                }
                                                                %
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 2
                                                                    ? transtionYear == 2
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {
                                                                  rtx[1]
                                                                    .productivityYearlyAppliedPercentageForY2
                                                                }
                                                                %
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 3
                                                                    ? transtionYear == 3
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {
                                                                  rtx[1]
                                                                    .productivityYearlyAppliedPercentageForY3
                                                                }
                                                                %
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 4
                                                                    ? transtionYear == 4
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {
                                                                  rtx[1]
                                                                    .productivityYearlyAppliedPercentageForY4
                                                                }
                                                                %
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 5
                                                                    ? transtionYear == 5
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {" "}
                                                                {
                                                                  rtx[1]
                                                                    .productivityYearlyAppliedPercentageForY5
                                                                }
                                                                %
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 6
                                                                    ? transtionYear == 6
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {
                                                                  rtx[1]
                                                                    .productivityYearlyAppliedPercentageForY6
                                                                }
                                                                %
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 7
                                                                    ? transtionYear == 7
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {
                                                                  rtx[1]
                                                                    .productivityYearlyAppliedPercentageForY7
                                                                }
                                                                %
                                                              </TableCell>
                                                            </>
                                                          ) : (
                                                            <>
                                                              <TableCell>
                                                                {englishValue(rtx[0])}
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 1
                                                                    ? transtionYear == 1
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {
                                                                  rtx[1]
                                                                    .postProductivityMonthlyFTEsForY1
                                                                }
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 2
                                                                    ? transtionYear == 2
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {
                                                                  rtx[1]
                                                                    .postProductivityMonthlyFTEsForY2
                                                                }
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 3
                                                                    ? transtionYear == 3
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {
                                                                  rtx[1]
                                                                    .postProductivityMonthlyFTEsForY3
                                                                }
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 4
                                                                    ? transtionYear == 4
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {
                                                                  rtx[1]
                                                                    .postProductivityMonthlyFTEsForY4
                                                                }
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 5
                                                                    ? transtionYear == 5
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {
                                                                  rtx[1]
                                                                    .postProductivityMonthlyFTEsForY5
                                                                }
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 6
                                                                    ? transtionYear == 6
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {
                                                                  rtx[1]
                                                                    .postProductivityMonthlyFTEsForY6
                                                                }
                                                              </TableCell>
                                                              <TableCell
                                                                className={
                                                                  transtionYear >= 7
                                                                    ? transtionYear == 7
                                                                      ? " borderOutput  tableBoldValue"
                                                                      : "  tableBoldValue"
                                                                    : ""
                                                                }
                                                              >
                                                                {
                                                                  rtx[1]
                                                                    .postProductivityMonthlyFTEsForY7
                                                                }
                                                              </TableCell>
                                                            </>
                                                          )}
                                                        </>
                                                      )}
                                                    </>
                                                  )}
                                                </>
                                              )}
                                          </>
                                        )}
                                    </>
                                  )}
                                </>
                              )}
                            </>}

                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </DataTable>
            </div>

            <SevenyearOutput transtionYear={transtionYear}></SevenyearOutput>
            {/* JIRA 654  */}
            {/* displaying Effort Distribution by Technology */}
            {props.userOutputData.defaultOutputData.response.finalOutputs
              .outputEffort.effortDistributionByTechnology ? (
              <EffortDistByTech></EffortDistByTech>
            ) : (
              ""
            )}
            {/* dipalying last 2 tables of YEAR 1 effort Output */}
            <div className="mainOutputs">
              <DataTable rows={monthlyinfo} headers={[1, 2, 4, 5, 6, 7]}>
                {({ rows, headers, getHeaderProps }) => (
                  <TableContainer
                    title={englishValue("YearEffortOutput")}
                    description={englishValue("EffortFTE(PerMonth)")}
                  >
                    <Table>
                      <TableHead>
                        <TableRow>
                          {headerData1.map((header) => (
                            <TableHeader>{header}</TableHeader>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {monthlyinfo.map((rtx) => (
                          <TableRow>
                            {rtx[0] ===
                              "distributionPercentageOfTotalFTEsInScope" ? (
                              <>
                                <TableCell>{englishValue(rtx[0])}</TableCell>
                                <TableCell>{`${rtx[1].simple}%`}</TableCell>
                                <TableCell>{`${rtx[1].moderate}%`}</TableCell>
                                <TableCell>{`${rtx[1].complex}%`}</TableCell>
                                <TableCell>{rtx[1].day1FTEs}</TableCell>
                                <TableCell>{rtx[1].endOfY1FTEs}</TableCell>
                              </>
                            ) : (
                              <>
                                {rtx[0] === "totalFTEsInScope" ||
                                  rtx[0] ===
                                  "totalFTEsInScopeIncludingGovernanceUplift" ||
                                  rtx[0] === "governanceUpliftFTEs" ? (
                                  <>
                                    <TableCell className="tableBold">
                                      {englishValue(rtx[0])}
                                    </TableCell>
                                    <TableCell className="tableBold">
                                      {rtx[1].simple}
                                    </TableCell>
                                    <TableCell className="tableBold">
                                      {rtx[1].moderate}
                                    </TableCell>
                                    <TableCell className="tableBold">
                                      {rtx[1].complex}
                                    </TableCell>
                                    <TableCell className="tableBold">
                                      {rtx[1].day1FTEs}
                                    </TableCell>
                                    <TableCell className="tableBold">
                                      {rtx[1].endOfY1FTEs}
                                    </TableCell>
                                  </>
                                ) : (
                                  <>
                                    <TableCell>
                                      {englishValue(rtx[0])}
                                    </TableCell>
                                    <TableCell>{rtx[1].simple}</TableCell>
                                    <TableCell>{rtx[1].moderate}</TableCell>
                                    <TableCell>{rtx[1].complex}</TableCell>
                                    <TableCell>{rtx[1].day1FTEs}</TableCell>
                                    <TableCell>{rtx[1].endOfY1FTEs}</TableCell>
                                  </>
                                )}
                              </>
                            )}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </DataTable>
            </div>
            <div className="mainOutputs">
              <DataTable
                rows={monthlyEffortsByFTEs}
                headers={[1, 2, 4, 5, 6, 7]}
              >
                {({ rows, headers, getHeaderProps }) => (
                  <TableContainer
                    title={englishValue("Year1Output")}
                    description={englishValue("Effort(permonth)")}
                  >
                    <Table>
                      <TableHead>
                        <TableRow>
                          {headerData2.map((header) => (
                            <TableHeader>{header}</TableHeader>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {monthlyHoursinfo.map((rtx) => (
                          <>
                            {rtx[0] === "totalHoursInScope" ||
                              rtx[0] ===
                              "totalHoursInScopeIncludingGovernanceUplift" ||
                              rtx[0] === "governanceUpliftHrs" ? (
                              <>
                                <TableRow>
                                  <TableCell className="tableBold">
                                    {englishValue(rtx[0])}
                                  </TableCell>
                                  <TableCell className="tableBold">
                                    {rtx[1].simple}
                                  </TableCell>
                                  <TableCell className="tableBold">
                                    {rtx[1].moderate}
                                  </TableCell>
                                  <TableCell className="tableBold">
                                    {rtx[1].complex}
                                  </TableCell>
                                  <TableCell className="tableBold">
                                    {rtx[1].day1Hrs}
                                  </TableCell>
                                  <TableCell className="tableBold">
                                    {rtx[1].endOfY1Hrs}
                                  </TableCell>
                                </TableRow>
                              </>
                            ) : (
                              <>
                                <TableRow>
                                  <TableCell>{englishValue(rtx[0])}</TableCell>
                                  <TableCell>{rtx[1].simple}</TableCell>
                                  <TableCell>{rtx[1].moderate}</TableCell>
                                  <TableCell>{rtx[1].complex}</TableCell>
                                  <TableCell>{rtx[1].day1Hrs}</TableCell>
                                  <TableCell>{rtx[1].endOfY1Hrs}</TableCell>
                                </TableRow>
                              </>
                            )}
                          </>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </DataTable>
            </div>

          </div>

        </div>
        <Feedback />
      </Content>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(MainOutput);