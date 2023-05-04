import { general_validation_main } from "./ValidationGeneral";
import { testing_validation_main } from "./ValidationTesting";
import { cloudAppOps_validation_main } from "./ValidationsCloudApp";
import { ams_validation_main } from "./ValidationAMS";
import { security_validation_main } from "./ValidationSecurity";
import { effortEstimation_validation_main } from "./ValidationEffortEstimation";
import { automation_validation_main } from "./ValidationAutomation";
import { productivity_validation_main } from "./Productivity_validation";

// validation check for percentage/count apptotal/and sections JIRA bug id- 627
const additionalDis_validation_main = (userInpuData, objStatus) => {
  let newArr = [];
  newArr = userInpuData["appTechnologyDistribution"]["stdNonStdWorkStreams"];
  var newArrayDisttibution = newArr.filter((ele) => {
    return ele;
  });
  let appCountTotal = newArrayDisttibution.reduce((acc, item) => {
    return acc + parseFloat(item["countOfApps"]);
  }, 0);
  appCountTotal = parseFloat(appCountTotal.toFixed(2));
  let appDistributionPercentageTotal = newArrayDisttibution.reduce(
    (acc, item) => {
      return (acc = Number(
        (acc + Number(item["appDistributionPercentage"])).toFixed(2)
      ));
    },
    0
  );
  let applicationDistributionError =
    appDistributionPercentageTotal === 100 ? false : true;
  let addedTechnology = newArrayDisttibution.every(
    (ele) => ele["uiStatus"]["iconStatus"]["ok"]
  );
  let applicationCountApps =
    appCountTotal === Number(userInpuData["basicInfo"]["numberOfAppsInScope"])
      ? false
      : true;

  if (!addedTechnology) {
    objStatus.errorBtn = true;
  }
  if (applicationDistributionError || applicationCountApps) {
    objStatus.errorBtn = true;
  }
  if (newArrayDisttibution.length == 0) {
    objStatus.errorBtn = true;
  }
};

// validation check for additionalCostInfo JIRA bug id- 620
const additionalCost_main = (userInpuData, objStatus) => {
  if (
    !userInpuData["additionalCostInfo"]["uiStatus"]["iconStatus"]["ok"] &&
    !userInpuData["additionalCostInfo"]["uiStatus"]["iconStatus"]["warning"]
  ) {
    objStatus.errorBtn = true;
  }
};
const application_basic = (userInpuData, objStatus) => {
  if (
    !userInpuData["basicInfo"]["uiStatus"]["iconStatus"]["ok"] &&
    !userInpuData["basicInfo"]["uiStatus"]["iconStatus"]["warning"]
  ) {
    objStatus.errorBtn = true;
  }
};

//JIRA 1143 migration
const application_retringApplication = (userInpuData, objStatus) => {
  let finalApplicationScopeYoY = {
    "numberOfAppsInScope": userInpuData.basicInfo.numberOfAppsInScope,
    "numberOfAppsInScopeY2": userInpuData.basicInfo.numberOfAppsInScopeY2,
    "numberOfAppsInScopeY3": userInpuData.basicInfo.numberOfAppsInScopeY3,
    "numberOfAppsInScopeY4": userInpuData.basicInfo.numberOfAppsInScopeY4,
    "numberOfAppsInScopeY5": userInpuData.basicInfo.numberOfAppsInScopeY5,
    "numberOfAppsInScopeY6": userInpuData.basicInfo.numberOfAppsInScopeY6,
    "numberOfAppsInScopeY7": userInpuData.basicInfo.numberOfAppsInScopeY7
  }
  let retiringApplicationError = !(Object.keys(finalApplicationScopeYoY).every((ele) => finalApplicationScopeYoY[ele] >= 1 && finalApplicationScopeYoY[ele] <= 99999))
  let transitionErr = Number(userInpuData.basicInfo.dealDurationInMonths) < 6 || Number(userInpuData.basicInfo.dealDurationInMonths) > 84 ? true : false
  let dealErr = Number(userInpuData.basicInfo.transitionDurationInMonths) < 0 || Number(userInpuData.basicInfo.transitionDurationInMonths) > 6 ? true : false
  let flagBasic = retiringApplicationError || transitionErr || dealErr ? false : true;

  //JIRA 1151 decommsioning
  let decomssionWarning = false;
  if (flagBasic) {
    if (!Number(userInpuData.basicInfo.postDecommissionOfAppsTestingEffortPercentage) == 0 && (Number(userInpuData.basicInfo.postDecommissionOfAppsTestingEffortPercentage) < 5) || (Number(userInpuData.basicInfo.postDecommissionOfAppsTestingEffortPercentage) > 15)) {
      let decomssionVal = 'Range: 5%-15%'
      decomssionWarning = true
    }
    flagBasic = decomssionWarning === true ? false : true;
  }else{
    objStatus.errorBtn = true;
  }


  userInpuData['basicInfo']['uiStatus']['iconStatus'] = {
    "warning": decomssionWarning,
    "ok": flagBasic,
    "warningMessage": ""
  }
  // if (
  //   !userInpuData["basicInfo"]["uiStatus"]["iconStatus"]["ok"] &&
  //   !userInpuData["basicInfo"]["uiStatus"]["iconStatus"]["warning"]
  // ) {
  //   objStatus.errorBtn = true;
  // }
}

export const input_validation_main = (props, userInputData, objStatus) => {
//  application_retringApplication(userInputData, objStatus)
  application_basic(userInputData, objStatus)
  additionalDis_validation_main(userInputData, objStatus);
  additionalCost_main(userInputData, objStatus);
  general_validation_main(props, userInputData, objStatus);
  cloudAppOps_validation_main(props, userInputData, objStatus);
  testing_validation_main(props, userInputData, objStatus);
  ams_validation_main(props, userInputData, objStatus);
  security_validation_main(props, userInputData, objStatus);
  effortEstimation_validation_main(props, userInputData, objStatus);
  automation_validation_main(props, userInputData, objStatus);
  //JIRA 821 Validation to populate UI status on production
  productivity_validation_main(props, userInputData, objStatus);
};
