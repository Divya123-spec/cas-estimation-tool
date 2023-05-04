
import {
  cloudAppos_notOnCloudAppCountDistribution_E73,
  cloudAppos_onCloudAppCountDistribution_E72,
  cloudAppos_notOnCloudAppCountDistribution_C73,
  cloudAppos__onCloudAppCountDistribution_C72,
  cloudAppos_onCloudAppCountDistribution_D72,
  cloudAppos_notOnCloudAppCountDistribution_D73
} from './FormulaComponent_CloudOpps'

import {
  security_appCountSecurityScopeBasedDistribution_E99,
  security_appCountSecurityScopeBasedDistribution_C99,
  security_appCountSecurityScopeBasedDistribution_D99,
  security_remediationTicketsCountDistribution_C102,
  security_remediationTicketsCountDistribution_D102,
  security_remediationTicketsCountDistribution_E102,
  security_appSecurityScopeDistributionPercentage_C98,
  security_appSecurityScopeDistributionPercentage_D98,
  security_appSecurityScopeDistributionPercentage_E98
} from './FormulaComponent_Security'

import {
  ams_annualNumberOfTickets_I8,
  ams_annualNumberOfTickets_J8,
  ams_annualNumberOfTickets_K8,
  ams_annualNumberOfTickets_L8,
  ams_annualNumberOfTickets_M8,
  ams_annualNumberOfTickets_N8,
  ams_annualNumberOfTickets_O8,
  ams_batchJobsTickets_I10,
  ams_inScopeL1DistributionPercentage_I13,
  ams_inScopeL2DistributionPercentage_I14,
  ams_inScopeL3DistributionPercentage_I15,
  ams_inScopeL4DistributionPercentage_I16,
  ams_inScopeMinorEnchDistributionPercentage_I17,
  ams_ticketDistribution_annualNumberOfTickets_retiring_F40
} from './FormulaComponent_AMS'
import { devscops_DevOpsOnAIOPS } from './formulaProductivity_devscops';

export const general_cotsThirdPartyAppCountDistribution_F34 = (props, userInputData) => {
  //adding cotsThirdPartyPercentageOfTotalApps (general) f33
  userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['total'] = (
    (Number(userInputData['general']['cotsThirdPartyAppCountDistribution']['total']) /
      Number(userInputData['basicInfo']['numberOfAppsInScope']) * 100).toFixed(2));

  if (isNaN(userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['total'])) {
    userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['total'] = 0;
  }
}
export const general_cotsThirdPartyAppCountDistribution_C34 = (props, userInputData) => {
  //adding cotsThirdPartyAppCountDistribution (general) f34
  userInputData['general']['cotsThirdPartyAppCountDistribution']['total'] = ((Number(userInputData['general']['cotsThirdPartyAppCountDistribution']['simple']) +
    Number(userInputData['general']['cotsThirdPartyAppCountDistribution']['medium']) +
    Number(userInputData['general']['cotsThirdPartyAppCountDistribution']['complex'])).toFixed(2));
  general_cotsThirdPartyAppCountDistribution_F34(props, userInputData)
}
export const general_cotsThirdPartyAppCountDistribution_D34 = (props, userInputData) => {
  //adding appCountComplexityBasedDistribution (general) f34
  userInputData['general']['cotsThirdPartyAppCountDistribution']['total'] = ((Number(userInputData['general']['cotsThirdPartyAppCountDistribution']['simple']) +
    Number(userInputData['general']['cotsThirdPartyAppCountDistribution']['medium']) +
    Number(userInputData['general']['cotsThirdPartyAppCountDistribution']['complex'])).toFixed(2));
  general_cotsThirdPartyAppCountDistribution_F34(props, userInputData)
}
export const general_cotsThirdPartyAppCountDistribution_E34 = (props, userInputData) => {
  //adding appCountComplexityBasedDistribution (general) f34
  userInputData['general']['cotsThirdPartyAppCountDistribution']['total'] = ((Number(userInputData['general']['cotsThirdPartyAppCountDistribution']['simple'])
    + Number(userInputData['general']['cotsThirdPartyAppCountDistribution']['medium']) +
    Number(userInputData['general']['cotsThirdPartyAppCountDistribution']['complex'])).toFixed(2));
  general_cotsThirdPartyAppCountDistribution_F34(props, userInputData)
}
export const general_criticalAppCountDistribution_F37 = (props, userInputData) => {
  //adding criticalAppCountDistribution (general) f36
  userInputData['general']['criticalAppPercentageOfTotalApps']['total'] = (((Number(userInputData['general']['criticalAppCountDistribution']['total']) /
    (Number(userInputData['basicInfo']['numberOfAppsInScope']))) * 100).toFixed(2));
}

export const general_criticalAppCountDistribution_C37 = (props, userInputData) => {
  //adding criticalAppCountDistribution (general) f37
  userInputData['general']['criticalAppCountDistribution']['total'] = ((Number(userInputData['general']['criticalAppCountDistribution']['simple']) +
    Number(userInputData['general']['criticalAppCountDistribution']['medium']) +
    Number(userInputData['general']['criticalAppCountDistribution']['complex'])).toFixed(2));
  general_criticalAppCountDistribution_F37(props, userInputData)
}
export const general_criticalAppCountDistribution_D37 = (props, userInputData) => {
  //adding criticalAppCountDistribution (general) f37
  userInputData['general']['criticalAppCountDistribution']['total'] = ((Number(userInputData['general']['criticalAppCountDistribution']['simple']) +
    Number(userInputData['general']['criticalAppCountDistribution']['medium']) +
    Number(userInputData['general']['criticalAppCountDistribution']['complex'])).toFixed(2));
  general_criticalAppCountDistribution_F37(props, userInputData)
}

