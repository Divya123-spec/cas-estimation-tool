let errorMain = false;
let warningMain = false;
export const security_remediationTicketsDistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['security']['remediationTicketsDistributionPercentage']['total']) >= 1.5) &&
        (Number(userInputData['security']['remediationTicketsDistributionPercentage']['total']) <= 3)) {
        userInputData['security']['remediationTicketsDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }

    } else {
        userInputData['security']['remediationTicketsDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Range is incorrect"
        }
        warningMain = true;

    }
}

export const security_appSecurityScopeDistributionPercentage_validation = (props, userInputData) => {
    let value1=Number((Number(userInputData['general']['criticalAppPercentageOfTotalApps']['total']).toFixed(2))-1);
    let value2= Number((Number(userInputData['security']['appSecurityScopeDistributionPercentage']['total']).toFixed(2)));
    let value3=Number(((Number(userInputData['general']['criticalAppPercentageOfTotalApps']['total']) + 6).toFixed(2)));
    
    if ((value1<=value2) && (value2<=value3))
     {
        userInputData['security']['appSecurityScopeDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['security']['appSecurityScopeDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Typical security applications within  range"
        }
        warningMain = true;
    }
}
export const security_validation_main = (props, userInputData, objStatus) => {
     security_remediationTicketsDistributionPercentage_validation(props, userInputData);
     security_appSecurityScopeDistributionPercentage_validation(props, userInputData);
    if (errorMain) {
         userInputData['security']['uiStatus']['iconStatus']= {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        }
        objStatus.errorBtn = true;
    } else if (warningMain) {
         userInputData['security']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "",
        }
    } else {
       userInputData['security']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    }
    errorMain = false;
    warningMain = false;
}
