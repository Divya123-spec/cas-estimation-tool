import { applicationTechnologyFormula, calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs, calculateTicketDistributionPercentageAndBaselineHoursForL2 } from "./FormulaComponent_applicationTechnology";
import { BasicInfoNumberOfApplicationScope } from "./FormulaComponent_Basic";
import { AmsUtilizationUpdate, EffortEsimationScope, OpportunityParameterAdditionalCost } from './FormulaComponent_applicationCost'
import { general_additionalADCapacityHrsDistributionPercentage_C65, general_additionalADCapacityHrsDistributionPercentage_D65, general_additionalADCapacityHrsDistributionPercentage_E65, general_additionalADCapacityHrsDistributionPercentage_F65, general_additionalBatchJobsSupportUpliftPercentage_C43, general_additionalBatchJobsSupportUpliftPercentage_D43, general_additionalBatchJobsSupportUpliftPercentage_E43, general_appComplexityBasedDistributionPercentage_C30, general_appComplexityBasedDistributionPercentage_D30, general_appComplexityBasedDistributionPercentage_E30, general_criticalAppPercentageOfTotalApps_C36, general_criticalAppPercentageOfTotalApps_D36, general_criticalAppPercentageOfTotalApps_E36, general_l1DistributionPercentage_C47, general_l1DistributionPercentage_D47, general_l1DistributionPercentage_E47, general_l2DistributionPercentage_C50, general_l2DistributionPercentage_D50, general_l2DistributionPercentage_E50, general_l3DistributionPercentage_C53, general_l3DistributionPercentage_D53, general_l3DistributionPercentage_E53, general_l4DistributionPercentage_C56, general_l4DistributionPercentage_D56, general_l4DistributionPercentage_E56, general_minorEnhDistributionPercentage_C59, general_minorEnhDistributionPercentage_D59, general_minorEnhDistributionPercentage_E59, general_monthlyAverageTicketCountPerAppCategory_C39, general_monthlyAverageTicketCountPerAppCategory_D39, general_monthlyAverageTicketCountPerAppCategory_E39, general_nonTicketingActivitiesUpliftDistributionPercentage_C68, general_nonTicketingActivitiesUpliftDistributionPercentage_D68, general_nonTicketingActivitiesUpliftDistributionPercentage_E68 } from "./FormulaComponent_General";
import { ams_annualNumberOfTickets_I9, ams_annualNumberOfTickets_J10, ams_annualNumberOfTickets_J9, ams_annualNumberOfTickets_K10, ams_annualNumberOfTickets_K9, ams_annualNumberOfTickets_L10, ams_annualNumberOfTickets_L9, ams_annualNumberOfTickets_M10, ams_annualNumberOfTickets_M9, ams_annualNumberOfTickets_N10, ams_annualNumberOfTickets_N9, ams_annualNumberOfTickets_O10, ams_annualNumberOfTickets_O9, ams_ticketDistribution_annualNumberOfTickets_retiring_F40 } from "./FormulaComponent_AMS";
import { xyz } from "../../../../src/Pages/OpportunityInputsParameter/AMSInput/AMS";
import { input_validation_main } from "./Validations/ValidationMain";
import { englishValue } from "../../../Utils/CommonFunc";
import { testing_testingAdditionalFTECountDistribution_F95, testing_testingFTEDistributionPercentage_C93, testing_testingFTEDistributionPercentage_D93, testing_testingFTEDistributionPercentage_E93 } from "./FormulaComponent_Testing";
import { security_appSecurityScopeDistributionPercentage_C98, security_appSecurityScopeDistributionPercentage_D98, security_appSecurityScopeDistributionPercentage_E98, security_remediationTicketsDistributionPercentage_C101, security_remediationTicketsDistributionPercentage_D101, security_remediationTicketsDistributionPercentage_E101 } from "./FormulaComponent_Security";
import { cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_C89, cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_D89, cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_E89, cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_C80, cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_D80, cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_E80, cloudAppOps_rehostedAppsOnCloudDistributionPercentage_C76, cloudAppOps_rehostedAppsOnCloudDistributionPercentage_D76, cloudAppOps_rehostedAppsOnCloudDistributionPercentage_E76, cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_C78, cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_D78, cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_E78, cloudAppOps_saasAppsOnCloudDistributionPercentage_C82, cloudAppOps_saasAppsOnCloudDistributionPercentage_D82, cloudAppOps_saasAppsOnCloudDistributionPercentage_E82, cloudAppOps_totalContainerizedAppsOnCloudCountDistribution_C88, cloudAppos_totalContainerizedAppsOnCloudCountDistribution_D88, cloudAppos_totalContainerizedAppsOnCloudCountDistribution_E88, cloudAppos__onCloudAppCountDistribution_C71, cloudAppos__onCloudAppCountDistribution_D71, cloudAppos__onCloudAppCountDistribution_E71 } from "./FormulaComponent_CloudOpps";
import { moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_C135, moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_D135, moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_E135, moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_F135, moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_G135, moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_H135, moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_I135 } from "./FormulaComponent_MoveToCloud";
import { cloud_appScopeCoveredPercentage, cloud_isScopeApplicablity, productivity_cloud_productivityPercentagePlannedForUseOfY1 } from "./formulaProductivity_cloud";
import { devscops_isScopeApplicablity, productivity_devscops_productivityPercentagePlannedForUseOfY1 } from "./formulaProductivity_devscops";
import { productivity_testing_productivityPercentagePlannedForUseOfY1, testing_isScopeApplicablity } from "./formulaProductivity_testing";
import { efficiency_isScopeApplicablity, productivity_efficiency_productivityPercentagePlannedForUseOfY1 } from "./formulaProductivity_efficency";
import { automation_isScopeApplicablity, productivity_automation_productivityPercentagePlannedForUseOfY1 } from "./formulaProductivity_automation";


