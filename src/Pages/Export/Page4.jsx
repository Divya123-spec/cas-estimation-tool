import React from 'react';
import PageHeader from './PageHeader';

class Page4 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let estimate = this.props.estimate;
    return (<div id="page4" className="page">
      <PageHeader {...this.props} />
      {/* Start Average Ticket Count(Monthly) */}
      <table>
        <tr><td><span className="heading">{this.props.englishValue("Average Ticket Count(Monthly)")}</span></td></tr>
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
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.general.monthlyAverageTicketCountPerAppCategory.uiStatus, this.props.englishValue("monthlyAverageTicketCountPerAppCategory"))}
          </td>
          <td>{estimate.userInputs.general.monthlyAverageTicketCountPerAppCategory.simple}</td>
          <td>{estimate.userInputs.general.monthlyAverageTicketCountPerAppCategory.medium}</td>
          <td>{estimate.userInputs.general.monthlyAverageTicketCountPerAppCategory.complex}</td>
          <td>{estimate.userInputs.general.monthlyAverageTicketCountPerAppCategory.total}</td>
          <td>{estimate.userInputs.general.monthlyAverageTicketCountPerAppCategory.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("monthlyTotalTicketsAssumed")}</td>
          <td>{estimate.userInputs.general.monthlyTotalTicketsAssumed.simple}</td>
          <td>{estimate.userInputs.general.monthlyTotalTicketsAssumed.medium}</td>
          <td>{estimate.userInputs.general.monthlyTotalTicketsAssumed.complex}</td>
          <td>{estimate.userInputs.general.monthlyTotalTicketsAssumed.total}</td>
          <td>{estimate.userInputs.general.monthlyTotalTicketsAssumed.range}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>{this.props.englishValue("monthlyL1TicketsAssumed")}</td>
          <td>{estimate.userInputs.general.monthlyL1TicketsAssumed.simple}</td>
          <td>{estimate.userInputs.general.monthlyL1TicketsAssumed.medium}</td>
          <td>{estimate.userInputs.general.monthlyL1TicketsAssumed.complex}</td>
          <td>{estimate.userInputs.general.monthlyL1TicketsAssumed.total}</td>
          <td>{estimate.userInputs.general.monthlyL1TicketsAssumed.range}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>
            {this.props.englishValue("ticketDistributionPercentage")}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.ticketDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.ticketDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.ticketDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.ticketDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.general.ticketDistributionPercentage.range}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.general.additionalBatchJobsSupportUpliftPercentage.uiStatus, this.props.englishValue("additionalBatchJobsSupportUpliftPercentage"))}
          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.additionalBatchJobsSupportUpliftPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.additionalBatchJobsSupportUpliftPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.additionalBatchJobsSupportUpliftPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.additionalBatchJobsSupportUpliftPercentage.total)}</td>
          <td>{estimate.userInputs.general.additionalBatchJobsSupportUpliftPercentage.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("approxNumberOfBatchJobsTicketsToSupport")}</td>
          <td>{estimate.userInputs.general.approxNumberOfBatchJobsTicketsToSupport.simple}</td>
          <td>{estimate.userInputs.general.approxNumberOfBatchJobsTicketsToSupport.medium}</td>
          <td>{estimate.userInputs.general.approxNumberOfBatchJobsTicketsToSupport.complex}</td>
          <td>{estimate.userInputs.general.approxNumberOfBatchJobsTicketsToSupport.total}</td>
          <td>{estimate.userInputs.general.approxNumberOfBatchJobsTicketsToSupport.range}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>{this.props.englishValue("monthlyTotalandBatchJobsTickets")}</td>
          <td>{estimate.userInputs.general.monthlyTotalandBatchJobsTickets.simple}</td>
          <td>{estimate.userInputs.general.monthlyTotalandBatchJobsTickets.medium}</td>
          <td>{estimate.userInputs.general.monthlyTotalandBatchJobsTickets.complex}</td>
          <td>{estimate.userInputs.general.monthlyTotalandBatchJobsTickets.total}</td>
          <td>{estimate.userInputs.general.monthlyTotalandBatchJobsTickets.range}</td>
        </tr>
      </table>
      {/* Average Ticket Count(Monthly) End*/}

      {/* Start  L1.5 + Small SRs */}

      <table>
        <tr ><td><span className="heading">{this.props.englishValue("L1.5 + Small SRs")}</span></td></tr>
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
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.general.l1DistributionPercentage.uiStatus, this.props.englishValue("l1DistributionPercentage"))}


          </td>

          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l1DistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l1DistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l1DistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l1DistributionPercentage.total)}</td>
          <td>{estimate.userInputs.general.l1DistributionPercentage.range}</td>

        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("l1TicketsCountDistribution")} </td>

          <td>{estimate.userInputs.general.l1TicketsCountDistribution.simple}</td>
          <td>{estimate.userInputs.general.l1TicketsCountDistribution.medium}</td>
          <td>{estimate.userInputs.general.l1TicketsCountDistribution.complex}</td>
          <td>{estimate.userInputs.general.l1TicketsCountDistribution.total}</td>
          <td>{estimate.userInputs.general.l1TicketsCountDistribution.range}</td>
        </tr>
      </table>
      {/*   L1.5 + Small SRs End*/}
      {/* Start  L2 + Medium SRs */}


      <table>
        <tr><td><span className="heading">{this.props.englishValue("L2 + Medium SRs")}</span></td></tr>
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
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.general.l2DistributionPercentage.uiStatus, this.props.englishValue("l2DistributionPercentage"))}
          </td>

          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l2DistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l2DistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l2DistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l2DistributionPercentage.total)}</td>
          <td>{estimate.userInputs.general.l2DistributionPercentage.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("l2TicketsCountDistribution")} </td>

          <td>{estimate.userInputs.general.l2TicketsCountDistribution.simple}</td>
          <td>{estimate.userInputs.general.l2TicketsCountDistribution.medium}</td>
          <td>{estimate.userInputs.general.l2TicketsCountDistribution.complex}</td>
          <td>{estimate.userInputs.general.l2TicketsCountDistribution.total}</td>
          <td>{estimate.userInputs.general.l2TicketsCountDistribution.range}</td>
        </tr>
      </table>
      {/*  L2 + Medium SRs End*/}
    </div>)
  }
}
export default Page4
