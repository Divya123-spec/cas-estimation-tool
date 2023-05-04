export const effortEstimation_validation_main = (props, userInputData, objStatus) => {

    if ((!(userInputData['effortEstimationParameters']['uiStatus']['iconStatus']['ok']) && !(userInputData['effortEstimationParameters']['uiStatus']['iconStatus']['warning']))) {
        objStatus.errorBtn = true;
     }
}