export const general_criticalAppCountDistribution_E37 = (props, userInputData) => {
  //adding criticalAppCountDistribution (general) f37
  userInputData['general']['criticalAppCountDistribution']['total'] = ((Number(userInputData['general']['criticalAppCountDistribution']['simple']) +
    Number(userInputData['general']['criticalAppCountDistribution']['medium']) +
    Number(userInputData['general']['criticalAppCountDistribution']['complex'])).toFixed(2));
  general_criticalAppCountDistribution_F37(props, userInputData)
}
export const general_l1DistributionPercentage_F47 = (props, userInputData) => {

  // ams I13 API

  //adding inScopeL1DistributionPercentage y2 (ams) I10
  userInputData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y1'] = parseFloat(
    (Number(userInputData['general']['l1DistributionPercentage']['total'])).toFixed(2)
  );
  ams_inScopeL1DistributionPercentage_I13(props, userInputData)

}
export const general_l1TicketsCountDistribution_F48 = (props, userInputData) => {

  //adding l1DistributionPercentage (general) F47
  userInputData['general']['l1DistributionPercentage']['total'] = ((
    (Number(userInputData['general']['l1TicketsCountDistribution']['total'])) /
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['total'])) * 100).toFixed(2));

  if (isNaN(userInputData['general']['l1DistributionPercentage']['total'])) {
    userInputData['general']['l1DistributionPercentage']['total'] = 0;
  }
  general_l1DistributionPercentage_F47(props, userInputData)
}
export const general_l1TicketsCountDistribution_C48 = (props, userInputData) => {

  //adding l1TicketsCountDistribution (general) F48
  userInputData['general']['l1TicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['l1TicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['l1TicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['l1TicketsCountDistribution']['complex']))).toFixed(2));

  general_l1TicketsCountDistribution_F48(props, userInputData)
}
export const general_l1TicketsCountDistribution_D48 = (props, userInputData) => {

  //adding l1TicketsCountDistribution (general) F48
  userInputData['general']['l1TicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['l1TicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['l1TicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['l1TicketsCountDistribution']['complex']))).toFixed(2));
  general_l1TicketsCountDistribution_F48(props, userInputData)

}
export const general_l1TicketsCountDistribution_E48 = (props, userInputData) => {

  //adding l1TicketsCountDistribution (general) F48
  userInputData['general']['l1TicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['l1TicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['l1TicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['l1TicketsCountDistribution']['complex']))).toFixed(2));

  general_l1TicketsCountDistribution_F48(props, userInputData)
}
export const general_l2DistributionPercentage_F50 = (props, userInputData) => {

  // ams I14 API
  //adding inScopeL2DistributionPercentage y2 (ams) I14
  userInputData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y1'] =
    parseFloat((Number(userInputData['general']['l2DistributionPercentage']['total'])).toFixed(2));

  ams_inScopeL2DistributionPercentage_I14(props, userInputData)
}

export const general_l3DistributionPercentage_F53 = (props, userInputData) => {

  // ams I15 API

  //adding inScopeL3DistributionPercentage y2 (ams) I15
  userInputData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y1'] =
    parseFloat((Number(userInputData['general']['l3DistributionPercentage']['total'])).toFixed(2));

  ams_inScopeL3DistributionPercentage_I15(props, userInputData)
}

export const general_l4DistributionPercentage_F56 = (props, userInputData) => {


  // ams I16 API

  //adding inScopeL4DistributionPercentage y2 (ams) I16
  userInputData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y1'] =
    parseFloat((Number(userInputData['general']['l4DistributionPercentage']['total'])).toFixed(2));

  ams_inScopeL4DistributionPercentage_I16(props, userInputData)
}

export const general_minorEnhDistributionPercentage_F59 = (props, userInputData) => {

  // ams I17 API

  //adding inScopeMinorEnchDistributionPercentage y2 (ams) 
  userInputData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y1'] =
    parseFloat((Number(userInputData['general']['minorEnhDistributionPercentage']['total'])).toFixed(2));

  ams_inScopeMinorEnchDistributionPercentage_I17(props, userInputData)
}
export const general_monthlyTotalTicketsAssumed_F40 = (props, userInputData) => {
  //adding ticketDistributionPercentage (general) C42
  userInputData['general']['ticketDistributionPercentage']['simple'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']) /
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) * 100).toFixed(2));

  if (isNaN(userInputData['general']['ticketDistributionPercentage']['simple'])) {
    userInputData['general']['ticketDistributionPercentage']['simple'] = 0;
  }
  //adding ticketDistributionPercentage (general) D42
  userInputData['general']['ticketDistributionPercentage']['medium'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']) /
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) * 100).toFixed(2));


  if (isNaN(userInputData['general']['ticketDistributionPercentage']['medium'])) {
    userInputData['general']['ticketDistributionPercentage']['medium'] = 0;
  }
  //adding ticketDistributionPercentage (general) E42
  userInputData['general']['ticketDistributionPercentage']['complex'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']) /
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) * 100).toFixed(2));


  if (isNaN(userInputData['general']['ticketDistributionPercentage']['complex'])) {
    userInputData['general']['ticketDistributionPercentage']['complex'] = 0;
  }
  //adding monthlyTotalandBatchJobsTickets (general) F45
  userInputData['general']['monthlyTotalandBatchJobsTickets']['total'] = ((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) +
    Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['total']))
    .toFixed(2));


  //adding l1DistributionPercentage (general) F47
  userInputData['general']['l1DistributionPercentage']['total'] = ((
    Number(userInputData['general']['l1TicketsCountDistribution']['total']) /
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) * 100)
    .toFixed(2));
  general_l1DistributionPercentage_F47(props, userInputData)

  //adding l2DistributionPercentage (general) F50
  userInputData['general']['l2DistributionPercentage']['total'] = ((
    Number(userInputData['general']['l2TicketsCountDistribution']['total']) /
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) * 100)
    .toFixed(2));
  general_l2DistributionPercentage_F50(props, userInputData)

  //adding ticketDistributionPercentage (general) F53
  userInputData['general']['l3DistributionPercentage']['total'] = ((
    Number(userInputData['general']['l3TicketsCountDistribution']['total']) /
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) * 100)
    .toFixed(2));

  if (isNaN(userInputData['general']['l3DistributionPercentage']['total'])) {
    userInputData['general']['l3DistributionPercentage']['total'] = 0;
  }
  general_l3DistributionPercentage_F53(props, userInputData)
  //adding l4DistributionPercentage (general) F56
  userInputData['general']['l4DistributionPercentage']['total'] = ((
    Number(userInputData['general']['l4TicketsCountDistribution']['total']) /
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) * 100)
    .toFixed(2));
  if (isNaN(userInputData['general']['l4DistributionPercentage']['total'])) {
    userInputData['general']['l4DistributionPercentage']['total'] = 0;
  }
  general_l4DistributionPercentage_F56(props, userInputData)

  //adding minorEnhDistributionPercentage (general) F59
  userInputData['general']['minorEnhDistributionPercentage']['total'] = ((
    Number(userInputData['general']['minorEnhTicketsCountDistribution']['total']) /
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) * 100)
    .toFixed(2));
  general_minorEnhDistributionPercentage_F59(props, userInputData)



  //JIRA 1137 retiring Application
  ams_ticketDistribution_annualNumberOfTickets_retiring_F40(props, userInputData)

  // //adding annualNumberOfTicketsy1 (ams) I8
  // userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y1'] =
  //   parseFloat((Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) *
  //     (12)).toFixed(2));
  // ams_annualNumberOfTickets_I8(props, userInputData)

  // //adding annualNumberOfTicketsy2 (ams) J8
  // userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y2'] =
  //   parseFloat((Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) *
  //     (12)).toFixed(2));

  // ams_annualNumberOfTickets_J8(props, userInputData)

  // //adding annualNumberOfTicketsy3 (ams) K8
  // userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y3'] =
  //   parseFloat((Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) *
  //     (12)).toFixed(2));
  // ams_annualNumberOfTickets_K8(props, userInputData)
  // //adding annualNumberOfTicketsy4 (ams) L8
  // userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y4'] =
  //   parseFloat((Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) *
  //     (12)).toFixed(2));
  // ams_annualNumberOfTickets_L8(props, userInputData)
  // //adding annualNumberOfTicketsy5 (ams) M8
  // userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y5'] =
  //   parseFloat((Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) *
  //     (12)).toFixed(2));

  // ams_annualNumberOfTickets_M8(props, userInputData);

  // //adding annualNumberOfTicketsy6 (ams) N8
  // userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y6'] =
  //   parseFloat((Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) *
  //     (12)).toFixed(2));

  // ams_annualNumberOfTickets_N8(props, userInputData);

  // //adding annualNumberOfTicketsy7 (ams) O8
  // userInputData['ams']['ticketsDistribution']['annualNumberOfTickets']['y7'] =
  //   parseFloat((Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) *
  //     (12)).toFixed(2));

  // ams_annualNumberOfTickets_O8(props, userInputData);





}

