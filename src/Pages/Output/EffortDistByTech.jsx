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
} from "carbon-components-react";
import Calculatemodal from "../../Pages/OpportunityInputsParameter/Calculatemodal";

import { englishValue } from "../../Utils/CommonFunc";
import { Information12 } from "../../Components/CommonFuncs/Icons";
import { Information32 } from "@carbon/icons-react";
import LoaderApp from "../LoaderApp";
import SaveModal from "../OpportunityInputsParameter/SaveModal";
 
// this file code represents Effort Distribution by Technology section in Effort output in application
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
  };
}

const EffortDistByTech = (props) => {
  let effortDistributionByTechnology =
    props.userOutputData.defaultOutputData.response.finalOutputs.outputEffort
      .effortDistributionByTechnology;

  let effortDistribution = Object.entries(
    effortDistributionByTechnology.perMonthFTEsCalculationForEachTechnology
  );
  let effortDistributionTotal = effortDistributionByTechnology.totalFTEsPerYear;

  const headerData2 = [
    " ",
    " ",
    " ",
    " ",
    englishValue("y1"),
    englishValue("y2"),
    englishValue("y3"),
    englishValue("y4"),
    englishValue("y5"),
    englishValue("y6"),
    englishValue("y7"),
  ];

  const headerData1 = [
    englishValue("PrimaryTechnology"),
    englishValue("SecondaryTechnology"),
    englishValue("DistributionEffort"),
    englishValue("D1BaselineFTE"),
    englishValue("FTE/Month"),
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ];

  return (
    <div className="mainOutputs">
      <DataTable rows={effortDistribution} headers={headerData1}>
        {({ rows, headers, getHeaderProps }) => (
          <TableContainer
            title={englishValue("EffortDistributionbyTechnology")}
            // description={englishValue("Distributionofeffortbytechnology")}
          >
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map((header) => {
                    return <TableHeader>{header}</TableHeader>;
                  })}
                </TableRow>
                <TableRow>
                  {headerData2.map((header) => {
                    return (
                      <TableHeader className="headerdata2">
                        {header}
                      </TableHeader>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {effortDistribution.map((item) => (
                  <TableRow>
                    <TableCell>{item[1].workStream}</TableCell>
                    <TableCell>{item[1].subWorkStream}</TableCell>
                    <TableCell>{item[1].appDistributionPercentage}%</TableCell>
                    <TableCell>
                      {item[1].perMonthFTEsCalculation.dayOneBaselineFTEs}
                    </TableCell>
                    <TableCell>
                      {item[1].perMonthFTEsCalculation.perMonthFTEsForY1}
                    </TableCell>
                    <TableCell>
                      {item[1].perMonthFTEsCalculation.perMonthFTEsForY2}
                    </TableCell>
                    <TableCell>
                      {item[1].perMonthFTEsCalculation.perMonthFTEsForY3}
                    </TableCell>
                    <TableCell>
                      {item[1].perMonthFTEsCalculation.perMonthFTEsForY4}
                    </TableCell>
                    <TableCell>
                      {item[1].perMonthFTEsCalculation.perMonthFTEsForY5}
                    </TableCell>
                    <TableCell>
                      {item[1].perMonthFTEsCalculation.perMonthFTEsForY6}
                    </TableCell>
                    <TableCell>
                      {item[1].perMonthFTEsCalculation.perMonthFTEsForY7}
                    </TableCell>
                  </TableRow>
                ))}{" "}
              </TableBody>
              <TableBody className="TotalBold">
                <TableCell>{englishValue("TOTALFTEsperYear")}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  {effortDistributionTotal.dayOneBaselineFTEs}
                </TableCell>
                <TableCell>
                  {effortDistributionTotal.perMonthFTEsForY1}
                </TableCell>
                <TableCell>
                  {effortDistributionTotal.perMonthFTEsForY2}
                </TableCell>
                <TableCell>
                  {effortDistributionTotal.perMonthFTEsForY3}
                </TableCell>
                <TableCell>
                  {effortDistributionTotal.perMonthFTEsForY4}
                </TableCell>
                <TableCell>
                  {effortDistributionTotal.perMonthFTEsForY5}
                </TableCell>
                <TableCell>
                  {effortDistributionTotal.perMonthFTEsForY6}
                </TableCell>
                <TableCell>
                  {effortDistributionTotal.perMonthFTEsForY7}
                </TableCell>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(EffortDistByTech);
