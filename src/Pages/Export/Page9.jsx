import React from 'react';
import * as html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PageHeader from './PageHeader';

class Page9 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let estimate = this.props.estimate;
//logic for the dropdown selection in Automation
    let getibmToolorclientTool = (value) => {
      return value != "clientTool" ? "IBM Platform" : "Client Tool License";
    }

    let getibmAoccTeamorclient = (value) => {
      return value != "client" ? "IBM AOCC Team" : "Client";
    }

    let getuiPathAndAAorbluePrism = (value) => {
      return value != "bluePrism" && value != "wdg" ? "UiPath + AA" : (value != "wdg" ? "BluePrism" : "WDG");
    }



    return (<div id="page9" className="page">
      <PageHeader {...this.props} />
      
      <table>
        <tr><td><span className="heading allcaps">{
          this.props.getStatusIconForSections(estimate.userInputs.automation.uiStatus, this.props.englishValue("Automation"))

        }</span></td></tr>
      </table>
      <table>
        {/* starting of Automation Effort */}

        <tr><span className="heading">{this.props.englishValue("_pdf_AutomationEffort")}</span></tr>
      </table>
      <hr>
      </hr>
      <table>
        <tr> {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.automation.automationEffortAndCostDistributionPercentage.uiStatus, this.props.englishValue("automationEffortAndCostDistributionPercentage"))}</tr>
      </table>
      <table>
        <tr className="borderBottom1px">

          <td>{this.props.englishValue("_pdf_Simple")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.automationEffortAndCostDistributionPercentage.simple)}</td>
          <td></td>
          <td>{this.props.englishValue("_pdf_Medium")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.automationEffortAndCostDistributionPercentage.medium)}</td>
          <td></td>
          <td>{this.props.englishValue("_pdf_Complex")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.automationEffortAndCostDistributionPercentage.complex)}</td>
          <td></td>
        </tr>
        <br />
      </table>
              {/*  Automation Effort End*/}

        {/* starting of Distribution of One time cost for Cognitive Agent Assist & ECA Tools */}


      <table>
        <tr className="borderBottom1px">

          <td>{this.props.englishValue("rpaToolLicenseCostClientVsIBMDefaultSelection")}</td>
          <td>{getibmToolorclientTool(estimate.userInputs.automation.rpaToolLicenseCostClientVsIBMDefaultSelection)}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("monitoringOfAutomationBOTsClientVsIBMDefaultSelection1")}</td>
          <td>{getibmAoccTeamorclient(estimate.userInputs.automation.monitoringOfAutomationBOTsClientVsIBMDefaultSelection)}</td>
        </tr>
        <br />
      </table>
              {/* Distribution of One time cost for Cognitive Agent Assist & ECA Tools End */}

        {/* starting of Automation Tools */}

      <table>
        <tr><span className="heading">{this.props.englishValue("DistributionOnetime")}</span></tr>
      </table>
      <hr>
      </hr>
      <table>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("AnnualPlatform")}</td>
          <td>{this.props.currencyCoverter(estimate.userInputs.additionalCostInfo.costForCognitiveAgentAssist_USD)}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("OneAutomationTeam")}</td>
          <td>{this.props.currencyCoverter(estimate.userInputs.additionalCostInfo.costForECATools_USD)}</td>
        </tr>
        <br />
      </table>
              {/*  Automation Tools End*/}
                      {/* starting of Bot Monitoring coverage (AOCC coverage) */}


      <table>
        <tr></tr>
        <tr></tr>
      </table>
      {/* jira ticket CMIWET-653  
Automation tools ahas been updated as per the new design updatd (remved dropdown section)
*/}
      <table>
        <tr><span className="heading">{this.props.englishValue("AutomationTools")}</span></tr>
      </table>
      <hr>
      </hr>
      <table>
        <tr className="borderBottom1px">
          <td>{this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.automation.combinationOfAutomationToolsUsed.uiStatus, this.props.englishValue("Combinationautomationtools_PDF"))}</td>
          {/* <td>{getuiPathAndAAorbluePrism(estimate.userInputs.automation.combinationOfAutomationToolsUsedDefaultSelection)}</td> */}
        </tr>



        <tr className="borderBottom1px">
          <td>{this.props.englishValue("Blueprism(BP)")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.combinationOfAutomationToolsUsed.bluePrismPercentage)}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>{this.props.englishValue("WDG")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.combinationOfAutomationToolsUsed.wdgPercentage)}</td>
        </tr>


        <tr className="borderBottom1px">
          <td>{this.props.englishValue("UiPathAA_PDF")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.combinationOfAutomationToolsUsed.uiPathPercentage)}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("AutomationAnywhere(AA)")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.combinationOfAutomationToolsUsed.automationAnywherePercentage)}</td>
        </tr>

      </table>




      {/* <table>
        <tr className="borderBottom1px">
          <td>{this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.automation.combinationOfAutomationToolsUsed.uiStatus, this.props.englishValue("Combinationautomationtools"))}</td>
          <td>{getuiPathAndAAorbluePrism(estimate.userInputs.automation.combinationOfAutomationToolsUsedDefaultSelection)}</td>
        </tr>
        {estimate.userInputs.automation.combinationOfAutomationToolsUsedDefaultSelection == "uiPathAndAA" ?
          <>
            <tr className="borderBottom1px">
              <td>{this.props.englishValue("UiPathAA")}</td>
              <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.combinationOfAutomationToolsUsed.uiPathPercentage)}</td>
            </tr>
            <tr className="borderBottom1px">
              <td>{this.props.englishValue("AutomationAnywhere(AA)")}</td>
              <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.combinationOfAutomationToolsUsed.automationAnywherePercentage)}</td>
            </tr></> :
          <>
            {estimate.userInputs.automation.combinationOfAutomationToolsUsedDefaultSelection == "bluePrism" ?
              <>
                <tr className="borderBottom1px">
                  <td>{this.props.englishValue("Blueprism(BP)")}</td>
                  <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.combinationOfAutomationToolsUsed.bluePrismPercentage)}</td>
                </tr>
              </> :
              <>
                <tr className="borderBottom1px">
                  <td>{this.props.englishValue("WDG")}</td>
                  <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.combinationOfAutomationToolsUsed.wdgPercentage)}</td>
                </tr>
              </>
            }
          </>
        }
      </table> */}



      <table>
        <tr></tr>
        <tr></tr>
      </table>

      <br />
      <br />
      {/* Start Bot Monitoring coverage (AOCC coverage) */}

      <table>
        <tr><span className="heading">{this.props.englishValue("BotMonitoring(AOCC coverage)")}</span></tr>
      </table>
      <hr>
      </hr>

      <table>

        <tr className="borderBottom1px">
          {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.automation.monitoringCoverageOfAutomationBOTsAoccCoverage.uiStatus, this.props.englishValue("monitoringCoverageOfAutomationBOTsAoccCoverage"))}
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("Bronze")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.monitoringCoverageOfAutomationBOTsAoccCoverage.bronzeMonitoringPercentage)}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("Silver")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.monitoringCoverageOfAutomationBOTsAoccCoverage.silverMonitoringPercentage)}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("Gold")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.monitoringCoverageOfAutomationBOTsAoccCoverage.goldMonitoringPercentage)}</td>
        </tr>
      </table>
      {/*  Bot Monitoring coverage (AOCC coverage) End */}

      {/* Start DW Scope on perform Activities */}

      <table>
        <tr></tr>
        <tr></tr>
      </table>

      <br />
      <br />

      <table>
        <tr className="heading borderBottom1px">
          {this.props.englishValue("DWScopeActivities")}
        </tr>

        <tr className="borderBottom1px">
          <td>{this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.automation.digitalWorkerScopeOnPerformActivities.digitalPMOScope.uiStatus, this.props.englishValue("digitalPMOScope"))}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.digitalWorkerScopeOnPerformActivities.digitalPMOScope.digitalPMOScopePercentage)}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.automation.digitalWorkerScopeOnPerformActivities.digitalQAScope.uiStatus, this.props.englishValue("digitalQAScope"))}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.digitalWorkerScopeOnPerformActivities.digitalQAScope.digitalQAScopePercentage)}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.automation.digitalWorkerScopeOnPerformActivities.ticketManagerScope.uiStatus, this.props.englishValue("ticketManagerScope"))}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.digitalWorkerScopeOnPerformActivities.ticketManagerScope.ticketManagerScopePercentage)}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.automation.digitalWorkerScopeOnPerformActivities.jobMonitorScope.uiStatus, this.props.englishValue("jobMonitorScope"))}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.digitalWorkerScopeOnPerformActivities.jobMonitorScope.jobMonitorScopePercentage)}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.automation.digitalWorkerScopeOnPerformActivities.ansibleMoniringScope.uiStatus, this.props.englishValue("ansibleMoniringScope"))}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.automation.digitalWorkerScopeOnPerformActivities.ansibleMoniringScope.ansibleMoniringScopePercentage)}</td>
        </tr>
      </table>
            {/*  DW Scope on perform Activities End*/}


    </div>
    )
  }
}

export default Page9