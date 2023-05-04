import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions/ActionCreator";
import NavBar from '../../Components/CommonFuncs/NavBar/Navbar';
import HeaderInputs from '../OpportunityInputsParameter/HeaderInputs';
import './MainOutput.scss';
import { Content, DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TooltipIcon } from 'carbon-components-react';
import Calculatemodal from '../../Pages/OpportunityInputsParameter/Calculatemodal'

import { englishValue } from '../../Utils/CommonFunc';
import LoaderApp from '../LoaderApp';
import SaveModal from '../OpportunityInputsParameter/SaveModal';
import DataTableOutput from './DataTableOutput';
import DataTableROM from './DataTableROM';
import DataTableROM2 from './DataTableROM2';
import DataTableROM3 from './DataTableROM3';
import DataTableROM4 from './DataTableROM4';
import DataTableROM5 from './DataTableROM5';
import DataTableROM6 from './DataTableROM6';
import DataTableROM7 from './DataTableROM7';
import { Download16 } from '@carbon/icons-react';
import inputService from '../../services/InputService';
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
const arrCoversionOrder = (originalArr, orderArr) => {
  let newOrderedArr = [];
  orderArr.forEach((ele) => {
    originalArr.forEach((e) => {
      if (ele == e[0]) {
        newOrderedArr.push(e)
      }
    })
  })
  return newOrderedArr;
}

//function for Year 1 ROM cost application
const YearRomOutputMain = (props) => {
  const headerMain = [englishValue('ApplicationComplexity'), englishValue('Simple'), englishValue('Moderate'), englishValue('Complex'), englishValue('TOTALS'), englishValue('Average')];
  const header2 = [englishValue('Range'), englishValue('RangeLow'), englishValue('RangeHigh'), englishValue('RangeLow'), englishValue('RangeHigh'), englishValue('RangeLow'), englishValue('RangeHigh'), englishValue('LOW'), englishValue('HIGH'), ""];
  const header3 = ['', englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), "", "", englishValue('OTC'), englishValue('MRC')];

  const headerMain_2 = [englishValue('ApplicationComplexity'), englishValue('Simple'), englishValue('Moderate'), englishValue('Complex'), englishValue('TOTALS'), englishValue('Average'), englishValue('Dist')];


  const headerMain_3 = [englishValue('ApplicationComplexity'), englishValue('Simple'), englishValue('Moderate'), englishValue('Complex'), englishValue('TOTALS'), englishValue('Dist')];
  const monthlyheader_4 = [englishValue('Range'), englishValue('RangeLow'), englishValue('RangeHigh'), englishValue('RangeLow'), englishValue('RangeHigh'), englishValue('RangeLow'), englishValue('RangeHigh'), englishValue('LOW'), englishValue('HIGH'), englishValue('HIGH')];
  const monthlyheader_5 = ['', englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), "", "", ""];

  let usertransitionDeal = props.userInpuData.defaultInputData.response.estimate.userInputs.basicInfo.transitionDurationInMonths;


  const header_4 = [englishValue('Range'), englishValue('RangeLow'), englishValue('RangeHigh'), englishValue('RangeLow'), englishValue('RangeHigh'), englishValue('RangeLow'), englishValue('RangeHigh'), englishValue('LOW'), englishValue('HIGH'), "", englishValue('HIGH')];
  const header_5 = ['', englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), englishValue('OTC'), englishValue('MRC'), "", "", englishValue('OTC'), englishValue('MRC'), ""];

  const header6 = ['', englishValue('OTC'), englishValue('ARC'), englishValue('OTC'), englishValue('ARC'), englishValue('OTC'), englishValue('ARC'), englishValue('OTC'), englishValue('ARC'), englishValue('OTC'), englishValue('ARC'), englishValue('OTC'), englishValue('ARC'), "", "", englishValue('OTC'), englishValue('ARC')];

  let securityCost = (props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost);
  let testingCost = (props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost);
  let automationCost = (props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost);
  let coreApplicationSupportCost = (props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost);
  let ApplicationOperationscost = (props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.appOpsCost);


  let totalCostsForAllApplicationsForY1 = (props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1);
  let costPerApplicationCategoryMonthlyForY1 = (props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1);
  let costPerApplicationCategoryYearlyForY1 = (props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1);


