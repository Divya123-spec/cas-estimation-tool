import { ConsoleWireless } from "@carbon/pictograms-react";

export const productivity_devscops_productivityPercentagePlannedForUseOfY1 = (props, userInputData) => {
  let newArr = userInputData.productivity.devSecOps.devSecOpsLevers.map((ele) => {
    if (ele.isScopeApplicable) {
      if (!(ele.code === 'devSecOps_111160' || ele.code === 'devSecOps_111150')) {
        ele.finalProductivityPercentageByApplicability.y1 = Number(
          ((Number(userInputData.productivity.productivityPercentagePlannedForUseOfY1) / 100) *
            (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y1) / 100) *
            (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
        )
      }
      else {
        let devPremY1 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y1) / 100)) *
            ((100 / 100) - ((Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100)))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y1 = Number(
          ((Number(userInputData.productivity.productivityPercentagePlannedForUseOfY1) / 100) *
            (Number(devPremY1) / 100) * 100).toFixed(2)
        );
      }
    }

    return ele;


  })

  userInputData.productivity.devSecOps.devSecOpsLevers = newArr;
}

export const devscops_CommandCenterOperations = (props, userInputData) => {

  let totalCustom_AMSpercentage = 0;
  let totalCloud_Technologiespercentage = 0;
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('Custom_AMS'.toLowerCase())) {
      totalCustom_AMSpercentage = totalCustom_AMSpercentage + Number(ele['appDistributionPercentage'])
    }
  });
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('Cloud Technologies'.toLowerCase())) {
      totalCloud_Technologiespercentage = totalCloud_Technologiespercentage + Number(ele['appDistributionPercentage'])
    }
  });


  let Custom_AMS = 0;
  let CloudTechnologies = 0;
  let Analytics_AMS = 0;
  let COTS_ISV_Packages = 0;
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('Custom_AMS'.toLowerCase())) {
      Custom_AMS = Custom_AMS + Number(ele['appDistributionPercentage'])
    }
  });
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('Cloud Technologies'.toLowerCase())) {
      CloudTechnologies = CloudTechnologies + Number(ele['appDistributionPercentage'])
    }
  });
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('Analytics_AMS'.toLowerCase())) {
      Analytics_AMS = Analytics_AMS + Number(ele['appDistributionPercentage'])
    }
  });
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('COTS_ISV_Packages'.toLowerCase())) {
      COTS_ISV_Packages = COTS_ISV_Packages + Number(ele['appDistributionPercentage'])
    }
  });

  let newArr = userInputData.productivity.devSecOps.devSecOpsLevers.map((ele) => {
    let selctionkey = ele.clientMaturityLevelSelectionKey;
    if (!ele.isScopeApplicable) {
      ele.finalProductivityPercentageByApplicability.y1 = 0;
      ele.finalProductivityPercentageByApplicability.y2 = 0;
      ele.finalProductivityPercentageByApplicability.y3 = 0;
      ele.finalProductivityPercentageByApplicability.y4 = 0;
      ele.finalProductivityPercentageByApplicability.y5 = 0;
      ele.finalProductivityPercentageByApplicability.y6 = 0;
      ele.finalProductivityPercentageByApplicability.y7 = 0;
      if (ele.code === 'devSecOps_111110') {

        ele.appScopeCoveredPercentage = Number((Custom_AMS + CloudTechnologies + Analytics_AMS + COTS_ISV_Packages).toFixed(2));
        devscops_selectionkey_appScopeCoveredPercentage_dependency(selctionkey,ele)
      }

      if (ele.code === 'devSecOps_111120') {

        ele.appScopeCoveredPercentage = Number((Custom_AMS + CloudTechnologies + Analytics_AMS + COTS_ISV_Packages).toFixed(2));
        devscops_selectionkey_appScopeCoveredPercentage_dependency(selctionkey,ele)
      }

      if (ele.code === 'devSecOps_111130') {

        ele.appScopeCoveredPercentage = Number((Custom_AMS + CloudTechnologies + Analytics_AMS + COTS_ISV_Packages).toFixed(2));
        devscops_selectionkey_appScopeCoveredPercentage_dependency(selctionkey,ele)
      }

    }
    else {
      if (ele.code === 'devSecOps_111110') {
        ele.appScopeCoveredPercentage = Number((Custom_AMS + CloudTechnologies + Analytics_AMS + COTS_ISV_Packages).toFixed(2));
        devscops_selectionkey_appScopeCoveredPercentage_dependency(selctionkey,ele)
      }
      if (ele.code === 'devSecOps_111120') {

        ele.appScopeCoveredPercentage = Number((Custom_AMS + CloudTechnologies + Analytics_AMS + COTS_ISV_Packages).toFixed(2));
        devscops_selectionkey_appScopeCoveredPercentage_dependency(selctionkey,ele)
      }

      if (ele.code === 'devSecOps_111130') {

        ele.appScopeCoveredPercentage = Number((Custom_AMS + CloudTechnologies + Analytics_AMS + COTS_ISV_Packages).toFixed(2));
        devscops_selectionkey_appScopeCoveredPercentage_dependency(selctionkey,ele)
      }

    }

    return ele;


  })

  userInputData.productivity.devSecOps.devSecOpsLevers = newArr;
  devscops_isScopeApplicablity(props, userInputData);
}