export const FormulaVersion = async (props) => {
    let userData = props.userInpuData.defaultInputData.response;
    let userInputData = userData['estimate']['userInputs'];
    //retiring applications
    formulaRetiring(props, userInputData);

    //basics
    let basicData = await BasicInfoNumberOfApplicationScope(props, userInputData['basicInfo'], userInputData['appTechnologyDistribution']['stdNonStdWorkStreams']);
    if (basicData == 'success') {
        let applicationtechData = await applicationTechnologyFormula(props, userInputData['appTechnologyDistribution']['stdNonStdWorkStreams']);
        if (applicationtechData == 'success') {
            EffortEsimationScope(props, userInputData['effortEstimationParameters'])
            OpportunityParameterAdditionalCost(props, userInputData['additionalCostInfo']);
            formulaGeneral(props, userInputData);
            formulaAms(props, userInputData);
            formulaTesting(props, userInputData);
            formulaSecuriy(props, userInputData);
            try {
                let cloudResult = await formulaCloud(props, userInputData);
                formulaProductivity(props, userInputData)
                if (cloudResult == 'success') {
                    return 'success'
                }
            }
            catch {
                return 'error'
            }


        }
    }
}
//JIRA 1143 migration
const formulaRetiring = async (props, userInpuData) => {
    userInpuData.basicInfo.numberOfAppsInScope = Number(userInpuData.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y1) - (Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y1))
    userInpuData.basicInfo.numberOfAppsInScopeY2 = Number(userInpuData.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y2) - (Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y1) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y2))
    userInpuData.basicInfo.numberOfAppsInScopeY3 = Number(userInpuData.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y3) - (Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y1) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y2) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y3))
    userInpuData.basicInfo.numberOfAppsInScopeY4 = Number(userInpuData.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y4) - (Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y1) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y2) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y3) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y4))
    userInpuData.basicInfo.numberOfAppsInScopeY5 = Number(userInpuData.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y5) - (Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y1) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y2) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y3) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y4) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y5))
    userInpuData.basicInfo.numberOfAppsInScopeY6 = Number(userInpuData.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y6) - (Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y1) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y2) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y3) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y4) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y5) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y6))
    userInpuData.basicInfo.numberOfAppsInScopeY7 = Number(userInpuData.basicInfo.numberOfAppsInScopeYoYIncludingGrowth.y7) - (Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y1) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y2) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y3) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y4) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y5) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y6) + Number(userInpuData.basicInfo.numberOfAppsInScopeYoYGettingRetiredOnly.y7))

     //JIRA 1137 retiring Application
  ams_ticketDistribution_annualNumberOfTickets_retiring_F40(props, userInpuData)

}
const formulaGeneral = async (props, userInputData) => {
    let ObjBtnStatus = {
        errorBtn: false,
        cheackBtn: false
    }
    general_appComplexityBasedDistributionPercentage_C30(props, userInputData);
    general_appComplexityBasedDistributionPercentage_D30(props, userInputData);
    general_appComplexityBasedDistributionPercentage_E30(props, userInputData);
    general_criticalAppPercentageOfTotalApps_C36(props, userInputData);
    general_criticalAppPercentageOfTotalApps_D36(props, userInputData);
    general_criticalAppPercentageOfTotalApps_E36(props, userInputData);
    general_monthlyAverageTicketCountPerAppCategory_C39(props, userInputData);
    general_monthlyAverageTicketCountPerAppCategory_D39(props, userInputData)
    general_monthlyAverageTicketCountPerAppCategory_E39(props, userInputData)
    general_additionalBatchJobsSupportUpliftPercentage_C43(props, userInputData);
    general_additionalBatchJobsSupportUpliftPercentage_D43(props, userInputData);
    general_additionalBatchJobsSupportUpliftPercentage_E43(props, userInputData);
    general_l1DistributionPercentage_C47(props, userInputData);
    general_l1DistributionPercentage_D47(props, userInputData);
    general_l1DistributionPercentage_E47(props, userInputData);
    general_l2DistributionPercentage_C50(props, userInputData);
    general_l2DistributionPercentage_D50(props, userInputData);
    general_l2DistributionPercentage_E50(props, userInputData);
    general_l3DistributionPercentage_C53(props, userInputData);
    general_l3DistributionPercentage_D53(props, userInputData);
    general_l3DistributionPercentage_E53(props, userInputData);
    general_l4DistributionPercentage_C56(props, userInputData);
    general_l4DistributionPercentage_D56(props, userInputData);
    general_l4DistributionPercentage_E56(props, userInputData);
    general_minorEnhDistributionPercentage_C59(props, userInputData);
    general_minorEnhDistributionPercentage_D59(props, userInputData);
    general_minorEnhDistributionPercentage_E59(props, userInputData);
    general_additionalADCapacityHrsDistributionPercentage_C65(props, userInputData);
    general_additionalADCapacityHrsDistributionPercentage_D65(props, userInputData);
    general_additionalADCapacityHrsDistributionPercentage_E65(props, userInputData);
    general_additionalADCapacityHrsDistributionPercentage_F65(props, userInputData);
    general_nonTicketingActivitiesUpliftDistributionPercentage_C68(props, userInputData);
    general_nonTicketingActivitiesUpliftDistributionPercentage_D68(props, userInputData);
    general_nonTicketingActivitiesUpliftDistributionPercentage_E68(props, userInputData);
    // let generalData = await inputEditData(props, userInputData, ObjBtnStatus);
    // if (generalData == 'success') {
    //     return 'success'
    // }
}
const formulaAms = async (props, userInputData) => {
    let ObjBtnStatus = {
        errorBtn: false,
        cheackBtn: false
    }

    ams_annualNumberOfTickets_I9(props, userInputData);
    ams_annualNumberOfTickets_J9(props, userInputData);
    ams_annualNumberOfTickets_K9(props, userInputData);
    ams_annualNumberOfTickets_L9(props, userInputData);
    ams_annualNumberOfTickets_M9(props, userInputData);
    ams_annualNumberOfTickets_N9(props, userInputData);
    ams_annualNumberOfTickets_O9(props, userInputData);
    ams_annualNumberOfTickets_J10(props, userInputData);
    ams_annualNumberOfTickets_K10(props, userInputData);
    ams_annualNumberOfTickets_L10(props, userInputData);
    ams_annualNumberOfTickets_M10(props, userInputData);
    ams_annualNumberOfTickets_N10(props, userInputData);
    ams_annualNumberOfTickets_O10(props, userInputData);

    // let amsData = await inputEditData(props, userInputData, ObjBtnStatus);
    // if (amsData == 'success') {
    //     return 'success'
    // }

}