export const general_l2TicketsCountDistribution_F51 = (props, userInputData) => {

  //adding l1DistributionPercentage (general) F50
  userInputData['general']['l2DistributionPercentage']['total'] = ((
    ((Number(userInputData['general']['l2TicketsCountDistribution']['total'])) /
      (Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']))) * 100).toFixed(2));
  if (isNaN(userInputData['general']['l2DistributionPercentage']['total'])) {
    userInputData['general']['l2DistributionPercentage']['total'] = 0;
  }
  general_l2DistributionPercentage_F50(props, userInputData);

}

export const general_l2TicketsCountDistribution_C51 = (props, userInputData) => {

  //adding l2TicketsCountDistribution (general) F51

  userInputData['general']['l2TicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['l2TicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['l2TicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['l2TicketsCountDistribution']['complex']))).toFixed(2));
  general_l2TicketsCountDistribution_F51(props, userInputData)
}

export const general_l2TicketsCountDistribution_D51 = (props, userInputData) => {

  //adding l2TicketsCountDistribution (general) F51
  userInputData['general']['l2TicketsCountDistribution']['total'] =
    ((Number(userInputData['general']['l2TicketsCountDistribution']['simple']) +
      Number(userInputData['general']['l2TicketsCountDistribution']['medium']) +
      (Number(userInputData['general']['l2TicketsCountDistribution']['complex']))).toFixed(2));

  general_l2TicketsCountDistribution_F51(props, userInputData)
}

export const general_l2TicketsCountDistribution_E51 = (props, userInputData) => {
  //adding l2TicketsCountDistribution (general) F51
  userInputData['general']['l2TicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['l2TicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['l2TicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['l2TicketsCountDistribution']['complex']))).toFixed(2));
  general_l2TicketsCountDistribution_F51(props, userInputData)

}

export const general_l3TicketsCountDistribution_F54 = (props, userInputData) => {

  //adding l1DistributionPercentage (general) F53
  userInputData['general']['l3DistributionPercentage']['total'] = ((
    (Number(userInputData['general']['l3TicketsCountDistribution']['total'])) /
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['total'])) * 100).toFixed(2));


  if (isNaN(userInputData['general']['l3DistributionPercentage']['total'])) {
    userInputData['general']['l3DistributionPercentage']['total'] = 0;
  }
  general_l3DistributionPercentage_F53(props, userInputData)

}
export const general_l3TicketsCountDistribution_C54 = (props, userInputData) => {
  //adding l3TicketsCountDistribution (general) F54

  userInputData['general']['l3TicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['l3TicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['l3TicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['l3TicketsCountDistribution']['complex']))).toFixed(2));
  general_l3TicketsCountDistribution_F54(props, userInputData)
}
export const general_l3TicketsCountDistribution_D54 = (props, userInputData) => {
  //adding l3TicketsCountDistribution (general) F54
  userInputData['general']['l3TicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['l3TicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['l3TicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['l3TicketsCountDistribution']['complex']))).toFixed(2));
  general_l3TicketsCountDistribution_F54(props, userInputData)
}
export const general_l3TicketsCountDistribution_E54 = (props, userInputData) => {
  //adding l3TicketsCountDistribution (general) F54
  userInputData['general']['l3TicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['l3TicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['l3TicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['l3TicketsCountDistribution']['complex']))).toFixed(2));
  general_l3TicketsCountDistribution_F54(props, userInputData)
}
export const general_l4TicketsCountDistribution_F57 = (props, userInputData) => {

  //adding l1DistributionPercentage (general) F56

  userInputData['general']['l4DistributionPercentage']['total'] = ((
    (Number(userInputData['general']['l4TicketsCountDistribution']['total'])) /
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['total'])) * 100).toFixed(2));
  if (isNaN(userInputData['general']['l4DistributionPercentage']['total'])) {
    userInputData['general']['l4DistributionPercentage']['total'] = 0;
  }
  general_l4DistributionPercentage_F56(props, userInputData)

}
export const general_l4TicketsCountDistribution_C57 = (props, userInputData) => {
  //adding l4TicketsCountDistribution (general) F57
  userInputData['general']['l4TicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['l4TicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['l4TicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['l4TicketsCountDistribution']['complex']))).toFixed(2));
  general_l4TicketsCountDistribution_F57(props, userInputData)
}
export const general_l4TicketsCountDistribution_D57 = (props, userInputData) => {
  //adding l4TicketsCountDistribution (general) F57
  userInputData['general']['l4TicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['l4TicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['l4TicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['l4TicketsCountDistribution']['complex']))).toFixed(2));
  general_l4TicketsCountDistribution_F57(props, userInputData)
}
export const general_l4TicketsCountDistribution_E57 = (props, userInputData) => {
  //adding l4TicketsCountDistribution (general) F57
  userInputData['general']['l4TicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['l4TicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['l4TicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['l4TicketsCountDistribution']['complex']))).toFixed(2));
  general_l4TicketsCountDistribution_F57(props, userInputData)
}


export const general_minorEnhTicketsCountDistribution_F60 = (props, userInputData) => {
  //adding minorEnhDistributionPercentage (general) F59
  userInputData['general']['minorEnhDistributionPercentage']['total'] = ((
    (Number(userInputData['general']['minorEnhTicketsCountDistribution']['total'])) /
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['total'])) * 100).toFixed(2));

  if (isNaN(userInputData['general']['minorEnhDistributionPercentage']['total'])) {
    userInputData['general']['minorEnhDistributionPercentage']['total'] = 0;
  }
  general_minorEnhDistributionPercentage_F59(props, userInputData)
}

export const general_minorEnhCapacityOfHoursDistribution_F61 = (props, userInputData) => {
  //adding minorEnhTicketsCountDistribution (general) F60
  userInputData['general']['minorEnhCapacityOfHoursDistribution']['total'] =
    ((Number(userInputData['general']['minorEnhCapacityOfHoursDistribution']['simple']) +
      Number(userInputData['general']['minorEnhCapacityOfHoursDistribution']['medium']) +
      (Number(userInputData['general']['minorEnhCapacityOfHoursDistribution']['complex']))).toFixed(2));
}
export const general_minorEnhTicketsCountDistribution_D60 = (props, userInputData) => {
  //adding minorEnhTicketsCountDistribution (general) F57
  userInputData['general']['minorEnhTicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['minorEnhTicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['minorEnhTicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['minorEnhTicketsCountDistribution']['complex']))).toFixed(0));
  general_minorEnhTicketsCountDistribution_F60(props, userInputData)
  // D61 (AMS API CALL)
  //D61
  userInputData['general']['minorEnhCapacityOfHoursDistribution']['medium'] =
    parseFloat((Number(userInputData['general']['minorEnhTicketsCountDistribution']['medium']) *
      (Number(props['userYearOneBaselineTestingFTEs']['baselineWtHoursForMinorEnhancements']['cloudAppsBaselineWtHours']))).toFixed(2));
  general_minorEnhCapacityOfHoursDistribution_F61(props, userInputData)
}

export const general_minorEnhTicketsCountDistribution_C60 = (props, userInputData) => {
  //adding minorEnhTicketsCountDistribution (general) F60
  userInputData['general']['minorEnhTicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['minorEnhTicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['minorEnhTicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['minorEnhTicketsCountDistribution']['complex']))).toFixed(0));
  general_minorEnhTicketsCountDistribution_F60(props, userInputData);

  // C61 (AMS API CALL)
  //C61
  userInputData['general']['minorEnhCapacityOfHoursDistribution']['simple'] =
    parseFloat((Number(userInputData['general']['minorEnhTicketsCountDistribution']['simple']) *
      (Number(props['userYearOneBaselineTestingFTEs']['baselineWtHoursForMinorEnhancements']['cloudAppsBaselineWtHours']))).toFixed(2));
  general_minorEnhCapacityOfHoursDistribution_F61(props, userInputData)
}
export const general_minorEnhTicketsCountDistribution_E60 = (props, userInputData) => {
  //adding minorEnhTicketsCountDistribution (general) F60
  userInputData['general']['minorEnhTicketsCountDistribution']['total'] = (
    ((Number(userInputData['general']['minorEnhTicketsCountDistribution']['simple'])) +
      (Number(userInputData['general']['minorEnhTicketsCountDistribution']['medium'])) +
      (Number(userInputData['general']['minorEnhTicketsCountDistribution']['complex']))).toFixed(2));
  general_minorEnhTicketsCountDistribution_F60(props, userInputData)
  // E61 (AMS API CALL)
  //E61
  userInputData['general']['minorEnhCapacityOfHoursDistribution']['complex'] =
    parseFloat((Number(userInputData['general']['minorEnhTicketsCountDistribution']['complex']) *
      (Number(props['userYearOneBaselineTestingFTEs']['baselineWtHoursForMinorEnhancements']['cloudAppsBaselineWtHours']))).toFixed(2));
  general_minorEnhCapacityOfHoursDistribution_F61(props, userInputData)
}

export const general_minorEnhDistributionPercentage_E59 = (props, userInputData) => {
  //minorEnhTicketsCountDistribution(simple)E60
  userInputData['general']['minorEnhTicketsCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']))
      * (Number(userInputData['general']['minorEnhDistributionPercentage']['complex']) / 100)).toFixed(2));
  general_minorEnhTicketsCountDistribution_E60(props, userInputData)

}
export const general_minorEnhDistributionPercentage_D59 = (props, userInputData) => {

  //minorEnhTicketsCountDistribution(simple)D60
  userInputData['general']['minorEnhTicketsCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']))
      * (Number(userInputData['general']['minorEnhDistributionPercentage']['medium']) / 100)).toFixed(2));
  general_minorEnhTicketsCountDistribution_D60(props, userInputData)

  //minorEnhDistributionPercentage E59
  userInputData['general']['minorEnhDistributionPercentage']['complex'] = parseFloat(
    (Number(userInputData['general']['minorEnhDistributionPercentage']['medium'])).toFixed(2)
  )
  general_minorEnhDistributionPercentage_E59(props, userInputData)
}
export const general_minorEnhDistributionPercentage_C59 = (props, userInputData) => {
  //api call to change C59 own value

  //minorEnhTicketsCountDistribution(simple)C60


  userInputData['general']['minorEnhTicketsCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']))
      * (Number(userInputData['general']['minorEnhDistributionPercentage']['simple']) / 100)).toFixed(2));

  general_minorEnhTicketsCountDistribution_C60(props, userInputData)

  //minorEnhDistributionPercentage D59
  userInputData['general']['minorEnhDistributionPercentage']['medium'] = parseFloat(
    (Number(userInputData['general']['minorEnhDistributionPercentage']['simple'])).toFixed(2)
  );
  general_minorEnhDistributionPercentage_D59(props, userInputData);

}


export const general_l1DistributionPercentage_F44 = (props, userInputData) => {
  // ams I10 API
  //adding monthlyTotalandBatchJobsTickets (general) F45
  userInputData['general']['monthlyTotalandBatchJobsTickets']['total'] = ((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) +
    Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['total']))
    .toFixed(2));

  //adding batchJobsTickets y2 (ams) I10
  userInputData['ams']['ticketsDistribution']['batchJobsTickets']['y1'] =
    parseFloat((Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['total'])).toFixed(2));
  ams_batchJobsTickets_I10(props, userInputData)
}

export const general_approxNumberOfBatchJobsTicketsToSupport_C44 = (props, userInputData) => {


  //adding approxNumberOfBatchJobsTicketsToSupport (general) F44
  userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['total'] = (
    (Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['simple']) +
      Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['medium']) +
      (Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['complex']))).toFixed(2));
  general_l1DistributionPercentage_F44(props, userInputData)


  //adding monthlyTotalandBatchJobsTickets (general) C45
  userInputData['general']['monthlyTotalandBatchJobsTickets']['simple'] = parseFloat(
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']) +
      (Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['simple']))).toFixed(2))


}
export const general_approxNumberOfBatchJobsTicketsToSupport_D44 = (props, userInputData) => {

  //adding approxNumberOfBatchJobsTicketsToSupport (general) F44
  userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['total'] =
    ((Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['simple']) +
      Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['medium']) +
      (Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['complex']))).toFixed(2));
  general_l1DistributionPercentage_F44(props, userInputData)

  //adding monthlyTotalandBatchJobsTickets (general) D45
  userInputData['general']['monthlyTotalandBatchJobsTickets']['medium'] = parseFloat(
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']) +
      (Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['medium']))).toFixed(2));

}
export const general_approxNumberOfBatchJobsTicketsToSupport_E44 = (props, userInputData) => {

  //adding approxNumberOfBatchJobsTicketsToSupport (general) F44
  userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['total'] =
    ((Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['simple']) +
      Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['medium']) +
      (Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['complex']))).toFixed(2))
  general_l1DistributionPercentage_F44(props, userInputData)

  //adding monthlyTotalandBatchJobsTickets (general) E45
  userInputData['general']['monthlyTotalandBatchJobsTickets']['complex'] =
    parseFloat((Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']) +
      (Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['complex']))).toFixed(2))


}
export const general_monthlyL1TicketsAssumed_C41 = (props, userInputData) => {

  //adding monthlyL1TicketsAssumed (general) F41
  userInputData['general']['monthlyL1TicketsAssumed']['total'] = (
    (Number(userInputData['general']['monthlyL1TicketsAssumed']['simple']) +
      Number(userInputData['general']['monthlyL1TicketsAssumed']['medium']) +
      (Number(userInputData['general']['monthlyL1TicketsAssumed']['complex']))).toFixed(2));

}

