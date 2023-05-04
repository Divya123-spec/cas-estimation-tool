let errorMain = false;
let warningMain = false;
export const testing_testingFTEDistributionPercentage_validation = (props, userInputData) => {

    if (Number(userInputData['testing']['testingFTEDistributionPercentage']['total']) === 100) {
        userInputData['testing']['testingFTEDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }

    } else {
        errorMain = true;
        userInputData['testing']['testingFTEDistributionPercentage']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        }
    }
}

export const testing_testingAdditionalFTECountDistribution_validation = (props, userInputData) => {
    if (Number(userInputData['testing']['testingAdditionalFTECountDistribution']['total']) >= 0) {
        userInputData['testing']['testingAdditionalFTECountDistribution']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }

    } else {

        errorMain = true;
        userInputData['testing']['testingAdditionalFTECountDistribution']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        }
    }
}

export const testing_validation_main = (props, userInputData, objStatus) => {

    testing_testingFTEDistributionPercentage_validation(props, userInputData);
    testing_testingAdditionalFTECountDistribution_validation(props, userInputData);

    if (errorMain) {
        userInputData['testing']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        }
        objStatus.errorBtn = true;
    } else if (warningMain) {
        userInputData['testing']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": ""
        }
    } else {
        userInputData['testing']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    } errorMain = false;
    warningMain = false;
}



