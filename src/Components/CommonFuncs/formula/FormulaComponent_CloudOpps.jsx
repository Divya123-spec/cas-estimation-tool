import { moveToCloud_appsNotOnCloudAtStartOfYear_C136, moveToCloud_appsTotalOnCloudByEndOfYear_C138 } from "./FormulaComponent_MoveToCloud";
import { cloud_appScopeCoveredPercentage } from "./formulaProductivity_cloud";
import { devscops_DevOpsOnCloudOverall, devscops_DevOpsonPrem } from "./formulaProductivity_devscops";

export const cloudAppops_totalAppsOnCloudCountDistribution_C84 = (props, userInputData) => {
  //due to C84 change F84 
  //totalAppsOnCloudCountDistribution F84
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['total'] = (
    (Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['complex'])).toFixed(2));

}
export const cloudAppops_totalAppsOnCloudCountDistribution_D84 = (props, userInputData) => {
  //due to D84 change F84 
  //totalAppsOnCloudCountDistribution F84
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['total'] = (
    (Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['complex'])).toFixed(2));

}
export const cloudAppops_totalAppsOnCloudCountDistribution_E84 = (props, userInputData) => {
  //due to E84 change F84 
  //totalAppsOnCloudCountDistribution F84
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['total'] = (
    (Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['complex'])).toFixed(2));

}
export const cloudAppos_totalContainerizedAppsOnCloudCountDistribution_C90 = (props, userInputData) => {
  //totalContainerizedAppsOnCloudCountDistribution F90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['total'] = (
    (Number(userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['complex'])).toFixed(2));

}

