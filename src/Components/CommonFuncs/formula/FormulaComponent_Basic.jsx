import {
  general_appCountComplexityBasedDistribution_C31,
  general_appCountComplexityBasedDistribution_D31,
  general_appCountComplexityBasedDistribution_E31,
  general_cotsThirdPartyAppCountDistribution_C33
} from './FormulaComponent_General'
import {
  calculateTicketDistributionPercentageAndBaselineHoursForL2,
  calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs
} from './FormulaComponent_applicationTechnology';
import { input_validation_main } from './Validations/ValidationMain';
import { englishValue } from '../../../Utils/CommonFunc';
import { cloud_appScopeCoveredPercentage } from './formulaProductivity_cloud';
import { devscops_DevOpsOnCloudOverall } from './formulaProductivity_devscops';
import NonLabour from '../../../Pages/OpportunityInputsParameter/NonLabour/NonLabour';
import { NonLabourNumberOfApplicationScope } from './FormulaComponent_NonLabour';
import { TransistionOfApplicationScope } from './FormulaComponent_Transistion';
import { ams_ticketDistribution_annualNumberOfTickets_retiring_F40 } from './FormulaComponent_AMS';
const btnFunction = (objBtn) => {
  let inputBtnData = {}
  if (objBtn.errorBtn) {
    inputBtnData = {
      RestButton: true,
      EstimateButton: true,
      SaveButton: false,
      CalculateButton: false,
      SendForReivewButton: false,
      Export: false,
      inputButton: false,
      outputButton: false,
      calculateModal: false,
      saveModal: false
    }
  }
  else {
    inputBtnData = {
      RestButton: true, EstimateButton: true,
      SaveButton: false,
      CalculateButton: true,
      SendForReivewButton: false,
      Export: false,
      inputButton: true,
      outputButton: false,
      calculateModal: false,
      saveModal: false
    }
  }
  return inputBtnData
}
export const retiringApplicationHandler = (props, basicInfo) => {
  let ObjBtnStatus = {
    errorBtn: false,
    cheackBtn: false
  }
  let userData = props.userInpuData.defaultInputData.response;
  let userInputData = userData['estimate']['userInputs'];

  userInputData['basicInfo'] = basicInfo;
  userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y1'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y1']));
  userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y2'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y2']));
  userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y3'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y3']));
  userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y4'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y4']));
  userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y5'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y5']));
  userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y6'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y6']));
  userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y7'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y7']));

  userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y1'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y1']));
  userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y2'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y2']));
  userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y3'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y3']));
  userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y4'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y4']));
  userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y5'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y5']));
  userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y6'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y6']));
  userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y7'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y7']));


  userInputData['basicInfo']['numberOfAppsInScope'] = Math.round(Number(basicInfo['numberOfAppsInScope']));
  userInputData['basicInfo']['numberOfAppsInScopeY2'] = Math.round(Number(basicInfo['numberOfAppsInScopeY2']));
  userInputData['basicInfo']['numberOfAppsInScopeY3'] = Math.round(Number(basicInfo['numberOfAppsInScopeY3']));
  userInputData['basicInfo']['numberOfAppsInScopeY4'] = Math.round(Number(basicInfo['numberOfAppsInScopeY4']));
  userInputData['basicInfo']['numberOfAppsInScopeY5'] = Math.round(Number(basicInfo['numberOfAppsInScopeY5']));
  userInputData['basicInfo']['numberOfAppsInScopeY6'] = Math.round(Number(basicInfo['numberOfAppsInScopeY6']));
  userInputData['basicInfo']['numberOfAppsInScopeY7'] = Math.round(Number(basicInfo['numberOfAppsInScopeY7']));
  userInputData['basicInfo']['numberOfAppsInScope'] = Math.round(Number(basicInfo['numberOfAppsInScope']));
  userInputData['basicInfo']['numberOfAppsInScopeY2'] = Math.round(Number(basicInfo['numberOfAppsInScopeY2']));
  userInputData['basicInfo']['numberOfAppsInScopeY3'] = Math.round(Number(basicInfo['numberOfAppsInScopeY3']));
  userInputData['basicInfo']['numberOfAppsInScopeY4'] = Math.round(Number(basicInfo['numberOfAppsInScopeY4']));
  userInputData['basicInfo']['numberOfAppsInScopeY5'] = Math.round(Number(basicInfo['numberOfAppsInScopeY5']));
  userInputData['basicInfo']['numberOfAppsInScopeY6'] = Math.round(Number(basicInfo['numberOfAppsInScopeY6']));
  userInputData['basicInfo']['numberOfAppsInScopeY7'] = Math.round(Number(basicInfo['numberOfAppsInScopeY7']));
  userInputData['basicInfo']['transitionDurationInMonths'] = Math.round(Number(basicInfo['transitionDurationInMonths']));
  userInputData['basicInfo']['dealStartDate'] = basicInfo['dealStartDate'];
  let passingYear = Number(userInputData['basicInfo']['dealDurationInMonths']) / 12;
  userInputData['basicInfo']['dealDurationInYears'] = Number(passingYear.toFixed(2));
  userInputData['basicInfo']['dealDurationInMonths'] = Math.round(Number(basicInfo['dealDurationInMonths']));
  // if (!userInputData['basicInfo']['uiStatus']['iconStatus']['ok']) {
  //   ObjBtnStatus.errorBtn = true
  // }
  //JIRA 1137 retiring Application
  ams_ticketDistribution_annualNumberOfTickets_retiring_F40(props, userInputData)

  input_validation_main(props, userInputData, ObjBtnStatus);
  let btnInput = btnFunction(ObjBtnStatus)
  props.userInputDataEditFormulaInfo(userInputData, btnInput);

}

