
export const security_appCountSecurityScopeBasedDistribution_F99 = (props, userInputData) => {
  //adding appSecurityScopeDistributionPercentage (security) f98
  userInputData['security']['appSecurityScopeDistributionPercentage']['total'] = (
    ((Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['total'])
      / (Number(userInputData['basicInfo']['numberOfAppsInScope']))) * 100).toFixed(2));
  if (isNaN(userInputData['security']['appSecurityScopeDistributionPercentage']['total'])) {
    userInputData['security']['appSecurityScopeDistributionPercentage']['total'] = 0;
  }

}
export const security_appCountSecurityScopeBasedDistribution_C99 = (props, userInputData) => {
  //adding notOnCloudAppCountDistribution (security) f99
  userInputData['security']['appCountSecurityScopeBasedDistribution']['total'] = (
    (Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])
      + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])
      + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex'])).toFixed(0))
  //calling F99
  security_appCountSecurityScopeBasedDistribution_F99(props, userInputData);

  //adding remediationTicketsDistributionPercentage (security) f101
  userInputData['security']['remediationTicketsDistributionPercentage']['total'] = (
    (((Number(userInputData['security']['remediationTicketsDistributionPercentage']['simple'])
      * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])) +
      (Number(userInputData['security']['remediationTicketsDistributionPercentage']['medium'])
        * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])) +
      (Number(userInputData['security']['remediationTicketsDistributionPercentage']['complex'])
        * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex'])))
      /
      (Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])
        + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])
        + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex']))
    ).toFixed(2));
  if (isNaN(userInputData['security']['remediationTicketsDistributionPercentage']['total'])) {
    userInputData['security']['remediationTicketsDistributionPercentage']['total'] = '0';
  }
}
export const security_appCountSecurityScopeBasedDistribution_D99 = (props, userInputData) => {
  //adding notOnCloudAppCountDistribution (security) f99
  userInputData['security']['appCountSecurityScopeBasedDistribution']['total'] = (
    (Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])
      + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])
      + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex'])).toFixed(0));
  //calling f99
  security_appCountSecurityScopeBasedDistribution_F99(props, userInputData)

  //adding remediationTicketsDistributionPercentage (security) f101
  userInputData['security']['remediationTicketsDistributionPercentage']['total'] = (
    (((Number(userInputData['security']['remediationTicketsDistributionPercentage']['simple'])
      * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])) +
      (Number(userInputData['security']['remediationTicketsDistributionPercentage']['medium'])
        * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])) +
      (Number(userInputData['security']['remediationTicketsDistributionPercentage']['complex'])
        * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex'])))
      /
      (Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])
        + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])
        + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex']))
    ).toFixed(2));
  if (isNaN(userInputData['security']['remediationTicketsDistributionPercentage']['total'])) {
    userInputData['security']['remediationTicketsDistributionPercentage']['total'] = '0';
  }
}
export const security_appCountSecurityScopeBasedDistribution_E99 = (props, userInputData) => {
  //adding notOnCloudAppCountDistribution (security) f99
  userInputData['security']['appCountSecurityScopeBasedDistribution']['total'] = ((
    Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple']) +
    Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium']) +
    Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex'])).toFixed(0));
  //calling f99
  security_appCountSecurityScopeBasedDistribution_F99(props, userInputData)

  //adding remediationTicketsDistributionPercentage (security) f101
  userInputData['security']['remediationTicketsDistributionPercentage']['total'] = (
    (((Number(userInputData['security']['remediationTicketsDistributionPercentage']['simple'])
      * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])) +
      (Number(userInputData['security']['remediationTicketsDistributionPercentage']['medium'])
        * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])) +
      (Number(userInputData['security']['remediationTicketsDistributionPercentage']['complex'])
        * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex'])))
      /
      (Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])
        + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])
        + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex']))
    ).toFixed(2));
  if (isNaN(userInputData['security']['remediationTicketsDistributionPercentage']['total'])) {
    userInputData['security']['remediationTicketsDistributionPercentage']['total'] = '0';
  }
}