export const general_monthlyTotalTicketsAssumed_C40 = (props, userInputData) => {
  //adding monthlyTotalTicketsAssumed (general) F40
  userInputData['general']['monthlyTotalTicketsAssumed']['total'] = (
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']) +
      Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']) +
      Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex'])).toFixed(2));
  general_monthlyTotalTicketsAssumed_F40(props, userInputData)

  //adding monthlyL1TicketsAssumed (general) C41
  userInputData['general']['monthlyL1TicketsAssumed']['simple'] = parseFloat(
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']) +
      (Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']) * 1.3)).toFixed(2));
  general_monthlyL1TicketsAssumed_C41(props, userInputData)

  //adding ticketDistributionPercentage (general) C42
  userInputData['general']['ticketDistributionPercentage']['simple'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']) /
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) * 100).toFixed(2));

  if (isNaN(userInputData['general']['ticketDistributionPercentage']['simple'])) {
    userInputData['general']['ticketDistributionPercentage']['simple'] = 0;
  }

  //adding approxNumberOfBatchJobsTicketsToSupport (general) C44
  userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['simple'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']) *
    Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['simple']) / 100).toFixed(2));
  general_approxNumberOfBatchJobsTicketsToSupport_C44(props, userInputData)

  //adding monthlyTotalandBatchJobsTickets (general) C45
  userInputData['general']['monthlyTotalandBatchJobsTickets']['simple'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']) +
    Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['simple']) / 100).toFixed(2));

  //adding l1TicketsCountDistribution (general) C48
  userInputData['general']['l1TicketsCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']))
      * (Number(userInputData['general']['l1DistributionPercentage']['simple']) / 100)).toFixed(2));
  general_l1TicketsCountDistribution_C48(props, userInputData)

  //adding l2TicketsCountDistribution (general) C51

  userInputData['general']['l2TicketsCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']))
      * (Number(userInputData['general']['l2DistributionPercentage']['simple']) / 100)).toFixed(2));
  general_l2TicketsCountDistribution_C51(props, userInputData)

  //adding l3TicketsCountDistribution (general) C54

  userInputData['general']['l3TicketsCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']))
      * (Number(userInputData['general']['l3DistributionPercentage']['simple']) / 100)).toFixed(2));

  general_l3TicketsCountDistribution_C54(props, userInputData)

  //adding l4TicketsCountDistribution (general) C57
  userInputData['general']['l4TicketsCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']))
      * (Number(userInputData['general']['l4DistributionPercentage']['simple']) / 100)).toFixed(2));

  general_l4TicketsCountDistribution_C57(props, userInputData)

  //adding minorEnhTicketsCountDistribution (general) C60

  userInputData['general']['minorEnhTicketsCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']))
      * (Number(userInputData['general']['minorEnhDistributionPercentage']['simple']) / 100)).toFixed(2));
  general_minorEnhTicketsCountDistribution_C60(props, userInputData)

  //adding l1TicketsCountDistribution (security) C102
  userInputData['security']['remediationTicketsCountDistribution']['simple'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']) *
    Number(userInputData['security']['remediationTicketsDistributionPercentage']['simple']) / 100).toFixed(2));
  security_remediationTicketsCountDistribution_C102(props, userInputData)

}
export const general_monthlyL1TicketsAssumed_D41 = (props, userInputData) => {
  //adding monthlyL1TicketsAssumed (general) F41
  userInputData['general']['monthlyL1TicketsAssumed']['total'] =
    ((Number(userInputData['general']['monthlyL1TicketsAssumed']['simple']) +
      Number(userInputData['general']['monthlyL1TicketsAssumed']['medium']) +
      (Number(userInputData['general']['monthlyL1TicketsAssumed']['complex']))).toFixed(2))

}








export const general_monthlyL1TicketsAssumed_E41 = (props, userInputData) => {
  //adding monthlyL1TicketsAssumed (general) F41
  userInputData['general']['monthlyL1TicketsAssumed']['total'] =
    ((Number(userInputData['general']['monthlyL1TicketsAssumed']['simple']) +
      Number(userInputData['general']['monthlyL1TicketsAssumed']['medium']) +
      (Number(userInputData['general']['monthlyL1TicketsAssumed']['complex']))).toFixed(2));

}

export const general_monthlyTotalTicketsAssumed_D40 = (props, userInputData) => {
  //adding monthlyTotalTicketsAssumed (general) D40
  userInputData['general']['monthlyTotalTicketsAssumed']['total'] = ((Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']) +
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']) +
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex'])).toFixed(2));
  general_monthlyTotalTicketsAssumed_F40(props, userInputData)

  //adding monthlyL1TicketsAssumed (general) D41
  userInputData['general']['monthlyL1TicketsAssumed']['medium'] = parseFloat(
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']) +
      (Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']) * 1.3)).toFixed(2));
  general_monthlyL1TicketsAssumed_D41(props, userInputData)

  //adding ticketDistributionPercentage (general) D42
  userInputData['general']['ticketDistributionPercentage']['medium'] = parseFloat(
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']) /
      Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) * 100).toFixed(2));

  if (isNaN(userInputData['general']['ticketDistributionPercentage']['medium'])) {
    userInputData['general']['ticketDistributionPercentage']['medium'] = 0;
  }
  //adding approxNumberOfBatchJobsTicketsToSupport (general) D44
  userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['medium'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']) *
    Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['medium']) / 100).toFixed(2));
  general_approxNumberOfBatchJobsTicketsToSupport_D44(props, userInputData)


  //adding approxNumberOfBatchJobsTicketsToSupport (general) D45
  userInputData['general']['monthlyTotalandBatchJobsTickets']['medium'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']) +
    Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['medium']) / 100).toFixed(2));

  //adding l1TicketsCountDistribution (general) D48
  userInputData['general']['l1TicketsCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']))
      * (Number(userInputData['general']['l1DistributionPercentage']['medium']) / 100)).toFixed(2));


  general_l1TicketsCountDistribution_D48(props, userInputData)

  //adding l2TicketsCountDistribution (general) D51
  userInputData['general']['l2TicketsCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']))
      * (Number(userInputData['general']['l2DistributionPercentage']['medium']) / 100)).toFixed(2));
  general_l2TicketsCountDistribution_D51(props, userInputData)

  //adding l3TicketsCountDistribution (general) D54
  userInputData['general']['l3TicketsCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']))
      * (Number(userInputData['general']['l3DistributionPercentage']['medium']) / 100)).toFixed(2));
  general_l3TicketsCountDistribution_D54(props, userInputData)

  //adding l4TicketsCountDistribution (general) D57
  userInputData['general']['l4TicketsCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']))
      * (Number(userInputData['general']['l4DistributionPercentage']['medium']) / 100)).toFixed(2));
  general_l4TicketsCountDistribution_D57(props, userInputData)

  //adding minorEnhTicketsCountDistribution (general) D60
  userInputData['general']['minorEnhTicketsCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']))
      * (Number(userInputData['general']['minorEnhDistributionPercentage']['medium']) / 100)).toFixed(2));
  general_minorEnhTicketsCountDistribution_D60(props, userInputData)

  //adding l1TicketsCountDistribution (security) D102
  userInputData['security']['remediationTicketsCountDistribution']['medium'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']) *
    Number(userInputData['security']['remediationTicketsDistributionPercentage']['medium']) / 100).toFixed(2));

  security_remediationTicketsCountDistribution_D102(props, userInputData)
}
export const general_monthlyTotalTicketsAssumed_E40 = (props, userInputData) => {
  //adding monthlyTotalTicketsAssumed (general) F40
  userInputData['general']['monthlyTotalTicketsAssumed']['total'] = ((Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']) +
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']) +
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex'])).toFixed(2));
  general_monthlyTotalTicketsAssumed_F40(props, userInputData)

  //adding monthlyL1TicketsAssumed (general) E41
  userInputData['general']['monthlyL1TicketsAssumed']['complex'] = parseFloat(
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']) +
      (Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']) * 1.3)).toFixed(2));

  general_monthlyL1TicketsAssumed_E41(props, userInputData)
  //adding ticketDistributionPercentage (general) E42
  userInputData['general']['ticketDistributionPercentage']['complex'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']) /
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['total']) * 100).toFixed(2));

  if (isNaN(userInputData['general']['ticketDistributionPercentage']['complex'])) {
    userInputData['general']['ticketDistributionPercentage']['complex'] = 0;
  }
  //adding approxNumberOfBatchJobsTicketsToSupport (general) E44
  userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['medium'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']) *
    Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['medium']) / 100).toFixed(2));
  general_approxNumberOfBatchJobsTicketsToSupport_E44(props, userInputData)


  //adding approxNumberOfBatchJobsTicketsToSupport (general) E45
  userInputData['general']['monthlyTotalandBatchJobsTickets']['complex'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']) +
    Number(userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['complex']) / 100).toFixed(2));

  //adding l1TicketsCountDistribution (general) E48
  userInputData['general']['l1TicketsCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']))
      * (Number(userInputData['general']['l1DistributionPercentage']['complex']) / 100)).toFixed(2));


  general_l1TicketsCountDistribution_E48(props, userInputData)

  //adding l2TicketsCountDistribution (general) E51
  userInputData['general']['l2TicketsCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']))
      * (Number(userInputData['general']['l2DistributionPercentage']['complex']) / 100)).toFixed(2));
  general_l2TicketsCountDistribution_E51(props, userInputData)

  //adding l3TicketsCountDistribution (general) E54
  userInputData['general']['l3TicketsCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']))
      * (Number(userInputData['general']['l3DistributionPercentage']['complex']) / 100)).toFixed(2));
  general_l3TicketsCountDistribution_E54(props, userInputData)

  //adding l4TicketsCountDistribution (general) E57
  userInputData['general']['l4TicketsCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']))
      * (Number(userInputData['general']['l4DistributionPercentage']['complex']) / 100)).toFixed(2));
  general_l4TicketsCountDistribution_E57(props, userInputData)

  //adding minorEnhTicketsCountDistribution (general) E60
  userInputData['general']['minorEnhTicketsCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']))
      * (Number(userInputData['general']['minorEnhDistributionPercentage']['complex']) / 100)).toFixed(2));
  general_minorEnhTicketsCountDistribution_E60(props, userInputData)

  //adding l1TicketsCountDistribution (security) E102
  userInputData['security']['remediationTicketsCountDistribution']['complex'] = parseFloat((
    Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']) *
    Number(userInputData['security']['remediationTicketsDistributionPercentage']['complex']) / 100).toFixed(2));
  security_remediationTicketsCountDistribution_E102(props, userInputData)
}