export const cloudAppos_totalContainerizedAppsOnCloudCountDistribution_D90 = (props, userInputData) => {
  //totalContainerizedAppsOnCloudCountDistribution F90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['total'] =
    ((Number(userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['complex'])).toFixed(2));

}
export const cloudAppos_totalContainerizedAppsOnCloudCountDistribution_E90 = (props, userInputData) => {
  //totalContainerizedAppsOnCloudCountDistribution F90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['total'] =
    ((Number(userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['complex'])).toFixed(2));
}
export const cloudAppos_replatformRefactorAppsOnCloudCountDistribution_C79 = (props, userInputData) => {
  //eplatformRefactorAppsOnCloudCountDistribution F79
  userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['total'] = (
    (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple'])
      + Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex'])).toFixed(2));
  //totalAppsOnCloudCountDistribution C84 
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['simple'] =
    parseFloat((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['simple'])).toFixed(2));
  cloudAppops_totalAppsOnCloudCountDistribution_C84(props, userInputData)

  //totalContainerizedAppsOnCloudCountDistribution C90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['simple'] = parseFloat(
    (((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['simple']) / 100) * (
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple'])
    )) +
      ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['simple']) / 100) *
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple'])))).toFixed(2));
  //adding to F78
  userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['total'] =
    (
      (
        ((Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['simple']) *
          Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple'])) +
          (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['medium']) *
            Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium'])) +
          (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['complex']) *
            Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex']))
        ) / (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['total']))).toFixed(2));

        if (isNaN(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['total'])) {
          userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['total'] = '0';
        }
}
export const cloudAppos_replatformRefactorAppsOnCloudCountDistribution_D79 = (props, userInputData) => {
  //eplatformRefactorAppsOnCloudCountDistribution F79
  userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['total'] = (
    (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple'])
      + Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium'])
      + Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex'])).toFixed(2));
  //totalAppsOnCloudCountDistribution D84 
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['medium'] = parseFloat((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['medium']) +
    Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium']) +
    Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium']) +
    Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['medium'])).toFixed(2))

  //due to C84 change F84 
  //totalAppsOnCloudCountDistribution F84
  cloudAppops_totalAppsOnCloudCountDistribution_D84(props, userInputData)


  //totalContainerizedAppsOnCloudCountDistribution D90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['medium'] = parseFloat(
    (((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['medium']) / 100) * (
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium'])
    )) +
      ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['medium']) / 100) *
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium'])))).toFixed(2));

          //adding to F78
  userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['total'] =
  (
    (
      ((Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['simple']) *
        Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple'])) +
        (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['medium']) *
          Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium'])) +
        (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['complex']) *
          Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex']))
      ) / (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['total']))).toFixed(2));

      if (isNaN(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['total'])) {
        userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['total'] = '0';
      }
}
export const cloudAppos_replatformRefactorAppsOnCloudCountDistribution_E79 = (props, userInputData) => {
  //eplatformRefactorAppsOnCloudCountDistribution F79
  userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['total'] =
    ((Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple']) + Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium']) + Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex'])).toFixed(2));
  //totalAppsOnCloudCountDistribution E84 
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['complex'] =
    parseFloat((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['complex']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['complex'])).toFixed(2));

  //due to C84 change F84 
  //totalAppsOnCloudCountDistribution F84
  cloudAppops_totalAppsOnCloudCountDistribution_E84(props, userInputData)

  //totalContainerizedAppsOnCloudCountDistribution E90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['complex'] = parseFloat(
    (((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['complex']) / 100) * (
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex'])
    )) +
      ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['complex']) / 100) *
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex'])))).toFixed(2));

          //adding to F78
  userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['total'] =
  (
    (
      ((Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['simple']) *
        Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple'])) +
        (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['medium']) *
          Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium'])) +
        (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['complex']) *
          Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex']))
      ) / (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['total']))).toFixed(2));

      if (isNaN(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['total'])) {
        userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['total'] = '0';
      }
}
export const cloudAppos_notOnCloudAppCountDistribution_F73 = (props, userInputData) => {
    //ading move to cloud c136
    userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y1'] =
    parseFloat((Number(userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['total'])).toFixed(2));
    moveToCloud_appsNotOnCloudAtStartOfYear_C136(props, userInputData);
  
  //notOnCloudAppCountDistribution F73
  userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['total'] =
    ((Number(userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['complex'])).toFixed(2));
       //ading move to cloud c136
    userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y1'] =
    parseFloat((Number(userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['total'])).toFixed(2));
    moveToCloud_appsNotOnCloudAtStartOfYear_C136(props, userInputData);
}
export const cloudAppos_onCloudAppDistributionPercentage_F71 = (props, userInputData) => {
  
   //adding C138
   userInputData['moveToCloud']['appsTotalOnCloudByEndOfYear']['y1'] =
   parseFloat(((Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['total'])) +
       (Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y1']))
   ).toFixed(2));
   moveToCloud_appsTotalOnCloudByEndOfYear_C138(props, userInputData)
  //adding criticalAppCountDistribution (general) f71
  userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['total'] =
    (((Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['total']) /
      (Number(userInputData['basicInfo']['numberOfAppsInScope']))) * 100).toFixed(2));

  if (isNaN(userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['total'])) {
    userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['total'] = '0';
  }