export const security_remediationFTEDistribution_F103 = (props, userInputData) => {

  //adding remediationTicketsCountDistribution (general) F102
  userInputData['security']['remediationFTEDistribution']['total'] = (
    (Number(userInputData['security']['remediationFTEDistribution']['simple']) +
      Number(userInputData['security']['remediationFTEDistribution']['medium']) +
      (Number(userInputData['security']['remediationFTEDistribution']['complex']))).toFixed(2));

}

export const security_appSecurityScopeDistributionPercentage_C98 = (props, userInputData) => {
  // adding security_appCountSecurityScopeBasedDistribution (security) C99
  userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'] = Math.round(
    ((Number(userInputData['security']['appSecurityScopeDistributionPercentage']['simple'])) *
      (Number(userInputData['general']['appCountComplexityBasedDistribution']['simple'])
        / 100)).toFixed(2));
  //calling c99
  security_appCountSecurityScopeBasedDistribution_C99(props, userInputData);
}

export const security_appSecurityScopeDistributionPercentage_D98 = (props, userInputData) => {
  // adding security_appCountSecurityScopeBasedDistribution (security) D99
  userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'] = Math.round(
    ((Number(userInputData['security']['appSecurityScopeDistributionPercentage']['medium'])) *
      (Number(userInputData['general']['appCountComplexityBasedDistribution']['medium'])
        / 100)).toFixed(2));
  // calling D99
  security_appCountSecurityScopeBasedDistribution_D99(props, userInputData);
}

export const security_appSecurityScopeDistributionPercentage_E98 = (props, userInputData) => {
  // adding security_appCountSecurityScopeBasedDistribution (security) E99
  userInputData['security']['appCountSecurityScopeBasedDistribution']['complex'] = Math.round(
    ((Number(userInputData['security']['appSecurityScopeDistributionPercentage']['complex'])) *
      (Number(userInputData['general']['appCountComplexityBasedDistribution']['complex'])
        / 100)).toFixed(2));
  //calling e99
  security_appCountSecurityScopeBasedDistribution_E99(props, userInputData);
}


