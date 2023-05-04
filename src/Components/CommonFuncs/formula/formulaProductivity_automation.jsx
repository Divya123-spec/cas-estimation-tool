import { devscops_DevOpsOnCloudOverall_Prem } from "./formulaProductivity_devscops";

export const productivity_automation_productivityPercentagePlannedForUseOfY1 = (props, userInputData) => {
  let newArr = userInputData.productivity.automation.automationLevers.map((ele) => {
    let selctionkey = ele.clientMaturityLevelSelectionKey;
    if (ele.isScopeApplicable) {
      ele.finalProductivityPercentageByApplicability.y1 = Number(
        ((Number(userInputData.productivity.productivityPercentagePlannedForUseOfY1) / 100) *
          (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y1) / 100) *
          (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
      )
    }

    return ele;


  })

  userInputData.productivity.automation.automationLevers = newArr;
}






export const Automation_appScopeCoveredPercentage = (props, userInputData) => {

  let totalSAP_AMSpercentage = 0;
  let totalOracle_AMSpercentage = 0;
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('SAP_AMS'.toLowerCase())) {
      totalSAP_AMSpercentage = totalSAP_AMSpercentage + Number(ele['appDistributionPercentage'])
    }
  });
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('Oracle_AMS'.toLowerCase())) {
      totalOracle_AMSpercentage = totalOracle_AMSpercentage + Number(ele['appDistributionPercentage'])
    }
  });

  let newArr = userInputData.productivity.automation.automationLevers.map((ele) => {
    let selctionkey = ele.clientMaturityLevelSelectionKey;
    if (ele.code == "automation_222250") {

      ele.appScopeCoveredPercentage = Number(((Number(userInputData.effortEstimationParameters.governanceUpliftPercentage) / 100)
        * ((Number(userInputData.automation.digitalWorkerScopeOnPerformActivities.digitalPMOScope.digitalPMOScopePercentage)) / 100) * 100).toFixed(2))

    }

    if (ele.code == "automation_222260") {

      // ele.appScopeCoveredPercentage = Number((((100 / 100) - (Number((totalCustom_AMSpercentage) + (totalCloud_Technologiespercentage)) / 100))
      //   * 100).toFixed(2))
      ele.appScopeCoveredPercentage = ((Number((100 / 100))
        * ((Number(userInputData.automation.digitalWorkerScopeOnPerformActivities.digitalQAScope.digitalQAScopePercentage)) / 100) * 100))

    }

    if (ele.code == "automation_222270") {

      // ele.appScopeCoveredPercentage = Number((((100 / 100) - (Number((totalCustom_AMSpercentage) + (totalCloud_Technologiespercentage)) / 100))
      //   * 100).toFixed(2))
      ele.appScopeCoveredPercentage = Number((((Number(totalSAP_AMSpercentage) + Number(totalOracle_AMSpercentage))) * (Number(userInputData.automation.digitalWorkerScopeOnPerformActivities.ticketManagerScope.ticketManagerScopePercentage)) / 100).toFixed(2))
    }

    if (ele.code == "automation_222280") {

      // ele.appScopeCoveredPercentage = Number((((100 / 100) - (Number((totalCustom_AMSpercentage) + (totalCloud_Technologiespercentage)) / 100))
      //   * 100).toFixed(2))
      ele.appScopeCoveredPercentage = Number((((Number(totalSAP_AMSpercentage) + Number(totalOracle_AMSpercentage))) * (Number(userInputData.automation.digitalWorkerScopeOnPerformActivities.jobMonitorScope.jobMonitorScopePercentage)) / 100).toFixed(2))
    }


    // if (ele.productivityLever == "Agent Assist") {

    //   // ele.appScopeCoveredPercentage = Number((((100 / 100) - (Number((totalCustom_AMSpercentage) + (totalCloud_Technologiespercentage)) / 100))
    //   //   * 100).toFixed(2))
    //   ele.appScopeCoveredPercentage = Number((Number(totalSAP_AMSpercentage) + Number(totalOracle_AMSpercentage)).toFixed(2))
    // }

    if (ele.code == "automation_222290") {

      // ele.appScopeCoveredPercentage = Number((((100 / 100) - (Number((totalCustom_AMSpercentage) + (totalCloud_Technologiespercentage)) / 100))
      //   * 100).toFixed(2))
      ele.appScopeCoveredPercentage = (((Number(userInputData.automation.digitalWorkerScopeOnPerformActivities.ansibleMoniringScope.ansibleMoniringScopePercentage)) / 100) * 100)

    }

    return ele;

  })

  userInputData.productivity.automation.automationLevers = newArr;
  automation_isScopeApplicablity(props, userInputData);
  //devscops_DevOpsOnCloudOverall_Prem(props, userInputData);

}




export const automation_isScopeApplicablity = (props, userInputData) => {
  let newArr = userInputData.productivity.automation.automationLevers.map((ele) => {
    let selctionkey = ele.clientMaturityLevelSelectionKey;
    if (!ele.isScopeApplicable) {
      ele.finalProductivityPercentageByApplicability.y1 = 0;
      ele.finalProductivityPercentageByApplicability.y2 = 0;
      ele.finalProductivityPercentageByApplicability.y3 = 0;
      ele.finalProductivityPercentageByApplicability.y4 = 0;
      ele.finalProductivityPercentageByApplicability.y5 = 0;
      ele.finalProductivityPercentageByApplicability.y6 = 0;
      ele.finalProductivityPercentageByApplicability.y7 = 0;

    }
    else {
      ele.finalProductivityPercentageByApplicability.y1 = Number(
        ((Number(userInputData.productivity.productivityPercentagePlannedForUseOfY1) / 100) *
          (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y1) / 100) *
          (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
      )
      ele.finalProductivityPercentageByApplicability.y2 = Number(
        (
          (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y2) / 100) *
          (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
      )
      ele.finalProductivityPercentageByApplicability.y3 = Number(
        (
          (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y3) / 100) *
          (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
      )
      ele.finalProductivityPercentageByApplicability.y4 = Number(
        (
          (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y4) / 100) *
          (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
      )
      ele.finalProductivityPercentageByApplicability.y5 = Number(
        (
          (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y5) / 100) *
          (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
      )
      ele.finalProductivityPercentageByApplicability.y6 = Number(
        (
          (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y6) / 100) *
          (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
      )
      ele.finalProductivityPercentageByApplicability.y7 = Number(
        (
          (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y7) / 100) *
          (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
      )
    }

    return ele;


  })

  userInputData.productivity.automation.automationLevers = newArr
}
