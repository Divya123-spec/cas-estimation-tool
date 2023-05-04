import { useState } from 'react';

//AMS Estimates Data 
const UseCustomInput = (userInputData) => {
    const [disableBtn, setDisableBtn] = useState(false);
    var tableCellInput = Object.entries(userInputData);
    const handleInputData = () => {
        setDisableBtn(true);
    }
    return {
        disableBtn,
        tableCellInput,
        handleInputData
    }
}
export default UseCustomInput;

//AMS Estimates Data 
export const UseSecurityCustomInput = (security, userInputData, userOutputData) => {
    const [disableBtn, setDisableBtn] = useState(false);
   
    if (userOutputData.defaultOutputData && userInputData.defaultInputData) {
        const amsUtilizationCalculation = userInputData.defaultInputData.response.estimate.userInputs.ams.amsUtilizationCalculation;
        const currentBaselineHours = userOutputData.defaultOutputData.response.intermediateOutputs.complexityAndCloudOutput.complexityAndCloudAppsBaselineWtHoursOrPercentage.baselineWtHoursForL2.currentBaselineHours

        for (const key in security.remediationFTEDistribution) {
            if (!["uiStatus", "range"].includes(key)) {
                security.remediationFTEDistribution[key] = ((Number(security.remediationTicketsCountDistribution[key]) * Number(currentBaselineHours)) / Number(amsUtilizationCalculation.ibmWeightedUtilizationMonthlyHrs)).toFixed(2)
            }
        }
    }
    //security.remediationFTEDistribution["total"] = Number(security.remediationFTEDistribution["total"].toFixed(2))

   
    const tableCellInput = Object.entries(security);
    const handleInputData = () => {
        setDisableBtn(true);
    }
    return {
        disableBtn,
        tableCellInput,
        handleInputData
    }
}
