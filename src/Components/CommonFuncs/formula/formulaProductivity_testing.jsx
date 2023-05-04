export const productivity_testing_productivityPercentagePlannedForUseOfY1 = (props, userInputData) => {
  let newArr = userInputData.productivity.testing.testingLevers.map((ele) => {
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

  userInputData.productivity.testing.testingLevers = newArr;
}
export const testing_isScopeApplicablity = (props, userInputData) => {
    let newArr = userInputData.productivity.testing.testingLevers.map((ele) => {
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
        ele.finalProductivityPercentageByApplicability.y1 = Number(
          ((Number(userInputData.productivity.productivityPercentagePlannedForUseOfY1) / 100) *
            (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y1) / 100) *
            (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
        )
        ele.finalProductivityPercentageByApplicability.y2 = Number(
          (
            (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y2) / 100) *
            (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
        )
        ele.finalProductivityPercentageByApplicability.y3 = Number(
          (
            (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y3) / 100) *
            (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
        )
        ele.finalProductivityPercentageByApplicability.y4 = Number(
          (
            (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y4) / 100) *
            (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
        )
        ele.finalProductivityPercentageByApplicability.y5 = Number(
          (
            (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y5) / 100) *
            (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
        )
        ele.finalProductivityPercentageByApplicability.y6 = Number(
          (
            (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y6) / 100) *
            (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
        )
        ele.finalProductivityPercentageByApplicability.y7 = Number(
          (
            (Number(ele.selectedProductivityPercentageByClientMaturityLevel.y7) / 100) *
            (Number(ele.appScopeCoveredPercentage) / 100) * 100).toFixed(2)
        )
      }
  
      return ele;
  
  
    })
  
    userInputData.productivity.testing.testingLevers = newArr
  }
  