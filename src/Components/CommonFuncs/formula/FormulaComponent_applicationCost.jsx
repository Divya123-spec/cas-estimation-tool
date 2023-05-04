import { input_validation_main } from "./Validations/ValidationMain";
import { security_remediationFTEDistribution_F103 } from "./FormulaComponent_Security";
import { Automation_appScopeCoveredPercentage } from './formulaProductivity_automation';
import { devscops_PMOSLAMgmtReporting, devscops_DevOpsonPrem } from "./formulaProductivity_devscops";
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
const btnFunction2 = (objBtn, stateUser, userEmail) => {
  let userData = window.localStorage.getItem('userData');
  userData = JSON.parse(userData)
  let inputBtnData = {}
  if (objBtn.errorBtn) {
   if ((stateUser === 'InReview' || stateUser === 'Approved')||(userEmail === userData.email && stateUser === "Rework")) 
         {
          inputBtnData = {
            RestButton: true,
            EstimateButton: true,
            SaveButton: false,
            CalculateButton: false,
            SendForReivewButton: false,
            Export: false,
            inputButton: false,
            outputButton: true,
            calculateModal: false,
            saveModal: false
      
          }
         }else{
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
  
  }
  else {
    if ((stateUser === 'InReview' || stateUser === 'Approved')||(userEmail === userData.email && stateUser === "Rework")) 
    {
    inputBtnData = {
      RestButton: true, EstimateButton: true,
      SaveButton: false,
      CalculateButton: true,
      SendForReivewButton: false,
      Export: true,
      inputButton: true,
      outputButton: true,
      calculateModal: false,
      saveModal: false
    }
  }else{
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
  }
  return inputBtnData
}



const inputUserData = (userInpuData) => {
  let newArr = [];
  newArr = userInpuData['appTechnologyDistribution']['stdNonStdWorkStreams'];
  var newArrayDisttibution = newArr.filter((ele) => {
    return ele;
  });
  let addedTechnology = newArrayDisttibution.every((ele) => ele['uiStatus']['iconStatus']['ok']);
  return addedTechnology

}
const igniteclientCost = (props,valuesCost) => {
  let igniteCost = {};
  props.userDropDownData.defaultDropDown['response']['defaultDropdown']['igniteLicenseCostInUSD'].filter(element => {
      if (element.key.includes(valuesCost)) {
          return igniteCost[element.key] = element.value;
      }
  });
  return igniteCost[valuesCost];
}
export const OpportunityParameterAdditionalCost = (props, AdditionalCostData) => {
  let ObjBtnStatus = {
    errorBtn: false,
    cheackBtn: false
  }
  let userData = props.userInpuData.defaultInputData.response;
  let userInputData = userData['estimate']['userInputs'];

  let addedTechnology = inputUserData(userInputData)

  if (true) {
    let igniteclientval = igniteclientCost(props,AdditionalCostData['igniteToBeUsedByDefaultSelection']);
    AdditionalCostData['igniteToolCostForThreeYears_USD'] = Number(igniteclientval);

    userInputData['additionalCostInfo'] = AdditionalCostData;
    //ok-false warning-false
    if ((!userInputData['additionalCostInfo']['uiStatus']['iconStatus']['ok'])) {
      ObjBtnStatus.errorBtn = true
    }
    if (userInputData['additionalCostInfo']['uiStatus']['iconStatus']['warning']) {
      ObjBtnStatus.errorBtn = false
    }
    input_validation_main(props, userInputData, ObjBtnStatus);
    let btnInput = btnFunction(ObjBtnStatus)
    props.userInputDataEditFormula(AdditionalCostData, "additionalCostInfo", btnInput);

  }
  // else{
  //   let ObjBtnStatus = {
  //     errorBtn: true,
  //     cheackBtn: false
  // }
  //   let btnInput = btnFunction(ObjBtnStatus)
  //   props.userInputDataEditFormula(AdditionalCostData, "additionalCostInfo",btnInput);

  // }

}

export const EffortEsimationScope = (props, effortEstimationParameters) => {


  let ObjBtnStatus = {
    errorBtn: false,
    cheackBtn: false
  }
  let userData = props.userInpuData.defaultInputData.response;
  let userInputData = userData['estimate']['userInputs'];
  userInputData['effortEstimationParameters'] = effortEstimationParameters;

  let offshoreOnshoreratioLocal = (effortEstimationParameters.onsitePercentage * (25 / 100));
  let offshoreOnshorerationContractOnsite = (effortEstimationParameters.onsitePercentage * (25 / 100))
  let offshoreOnshoreratioLanded = (effortEstimationParameters.onsitePercentage * (50 / 100))
  let offshoreOnshoreratio1Offshore = (effortEstimationParameters.offshorePercentage * (90 / 100))
  let offshoreOnshoreratio2Offshore = (effortEstimationParameters.offshorePercentage * (10 / 100))
  //chnage of ams value total hrs d16
  userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationAnnualHrs'] = parseInt(
    (Number(userInputData['ams']['amsUtilizationCalculation']['localHrs']) * (offshoreOnshoreratioLocal / 100)) +
    (Number(userInputData['ams']['amsUtilizationCalculation']['contractorsOnsiteHrs']) * (offshoreOnshorerationContractOnsite / 100)) +
    (Number(userInputData['ams']['amsUtilizationCalculation']['landedHrs']) * (offshoreOnshoreratioLanded / 100)) +
    (Number(userInputData['ams']['amsUtilizationCalculation']['offshoreHrs']) * (offshoreOnshoreratio1Offshore / 100)) +
    (Number(userInputData['ams']['amsUtilizationCalculation']['offshoreContractorsHrs']) * (offshoreOnshoreratio2Offshore / 100))
  )
// JIRA 869 // added condition to update the additionalcost geoselection
if(userInputData['effortEstimationParameters']['onsiteLocationDefaultSelection']=='geoCountry220'){
  userInputData['additionalCostInfo']['dealGeoDefaultSelection']='us';
}
else{
  userInputData['additionalCostInfo']['dealGeoDefaultSelection']='non_us';
}
  Automation_appScopeCoveredPercentage(props, userInputData)

  //d17

  userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs'] = parseInt(
    ((Number(userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationAnnualHrs']) / 12)).toFixed(2)
  )


  //chnge security


  //C103 AMS estimate
  userInputData['security']['remediationFTEDistribution']['simple'] = parseFloat(
    (Number(userInputData['security']['remediationTicketsCountDistribution']['simple']) *
      Number(props['userCalculateTicketPercentage']['sumProductHoursPerTicket']['l_2']) /
      (Number(userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']))).toFixed(2));

  //D103 AMS estimate
  userInputData['security']['remediationFTEDistribution']['medium'] = parseFloat(
    (Number(userInputData['security']['remediationTicketsCountDistribution']['medium']) *
      Number(props['userCalculateTicketPercentage']['sumProductHoursPerTicket']['l_2']) /
      (Number(userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']))).toFixed(2));

  //E103

  //D103 AMS estimate
  userInputData['security']['remediationFTEDistribution']['complex'] = parseFloat(
    (Number(userInputData['security']['remediationTicketsCountDistribution']['complex']) *
      Number(props['userCalculateTicketPercentage']['sumProductHoursPerTicket']['l_2']) /
      (Number(userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']))).toFixed(2));

  security_remediationFTEDistribution_F103(props, userInputData);
  //  devscops PMO (SLA Mgmt and Reporting)
  //governanceUpliftPercentage
  devscops_PMOSLAMgmtReporting(props, userInputData)
  devscops_DevOpsonPrem(props, userInputData)
  input_validation_main(props, userInputData, ObjBtnStatus);
  //   if ((!(effortEstimationParameters['uiStatus']['iconStatus']['ok']) && !(effortEstimationParameters['uiStatus']['iconStatus']['warning']))) {
  //     ObjBtnStatus.errorBtn = true;
  //  }
  let btnInput = btnFunction(ObjBtnStatus);
  props.userInputDataEditFormulaInfo(userInputData, btnInput);
}

export const AmsUtilizationUpdate = (props, data, stateUser, userEmail) => {
  let ObjBtnStatus = {
    errorBtn: false,
    cheackBtn: false
  }
  let userData = props.userInpuData.defaultInputData.response;
  let userInputData = userData['estimate']['userInputs'];
  // userInputData['effortEstimationParameters'] = effortEstimationParameters;

  let offshoreOnshoreratioLocal = (userInputData['effortEstimationParameters'].onsitePercentage * (25 / 100));
  let offshoreOnshorerationContractOnsite = (userInputData['effortEstimationParameters'].onsitePercentage * (25 / 100))
  let offshoreOnshoreratioLanded = (userInputData['effortEstimationParameters'].onsitePercentage * (50 / 100))
  let offshoreOnshoreratio1Offshore = (userInputData['effortEstimationParameters'].offshorePercentage * (90 / 100))
  let offshoreOnshoreratio2Offshore = (userInputData['effortEstimationParameters'].offshorePercentage * (10 / 100))
  //chnage of ams value total hrs d16
  userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationAnnualHrs'] = Math.round(Number(
    (Number(userInputData['ams']['amsUtilizationCalculation']['localHrs']) * (offshoreOnshoreratioLocal / 100)) +
    (Number(userInputData['ams']['amsUtilizationCalculation']['contractorsOnsiteHrs']) * (offshoreOnshorerationContractOnsite / 100)) +
    (Number(userInputData['ams']['amsUtilizationCalculation']['landedHrs']) * (offshoreOnshoreratioLanded / 100)) +
    (Number(userInputData['ams']['amsUtilizationCalculation']['offshoreHrs']) * (offshoreOnshoreratio1Offshore / 100)) +
    (Number(userInputData['ams']['amsUtilizationCalculation']['offshoreContractorsHrs']) * (offshoreOnshoreratio2Offshore / 100))
  ))

  //d17

  userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs'] = Math.round(Number(
    ((Number(userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationAnnualHrs']) / 12)).toFixed(2)
  ))


  //chnge security


  //C103 AMS estimate
  userInputData['security']['remediationFTEDistribution']['simple'] = parseFloat(
    (Number(userInputData['security']['remediationTicketsCountDistribution']['simple']) *
      Number(props['userCalculateTicketPercentage']['sumProductHoursPerTicket']['l_2']) /
      (Number(userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']))).toFixed(2));

  //D103 AMS estimate
  userInputData['security']['remediationFTEDistribution']['medium'] = parseFloat(
    (Number(userInputData['security']['remediationTicketsCountDistribution']['medium']) *
      Number(props['userCalculateTicketPercentage']['sumProductHoursPerTicket']['l_2']) /
      (Number(userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']))).toFixed(2));

  //E103

  //D103 AMS estimate
  userInputData['security']['remediationFTEDistribution']['complex'] = parseFloat(
    (Number(userInputData['security']['remediationTicketsCountDistribution']['complex']) *
      Number(props['userCalculateTicketPercentage']['sumProductHoursPerTicket']['l_2']) /
      (Number(userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']))).toFixed(2));

  security_remediationFTEDistribution_F103(props, userInputData)
  input_validation_main(props, userInputData, ObjBtnStatus);
  let btnInput = btnFunction2(ObjBtnStatus, stateUser, userEmail);
  props.userInputDataEditFormulaInfo(userInputData, btnInput);
}

