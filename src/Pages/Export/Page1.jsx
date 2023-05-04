import React from 'react';
import { CheckmarkFilled16, WarningFilled16, Information16, Link16 } from '@carbon/icons-react';

class Page1 extends React.Component {
  constructor(props) {
    super(props)
  }

  getIndustryValue = (IndustryKey) => {
    let IndustryValue = '';
    this.props.industry.forEach((item, index) => {
      if (item.key === IndustryKey) {
        IndustryValue = item.value;
      }
    });
    return IndustryValue;
  }
  getSaleStage = (saleStageKey) => {
    let salesStageValue = '';

    this.props.salesStage.forEach((item, index) => {
      if (item.key === saleStageKey) {
        salesStageValue = item.value;
      }
    });
    return salesStageValue;
  }
  
  getStatusImage(okStatus) {
    return okStatus ? <span className="pdf_tickmark-class"><CheckmarkFilled16 /></span> : <span className="pdf_warning-class"> <WarningFilled16 /></span>
  }

  getInfoImage() {
    return <span className="pdf_info-class"> <Information16 /></span> 
  }
  getInfoImageCalculation() {
    return <span className="pdf_info-class"> <Link16 /> </span>
  }
  render() {
    let estimate = this.props.estimate;
    
    return (<div id="page1" className="page">
      <div>
        
        <table>
        {/* Start
        fetching the opputunity id detals and clint details on 1st page of PDF */}
          <tr><td>{this.props.englishValue("opportunityId")}: <span className="heading"> {estimate.opportunityId}</span></td><td>{this.props.englishValue("opportunityName")}:<span className="heading">{estimate.opportunityName}</span></td></tr>
          <tr><td>{this.props.englishValue("clientName")}:<span className="heading">{estimate.clientName}</span></td><td>{this.props.englishValue("Industry")}:<span className="heading">{this.getIndustryValue(estimate.industry)}</span></td></tr>
          <tr><td>{this.props.englishValue("estimateTitle")}:<span className="heading">{estimate.estimationTitle}</span></td><td>{this.props.englishValue("pdf_estimateState")}:<span className="heading">{estimate.state}</span></td></tr>
          <tr><td>{this.props.englishValue("saleStage")}:<span className="heading">{this.getSaleStage(estimate.saleStage)}</span></td><td><span className="heading"></span></td></tr>
           {/*fetching the opputunity id detals and clint details on 1st page of PDF  
             End*/}
        </table>
        <hr></hr>
         {/*fetching the index details for PDF  
             Start*/}
        <span className="toc">{this.props.englishValue("_pdf_Table of Contents")}</span>
        <br></br>
        <ol className="numericOl">
          <li>{this.props.englishValue("Opportunity Parameters")}
            <ol className="alphabeticOL">

              <li>{this.props.englishValue("basicInfo")}{this.getStatusImage(estimate.userInputs.basicInfo.uiStatus.iconStatus.ok)}</li>
              <li>{this.props.englishValue("applicationTechnologyDistribution")} {this.getStatusImage(estimate.userInputs.appTechnologyDistribution.uiStatus.iconStatus.ok)}</li>
              <li>{this.props.englishValue("effort_estimation_parameters")} {this.getStatusImage(estimate.userInputs.effortEstimationParameters.uiStatus.iconStatus.ok)}</li>
              <li>{this.props.englishValue("additionalCostInformation")} {this.getStatusImage(estimate.userInputs.additionalCostInfo.uiStatus.iconStatus.ok)}</li>

            </ol>
          </li>
          <li>{this.props.englishValue("Opportunity Inputs")}
            <ol className="alphabeticOL">
              <li>{this.props.englishValue("General")}{this.getStatusImage(estimate.userInputs.general.uiStatus.iconStatus.ok)} </li>
              <li className="hide">{this.props.englishValue("Complexity & Cloud")} {this.getStatusImage(true || estimate.userInputs.com.uiStatus.iconStatus.ok)}</li>
              <li>{this.props.englishValue("AMS Input")} {this.getStatusImage(estimate.userInputs.ams.uiStatus.iconStatus.ok)}</li>
              <li>{this.props.englishValue("Cloud + AppOps")} {this.getStatusImage(estimate.userInputs.cloudAppOps.uiStatus.iconStatus.ok)}</li>
              <li>{this.props.englishValue("Automation")} {this.getStatusImage(estimate.userInputs.automation.uiStatus.iconStatus.ok)}</li>
              <li>{this.props.englishValue("Testing")} {this.getStatusImage(estimate.userInputs.testing.uiStatus.iconStatus.ok)}</li>
              <li>{this.props.englishValue("Security")} {this.getStatusImage(estimate.userInputs.security.uiStatus.iconStatus.ok)}</li>
              <li>{this.props.englishValue("_pdf_Transition")} {this.getStatusImage(estimate.userInputs.transition.uiStatus.iconStatus.ok)}</li>
              <li>{this.props.englishValue("_pdf_Non Labour")} {this.getStatusImage(estimate.userInputs.nonLabour.uiStatus.iconStatus.ok)}</li>
              {/* <li>{this.props.englishValue("Productivity")}{this.getStatusImage(estimate.userInputs.productivity.uiStatus.iconStatus.ok)}</li> */}
            </ol>
          </li>
          <li>{this.props.englishValue("ProductivityInput")}
            <ol className="alphabeticOL">
              <li>{this.props.englishValue("DevSecOps")}{this.getStatusImage(estimate.userInputs.productivity.devSecOps.uiStatus.iconStatus.ok)} </li>
              <li>{this.props.englishValue("Automation1")} {this.getStatusImage(estimate.userInputs.productivity.automation.uiStatus.iconStatus.ok)}</li>
              <li>{this.props.englishValue("Cloud")} {this.getStatusImage(estimate.userInputs.productivity.cloud.uiStatus.iconStatus.ok)}</li>
              <li>{this.props.englishValue("Testing1")} {this.getStatusImage(estimate.userInputs.productivity.testing.uiStatus.iconStatus.ok)}</li>
              <li>{this.props.englishValue("Efficiency")} {this.getStatusImage(estimate.userInputs.productivity.efficiency.uiStatus.iconStatus.ok)}</li>
            </ol>
          </li>
          <br />
          <br />

          <li>{this.props.englishValue("EffortOutput")}{this.getInfoImage()}</li>
          <li>{this.props.englishValue("YearROMCost")}{this.getInfoImage()}</li>

   {/*fetching the index details for PDF  
             End*/}
        </ol>
      </div>
    </div>);
  }
}
export default Page1;