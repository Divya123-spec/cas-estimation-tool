import React from 'react';
import * as html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PageHeader from './PageHeader';
{/* Jira- 711--UI Task- AIOPS UI update on PDF */ }

class Page5_A extends React.Component {
  constructor(props) {
    super(props)
  }
  //Function to select the dropdown for the Aipos Section
  render() {
    let getibmToolorclientTool = (value) => {
      return value != "clientTool" ? "Instana SaaS" : "Client Tool";
    }

    let getibmAoccTeamorclient = (value) => {
      return value != "clientTool" ? "Turbonomics" : "Client Tool";
    }
    let estimate = this.props.estimate;


    return (<div id="page5" className="page">
      <PageHeader {...this.props} />
      {/* Start Aipos */}
      <table>
        <tr><td><span className="heading">{this.props.englishValue("AIOps_PDF")}</span></td></tr>
        <tr className="trHeader">
          <td></td>
          <td>{this.props.englishValue("_pdf_S")}</td>
          <td>{this.props.englishValue("_pdf_M")}</td>
          <td>{this.props.englishValue("_pdf_C")}</td>
          <td>{this.props.englishValue("_pdf_T")}</td>
          <td>{this.props.englishValue("Range")}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>
            {this.props.getOrangeOrGreenTickWithMessage4(estimate.userInputs.general.aiOpsAppPercentageOfTotalApps.uiStatus, this.props.englishValue("aiOpsAppPercentageOfTotalApps_PDF"))}
          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.aiOpsAppPercentageOfTotalApps.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.aiOpsAppPercentageOfTotalApps.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.aiOpsAppPercentageOfTotalApps.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.aiOpsAppPercentageOfTotalApps.total)}</td>
          <td>{estimate.userInputs.general.aiOpsAppPercentageOfTotalApps.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("aiOpsAppCountDistribution_PDF")} </td>
          <td>{estimate.userInputs.general.aiOpsAppCountDistribution.simple}</td>
          <td>{estimate.userInputs.general.aiOpsAppCountDistribution.medium}</td>
          <td>{estimate.userInputs.general.aiOpsAppCountDistribution.complex}</td>
          <td>{estimate.userInputs.general.aiOpsAppCountDistribution.total}</td>
          <td>{estimate.userInputs.general.aiOpsAppCountDistribution.range}</td>
        </tr>
      </table>
      <table>
        <tr className="borderBottom1px">

          <td>{this.props.englishValue("aiOpsObservabilityToolDefaultSelection_PDF")}</td>
          <td>{getibmToolorclientTool(estimate.userInputs.general.aiOpsObservabilityToolDefaultSelection)}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("aiOpsArmToolDefaultSelection_PDF")}</td>
          <td>{getibmAoccTeamorclient(estimate.userInputs.general.aiOpsArmToolDefaultSelection)}</td>
        </tr>
        <br />
      </table>
      {/* Aipos End */}


    </div>)
  }
}
export default Page5_A