export const BasicInfoNumberOfApplicationScope = (props, basicInfo, newDistributionArr) => {

  return new Promise((resolve, reject) => {
    let ObjBtnStatus = {
      errorBtn: false,
      cheackBtn: false
    }
    let userData = props.userInpuData.defaultInputData.response;
    let userInputData = userData['estimate']['userInputs'];

    let addedTechnology = newDistributionArr.every((ele) => ele['uiStatus']['iconStatus']['ok']);
    if (true) {
      //basic info
      userInputData['basicInfo'] = basicInfo;
      // if (!userInputData['basicInfo']['uiStatus']['iconStatus']['ok']) {
      //   ObjBtnStatus.errorBtn = true
      // }


      //Coverting string values to number as per need of the JSON to load data
      userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y1'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y1']));
      userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y2'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y2']));
      userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y3'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y3']));
      userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y4'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y4']));
      userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y5'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y5']));
      userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y6'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y6']));
      userInputData['basicInfo']['numberOfAppsInScopeYoYIncludingGrowth']['y7'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYIncludingGrowth']['y7']));

      userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y1'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y1']));
      userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y2'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y2']));
      userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y3'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y3']));
      userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y4'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y4']));
      userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y5'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y5']));
      userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y6'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y6']));
      userInputData['basicInfo']['numberOfAppsInScopeYoYGettingRetiredOnly']['y7'] = Math.round(Number(basicInfo['numberOfAppsInScopeYoYGettingRetiredOnly']['y7']));


      userInputData['basicInfo']['numberOfAppsInScope'] = Math.round(Number(basicInfo['numberOfAppsInScope']));
      userInputData['basicInfo']['numberOfAppsInScopeY2'] = Math.round(Number(basicInfo['numberOfAppsInScopeY2']));
      userInputData['basicInfo']['numberOfAppsInScopeY3'] = Math.round(Number(basicInfo['numberOfAppsInScopeY3']));
      userInputData['basicInfo']['numberOfAppsInScopeY4'] = Math.round(Number(basicInfo['numberOfAppsInScopeY4']));
      userInputData['basicInfo']['numberOfAppsInScopeY5'] = Math.round(Number(basicInfo['numberOfAppsInScopeY5']));
      userInputData['basicInfo']['numberOfAppsInScopeY6'] = Math.round(Number(basicInfo['numberOfAppsInScopeY6']));
      userInputData['basicInfo']['numberOfAppsInScopeY7'] = Math.round(Number(basicInfo['numberOfAppsInScopeY7']));
      userInputData['basicInfo']['dealDurationInMonths'] = Math.round(Number(basicInfo['dealDurationInMonths']));
      userInputData['basicInfo']['transitionDurationInMonths'] = Math.round(Number(basicInfo['transitionDurationInMonths']));
      userInputData['basicInfo']['dealStartDate'] = basicInfo['dealStartDate'];
      let passingYear = Number(userInputData['basicInfo']['dealDurationInMonths']) / 12;
      userInputData['basicInfo']['dealDurationInYears'] = Number(passingYear.toFixed(2));
      // userInputData['basicInfo']['dealDurationInYears'] = (Number(basicInfo['dealDurationInYears']));
      //JIRA 1137 retiring Application
      ams_ticketDistribution_annualNumberOfTickets_retiring_F40(props, userInputData)
      let distributionArr = newDistributionArr.map((ele, index) => {
        let countApp = parseFloat(((ele['appDistributionPercentage'] * Number(userInputData['basicInfo']['numberOfAppsInScope'])) / 100).toFixed(2))
        return {
          ...ele,
          countOfApps: countApp
        }
      })


      distributionArr.forEach((ele) => {
        // delete ele['id'];
        delete ele['isTechnologyTable'];
      })
      // // F10 Application Distribution
      userInputData['appTechnologyDistribution'] = {
        ...userInputData['appTechnologyDistribution'],
        "stdNonStdWorkStreams": distributionArr
      };

      let totalCOTSpercentage = 0;
      newDistributionArr.forEach((ele, index) => {
        if (ele['workStream'].toLowerCase().includes('COTS_ISV_Packages'.toLowerCase())) {
          totalCOTSpercentage = totalCOTSpercentage + Number(ele['appDistributionPercentage'])
        }
      });
      //adding cotsThirdPartyPercentageOfTotalApps (general)  C33
      userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['simple'] =
        parseFloat(totalCOTSpercentage);

      general_cotsThirdPartyAppCountDistribution_C33(props, userInputData)


      //general C31 Application count by complexity         
      userInputData['general']['appCountComplexityBasedDistribution']['simple'] =
        parseFloat(((Number(userInputData['general']['appComplexityBasedDistributionPercentage']
        ['simple']) * Number(basicInfo['numberOfAppsInScope'])) / 100).toFixed(2));

      //general D31 Application count by complexity    
      userInputData['general']['appCountComplexityBasedDistribution']['medium'] =
        parseFloat(((Number(userInputData['general']['appComplexityBasedDistributionPercentage']
        ['medium']) * Number(basicInfo['numberOfAppsInScope'])) / 100).toFixed(2));

      //general E31 Application count by complexity    
      userInputData['general']['appCountComplexityBasedDistribution']['complex'] =
        parseFloat(((Number(userInputData['general']['appComplexityBasedDistributionPercentage']
        ['complex']) * Number(basicInfo['numberOfAppsInScope'])) / 100).toFixed(2));

      //general What percent of total Applications are COTS/3rd Party F33
      userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['total'] = (
        Math.round(((Number(userInputData['general']['cotsThirdPartyAppCountDistribution']
        ['total']) / Number(basicInfo['numberOfAppsInScope'])) * 100).toFixed(2)).toFixed(2));
      if (isNaN(userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['total'])) {
        userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['total'] = 0;
      }

      // General F36 What percent of total applications are critical? - Total 
      userInputData['general']['criticalAppPercentageOfTotalApps']['total'] =
        (((Number(userInputData['general']['criticalAppCountDistribution']
        ['total']) / Number(basicInfo['numberOfAppsInScope'])) * 100).toFixed(2));

      if (isNaN(userInputData['general']['criticalAppPercentageOfTotalApps']['total'])) {
        userInputData['general']['criticalAppPercentageOfTotalApps']['total'] = 0;
      }

      //What percent of Applications are on cloud (custom + SaaS) cloudappos F71
      userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['total'] =
        (((Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']
        ['total']) / Number(basicInfo['numberOfAppsInScope'])) * 100).toFixed(2));


      if (isNaN(userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['total'])) {
        userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['total'] = 0;
      }

      //productivity devscops becoz of f71
      devscops_DevOpsOnCloudOverall(props, userInputData);

      //productivity appScopeCoveredPercentage cloudlever becoz of F71
      let newArr = userInputData.productivity.cloud.cloudLevers.map((ele) => {
        if (ele.isScopeApplicable) {
          ele.appScopeCoveredPercentage = Number(Number(userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['total']).toFixed(2))
        }

        return ele;


      })

      userInputData.productivity.cloud.cloudLevers = newArr;
      cloud_appScopeCoveredPercentage(props, userInputData);
      //Applications percent assumed in scope of Security - Total F98 security
      userInputData['security']['appSecurityScopeDistributionPercentage']['total'] = (
        ((Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['total'])
          / Number(basicInfo['numberOfAppsInScope'])) * 100).toFixed(2));

      // //down tree
      // //c31 Application count by complexity
      general_appCountComplexityBasedDistribution_C31(props, userInputData);
      // //d31 Application count by complexity
      general_appCountComplexityBasedDistribution_D31(props, userInputData);
      // // e31 Application count by complexity 
      general_appCountComplexityBasedDistribution_E31(props, userInputData);

      NonLabourNumberOfApplicationScope(props, userInputData);
      TransistionOfApplicationScope(props, userInputData);
      // appCountComplexityBasedDistribution F31(userInputData);
      userInputData['general']['appCountComplexityBasedDistribution']['complex'] =
        parseFloat(((Number(userInputData['general']['appComplexityBasedDistributionPercentage']
        ['complex']) * Number(basicInfo['numberOfAppsInScope'])) / 100).toFixed(2));

      //   //update basic info 
      props.calculateTicketDistributionPercentage(userInputData).then((res) => {
        if (res.status === 'SUCCESS') {

          //Now API output change feilds calculateTicketDistributionPercentage
          calculateTicketDistributionPercentageAndBaselineHoursForL2(props, userInputData, res.data);
          props.resetDashcalculateMinEnhWtHrs(userInputData).then((res) => {
            if (res.status === 'SUCCESS') {
              //Now API output change feilds calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs
              calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs(props, userInputData, res.data);
              input_validation_main(props, userInputData, ObjBtnStatus);
              let btnInput = btnFunction(ObjBtnStatus)
              props.userInputDataEditFormulaInfo(userInputData, btnInput);
              resolve('success')
            }
            else {
              if (res.errorCode === 'ERRCAS401B') {
                props.history.push('/');
              } else {
                alert(englishValue('TechnicalError'));
                let btnInput = btnFunction(ObjBtnStatus)
                props.userInputDataEditFormulaInfo(userInputData, btnInput);
              }

            }
          }).catch((err) => {
            alert(englishValue('TechnicalError'))
            let btnInput = btnFunction(ObjBtnStatus)
            props.userInputDataEditFormulaInfo(userInputData, btnInput);
          });

        }
        else {
          if (res.errorCode === 'ERRCAS401B') {
            props.history.push('/');
          } else {
            alert(englishValue('TechnicalError'))
            let btnInput = btnFunction(ObjBtnStatus)
            props.userInputDataEditFormulaInfo(userInputData, btnInput);
          }

        }
      }).catch((err) => {
        alert(englishValue('TechnicalError'))
        let btnInput = btnFunction(ObjBtnStatus)
        props.userInputDataEditFormulaInfo(userInputData, btnInput);
      });

    }
    // else{
    //   let ObjBtnStatus = {
    //     errorBtn: true,
    //     cheackBtn: false
    // }
    //   let btnInput = btnFunction(ObjBtnStatus)
    //   props.userInputDataEditFormulaInfo(userInputData, btnInput);
    // }
  })
}
export const BasicInfoNumberOfApplicationScopeDealstartDate = (props, basicInfo, newDistributionArr) => {

  return new Promise((resolve, reject) => {
    let ObjBtnStatus = {
      errorBtn: false,
      cheackBtn: false
    }
    let userData = props.userInpuData.defaultInputData.response;
    let userInputData = userData['estimate']['userInputs'];

    let addedTechnology = newDistributionArr.every((ele) => ele['uiStatus']['iconStatus']['ok']);
    if (true) {
      //basic info
      userInputData['basicInfo'] = basicInfo;
      if (!userInputData['basicInfo']['uiStatus']['iconStatus']['ok']) {
        ObjBtnStatus.errorBtn = true
      }
      userInputData['basicInfo']['numberOfAppsInScope'] = Math.round(Number(basicInfo['numberOfAppsInScope']));
      userInputData['basicInfo']['dealDurationInMonths'] = Math.round(Number(basicInfo['dealDurationInMonths']));
      userInputData['basicInfo']['transitionDurationInMonths'] = Math.round(Number(basicInfo['transitionDurationInMonths']));
      userInputData['basicInfo']['dealStartDate'] = basicInfo['dealStartDate'];
      let passingYear = Number(userInputData['basicInfo']['dealDurationInMonths']) / 12;
      userInputData['basicInfo']['dealDurationInYears'] = Number(passingYear.toFixed(2));
      // userInputData['basicInfo']['dealDurationInYears'] = (Number(basicInfo['dealDurationInYears'])); 
      input_validation_main(props, userInputData, ObjBtnStatus);
      let btnInput = btnFunction(ObjBtnStatus)
      props.userInputDataEditFormulaInfo(userInputData, btnInput);


    }
    // else{
    //   let ObjBtnStatus = {
    //     errorBtn: true,
    //     cheackBtn: false
    // }
    //   let btnInput = btnFunction(ObjBtnStatus)
    //   props.userInputDataEditFormulaInfo(userInputData, btnInput);
    // }
  })
}