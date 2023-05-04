import React from 'react';
import * as html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PageHeader from './PageHeader';

class Page8 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let estimate = this.props.estimate;
    return (<div id="page7" className="page">
      <PageHeader {...this.props} />
      <table className="hide">
        <tr ><td><span className="heading">{this.props.englishValue("YOY Tickets(Contd)")}</span></td></tr>
        <tr className="trHeader">
          <td></td>
          <td>{this.props.englishValue("Y1")}</td>
          <td>{this.props.englishValue("Y2")}</td>
          <td>{this.props.englishValue("Y3")}</td>
          <td>{this.props.englishValue("Y4")}</td>
          <td>{this.props.englishValue("Y5")}</td>
          <td>{this.props.englishValue("Y6")}</td>
          <td>{this.props.englishValue("Y7")}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("inScopeL1DistributionPercentage")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL1DistributionPercentage.y1)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL1DistributionPercentage.y2)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL1DistributionPercentage.y3)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL1DistributionPercentage.y4)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL1DistributionPercentage.y5)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL1DistributionPercentage.y6)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL1DistributionPercentage.y7)}</td>

        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("inScopeL2DistributionPercentage")}</td>

          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL2DistributionPercentage.y1)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL2DistributionPercentage.y2)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL2DistributionPercentage.y3)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL2DistributionPercentage.y4)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL2DistributionPercentage.y5)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL2DistributionPercentage.y6)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL2DistributionPercentage.y7)}</td>

        </tr>

        <tr className="borderBottom1px">
          <td>{this.props.englishValue("inScopeL3DistributionPercentage")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL3DistributionPercentage.y1)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL3DistributionPercentage.y2)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL3DistributionPercentage.y3)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL3DistributionPercentage.y4)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL3DistributionPercentage.y5)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL3DistributionPercentage.y6)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL3DistributionPercentage.y7)}</td>

        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("inScopeL4DistributionPercentage")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL4DistributionPercentage.y1)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL4DistributionPercentage.y2)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL4DistributionPercentage.y3)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL4DistributionPercentage.y4)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL4DistributionPercentage.y5)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL4DistributionPercentage.y6)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeL4DistributionPercentage.y7)}</td>


        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("inScopeMinorEnchDistributionPercentage")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeMinorEnchDistributionPercentage.y1)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeMinorEnchDistributionPercentage.y2)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeMinorEnchDistributionPercentage.y3)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeMinorEnchDistributionPercentage.y4)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeMinorEnchDistributionPercentage.y5)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeMinorEnchDistributionPercentage.y6)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.ams.ticketsDistribution.inScopeMinorEnchDistributionPercentage.y7)}</td>

        </tr>
      </table>
      <table>
        {/* Start Cloud+Appops table */}
        <tr><td><span className="heading allcaps">{
          this.props.getStatusIconForSections(estimate.userInputs.cloudAppOps.uiStatus, this.props.englishValue("Cloud + AppOps"))
        }</span></td></tr>
        {/* Start applicationCloud table */}
        <tr><td><span className="heading">{this.props.englishValue("applicationCloud")}</span></td></tr>
        <tr className="trHeader">

          <td></td>          <td>{this.props.englishValue("_pdf_S")}</td>
          <td>{this.props.englishValue("_pdf_M")}</td>
          <td>{this.props.englishValue("_pdf_C")}</td>
          <td>{this.props.englishValue("_pdf_T")}</td>
          <td>{this.props.englishValue("Range")}</td>

        </tr>
        <tr className="borderBottom1px">
          <td>
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.cloudAppOps.onCloudAppDistributionPercentage.uiStatus, this.props.englishValue("onCloudAppDistributionPercentage"))}
          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.onCloudAppDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.onCloudAppDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.onCloudAppDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.onCloudAppDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.cloudAppOps.onCloudAppDistributionPercentage.range}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>{this.props.englishValue("onCloudAppCountDistribution")}</td>
          <td>{estimate.userInputs.cloudAppOps.onCloudAppCountDistribution.simple}</td>
          <td>{estimate.userInputs.cloudAppOps.onCloudAppCountDistribution.medium}</td>
          <td>{estimate.userInputs.cloudAppOps.onCloudAppCountDistribution.complex}</td>
          <td>{estimate.userInputs.cloudAppOps.onCloudAppCountDistribution.total}</td>
          <td>{estimate.userInputs.cloudAppOps.onCloudAppCountDistribution.range}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>{this.props.englishValue("notOnCloudAppCountDistribution")}</td>
          <td>{estimate.userInputs.cloudAppOps.notOnCloudAppCountDistribution.simple}</td>
          <td>{estimate.userInputs.cloudAppOps.notOnCloudAppCountDistribution.medium}</td>
          <td>{estimate.userInputs.cloudAppOps.notOnCloudAppCountDistribution.complex}</td>
          <td>{estimate.userInputs.cloudAppOps.notOnCloudAppCountDistribution.total}</td>
          <td>{estimate.userInputs.cloudAppOps.notOnCloudAppCountDistribution.range}</td>
        </tr>
      </table>
      {/* ApplicationCloud table End*/}

      {/* Startting  Deployment Model of Applications on Cloud */}
      <table className="deploymentModelTable">
        <tr><td><span className="heading">{this.props.englishValue("deploymentModelCloud")}</span></td></tr>

        <tr className="trHeader">

          <td></td>          <td>{this.props.englishValue("_pdf_S")}</td>
          <td>{this.props.englishValue("_pdf_M")}</td>
          <td>{this.props.englishValue("_pdf_C")}</td>
          <td>{this.props.englishValue("_pdf_T")}</td>
          <td>{this.props.englishValue("Range")}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.cloudAppOps.rehostedAppsOnCloudDistributionPercentage.uiStatus, this.props.englishValue("rehostedAppsOnCloudDistributionPercentage"))}


          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.rehostedAppsOnCloudDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.rehostedAppsOnCloudDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.rehostedAppsOnCloudDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.rehostedAppsOnCloudDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.cloudAppOps.rehostedAppsOnCloudDistributionPercentage.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("rehostedAppsOnCloudCountDistribution")}</td>
          <td>{estimate.userInputs.cloudAppOps.rehostedAppsOnCloudCountDistribution.simple}</td>
          <td>{estimate.userInputs.cloudAppOps.rehostedAppsOnCloudCountDistribution.medium}</td>
          <td>{estimate.userInputs.cloudAppOps.rehostedAppsOnCloudCountDistribution.complex}</td>
          <td>{estimate.userInputs.cloudAppOps.rehostedAppsOnCloudCountDistribution.total}</td>
          <td>{estimate.userInputs.cloudAppOps.rehostedAppsOnCloudCountDistribution.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.cloudAppOps.replatformRefactorAppsOnCloudDistributionPercentage.uiStatus, this.props.englishValue("replatformRefactorAppsOnCloudDistributionPercentage"))}
          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.replatformRefactorAppsOnCloudDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.replatformRefactorAppsOnCloudDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.replatformRefactorAppsOnCloudDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.replatformRefactorAppsOnCloudDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.cloudAppOps.replatformRefactorAppsOnCloudDistributionPercentage.range}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>{this.props.englishValue("replatformRefactorAppsOnCloudCountDistribution")}</td>
          <td>{estimate.userInputs.cloudAppOps.replatformRefactorAppsOnCloudCountDistribution.simple}</td>
          <td>{estimate.userInputs.cloudAppOps.replatformRefactorAppsOnCloudCountDistribution.medium}</td>
          <td>{estimate.userInputs.cloudAppOps.replatformRefactorAppsOnCloudCountDistribution.complex}</td>
          <td>{estimate.userInputs.cloudAppOps.replatformRefactorAppsOnCloudCountDistribution.total}</td>
          <td>{estimate.userInputs.cloudAppOps.replatformRefactorAppsOnCloudCountDistribution.range}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.cloudAppOps.reArchitectReBuildAppsOnCloudDistributionPercentage.uiStatus, this.props.englishValue("reArchitectReBuildAppsOnCloudDistributionPercentage"))}
          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.reArchitectReBuildAppsOnCloudDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.reArchitectReBuildAppsOnCloudDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.reArchitectReBuildAppsOnCloudDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.reArchitectReBuildAppsOnCloudDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.cloudAppOps.reArchitectReBuildAppsOnCloudDistributionPercentage.range}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>
            {this.props.englishValue("reArchitectReBuildAppsOnCloudCountDistribution")}
          </td>
          <td>{estimate.userInputs.cloudAppOps.reArchitectReBuildAppsOnCloudCountDistribution.simple}</td>
          <td>{estimate.userInputs.cloudAppOps.reArchitectReBuildAppsOnCloudCountDistribution.medium}</td>
          <td>{estimate.userInputs.cloudAppOps.reArchitectReBuildAppsOnCloudCountDistribution.complex}</td>
          <td>{estimate.userInputs.cloudAppOps.reArchitectReBuildAppsOnCloudCountDistribution.total}</td>
          <td>{estimate.userInputs.cloudAppOps.reArchitectReBuildAppsOnCloudCountDistribution.range}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.cloudAppOps.saasAppsOnCloudDistributionPercentage.uiStatus, this.props.englishValue("saasAppsOnCloudDistributionPercentage"))}
          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.saasAppsOnCloudDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.saasAppsOnCloudDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.saasAppsOnCloudDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.saasAppsOnCloudDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.cloudAppOps.saasAppsOnCloudDistributionPercentage.range}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>{this.props.englishValue("saasAppsOnCloudCountDistribution")}</td>
          <td>{estimate.userInputs.cloudAppOps.saasAppsOnCloudCountDistribution.simple}</td>
          <td>{estimate.userInputs.cloudAppOps.saasAppsOnCloudCountDistribution.medium}</td>
          <td>{estimate.userInputs.cloudAppOps.saasAppsOnCloudCountDistribution.complex}</td>
          <td>{estimate.userInputs.cloudAppOps.saasAppsOnCloudCountDistribution.total}</td>
          <td>{estimate.userInputs.cloudAppOps.saasAppsOnCloudCountDistribution.range}</td>
        </tr>

        <tr className="borderBottom1px" >
          <td>
            {this.props.englishValue("totalAppsOnCloudCountDistribution")}
          </td>
          <td>{estimate.userInputs.cloudAppOps.totalAppsOnCloudCountDistribution.simple}</td>
          <td>{estimate.userInputs.cloudAppOps.totalAppsOnCloudCountDistribution.medium}</td>
          <td>{estimate.userInputs.cloudAppOps.totalAppsOnCloudCountDistribution.complex}</td>
          <td>{estimate.userInputs.cloudAppOps.totalAppsOnCloudCountDistribution.total}</td>
          <td>{estimate.userInputs.cloudAppOps.totalAppsOnCloudCountDistribution.range}</td>
        </tr>
      </table>
      {/*   Deployment Model of Applications on Cloud End*/}

      {/* Startting  containerized Applications */}

      <table>
        <tr><td><span className="heading">{this.props.englishValue("containerizedApplications")}</span></td></tr>
        <tr className="trHeader">

          <td></td>          <td>{this.props.englishValue("_pdf_S")}</td>
          <td>{this.props.englishValue("_pdf_M")}</td>
          <td>{this.props.englishValue("_pdf_C")}</td>
          <td>{this.props.englishValue("_pdf_T")}</td>
          <td>{this.props.englishValue("Range")}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.cloudAppOps.replatformRefactorAppsMovingToContainerDistributionPercentage.uiStatus, this.props.englishValue("replatformRefactorAppsMovingToContainerDistributionPercentage"))}

          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.replatformRefactorAppsMovingToContainerDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.replatformRefactorAppsMovingToContainerDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.replatformRefactorAppsMovingToContainerDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.replatformRefactorAppsMovingToContainerDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.cloudAppOps.replatformRefactorAppsMovingToContainerDistributionPercentage.range}</td>
        </tr>

        <tr className="borderBottom1px"><td>
          {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.cloudAppOps.reArchitectReBuildAppsMovingToContainerDistributionPercentage.uiStatus, this.props.englishValue("reArchitectReBuildAppsMovingToContainerDistributionPercentage"))}
        </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.reArchitectReBuildAppsMovingToContainerDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.reArchitectReBuildAppsMovingToContainerDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.reArchitectReBuildAppsMovingToContainerDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.cloudAppOps.reArchitectReBuildAppsMovingToContainerDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.cloudAppOps.reArchitectReBuildAppsMovingToContainerDistributionPercentage.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("totalContainerizedAppsOnCloudCountDistribution")}</td>
          <td>{estimate.userInputs.cloudAppOps.totalContainerizedAppsOnCloudCountDistribution.simple}</td>
          <td>{estimate.userInputs.cloudAppOps.totalContainerizedAppsOnCloudCountDistribution.medium}</td>
          <td>{estimate.userInputs.cloudAppOps.totalContainerizedAppsOnCloudCountDistribution.complex}</td>
          <td>{estimate.userInputs.cloudAppOps.totalContainerizedAppsOnCloudCountDistribution.total}</td>
          <td>{estimate.userInputs.cloudAppOps.totalContainerizedAppsOnCloudCountDistribution.range}</td>
        </tr>
      </table>

      {/* containerized Applications End*/}

      {/* Startting  Move to Cloud (Cloud Migration Pattern) */}

      <table>

        <tr><td><span className="heading">{
          this.props.getStatusIconForSections(estimate.userInputs.moveToCloud.uiStatus, this.props.englishValue("MovetoCloud"))
        }</span></td></tr>

        <tr className="trHeader">
          <td></td>
          <td>{this.props.englishValue("Y1")}</td>
          <td>{this.props.englishValue("Y2")}</td>
          <td>{this.props.englishValue("Y3")}</td>
          <td>{this.props.englishValue("Y4")}</td>
          <td>{this.props.englishValue("Y5")}</td>
          <td>{this.props.englishValue("Y6")}</td>
          <td>{this.props.englishValue("Y7")}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.moveToCloud.nonCloudAppsPercentagePlannedToMoveToCloudEachYear.uiStatus, this.props.englishValue("_pdf_CMP_R1"))}

          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.moveToCloud.nonCloudAppsPercentagePlannedToMoveToCloudEachYear.y1)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.moveToCloud.nonCloudAppsPercentagePlannedToMoveToCloudEachYear.y2)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.moveToCloud.nonCloudAppsPercentagePlannedToMoveToCloudEachYear.y3)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.moveToCloud.nonCloudAppsPercentagePlannedToMoveToCloudEachYear.y4)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.moveToCloud.nonCloudAppsPercentagePlannedToMoveToCloudEachYear.y5)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.moveToCloud.nonCloudAppsPercentagePlannedToMoveToCloudEachYear.y6)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.moveToCloud.nonCloudAppsPercentagePlannedToMoveToCloudEachYear.y7)}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>{this.props.englishValue("_pdf_CMP_R2")}</td>
          <td> {estimate.userInputs.moveToCloud.appsNotOnCloudAtStartOfYear.y1}</td>
          <td>{estimate.userInputs.moveToCloud.appsNotOnCloudAtStartOfYear.y2}</td>
          <td>{estimate.userInputs.moveToCloud.appsNotOnCloudAtStartOfYear.y3}</td>
          <td>{estimate.userInputs.moveToCloud.appsNotOnCloudAtStartOfYear.y4}</td>
          <td>{estimate.userInputs.moveToCloud.appsNotOnCloudAtStartOfYear.y5}</td>
          <td>{estimate.userInputs.moveToCloud.appsNotOnCloudAtStartOfYear.y6}</td>
          <td>{estimate.userInputs.moveToCloud.appsNotOnCloudAtStartOfYear.y7}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("_pdf_CMP_R3")}</td>
          <td> {estimate.userInputs.moveToCloud.appsCountToBeMovingToCloudYoY.y1}</td>
          <td>{estimate.userInputs.moveToCloud.appsCountToBeMovingToCloudYoY.y2}</td>
          <td>{estimate.userInputs.moveToCloud.appsCountToBeMovingToCloudYoY.y3}</td>
          <td>{estimate.userInputs.moveToCloud.appsCountToBeMovingToCloudYoY.y4}</td>
          <td>{estimate.userInputs.moveToCloud.appsCountToBeMovingToCloudYoY.y5}</td>
          <td>{estimate.userInputs.moveToCloud.appsCountToBeMovingToCloudYoY.y6}</td>
          <td>{estimate.userInputs.moveToCloud.appsCountToBeMovingToCloudYoY.y7}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("_pdf_CMP_R4")}</td>
          <td> {estimate.userInputs.moveToCloud.appsTotalOnCloudByEndOfYear.y1}</td>
          <td>{estimate.userInputs.moveToCloud.appsTotalOnCloudByEndOfYear.y2}</td>
          <td>{estimate.userInputs.moveToCloud.appsTotalOnCloudByEndOfYear.y3}</td>
          <td>{estimate.userInputs.moveToCloud.appsTotalOnCloudByEndOfYear.y4}</td>
          <td>{estimate.userInputs.moveToCloud.appsTotalOnCloudByEndOfYear.y5}</td>
          <td>{estimate.userInputs.moveToCloud.appsTotalOnCloudByEndOfYear.y6}</td>
          <td>{estimate.userInputs.moveToCloud.appsTotalOnCloudByEndOfYear.y7}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("_pdf_CMP_R5")}</td>
          <td> {estimate.userInputs.moveToCloud.appsTotalNotOnCloudByEndOfYear.y1}</td>
          <td>{estimate.userInputs.moveToCloud.appsTotalNotOnCloudByEndOfYear.y2}</td>
          <td>{estimate.userInputs.moveToCloud.appsTotalNotOnCloudByEndOfYear.y3}</td>
          <td>{estimate.userInputs.moveToCloud.appsTotalNotOnCloudByEndOfYear.y4}</td>
          <td>{estimate.userInputs.moveToCloud.appsTotalNotOnCloudByEndOfYear.y5}</td>
          <td>{estimate.userInputs.moveToCloud.appsTotalNotOnCloudByEndOfYear.y6}</td>
          <td>{estimate.userInputs.moveToCloud.appsTotalNotOnCloudByEndOfYear.y7}</td>
        </tr>
      </table>
      {/*   Move to Cloud (Cloud Migration Pattern) End */}



    </div >
    )
  }
}

export default Page8