export const general_appCountComplexityBasedDistribution_C31 = (props, userInputData) => {
  //adding appCountComplexityBasedDistribution (general) Application count by complexity - Total F31
  userInputData['general']['appCountComplexityBasedDistribution']['total'] = (
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['simple']) +
      Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']) +
      Number(userInputData['general']['appCountComplexityBasedDistribution']['complex'])).toFixed(2));
  //cotsThirdPartyAppCountDistribution(simple)C34
  userInputData['general']['cotsThirdPartyAppCountDistribution']['simple'] = parseFloat((
    ((Number(userInputData['general']['appCountComplexityBasedDistribution']['simple']))
      * (Number(userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['simple']))) / 100).toFixed(2));
  general_cotsThirdPartyAppCountDistribution_C34(props, userInputData)

  //criticalAppCountDistribution(simple) C37
  userInputData['general']['criticalAppCountDistribution']['simple'] = parseFloat((
    (Number(userInputData['general']['criticalAppPercentageOfTotalApps']['simple'])) *
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['simple'])) / 100).toFixed(2));
  general_criticalAppCountDistribution_C37(props, userInputData)
  //monthlyTotalTicketsAssumed(simple) C40

  userInputData['general']['monthlyTotalTicketsAssumed']['simple'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['simple']))
    * (Number(userInputData['general']['monthlyAverageTicketCountPerAppCategory']['simple']))).toFixed(2));


  general_monthlyTotalTicketsAssumed_C40(props, userInputData)
  //adding cloud appos
  //onCloudAppCountDistribution(simple) c72
  userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['simple']))
    * (Number(userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['simple'])) / 100).toFixed(2));
  cloudAppos__onCloudAppCountDistribution_C72(props, userInputData)
  //onCloudAppCountDistribution(simple) c73
  userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['simple'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['simple'])) -
    (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['simple']))).toFixed(2));
  cloudAppos_notOnCloudAppCountDistribution_C73(props, userInputData)
  //adding security
  //appCountSecurityScopeBasedDistribution(simple) c99
  userInputData['security']['appCountSecurityScopeBasedDistribution']['simple'] = Math.round((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['simple']))
    * (Number(userInputData['security']['appSecurityScopeDistributionPercentage']['simple'])) / 100).toFixed(2));
  security_appCountSecurityScopeBasedDistribution_C99(props, userInputData);

  if (userInputData['general']['aiOpsAppPercentageOfTotalApps'] || userInputData['general']['aiOpsAppCountDistribution']) {
    general_aiOpsAppPercentageOfTotalApps_simple(props, userInputData)
  }
}

export const general_appCountComplexityBasedDistribution_D31 = (props, userInputData) => {
  //adding appCountComplexityBasedDistribution (general) F31
  userInputData['general']['appCountComplexityBasedDistribution']['total'] = ((Number(userInputData['general']['appCountComplexityBasedDistribution']['simple']) +
    Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']) +
    Number(userInputData['general']['appCountComplexityBasedDistribution']['complex'])).toFixed(2));
  //cotsThirdPartyAppCountDistribution(medium)D34
  userInputData['general']['cotsThirdPartyAppCountDistribution']['medium'] = parseFloat((
    ((Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']))
      * (Number(userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['medium']))) / 100).toFixed(2));
  general_cotsThirdPartyAppCountDistribution_D34(props, userInputData)
  //criticalAppCountDistribution(medium) D37
  userInputData['general']['criticalAppCountDistribution']['medium'] = parseFloat((
    ((Number(userInputData['general']['criticalAppPercentageOfTotalApps']['medium'])) *
      (Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']))) / 100).toFixed(2));
  general_criticalAppCountDistribution_D37(props, userInputData)
  //monthlyTotalTicketsAssumed(medium) D40
  userInputData['general']['monthlyTotalTicketsAssumed']['medium'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']))
    * (Number(userInputData['general']['monthlyAverageTicketCountPerAppCategory']['medium']))).toFixed(2));
  general_monthlyTotalTicketsAssumed_D40(props, userInputData)
  //adding cloud appos
  //onCloudAppCountDistribution(medium) D72
  userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']))
    * (Number(userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['medium'])) / 100).toFixed(2));
  cloudAppos_onCloudAppCountDistribution_D72(props, userInputData)
  //onCloudAppCountDistribution(medium) D73
  userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['medium'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['medium'])) -
    (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['medium']))).toFixed(2));
  cloudAppos_notOnCloudAppCountDistribution_D73(props, userInputData)
  //adding security
  //appCountSecurityScopeBasedDistribution(medium) D99
  userInputData['security']['appCountSecurityScopeBasedDistribution']['medium'] = Math.round((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']))
    * (Number(userInputData['security']['appSecurityScopeDistributionPercentage']['medium'])) / 100).toFixed(2));
  security_appCountSecurityScopeBasedDistribution_D99(props, userInputData);

  if (userInputData['general']['aiOpsAppPercentageOfTotalApps'] || userInputData['general']['aiOpsAppCountDistribution']) {
    general_aiOpsAppPercentageOfTotalApps_medium(props, userInputData)
  }
}
export const general_appCountComplexityBasedDistribution_E31 = (props, userInputData) => {

  //adding appCountComplexityBasedDistribution (general)
  userInputData['general']['appCountComplexityBasedDistribution']['total'] = (
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['simple']) +
      Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']) +
      Number(userInputData['general']['appCountComplexityBasedDistribution']['complex'])).toFixed(2));
  //cotsThirdPartyAppCountDistribution(complex) E34
  userInputData['general']['cotsThirdPartyAppCountDistribution']['complex'] = parseFloat((
    ((Number(userInputData['general']['appCountComplexityBasedDistribution']['complex']))
      * (Number(userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['complex']))) / 100).toFixed(2));
  general_cotsThirdPartyAppCountDistribution_E34(props, userInputData)
  //criticalAppCountDistribution(complex) E37
  userInputData['general']['criticalAppCountDistribution']['complex'] = parseFloat((
    (Number(userInputData['general']['criticalAppPercentageOfTotalApps']['complex'])) *
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['complex'])) / 100).toFixed(2));
  general_criticalAppCountDistribution_E37(props, userInputData)
  //monthlyTotalTicketsAssumed(complex) E40
  userInputData['general']['monthlyTotalTicketsAssumed']['complex'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['complex']))
    * (Number(userInputData['general']['monthlyAverageTicketCountPerAppCategory']['complex']))).toFixed(2));
  general_monthlyTotalTicketsAssumed_E40(props, userInputData)
  //adding cloud appos
  //onCloudAppCountDistribution(complex)
  userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['complex']))
    * (Number(userInputData['cloudAppOps']['onCloudAppDistributionPercentage']['complex'])) / 100).toFixed(2));
  cloudAppos_onCloudAppCountDistribution_E72(props, userInputData)
  //onCloudAppCountDistribution(complex) E73
  userInputData['cloudAppOps']['notOnCloudAppCountDistribution']['complex'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['complex'])) -
    (Number(userInputData['cloudAppOps']['onCloudAppCountDistribution']['complex']))).toFixed(2));
  cloudAppos_notOnCloudAppCountDistribution_E73(props, userInputData)
  //adding security
  //appCountSecurityScopeBasedDistribution(complex) e99
  userInputData['security']['appCountSecurityScopeBasedDistribution']['complex'] = Math.round((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['complex']))
    * (Number(userInputData['security']['appSecurityScopeDistributionPercentage']['complex'])) / 100).toFixed(2));
  security_appCountSecurityScopeBasedDistribution_E99(props, userInputData);

  if (userInputData['general']['aiOpsAppPercentageOfTotalApps'] || userInputData['general']['aiOpsAppCountDistribution']) {
    general_aiOpsAppPercentageOfTotalApps_complex(props, userInputData)
  }
}
export const general_appCountComplexityBasedDistribution_F31 = (props, userInputData) => {
  //adding appCountComplexityBasedDistribution (general)
  userInputData['general']['appCountComplexityBasedDistribution']['total'] =
    ((Number(userInputData['general']['appCountComplexityBasedDistribution']['simple']) +
      Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']) +
      Number(userInputData['general']['appCountComplexityBasedDistribution']['complex'])).toFixed(2));

}





