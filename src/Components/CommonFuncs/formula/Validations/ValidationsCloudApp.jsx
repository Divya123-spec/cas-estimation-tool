import { englishValue } from "../../../../Utils/CommonFunc";

let errorMain = false;
let warningMain = false;

export const cloudAppOps_onCloudAppDistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['total']) >= 0) &&
        (Number(userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['total']) <= 25)) {
        userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }

    } else {
        userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Percent of applications on cloud seem to be high"
        }
        warningMain = true;
      
    }
}

export const cloudAppOps_rehostedAppsOnCloudDistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['simple']) >= 0) &&
        (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['simple']) <= 100) &&

        (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['medium']) >= 0) &&
        (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['medium']) <= 100) &&

        (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['complex']) >= 0) &&
        (Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['complex']) <= 100)) {

        userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    }
    else {
        userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage":  englishValue('ValidationCloud1')
        }
        warningMain = true;
    }


}


export const cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['simple']) >= 0) &&
        (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['simple']) <= 100) &&

        (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['medium']) >= 0) &&
        (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['medium']) <= 100) &&

        (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['complex']) >= 0) &&
        (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['complex']) <= 100)) {

        userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    }
    else {
        userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": englishValue('ValidationCloud1')
        }
        warningMain = true;
    }


}

export const cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['simple']) >= 0) &&
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['simple']) <= 100) &&

        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['medium']) >= 0) &&
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['medium']) <= 100) &&

        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['complex']) >= 0) &&
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['complex']) <= 100)) {

        userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    }
    else {
        userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage":  englishValue('ValidationCloud1')
        }
        warningMain = true;
    }


}


export const cloudAppOps_saasAppsOnCloudDistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['simple']) >= 0) &&
        (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['simple']) <= 100) &&

        (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['medium']) >= 0) &&
        (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['medium']) <= 100) &&

        (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['complex']) >= 0) &&
        (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['complex']) <= 100)) {

        userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    }
    else {
        userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage":  englishValue('ValidationCloud1')
        }
        warningMain = true;
    }


}

export const cloudAppOps_replatformRefactorAppsMovingToContainerDistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['simple']) >= 0) &&
        (Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['simple']) <= 50) &&

        (Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['medium']) >= 0) &&
        (Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['medium']) <= 50) &&

        (Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['complex']) >= 0) &&
        (Number(userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['complex']) <= 50)) {

        userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    }
    else {
        userInputData['cloudAppOps']['replatformRefactorAppsMovingToContainerDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Ideal range b/w 0% -50%"
        }
        warningMain = true;
    }


}

export const cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['simple']) >= 0) &&
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['simple']) <= 100) &&

        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['medium']) >= 0) &&
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['medium']) <= 100) &&

        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['complex']) >= 0) &&
        (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['complex']) <= 100)) {

        userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    }
    else {
        userInputData['cloudAppOps']['reArchitectReBuildAppsMovingToContainerDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage":  englishValue('ValidationCloud1')
        }
        warningMain = true;
    }


}



export const cloudAppOps_totalCloudAppOps_validation = (props, userInputData) => {
    let totalPercent=100;
      let simpleValue=(((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['simple'])) +
      (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['simple'])) +
      (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['simple'])) +
      (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['simple']))).toFixed(2));
      let mediumValue=(((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['medium'])) +
      (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['medium'])) +
      (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['medium'])) +
      (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['medium']))).toFixed(2));
      let complexValue=(((Number(userInputData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['complex'])) +
      (Number(userInputData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['complex'])) +
      (Number(userInputData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['complex'])) +
      (Number(userInputData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['complex']))).toFixed(2));
      if (( simpleValue!== totalPercent.toFixed(2))||( mediumValue!== totalPercent.toFixed(2))||( complexValue!== totalPercent.toFixed(2))) {
          errorMain = true
      }  
  }


export const cloudAppOps_ApplicationCloudTotal_validation = (props, userInputData) => {
    if (
        Number(userInputData['cloudAppOps']['totalAppsOnCloudCountDistribution']['total']) !=
        Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['total'])) {
    } 




}

export const cloudAppOps_validation_main = (props, userInputData,objStatus) => {

    cloudAppOps_onCloudAppDistributionPercentage_validation(props, userInputData);
    cloudAppOps_rehostedAppsOnCloudDistributionPercentage_validation(props, userInputData);
    cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_validation(props, userInputData);
    cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_validation(props, userInputData);
    cloudAppOps_saasAppsOnCloudDistributionPercentage_validation(props, userInputData);
    cloudAppOps_replatformRefactorAppsMovingToContainerDistributionPercentage_validation(props, userInputData);
    cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_validation(props, userInputData);
    cloudAppOps_totalCloudAppOps_validation(props, userInputData);
    cloudAppOps_ApplicationCloudTotal_validation(props, userInputData);
    if (errorMain) {
        userInputData['cloudAppOps']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        }
        objStatus.errorBtn = true;
    } else if (warningMain) {
        userInputData['cloudAppOps']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": ""
        }
    } else {
        userInputData['cloudAppOps']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    }
    errorMain = false;
    warningMain = false;
}

