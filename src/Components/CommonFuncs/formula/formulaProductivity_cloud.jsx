import { devscops_DevOpsOnCloudOverall_Prem } from "./formulaProductivity_devscops";

export const productivity_cloud_productivityPercentagePlannedForUseOfY1 = (props, userInputData) => {
    let newArr = userInputData.productivity.cloud.cloudLevers.map((ele) => {
        let selctionkey = ele.clientMaturityLevelSelectionKey;
        if (ele.isScopeApplicable) {
            ele.finalProductivityPercentageByApplicability.y1 = Number(
                ((Number(userInputData.productivity.productivityPercentagePlannedForUseOfY1) / 100) *
                    (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y1) / 100) *
                    (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
            )
        }

        return ele;


    })

    userInputData.productivity.cloud.cloudLevers = newArr;
}
//D52 change
export const cloud_appScopeCoveredPercentage = (props, userInputData) => {
    let newArr = userInputData.productivity.cloud.cloudLevers.map((ele) => {
        let selctionkey = ele.clientMaturityLevelSelectionKey;
        if (ele.isScopeApplicable) {
            //version 1
            // //e53 --- k53
            // //e53 y1 1)
            // ele.selectedProductivityPercentageByClientMaturityLevel.y1 = Number(
            //     ((((Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y1']) / 100)) *
            //         ((100 / 100) - ((Number(ele.appScopeCoveredPercentage) / 100)))) * 100).toFixed(2)
            // );

            // //e52 y1 2)
            // let MovcloudProdY1 = Number((((Number(ele.appScopeCoveredPercentage) / 100)
            //     * (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y1) / 100)) * 100).toFixed(2));

            // //F53 y2 3)
            // ele.selectedProductivityPercentageByClientMaturityLevel.y2 = Number(
            //     ((((Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y2']) / 100)) *
            //         ((100 / 100) - ((Number(ele.appScopeCoveredPercentage) / 100) + (Number(MovcloudProdY1) / 100)))) * 100).toFixed(2)
            // );
            // //F52 y1 4)
            // let MovcloudProdY2 = Number((((Number(ele.appScopeCoveredPercentage) / 100)
            //     * (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y2) / 100)) * 100).toFixed(2));

            // //G53 y2 5)
            // ele.selectedProductivityPercentageByClientMaturityLevel.y3 = Number(
            //     ((((Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y3']) / 100)) *
            //         ((100 / 100) - ((Number(ele.appScopeCoveredPercentage) / 100) + (Number(MovcloudProdY1) / 100)+(Number(MovcloudProdY2) / 100)))) * 100).toFixed(2)
            // );

            // //G52 y1 6)
            // let MovcloudProdY3 = Number((((Number(ele.appScopeCoveredPercentage) / 100)
            //     * (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y3) / 100)) * 100).toFixed(2));

            // //H53 y2 7)
            // ele.selectedProductivityPercentageByClientMaturityLevel.y4 = Number(
            //     ((((Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y4']) / 100)) *
            //         ((100 / 100) - ((Number(ele.appScopeCoveredPercentage) / 100) + (Number(MovcloudProdY1) / 100)+(Number(MovcloudProdY2) / 100)+(Number(MovcloudProdY3) / 100)))) * 100).toFixed(2)
            // );

            // //H52 y1 8)
            // let MovcloudProdY4 = Number((((Number(ele.appScopeCoveredPercentage) / 100)
            //     * (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y4) / 100)) * 100).toFixed(2));

            // //I53 y2 9)
            // ele.selectedProductivityPercentageByClientMaturityLevel.y5 = Number(
            //     ((((Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y5']) / 100)) *
            //         ((100 / 100) - ((Number(ele.appScopeCoveredPercentage) / 100) + (Number(MovcloudProdY1) / 100)+(Number(MovcloudProdY2) / 100)+(Number(MovcloudProdY3) / 100)+(Number(MovcloudProdY4) / 100)))) * 100).toFixed(2)
            // );
            // //I52 y1 10)
            // let MovcloudProdY5 = Number((((Number(ele.appScopeCoveredPercentage) / 100)
            //     * (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y5) / 100)) * 100).toFixed(2));

            // //J53 y2 11)
            // ele.selectedProductivityPercentageByClientMaturityLevel.y6 = Number(
            //     ((((Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y6']) / 100)) *
            //         ((100 / 100) - ((Number(ele.appScopeCoveredPercentage) / 100) + (Number(MovcloudProdY1) / 100)+(Number(MovcloudProdY2) / 100)+(Number(MovcloudProdY3) / 100)+(Number(MovcloudProdY4) / 100)+(Number(MovcloudProdY5) / 100)))) * 100).toFixed(2)
            // );
            // //J52 y1 10)
            // let MovcloudProdY6 = Number((((Number(ele.appScopeCoveredPercentage) / 100)
            //     * (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y6) / 100)) * 100).toFixed(2));

            // //K53 y2 11)
            // ele.selectedProductivityPercentageByClientMaturityLevel.y7 = Number(
            //     ((((Number(userInputData['moveToCloud']['nonCloudAppsPercentagePlannedToMoveToCloudEachYear']['y7']) / 100)) *
            //         ((100 / 100) - ((Number(ele.appScopeCoveredPercentage) / 100) +(Number(MovcloudProdY2) / 100)+(Number(MovcloudProdY1) / 100)+(Number(MovcloudProdY2) / 100)+(Number(MovcloudProdY3) / 100)+(Number(MovcloudProdY4) / 100)+(Number(MovcloudProdY5) / 100)+ (Number(MovcloudProdY6) / 100)))) * 100).toFixed(2)
            // );

            //version2

            //e53 --- k53
            //e53 y1 1)

            ele.selectedProductivityPercentageByClientMaturityLevel.y1 =
            Number((Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y1'])/
            (Number(userInputData['basicInfo']['numberOfAppsInScope']))*100)+Number(ele.appScopeCoveredPercentage)
            );

          
            //F53 y2 3)
            
            ele.selectedProductivityPercentageByClientMaturityLevel.y2 =
            Number((Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y2'])/
            (Number(userInputData['basicInfo']['numberOfAppsInScope']))*100)
            );

          
            //G53 y2 5)
            ele.selectedProductivityPercentageByClientMaturityLevel.y3 =
            Number((Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y3'])/
            (Number(userInputData['basicInfo']['numberOfAppsInScope']))*100)
            );

           
            //H53 y2 7)
            ele.selectedProductivityPercentageByClientMaturityLevel.y4 =
            Number((Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y4'])/
            (Number(userInputData['basicInfo']['numberOfAppsInScope']))*100)
            );

            //I53 y2 9)
            ele.selectedProductivityPercentageByClientMaturityLevel.y5 =
            Number((Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y5'])/
            (Number(userInputData['basicInfo']['numberOfAppsInScope']))*100)
            );

           
            //J53 y1 10)
            ele.selectedProductivityPercentageByClientMaturityLevel.y6 =
            Number((Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y6'])/
            (Number(userInputData['basicInfo']['numberOfAppsInScope']))*100)
            );

            //K53 y2 11)
            ele.selectedProductivityPercentageByClientMaturityLevel.y7 =
            Number((Number(userInputData['moveToCloud']['appsCountToBeMovingToCloudYoY']['y7'])/
            (Number(userInputData['basicInfo']['numberOfAppsInScope']))*100)
            );
        }


        return ele;


    })

    userInputData.productivity.cloud.cloudLevers = newArr;
    cloud_isScopeApplicablity(props,userInputData);
    devscops_DevOpsOnCloudOverall_Prem(props,userInputData);

    //change in devscops 19 and 15 (devscops overall and prem)

}


export const cloud_isScopeApplicablity = (props, userInputData) => {
    let newArr = userInputData.productivity.cloud.cloudLevers.map((ele) => {
        let selctionkey = ele.clientMaturityLevelSelectionKey;
        if (!ele.isScopeApplicable) {
            ele.finalProductivityPercentageByApplicability.y1 = 0;
            ele.finalProductivityPercentageByApplicability.y2 = 0;
            ele.finalProductivityPercentageByApplicability.y3 = 0;
            ele.finalProductivityPercentageByApplicability.y4 = 0;
            ele.finalProductivityPercentageByApplicability.y5 = 0;
            ele.finalProductivityPercentageByApplicability.y6 = 0;
            ele.finalProductivityPercentageByApplicability.y7 = 0;

        }
        else {
            //version 1
            // ele.finalProductivityPercentageByApplicability.y1 = Number(
            //     ((Number(userInputData.productivity.productivityPercentagePlannedForUseOfY1) / 100) *
            //         (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y1) / 100) *
            //         (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
            // )
            // ele.finalProductivityPercentageByApplicability.y2 = Number(
            //     (
            //         (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y2) / 100) *
            //         (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
            // )
            // ele.finalProductivityPercentageByApplicability.y3 = Number(
            //     (
            //         (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y3) / 100) *
            //         (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
            // )
            // ele.finalProductivityPercentageByApplicability.y4 = Number(
            //     (
            //         (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y4) / 100) *
            //         (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
            // )
            // ele.finalProductivityPercentageByApplicability.y5 = Number(
            //     (
            //         (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y5) / 100) *
            //         (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
            // )
            // ele.finalProductivityPercentageByApplicability.y6 = Number(
            //     (
            //         (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y6) / 100) *
            //         (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
            // )
            // ele.finalProductivityPercentageByApplicability.y7 = Number(
            //     (
            //         (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y7) / 100) *
            //         (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
            // )

            //version 2

            ele.finalProductivityPercentageByApplicability.y1 = Number(
                ((Number(userInputData.productivity.productivityPercentagePlannedForUseOfY1) / 100) *
                    (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y1) / 100) *
                    (18  / 100) * 100).toFixed(2)
            )
            ele.finalProductivityPercentageByApplicability.y2 = Number(
                (
                    (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y2) / 100) *
                    (18 / 100) * 100).toFixed(2)
            )
            ele.finalProductivityPercentageByApplicability.y3 = Number(
                (
                    (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y3) / 100) *
                    (18 / 100) * 100).toFixed(2)
            )
            ele.finalProductivityPercentageByApplicability.y4 = Number(
                (
                    (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y4) / 100) *
                    (18 / 100) * 100).toFixed(2)
            )
            ele.finalProductivityPercentageByApplicability.y5 = Number(
                (
                    (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y5) / 100) *
                    (18 / 100) * 100).toFixed(2)
            )
            ele.finalProductivityPercentageByApplicability.y6 = Number(
                (
                    (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y6) / 100) *
                    (18 / 100) * 100).toFixed(2)
            )
            ele.finalProductivityPercentageByApplicability.y7 = Number(
                (
                    (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y7) / 100) *
                    (18 / 100) * 100).toFixed(2)
            )
        }

        return ele;


    })

    userInputData.productivity.cloud.cloudLevers = newArr
}