export const general_appComplexityBasedDistributionPercentage_C30 = (props, userInputData) => {
  //adding appCountComplexityBasedDistribution (general) C31
  userInputData['general']['appCountComplexityBasedDistribution']['simple'] = parseFloat((
    (Number(userInputData['general']['appComplexityBasedDistributionPercentage']['simple'])) *
    (Number(userInputData['basicInfo']['numberOfAppsInScope'])) / 100).toFixed(2));
  general_appCountComplexityBasedDistribution_C31(props, userInputData)

  //adding appCountComplexityBasedDistribution (general) F30
  userInputData['general']['appComplexityBasedDistributionPercentage']['total'] =
    (((Number(userInputData['general']['appComplexityBasedDistributionPercentage']['simple'])) +
      (Number(userInputData['general']['appComplexityBasedDistributionPercentage']['medium'])) +
      (Number(userInputData['general']['appComplexityBasedDistributionPercentage']['complex']))).toFixed(2))

  if (userInputData['general']['appComplexityBasedDistributionPercentage']['total'] === '100.00') {
    userInputData['general']['appComplexityBasedDistributionPercentage']['total'] = '100'
  }



  //adding appCountComplexityBasedDistribution (general) F31
  userInputData['general']['appCountComplexityBasedDistribution']['total'] =
    (((Number(userInputData['general']['appCountComplexityBasedDistribution']['simple'])) +
      (Number(userInputData['general']['appCountComplexityBasedDistribution']['medium'])) +
      (Number(userInputData['general']['appCountComplexityBasedDistribution']['complex']))).toFixed(2))

}


export const general_appComplexityBasedDistributionPercentage_D30 = (props, userInputData) => {
  //adding appCountComplexityBasedDistribution (general) D31
  userInputData['general']['appCountComplexityBasedDistribution']['medium'] = parseFloat((
    (Number(userInputData['general']['appComplexityBasedDistributionPercentage']['medium'])) *
    (Number(userInputData['basicInfo']['numberOfAppsInScope'])) / 100).toFixed(2));
  general_appCountComplexityBasedDistribution_D31(props, userInputData)
  //adding appCountComplexityBasedDistribution (general) F30
  userInputData['general']['appComplexityBasedDistributionPercentage']['total'] =
    (((Number(userInputData['general']['appComplexityBasedDistributionPercentage']['simple'])) +
      (Number(userInputData['general']['appComplexityBasedDistributionPercentage']['medium'])) +
      (Number(userInputData['general']['appComplexityBasedDistributionPercentage']['complex']))).toFixed(2))


  if (userInputData['general']['appComplexityBasedDistributionPercentage']['total'] === '100.00') {
    userInputData['general']['appComplexityBasedDistributionPercentage']['total'] = '100'
  }

  //adding appCountComplexityBasedDistribution (general) F31
  userInputData['general']['appCountComplexityBasedDistribution']['total'] = (
    ((Number(userInputData['general']['appCountComplexityBasedDistribution']['simple'])) +
      (Number(userInputData['general']['appCountComplexityBasedDistribution']['medium'])) +
      (Number(userInputData['general']['appCountComplexityBasedDistribution']['complex']))).toFixed(2));

  general_appCountComplexityBasedDistribution_C31(props, userInputData)
}

export const general_monthlyAverageTicketCountPerAppCategory_C39 = (props, userInputData) => {
  //monthlyAverageTicketCountPerAppCategory(simple)C40
  userInputData['general']['monthlyTotalTicketsAssumed']['simple'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['simple']))
    * (Number(userInputData['general']['monthlyAverageTicketCountPerAppCategory']['simple']))).toFixed(2));
  general_monthlyTotalTicketsAssumed_C40(props, userInputData);


}
export const general_monthlyAverageTicketCountPerAppCategory_D39 = (props, userInputData) => {
  //monthlyAverageTicketCountPerAppCategory(simple)D40

  userInputData['general']['monthlyTotalTicketsAssumed']['medium'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']))
    * (Number(userInputData['general']['monthlyAverageTicketCountPerAppCategory']['medium']))).toFixed(2));

  general_monthlyTotalTicketsAssumed_D40(props, userInputData);
}
export const general_monthlyAverageTicketCountPerAppCategory_E39 = (props, userInputData) => {
  //monthlyAverageTicketCountPerAppCategory(simple)E40
  userInputData['general']['monthlyTotalTicketsAssumed']['complex'] = parseFloat((
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['complex']))
    * (Number(userInputData['general']['monthlyAverageTicketCountPerAppCategory']['complex']))).toFixed(2));
  general_monthlyTotalTicketsAssumed_E40(props, userInputData);
}
export const general_additionalBatchJobsSupportUpliftPercentage_C43 = (props, userInputData) => {
  //additionalBatchJobsSupportUpliftPercentage(simple)C44
  userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['simple'] = parseFloat((
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']))
    * (Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['simple'])) / 100).toFixed(2));
  general_approxNumberOfBatchJobsTicketsToSupport_C44(props, userInputData)

  //additionalBatchJobsSupportUpliftPercentage(simple)F43
  userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['total'] = ((
    (Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['simple']) +
      Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['medium']) +
      Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['complex'])) / 3).toFixed(2));

}
export const general_additionalBatchJobsSupportUpliftPercentage_D43 = (props, userInputData) => {
  //additionalBatchJobsSupportUpliftPercentage(simple)D44
  userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['medium'] = parseFloat((
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']))
    * (Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['medium'])) / 100).toFixed(2));
  general_approxNumberOfBatchJobsTicketsToSupport_D44(props, userInputData)

  //additionalBatchJobsSupportUpliftPercentage(simple)F43
  userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['total'] = ((
    (Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['simple']) +
      Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['medium']) +
      Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['complex'])) / 3).toFixed(2));

}
export const general_additionalBatchJobsSupportUpliftPercentage_E43 = (props, userInputData) => {
  //additionalBatchJobsSupportUpliftPercentage(simple)E44
  userInputData['general']['approxNumberOfBatchJobsTicketsToSupport']['complex'] = parseFloat((
    (Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']))
    * (Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['complex'])) / 100).toFixed(2));

  general_approxNumberOfBatchJobsTicketsToSupport_E44(props, userInputData)

  //additionalBatchJobsSupportUpliftPercentage(simple)F43
  userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['total'] = ((
    (Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['simple']) +
      Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['medium']) +
      Number(userInputData['general']['additionalBatchJobsSupportUpliftPercentage']['complex'])) / 3).toFixed(2));
}
export const general_l1DistributionPercentage_E47 = (props, userInputData) => {
  //l1TicketsCountDistribution(simple)D48
  userInputData['general']['l1TicketsCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']))
      * (Number(userInputData['general']['l1DistributionPercentage']['complex']) / 100)).toFixed(2));

  general_l1TicketsCountDistribution_E48(props, userInputData);

}
export const general_l1DistributionPercentage_D47 = (props, userInputData) => {

  //l1TicketsCountDistribution(simple)D48
  userInputData['general']['l1TicketsCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']))
      * (Number(userInputData['general']['l1DistributionPercentage']['medium']) / 100)).toFixed(2));
  general_l1TicketsCountDistribution_D48(props, userInputData);

  //l1DistributionPercentage E47
  userInputData['general']['l1DistributionPercentage']['complex'] = parseFloat(
    (Number(userInputData['general']['l1DistributionPercentage']['medium'])).toFixed(2)
  )
  general_l1DistributionPercentage_E47(props, userInputData)
}

