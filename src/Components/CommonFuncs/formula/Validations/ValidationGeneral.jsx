
let errorMain = false;
let warningMain = false
export const general_appComplexityBasedDistributionPercentage_validation = (props, userInputData) => {
    if (Number(userInputData['general']['appComplexityBasedDistributionPercentage']['total']) !== 100 ) {
        errorMain = true;
        userInputData['general']['appComplexityBasedDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        }
    } else if ((Number(userInputData['general']['appComplexityBasedDistributionPercentage']['total']) === 100) &&
        ((Number(userInputData['general']['appCountComplexityBasedDistribution']['total'])) ===
            (Number(userInputData['basicInfo']['numberOfAppsInScope']))) &&
        ((Number(userInputData['general']['appComplexityBasedDistributionPercentage']['medium']) > 50) ||
            (Number(userInputData['general']['appComplexityBasedDistributionPercentage']['complex']) > 15))) {
        userInputData['general']['appComplexityBasedDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "The values for Moderate OR complex percent is out of range"
        }
        warningMain = true;
    } else {
        userInputData['general']['appComplexityBasedDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    }
}
export const general_cotsThirdPartyPercentageOfTotalApps_validation = (props, userInputData) => {
    if ((Number(userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['total']) >= 15) &&
        (Number(userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['total']) <= 30)) {
        userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Ideal range b/w 15% - 35%"
        }
        warningMain = true;
    }
}
export const general_criticalAppPercentageOfTotalApps_validation = (props, userInputData) => {
    if ((Number(userInputData['general']['criticalAppPercentageOfTotalApps']['total']) <= 15)) {
        userInputData['general']['criticalAppPercentageOfTotalApps']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['criticalAppPercentageOfTotalApps']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Total percent of critical applications are too high"
        }
        warningMain = true;
    }
}
export const general_monthlyAverageTicketCountPerAppCategory_validation = (props, userInputData) => {
    if ((Number(userInputData['general']['monthlyAverageTicketCountPerAppCategory']['simple']) <= 2) &&
        (Number(userInputData['general']['monthlyAverageTicketCountPerAppCategory']['medium']) <= 30) &&
        (Number(userInputData['general']['monthlyAverageTicketCountPerAppCategory']['complex']) <= 120)) {
        userInputData['general']['monthlyAverageTicketCountPerAppCategory']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['monthlyAverageTicketCountPerAppCategory']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Count of tickets for the application categorization is too high"
        }
        warningMain = true;
    }

    if ((Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) > 0)) {
        userInputData['general']['additionalADCapacityHrsDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['monthlyAverageTicketCountPerAppCategory']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        }
        errorMain = true;
    }
}
export const general_additionalBatchJobsSupportUpliftPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['total']) <= 10)) {
        userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Number of batch jobs is too high"
        }
        warningMain = true;
    }
}
export const general_l1DistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['general']['l1DistributionPercentage']['total']) >= 20)
        &&
        (Number(userInputData['general']['l1DistributionPercentage']['total']) <= 30)) {
        userInputData['general']['l1DistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['l1DistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Ideal range b/w 20% - 30%" 
        }
        warningMain = true;
    }
}
export const general_l2DistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['general']['l2DistributionPercentage']['total']) >= 20)
        &&
        (Number(userInputData['general']['l2DistributionPercentage']['total']) <= 60)) {
        userInputData['general']['l2DistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['l2DistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Ideal range b/w 20% - 60%"
        }
        warningMain = true;
    }
}
export const general_l3DistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['general']['l3DistributionPercentage']['total']) >= 0)
        &&
        (Number(userInputData['general']['l3DistributionPercentage']['total']) <= 15)) {
        userInputData['general']['l3DistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['l3DistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Ideal range b/w 20% - 30%"
        }
        warningMain = true;
    }
}
export const general_l4DistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['general']['l4DistributionPercentage']['total']) >= 0)
        &&
        (Number(userInputData['general']['l4DistributionPercentage']['total']) <= 30)) {
        userInputData['general']['l4DistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['l4DistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Ideal range b/w 0% - 30%"
        }
        warningMain = true;
    }
}
export const general_minorEnhDistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['general']['minorEnhDistributionPercentage']['total']) >= 0)
        &&
        (Number(userInputData['general']['minorEnhDistributionPercentage']['total']) <= 3)) {
        userInputData['general']['minorEnhDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['minorEnhDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Ideal range b/w 0% - 3%"
        }
        warningMain = true;
    }
}
export const general_additionalADCapacityHrsDistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['total']) >= 0)) {
        userInputData['general']['additionalADCapacityHrsDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['additionalADCapacityHrsDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        }
        errorMain = true;
    }
}
export const general_additionalADCapacityHrsDistribution_validation = (props, userInputData) => {
    if ((Number(userInputData['general']['additionalADCapacityHrsDistribution']['total']) ===100)) {
        userInputData['general']['additionalADCapacityHrsDistribution']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['additionalADCapacityHrsDistribution']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        }
        errorMain = true;
    }
}
export const general_nonTicketingActivitiesUpliftDistributionPercentage_validation = (props, userInputData) => {
    if ((Number(userInputData['general']['nonTicketingActivitiesUpliftDistributionPercentage']['total']) >= 6)
        &&
        (Number(userInputData['general']['nonTicketingActivitiesUpliftDistributionPercentage']['total']) <= 11)) {
        userInputData['general']['nonTicketingActivitiesUpliftDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['nonTicketingActivitiesUpliftDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Please ensure this value is within range"
        }
        warningMain = true;
    }
}
export const general_totalGeneral_validation = (props, userInputData) => {

    let totalPercent=100;
    let simpleValue=(((Number(userInputData['general']['l1DistributionPercentage']['simple'])) +
    (Number(userInputData['general']['l2DistributionPercentage']['simple'])) +
    (Number(userInputData['general']['l3DistributionPercentage']['simple'])) +
    (Number(userInputData['general']['l4DistributionPercentage']['simple'])) +
    (Number(userInputData['general']['minorEnhDistributionPercentage']['simple']))).toFixed(2));

    let mediumValue=(((Number(userInputData['general']['l1DistributionPercentage']['medium'])) +
    (Number(userInputData['general']['l2DistributionPercentage']['medium'])) +
    (Number(userInputData['general']['l3DistributionPercentage']['medium'])) +
    (Number(userInputData['general']['l4DistributionPercentage']['medium'])) +
    (Number(userInputData['general']['minorEnhDistributionPercentage']['medium']))).toFixed(2));

    let complexValue=(((Number(userInputData['general']['l1DistributionPercentage']['complex'])) +
    (Number(userInputData['general']['l2DistributionPercentage']['complex'])) +
    (Number(userInputData['general']['l3DistributionPercentage']['complex'])) +
    (Number(userInputData['general']['l4DistributionPercentage']['complex'])) +
    (Number(userInputData['general']['minorEnhDistributionPercentage']['complex']))).toFixed(2));

    if (( simpleValue!== totalPercent.toFixed(2))||( mediumValue!== totalPercent.toFixed(2))||( complexValue!== totalPercent.toFixed(2))) {
        errorMain = true
    } 
}
export const general_aiOpsAppPercentageOfTotalApps_validation = (props, userInputData) => {
    if ((Number(userInputData['general']['aiOpsAppPercentageOfTotalApps']['total']) >= 15)
        &&
        (Number(userInputData['general']['aiOpsAppPercentageOfTotalApps']['total']) <= 30)) {
        userInputData['general']['aiOpsAppPercentageOfTotalApps']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['aiOpsAppPercentageOfTotalApps']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": "Please ensure this value is within range"
        }
        warningMain = true;
    }
}
export const general_validation_main = (props, userInputData, objStatus) => {

    general_appComplexityBasedDistributionPercentage_validation(props,userInputData);
    general_cotsThirdPartyPercentageOfTotalApps_validation(props, userInputData);
    general_criticalAppPercentageOfTotalApps_validation(props, userInputData);
    general_monthlyAverageTicketCountPerAppCategory_validation(props, userInputData);

    general_additionalBatchJobsSupportUpliftPercentage_validation(props, userInputData);
    general_l1DistributionPercentage_validation(props, userInputData);
    general_l2DistributionPercentage_validation(props, userInputData);
    general_l3DistributionPercentage_validation(props, userInputData);
    general_l4DistributionPercentage_validation(props, userInputData);
    general_minorEnhDistributionPercentage_validation(props, userInputData);


    general_additionalADCapacityHrsDistributionPercentage_validation(props, userInputData);
    general_additionalADCapacityHrsDistribution_validation(props,userInputData)
    general_nonTicketingActivitiesUpliftDistributionPercentage_validation(props, userInputData);


    general_totalGeneral_validation(props,userInputData);

    general_aiOpsAppPercentageOfTotalApps_validation(props,userInputData)

    if (errorMain) {
        userInputData['general']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        }
        objStatus.errorBtn = true;
    } else if (warningMain) {
        userInputData['general']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": ""
        }
    } else {
        userInputData['general']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } errorMain = false;
    warningMain = false;
}