export const devscops_PMOSLAMgmtReporting = (props, userInputData) => {

  let newArr = userInputData.productivity.devSecOps.devSecOpsLevers.map((ele) => {
    let selctionkey = ele.clientMaturityLevelSelectionKey;
    if (!ele.isScopeApplicable) {
      ele.finalProductivityPercentageByApplicability.y1 = 0;
      ele.finalProductivityPercentageByApplicability.y2 = 0;
      ele.finalProductivityPercentageByApplicability.y3 = 0;
      ele.finalProductivityPercentageByApplicability.y4 = 0;
      ele.finalProductivityPercentageByApplicability.y5 = 0;
      ele.finalProductivityPercentageByApplicability.y6 = 0;
      ele.finalProductivityPercentageByApplicability.y7 = 0;
      if (ele.code === 'devSecOps_111140') {
        ele.appScopeCoveredPercentage = Number((Number(userInputData['effortEstimationParameters']['governanceUpliftPercentage'])).toFixed(2));;
      }

    }
    else {
      if (ele.code === 'devSecOps_111140') {
        ele.appScopeCoveredPercentage = Number((Number(userInputData['effortEstimationParameters']['governanceUpliftPercentage'])).toFixed(2));;
      }
    }

    return ele;

  })

  userInputData.productivity.devSecOps.devSecOpsLevers = newArr;
  devscops_isScopeApplicablity(props, userInputData);
}

export const devscops_DevOpsonPrem = (props, userInputData) => {
  let totalpercentage = 0;

  let Custom_AMS = 0;
  let CloudTechnologies = 0;
  let Analytics_AMS = 0;
  let COTS_ISV_Packages = 0;
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('Custom_AMS'.toLowerCase())) {
      Custom_AMS = Custom_AMS + Number(ele['appDistributionPercentage'])
    }
  });
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('Cloud Technologies'.toLowerCase())) {
      CloudTechnologies = CloudTechnologies + Number(ele['appDistributionPercentage'])
    }
  });
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('Analytics_AMS'.toLowerCase())) {
      Analytics_AMS = Analytics_AMS + Number(ele['appDistributionPercentage'])
    }
  });
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('COTS_ISV_Packages'.toLowerCase())) {
      COTS_ISV_Packages = COTS_ISV_Packages + Number(ele['appDistributionPercentage'])
    }
  });
  totalpercentage = Number((Custom_AMS + CloudTechnologies + Analytics_AMS + COTS_ISV_Packages).toFixed(2));
  let SASSCustom = userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['total'];

  let newArr = userInputData.productivity.devSecOps.devSecOpsLevers.map((ele) => {
    let selctionkey = ele.clientMaturityLevelSelectionKey;
    if (!ele.isScopeApplicable) {
      ele.finalProductivityPercentageByApplicability.y1 = 0;
      ele.finalProductivityPercentageByApplicability.y2 = 0;
      ele.finalProductivityPercentageByApplicability.y3 = 0;
      ele.finalProductivityPercentageByApplicability.y4 = 0;
      ele.finalProductivityPercentageByApplicability.y5 = 0;
      ele.finalProductivityPercentageByApplicability.y6 = 0;
      ele.finalProductivityPercentageByApplicability.y7 = 0;
      if (ele.code === 'devSecOps_111160') {
        ele.appScopeCoveredPercentage = Number((totalpercentage - SASSCustom).toFixed(2));

        if (ele.appScopeCoveredPercentage <= 0) {
          ele.appScopeCoveredPercentage = 0;
        }
      }
    }
    else {
      if (ele.code === 'devSecOps_111160') {
        ele.appScopeCoveredPercentage = Number((totalpercentage - SASSCustom).toFixed(2));

        if (ele.appScopeCoveredPercentage <= 0) {
          ele.appScopeCoveredPercentage = 0;
        }
      }
    }
    return ele;
  })
  userInputData.productivity.devSecOps.devSecOpsLevers = newArr;
  devscops_isScopeApplicablity(props, userInputData);
}