const formulaCloud = async (props, userInputData) => {
    let ObjBtnStatus = {
        errorBtn: false,
        cheackBtn: false
    }

    cloudAppos__onCloudAppCountDistribution_C71(props, userInputData);

    cloudAppos__onCloudAppCountDistribution_D71(props, userInputData);

    cloudAppos__onCloudAppCountDistribution_E71(props, userInputData);

    cloudAppOps_rehostedAppsOnCloudDistributionPercentage_C76(props, userInputData);

    cloudAppOps_rehostedAppsOnCloudDistributionPercentage_D76(props, userInputData);

    cloudAppOps_rehostedAppsOnCloudDistributionPercentage_E76(props, userInputData);

    cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_C78(props, userInputData);

    cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_D78(props, userInputData);

    cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_E78(props, userInputData);

    cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_C80(props, userInputData);

    cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_D80(props, userInputData);

    cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_E80(props, userInputData);

    cloudAppOps_saasAppsOnCloudDistributionPercentage_C82(props, userInputData);

    cloudAppOps_saasAppsOnCloudDistributionPercentage_D82(props, userInputData);

    cloudAppOps_saasAppsOnCloudDistributionPercentage_E82(props, userInputData);

    cloudAppOps_totalContainerizedAppsOnCloudCountDistribution_C88(props, userInputData);

    cloudAppos_totalContainerizedAppsOnCloudCountDistribution_D88(props, userInputData);

    cloudAppos_totalContainerizedAppsOnCloudCountDistribution_E88(props, userInputData);

    cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_C89(props, userInputData);

    cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_D89(props, userInputData);

    cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_E89(props, userInputData);


    //Move to cloud
    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_C135(props, userInputData);
    cloud_appScopeCoveredPercentage(props, userInputData);

    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_D135(props, userInputData);
    cloud_appScopeCoveredPercentage(props, userInputData);

    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_E135(props, userInputData);
    cloud_appScopeCoveredPercentage(props, userInputData);

    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_F135(props, userInputData);
    cloud_appScopeCoveredPercentage(props, userInputData);

    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_G135(props, userInputData);
    cloud_appScopeCoveredPercentage(props, userInputData);

    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_H135(props, userInputData);
    cloud_appScopeCoveredPercentage(props, userInputData);

    moveToCloud_nonCloudAppsPercentagePlannedToMoveToCloudEachYear_I135(props, userInputData);
    cloud_appScopeCoveredPercentage(props, userInputData);



    let CloudAppData = await inputEditDataCloud(props, userInputData, ObjBtnStatus);
    if (CloudAppData == 'success') {
        return 'success'
    }

}
const formulaTesting = async (props, userInputData) => {
    let ObjBtnStatus = {
        errorBtn: false,
        cheackBtn: false
    }


    testing_testingFTEDistributionPercentage_C93(props, userInputData);
    testing_testingFTEDistributionPercentage_D93(props, userInputData);
    testing_testingFTEDistributionPercentage_E93(props, userInputData);
    testing_testingAdditionalFTECountDistribution_F95(props, userInputData);

    // let testingData = await inputEditData(props, userInputData, ObjBtnStatus);
    // if (testingData == 'success') {
    //     return 'success'
    // }

}
const formulaSecuriy = async (props, userInputData) => {
    let ObjBtnStatus = {
        errorBtn: false,
        cheackBtn: false
    }

    security_appSecurityScopeDistributionPercentage_C98(props, userInputData);
    security_appSecurityScopeDistributionPercentage_D98(props, userInputData);
    security_appSecurityScopeDistributionPercentage_E98(props, userInputData);
    security_remediationTicketsDistributionPercentage_C101(props, userInputData);
    security_remediationTicketsDistributionPercentage_D101(props, userInputData);
    security_remediationTicketsDistributionPercentage_E101(props, userInputData);

    // let securityData = await inputEditData(props, userInputData, ObjBtnStatus);
    // if (securityData == 'success') {
    //     return 'success'
    // }

}