// downloading the excel coming from API
  const handlerExport = () => {
    let estimateId = props.userInpuData.defaultInputData.response.estimate['_id']
    let filenme = props.userInpuData.defaultInputData.response.estimate.estimationTitle;
    inputService.exportDataFetchROM(estimateId, `${filenme}_ROMCostSummary`);
  }



  return (
    <div className="inputName">

      <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />

      <NavBar {...props}
        userNavBar={props.userInpuData.defaultInputData['response']['estimate']}
        title='YearROMCost'></NavBar>
      <Content>
        <HeaderInputs {...props} title='output'
          userData1={props.userInpuData.defaultInputData['response']['estimate']}
        > </HeaderInputs>
        {props.userinputStatusData.calculateModal ? <Calculatemodal {...props} /> :
          ''}
        {props.userinputStatusData.saveModal ? <SaveModal {...props} /> : ''}
        <div className='outputMainHead1'>
          <div className='outputMain'>
            <div className='mainOutputs'>
              <div className={props.userinputStatusData.Export ? 'OutputROMData' : 'OutputROMDataDisabled'}>
                <p className='mainheads'>E2E Application Support Cost Summary for 1 Year (ROM Costs)</p>
                {/* Label and icon both should be clikced JIRA */}
                {props.userinputStatusData.Export ?
                  <>
                    <TooltipIcon className="DownloadBtn" tooltipText='Download Cost Summary Data as Excel'>
                      <a onClick={props.userinputStatusData.Export ? handlerExport : ''} ><span>Download Cost Summary</span>
                        <Download16 />
                      </a>
                    </TooltipIcon>
                  </> : <a onClick={props.userinputStatusData.Export ? handlerExport : ''} ><span>Download Cost Summary</span>
                    <Download16 />
                  </a>}
              </div>
              {props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal ?
                <DataTableROM2
                  title={englishValue('totalCostsForAllApplicationsForY1')}
                  description=''
                  headerMain_2={headerMain_2}
                  header_4={header_4}
                  header_5={header_5}
                  outputYearOneROMCostSecurity=
                  {arrCoversionOrder(Object.entries(totalCostsForAllApplicationsForY1),
                    ["coreApplicationSupportCostTotal",
                      "appOpsCostTotal",
                      "automationCostTotal",
                      "testingCostTotal", "securityCostTotal",
                      "totalCostTotal"
                    ])}
                ></DataTableROM2> :
                <DataTableROM2
                  title={englishValue('totalCostsForAllApplicationsForY1')}
                  description=''
                  headerMain_2={headerMain_2}
                  header_4={header_4}
                  header_5={header_5}
                  outputYearOneROMCostSecurity=
                  {arrCoversionOrder(Object.entries(totalCostsForAllApplicationsForY1),
                    ["coreApplicationSupportCostTotal",
                      "automationCostTotal",
                      "testingCostTotal",
                      "securityCostTotal",
                      "totalCostTotal"
                    ])}
                ></DataTableROM2>

              }

              {props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly ?

                <DataTableROM2
                  title={englishValue('costPerApplicationCategoryYearlyForY1')}
                  description=''
                  headerMain_2={headerMain_2}
                  header_4={header_4}
                  header_5={header_5}
                  outputYearOneROMCostSecurity=
                  {arrCoversionOrder(Object.entries(costPerApplicationCategoryYearlyForY1),
                    ["coreApplicationSupportCostYearly",
                      "appOpsCostYearly",
                      "automationCostYearly",
                      "testingCostYearly",
                      "securityCostYearly",
                      "totalCostYearly"
                    ])}
                ></DataTableROM2>
                :
                <DataTableROM2
                  title={englishValue('costPerApplicationCategoryYearlyForY1')}
                  description=''
                  headerMain_2={headerMain_2}
                  header_4={header_4}
                  header_5={header_5}
                  outputYearOneROMCostSecurity=
                  {arrCoversionOrder(Object.entries(costPerApplicationCategoryYearlyForY1),
                    ["coreApplicationSupportCostYearly",
                      "automationCostYearly",
                      "testingCostYearly",
                      "securityCostYearly",
                      "totalCostYearly"
                    ])}
                ></DataTableROM2>
              }

              {props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly ?

                <DataTableROM6
                  title={englishValue('costPerApplicationCategoryMonthlyForY1')}
                  description=''
                  headerMain_3={headerMain_3}
                  monthlyheader_4={monthlyheader_4}
                  monthlyheader_5={monthlyheader_5}
                  outputYearOneROMCostSecurity=
                  {arrCoversionOrder(Object.entries(costPerApplicationCategoryMonthlyForY1),
                    ["coreApplicationSupportCostMonthly",
                      "appOpsCostMonthly",
                      "automationCostMonthly",
                      "testingCostMonthly",
                      "securityCostMonthly",
                      "totalCostMonthly"
                    ])}
                ></DataTableROM6>

                :
                <DataTableROM6
                  title={englishValue('costPerApplicationCategoryMonthlyForY1')}
                  description=''
                  headerMain_3={headerMain_3}
                  monthlyheader_4={monthlyheader_4}
                  monthlyheader_5={monthlyheader_5}
                  outputYearOneROMCostSecurity=
                  {arrCoversionOrder(Object.entries(costPerApplicationCategoryMonthlyForY1),
                    ["coreApplicationSupportCostMonthly",
                      "automationCostMonthly",
                      "testingCostMonthly",
                      "securityCostMonthly",
                      "totalCostMonthly"
                    ])}
                ></DataTableROM6>
              }
            </div>
          </div>
        </div>
        <div className='outputMainHead1'>
          <div className='outputMain'>
            <div className='mainOutputs'>
              <p className='mainheads'>Details of cost for each component of the integrated offering</p>

              <DataTableROM5
                title={englishValue('COREAPPLICATIONSUPPORT')}
                description=''
                headerMain={headerMain}
                header2={header2}
                header3={header3}
                usertransitionDeal={usertransitionDeal}
                outputYearOneROMCostSecurity={arrCoversionOrder(Object.entries(coreApplicationSupportCost),
                  ["rangeFTEs",
                    "bandMix",
                    "costPerHour", "labourCostPerMonthPerMRC",
                    "labourCostPerSteadyStateInY1", "transitionNonLabourCosts",
                    "transitionLabourCosts", "nonLabourCosts", "subTotalCostsY1",
                    "costProductivityFPL", "costProductivityAQL", "costProductivityAgileCoach", "totalCostsY1",
                    "perApplicationCostPerYear", "perApplicationCostPerMonth"
                  ])}
              ></DataTableROM5>

              {/* Jira- 689--UI Task- AIOPS UI update ROM Cost Output */}

              {(props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.appOpsCost) ?
                <DataTableROM7
                  title={englishValue('ApplicationOperations')}
                  description=''
                  headerMain={headerMain}
                  header2={header2}
                  header3={header3}
                  outputYearOneROMCostSecurity={arrCoversionOrder(Object.entries(ApplicationOperationscost),
                    [
                      "costAIOpsObservability",
                      "costAIOpsARM",
                      "costSubTotal",
                      "costAnnual",
                      "totalCostsY1",
                      "perApplicationCostPerYear",
                      "perApplicationCostPerMonth"
                    ])}
                ></DataTableROM7>
                : ''}

              <DataTableROM
                title={englishValue('AUTOMATION')}
                description=''
                headerMain={headerMain}
                header2={header2}
                header3={header6}
                outputYearOneROMCostSecurity={arrCoversionOrder(Object.entries(automationCost), ["numberOfUCsFromAutomationEstimationTool", "costRpaAoccLicense",
                  "costCognitiveAgentAssist", "costECATools", "costDigitalPMO", "costDigitalQA",
                  "costDigitalTicketManager", "costDigitalJobMonitor", "costSubTotal", "annualRecurringCostForY1", "costsForY1", "perApplicationCostPerYear",
                  "perApplicationCostPerMonth"])}
              ></DataTableROM>


              <DataTableROM3
                title={englishValue('TESTING')}
                description=''
                headerMain={headerMain}
                header2={header2}
                header3={header3}
                outputYearOneROMCostSecurity={arrCoversionOrder(Object.entries(testingCost),
                  ["igniteSetupCost",
                    "igniteMaintenanceCost",
                    "igniteLicenseCost", "monthlyRecurringCostForY1",
                    "costsForY1", "perApplicationCostPerYear",
                    "perApplicationCostPerMonth"
                  ])}
              ></DataTableROM3>
              <DataTableROM
                title={englishValue('SECURITY')}
                description=''
                headerMain={headerMain}
                header2={header2}
                header3={header6}
                outputYearOneROMCostSecurity={arrCoversionOrder(Object.entries(securityCost),
                  ["penTestPriceAnnual",
                    "devOpsIntegrationPrice",
                    "vulnerabilityScanPrice", "consultingPrice", "totalPriceY1", "perApplicationPricePerYear",
                    "perApplicationPricePerMonth"])}
              ></DataTableROM>
            </div>
          </div>
        </div>
        <Feedback/>
      </Content>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(YearRomOutputMain);