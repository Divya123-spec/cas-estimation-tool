export const testing_testingAdditionalFTECountDistribution_C95=(props,userInputData)=>{
    //C96
        userInputData['testing']['totalTestFTEInSolutionCountDistribution']['simple']= parseFloat((Number(userInputData['testing']['testingAdditionalFTECountDistribution']['simple']) +
        Number(userInputData['testing']['testingFTECountDistribution']['simple'])).toFixed(2));
}
export const testing_testingFTECountDistribution_C94 = (props, userInputData) => {
    //C96
    userInputData['testing']['totalTestFTEInSolutionCountDistribution']['simple'] =
        parseFloat((Number(userInputData['testing']['testingAdditionalFTECountDistribution']['simple']) +
            Number(userInputData['testing']['testingFTECountDistribution']['simple'])).toFixed(2));
}
export const testing_testingFTECountDistribution_D94 = (props, userInputData) => {
    //D96
    userInputData['testing']['totalTestFTEInSolutionCountDistribution']['medium'] =
        parseFloat((Number(userInputData['testing']['testingAdditionalFTECountDistribution']['medium']) +
            Number(userInputData['testing']['testingFTECountDistribution']['medium'])).toFixed(2));
}
export const testing_testingAdditionalFTECountDistribution_D95=(props,userInputData)=>{
    userInputData['testing']['totalTestFTEInSolutionCountDistribution']['medium'] =
        parseFloat((Number(userInputData['testing']['testingAdditionalFTECountDistribution']['medium']) +
            Number(userInputData['testing']['testingFTECountDistribution']['medium'])).toFixed(2));
}
export const testing_testingAdditionalFTECountDistribution_E95=(props,userInputData)=>{
    //E96
    userInputData['testing']['totalTestFTEInSolutionCountDistribution']['complex'] =
            parseFloat((Number(userInputData['testing']['testingAdditionalFTECountDistribution']['complex']) +
                Number(userInputData['testing']['testingFTECountDistribution']['complex'])).toFixed(2));
    }
    export const testing_testingFTECountDistribution_E94 = (props, userInputData) => {
        //E96
        userInputData['testing']['totalTestFTEInSolutionCountDistribution']['complex'] =
            parseFloat((Number(userInputData['testing']['testingAdditionalFTECountDistribution']['complex']) +
                Number(userInputData['testing']['testingFTECountDistribution']['complex'])).toFixed(2));
    }
export const testing_testingFTECountDistribution_F94 = (props, userInputData) => {

    //C94
    userInputData['testing']['testingFTECountDistribution']['simple'] =
        parseFloat(((Number(userInputData['testing']['testingFTEDistributionPercentage']['simple'])) *
        ( Number(userInputData['testing']['testingFTECountDistribution']['total'] ))/ 100).toFixed(2));
    testing_testingFTECountDistribution_C94(props, userInputData)
    //D94
    userInputData['testing']['testingFTECountDistribution']['medium'] =
    parseFloat(((Number(userInputData['testing']['testingFTEDistributionPercentage']['medium'])) *
    ( Number(userInputData['testing']['testingFTECountDistribution']['total'] ))/ 100).toFixed(2));
    testing_testingFTECountDistribution_D94(props, userInputData)
    //E94
    userInputData['testing']['testingFTECountDistribution']['complex'] =
    parseFloat(((Number(userInputData['testing']['testingFTEDistributionPercentage']['complex'])) *
    ( Number(userInputData['testing']['testingFTECountDistribution']['total'] ))/ 100).toFixed(2));
    testing_testingFTECountDistribution_E94(props, userInputData)
    //F96
    userInputData['testing']['totalTestFTEInSolutionCountDistribution']['total'] =
        ((Number(userInputData['testing']['testingAdditionalFTECountDistribution']['total']) +
          (Number(userInputData['testing']['testingFTECountDistribution']['total']))).toFixed(2));

}
export const testing_testingAdditionalFTECountDistribution_F95=(props,userInputData)=>{
    //C95
    userInputData['testing']['testingAdditionalFTECountDistribution']['simple']=parseFloat(
   ( (Number(userInputData['testing']['testingFTEDistributionPercentage']['simple'])* 
    (Number(  userInputData['testing']['testingAdditionalFTECountDistribution']['total'])))/100).toFixed(2))
    testing_testingAdditionalFTECountDistribution_C95(props,userInputData)
    //D95
    userInputData['testing']['testingAdditionalFTECountDistribution']['medium']=parseFloat(
        ( (Number(userInputData['testing']['testingFTEDistributionPercentage']['medium'])* 
         (Number(  userInputData['testing']['testingAdditionalFTECountDistribution']['total'])))/100).toFixed(2))
    testing_testingAdditionalFTECountDistribution_D95(props,userInputData)
    //E95
    userInputData['testing']['testingAdditionalFTECountDistribution']['complex']=parseFloat(
        ((Number(userInputData['testing']['testingFTEDistributionPercentage']['complex'])* 
         (Number(  userInputData['testing']['testingAdditionalFTECountDistribution']['total'])))/100).toFixed(2));
    testing_testingAdditionalFTECountDistribution_E95(props,userInputData)
    //F96
    userInputData['testing']['totalTestFTEInSolutionCountDistribution']['total']=(
        (Number(userInputData['testing']['testingFTECountDistribution']['total'] +
    (Number(userInputData['testing']['testingAdditionalFTECountDistribution']['total'])))).toFixed(2))
}

