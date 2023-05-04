let errorMain = false;
let warningMain = false;
export const automation_totalAutomation_validation = (props, userInputData) => {

    let totalPercent = 100;
    let y1 = (((Number(userInputData['automation']['automationEffortAndCostDistributionPercentage']['simple']))).toFixed(2));
    let y2 = (((Number(userInputData['automation']['automationEffortAndCostDistributionPercentage']['medium']))).toFixed(2));
    let y3 = (((Number(userInputData['automation']['automationEffortAndCostDistributionPercentage']['complex']))).toFixed(2));

    let sum = ((Number(y1) + Number(y2) + Number(y3)).toFixed(2));
    if (sum == totalPercent.toFixed(2)) {
        userInputData['automation']['automationEffortAndCostDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        };

    } else {
        userInputData['automation']['automationEffortAndCostDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        };
        errorMain = true
    }

}
export const automation_totalMonitoringCoverageAutomation_validation = (props, userInputData) => {

    let totalPercent = 100;
    let y1 = (((Number(userInputData['automation']['monitoringCoverageOfAutomationBOTsAoccCoverage']['bronzeMonitoringPercentage']))).toFixed(2));
    let y2 = (((Number(userInputData['automation']['monitoringCoverageOfAutomationBOTsAoccCoverage']['silverMonitoringPercentage']))).toFixed(2));
    let y3 = (((Number(userInputData['automation']['monitoringCoverageOfAutomationBOTsAoccCoverage']['goldMonitoringPercentage']))).toFixed(2));

    let sum = ((Number(y1) + Number(y2) + Number(y3)).toFixed(2));
    if (sum == totalPercent.toFixed(2)) {
        userInputData['automation']['monitoringCoverageOfAutomationBOTsAoccCoverage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        };

    } else {
        userInputData['automation']['monitoringCoverageOfAutomationBOTsAoccCoverage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        };
        errorMain = true
    }

}
export const automation_totaldigitalAutomation_validation = (props, userInputData) => {
    let digitalPMOScopepercentage = userInputData['automation']['digitalWorkerScopeOnPerformActivities']['digitalPMOScope']['digitalPMOScopePercentage'];
    let digitalQAScopepercentage = userInputData['automation']['digitalWorkerScopeOnPerformActivities']['digitalQAScope']['digitalQAScopePercentage'];
    let ticketManagerScopepercentage = userInputData['automation']['digitalWorkerScopeOnPerformActivities']['ticketManagerScope']['ticketManagerScopePercentage'];
    let jobMonitorScopeScopepercentage = userInputData['automation']['digitalWorkerScopeOnPerformActivities']['jobMonitorScope']['jobMonitorScopePercentage'];

    if (digitalPMOScopepercentage != 20) {
        userInputData['automation']['digitalWorkerScopeOnPerformActivities']['digitalPMOScope']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Standard Recommended than 20%"
        }
        warningMain = true;
        if (digitalQAScopepercentage == 10) {

            userInputData['automation']['digitalWorkerScopeOnPerformActivities']['digitalQAScope']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }


        }
        if (ticketManagerScopepercentage == 50) {

            userInputData['automation']['digitalWorkerScopeOnPerformActivities']['ticketManagerScope']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }


        }
        if(jobMonitorScopeScopepercentage==15)
        {
            userInputData['automation']['digitalWorkerScopeOnPerformActivities']['jobMonitorScope']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }

        }

    }

    if (digitalQAScopepercentage !== 10) {
        userInputData['automation']['digitalWorkerScopeOnPerformActivities']['digitalQAScope']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Standard Recommended than 10%"
        }
        warningMain = true;
        if (digitalPMOScopepercentage == 20) {

            userInputData['automation']['digitalWorkerScopeOnPerformActivities']['digitalPMOScope']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }


        }
        if (ticketManagerScopepercentage == 50) {

            userInputData['automation']['digitalWorkerScopeOnPerformActivities']['ticketManagerScope']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }


        }
        if(jobMonitorScopeScopepercentage==15)
        {
            userInputData['automation']['digitalWorkerScopeOnPerformActivities']['jobMonitorScope']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }

        }
    }

    if (ticketManagerScopepercentage !== 50) {
        userInputData['automation']['digitalWorkerScopeOnPerformActivities']['ticketManagerScope']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Standard Recommended than 50%"
        }
        warningMain = true;
        if (digitalQAScopepercentage == 10) {

            userInputData['automation']['digitalWorkerScopeOnPerformActivities']['digitalQAScope']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }


        }
        if (digitalPMOScopepercentage == 20) {

            userInputData['automation']['digitalWorkerScopeOnPerformActivities']['digitalPMOScope']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }

        }
        if(jobMonitorScopeScopepercentage==15)
        {
            userInputData['automation']['digitalWorkerScopeOnPerformActivities']['jobMonitorScope']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }

        }
    }
    if (jobMonitorScopeScopepercentage !== 15) {
        userInputData['automation']['digitalWorkerScopeOnPerformActivities']['jobMonitorScope']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Standard Recommended than 15%"
        }
        warningMain = true;
        if (digitalQAScopepercentage == 10) {

            userInputData['automation']['digitalWorkerScopeOnPerformActivities']['digitalQAScope']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }


        }
        if (ticketManagerScopepercentage == 50) {

            userInputData['automation']['digitalWorkerScopeOnPerformActivities']['ticketManagerScope']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }


        }
        if(digitalPMOScopepercentage == 20)
        {
            userInputData['automation']['digitalWorkerScopeOnPerformActivities']['digitalPMOScope']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }

        }
    }

    if (digitalPMOScopepercentage == 20 && digitalQAScopepercentage == 10 && ticketManagerScopepercentage == 50 && jobMonitorScopeScopepercentage == 15) {
        userInputData['automation']['digitalWorkerScopeOnPerformActivities']['digitalPMOScope']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
        userInputData['automation']['digitalWorkerScopeOnPerformActivities']['digitalQAScope']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
        userInputData['automation']['digitalWorkerScopeOnPerformActivities']['ticketManagerScope']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
        userInputData['automation']['digitalWorkerScopeOnPerformActivities']['jobMonitorScope']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }

    }
}
export const automation_totalcombinationOfAutomationTools_validation2 = (props, userInputData) => {


    let totalPercent = 100;
    let y1 = (((Number(userInputData['automation']['combinationOfAutomationToolsUsed']['bluePrismPercentage']))).toFixed(2));
    let y2 = (((Number(userInputData['automation']['combinationOfAutomationToolsUsed']['uiPathPercentage']))).toFixed(2));
    let y3 = (((Number(userInputData['automation']['combinationOfAutomationToolsUsed']['automationAnywherePercentage']))).toFixed(2));
    let y4 = (((Number(userInputData['automation']['combinationOfAutomationToolsUsed']['wdgPercentage']))).toFixed(2));

    let sum = ((Number(y1) + Number(y2) + Number(y3)+Number(y4)).toFixed(2));
    if (sum == totalPercent.toFixed(2)) {
        userInputData['automation']['combinationOfAutomationToolsUsed']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        };

    } else {
        userInputData['automation']['combinationOfAutomationToolsUsed']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        };
        errorMain = true
    }

  
}
export const automation_totalcombinationOfAutomationTools_validation = (props, userInputData) => {

    let totalPercent = 100;
    let y1 = (((Number(userInputData['automation']['combinationOfAutomationToolsUsed']['bluePrismPercentage']))).toFixed(2));
    let y2 = (((Number(userInputData['automation']['combinationOfAutomationToolsUsed']['uiPathPercentage']))).toFixed(2));
    let y3 = (((Number(userInputData['automation']['combinationOfAutomationToolsUsed']['automationAnywherePercentage']))).toFixed(2));
    let y4 = (((Number(userInputData['automation']['combinationOfAutomationToolsUsed']['wdgPercentage']))).toFixed(2));

  
    if(userInputData['automation']['combinationOfAutomationToolsUsedDefaultSelection'] === 'bluePrism'){
        if (y1 == totalPercent.toFixed(2)) {
            userInputData['automation']['combinationOfAutomationToolsUsed']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            };
    
        } else {
            userInputData['automation']['combinationOfAutomationToolsUsed']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": false,
                "warningMessage": ""
            };
            errorMain = true
        }
    
    }
    if(userInputData['automation']['combinationOfAutomationToolsUsedDefaultSelection'] === 'wdg'){
        if (y4 == totalPercent.toFixed(2)) {
            userInputData['automation']['combinationOfAutomationToolsUsed']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            };
    
        } else {
            userInputData['automation']['combinationOfAutomationToolsUsed']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": false,
                "warningMessage": ""
            };
            errorMain = true
        }
    
    }
    if(userInputData['automation']['combinationOfAutomationToolsUsedDefaultSelection'] === 'uiPathAndAA'){
        let sum = ((Number(y2) + Number(y3)).toFixed(2));
        if (sum == totalPercent.toFixed(2)) {
            userInputData['automation']['combinationOfAutomationToolsUsed']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            };
    
        } else {
            userInputData['automation']['combinationOfAutomationToolsUsed']['uiStatus']['iconStatus'] = {
                "warning": false,
                "ok": false,
                "warningMessage": ""
            };
            errorMain = true
        }
    
    }
  
}
export const automation_validation_main = (props, userInputData, objStatus) => {
    automation_totalAutomation_validation(props, userInputData);
    automation_totalMonitoringCoverageAutomation_validation(props, userInputData);
    automation_totaldigitalAutomation_validation(props, userInputData);
    automation_totalcombinationOfAutomationTools_validation2(props, userInputData);
    // automation_totalcombinationOfAutomationTools_validation(props,userInputData);
    if (errorMain) {
        userInputData['automation']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        }
        objStatus.errorBtn = true;
    } else if (warningMain) {
        userInputData['automation']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": ""
        }
    } else {
        userInputData['automation']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    }
    errorMain = false;
    warningMain = false;
}
