import React from 'react';
import * as html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PageHeader from './PageHeader';

class Page10 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let estimate = this.props.estimate;
    return (<div id="page10" className="page">
      <PageHeader {...this.props} />
      {/* Starting Testing Table */}
      <table>
        <tr><td><span className="heading allcaps">{
          this.props.getStatusIconForSections(estimate.userInputs.testing.uiStatus, this.props.englishValue("Testing"))
        }</span></td></tr>

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
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.testing.testingFTEDistributionPercentage.uiStatus, this.props.englishValue("testingFTEDistributionPercentage"))}
          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.testing.testingFTEDistributionPercentage.simple)} </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.testing.testingFTEDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.testing.testingFTEDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.testing.testingFTEDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.testing.testingFTEDistributionPercentage.range}%</td>
        </tr>

        <tr className="borderBottom1px"><td>{this.props.englishValue("testingFTECountDistribution")}</td>
          <td>{estimate.userInputs.testing.testingFTECountDistribution.simple} </td>
          <td>{estimate.userInputs.testing.testingFTECountDistribution.medium} </td>
          <td>{estimate.userInputs.testing.testingFTECountDistribution.complex} </td>
          <td>{estimate.userInputs.testing.testingFTECountDistribution.total} </td>
          <td>{estimate.userInputs.testing.testingFTECountDistribution.range} </td>
        </tr>
        <tr className="borderBottom1px"><td>
          {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.testing.testingAdditionalFTECountDistribution.uiStatus, this.props.englishValue("testingAdditionalFTECountDistribution"))}
        </td>
          <td>{estimate.userInputs.testing.testingAdditionalFTECountDistribution.simple} </td>
          <td>{estimate.userInputs.testing.testingAdditionalFTECountDistribution.medium} </td>
          <td>{estimate.userInputs.testing.testingAdditionalFTECountDistribution.complex} </td>
          <td>{estimate.userInputs.testing.testingAdditionalFTECountDistribution.total} </td>
          <td>{estimate.userInputs.testing.testingAdditionalFTECountDistribution.range} </td>
        </tr>

        <tr className="borderBottom1px"><td>
          {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.testing.totalTestFTEInSolutionCountDistribution.uiStatus, this.props.englishValue("totalTestFTEInSolutionCountDistribution"))}
        </td>
          <td>{estimate.userInputs.testing.totalTestFTEInSolutionCountDistribution.simple} </td>
          <td>{estimate.userInputs.testing.totalTestFTEInSolutionCountDistribution.medium} </td>
          <td>{estimate.userInputs.testing.totalTestFTEInSolutionCountDistribution.complex} </td>
          <td>{estimate.userInputs.testing.totalTestFTEInSolutionCountDistribution.total} </td>
          <td>{estimate.userInputs.testing.totalTestFTEInSolutionCountDistribution.range} </td>
        </tr>
      </table>
            {/*  Testing Table End */}

      {/* Starting Security Table */}

      <table className="securityTable">
        <tr><td><span className="heading allcaps">{
          this.props.getStatusIconForSections(estimate.userInputs.security.uiStatus, this.props.englishValue("Security"))
        }</span></td></tr>

        <tr className="trHeader">

          <td></td>          <td>{this.props.englishValue("_pdf_S")}</td>
          <td>{this.props.englishValue("_pdf_M")}</td>
          <td>{this.props.englishValue("_pdf_C")}</td>
          <td>{this.props.englishValue("_pdf_T")}</td>
          <td>{this.props.englishValue("Range")}</td>

        </tr>
        <tr className="borderBottom1px">             <td>
          {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.security.appSecurityScopeDistributionPercentage.uiStatus, this.props.englishValue("appSecurityScopeDistributionPercentage"))}
        </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.security.appSecurityScopeDistributionPercentage.simple)} </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.security.appSecurityScopeDistributionPercentage.medium)} </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.security.appSecurityScopeDistributionPercentage.complex)} </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.security.appSecurityScopeDistributionPercentage.total)} </td>
          <td>{estimate.userInputs.security.appSecurityScopeDistributionPercentage.range} </td>

        </tr>
        <tr className="borderBottom1px">             <td>{this.props.englishValue("appCountSecurityScopeBasedDistribution")}</td>

          <td>{estimate.userInputs.security.appCountSecurityScopeBasedDistribution.simple} </td>
          <td>{estimate.userInputs.security.appCountSecurityScopeBasedDistribution.medium} </td>
          <td>{estimate.userInputs.security.appCountSecurityScopeBasedDistribution.complex} </td>
          <td>{estimate.userInputs.security.appCountSecurityScopeBasedDistribution.total} </td>
          <td>{estimate.userInputs.security.appCountSecurityScopeBasedDistribution.range} </td>
        </tr>
        <tr className="borderBottom1px">             <td>{this.props.englishValue("numberOfScansPlannedPerYearPerApp")}</td>

          <td>{estimate.userInputs.security.numberOfScansPlannedPerYearPerApp.simple} </td>
          <td>{estimate.userInputs.security.numberOfScansPlannedPerYearPerApp.medium} </td>
          <td>{estimate.userInputs.security.numberOfScansPlannedPerYearPerApp.complex} </td>
          <td>{estimate.userInputs.security.numberOfScansPlannedPerYearPerApp.total} </td>
          <td>{estimate.userInputs.security.numberOfScansPlannedPerYearPerApp.range} </td>
        </tr>
        <tr className="borderBottom1px">             <td>
          {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.security.remediationTicketsDistributionPercentage.uiStatus, this.props.englishValue("remediationTicketsDistributionPercentage"))}
        </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.security.remediationTicketsDistributionPercentage.simple)} </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.security.remediationTicketsDistributionPercentage.medium)} </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.security.remediationTicketsDistributionPercentage.complex)} </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.security.remediationTicketsDistributionPercentage.total)} </td>
          <td>{estimate.userInputs.security.remediationTicketsDistributionPercentage.range} </td>

        </tr>
        <tr className="borderBottom1px">             <td>{this.props.englishValue("remediationTicketsCountDistribution")}</td>

          <td>{estimate.userInputs.security.remediationTicketsCountDistribution.simple} </td>
          <td>{estimate.userInputs.security.remediationTicketsCountDistribution.medium} </td>
          <td>{estimate.userInputs.security.remediationTicketsCountDistribution.complex} </td>
          <td>{estimate.userInputs.security.remediationTicketsCountDistribution.total} </td>
          <td>{estimate.userInputs.security.remediationTicketsCountDistribution.range} </td>
        </tr>
        <tr className="borderBottom1px">             <td>{this.props.englishValue("remediationFTEDistribution")}</td>

          <td>{estimate.userInputs.security.remediationFTEDistribution.simple} </td>
          <td>{estimate.userInputs.security.remediationFTEDistribution.medium} </td>
          <td>{estimate.userInputs.security.remediationFTEDistribution.complex} </td>
          <td>{estimate.userInputs.security.remediationFTEDistribution.total} </td>
          <td>{estimate.userInputs.security.remediationFTEDistribution.range} </td>
        </tr>
      </table>
            {/*  Security Table End*/}

    </div>
    )
  }
}

export default Page10