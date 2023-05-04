import {
  general_cotsThirdPartyAppCountDistribution_C33,
  general_minorEnhCapacityOfHoursDistribution_F61,
  general_l1DistributionPercentage_C47,
  general_l2DistributionPercentage_C50,
  general_l3DistributionPercentage_C53,
  general_l4DistributionPercentage_C56,
  general_minorEnhDistributionPercentage_C59
} from './FormulaComponent_General'
import { security_remediationFTEDistribution_F103 } from './FormulaComponent_Security';
import { testing_testingFTECountDistribution_F94 } from './FormulaComponent_Testing';
import { input_validation_main } from './Validations/ValidationMain';
import { englishValue } from '../../../Utils/CommonFunc';
import { Automation_appScopeCoveredPercentage } from './formulaProductivity_automation';
import { devscops_CommandCenterOperations, devscops_DevOpsonPrem } from './formulaProductivity_devscops';

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
export const calculateTicketDistributionPercentageAndBaselineHoursForL2 = (props, userInputData, responseAPI) => {
  //JIRA 1033 changing values //C103 AMS estimate
  function generalChanges() {

    //C103 AMS estimate
    userInputData['security']['remediationFTEDistribution']['simple'] = parseFloat(
      (Number(userInputData['security']['remediationTicketsCountDistribution']['simple']) *
        Number(responseAPI['sumProductHoursPerTicket']['l_2']) /
        (Number(userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']))).toFixed(2));

    //D103 AMS estimate
    userInputData['security']['remediationFTEDistribution']['medium'] = parseFloat(
      (Number(userInputData['security']['remediationTicketsCountDistribution']['medium']) *
        Number(responseAPI['sumProductHoursPerTicket']['l_2']) /
        (Number(userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']))).toFixed(2));

    //E103

    //D103 AMS estimate
    userInputData['security']['remediationFTEDistribution']['complex'] = parseFloat(
      (Number(userInputData['security']['remediationTicketsCountDistribution']['complex']) *
        Number(responseAPI['sumProductHoursPerTicket']['l_2']) /
        (Number(userInputData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']))).toFixed(2));

    security_remediationFTEDistribution_F103(props, userInputData)
  }

  //JIRA 1033  weather we should  change or not the updated L1/l2/l3/l4/l5 values 
  if (responseAPI?.skipTicketDistributionPercentageOverride) {
    generalChanges()
  } else {
    //C47
    userInputData['general']['l1DistributionPercentage']['simple'] = (
      Number(responseAPI['sumProductTicketDistributionPercentage']['l_1'])
    );
    general_l1DistributionPercentage_C47(props, userInputData)
    //C50
    userInputData['general']['l2DistributionPercentage']['simple'] = (
      Number(responseAPI['sumProductTicketDistributionPercentage']['l_2'])
    );
    general_l2DistributionPercentage_C50(props, userInputData)
    //C53
    userInputData['general']['l3DistributionPercentage']['simple'] = (
      Number(responseAPI['sumProductTicketDistributionPercentage']['l_3'])
    );
    general_l3DistributionPercentage_C53(props, userInputData)
    //C56
    userInputData['general']['l4DistributionPercentage']['simple'] = (
      Number(responseAPI['sumProductTicketDistributionPercentage']['l_4'])
    );
    general_l4DistributionPercentage_C56(props, userInputData)
    //C59
    userInputData['general']['minorEnhDistributionPercentage']['simple'] = (
      Number(responseAPI['sumProductTicketDistributionPercentage']['min_enh'])
    );
    general_minorEnhDistributionPercentage_C59(props, userInputData);

    generalChanges()
  }

}
export const calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs = (props, userInputData, responseAPI) => {
  //F68
  userInputData['general']['nonTicketingActivitiesUpliftDistributionPercentage']['total'] = (
    Number(responseAPI['baselineWtPercentageForAdhocActivities']['complexityBaselineWtPercentage'])
      .toFixed(2));

  //F94 Testing FTE included in App Support 
  userInputData['testing']['testingFTECountDistribution']['total'] = (
    Number(responseAPI['productivityOnTestingMonthlyFTEsForY1']['testingMonthlyFTEsForY1']).toFixed(2));
  //F94 to be done yet
  testing_testingFTECountDistribution_F94(props, userInputData);

  //C61
  userInputData['general']['minorEnhCapacityOfHoursDistribution']['simple'] = parseFloat(
    (Number(userInputData['general']['minorEnhTicketsCountDistribution']['simple']) *
      (Number(responseAPI['baselineWtHoursForMinorEnhancements']['cloudAppsBaselineWtHours']))).toFixed(2));

  //D61
  userInputData['general']['minorEnhCapacityOfHoursDistribution']['medium'] = parseFloat(
    (Number(userInputData['general']['minorEnhTicketsCountDistribution']['medium']) *
      (Number(responseAPI['baselineWtHoursForMinorEnhancements']['cloudAppsBaselineWtHours']))).toFixed(2));
  //E61
  userInputData['general']['minorEnhCapacityOfHoursDistribution']['complex'] = parseFloat(
    (Number(userInputData['general']['minorEnhTicketsCountDistribution']['complex']) *
      (Number(responseAPI['baselineWtHoursForMinorEnhancements']['cloudAppsBaselineWtHours']))).toFixed(2));

  general_minorEnhCapacityOfHoursDistribution_F61(props, userInputData);
}
const errorApplication = (newDistributionArr, ObjBtnStatus, userInputData) => {

  let appCountTotal = newDistributionArr.reduce((acc, item) => {
    return acc + parseFloat(item['countOfApps']);
  }, 0)
  appCountTotal = parseFloat(appCountTotal.toFixed(2));
  let appDistributionPercentageTotal = newDistributionArr.reduce((acc, item) => {
    return (acc = Number((acc + Number(item['appDistributionPercentage'])).toFixed(2)));
  }, 0);
  let applicationDistributionError = appDistributionPercentageTotal === 100 ? false : true
  let addedTechnology = newDistributionArr.every((ele) => ele['uiStatus']['iconStatus']['ok']);
  let applicationCountApps = appCountTotal === (Number(userInputData['basicInfo']['numberOfAppsInScope'])) ? false : true

  if (!addedTechnology) {
    ObjBtnStatus.errorBtn = true;
  }
  if (applicationDistributionError || applicationCountApps) {
    ObjBtnStatus.errorBtn = true;
  }
  if (newDistributionArr.length == 0) {
    ObjBtnStatus.errorBtn = true;
  }

}

export const applicationTechnologyFormula = (props, newDistributionArr) => {
  return new Promise((resolve, reject) => {
    let ObjBtnStatus = {
      errorBtn: false,
      cheackBtn: false
    }

    //  let NoOfApplicationScopeValue = basicInfo['numberOfAppsInScope'];

    let userData = props.userInpuData.defaultInputData.response;
    let userInputData = userData['estimate']['userInputs'];


    errorApplication(newDistributionArr, ObjBtnStatus, userInputData);

    if (newDistributionArr.length !== 0) {


      let addedTechnology = newDistributionArr.every((ele) => ele['uiStatus']['iconStatus']['ok']);
      newDistributionArr.forEach((ele) => {
        // delete ele['id'];
        delete ele['isTechnologyTable'];
      })

      // // F10 Application Distribution
      userInputData['appTechnologyDistribution'] = {
        ...userInputData['appTechnologyDistribution'],
        "stdNonStdWorkStreams": newDistributionArr
      };
      if (addedTechnology) {
        let totalCOTSpercentage = 0;
        newDistributionArr.forEach((ele, index) => {
          if (ele['workStream'].toLowerCase().includes('COTS_ISV_Packages'.toLowerCase())) {
            totalCOTSpercentage = totalCOTSpercentage + Number(ele['appDistributionPercentage'])
          }
        });

        Automation_appScopeCoveredPercentage(props, userInputData)
        //adding in devscops commandoperation
        devscops_CommandCenterOperations(props, userInputData);
        devscops_DevOpsonPrem(props, userInputData);


        //adding cotsThirdPartyPercentageOfTotalApps (general)  C33
        userInputData['general']['cotsThirdPartyPercentageOfTotalApps']['simple'] = parseFloat(totalCOTSpercentage);
        general_cotsThirdPartyAppCountDistribution_C33(props, userInputData)
        //update application distribution 
        //calculateTicketDistributionPercentage
        props.calculateTicketDistributionPercentage(userInputData).then((res) => {
          if (res.status === 'SUCCESS') {
            //Now API output change feilds calculateTicketDistributionPercentage
            calculateTicketDistributionPercentageAndBaselineHoursForL2(props, userInputData, res.data);
            props.resetDashcalculateMinEnhWtHrs(userInputData).then((res) => {
              if (res.status === 'SUCCESS') {
                //Now API output change feilds calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs
                calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs(props, userInputData, res.data);
                input_validation_main(props, userInputData, ObjBtnStatus);
                let btnInput = btnFunction(ObjBtnStatus)
                props.userInputDataEditFormulaInfo(userInputData, btnInput);
                resolve('success')
              }
              else {
                if (res.errorCode === 'ERRCAS401B') {
                  props.history.push('/');
                } else {
                  alert(englishValue('TechnicalError'))
                }
                let btnInput = btnFunction(ObjBtnStatus)
                props.userInputDataEditFormulaInfo(userInputData, btnInput);
              }
            }).catch((err) => {
              alert(englishValue('TechnicalError'))
              let btnInput = btnFunction(ObjBtnStatus)
              props.userInputDataEditFormulaInfo(userInputData, btnInput);
            });
          }
          else {
            if (res.errorCode === 'ERRCAS401B') {
              props.history.push('/');
            } else {
              alert(englishValue('TechnicalError'))
            }
            let btnInput = btnFunction(ObjBtnStatus)
            props.userInputDataEditFormulaInfo(userInputData, btnInput);
          }
        }).catch((err) => {
          alert(englishValue('TechnicalError'))
          let btnInput = btnFunction(ObjBtnStatus)
          props.userInputDataEditFormulaInfo(userInputData, btnInput);
        });
      }
      else {
        let btnInput = btnFunction(ObjBtnStatus)
        props.userInputDataEditFormulaInfo(userInputData, btnInput);
      }
    }
    else {
      let btnInput = btnFunction(ObjBtnStatus)
      props.userInputDataEditFormulaInfo(userInputData, btnInput);
    }
  })
}