//productivity appScopeCoveredPercentage cloudlever
let newArr = userInputData.productivity.cloud.cloudLevers.map((ele) => {

    ele.appScopeCoveredPercentage=parseFloat(Number( userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['total']).toFixed(2))

  return ele;


})
userInputData.productivity.cloud.cloudLevers = newArr;
cloud_appScopeCoveredPercentage(props,userInputData);
devscops_DevOpsOnCloudOverall(props,userInputData);
devscops_DevOpsonPrem(props,userInputData);
}
export const cloudAppos_rehostedAppsOnCloudCountDistribution_C77 = (props, userInputData) => {
  //rehostedAppsOnCloudCountDistribution F77
  userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['total'] = (
    (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['complex'])).toFixed(2));

  //totalAppsOnCloudCountDistribution C84
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['simple'] =
    parseFloat((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['simple'])).toFixed(2));

  //due to C84 change F84 
  //totalAppsOnCloudCountDistribution F84
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['total'] = (
    (Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['complex'])).toFixed(2));


       //adding F76
  //adding to 76
  userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['total'] =
  (
    (
      ((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['simple']) *
        Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['simple'])) +
        (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['medium']) *
          Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['medium'])) +
        (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['complex']) *
          Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['complex']))
      ) / (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['total']))).toFixed(2));

      if (isNaN(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['total'])) {
        userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['total'] = '0';
      }

}
export const cloudAppos_rehostedAppsOnCloudCountDistribution_D77 = (props, userInputData) => {
  //rehostedAppsOnCloudCountDistribution F77
  userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['total'] = (
    (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['complex'])).toFixed(2));

  //totalAppsOnCloudCountDistribution D84
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['medium'] =
    parseFloat((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['medium'])).toFixed(2));


  //due to D84 change F84 
  //totalAppsOnCloudCountDistribution F84
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['total'] = (
    (Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['complex'])).toFixed(2));

       //adding F76
  //adding to 76
  userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['total'] =
  (
    (
      ((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['simple']) *
        Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['simple'])) +
        (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['medium']) *
          Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['medium'])) +
        (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['complex']) *
          Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['complex']))
      ) / (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['total']))).toFixed(2));


      if (isNaN(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['total'])) {
        userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['total'] = '0';
      }
}
export const cloudAppos_rehostedAppsOnCloudCountDistribution_E77 = (props, userInputData) => {
  //rehostedAppsOnCloudCountDistribution F77
  userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['total'] = (
    (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['complex'])).toFixed(2));
  //totalAppsOnCloudCountDistribution E84
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['complex'] =
    parseFloat((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['complex']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['complex'])).toFixed(2));

  //due to E84 change F84 
  //totalAppsOnCloudCountDistribution F84
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['total'] = (
    (Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['complex'])).toFixed(2));
 //adding F76
  //adding to 76
  userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['total'] =
    (
      (
        ((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['simple']) *
          Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['simple'])) +
          (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['medium']) *
            Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['medium'])) +
          (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['complex']) *
            Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['complex']))
        ) / (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['total']))).toFixed(2));


        if (isNaN(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['total'])) {
          userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['total'] = '0';
        }

}
export const cloudAppos_reArchitectReBuildAppsOnCloudCountDistribution_C81 = (props, userInputData) => {
  //reArchitectReBuildAppsOnCloudCountDistribution F81
  userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['total'] =
    ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex'])).toFixed(2));

  //totalAppsOnCloudCountDistribution C84 
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['simple'] = parseFloat(
    (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['simple'])).toFixed(2));
  cloudAppops_totalAppsOnCloudCountDistribution_C84(props, userInputData)

  //totalContainerizedAppsOnCloudCountDistribution C90

  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['simple'] = parseFloat(
    (((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['simple']) / 100) * (
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple'])
    )) +
      ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['simple']) / 100) *
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple'])))).toFixed(2));

  cloudAppos_totalContainerizedAppsOnCloudCountDistribution_C90(props, userInputData)

  
     //adding to F80
     userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['total'] =
     (
       (
         ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['simple']) *
           Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple'])) +
           (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['medium']) *
             Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium'])) +
           (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['complex']) *
             Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex']))
         ) / (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['total']))).toFixed(2));
  
         
         if (isNaN(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['total'])) {
          userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['total'] = '0';
        }
}

export const cloudAppos_reArchitectReBuildAppsOnCloudCountDistribution_D81 = (props, userInputData) => {

  //reArchitectReBuildAppsOnCloudCountDistribution F81
  userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['total'] =
    ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple'])
      + Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium'])
      +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex'])).toFixed(2));

  //totalAppsOnCloudCountDistribution D84 
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['medium'] =
    parseFloat((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['medium'])).toFixed(2));

  //due to C84 change F84 
  //totalAppsOnCloudCountDistribution F84
  cloudAppops_totalAppsOnCloudCountDistribution_D84(props, userInputData)


  //totalContainerizedAppsOnCloudCountDistribution D90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['medium'] = parseFloat(
    (((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['medium']) / 100) * (
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium'])
    )) +
      ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['medium']) / 100) *
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium'])))).toFixed(2));
  cloudAppos_totalContainerizedAppsOnCloudCountDistribution_D90(props, userInputData)

  
     //adding to F80
     userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['total'] =
     (
       (
         ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['simple']) *
           Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple'])) +
           (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['medium']) *
             Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium'])) +
           (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['complex']) *
             Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex']))
         ) / (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['total']))).toFixed(2));
   
           
         if (isNaN(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['total'])) {
          userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['total'] = '0';
        }
}

