import React from 'react';

class Page2 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let estimate = this.props.estimate;
    let getValueFromCollection = (collection, key) => {
      let value = "";
      collection.forEach((item, index) => {
        if (item.key === key) {
          value = item.value;
        }
      });
      return value;

    }
    // start////fteching effort estimation parmeter details
    let getIgniteValue = (key) => {
      let igniteTobeUsedBy = this.props.userDropDownData.defaultDropDown.response.defaultDropdown.igniteToBeUsedBy;
      return getValueFromCollection(igniteTobeUsedBy, key)
    }
    let getSecurityToolValue = (key) => {
      let securityToolIntegrationClientVsIBM = this.props.userDropDownData.defaultDropDown.response.defaultDropdown.securityToolIntegrationClientVsIBM;
      return getValueFromCollection(securityToolIntegrationClientVsIBM, key)

    }
    let getGeoLocationValue = (key) => {
      let dealGeo = this.props.userDropDownData.defaultDropDown.response.defaultDropdown.dealGeo;
      return getValueFromCollection(dealGeo, key)
    }

    let onsiteValue = (key) => {
      let dealGeo = this.props.userDropDownData.defaultDropDown.response.defaultDropdown.onsiteLocation;
      return getValueFromCollection(dealGeo, key)
    }

    let offshoreValue = (key) => {
      let dealGeo = this.props.userDropDownData.defaultDropDown.response.defaultDropdown.offshoreLocation;
      return getValueFromCollection(dealGeo, key)
    }
    let nearshoreValue = (key) => {
      let dealGeo = this.props.userDropDownData.defaultDropDown.response.defaultDropdown.nearshoreLocation;
      return getValueFromCollection(dealGeo, key)
    }
    // fteching effort estimation parmeter details /// end////

    let DateFormatLocalString = (date) => {
      const transitionDate = new Date(date.split('T')[0]);
      let transitiondateNew = transitionDate.toLocaleDateString();
      return transitiondateNew;
    }

    return (<div id="page2" className="page">
      {/* OPPORTUNITY PARAMETERS */}
      <table className="hide"><tr><td>{this.props.englishValue("Opportunity Parameters")}</td><td style={{ float: "right" }}>{estimate.estimationTitle}</td></tr>
        <tr><td colSpan="2"><hr /></td></tr>
      </table>
      {/* fecthing retiring application table */}
      <table>


        <tr><td className="heading allcaps">{this.props.englishValue("Opportunity Parameters")}</td></tr>
        {/*  start
        fteching the basicinfo details */}

        <tr><td><span className="heading">
          {this.props.getStatusIconForSections(estimate.userInputs.basicInfo.uiStatus, this.props.englishValue("basicInfo"))}
        </span></td></tr>

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
        {estimate.userInputs.basicInfo.numberOfAppsInScopeYoYIncludingGrowth ?
          <tr className="borderBottom1px">
            <td>{this.props.englishValue("numberOfAppsInScopeYoYIncludingGrowth")}</td>
            <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y1}</td>
            <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y2}</td>
            <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y3}</td>
            <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y4}</td>
            <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y5}</td>
            <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y6}</td>
            <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y7}</td>
          </tr> : ''
        }
        {estimate.userInputs.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly ? <tr className="borderBottom1px">
          <td>{this.props.englishValue("numberOfAppsInScopeYoYGettingRetiredOnly")}</td>

          <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y1}</td>
          <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y2}</td>
          <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y3}</td>
          <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y4}</td>
          <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y5}</td>
          <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y6}</td>
          <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y7}</td>
        </tr> : ''}


        <tr className="borderBottom1px">
          <td>{this.props.englishValue("finalApplicationScopeYoY")}</td>
          <td>{estimate.userInputs.basicInfo.numberOfAppsInScope}</td>
          <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeY2}</td>
          <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeY3}</td>
          <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeY4}</td>
          <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeY5}</td>
          <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeY6}</td>
          <td>{estimate.userInputs.basicInfo.numberOfAppsInScopeY7}</td>
        </tr>
        <br></br>
        <tr className="borderBottom1px"><td>{this.props.englishValue("durationDealMonths")}</td><td>{estimate.userInputs.basicInfo.dealDurationInMonths}</td></tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("durationTransitionMonths")}
          {/* <span className="smallfont">{this.props.englishValue("Included in overall duration")}</span> */}
        </td><td>{estimate.userInputs.basicInfo.transitionDurationInMonths}</td></tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("calculatedYears")}</td><td>{estimate.userInputs.basicInfo.dealDurationInYears}</td></tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("DealStartDate")}</td><td>{DateFormatLocalString(estimate.userInputs.basicInfo.dealStartDate)}</td></tr>
        {estimate.userInputs.basicInfo.postDecommissionOfAppsTestingEffortPercentage == 0 || estimate.userInputs.basicInfo.postDecommissionOfAppsTestingEffortPercentage ?
          <tr className="borderBottom1px"><td>{this.props.englishValue("numberdecomssion")}</td><td>{(estimate.userInputs.basicInfo.postDecommissionOfAppsTestingEffortPercentage)}%</td></tr>
          : ''}

      </table>


      {/* fteching the basicinfo details  End*/}
      <table style={{ width: "100%" }}><tr><td colSpan="3"><span className="heading">
        {this.props.getStatusIconForSections(estimate.userInputs.appTechnologyDistribution.uiStatus, this.props.englishValue("applicationTechnologyDistribution"))}

      </span></td></tr>
        {/* Start 
            fteching the Application Technology Distribution details */}

        <tr className="trHeader">
          <td>{this.props.englishValue("Workstream")}</td>
          <td>{this.props.englishValue("Sub-Workstream")}</td>
          <td>{this.props.englishValue("refCode")}</td>
          <td>{this.props.englishValue("appDistribution")}</td>
          <td>{this.props.englishValue("countApps")}</td>
        </tr>
        {estimate.userInputs.appTechnologyDistribution.stdNonStdWorkStreams.map((element, index) => {
          let cname = "borderBottom1px"
          if (index + 1 === estimate.userInputs.appTechnologyDistribution.stdNonStdWorkStreams.length)
            cname = ""
          return <tr className={cname} >
            <td className="borderBottom1px">{element.workStream}</td>
            <td className="borderBottom1px">{element.subWorkStream}</td>
            <td className="borderBottom1px">{element.code}</td>
            <td className="borderBottom1px">{element.appDistributionPercentage}</td>
            <td className="borderBottom1px">{element.countOfApps}</td>
          </tr>
        })}
      </table>
      {/* fteching the Application Technology Distribution details  End*/}








      <table>
        {/* Start fteching the Effort Estimation Parameters details  */}

        <tr><td><span className="heading">
          {this.props.getStatusIconForSections(estimate.userInputs.effortEstimationParameters.uiStatus, this.props.englishValue("effort_estimation_parameters"))
            //this.props.englishValue("additionalCostInformation")
          }
        </span></td></tr>
      </table>
      <table>
        <tr className="borderBottom1px"><td></td><td>{this.props.englishValue("Onsite_percentage_Landed_Local")}</td><td>{onsiteValue(estimate.userInputs.effortEstimationParameters.onsiteLocationDefaultSelection)}</td></tr>
        <tr className="borderBottom1px"><td></td><td>{this.props.englishValue("Offshore_percentage_India_enabled_for_now")}</td><td>{offshoreValue(estimate.userInputs.effortEstimationParameters.offshoreLocationDefaultSelection)}</td></tr>
        <tr className="borderBottom1px"><td></td><td>{this.props.englishValue("Nearshore")}</td><td>{nearshoreValue(estimate.userInputs.effortEstimationParameters.nearshoreLocationDefaultSelection)}</td></tr>


        <tr className="borderBottom1px">
          {
            estimate.userInputs.effortEstimationParameters.onsitePercentage >= 0 && estimate.userInputs.effortEstimationParameters.onsitePercentage <= 20 ? <td> </td> : <td>{this.props.getOrangeOrGreenTickWithMessage3(estimate.userInputs.effortEstimationParameters.uiStatus)}</td>
          }
          <td>{(this.props.englishValue("Onsite percentage (Landed + Local + NearShore)"))}</td><td>{this.props.getPdfPercentPrintValue(estimate.userInputs.effortEstimationParameters.onsitePercentage)}</td></tr>
        <tr className="borderBottom1px">
          {
            estimate.userInputs.effortEstimationParameters.offshorePercentage >= 0 && estimate.userInputs.effortEstimationParameters.offshorePercentage <= 100 ? <td> </td> : <td>{this.props.getOrangeOrGreenTickWithMessage3(estimate.userInputs.effortEstimationParameters.uiStatus)}</td>
          }

          <td>{(this.props.englishValue("Offshore percentage (India enabled for now)"))}</td><td>{this.props.getPdfPercentPrintValue(estimate.userInputs.effortEstimationParameters.offshorePercentage)}</td></tr>
        <tr className="borderBottom1px">
          {
            estimate.userInputs.effortEstimationParameters.governanceUpliftPercentage >= 4 && estimate.userInputs.effortEstimationParameters.governanceUpliftPercentage <= 8 ? <td> </td> : <td>{this.props.getOrangeOrGreenTickWithMessage3(estimate.userInputs.effortEstimationParameters.uiStatus)}</td>
          }

          <td>{(this.props.englishValue("Uplift for Governance"))}</td><td>{this.props.getPdfPercentPrintValue(estimate.userInputs.effortEstimationParameters.governanceUpliftPercentage)}</td></tr>
        <tr className="borderBottom1px">
          {
            estimate.userInputs.effortEstimationParameters.onsitePremiumSkillsPercentage >= 0 && estimate.userInputs.effortEstimationParameters.onsitePremiumSkillsPercentage <= 10 ? <td> </td> : <td>{this.props.getOrangeOrGreenTickWithMessage3(estimate.userInputs.effortEstimationParameters.uiStatus)}</td>
          }
          <td>{(this.props.englishValue("Percentage of Premium Skills: Onsite"))} </td><td>{this.props.getPdfPercentPrintValue(estimate.userInputs.effortEstimationParameters.onsitePremiumSkillsPercentage)}</td></tr>
        <tr className="borderBottom1px">
          {
            estimate.userInputs.effortEstimationParameters.offshorePremiumSkillsPercentage >= 0 && estimate.userInputs.effortEstimationParameters.offshorePremiumSkillsPercentage <= 25 ? <td> </td> : <td>{this.props.getOrangeOrGreenTickWithMessage3(estimate.userInputs.effortEstimationParameters.uiStatus)}</td>
          }
          <td>{(this.props.englishValue("Percentage of Premium Skills: Offshore"))}</td><td>{this.props.getPdfPercentPrintValue(estimate.userInputs.effortEstimationParameters.offshorePremiumSkillsPercentage)}</td></tr>




      </table>
      {/* fteching the Effort Estimation Parameters details  End*/}


      <table>
        {/* Start fteching the additionalCostInformation  details  */}

        <tr><td><span className="heading">
          {this.props.getStatusIconForSections(estimate.userInputs.additionalCostInfo.uiStatus, this.props.englishValue("additionalCostInformation"))
            //this.props.englishValue("additionalCostInformation")
          }
        </span></td></tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("costForCognitiveAgentAssist_USD")}</td><td>{this.props.currencyCoverter(estimate.userInputs.additionalCostInfo.costForCognitiveAgentAssist_USD)}</td></tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("costForECATools_USD")}</td><td>{this.props.currencyCoverter(estimate.userInputs.additionalCostInfo.costForECATools_USD)}</td></tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("igniteToBeUsedByDefaultSelection")}</td><td>{getIgniteValue(estimate.userInputs.additionalCostInfo.igniteToBeUsedByDefaultSelection)}</td></tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("igniteToolCostForThreeYears_USD")} </td><td>{this.props.currencyCoverter(estimate.userInputs.additionalCostInfo.igniteToolCostForThreeYears_USD)}</td></tr>
        <tr className="borderBottom1px">
          <td >{this.props.englishValue("securityToolIntegrationClientVsIBMDefaultSelection")}
            <div className="smallFont colorOrange">{
              estimate.userInputs.additionalCostInfo.uiStatus.iconStatus.warning ? estimate.userInputs.additionalCostInfo.uiStatus.iconStatus.warningMessage : ""
              //this.props.englishValue("_pdf_securityToolIntegrationClientVsIBMDefaultSelection_note")

            }</div>
          </td><td>{getSecurityToolValue(estimate.userInputs.additionalCostInfo.securityToolIntegrationClientVsIBMDefaultSelection)}</td></tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("dealGeoDefaultSelection")} </td><td>{getGeoLocationValue(estimate.userInputs.additionalCostInfo.dealGeoDefaultSelection)}</td></tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("conversionINRtoUSD")}<div className="smallFont ">75.96 INR for 1 USD</div></td><td> {(estimate.userInputs.additionalCostInfo.conversionINRtoUSD)}</td></tr>
        <tr className="borderBottom1px"><td>{this.props.englishValue("conversionUSDtoEU")} <div className="smallFont ">1.12  USD for 1 EURO</div></td><td>  {(estimate.userInputs.additionalCostInfo.conversionUSDtoEU)}</td></tr>



      </table>
      {/*Feteching the additionalCostInformation  details  End*/}


    </div>)
  }
}
export default Page2;