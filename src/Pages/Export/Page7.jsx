import React from 'react';
import PageHeader from './PageHeader';

class Page7 extends React.Component {

  render() {
    let estimate = this.props.estimate;
    var tableCellUtilization = Object.entries(estimate.userInputs.ams.amsUtilizationCalculation);
    return (<div id="page7" className="page">
      <PageHeader {...this.props} />
      {/* AMS Input table */}
      <table style={{ width: "75%" }}>
        <tr><td><span className="heading">{
          this.props.getStatusIconForSections(estimate.userInputs.ams.uiStatus, this.props.englishValue("AMS Input"))

        }</span></td></tr>
        {/* Start AMS UtilizationCalculation */}
        <tr><h5>{this.props.englishValue("UtilizationCalculation")}</h5></tr>
        <tr></tr>
        <tr></tr>
        <tr className="trHeader"><td>{this.props.englishValue("YearlyUtilization")}</td>
          <td>{this.props.englishValue("Hours")}</td>
          <td></td>
          <td></td>
          <td></td>
          <td>{this.props.englishValue("Onshore:OffshoreRatio")}</td>
        </tr>

        <tr className="borderBottom1px"><td>{this.props.englishValue("blendedClientUtilizationAnnualHrs")}</td>
          <td>{estimate.userInputs.ams.amsUtilizationCalculation.blendedClientUtilizationAnnualHrs}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("localHrs")}</td>
          <td>{estimate.userInputs.ams.amsUtilizationCalculation.localHrs}</td>
          <td></td>
          <td></td>
          <td></td>
          <td>{this.props.getPdfPercentPrintValue((estimate.userInputs.effortEstimationParameters.onsitePercentage * (25 / 100)).toFixed(2))}</td>
        </tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("contractorsOnsiteHrs")}</td>
          <td>{estimate.userInputs.ams.amsUtilizationCalculation.contractorsOnsiteHrs}</td>
          <td></td>
          <td></td>
          <td></td>
          <td>{this.props.getPdfPercentPrintValue((estimate.userInputs.effortEstimationParameters.onsitePercentage * (25 / 100)).toFixed(2))}</td>
        </tr>

        <tr className="borderBottom1px"><td>{this.props.englishValue("landedHrs")}</td>
          <td>{estimate.userInputs.ams.amsUtilizationCalculation.landedHrs}</td>
          <td></td>
          <td></td>
          <td></td>
          <td>{this.props.getPdfPercentPrintValue((estimate.userInputs.effortEstimationParameters.onsitePercentage * (50 / 100)).toFixed(2))}</td>
        </tr>

        <tr className="borderBottom1px"><td>{this.props.englishValue("offshoreHrs")}</td>
          <td>{estimate.userInputs.ams.amsUtilizationCalculation.offshoreHrs}</td>
          <td></td>
          <td></td>
          <td></td>
          <td>{this.props.getPdfPercentPrintValue((estimate.userInputs.effortEstimationParameters.offshorePercentage * (90 / 100)).toFixed(2))}</td>
        </tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("offshoreContractorsHrs")}</td>
          <td>{estimate.userInputs.ams.amsUtilizationCalculation.offshoreContractorsHrs}</td>
          <td></td>
          <td></td>
          <td></td>
          <td>{this.props.getPdfPercentPrintValue((estimate.userInputs.effortEstimationParameters.offshorePercentage * (10 / 100)).toFixed(2))}</td>
        </tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("ibmWeightedUtilizationAnnualHrs")}</td>
          <td>{estimate.userInputs.ams.amsUtilizationCalculation.ibmWeightedUtilizationAnnualHrs}</td>
          <td></td>
          <td></td>
          <td></td>
          <td>{this.props.getPdfPercentPrintValue(((estimate.userInputs.effortEstimationParameters.onsitePercentage * (25 / 100)) +
            (estimate.userInputs.effortEstimationParameters.onsitePercentage * (25 / 100)) +
            (estimate.userInputs.effortEstimationParameters.onsitePercentage * (50 / 100)) +
            (estimate.userInputs.effortEstimationParameters.offshorePercentage * (90 / 100)) +
            (estimate.userInputs.effortEstimationParameters.offshorePercentage * (10 / 100))).toFixed(2))}</td>
        </tr>

        <tr className="borderBottom1px" ><td>{this.props.englishValue("ibmWeightedUtilizationMonthlyHrs")}</td>
          <td>{estimate.userInputs.ams.amsUtilizationCalculation.ibmWeightedUtilizationMonthlyHrs}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {/* {tableCellUtilization.map((tds, index) => {
          if (tds[0] !== 'uiStatus') {
            let cname = "borderBottom1px"
            if (index + 1 === tableCellUtilization.length)
              cname = ""
            return (<tr className={cname}><td>{this.props.englishValue(tds[0])}</td> <td>{tds[1]}</td></tr>)
          }
        })} */}
      </table>
      {/*  AMS UtilizationCalculation End*/}
      {/* Start AMS YOY Tickets table */}


      <table>
        <tr><td><span className="heading">{
          this.props.getStatusIconForSections({ iconStatus: { ok: true } }, this.props.englishValue("YoYTickets"))

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
          <td>{this.props.englishValue("annualNumberOfTickets")}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.annualNumberOfTickets.y1}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.annualNumberOfTickets.y2}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.annualNumberOfTickets.y3}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.annualNumberOfTickets.y4}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.annualNumberOfTickets.y5}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.annualNumberOfTickets.y6}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.annualNumberOfTickets.y7}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("descopedTickets")}</td>

          <td>{estimate.userInputs.ams.ticketsDistribution.descopedTickets.y1}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.descopedTickets.y2}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.descopedTickets.y3}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.descopedTickets.y4}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.descopedTickets.y5}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.descopedTickets.y6}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.descopedTickets.y7}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>{this.props.englishValue("batchJobsTickets")}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.batchJobsTickets.y1}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.batchJobsTickets.y2}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.batchJobsTickets.y3}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.batchJobsTickets.y4}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.batchJobsTickets.y5}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.batchJobsTickets.y6}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.batchJobsTickets.y7}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("inScopeTicketVolumeAnnual")}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeAnnual.y1}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeAnnual.y2}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeAnnual.y3}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeAnnual.y4}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeAnnual.y5}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeAnnual.y6}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeAnnual.y7}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("inScopeTicketVolumeMonthly")}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeMonthly.y1}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeMonthly.y2}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeMonthly.y3}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeMonthly.y4}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeMonthly.y5}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeMonthly.y6}</td>
          <td>{estimate.userInputs.ams.ticketsDistribution.inScopeTicketVolumeMonthly.y7}</td>
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
      {/*  AMS YOY Tickets table End*/}


    </div>
    )
  }
}

export default Page7