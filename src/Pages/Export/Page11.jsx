import React from 'react';
import * as html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PageHeader from './PageHeader';

class Page11 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let estimate = this.props.estimate;
    return (<div id="page11" className="page">
      <PageHeader {...this.props} />
            {/* Starting TRANSITION Table */}

      <table>
        <tr><td><span className="heading allcaps">{
          this.props.getStatusIconForSections(estimate.userInputs.transition.uiStatus, this.props.englishValue("_pdf_Transition"))
        }</span></td></tr>

        <tr className="trHeader">

          <td></td>			  <td>{this.props.englishValue("_pdf_S")}</td>
          <td>{this.props.englishValue("_pdf_M")}</td>
          <td>{this.props.englishValue("_pdf_C")}</td>
          <td>{this.props.englishValue("_pdf_T")}</td>
          <td>{this.props.englishValue("Range")}</td>

        </tr>
        <tr className="borderBottom1px">
          <td>
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.transition.managerTravelToolCostDistributionPercentage.uiStatus, this.props.englishValue("managerTravelToolCostDistributionPercentage"))}
          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.transition.managerTravelToolCostDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.transition.managerTravelToolCostDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.transition.managerTravelToolCostDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.transition.managerTravelToolCostDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.transition.managerTravelToolCostDistributionPercentage.range}</td>
        </tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("typicalCostDistribution_USD")}</td>

          <td>{this.props.currencyCoverter(estimate.userInputs.transition.typicalCostDistribution_USD.simple)}</td>
          <td>{this.props.currencyCoverter(estimate.userInputs.transition.typicalCostDistribution_USD.medium)}</td>
          <td>{this.props.currencyCoverter(estimate.userInputs.transition.typicalCostDistribution_USD.complex)}</td>
          <td>{this.props.currencyCoverter(estimate.userInputs.transition.typicalCostDistribution_USD.total)}</td>
          <td>{estimate.userInputs.transition.typicalCostDistribution_USD.range !== "" ? this.props.currencyCoverter(estimate.userInputs.transition.typicalCostDistribution_USD.range) : ""}</td>
        </tr>
        <tr className="borderBottom1px"><td>
          {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.transition.rampUpReductionConsideredDistributionPercentage.uiStatus, this.props.englishValue("rampUpReductionConsideredDistributionPercentage"))}
        </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.transition.rampUpReductionConsideredDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.transition.rampUpReductionConsideredDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.transition.rampUpReductionConsideredDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.transition.rampUpReductionConsideredDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.transition.rampUpReductionConsideredDistributionPercentage.range}</td>

        </tr>

      </table>
                  {/*  TRANSITION Table End*/}
                              {/* Starting NON LABOUR Table */}


      <table>
        <tr><td><span className="heading allcaps">{
          this.props.getStatusIconForSections(estimate.userInputs.nonLabour.uiStatus, this.props.englishValue("_pdf_Non Labour"))
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
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.nonLabour.nonLabourCostDistributionPercentage.uiStatus, this.props.englishValue("nonLabourCostDistributionPercentage"))}

          </td>

          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.nonLabour.nonLabourCostDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.nonLabour.nonLabourCostDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.nonLabour.nonLabourCostDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.nonLabour.nonLabourCostDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.nonLabour.nonLabourCostDistributionPercentage.range}</td>

        </tr>

        <tr className="borderBottom1px" ><td>
          {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.nonLabour.typicalCostDistribution_USD.uiStatus, this.props.englishValue("typicalCostDistribution_USD"))}
        </td>

          <td>{this.props.currencyCoverter(estimate.userInputs.nonLabour.typicalCostDistribution_USD.simple)}</td>
          <td>{this.props.currencyCoverter(estimate.userInputs.nonLabour.typicalCostDistribution_USD.medium)}</td>
          <td>{this.props.currencyCoverter(estimate.userInputs.nonLabour.typicalCostDistribution_USD.complex)}</td>
          <td>{this.props.currencyCoverter(estimate.userInputs.nonLabour.typicalCostDistribution_USD.total)}</td>
          <td>{estimate.userInputs.nonLabour.typicalCostDistribution_USD.range !== "" ? this.props.currencyCoverter(estimate.userInputs.nonLabour.typicalCostDistribution_USD.range) : ""}</td>

          <td></td>
        </tr>
      </table>
                              {/* NON LABOUR Table End*/}

      <table>

        <tr><td><span className="heading allcaps">{
          // this.props.getStatusIconForSections(estimate.userInputs.productivity.uiStatus,this.props.englishValue("Productivity"))

        }</span></td></tr>
        {/* <tr><td><span className="heading">{this.props.englishValue("_pdf_Cloud Migration Pattern")}</span></td></tr>
        <tr className="trHeader">

          <td></td>
          <td>{this.props.englishValue("Y1")}</td>
          <td>{this.props.englishValue("Y2")}</td>
          <td>{this.props.englishValue("Y3")}</td>
          <td>{this.props.englishValue("Y4")}</td>
          <td>{this.props.englishValue("Y5")}</td>
        </tr>
        <tr className="borderBottom1px">             
        <td>{this.props.englishValue("_pdf_CMP_R1")}</td> 
         <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         </tr>
        <tr className="borderBottom1px">             
        <td>{this.props.englishValue("_pdf_CMP_R2")}</td>  
        <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
        </tr>
        <tr className="borderBottom1px">             
        <td>{this.props.englishValue("_pdf_CMP_R3")}</td> 
        <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         </tr>
        <tr className="borderBottom1px">             
        <td>{this.props.englishValue("_pdf_CMP_R4")}</td> 
        <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         </tr>
        <tr className="borderBottom1px">             
        <td>{this.props.englishValue("_pdf_CMP_R5")}</td>  
        <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         <td>NA</td>           
         </tr> */}
      </table>

    </div>
    )
  }
}

export default Page11