export const devscops_DevOpsOnCloudOverall = (props, userInputData) => {

  let newArr = userInputData.productivity.devSecOps.devSecOpsLevers.map((ele) => {
    let selctionkey = ele.clientMaturityLevelSelectionKey;
    if (!ele.isScopeApplicable) {
      ele.finalProductivityPercentageByApplicability.y1 = 0;
      ele.finalProductivityPercentageByApplicability.y2 = 0;
      ele.finalProductivityPercentageByApplicability.y3 = 0;
      ele.finalProductivityPercentageByApplicability.y4 = 0;
      ele.finalProductivityPercentageByApplicability.y5 = 0;
      ele.finalProductivityPercentageByApplicability.y6 = 0;
      ele.finalProductivityPercentageByApplicability.y7 = 0;
      if (ele.code === 'devSecOps_111150') {

        ele.appScopeCoveredPercentage = parseFloat((Number((userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['total'])).toFixed(2)));
      }
    }
    else {
      if (ele.code === 'devSecOps_111150') {
        ele.appScopeCoveredPercentage = parseFloat((Number((userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['total'])).toFixed(2)));
      }
    }
    return ele;
  })
  userInputData.productivity.devSecOps.devSecOpsLevers = newArr;
  devscops_isScopeApplicablity(props, userInputData);
}



export const devscops_DevOpsOnAIOPS = (props, userInputData) => {

  let newArr = userInputData.productivity.devSecOps.devSecOpsLevers.map((ele) => {
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
      if (ele.code === 'devSecOps_111170' || ele.code === 'devSecOps_111180') {
        ele.appScopeCoveredPercentage = parseFloat(Number((userInputData['general']['aiOpsAppPercentageOfTotalApps']['total'])).toFixed(2));
      }
    }
    return ele;
  })
  userInputData.productivity.devSecOps.devSecOpsLevers = newArr;
  devscops_isScopeApplicablity(props, userInputData);
}
//JIRA 1107 here if we change depencdency of devSecOps_111110/devSecOps_111120/devSecOps_111130 then we need to check selection key and calculate the appscorePercentage
const devscops_selectionkey_appScopeCoveredPercentage = (selectionkey,props, userInputData,ele) => {
  let Custom_AMS = 0;
  let CloudTechnologies = 0;
  let Analytics_AMS = 0;
  let COTS_ISV_Packages = 0;
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('Custom_AMS'.toLowerCase())) {
      Custom_AMS = Custom_AMS + Number(ele['appDistributionPercentage'])
    }
  });
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('Cloud Technologies'.toLowerCase())) {
      CloudTechnologies = CloudTechnologies + Number(ele['appDistributionPercentage'])
    }
  });
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('Analytics_AMS'.toLowerCase())) {
      Analytics_AMS = Analytics_AMS + Number(ele['appDistributionPercentage'])
    }
  });
  userInputData['appTechnologyDistribution']['stdNonStdWorkStreams'].forEach((ele, index) => {
    if (ele['workStream'].toLowerCase().includes('COTS_ISV_Packages'.toLowerCase())) {
      COTS_ISV_Packages = COTS_ISV_Packages + Number(ele['appDistributionPercentage'])
    }
  });
  ele.appScopeCoveredPercentage = Number((Custom_AMS + CloudTechnologies + Analytics_AMS + COTS_ISV_Packages).toFixed(2));
  if (selectionkey == 'default') {
    ele.appScopeCoveredPercentage  = ele.appScopeCoveredPercentage;
  } else if (selectionkey == 'medium') {
    ele.appScopeCoveredPercentage  = ele.appScopeCoveredPercentage / 2;
  } else if (selectionkey == 'high') {
    ele.appScopeCoveredPercentage  = ele.appScopeCoveredPercentage / 4;
  }

  return ele.appScopeCoveredPercentage 
}

//JIRA 1107 here if we change depencdency of devSecOps_111110/devSecOps_111120/devSecOps_111130 then we need to check selection key and calculate the appscorePercentage
const devscops_selectionkey_appScopeCoveredPercentage_dependency = (selectionkey,ele) => {
  if (selectionkey == 'default') {
    ele.appScopeCoveredPercentage  = ele.appScopeCoveredPercentage;
  } else if (selectionkey == 'medium') {
    ele.appScopeCoveredPercentage  = ele.appScopeCoveredPercentage / 2;
  } else if (selectionkey == 'high') {
    ele.appScopeCoveredPercentage  = ele.appScopeCoveredPercentage / 4;
  }

  return ele.appScopeCoveredPercentage 
}
export const devscops_isScopeApplicablity = (props, userInputData) => {
  let newArr = userInputData.productivity.devSecOps.devSecOpsLevers.map((ele) => {
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
    
       if (!(ele.code === 'devSecOps_111160' || ele.code === 'devSecOps_111150')) {
        if (ele.code == 'devSecOps_111110'||ele.code == 'devSecOps_111120'||ele.code == 'devSecOps_111130') {
          devscops_selectionkey_appScopeCoveredPercentage(selctionkey,props, userInputData,ele)
        } 
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
      else {
        devscops_DevOpsOnCloudOverall_Prem(props, userInputData);
      }
    }

    return ele;


  })

  userInputData.productivity.devSecOps.devSecOpsLevers = newArr
}