const formulaProductivity = (props, userInputData) => {
    productivity_devscops_productivityPercentagePlannedForUseOfY1(props, userInputData);
    productivity_testing_productivityPercentagePlannedForUseOfY1(props, userInputData);
    productivity_efficiency_productivityPercentagePlannedForUseOfY1(props, userInputData);
    productivity_cloud_productivityPercentagePlannedForUseOfY1(props, userInputData);
    productivity_automation_productivityPercentagePlannedForUseOfY1(props, userInputData);
    //JIRA 821 pouplate formula 
    devscops_isScopeApplicablity(props, userInputData);
    automation_isScopeApplicablity(props, userInputData);
    cloud_isScopeApplicablity(props, userInputData);
    testing_isScopeApplicablity(props, userInputData);
    efficiency_isScopeApplicablity(props, userInputData);
}
const btnFunction = (objBtn) => {
    let inputBtnData = {}
    if (objBtn.errorBtn) {
        inputBtnData = {
            RestButton: true,
            EstimateButton: true,
            SaveButton: false,
            CalculateButton: false,
            SendForReivewButton: false,
            Export: false,
            inputButton: false,
            outputButton: false,
            calculateModal: false,
            saveModal: false
        }
    }
    else {
        inputBtnData = {
            RestButton: true, EstimateButton: true,
            SaveButton: false,
            CalculateButton: true,
            SendForReivewButton: false,
            Export: false,
            inputButton: true,
            outputButton: false,
            calculateModal: false,
            saveModal: false
        }
    }
    return inputBtnData
}
const inputEditBaselineTestingFTEs = (props, userInputData, objStatus) => {

    return new Promise((resolve, reject) => {

        props.resetDashcalculateMinEnhWtHrs(userInputData).then((res) => {

            if (res.status === 'SUCCESS') {
                //Now API output change feilds calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs
                calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs(props, userInputData, res.data);
                input_validation_main(props, userInputData, objStatus);
                let btnInput = btnFunction(objStatus);
                props.userInputDataEditFormulaInfo(userInputData, btnInput);
                resolve('success')
            }

            else {
                alert(englishValue('TechnicalError'))
                input_validation_main(props, userInputData, objStatus);
                let btnInput = btnFunction(objStatus);
                props.userInputDataEditFormulaInfo(userInputData, btnInput);

            }
        }).catch((err) => {
            alert(englishValue('TechnicalError'))
            input_validation_main(props, userInputData, objStatus);
            let btnInput = btnFunction(objStatus);
            props.userInputDataEditFormulaInfo(userInputData, btnInput);
        });
    });
}
const inputEditData = (props, userInputData, objStatus) => {
    // Inputfunction(userInputData);
    //calculateTicketDistributionPercentage
    return new Promise((resolve, reject) => {
        props.calculateTicketDistributionPercentage(userInputData).then((res) => {
            if (res.status === 'SUCCESS') {
                //Now API output change feilds calculateTicketDistributionPercentage
                calculateTicketDistributionPercentageAndBaselineHoursForL2(props, userInputData, res.data, true);
                props.resetDashcalculateMinEnhWtHrs(userInputData).then((res) => {
                    if (res.status === 'SUCCESS') {
                        //Now API output change feilds calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs
                        calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs(props, userInputData, res.data);
                        input_validation_main(props, userInputData, objStatus);
                        let btnInput = btnFunction(objStatus);
                        props.userInputDataEditFormulaInfo(userInputData, btnInput);
                        resolve('success')
                    }

                    else {
                        alert(englishValue('TechnicalError'))
                        input_validation_main(props, userInputData, objStatus);
                        let btnInput = btnFunction(objStatus);
                        props.userInputDataEditFormulaInfo(userInputData, btnInput);
                    }
                }).catch((err) => {
                    alert(englishValue('TechnicalError'))
                    input_validation_main(props, userInputData, objStatus);
                    let btnInput = btnFunction(objStatus);
                    props.userInputDataEditFormulaInfo(userInputData, btnInput);

                });

            }

            else {
                alert(englishValue('TechnicalError'))
                input_validation_main(props, userInputData, objStatus);
                let btnInput = btnFunction(objStatus);
                props.userInputDataEditFormulaInfo(userInputData, btnInput);

            }
        }).catch((err) => {
            alert(englishValue('TechnicalError'))
            input_validation_main(props, userInputData, objStatus);
            let btnInput = btnFunction(objStatus);
            props.userInputDataEditFormulaInfo(userInputData, btnInput);

        });
    });
}