export const security_remediationTicketsCountDistribution_C102 = (props, userInputData) => {
 
  //adding remediationTicketsCountDistribution (general) F102
  userInputData['security']['remediationTicketsCountDistribution']['total'] = (
    (Number(userInputData['security']['remediationTicketsCountDistribution']['simple']) +
      Number(userInputData['security']['remediationTicketsCountDistribution']['medium']) +
      (Number(userInputData['security']['remediationTicketsCountDistribution']['complex']))).toFixed(0));

  //C103 AMS estimate
  //chekkk
  userInputData['security']['remediationFTEDistribution']['simple'] = parseFloat(
    (Number(userInputData['security']['remediationTicketsCountDistribution']['simple']) *
      Number(props['userCalculateTicketPercentage']['sumProductHoursPerTicket']['l_2']) /   
      (Number( userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']))).toFixed(2));

  if (isNaN(userInputData['security']['remediationFTEDistribution']['simple'])) {
    userInputData['security']['remediationFTEDistribution']['simple'] = 0;
  }
  security_remediationFTEDistribution_F103(props, userInputData)
}
export const security_remediationTicketsCountDistribution_D102 = (props, userInputData) => {

  //adding remediationTicketsCountDistribution (general) F102
  userInputData['security']['remediationTicketsCountDistribution']['total'] = (
    (Number(userInputData['security']['remediationTicketsCountDistribution']['simple']) +
      Number(userInputData['security']['remediationTicketsCountDistribution']['medium']) +
      (Number(userInputData['security']['remediationTicketsCountDistribution']['complex']))).toFixed(0));


  //D103 AMS estimate
  userInputData['security']['remediationFTEDistribution']['medium'] = parseFloat(
    (Number(userInputData['security']['remediationTicketsCountDistribution']['medium']) *
      Number(props['userCalculateTicketPercentage']['sumProductHoursPerTicket']['l_2']) /
      (Number( userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']))).toFixed(2));
  if (isNaN(userInputData['security']['remediationFTEDistribution']['medium'])) {
    userInputData['security']['remediationFTEDistribution']['medium'] = 0;
  }
  security_remediationFTEDistribution_F103(props, userInputData)
}
export const security_remediationTicketsCountDistribution_E102 = (props, userInputData) => {

  //adding remediationTicketsCountDistribution (general) F102
  userInputData['security']['remediationTicketsCountDistribution']['total'] = (
    (Number(userInputData['security']['remediationTicketsCountDistribution']['simple']) +
      Number(userInputData['security']['remediationTicketsCountDistribution']['medium']) +
      (Number(userInputData['security']['remediationTicketsCountDistribution']['complex']))).toFixed(0));
  //E102 AMS api
  //E103 AMS estimate
  userInputData['security']['remediationFTEDistribution']['complex'] = parseFloat(
    (Number(userInputData['security']['remediationTicketsCountDistribution']['complex']) *
      Number(props['userCalculateTicketPercentage']['sumProductHoursPerTicket']['l_2']) /
      (Number( userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']))).toFixed(2));

  if (isNaN(userInputData['security']['remediationFTEDistribution']['complex'])) {
    userInputData['security']['remediationFTEDistribution']['complex'] = 0;
  }
  security_remediationFTEDistribution_F103(props, userInputData)
}


export const security_remediationTicketsDistributionPercentage_C101 = (props, userInputData) => {

  userInputData['security']['remediationTicketsCountDistribution']['simple'] = parseFloat(
    (Number(userInputData['security']['remediationTicketsDistributionPercentage']['simple']) *
      (Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']) / 100)).toFixed(2));
  //calling c102
  security_remediationTicketsCountDistribution_C102(props, userInputData);

  //adding remediationTicketsDistributionPercentage (security) f101
  userInputData['security']['remediationTicketsDistributionPercentage']['total'] = (
    (((Number(userInputData['security']['remediationTicketsDistributionPercentage']['simple'])
      * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])) +
      (Number(userInputData['security']['remediationTicketsDistributionPercentage']['medium'])
        * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])) +
      (Number(userInputData['security']['remediationTicketsDistributionPercentage']['complex'])
        * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex'])))
      /
      (Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])
        + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])
        + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex']))
    ).toFixed(2));
  if (isNaN(userInputData['security']['remediationTicketsDistributionPercentage']['total'])) {
    userInputData['security']['remediationTicketsDistributionPercentage']['total'] = '0';
  }
}
export const security_remediationTicketsDistributionPercentage_D101 = (props, userInputData) => {

  userInputData['security']['remediationTicketsCountDistribution']['medium'] = parseFloat(
    (Number(userInputData['security']['remediationTicketsDistributionPercentage']['medium']) *
      (Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium'])) / 100).toFixed(2));
  //calling d102
  security_remediationTicketsCountDistribution_D102(props, userInputData);

  userInputData['security']['remediationTicketsDistributionPercentage']['total'] = (
    (((Number(userInputData['security']['remediationTicketsDistributionPercentage']['simple'])
      * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])) +
      (Number(userInputData['security']['remediationTicketsDistributionPercentage']['medium'])
        * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])) +
      (Number(userInputData['security']['remediationTicketsDistributionPercentage']['complex'])
        * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex'])))
      /
      (Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])
        + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])
        + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex']))
    ).toFixed(2));

  if (isNaN(userInputData['security']['remediationTicketsDistributionPercentage']['total'])) {
    userInputData['security']['remediationTicketsDistributionPercentage']['total'] = '0';
  }
}


export const security_remediationTicketsDistributionPercentage_E101 = (props, userInputData) => {

  userInputData['security']['remediationTicketsCountDistribution']['complex'] = parseFloat(
    (Number(userInputData['security']['remediationTicketsDistributionPercentage']['complex']) *
      (Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex'])) / 100).toFixed(2));
  //calling d102
  security_remediationTicketsCountDistribution_E102(props, userInputData);

  userInputData['security']['remediationTicketsDistributionPercentage']['total'] = (
    (((Number(userInputData['security']['remediationTicketsDistributionPercentage']['simple'])
      * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])) +
      (Number(userInputData['security']['remediationTicketsDistributionPercentage']['medium'])
        * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])) +
      (Number(userInputData['security']['remediationTicketsDistributionPercentage']['complex'])
        * Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex'])))
      /
      (Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'])
        + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'])
        + Number(userInputData['security']['appCountSecurityScopeBasedDistribution']['complex']))
    ).toFixed(2));

  if (isNaN(userInputData['security']['remediationTicketsDistributionPercentage']['total'])) {
    userInputData['security']['remediationTicketsDistributionPercentage']['total'] = '0';
  }
}
