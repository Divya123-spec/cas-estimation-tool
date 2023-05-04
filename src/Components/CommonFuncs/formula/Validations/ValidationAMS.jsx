let errorMain = false;
let warningMain = false;
export const ams_totalAMS_validation = (props, userInputData) => {

    let totalPercent = 100;
    let y2 = (((Number(userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y2'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y2'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y2'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y2'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y2']))).toFixed(2));
    let y3 = (((Number(userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y3'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y3'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y3'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y3'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y3']))).toFixed(2));
    let y4 = (((Number(userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y4'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y4'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y4'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y4'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y4']))).toFixed(2));
    let y5 = (((Number(userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y5'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y5'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y5'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y5'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y5']))).toFixed(2));

    let y6 = (((Number(userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y6'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y6'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y6'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y6'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y6']))).toFixed(2));

    let y7 = (((Number(userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y7'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y7'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y7'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y7'])) +
        (Number(userInputData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y7']))).toFixed(2));


    let sumy2 = parseFloat((parseFloat(totalPercent) - parseFloat(y2)).toFixed(2));
    let sumy3 = parseFloat((parseFloat(totalPercent) - parseFloat(y3)).toFixed(2));
    let sumy4 = parseFloat((parseFloat(totalPercent) - parseFloat(y4)).toFixed(2));
    let sumy5 = parseFloat((parseFloat(totalPercent) - parseFloat(y5)).toFixed(2));
    let sumy6 = parseFloat((parseFloat(totalPercent) - parseFloat(y6)).toFixed(2));
    let sumy7 = parseFloat((parseFloat(totalPercent) - parseFloat(y7)).toFixed(2));

    if (((sumy2 >= (-0.6)) && (sumy2 <= 0.6))) {
        y2 = (100).toFixed(2);
    }
    if (((sumy3 >= (-0.6)) && (sumy3 <= 0.6))) {
        y3 = (100).toFixed(2);
    }
    if (((sumy4 >= (-0.6)) && (sumy4 <= 0.6))) {
        y4 = (100).toFixed(2);
    }
    if (((sumy5 >= (-0.6)) && (sumy5 <= 0.6))) {
        y5 = (100).toFixed(2);
    }
    if (((sumy6 >= (-0.6)) && (sumy6 <= 0.6))) {
        y6 = (100).toFixed(2);
    }
    if (((sumy7 >= (-0.6)) && (sumy7 <= 0.6))) {
        y7 = (100).toFixed(2);
    }

    if ((y2 !== totalPercent.toFixed(2)) || (y3 !== totalPercent.toFixed(2)) || (y4 !== totalPercent.toFixed(2)) || (y5 !== totalPercent.toFixed(2)) || (y6 !== totalPercent.toFixed(2)) || (y7 !== totalPercent.toFixed(2))) {
        errorMain = true
    }


}
export const ams_UtilizationCalculation_validation = (props, userInputData) => {

    let monthlyhr=Number(userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']);
    if(monthlyhr<145 || monthlyhr>185){
        errorMain = true;  
    }
  


}

export const ams_validation_main = (props, userInputData, objStatus) => {
    ams_totalAMS_validation(props, userInputData);
    ams_UtilizationCalculation_validation(props, userInputData);
    if (errorMain) {
        userInputData['ams']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": false,
            "warningMessage": ""
        }
        objStatus.errorBtn = true;
    } else if (warningMain) {
        userInputData['ams']['uiStatus']['iconStatus'] = {
            "warning": true,
            "ok": false,
            "warningMessage": ""
        }
    } else {
        userInputData['ams']['uiStatus']['iconStatus'] = {
            "warning": false,
            "ok": true,
            "warningMessage": ""
        }
    }
    errorMain = false;
    warningMain = false;
}