const inputEditDataCloud = (props, userInputData, objStatus) => {
    // Inputfunction(userInputData);
    //calculateTicketDistributionPercentage
    return new Promise((resolve, reject) => {
        props.calculateTicketDistributionPercentage(userInputData).then((res) => {
            if (res.status === 'SUCCESS') {
                //Now API output change feilds calculateTicketDistributionPercentage
                calculateTicketDistributionPercentageAndBaselineHoursForL2(props, userInputData, res.data, true);
                props.resetDashcalculateMinEnhWtHrs(userInputData).then((minRes) => {
                    if (res.status === 'SUCCESS') {

                        let userCloudInputData = userInputData['cloudAppOps'];
                        let cloudaps = userInputData.clientCloudLandscape.cloudAppsAndblendedEffortsDistributionPercentage;
                        props.calculateClientCloudLandscapeAction(userCloudInputData, cloudaps).then((res) => {
                            if (res.status === 'SUCCESS') {
                                // let userInputData = userData['estimate']['userInputs'];
                                userInputData['clientCloudLandscape'] = res.data;
                                //Now API output change feilds calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs
                                calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs(props, userInputData, minRes.data);
                                input_validation_main(props, userInputData, objStatus);
                                let btnInput = btnFunction(objStatus);
                                props.userInputDataEditFormulaInfo(userInputData, btnInput);
                                resolve('success')
                            }
                            else {
                                alert(englishValue('TechnicalError'))
                            }
                        }).catch((err) => {
                            alert(englishValue('TechnicalError'))
                        });



                    }

                    else {
                        alert(englishValue('TechnicalError'))
                        input_validation_main(props, userInputData, objStatus);
                        let btnInput = btnFunction(objStatus);
                        props.userInputDataEditFormulaInfo(userInputData, btnInput);
                    }
                }).catch((err) => {
                    alert(englishValue('TechnicalError'))
                    input_validation_main(props, userInputData, objStatus);
                    let btnInput = btnFunction(objStatus);
                    props.userInputDataEditFormulaInfo(userInputData, btnInput);

                });

            }

            else {
                alert(englishValue('TechnicalError'))
                input_validation_main(props, userInputData, objStatus);
                let btnInput = btnFunction(objStatus);
                props.userInputDataEditFormulaInfo(userInputData, btnInput);

            }
        }).catch((err) => {
            alert(englishValue('TechnicalError'))
            input_validation_main(props, userInputData, objStatus);
            let btnInput = btnFunction(objStatus);
            props.userInputDataEditFormulaInfo(userInputData, btnInput);

        });
    });
}
const calculateHandlerVersionOutput = (props) => {
    return new Promise((resolve, reject) => {
        let InputData = { "data": props.userInpuData.defaultInputData['response'] };
        props.showScreenLoader('calculateBtn');
        props.userOutputDataEdit(InputData).then((res) => {
            if (res.status === 'SUCCESS') {
                props.userinputStatus({
                    RestButton: true,
                    EstimateButton: true,
                    SaveButton: true,
                    CalculateButton: false,
                    SendForReivewButton: false,
                    Export: false,
                    outputButton: true,
                    inputButton: true,
                    calculateModal: true,
                    saveModal: false
                })
                props.hideScreenLoader();
                props.navigationInputToggleDefault();
                props.navigationInputToggleInputProductivityDefault();
                props.navigationInputToggleOutputProductivityDefault();

                resolve({ status: 'success', data: res.data.response });

                //props.history.push('/mainOutput')
            }
            else {
                props.hideScreenLoader();
                reject('Error in Calculate');


            }
        }).catch((err) => {
            props.hideScreenLoader();
            reject('Error in Calculate');

        });
    });
}