export const general_l1DistributionPercentage_C47 = (props, userInputData) => {
  //api call to change C47 own value
  //l1TicketsCountDistribution(simple)C48
  userInputData['general']['l1TicketsCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']))
      * (Number(userInputData['general']['l1DistributionPercentage']['simple']) / 100)).toFixed(2));
  general_l1TicketsCountDistribution_C48(props, userInputData);

  // //l1DistributionPercentage D47
  userInputData['general']['l1DistributionPercentage']['medium'] = parseFloat(
    (Number(userInputData['general']['l1DistributionPercentage']['simple'])).toFixed(2)
  );
  general_l1DistributionPercentage_D47(props, userInputData);

}




export const general_l2DistributionPercentage_E50 = (props, userInputData) => {
  //l2TicketsCountDistribution(simple)E51
  userInputData['general']['l2TicketsCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']))
      * (Number(userInputData['general']['l2DistributionPercentage']['complex']) / 100)).toFixed(2));

  general_l2TicketsCountDistribution_E51(props, userInputData)

}
export const general_l2DistributionPercentage_D50 = (props, userInputData) => {

  //l2TicketsCountDistribution(simple)D51
  userInputData['general']['l2TicketsCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']))
      * (Number(userInputData['general']['l2DistributionPercentage']['medium']) / 100)).toFixed(2));
  general_l2TicketsCountDistribution_D51(props, userInputData)
  //l2DistributionPercentage E47
  userInputData['general']['l2DistributionPercentage']['complex'] = parseFloat(
    (Number(userInputData['general']['l2DistributionPercentage']['medium'])).toFixed(2)
  )
  general_l2DistributionPercentage_E50(props, userInputData)
}


export const general_l2DistributionPercentage_C50 = (props, userInputData) => {
  //api call to change C50 own value

  //l2TicketsCountDistribution(simple)C51

  userInputData['general']['l2TicketsCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']))
      * (Number(userInputData['general']['l2DistributionPercentage']['simple']) / 100)).toFixed(2));

  general_l2TicketsCountDistribution_C51(props, userInputData)

  //l2DistributionPercentage D47
  userInputData['general']['l2DistributionPercentage']['medium'] = parseFloat(
    (Number(userInputData['general']['l2DistributionPercentage']['simple'])).toFixed(2)
  );
  general_l2DistributionPercentage_D50(props, userInputData);

}
export const general_l3DistributionPercentage_E53 = (props, userInputData) => {
  //l3TicketsCountDistribution(simple)E54
  userInputData['general']['l3TicketsCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']))
      * (Number(userInputData['general']['l3DistributionPercentage']['complex']) / 100)).toFixed(2));
  general_l3TicketsCountDistribution_E54(props, userInputData)

}

export const general_l3DistributionPercentage_D53 = (props, userInputData) => {

  //l3TicketsCountDistribution(simple)D54
  userInputData['general']['l3TicketsCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']))
      * (Number(userInputData['general']['l3DistributionPercentage']['medium']) / 100)).toFixed(2));
  general_l3TicketsCountDistribution_D54(props, userInputData)
  //l3DistributionPercentage E53
  userInputData['general']['l3DistributionPercentage']['complex'] = parseFloat(
    (Number(userInputData['general']['l3DistributionPercentage']['medium'])).toFixed(2)
  )
  general_l3DistributionPercentage_E53(props, userInputData)
}
export const general_l3DistributionPercentage_C53 = (props, userInputData) => {
  //api call to change C50 own value

  //l3TicketsCountDistribution(simple)C54
  userInputData['general']['l3TicketsCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']))
      * (Number(userInputData['general']['l3DistributionPercentage']['simple']) / 100)).toFixed(2));
  general_l3TicketsCountDistribution_C54(props, userInputData);

  //l3DistributionPercentage D53
  userInputData['general']['l3DistributionPercentage']['medium'] = parseFloat(
    (Number(userInputData['general']['l3DistributionPercentage']['simple'])).toFixed(2)
  );
  general_l3DistributionPercentage_D53(props, userInputData);

}
export const general_l4DistributionPercentage_E56 = (props, userInputData) => {
  //l4TicketsCountDistribution(simple)E51
  userInputData['general']['l4TicketsCountDistribution']['complex'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['complex']))
      * (Number(userInputData['general']['l4DistributionPercentage']['complex']) / 100)).toFixed(2));
  general_l4TicketsCountDistribution_E57(props, userInputData)

}
export const general_l4DistributionPercentage_D56 = (props, userInputData) => {

  //l4TicketsCountDistribution(simple)D57
  userInputData['general']['l4TicketsCountDistribution']['medium'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['medium']))
      * (Number(userInputData['general']['l4DistributionPercentage']['medium']) / 100)).toFixed(2));
  general_l4TicketsCountDistribution_D57(props, userInputData)

  //l4DistributionPercentage E47
  userInputData['general']['l4DistributionPercentage']['complex'] = parseFloat(
    (Number(userInputData['general']['l4DistributionPercentage']['medium'])).toFixed(2)
  )
  general_l4DistributionPercentage_E56(props, userInputData)
}

export const general_l4DistributionPercentage_C56 = (props, userInputData) => {
  //api call to change C56 own value

  //l4TicketsCountDistribution(simple)C57
  userInputData['general']['l4TicketsCountDistribution']['simple'] =
    parseFloat(((Number(userInputData['general']['monthlyTotalTicketsAssumed']['simple']))
      * (Number(userInputData['general']['l4DistributionPercentage']['simple']) / 100)).toFixed(2));
  general_l4TicketsCountDistribution_C57(props, userInputData)

  //l4DistributionPercentage D56
  userInputData['general']['l4DistributionPercentage']['medium'] = parseFloat(
    (Number(userInputData['general']['l4DistributionPercentage']['simple'])).toFixed(2)
  );
  general_l4DistributionPercentage_D56(props, userInputData);

}










export const general_additionalADCapacityHrsDistributionPercentage_C65 = (props, userInputData) => {

  //additionalADCapacityHrsDistribution(simple)C66
  userInputData['general']['additionalADCapacityHrsDistribution']['simple'] = parseFloat((
    (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['simple']))
    * (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['total'])) / 100).toFixed(2));

  //adding additionalADCapacityHrsDistribution (general) F66
  userInputData['general']['additionalADCapacityHrsDistribution']['total'] = (
    (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['simple']) +
      Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['medium']) +
      (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['complex']))).toFixed(2));


}
export const general_additionalADCapacityHrsDistributionPercentage_D65 = (props, userInputData) => {

  //additionalADCapacityHrsDistribution(simple)D66
  userInputData['general']['additionalADCapacityHrsDistribution']['medium'] = parseFloat((
    (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['medium']))
    * (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['total'])) / 100).toFixed(2));

  //adding additionalADCapacityHrsDistribution (general) F66
  userInputData['general']['additionalADCapacityHrsDistribution']['total'] = (
    (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['simple']) +
      Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['medium']) +
      (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['complex']))).toFixed(2));



}
export const general_additionalADCapacityHrsDistributionPercentage_E65 = (props, userInputData) => {
  //additionalADCapacityHrsDistribution(simple)E66
  userInputData['general']['additionalADCapacityHrsDistribution']['complex'] = parseFloat((
    (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['complex']))
    * (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['total'])) / 100).toFixed(2));
  //adding additionalADCapacityHrsDistribution (general) F66
  userInputData['general']['additionalADCapacityHrsDistribution']['total'] = (
    (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['simple']) +
      Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['medium']) +
      (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['complex']))).toFixed(2));

}

export const general_additionalADCapacityHrsDistributionPercentage_F65 = (props, userInputData) => {
  //API input F65
  //additionalADCapacityHrsDistribution(simple)C66
  userInputData['general']['additionalADCapacityHrsDistribution']['simple'] = parseFloat((
    (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['simple']))
    * (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['total'])) / 100).toFixed(2));


  //additionalADCapacityHrsDistribution(simple)D66
  userInputData['general']['additionalADCapacityHrsDistribution']['medium'] = parseFloat((
    (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['medium']))
    * (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['total'])) / 100).toFixed(2));


  //additionalADCapacityHrsDistribution(simple)E66
  userInputData['general']['additionalADCapacityHrsDistribution']['complex'] = parseFloat((
    (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['complex']))
    * (Number(userInputData['general']['additionalADCapacityHrsDistributionPercentage']['total'])) / 100).toFixed(2));

}

