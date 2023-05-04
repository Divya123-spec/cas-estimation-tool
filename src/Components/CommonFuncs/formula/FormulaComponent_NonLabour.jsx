
export const NonLabourNumberOfApplicationScope = (props, userInputData) => {


    let numberOfApps = userInputData['basicInfo']['numberOfAppsInScope']
    let nonLabourTotal = userInputData['nonLabour']['typicalCostDistribution_USD']['total']

    let nonLabourApps = props.userNonLabourStub['response']['nonLaborCostStub']
    let filterLabourObj = nonLabourApps.find((ele) => {
        return ele.appRange_min <= numberOfApps && ele.appRange_max >= numberOfApps

    })
    if (filterLabourObj) {


        let TotalValue = filterLabourObj['totalCostInUSD']

        userInputData['nonLabour']['typicalCostDistribution_USD']['total'] = Number(((TotalValue / 7) * (userInputData['basicInfo']['dealDurationInYears']))).toFixed(2);

        //   Simple
        userInputData['nonLabour']['typicalCostDistribution_USD']['simple'] =
            ((userInputData['nonLabour']['nonLabourCostDistributionPercentage']['simple']) / 100) * ((TotalValue / 7) * (userInputData['basicInfo']['dealDurationInYears']));

        // medium
        userInputData['nonLabour']['typicalCostDistribution_USD']['medium'] =
            ((userInputData['nonLabour']['nonLabourCostDistributionPercentage']['medium']) / 100) * ((TotalValue / 7) * (userInputData['basicInfo']['dealDurationInYears']));

        // complex
        userInputData['nonLabour']['typicalCostDistribution_USD']['complex'] =
            ((userInputData['nonLabour']['nonLabourCostDistributionPercentage']['complex']) / 100) * ((TotalValue / 7) * (userInputData['basicInfo']['dealDurationInYears']));
    }
}
