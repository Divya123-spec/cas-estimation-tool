import React from 'react';
import * as html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PageHeader from './PageHeader';

class Page5 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let estimate = this.props.estimate;
    return (<div id="page5" className="page">
      <PageHeader {...this.props} />
      {/* Strart L3 + Large SRs */}
      <table>
        <tr><td><span className="heading">{this.props.englishValue("L3 + Large SRs")}</span></td></tr>
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
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.general.l3DistributionPercentage.uiStatus, this.props.englishValue("l3DistributionPercentage"))}

          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l3DistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l3DistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l3DistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l3DistributionPercentage.total)}</td>
          <td>{estimate.userInputs.general.l3DistributionPercentage.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("l3TicketsCountDistribution")}</td>
          <td>{estimate.userInputs.general.l3TicketsCountDistribution.simple}</td>
          <td>{estimate.userInputs.general.l3TicketsCountDistribution.medium}</td>
          <td>{estimate.userInputs.general.l3TicketsCountDistribution.complex}</td>
          <td>{estimate.userInputs.general.l3TicketsCountDistribution.total}</td>
          <td>{estimate.userInputs.general.l3TicketsCountDistribution.range}</td>
        </tr>
      </table>
      {/* L3 + Large SRs End*/}
      {/* Strart L4 */}


      <table>
        <tr><td><span className="heading">{this.props.englishValue("L4")}</span></td></tr>
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
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.general.l4DistributionPercentage.uiStatus, this.props.englishValue("l4DistributionPercentage"))}
          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l4DistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l4DistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l4DistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.l4DistributionPercentage.total)}</td>
          <td>{estimate.userInputs.general.l4DistributionPercentage.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("l4TicketsCountDistribution")} </td>

          <td>{estimate.userInputs.general.l4TicketsCountDistribution.simple}</td>
          <td>{estimate.userInputs.general.l4TicketsCountDistribution.medium}</td>
          <td>{estimate.userInputs.general.l4TicketsCountDistribution.complex}</td>
          <td>{estimate.userInputs.general.l4TicketsCountDistribution.total}</td>
          <td>{estimate.userInputs.general.l4TicketsCountDistribution.range}</td>
        </tr>
      </table>
      {/*  L3 + Large SRs End*/}

      {/* Start Minor Enhancements + V.Large SRs */}
      <table className="minorVLSrTable">
        <tr><td><span className="heading">{this.props.englishValue("Minor Enhancements + V.Large SRs")}</span></td></tr>
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
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.general.minorEnhDistributionPercentage.uiStatus, this.props.englishValue("minorEnhDistributionPercentage"))}

          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.minorEnhDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.minorEnhDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.minorEnhDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.minorEnhDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.general.minorEnhDistributionPercentage.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("minorEnhTicketsCountDistribution")} </td>
          <td>{estimate.userInputs.general.minorEnhTicketsCountDistribution.simple}</td>
          <td>{estimate.userInputs.general.minorEnhTicketsCountDistribution.medium}</td>
          <td>{estimate.userInputs.general.minorEnhTicketsCountDistribution.complex}</td>
          <td>{estimate.userInputs.general.minorEnhTicketsCountDistribution.total}</td>
          <td>{estimate.userInputs.general.minorEnhTicketsCountDistribution.range}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>{this.props.englishValue("minorEnhCapacityOfHoursDistribution")} </td>

          <td>{estimate.userInputs.general.minorEnhCapacityOfHoursDistribution.simple}</td>
          <td>{estimate.userInputs.general.minorEnhCapacityOfHoursDistribution.medium}</td>
          <td>{estimate.userInputs.general.minorEnhCapacityOfHoursDistribution.complex}</td>
          <td>{estimate.userInputs.general.minorEnhCapacityOfHoursDistribution.total}</td>
          <td>{estimate.userInputs.general.minorEnhCapacityOfHoursDistribution.range}</td>
        </tr>
      </table>

      {/*  Minor Enhancements + V.Large SRs End */}

      {/* Start Monthly Additional AD Capacity (Optional) */}
      <table>
        <tr><td><span className="heading">{this.props.englishValue("Monthly Additional AD Capacity (Optional)")}</span></td></tr>
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
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.general.additionalADCapacityHrsDistributionPercentage.uiStatus, this.props.englishValue("additionalADCapacityHrsDistributionPercentage"))}
          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.additionalADCapacityHrsDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.additionalADCapacityHrsDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.additionalADCapacityHrsDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.additionalADCapacityHrsDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.general.additionalADCapacityHrsDistributionPercentage.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("additionalADCapacityHrsDistribution")} </td>
          <td>{estimate.userInputs.general.additionalADCapacityHrsDistribution.simple}</td>
          <td>{estimate.userInputs.general.additionalADCapacityHrsDistribution.medium}</td>
          <td>{estimate.userInputs.general.additionalADCapacityHrsDistribution.complex}</td>
          <td>{estimate.userInputs.general.additionalADCapacityHrsDistribution.total}</td>
          <td>{estimate.userInputs.general.additionalADCapacityHrsDistribution.range}</td>
        </tr>
      </table>
      {/* Start Monthly Additional AD Capacity (Optional) End */}


      {/* Start Recommended Uplift */}


      <table>
        <tr><td><span className="heading">{this.props.englishValue("Recommended Uplift")}</span></td></tr>
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
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.general.nonTicketingActivitiesUpliftDistributionPercentage.uiStatus, this.props.englishValue("nonTicketingActivitiesUpliftDistributionPercentage"))}
          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.nonTicketingActivitiesUpliftDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.nonTicketingActivitiesUpliftDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.nonTicketingActivitiesUpliftDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.nonTicketingActivitiesUpliftDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.general.nonTicketingActivitiesUpliftDistributionPercentage.range}</td>
        </tr>
        {/* <tr><td>&nbsp;</td></tr> */}
      </table>
      {/* Recommended Uplift End*/}

    </div>)
  }
}
export default Page5
