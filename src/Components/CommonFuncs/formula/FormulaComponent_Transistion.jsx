
export const TransistionOfApplicationScope = (props, userInputData) => {
    let numberOfApps = userInputData['basicInfo']['numberOfAppsInScope']
    let TrnasistionApps = userInputData['transition']['typicalCostDistribution_USD']['total']

    let transistionApps = props.userNonLabourStub['response']['nonLaborCostStub']
    let filterLabourObj = transistionApps.find((ele) => {
        return ele.appRange_min <= numberOfApps && ele.appRange_max >= numberOfApps

    })
    if (filterLabourObj) {


        let TotalValue = filterLabourObj['transitionCostInUSD']

        userInputData['transition']['typicalCostDistribution_USD']['total'] = Number(TotalValue).toFixed(2);

        //   Simple
        userInputData['transition']['typicalCostDistribution_USD']['simple'] =
            ((userInputData['transition']['managerTravelToolCostDistributionPercentage']['simple']) / 100) * TotalValue

        // medium
        userInputData['transition']['typicalCostDistribution_USD']['medium'] =
            ((userInputData['transition']['managerTravelToolCostDistributionPercentage']['medium']) / 100) * TotalValue

        // complex
        userInputData['transition']['typicalCostDistribution_USD']['complex'] =
            ((userInputData['transition']['managerTravelToolCostDistributionPercentage']['complex']) / 100) * TotalValue
    }
}