export const testing_testingFTEDistributionPercentage_C93=(props,userInputData)=>{
    //F93
    userInputData['testing']['testingFTEDistributionPercentage']['total']=((Number(userInputData['testing']['testingFTEDistributionPercentage']['simple']+
   (Number( userInputData['testing']['testingFTEDistributionPercentage']['medium']+(Number(userInputData['testing']['testingFTEDistributionPercentage']['complex'])))))).toFixed(2))
    //C94
    userInputData['testing']['testingFTECountDistribution']['simple'] =
    parseFloat(((Number(userInputData['testing']['testingFTEDistributionPercentage']['simple'])) *
    ( Number(userInputData['testing']['testingFTECountDistribution']['total'] ))/ 100).toFixed(2));
    testing_testingFTECountDistribution_C94(props,userInputData);
    //C95
    userInputData['testing']['testingAdditionalFTECountDistribution']['simple']=parseFloat(
        ( (Number(userInputData['testing']['testingFTEDistributionPercentage']['simple'])* 
         (Number(  userInputData['testing']['testingAdditionalFTECountDistribution']['total'])))/100).toFixed(2))
   testing_testingAdditionalFTECountDistribution_C95(props,userInputData)    
}

export const testing_testingFTEDistributionPercentage_D93=(props,userInputData)=>{
    //F93
    userInputData['testing']['testingFTEDistributionPercentage']['total']=((Number(userInputData['testing']['testingFTEDistributionPercentage']['simple']+
    (Number( userInputData['testing']['testingFTEDistributionPercentage']['medium']+(Number(userInputData['testing']['testingFTEDistributionPercentage']['complex'])))))).toFixed(2))
    //D94
    userInputData['testing']['testingFTECountDistribution']['medium'] =
    parseFloat(((Number(userInputData['testing']['testingFTEDistributionPercentage']['medium'])) *
    ( Number(userInputData['testing']['testingFTECountDistribution']['total'] ))/ 100).toFixed(2));
    testing_testingFTECountDistribution_D94(props,userInputData)
    //D95
    userInputData['testing']['testingAdditionalFTECountDistribution']['medium']=parseFloat(
        ( (Number(userInputData['testing']['testingFTEDistributionPercentage']['medium'])* 
         (Number(  userInputData['testing']['testingAdditionalFTECountDistribution']['total'])))/100).toFixed(2))
    testing_testingAdditionalFTECountDistribution_D95(props,userInputData)
}

export const testing_testingFTEDistributionPercentage_E93 = (props, userInputData) => {
    //F93
    userInputData['testing']['testingFTEDistributionPercentage']['total']=((Number(userInputData['testing']['testingFTEDistributionPercentage']['simple'] +
    (Number(userInputData['testing']['testingFTEDistributionPercentage']['medium'] +(Number( userInputData['testing']['testingFTEDistributionPercentage']['complex'])))))).toFixed(2))
    //E94
    userInputData['testing']['testingFTECountDistribution']['complex'] =
    parseFloat(((Number(userInputData['testing']['testingFTEDistributionPercentage']['complex'])) *
    ( Number(userInputData['testing']['testingFTECountDistribution']['total'] ))/ 100).toFixed(2));
    testing_testingFTECountDistribution_E94(props,userInputData)
    //E95
    userInputData['testing']['testingAdditionalFTECountDistribution']['complex']=parseFloat(
        ((Number(userInputData['testing']['testingFTEDistributionPercentage']['complex'])* 
         (Number(  userInputData['testing']['testingAdditionalFTECountDistribution']['total'])))/100).toFixed(2));
    testing_testingAdditionalFTECountDistribution_E95(props,userInputData)
}