export const cloudAppos_reArchitectReBuildAppsOnCloudCountDistribution_E81 = (props, userInputData) => {
  //reArchitectReBuildAppsOnCloudCountDistribution F81
  userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['total'] =
    ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex'])).toFixed(2));

  //totalAppsOnCloudCountDistribution E84 
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['complex'] =
    parseFloat((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['complex']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['complex'])).toFixed(2));

  //due to C84 change F84 
  //totalAppsOnCloudCountDistribution F84
  cloudAppops_totalAppsOnCloudCountDistribution_E84(props, userInputData)

  //totalContainerizedAppsOnCloudCountDistribution E90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['complex'] = parseFloat(
    (((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['complex']) / 100) * (
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex'])
    )) +
      ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['complex']) / 100) *
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex'])))).toFixed(2));
  cloudAppos_totalContainerizedAppsOnCloudCountDistribution_E90(props, userInputData)

     //adding to F80
     userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['total'] =
     (
       (
         ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['simple']) *
           Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple'])) +
           (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['medium']) *
             Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium'])) +
           (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['complex']) *
             Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex']))
         ) / (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['total']))).toFixed(2));
   
         if (isNaN(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['total'])) {
          userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['total'] = '0';
        }
}

export const cloudAppos_saasAppsOnCloudCountDistribution_C83 = (props, userInputData) => {
  //saasAppsOnCloudCountDistribution F83
  userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['total'] = (
    (Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['complex'])).toFixed(2));

  //totalAppsOnCloudCountDistribution C84 
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['simple'] = parseFloat(
    (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['simple'])).toFixed(2));
  cloudAppops_totalAppsOnCloudCountDistribution_C84(props, userInputData)
//adding to F82
userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['total'] =
(
  (
    ((Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['simple']) *
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['simple'])) +
      (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['medium']) *
        Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['medium'])) +
      (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['complex']) *
        Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['complex']))
    ) / (Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['total']))).toFixed(2));

    if (isNaN(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['total'])) {
      userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['total'] = '0';
    }

}

export const cloudAppos_saasAppsOnCloudCountDistribution_D83 = (props, userInputData) => {
  //saasAppsOnCloudCountDistribution F83
  userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['total'] =
    ((Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['complex'])).toFixed(2));

  //totalAppsOnCloudCountDistribution D84 
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['medium'] =
    parseFloat((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['medium'])).toFixed(2));

  //due to C84 change F84 
  //totalAppsOnCloudCountDistribution F84
  cloudAppops_totalAppsOnCloudCountDistribution_D84(props, userInputData)

//adding to F82
userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['total'] =
(
  (
    ((Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['simple']) *
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['simple'])) +
      (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['medium']) *
        Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['medium'])) +
      (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['complex']) *
        Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['complex']))
    ) / (Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['total']))).toFixed(2));

    if (isNaN(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['total'])) {
      userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['total'] = '0';
    }


}

export const cloudAppos_saasAppsOnCloudCountDistribution_E83 = (props, userInputData) => {
  //saasAppsOnCloudCountDistribution F83
  userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['total'] =
    ((Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['complex'])).toFixed(2));

  //totalAppsOnCloudCountDistribution E84 
  userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['complex'] =
    parseFloat((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['complex']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex']) +
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['complex'])).toFixed(2));

  //due to C84 change F84 
  //totalAppsOnCloudCountDistribution F84
  cloudAppops_totalAppsOnCloudCountDistribution_E84(props, userInputData)
//adding to F82
userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['total'] =
(
  (
    ((Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['simple']) *
      Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['simple'])) +
      (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['medium']) *
        Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['medium'])) +
      (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['complex']) *
        Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['complex']))
    ) / (Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['total']))).toFixed(2));

// NAN
    if (isNaN(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['total'])) {
      userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['total'] = '0';
    }

}