export const devscops_DevOpsOnCloudOverall_Prem = (props, userInputData) => {
  let newArr = userInputData.productivity.devSecOps.devSecOpsLevers.map((ele) => {
    if (ele.code === 'devSecOps_111160') {
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
        let devPremY1 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y1) / 100)) *
            ((100 / 100) - ((Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100)))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y1 = Number(
          ((Number(userInputData.productivity.productivityPercentagePlannedForUseOfY1) / 100) *
            (Number(devPremY1) / 100) * 100).toFixed(2)
        );
        let devPremY2 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y2) / 100)) *
            ((100 / 100) - (
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y2) / 100)
            ))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y2 = Number(
          (
            (Number(devPremY2) / 100)
            * 100).toFixed(2)
        );
        let devPremY3 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y3) / 100)) *
            ((100 / 100) - (
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y2) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y3) / 100)
            ))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y3 = Number(
          (
            (Number(devPremY3) / 100) * 100).toFixed(2)
        );
        let devPremY4 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y4) / 100)) *
            ((100 / 100) - (
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y2) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y3) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y4) / 100)
            ))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y4 = Number(
          (
            (Number(devPremY4) / 100) * 100).toFixed(2)
        );
        let devPremY5 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y5) / 100)) *
            ((100 / 100) - (
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y2) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y3) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y4) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y5) / 100)
            ))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y5 = Number(
          (
            (Number(devPremY5) / 100) * 100).toFixed(2)
        );
        let devPremY6 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y6) / 100)) *
            ((100 / 100) - (
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y2) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y3) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y4) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y5) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y6) / 100)
            ))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y6 = Number(
          (
            (Number(devPremY6) / 100) * 100).toFixed(2)
        );
        let devPremY7 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y7) / 100)) *
            ((100 / 100) - (
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y2) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y3) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y4) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y5) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y6) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y7) / 100)
            ))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y7 = Number(
          (
            (Number(devPremY7) / 100) * 100).toFixed(2)
        )
      }
    }
    else if (ele.code === 'devSecOps_111150') {
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
        let devPremY1 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y1) / 100)) *
            (((Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100)))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y1 = Number(
          ((Number(userInputData.productivity.productivityPercentagePlannedForUseOfY1) / 100) *
            (Number(devPremY1) / 100) * 100).toFixed(2)
        );
        let devPremY2 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y2) / 100)) *
            ((
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y2) / 100)
            ))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y2 = Number(
          (
            (Number(devPremY2) / 100)
            * 100).toFixed(2)
        );
        let devPremY3 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y3) / 100)) *
            ((
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y2) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y3) / 100)
            ))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y3 = Number(
          (
            (Number(devPremY3) / 100) * 100).toFixed(2)
        );
        let devPremY4 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y4) / 100)) *
            ((
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y2) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y3) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y4) / 100)
            ))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y4 = Number(
          (
            (Number(devPremY4) / 100) * 100).toFixed(2)
        );
        let devPremY5 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y5) / 100)) *
            ((
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y2) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y3) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y4) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y5) / 100)
            ))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y5 = Number(
          (
            (Number(devPremY5) / 100) * 100).toFixed(2)
        );
        let devPremY6 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y6) / 100)) *
            ((
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y2) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y3) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y4) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y5) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y6) / 100)
            ))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y6 = Number(
          (
            (Number(devPremY6) / 100) * 100).toFixed(2)
        );
        let devPremY7 = Number(
          ((((Number(ele.selectedProductivityPercentageByClientMaturityLevel.y7) / 100)) *
            ((
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y1) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y2) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y3) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y4) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y5) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y6) / 100) +
              (Number(userInputData.productivity.cloud.cloudLevers[0].selectedProductivityPercentageByClientMaturityLevel.y7) / 100)
            ))) * 100).toFixed(2)
        );
        ele.finalProductivityPercentageByApplicability.y7 = Number(
          (
            (Number(devPremY7) / 100) * 100).toFixed(2)
        )
      }
    }
    return ele;


  })

  userInputData.productivity.devSecOps.devSecOpsLevers = newArr
}

///formulaProductivity_devscops