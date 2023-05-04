import React from 'react';
import PageHeader from './PageHeader';

class Page3 extends React.Component {

  render() {
    let estimate = this.props.estimate;
    return (<div id="page3" className="page">
      <PageHeader {...this.props} />
      <div className="heading allcaps">{this.props.englishValue("Opportunity Inputs")}</div>
      <span style={{ width: "100%" }}>{this.props.englishValue("ApplicationCategory")}</span>
      <div><span style={{ width: "100%" }}>{this.props.englishValue("_pdf_Simple_Medium_Complex")}</span></div>
      <table>
        <tr><td><span className="heading">{
          this.props.getStatusIconForSections(estimate.userInputs.general.uiStatus, this.props.englishValue("General"))
          //this.props.englishValue("General")
        }</span></td></tr>
        {/* Start Application Distribution */}
        <tr><td><span className="heading">{this.props.englishValue("Application Distribution")}</span></td></tr>
        <tr className="trHeader">
          <td></td>
          <td>{this.props.englishValue("_pdf_S")}</td>
          <td>{this.props.englishValue("_pdf_M")}</td>
          <td>{this.props.englishValue("_pdf_C")}</td>
          <td>{this.props.englishValue("_pdf_T")}</td>
          <td>{this.props.englishValue("Range")}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.general.appComplexityBasedDistributionPercentage.uiStatus, this.props.englishValue("appComplexityBasedDistributionPercentage"))}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.appComplexityBasedDistributionPercentage.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.appComplexityBasedDistributionPercentage.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.appComplexityBasedDistributionPercentage.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.appComplexityBasedDistributionPercentage.total)}</td>
          <td>{estimate.userInputs.general.appComplexityBasedDistributionPercentage.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("appCountComplexityBasedDistribution")}</td>
          <td>{estimate.userInputs.general.appCountComplexityBasedDistribution.simple}</td>
          <td>{estimate.userInputs.general.appCountComplexityBasedDistribution.medium}</td>
          <td>{estimate.userInputs.general.appCountComplexityBasedDistribution.complex}</td>
          <td>{estimate.userInputs.general.appCountComplexityBasedDistribution.total}</td>
          <td>{estimate.userInputs.general.appCountComplexityBasedDistribution.range}</td>
        </tr>
      </table>
      <br></br>
      <br></br>
      <table>
        {/* Application Distribution  end*/}
        {/* Start COTS/3rd Party Applications */}

        <tr><td><span className="heading">{this.props.englishValue("COTS/3rd Party Applications")}</span></td></tr>
        <tr className="trHeader">
          <td></td>
          <td>{this.props.englishValue("_pdf_S")}</td>
          <td>{this.props.englishValue("_pdf_M")}</td>
          <td>{this.props.englishValue("_pdf_C")}</td>
          <td>{this.props.englishValue("_pdf_T")}</td>
          <td>{this.props.englishValue("Range")}</td>
        </tr>

        <tr className="borderBottom1px">
          <td>{this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.general.cotsThirdPartyPercentageOfTotalApps.uiStatus, this.props.englishValue("cotsThirdPartyPercentageOfTotalApps"))}{ }</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.cotsThirdPartyPercentageOfTotalApps.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.cotsThirdPartyPercentageOfTotalApps.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.cotsThirdPartyPercentageOfTotalApps.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.cotsThirdPartyPercentageOfTotalApps.total)}</td>
          <td>{estimate.userInputs.general.cotsThirdPartyPercentageOfTotalApps.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("cotsThirdPartyAppCountDistribution")}</td>
          <td>{estimate.userInputs.general.cotsThirdPartyAppCountDistribution.simple}</td>
          <td>{estimate.userInputs.general.cotsThirdPartyAppCountDistribution.medium}</td>
          <td>{estimate.userInputs.general.cotsThirdPartyAppCountDistribution.complex}</td>
          <td>{estimate.userInputs.general.cotsThirdPartyAppCountDistribution.total}</td>
          <td>{estimate.userInputs.general.cotsThirdPartyAppCountDistribution.range}</td>

        </tr>
      </table>
              {/* COTS/3rd Party Applications End */}


      <br></br>
      <br></br>
      {/* Start Critical Applications */}

      <table>
        <tr><td><span className="heading">{this.props.englishValue("Critical Applications")}</span></td></tr>
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
            {this.props.getOrangeOrGreenTickWithMessage(estimate.userInputs.general.criticalAppPercentageOfTotalApps.uiStatus, this.props.englishValue("criticalAppPercentageOfTotalApps"))}
          </td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.criticalAppPercentageOfTotalApps.simple)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.criticalAppPercentageOfTotalApps.medium)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.criticalAppPercentageOfTotalApps.complex)}</td>
          <td>{this.props.getPdfPercentPrintValue(estimate.userInputs.general.criticalAppPercentageOfTotalApps.total)}</td>
          <td>{estimate.userInputs.general.criticalAppPercentageOfTotalApps.range}</td>
        </tr>
        <tr className="borderBottom1px">
          <td>{this.props.englishValue("criticalAppCountDistribution")}</td>

          <td>{(estimate.userInputs.general.criticalAppCountDistribution.simple)}</td>
          <td>{(estimate.userInputs.general.criticalAppCountDistribution.medium)}</td>
          <td>{(estimate.userInputs.general.criticalAppCountDistribution.complex)}</td>
          <td>{(estimate.userInputs.general.criticalAppCountDistribution.total)}</td>
          <td>{estimate.userInputs.general.criticalAppCountDistribution.range}</td>
        </tr>
      </table>
            {/*  Critical Applications End */}

    </div>
    )
  }
}

export default Page3;
