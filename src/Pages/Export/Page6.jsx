import React from 'react';
import * as html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PageHeader from './PageHeader';

class Page6 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let estimate = this.props.estimate;
    let getYorN = (value) => {
      return value ? "Y" : "N";
    }
    return (<div id="page6" className="page">
      <PageHeader {...this.props} />
      {/* start Client's Cloud Landscape(Advanced Cloud Input) */}

      <table><tr><td colSpan="9"><span className="heading">{
        this.props.getStatusIconForSections({ iconStatus: { ok: true } }, this.props.englishValue("clientCloudLandscape"))
        //this.props.getStatusIconForSections(estimate.userInputs.clientCloudLandscape.uiStatus,this.props.englishValue(""))

      }</span></td></tr>
        <tr className="trHeader">
          <td>{this.props.englishValue("_pdf_Type of Service")}</td>
          <td>{this.props.englishValue("_pdf_Factors for Manage Delivery Assurance")}</td>
          <td>{this.props.englishValue("_pdf_E")}</td>
          <td>{this.props.englishValue("_pdf_l1")}</td>
          <td>{this.props.englishValue("_pdf_l2")}</td>
          <td>{this.props.englishValue("_pdf_l3")}</td>
          <td>{this.props.englishValue("_pdf_l4")}</td>
          <td>{this.props.englishValue("_pdf_M.En")}</td>
          <td>{this.props.englishValue("_pdf_Re-h")}</td>
          <td>{this.props.englishValue("_pdf_Re-p")}</td>
          <td>{this.props.englishValue("_pdf_Re-a")}</td>
          <td>{this.props.englishValue("_pdf_Saas")}</td>
          <td>{this.props.englishValue("_pdf_l1")}</td>
          <td>{this.props.englishValue("_pdf_l2")}</td>
          <td>{this.props.englishValue("_pdf_l3")}</td>
          <td>{this.props.englishValue("_pdf_l4")}</td>
          <td>{this.props.englishValue("_pdf_M.En")}</td>
        </tr>

        {estimate.userInputs.clientCloudLandscape.cloudAppsAndblendedEffortsDistributionPercentage.map((rowElement, index) => {
          let cname = "borderBottom1px"
          if (index + 1 === estimate.userInputs.clientCloudLandscape.cloudAppsAndblendedEffortsDistributionPercentage.length)
            cname = ""

          return <tr className={cname}>
            <td className="borderBottom1px">{rowElement.serviceType}</td>
            <td className="borderBottom1px">{rowElement.cloudApplicationDistribution}</td>

            <td className="borderBottom1px">{getYorN(rowElement.enabled)}</td>
            <td className="borderBottom1px">{getYorN(rowElement.appliedToL1)}</td>
            <td className="borderBottom1px">{getYorN(rowElement.appliedToL2)}</td>
            <td className="borderBottom1px">{getYorN(rowElement.appliedToL3)}</td>
            <td className="borderBottom1px">{getYorN(rowElement.appliedToL4)}</td>
            <td className="borderBottom1px">{getYorN(rowElement.appliedToMinorEnh)}</td>
            <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.reHostPercentage)}</td>
            <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.rePlatformRefactorPercentage)}</td>
            <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.reArchitectReBuildPercentage)}</td>
            <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.saasPercentage)}</td>
            <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.blendedEffortsDistributionPercentage.blendedEffortsForL1)}</td>
            <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.blendedEffortsDistributionPercentage.blendedEffortsForL2)}</td>
            <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.blendedEffortsDistributionPercentage.blendedEffortsForL3)}</td>
            <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.blendedEffortsDistributionPercentage.blendedEffortsForL4)}</td>
            <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.blendedEffortsDistributionPercentage.blendedEffortsForMinorEnh)}</td>
          </tr>
        })

        }
      </table><table>
        <tr >
          <td colSpan="12">{this.props.englishValue("totalBlended")}</td>
        </tr><tr className="borderRight1px" >
          <td >{this.props.getPdfPrintValue(estimate.userInputs.clientCloudLandscape.totalBlendedEffortsForCloudAppsDistribution.totalBlendedEffortsForL1)}</td>
          <td>{this.props.getPdfPrintValue(estimate.userInputs.clientCloudLandscape.totalBlendedEffortsForCloudAppsDistribution.totalBlendedEffortsForL2)}</td>
          <td>{this.props.getPdfPrintValue(estimate.userInputs.clientCloudLandscape.totalBlendedEffortsForCloudAppsDistribution.totalBlendedEffortsForL3)}</td>
          <td>{this.props.getPdfPrintValue(estimate.userInputs.clientCloudLandscape.totalBlendedEffortsForCloudAppsDistribution.totalBlendedEffortsForL4)}</td>
          <td>{this.props.getPdfPrintValue(estimate.userInputs.clientCloudLandscape.totalBlendedEffortsForCloudAppsDistribution.totalBlendedEffortsForMinorEnh)}</td>
        </tr>
        <tr className="borderRight1px">
          <td className="borderBottom1px" >{this.props.englishValue("totalBlendedEffortsForL1")}</td>
          <td className="borderBottom1px">{this.props.englishValue("totalBlendedEffortsForL2")}</td>
          <td className="borderBottom1px">{this.props.englishValue("totalBlendedEffortsForL3")}</td>
          <td className="borderBottom1px">{this.props.englishValue("totalBlendedEffortsForL4")}</td>
          <td className="borderBottom1px">{this.props.englishValue("totalBlendedEffortsForMinorEnh")}</td>
        </tr>
      </table>
            {/*  Client's Cloud Landscape(Advanced Cloud Input) End */}

    </div>)
  }
}
export default Page6