export const general_nonTicketingActivitiesUpliftDistributionPercentage_C68 = (props, userInputData) => {
  //api call input

}
export const general_nonTicketingActivitiesUpliftDistributionPercentage_D68 = (props, userInputData) => {
  //API call input

}
export const general_nonTicketingActivitiesUpliftDistributionPercentage_E68 = (props, userInputData) => {
  //API call input

}






export const general_appComplexityBasedDistributionPercentage_E30 = (props, userInputData) => {
  //adding appCountComplexityBasedDistribution (general) E31
  userInputData['general']['appCountComplexityBasedDistribution']['complex'] = parseFloat((
    (Number(userInputData['general']['appComplexityBasedDistributionPercentage']['complex'])) *
    (Number(userInputData['basicInfo']['numberOfAppsInScope'])) / 100).toFixed(2));
  general_appCountComplexityBasedDistribution_E31(props, userInputData)
  //adding appCountComplexityBasedDistribution (general) F30
  userInputData['general']['appComplexityBasedDistributionPercentage']['total'] =
    (((Number(userInputData['general']['appComplexityBasedDistributionPercentage']['simple'])) +
      (Number(userInputData['general']['appComplexityBasedDistributionPercentage']['medium'])) +
      (Number(userInputData['general']['appComplexityBasedDistributionPercentage']['complex']))).toFixed(2))



  if (userInputData['general']['appComplexityBasedDistributionPercentage']['total'] === '100.00') {
    userInputData['general']['appComplexityBasedDistributionPercentage']['total'] = '100'
  }
  //adding appCountComplexityBasedDistribution (general) F30
  userInputData['general']['appCountComplexityBasedDistribution']['total'] = (
    ((Number(userInputData['general']['appCountComplexityBasedDistribution']['simple'])) +
      (Number(userInputData['general']['appCountComplexityBasedDistribution']['medium'])) +
      (Number(userInputData['general']['appCountComplexityBasedDistribution']['complex']))).toFixed(2));

}

export const general_criticalAppPercentageOfTotalApps_C36 = (props, userInputData) => {
  // adding criticalAppCountDistribution(general) C37
  userInputData['general']['criticalAppCountDistribution']['simple'] = parseFloat((
    (Number(userInputData['general']['criticalAppPercentageOfTotalApps']['simple'])) *
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['simple'])) / 100).toFixed(2));
  general_criticalAppCountDistribution_C37(props, userInputData)
  //adding appSecurityScopeDistributionPercentage C98
  userInputData['security']['appSecurityScopeDistributionPercentage']['simple'] = parseFloat((
    5 + (Number(userInputData['general']['criticalAppPercentageOfTotalApps']['simple']))).toFixed(2))
  security_appSecurityScopeDistributionPercentage_C98(props, userInputData)

}

export const general_criticalAppPercentageOfTotalApps_D36 = (props, userInputData) => {
  // adding criticalAppCountDistribution(general) D37
  userInputData['general']['criticalAppCountDistribution']['medium'] = parseFloat((
    ((Number(userInputData['general']['criticalAppPercentageOfTotalApps']['medium'])) *
      (Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']))) / 100).toFixed(2));
  general_criticalAppCountDistribution_D37(props, userInputData)
  //adding appSecurityScopeDistributionPercentage D98
  userInputData['security']['appSecurityScopeDistributionPercentage']['medium'] = parseFloat((
    5 + (Number(userInputData['general']['criticalAppPercentageOfTotalApps']['medium']))).toFixed(2))
  security_appSecurityScopeDistributionPercentage_D98(props, userInputData)
}

export const general_criticalAppPercentageOfTotalApps_E36 = (props, userInputData) => {
  // adding criticalAppCountDistribution(general) E37
  userInputData['general']['criticalAppCountDistribution']['complex'] = parseFloat((
    (Number(userInputData['general']['criticalAppPercentageOfTotalApps']['complex'])) *
    (Number(userInputData['general']['appCountComplexityBasedDistribution']['complex'])) / 100).toFixed(2));
  general_criticalAppCountDistribution_E37(props, userInputData);
  //adding appSecurityScopeDistributionPercentage E98
  userInputData['security']['appSecurityScopeDistributionPercentage']['complex'] = parseFloat((
    5 + (Number(userInputData['general']['criticalAppPercentageOfTotalApps']['complex']))).toFixed(2))
  security_appSecurityScopeDistributionPercentage_E98(props, userInputData)
}

export const general_cotsThirdPartyAppCountDistribution_C33 = (props, userInputData) => {

  //cotsThirdPartyAppCountDistribution(simple)C34
  userInputData['general']['cotsThirdPartyAppCountDistribution']['simple'] = parseFloat((
    ((Number(userInputData['general']['appCountComplexityBasedDistribution']['simple']))
      * (Number(userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['simple']))) / 100).toFixed(2));
  general_cotsThirdPartyAppCountDistribution_C34(props, userInputData);

  //adding cotsThirdPartyPercentageOfTotalApps (general)  D33
  userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['medium'] =
    parseFloat((Number(userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['simple'])).toFixed(2));
  //cotsThirdPartyAppCountDistribution(medium)D34
  userInputData['general']['cotsThirdPartyAppCountDistribution']['medium'] = parseFloat((
    ((Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']))
      * (Number(userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['medium']))) / 100).toFixed(2));
  general_cotsThirdPartyAppCountDistribution_D34(props, userInputData);

  //adding cotsThirdPartyPercentageOfTotalApps (general)  E33 from D33
  userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['complex'] =
    parseFloat((Number(userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['medium'])).toFixed(2));
  userInputData['general']['cotsThirdPartyAppCountDistribution']['complex'] = parseFloat((
    ((Number(userInputData['general']['appCountComplexityBasedDistribution']['complex']))
      * (Number(userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['complex']))) / 100).toFixed(2));

  general_cotsThirdPartyAppCountDistribution_E34(props, userInputData);
}
//--------------------
//AIOPS formula
export const general_aiOpsAppPercentageOfTotalApps_simple = (props, userInputData) => {

  //aiOpsAppCountDistribution(simple)C186
  userInputData['general']['aiOpsAppCountDistribution']['simple'] = parseFloat((
    ((Number(userInputData['general']['aiOpsAppPercentageOfTotalApps']['simple']))
      * (Number(userInputData['general']['appCountComplexityBasedDistribution']['simple']))) / 100).toFixed(2));
  //aiOpsAppCountDistribution(total)F186
  general_aiOpsAppCountDistribution_total(props, userInputData);

}

//AIOPS formula
export const general_aiOpsAppPercentageOfTotalApps_medium = (props, userInputData) => {

  //aiOpsAppCountDistribution(medium)D186
  userInputData['general']['aiOpsAppCountDistribution']['medium'] = parseFloat((
    ((Number(userInputData['general']['aiOpsAppPercentageOfTotalApps']['medium']))
      * (Number(userInputData['general']['appCountComplexityBasedDistribution']['medium']))) / 100).toFixed(2));
  //aiOpsAppCountDistribution(total)F186
  general_aiOpsAppCountDistribution_total(props, userInputData);

}

//AIOPS formula
export const general_aiOpsAppPercentageOfTotalApps_complex = (props, userInputData) => {

  //aiOpsAppCountDistribution(complex)E186
  userInputData['general']['aiOpsAppCountDistribution']['complex'] = parseFloat((
    ((Number(userInputData['general']['aiOpsAppPercentageOfTotalApps']['complex']))
      * (Number(userInputData['general']['appCountComplexityBasedDistribution']['complex']))) / 100).toFixed(2));
  //aiOpsAppCountDistribution(total)F186
  general_aiOpsAppCountDistribution_total(props, userInputData);


}

export const general_aiOpsAppCountDistribution_total = (props, userInputData) => {

  //aiOpsAppCountDistribution(total)F186
  userInputData['general']['aiOpsAppCountDistribution']['total'] = ((Number(userInputData['general']['aiOpsAppCountDistribution']['simple']) +
    Number(userInputData['general']['aiOpsAppCountDistribution']['medium']) +
    Number(userInputData['general']['aiOpsAppCountDistribution']['complex'])).toFixed(2));

  //aiOpsAppPercentageOfTotalApps(total)F186
  general_aiOpsAppPercentageOfTotalApps_total(props, userInputData);
}

export const general_aiOpsAppPercentageOfTotalApps_total = (props, userInputData) => {

  userInputData['general']['aiOpsAppPercentageOfTotalApps']['total'] = (
    (Number(userInputData['general']['aiOpsAppCountDistribution']['total']) /
      Number(userInputData['basicInfo']['numberOfAppsInScope']) * 100).toFixed(2));

  if (isNaN(userInputData['general']['aiOpsAppPercentageOfTotalApps']['total'])) {
    userInputData['general']['aiOpsAppPercentageOfTotalApps']['total'] = 0;
  }

  devscops_DevOpsOnAIOPS(props, userInputData)
}