const saveHandlerVersion = (props, responseCalculate) => {
    return new Promise((resolve, reject) => {
        let InputData = {
            "data": {
                "estimate": {
                    ...props.userInpuData.defaultInputData['response'].estimate,
                    'intermediateOutputs': responseCalculate['intermediateOutputs'],
                    'finalOutputs': responseCalculate['finalOutputs'],
                    'entityVersionsUsedInCalculation': responseCalculate['entityVersionsUsedInCalculation']
                }
            }
        }
        let sendReview = true;
        if (props.userInpuData.defaultInputData['response'].estimate.saleStage === 'rom') {
            sendReview = false;
        }
        props.showScreenLoader('saveBtn');
        props.userOutputDataSave(InputData).then((res) => {
            if (res.status === 'SUCCESS') {
                props.userinputStatus({
                    RestButton: false,
                    EstimateButton: true,
                    SaveButton: false,
                    CalculateButton: false,
                    SendForReivewButton: sendReview,
                    Export: true,
                    outputButton: true,
                    inputButton: true,
                    calculateModal: false,
                    saveModal: true
                });
                props.hideScreenLoader();
                resolve('success')

            }
            else {
                props.hideScreenLoader();
                alert(englishValue('TechnicalError'));
                reject('Error in Save')

            }
        }).catch((err) => {
            props.hideScreenLoader();
            alert(englishValue('TechnicalError'));
            reject('Error in Save')

        });
    });
}