let errorMain = false;
let warningMain = false;
export const productivityDevscops_validation = (props, userInputData) => {

    let dataIntial = userInputData.productivity.devSecOps.devSecOpsLevers.map((ele) => ele.isScopeApplicableByDefault === ele.isScopeApplicable ? {
        ...ele,
        "uiStatus": {
            "iconStatus": {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }
        }
    } : {
        ...ele,
        "uiStatus": {
            "iconStatus": {
                "warning": true,
                "ok": false,
                "warningMessage": ""
            }
        }
    })

    userInputData.productivity.devSecOps.devSecOpsLevers = dataIntial;
    uistatusValidation(userInputData, "devSecOps", "devSecOpsLevers")
}
export const productivityAutomation_validation = (props, userInputData) => {
    let dataIntial = userInputData.productivity.automation.automationLevers.map((ele) => ele.isScopeApplicableByDefault === ele.isScopeApplicable ? {
        ...ele,
        "uiStatus": {
            "iconStatus": {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }
        }
    } : {
        ...ele,
        "uiStatus": {
            "iconStatus": {
                "warning": true,
                "ok": false,
                "warningMessage": ""
            }
        }
    })

    userInputData.productivity.automation.automationLevers = dataIntial;

    uistatusValidation(userInputData, "automation", "automationLevers")
}
export const productivityCloud_validation = (props, userInputData) => {

    let dataIntial = userInputData.productivity.cloud.cloudLevers.map((ele) => ele.isScopeApplicableByDefault === ele.isScopeApplicable ? {
        ...ele,
        "uiStatus": {
            "iconStatus": {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }
        }
    } : {
        ...ele,
        "uiStatus": {
            "iconStatus": {
                "warning": true,
                "ok": false,
                "warningMessage": ""
            }
        }
    })

    userInputData.productivity.cloud.cloudLevers = dataIntial;
    uistatusValidation(userInputData, "cloud", "cloudLevers")
}
export const productivityTesting_validation = (props, userInputData) => {
    let dataIntial = userInputData.productivity.testing.testingLevers.map((ele) => ele.isScopeApplicableByDefault === ele.isScopeApplicable ? {
        ...ele,
        "uiStatus": {
            "iconStatus": {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }
        }
    } : {
        ...ele,
        "uiStatus": {
            "iconStatus": {
                "warning": true,
                "ok": false,
                "warningMessage": ""
            }
        }
    })

    userInputData.productivity.testing.testingLevers = dataIntial;

    uistatusValidation(userInputData, "testing", "testingLevers")
}

export const productivityEfficiency_validation = (props, userInputData) => {
    let dataIntial = userInputData.productivity.efficiency.efficiencyLevers.map((ele) => ele.isScopeApplicableByDefault === ele.isScopeApplicable ? {
        ...ele,
        "uiStatus": {
            "iconStatus": {
                "warning": false,
                "ok": true,
                "warningMessage": ""
            }
        }
    } : {
        ...ele,
        "uiStatus": {
            "iconStatus": {
                "warning": true,
                "ok": false,
                "warningMessage": ""
            }
        }
    })
    userInputData.productivity.efficiency.efficiencyLevers = dataIntial;
    uistatusValidation(userInputData, "efficiency", "efficiencyLevers")
}
const uistatusValidation = (userInputData, leverHeading, lever) => {
    let obj = {}
    let uiValidation = userInputData.productivity[leverHeading][lever].every((ele) => ele['uiStatus']['iconStatus']['ok']);
    uiValidation ? obj = {
        "iconStatus": {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } : obj = {
        "iconStatus": {
            "warning": true,
            "ok": false,
            "warningMessage": ""
        }
    }
    userInputData.productivity[leverHeading]['uiStatus'] = obj;
}


export const productivity_validation_main = (props, userInputData, objStatus) => {
    productivityDevscops_validation(props, userInputData);
     productivityAutomation_validation(props, userInputData);
     productivityCloud_validation(props, userInputData);
     productivityTesting_validation(props, userInputData);
     productivityEfficiency_validation(props, userInputData);
}