export const cloudAppos__onCloudAppCountDistribution_C72 = (props, userInputData) => {
  //adding cloud appos
  //adding onCloudAppCountDistribution (general) F72
  userInputData['cloudAppOps']['onCloudAppCountDistribution']['total'] =
    ((Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple']) + Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex'])).toFixed(2));


  cloudAppos_onCloudAppDistributionPercentage_F71(props, userInputData);

  //adding notOnCloudAppCountDistribution (general) C73
  userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['simple'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['simple']))
    - (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple']))).toFixed(2));
  cloudAppos_notOnCloudAppCountDistribution_F73(props, userInputData);

  //adding rehostedAppsOnCloudCountDistribution (general) C77
  userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['simple'] = parseFloat((
    (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['simple']))
    * (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple'])) / 100).toFixed(2));
  cloudAppos_rehostedAppsOnCloudCountDistribution_C77(props, userInputData);


  //adding replatformRefactorAppsOnCloudCountDistribution (general) C79
  userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple'] = parseFloat((
    (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['simple']))
    * (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple'])) / 100).toFixed(2));
  cloudAppos_replatformRefactorAppsOnCloudCountDistribution_C79(props, userInputData);



  //adding reArchitectReBuildAppsOnCloudCountDistribution (general) C81
  userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple'] = parseFloat((
    (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['simple']))
    * (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple'])) / 100).toFixed(2));
  cloudAppos_reArchitectReBuildAppsOnCloudCountDistribution_C81(props, userInputData)

  //adding saasAppsOnCloudCountDistribution (general) C83
  userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['simple'] = parseFloat((
    (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['simple']))
    * (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple'])) / 100).toFixed(2));
  cloudAppos_saasAppsOnCloudCountDistribution_C83(props, userInputData)

}

export const cloudAppos_onCloudAppCountDistribution_D72 = (props, userInputData) => {
  //adding cloud appos
  //adding onCloudAppCountDistribution (general) F72
  userInputData['cloudAppOps']['onCloudAppCountDistribution']['total'] =
    ((Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex'])).toFixed(2));
  cloudAppos_onCloudAppDistributionPercentage_F71(props, userInputData);
  //adding notOnCloudAppCountDistribution (general) D73
  userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['medium'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']))
    - (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium']))).toFixed(2));
  cloudAppos_notOnCloudAppCountDistribution_F73(props, userInputData)
  //adding rehostedAppsOnCloudCountDistribution (general) D77
  userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['medium'] = parseFloat((
    (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['medium']))
    * (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium'])) / 100).toFixed(2));
  cloudAppos_rehostedAppsOnCloudCountDistribution_D77(props, userInputData)

  //adding replatformRefactorAppsOnCloudCountDistribution (general) D79
  userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium'] = parseFloat((
    (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['medium']))
    * (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium'])) / 100).toFixed(2));

  cloudAppos_replatformRefactorAppsOnCloudCountDistribution_D79(props, userInputData)

  //adding reArchitectReBuildAppsOnCloudCountDistribution (general) D81
  userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium'] = parseFloat((
    (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['medium']))
    * (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium'])) / 100).toFixed(2));
  cloudAppos_reArchitectReBuildAppsOnCloudCountDistribution_D81(props, userInputData)

  //adding saasAppsOnCloudCountDistribution (general) D83
  userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['medium'] = parseFloat((
    (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['medium']))
    * (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium'])) / 100).toFixed(2));
  cloudAppos_saasAppsOnCloudCountDistribution_D83(props, userInputData)

}


export const cloudAppos_onCloudAppCountDistribution_E72 = (props, userInputData) => {
  //adding cloud appos
  //adding onCloudAppCountDistribution (general) F72
  userInputData['cloudAppOps']['onCloudAppCountDistribution']['total'] = ((Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple']) +
    Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium']) +
    Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex'])).toFixed(2));
  cloudAppos_onCloudAppDistributionPercentage_F71(props, userInputData);

  //adding notOnCloudAppCountDistribution (general) E73
  userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['complex'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['complex']))
    - (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex']))).toFixed(2));
  cloudAppos_notOnCloudAppCountDistribution_F73(props, userInputData);
  //adding rehostedAppsOnCloudCountDistribution (general) E77
  userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['complex'] = parseFloat((
    (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['complex']))
    * (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex'])) / 100).toFixed(2));
  cloudAppos_rehostedAppsOnCloudCountDistribution_E77(props, userInputData)
  //adding replatformRefactorAppsOnCloudCountDistribution (general) E79
  userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex'] = parseFloat((
    (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['complex']))
    * (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex'])) / 100).toFixed(2));
  cloudAppos_replatformRefactorAppsOnCloudCountDistribution_E79(props, userInputData)

  //adding reArchitectReBuildAppsOnCloudCountDistribution (general) E81
  userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex'] = parseFloat((
    (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['complex']))
    * (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex'])) / 100).toFixed(2));
  cloudAppos_reArchitectReBuildAppsOnCloudCountDistribution_E81(props, userInputData)

  //adding saasAppsOnCloudCountDistribution (general) E83
  userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['complex'] = parseFloat((
    (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['complex']))
    * (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex'])) / 100).toFixed(2));
  cloudAppos_saasAppsOnCloudCountDistribution_E83(props, userInputData)
}
export const cloudAppos_notOnCloudAppCountDistribution_C73 = (props, userInputData) => {
  //adding notOnCloudAppCountDistribution (CLOUDAOPPS) f73
  userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['total'] =
    ((Number(userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['complex'])).toFixed(2));
       //ading move to cloud c136
    userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y1'] =
    parseFloat((Number(userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['total'])).toFixed(2));
    moveToCloud_appsNotOnCloudAtStartOfYear_C136(props, userInputData);
}
export const cloudAppos_notOnCloudAppCountDistribution_D73 = (props, userInputData) => {
  //adding notOnCloudAppCountDistribution (CLOUDAOPPS) f73
  userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['total'] =
    ((Number(userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['simple']) +
      Number(userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['medium']) +
      Number(userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['complex'])).toFixed(2));
       //ading move to cloud c136
    userInputData['moveToCloud']['appsNotOnCloudAtStartOfYear']['y1'] =
    parseFloat((Number(userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['total'])).toFixed(2));
    moveToCloud_appsNotOnCloudAtStartOfYear_C136(props, userInputData);

}
export const cloudAppos_notOnCloudAppCountDistribution_E73 = (props, userInputData) => {

}





export const cloudAppos__onCloudAppCountDistribution_C71 = (props, userInputData) => {
  //adding onCloudAppCountDistribution  C72 
  userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['simple']) / 100) *
      (Number(userInputData['general']['appCountComplexityBasedDistribution']['simple']))
    ).toFixed(2));
  //calling other function
  cloudAppos__onCloudAppCountDistribution_C72(props, userInputData);
}
export const cloudAppos__onCloudAppCountDistribution_D71 = (props, userInputData) => {
  //adding onCloudAppCountDistribution  E72 
  userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['medium']) / 100) *
      Number(userInputData['general']['appCountComplexityBasedDistribution']['medium'])
    ).toFixed(2));
  //calling other functoin
  cloudAppos_onCloudAppCountDistribution_D72(props, userInputData)
}
export const cloudAppos__onCloudAppCountDistribution_E71 = (props, userInputData) => {
  //adding onCloudAppCountDistribution  D72 
  userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['complex']) / 100) *
      Number(userInputData['general']['appCountComplexityBasedDistribution']['complex'])
    ).toFixed(2))
  //calling other function
  cloudAppos_onCloudAppCountDistribution_E72(props, userInputData)
}
export const cloudAppOps_rehostedAppsOnCloudDistributionPercentage_C76 = (props, userInputData) => {

  //adding F76
  //adding to 76
  userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['total'] =
    (
      (
        ((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['simple']) *
          Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['simple'])) +
          (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['medium']) *
            Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['medium'])) +
          (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['complex']) *
            Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['complex']))
        ) / (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['total']))).toFixed(2));


        if (isNaN(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['total'])) {
          userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['total'] = '0';
        }
        
  //adding onCloudAppCountDistribution  C77
  userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['simple']) / 100) *
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple'])
    ).toFixed(2))
  cloudAppos_rehostedAppsOnCloudCountDistribution_C77(props, userInputData);
}
export const cloudAppOps_rehostedAppsOnCloudDistributionPercentage_D76 = (props, userInputData) => {
  //adding onCloudAppCountDistribution  D77
  userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['medium']) / 100) *
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium'])
    ).toFixed(2));
  cloudAppos_rehostedAppsOnCloudCountDistribution_D77(props, userInputData)
}
export const cloudAppOps_rehostedAppsOnCloudDistributionPercentage_E76 = (props, userInputData) => {
  //adding onCloudAppCountDistribution  E77
  userInputData['cloudAppOps']['rehostedAppsOnCloudCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['complex']) / 100) *
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex'])
    ).toFixed(2));
  cloudAppos_rehostedAppsOnCloudCountDistribution_E77(props, userInputData)
}
export const cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_C78 = (props, userInputData) => {
  
  //adding to F78
  userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['total'] =
    (
      (
        ((Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['simple']) *
          Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple'])) +
          (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['medium']) *
            Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium'])) +
          (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['complex']) *
            Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex']))
        ) / (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['total']))).toFixed(2));

        if (isNaN(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['total'])) {
          userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['total'] = '0';
        }
  //adding replatformRefactorAppsOnCloudDistributionPercentage C79
  userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['simple']) / 100) *
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple'])
    ).toFixed(2));
  cloudAppos_replatformRefactorAppsOnCloudCountDistribution_C79(props, userInputData);
}
export const cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_D78 = (props, userInputData) => {
  //adding replatformRefactorAppsOnCloudDistributionPercentage D79
  userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['medium']) / 100) *
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium'])
    ).toFixed(2));
  cloudAppos_replatformRefactorAppsOnCloudCountDistribution_D79(props, userInputData)
}
export const cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_E78 = (props, userInputData) => {
  //adding replatformRefactorAppsOnCloudDistributionPercentage E79
  userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['complex']) / 100) *
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex'])
    ).toFixed(2));
  cloudAppos_replatformRefactorAppsOnCloudCountDistribution_E79(props, userInputData)
}
export const cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_C80 = (props, userInputData) => {

     //adding to F80
     userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['total'] =
     (
       (
         ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['simple']) *
           Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple'])) +
           (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['medium']) *
             Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium'])) +
           (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['complex']) *
             Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex']))
         ) / (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['total']))).toFixed(2));
   

         if (isNaN(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['total'])) {
          userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['total'] = '0';
        }
  //adding reArchitectReBuildAppsOnCloudDistributionPercentag C81 
  userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['simple']) / 100) *
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple'])
    ).toFixed(2));
  cloudAppos_reArchitectReBuildAppsOnCloudCountDistribution_C81(props, userInputData)
}
export const cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_D80 = (props, userInputData) => {
  //adding reArchitectReBuildAppsOnCloudDistributionPercentag D81 
  userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['medium']) / 100) *
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium'])
    ).toFixed(2));
  cloudAppos_reArchitectReBuildAppsOnCloudCountDistribution_D81(props, userInputData)
}
export const cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_E80 = (props, userInputData) => {
  //adding reArchitectReBuildAppsOnCloudDistributionPercentag E81 
  userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['complex']) / 100) *
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex'])
    ).toFixed(2));
  cloudAppos_reArchitectReBuildAppsOnCloudCountDistribution_E81(props, userInputData)
}
export const cloudAppOps_saasAppsOnCloudDistributionPercentage_C82 = (props, userInputData) => {
  //adding to F82
  userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['total'] =
  (
    (
      ((Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['simple']) *
        Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['simple'])) +
        (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['medium']) *
          Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['medium'])) +
        (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['complex']) *
          Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['complex']))
      ) / (Number(userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['total']))).toFixed(2));

      if (isNaN(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['total'])) {
        userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['total'] = '0';
      }

  //adding saasAppsOnCloudDistributionPercentage C83
  userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['simple']) / 100) *
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple'])).toFixed(2))
  cloudAppos_saasAppsOnCloudCountDistribution_C83(props, userInputData);
}
export const cloudAppOps_saasAppsOnCloudDistributionPercentage_D82 = (props, userInputData) => {
  //adding saasAppsOnCloudDistributionPercentage D83
  userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['medium']) / 100) *
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium'])
    ).toFixed(2))
  cloudAppos_saasAppsOnCloudCountDistribution_D83(props, userInputData)
}
export const cloudAppOps_saasAppsOnCloudDistributionPercentage_E82 = (props, userInputData) => {
  //adding saasAppsOnCloudDistributionPercentage E83
  userInputData['cloudAppOps']['saasAppsOnCloudCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['complex']) / 100) *
      Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex'])
    ).toFixed(2))
  cloudAppos_saasAppsOnCloudCountDistribution_E83(props, userInputData)

}
export const cloudAppOps_totalContainerizedAppsOnCloudCountDistribution_C88 = (props, userInputData) => {
  //adding to C90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['simple'] = parseFloat(
    (((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']
    ['simple']) / 100) * (
        Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple'])
      )) +
      ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']
      ['simple']) / 100) *
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']
        ['simple'])))).toFixed(2));
  //adding to F88 
  userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['total'] =
    ((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['simple']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['medium']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['complex'])).toFixed(2))
  //calling
  cloudAppos_totalContainerizedAppsOnCloudCountDistribution_C90(props, userInputData)

}
export const cloudAppos_totalContainerizedAppsOnCloudCountDistribution_D88 = (props, userInputData) => {
  //adding to D90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['medium'] = parseFloat(
    (((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['medium']) / 100) * (
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium'])
    )) +
      ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['medium']) / 100) *
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium'])))).toFixed(2));
  //adding to F88 
  userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['total'] =
    ((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['simple']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['medium'])
      + Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['complex'])).toFixed(2))
}
export const cloudAppos_totalContainerizedAppsOnCloudCountDistribution_E88 = (props, userInputData) => {
  //adding to E90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['complex'] = parseFloat(
    (((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['complex']) / 100) * (
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['complex'])
    )) +
      ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['complex']) / 100) *
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['complex'])))).toFixed(2));
  //adding to F88 
  userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['total'] =
    ((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['simple']) +
      Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['medium'])
      + Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['complex'])).toFixed(2))

}
export const cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_C89 = (props, userInputData) => {
  //adding to C90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['simple'] = parseFloat(
    (((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['simple']) / 100) * (
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['simple'])
    )) +
      ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['simple']) / 100) *
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['simple'])))).toFixed(2));
  //adding to F89 
  userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['total'] =
    ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['simple']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['medium'])
      + Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['complex'])).toFixed(2))

  //calling totalcontanarized
  cloudAppos_totalContainerizedAppsOnCloudCountDistribution_C90(props, userInputData)
}
export const cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_D89 = (props, userInputData) => {
  //adding to D90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['medium'] = parseFloat(
    (((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['medium']) / 100) * (
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium'])
    )) +
      ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['medium']) / 100) *
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium'])))).toFixed(2));
  //adding to F89 
  userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['total'] =
    ((
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['simple']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['medium']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['complex'])).toFixed(2));
}
export const cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_E89 = (props, userInputData) => {
  //adding to D90
  userInputData['cloudAppOps']['totalContainerizedAppsOnCloudCountDistribution']['medium'] = parseFloat(
    (((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['medium']) / 100) * (
      Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudCountDistribution']['medium'])
    )) +
      ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['medium']) / 100) *
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudCountDistribution']['medium'])))).toFixed(2));
  //adding to F89 
  //adding to F89 
  userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['total'] =
    ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['simple']) +
      Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['medium'])
      + Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['complex'])).toFixed(2))

  // userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['medium'] +userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['complex']
}


///FormulaComponent_CloudOpps
