import * as actionTypes from "./ActionType";
import inputService from '../../services/InputService';
import { dispatch } from "d3-dispatch";

const userInputEstimateData = (userData) => {
  let inputData = {};
  inputData = {
    "ownerEmail": userData['ownerEmail'],
    "ownerName": userData['ownerName'],
    "reviewerEmail": userData['reviewerEmail'],
    "reviewerName": userData['reviewerName'],
    "state": userData['state']
  }
  return inputData;
}


const userInputbtnStatus = (userData) => {
  let inputBtnData = {};

  if ((userData.state === 'Approved') || (userData.state === 'InReview')) {
    inputBtnData = {
      RestButton: false, EstimateButton: true,
      SaveButton: false,
      CalculateButton: false,
      SendForReivewButton: false,
      Export: true,
      inputButton: true,
      outputButton: true,
      calculateModal: false,
      saveModal: false
    }
  } else {
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
  return inputBtnData;
}

const userInputbtnStatus2 = (userData) => {
  let inputBtnData = {};
  if (userData.state === 'New' && userData.saleStage === 'rom') {
    inputBtnData = {
      RestButton: false,
      EstimateButton: true,
      SaveButton: false,
      CalculateButton: false,
      SendForReivewButton: false,
      Export: true,
      inputButton: true,
      outputButton: true,
      calculateModal: false,
      saveModal: false

    }
  } else if (userData.state === 'New' && userData.saleStage !== 'rom') {
    inputBtnData = {
      RestButton: false,
      EstimateButton: true,
      SaveButton: false,
      CalculateButton: false,
      SendForReivewButton: true,
      Export: true,
      inputButton: true,
      outputButton: true,
      calculateModal: false,
      saveModal: false

    }
  } else if (userData.state === 'Rework') {
    inputBtnData = {
      RestButton: false,
      EstimateButton: true,
      SaveButton: false,
      CalculateButton: false,
      SendForReivewButton: false,
      Export: true,
      inputButton: true,
      outputButton: true,
      calculateModal: false,
      saveModal: false
    }
  } else if (userData.state === 'Approved') {
    inputBtnData = {
      RestButton: false, EstimateButton: true,
      SaveButton: false,
      CalculateButton: false,
      SendForReivewButton: false,
      Export: true,
      inputButton: true,
      outputButton: true,
      calculateModal: false,
      saveModal: false
    }
  } else if (userData.state === 'InReview') {
    inputBtnData = {
      RestButton: false, EstimateButton: true,
      SaveButton: false,
      CalculateButton: false,
      SendForReivewButton: false,
      Export: true,
      inputButton: true,
      outputButton: true,
      calculateModal: false,
      saveModal: false
    }
  }
  return inputBtnData;
}


const userInputbtnStatusNEW = (userData) => {
  let inputBtnData = {};
  if (userData.state === 'New' && userData.saleStage === 'rom') {
    inputBtnData = {
      RestButton: false,
      EstimateButton: true,
      SaveButton: false,
      CalculateButton: true,
      SendForReivewButton: false,
      Export: true,
      inputButton: true,
      outputButton: false,
      calculateModal: false,
      saveModal: false

    }
  } else if (userData.state === 'New' && userData.saleStage !== 'rom') {

    inputBtnData = {
      RestButton: false,
      EstimateButton: true,
      SaveButton: false,
      CalculateButton: true,
      SendForReivewButton: true,
      Export: true,
      inputButton: true,
      /* 
      Changing outputButton value from false to true to 
      make the intermediate and output section disable in 
      nav bar for new estimate. JIRA https://jsw.ibm.com/browse/CMIWET-617
      */
      outputButton: false,
      calculateModal: false,
      saveModal: false

    }
  }
  return inputBtnData;
}


const formulaInputData = (userData, title ,isTicketDistributionPercentageOverride) => {
  let inputData = {};
  let newArr = [];
  let isTicketDistributionPercentageOverrideRequired=isTicketDistributionPercentageOverride||false;
  newArr = userData['appTechnologyDistribution']['stdNonStdWorkStreams'];
  var newArrayDisttibution = newArr.filter((ele) => {
    if (ele.code != '-') {
      return ele
    }
  });
  newArrayDisttibution.forEach(ele => {
    delete ele['id'];
    delete ele['uiStatus']
  }
  );
  if (title === 'calculateTicketDistribution') {
    inputData = {
      "data": {
        "appTechnologyDistribution": {
          "isStandardEstimate": true,
          "stdNonStdWorkStreams": newArrayDisttibution
        },
        "general": {
          "monthlyTotalTicketsAssumed": {
            "total": Math.round(Number(userData['general']['monthlyTotalTicketsAssumed']['total']))
          },
          "approxNumberOfBatchJobsTicketsToSupport": {
            "total": Math.round(Number(userData['general']['approxNumberOfBatchJobsTicketsToSupport']['total'])),
          }
        },
        "skipTicketDistributionPercentageOverride": isTicketDistributionPercentageOverrideRequired
      }
    }
  } else if (title === 'BaselineTestingFTEs') {
    var newCloudapps = [];
    var cloudApparray = [...userData['clientCloudLandscape']['cloudAppsAndblendedEffortsDistributionPercentage']]
    newCloudapps = cloudApparray.map(ele => {
      return ({ "rowId": ele.rowId, "enabled": ele.enabled })
    })
    inputData = {
      "data": {
        "appTechnologyDistribution": {
          "isStandardEstimate": true,
          "stdNonStdWorkStreams": newArrayDisttibution
        },
        "general": {
          "monthlyTotalTicketsAssumed": {
            "total": Math.round(Number(userData['general']['monthlyTotalTicketsAssumed']['total']))
          },
          "approxNumberOfBatchJobsTicketsToSupport": {
            "total": Math.round(Number(userData['general']['approxNumberOfBatchJobsTicketsToSupport']['total'])),
          },
          "ticketDistributionPercentage": {
            "simple": Math.round(Number(userData['general']['ticketDistributionPercentage']['simple'])),
            "medium": Math.round(Number(userData['general']['ticketDistributionPercentage']['medium'])),
            "complex": Math.round(Number(userData['general']['ticketDistributionPercentage']['complex']))
          },
          "monthlyTotalandBatchJobsTickets": {
            "simple": Math.round(Number(userData['general']['monthlyTotalandBatchJobsTickets']['simple'])),
            "medium": Math.round(Number(userData['general']['monthlyTotalandBatchJobsTickets']['medium'])),
            "complex": Math.round(Number(userData['general']['monthlyTotalandBatchJobsTickets']['complex']))
          },
          "l1DistributionPercentage": {
            "total": parseFloat(userData['general']['l1DistributionPercentage']['total'])
          },
          "l2DistributionPercentage": {
            "total": parseFloat(userData['general']['l2DistributionPercentage']['total'])
          },
          "l3DistributionPercentage": {
            "total": parseFloat(userData['general']['l3DistributionPercentage']['total'])
          },
          "l4DistributionPercentage": {
            "total": parseFloat(userData['general']['l4DistributionPercentage']['total'])
          },
          "minorEnhDistributionPercentage": {
            "total": parseFloat(userData['general']['minorEnhDistributionPercentage']['total'])
          },
          "additionalADCapacityHrsDistributionPercentage": {
            "total": parseFloat(userData['general']['additionalADCapacityHrsDistributionPercentage']['total'])
          },
          "nonTicketingActivitiesUpliftDistributionPercentage": {
            "simple": Math.round(Number(userData['general']['nonTicketingActivitiesUpliftDistributionPercentage']['simple'])),
            "medium": Math.round(Number(userData['general']['nonTicketingActivitiesUpliftDistributionPercentage']['medium'])),
            "complex": Math.round(Number(userData['general']['nonTicketingActivitiesUpliftDistributionPercentage']['complex']))
          }
        },
        "ams": {
          "amsUtilizationCalculation": {
            "ibmWeightedUtilizationMonthlyHrs": Math.round(Number(userData['ams']['amsUtilizationCalculation']['ibmWeightedUtilizationMonthlyHrs']))
          },
          "ticketsDistribution": {

            "inScopeTicketVolumeMonthly": {
              "y1": Math.round(Number(userData['ams']['ticketsDistribution']['inScopeTicketVolumeMonthly']['y1']))
            },
            "inScopeL1DistributionPercentage": {
              "y1": Math.round(Number(userData['ams']['ticketsDistribution']['inScopeL1DistributionPercentage']['y1']))
            },
            "inScopeL2DistributionPercentage": {
              "y1": Math.round(Number(userData['ams']['ticketsDistribution']['inScopeL2DistributionPercentage']['y1']))
            },
            "inScopeL3DistributionPercentage": {
              "y1": Math.round(Number(userData['ams']['ticketsDistribution']['inScopeL3DistributionPercentage']['y1']))
            },
            "inScopeL4DistributionPercentage": {
              "y1": Math.round(Number(userData['ams']['ticketsDistribution']['inScopeL4DistributionPercentage']['y1']))
            },
            "inScopeMinorEnchDistributionPercentage": {
              "y1": Math.round(Number(userData['ams']['ticketsDistribution']['inScopeMinorEnchDistributionPercentage']['y1']))
            }
          }
        },
        "cloudAppOps": {
          "onCloudAppDistributionPercentage": {
            "total": parseFloat((userData['cloudAppOps']['onCloudAppDistributionPercentage']['total']))
          },
          "rehostedAppsOnCloudDistributionPercentage": {
            "total": parseFloat((userData['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['total']))
          },
          "replatformRefactorAppsOnCloudDistributionPercentage": {
            "total": parseFloat((userData['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['total']))
          },
          "reArchitectReBuildAppsOnCloudDistributionPercentage": {
            "total": parseFloat((userData['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['total']))
          },
          "saasAppsOnCloudDistributionPercentage": {
            "total": parseFloat((userData['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['total']))
          }
        },
        "clientCloudLandscape": {
          "cloudAppsAndblendedEffortsDistributionPercentage": newCloudapps
        },
        "testing": {
          "testingAdditionalFTECountDistribution": {
            "total": Math.round(Number(userData['testing']['testingAdditionalFTECountDistribution']['total']))
          }
        }
      }
    }
  }
  return inputData;
}

const CloudAppLandscapeData = (cloudData, LandscapeData) => {
  let newCloudapps = LandscapeData.map(ele => {
    return ({ "rowId": ele.rowId, "enabled": ele.enabled })
  })
  let inputData = {
    "data": {

      "cloudAppOps": {
        "rehostedAppsOnCloudDistributionPercentage": {
          "total": parseFloat((cloudData['rehostedAppsOnCloudDistributionPercentage']['total']))
        },
        "replatformRefactorAppsOnCloudDistributionPercentage": {
          "total": parseFloat((cloudData['replatformRefactorAppsOnCloudDistributionPercentage']['total']))
        },
        "reArchitectReBuildAppsOnCloudDistributionPercentage": {
          "total": parseFloat((cloudData['reArchitectReBuildAppsOnCloudDistributionPercentage']['total']))
        },
        "saasAppsOnCloudDistributionPercentage": {
          "total": parseFloat((cloudData['saasAppsOnCloudDistributionPercentage']['total']))
        }
      },
      "clientCloudLandscape": {
        "cloudAppsAndblendedEffortsDistributionPercentage": newCloudapps
      }
    }
  }
  return inputData;
}
export const actionCreators = {
  userDefaultDataDropEdit: () => async (dispatch, GetState) => {
    try {
      let empdropDownEdit = await inputService.userDataDropDown();
      if (empdropDownEdit.data.status === 'SUCCESS') {
        dispatch({ type: actionTypes.USER_DEFAULT_DROP_DATA_EDIT, data: empdropDownEdit.data });
        return { status: 'SUCCESS' }
      }
      else {
        dispatch({
          type: actionTypes.USER_DEFAULT_DROP_DATA_ERROR, data: {
            errorMessage: empdropDownEdit.data.errors[0].message,
            errorStatus: empdropDownEdit.data.status
          }
        });
        return {
          errorMessage: empdropDownEdit.data.errors[0].message,
          errorCode: empdropDownEdit.data.errors[0].code,
          status: 'ERROR'
        }
      }

    } catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      dispatch({
        type: actionTypes.USER_DEFAULT_DROP_DATA_ERROR, data: {
          errorMessage: err.message,
          errorCode: errorCodeNo,
          errorStatus: 'ERROR'
        }
      });
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },
  userLoginAuthorization: (TokenAcess) => async (dispatch, GetState) => {
    try {
      let empLogin = await inputService.userLoginData(TokenAcess);
      let empLoginData = await empLogin.json();
      dispatch({ type: actionTypes.USER_LOGIN_DATA, data: empLoginData });
      return empLoginData;

    } catch (err) {
      dispatch({
        type: actionTypes.USER_DEFAULT_DROP_DATA_ERROR, data: {
          errorMessage: err.message,
          errorStatus: 'ERROR'
        }
      });
      return {
        errorMessage: err.message,
        status: 'ERROR'
      }
    }
  },


  userOutputDataEdit: (InputData) => async (dispatch, GetState) => {
    try {

      let outputDataEdit = await inputService.addOutputData(InputData);
      console.log(outputDataEdit)
      if (outputDataEdit.data.status === 'SUCCESS') {
        dispatch({ type: actionTypes.USER_DEFAULT_OUTPUT_DATA_EDIT, data: outputDataEdit.data });
        //waiting for API deployment backend
        let idsaved = outputDataEdit.data.response['_id'];
        let revid = outputDataEdit.data.response['_rev'];
        let estimateData = await inputService.getSavedEstimate(idsaved);
        dispatch({ type: actionTypes.USER_DEFAULT_INPUT_DATA_EDIT_SAVE, data: {idsaved,revid} });
        dispatch({ type: actionTypes.USER_SAVED_DATA_ESTIMATE, data: estimateData.data });
        return {
          status: 'SUCCESS',
          data: outputDataEdit.data
        }
      }
      else {
        return {
          errorMessage: outputDataEdit.data.errors[0].message,
          errorCode: outputDataEdit.data.errors[0].code,
          status: 'ERROR'
        }
      }

    } catch (err) {
      if (err.response.data.status === "ERROR") {
        //Migration Flow
        return {
          errorMessage: err.response.data.errors[0].message,
          errorCode: err.response.data.errors[0].code,
          status: 'ERROR',
          messageAlert: 'MIGRATION'
        }
      } else {
        return {
          errorMessage: 'error',
        }
      }

    }
  },

  userOutputDataSave: (InputData) => async (dispatch, GetState) => {
    try {
      let outputDataSave = await inputService.addOutputDataSave(InputData);
      if (outputDataSave.data.status === 'SUCCESS') {
        let idsaved = outputDataSave.data.response['_id'];
        let estimateData = await inputService.getSavedEstimate(idsaved);
        dispatch({ type: actionTypes.USER_DEFAULT_INPUT_DATA_EDIT_SAVE, data: idsaved });
        dispatch({ type: actionTypes.USER_SAVED_DATA_ESTIMATE, data: estimateData.data });
        return { status: 'SUCCESS', recalculate: outputDataSave.data.response.isRecalculationPerformed }
      }
      else {
        return {
          errorMessage: outputDataSave.data.errors[0].message,
          errorCode: outputDataSave.data.errors[0].code,
          status: 'ERROR'
        }
      }

    } catch (err) {
      if (err.response.data.status === "ERROR") {
        //Migration Flow
        return {
          errorMessage: err.response.data.errors[0].message,
          errorCode: err.response.data.errors[0].code,
          status: 'ERROR',
          messageAlert: 'MIGRATION'
        }
      } else {
        return {
          errorMessage: 'error',
        }
      }

    }
  },
  userfetchDataForOpptNo: (InputData) => async (dispatch, GetState) => {
    try {
      let Fetchdata = await inputService.fetchDataForOpptNo(InputData);
      if (Fetchdata.data.status === 'SUCCESS') {

        return { status: 'SUCCESS', data: Fetchdata.data.response }
      }
      else {
        return {
          errorMessage: Fetchdata.data.errors[0].message,
          errorCode: Fetchdata.data.errors[0].code,
          status: 'ERROR'
        }
      }

    } catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },



  userMyEstimateDataDelete: (deleteId) => async (dispatch, GetState) => {
    try {
      var myEstimateDataDeleted = await inputService.deleteData(deleteId);

      if (myEstimateDataDeleted.data.status === 'SUCCESS') {

        return { status: 'SUCCESS' }
      }
      else {
        return {
          errorMessage: myEstimateDataDeleted.data.errors[0].message,
          errorCode: myEstimateDataDeleted.data.errors[0].code,
          status: 'ERROR'
        }
      }

    } catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }

    }
  },
  userMyEstimateData: (InputData) => async (dispatch, GetState) => {
    try {
      var myEstimateData = await inputService.getDashBoardData(InputData);
      dispatch({ type: actionTypes.USER_DASHBOARD_DATA, data: myEstimateData.data.response });
      if (myEstimateData.data.status === 'SUCCESS') {
        dispatch({ type: actionTypes.USER_DEFAULT_OUTPUT_MYESTIMATE_DATA, data: myEstimateData.data });
        return { status: 'SUCCESS' }
      }
      else {
        return {
          errorMessage: myEstimateData.data.errors[0].message,
          errorCode: myEstimateData.data.errors[0].code,
          status: 'ERROR'
        }
      }

    } catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }

    }
  },
  cancelhandlerModal: () => async (dispatch, GetState) => {
    try {
      dispatch({ type: actionTypes.USER_DEFAULT_OUTPUT_MYESTIMATE_DATA });
    } catch (err) {

    }
  },

  userInputDataEditFormula: (dataUser, dataTypeUser, btnStatus) => async (dispatch, GetState) => {
    try {
      dispatch({ type: actionTypes.USER_DEFAULT_STATUS_DATA, data: btnStatus });
      dispatch({
        type: actionTypes.USER_DEFAULT_INPUT_DATA_FORMULA,
        data: {
          [dataTypeUser]: dataUser,
          key: dataTypeUser
        }
      });
    } catch (err) {

    }
  },
  updateUserInputFields: (dataUser, dataTypeUser, btnStatus) => async (dispatch, GetState) => {
    try {
      if (btnStatus) {
        dispatch({ type: actionTypes.USER_DEFAULT_STATUS_DATA, data: btnStatus });
      }
      dispatch({
        type: actionTypes.UPDATE_USER_INPUT_FIELDS,
        payload: {
          data: dataUser,
          key: dataTypeUser
        }
      });
    } catch (err) {

    }
  },
  userInputDataEditFormulaInfo: (userInputData, btnStatus) => async (dispatch, GetState) => {
    try {
      dispatch({
        type: actionTypes.USER_DEFAULT_INPUT_DATA_FORMULA_USERINPUT, data: userInputData
      });
      dispatch({ type: actionTypes.USER_DEFAULT_STATUS_DATA, data: btnStatus });
    } catch (err) {

    }
  },


  sendForReviewEstimateData: (reviewerData, InputData) => async (dispatch, GetState) => {
    try {
      let sendForReviewData = await inputService.sendForReviewData(reviewerData);
      if (sendForReviewData.data.status === 'SUCCESS') {
        var myEstimateData = await inputService.getDashBoardData(InputData);
        if (myEstimateData.data.status === 'SUCCESS') {
          dispatch({ type: actionTypes.USER_DASHBOARD_DATA, data: myEstimateData.data.response });
          dispatch({ type: actionTypes.USER_DEFAULT_OUTPUT_MYESTIMATE_DATA });
         dispatch({ type: actionTypes.USER_DEFAULT_INPUT_STATUS_REVID_EDIT_SAVE, data: {status:sendForReviewData.data.response.state,revid:sendForReviewData.data.response['_rev']} });
          return { status: 'SUCCESS', recalculate: sendForReviewData.data.response.isRecalculationPerformed }
        }
        else {
          return {
            errorMessage: sendForReviewData.data.errors[0].message,
            status: 'ERROR'
          }
        }

      }
      else {
        return {
          errorMessage: sendForReviewData.data.errors[0].message,
          errorCode: sendForReviewData.data.errors[0].code,
          status: 'ERROR'
        }
      }


    } catch (err) {
      if (err.response.data.status === "ERROR") {
        //Migration Flow
        return {
          errorMessage: err.response.data.errors[0].message,
          errorCode: err.response.data.errors[0].code,
          status: 'ERROR',
          messageAlert: 'MIGRATION'
        }
      } else {
        return {
          errorMessage: 'error',
        }
      }

    }
  },





  userInputDataInitial: () => async (dispatch, GetState) => {
    try {
      let res = await inputService.userInputDataInitial();
      dispatch({ type: actionTypes.USER_DEFAULT_INPUT_DATA, data: res });
    } catch (err) {

    }
  },
  userInputDataEditData: (userData) => async (dispatch, GetState) => {
    try {
      let empInputData = await inputService.addInputData(userData);
      if (empInputData.data.status === "ERROR") {
        return {
          errorMessage: empInputData.data.errors[0].message,
          errorCode: empInputData.data.errors[0].code,
          status: 'ERROR'
        }
      } else {
        let deepCopy = JSON.stringify(empInputData.data);
        //for IBMWeightedUtiliaztiondata
        // var formulaData = await inputService.WeightedUtilizationInHours();

        // for calculateTicketDistributionPercentageAndBaselineHoursForL2
        let InputData = formulaInputData(empInputData.data['response']['estimate']['userInputs'], 'calculateTicketDistribution')
        var formulaCalculate = await inputService.calculateTicketDistributionPercentageAndBaselineHoursForL2(InputData);
        // for calculateMinEnhWtHrsAndAdhocActivityWtPercentageAndYearOneBaselineTestingFTEs
        let inputDataFTE = formulaInputData(empInputData.data['response']['estimate']['userInputs'], 'BaselineTestingFTEs')
        var formulaDataFTE = await inputService.calculateMinEnhWtHrsAndAdhocActivityWtPercentageAndYearOneBaselineTestingFTEs(inputDataFTE);
        //adding state to new reducer
        var NonLabourData = await inputService.nonLaborCostStub();
        let inputStateData = userInputEstimateData(empInputData.data['response']['estimate']);
        if (empInputData.data.status === 'SUCCESS') {
          let deepCopyData = JSON.parse(deepCopy);
          //for updating inputdata reducer with values
          dispatch({ type: actionTypes.USER_DEFAULT_INPUT_DATA_EDIT, data: deepCopyData });
          //for deleting nitial outputdata
          dispatch({ type: actionTypes.USER_DEFAULT_OUTPUT_DELETE });
          dispatch({ type: actionTypes.USER_ESTIMATE_STATE_DATA, data: inputStateData });
          dispatch({ type: actionTypes.USER_INPUT_NON_LABOUR_STUB, data: NonLabourData.data });
          if (formulaCalculate.data.status === 'SUCCESS' && formulaDataFTE.data.status === 'SUCCESS') {
            // dispatch({ type: actionTypes.WEIGHTED_UTILIZATION_HOURS, data: formulaData.data.response });
            dispatch({ type: actionTypes.CALCULATE_TICKET_PERCENTAGE, data: formulaCalculate.data.response });
            dispatch({ type: actionTypes.YEAR_BASELINE_TESTING, data: formulaDataFTE.data.response });
            let btnStatus = userInputbtnStatusNEW(empInputData.data['response']['estimate']);
            dispatch({ type: actionTypes.USER_DEFAULT_STATUS_DATA, data: btnStatus });
            return { status: 'SUCCESS', data: deepCopyData }
          }
          return { status: 'SUCCESS', data: deepCopyData }
        }
        else {
          dispatch({
            type: actionTypes.USER_DEFAULT_INPUT_DATA_ERROR, data: {
              errorMessage: empInputData.data.errors[0].message,
              errorStatus: empInputData.data.status
            }
          });
          //for estimte modal to close 
          dispatch({
            type: actionTypes.USER_DEFAULT_DROP_DATA_INPUT_ERROR, data: {
              errorMessage: empInputData.data.errors[0].message,
              errorStatus: 'ERROR'
            }
          });
          return {
            errorMessage: empInputData.data.errors[0].message,
            status: 'ERROR'
          }
        }
      }

    } catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      //for updating inputdata reducer with error
      dispatch({
        type: actionTypes.USER_DEFAULT_INPUT_DATA_ERROR, data: {
          errorMessage: err.message,
          errorCode: errorCodeNo,
          errorStatus: 'ERROR'
        }
      });
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },
  userInputData: () => async (dispatch, GetState) => {
    try {
      let res = await inputService.userDataIntial();
      dispatch({ type: actionTypes.USER_INPUT_DATA, data: res });
    } catch (err) {

    }
  },

  getUserData: () => async (dispatch, GetState) => {
    try {
      let userData = {
        "data": {
          "estimationBasicDetails": {
            "estimationTitle": "Estimate For ABB",
            "opportunityId": "oppIdFromAtlas1",
            "opportunityName": "Healthcare-ABB",
            "opportunityShortDesc": "Healthcare clinet from Europ wants IBM to provide IT solution and future roadmap.",
            "clientName": "ABB",
            "saleStage": "rfp",
            "industry": "industry6",
            "ownerEmail": "abc@in.ibm.com",
            "ownerName": "Mr. Don Jo"
          }
        }
      };
      var empdropDown = await inputService.userDataDropDown();
      var empInputData = await inputService.addInputData(userData);

      var arr = [empdropDown.data, empInputData.data];
      dispatch({ type: actionTypes.USER_INPUT_DATA, data: arr });
      return arr;
    }
    catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },

  dropDownNewEstimate: (userData) => async (dispatch, GetState) => {
    try {
      var empdropDown = await inputService.userDataDropDown();

      dispatch({ type: actionTypes.USER_INPUT_DATA_EDIT_DROPDOWN, data: empdropDown.data });
    }
    catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },

  postNewEstimate: (userData) => async (dispatch, GetState) => {
    try {
      var empInputData = await inputService.addInputData(userData);
      dispatch({ type: actionTypes.USER_INPUT_DATA_EDIT_INPUT, data: empInputData.data });
    }
    catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },

  userInputDataEdit: (EditData) => async (dispatch, GetState) => {
    try {
      dispatch({ type: actionTypes.USER_INPUT_DATA_EDIT, data: EditData });
    } catch (err) {

    }
  },
  // Step 2 for Migration call all APIs and go to detail screen
  getSavedEstimateMigrationFlow: (estimateId) => async (dispatch, GetState) => {
    try {

      var estimateData = await inputService.getestimateForMigrationById(estimateId);
      // Call new API except this
      let empdropDownEdit = await inputService.userDataDropDown();
      let deepCopyEstimate = JSON.stringify(estimateData.data);
      //for IBMWeightedUtiliaztiondata
      // var formulaData = await inputService.WeightedUtilizationInHours();
      // dispatch({ type: actionTypes.WEIGHTED_UTILIZATION_HOURS, data: formulaData.data.response });
      // for calculateTicketDistributionPercentageAndBaselineHoursForL2
      let InputData = formulaInputData(estimateData.data['response']['estimate']['userInputs'], 'calculateTicketDistribution')
      var formulaCalculate = await inputService.calculateTicketDistributionPercentageAndBaselineHoursForL2(InputData);
      //adding state to new reducer
      var NonLabourData = await inputService.nonLaborCostStub();
      dispatch({ type: actionTypes.CALCULATE_TICKET_PERCENTAGE, data: formulaCalculate.data.response });
      // for calculateMinEnhWtHrsAndAdhocActivityWtPercentageAndYearOneBaselineTestingFTEs
      let inputDataFTE = formulaInputData(estimateData.data['response']['estimate']['userInputs'], 'BaselineTestingFTEs')
      var formulaDataFTE = await inputService.calculateMinEnhWtHrsAndAdhocActivityWtPercentageAndYearOneBaselineTestingFTEs(inputDataFTE);
      let deepCopyDATA = JSON.parse(deepCopyEstimate)
      dispatch({ type: actionTypes.YEAR_BASELINE_TESTING, data: formulaDataFTE.data.response });
      dispatch({ type: actionTypes.USER_DEFAULT_INPUT_DATA_ESTIMATEID, data: deepCopyDATA });
      dispatch({ type: actionTypes.USER_DEFAULT_DROP_DATA_EDIT, data: empdropDownEdit.data });
      dispatch({ type: actionTypes.USER_DEFAULT_OUTPUT_DATA_ESTIMATEID, data: estimateData.data });
      dispatch({ type: actionTypes.USER_DEFAULT_OUTPUT_MYESTIMATE_DATA });
      dispatch({ type: actionTypes.USER_SAVED_DATA_ESTIMATE, data: estimateData.data });
      dispatch({ type: actionTypes.USER_INPUT_NON_LABOUR_STUB, data: NonLabourData.data });
      let inputStateData = userInputEstimateData(estimateData.data['response']['estimate']);
      dispatch({ type: actionTypes.USER_ESTIMATE_STATE_DATA, data: inputStateData });
      let btnStatus = userInputbtnStatus2(estimateData.data['response']['estimate']);
      dispatch({ type: actionTypes.USER_DEFAULT_STATUS_DATA, data: btnStatus });
      return {
        status: 'SUCCESS', data: {
          dropdowndata: empdropDownEdit.data,
          inputData: deepCopyDATA,
          ticketDistribution: formulaCalculate.data.response,
          labourData: NonLabourData.data,
          calculateMinEnhWtHrs: formulaDataFTE.data.response
        }
      }
    } catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },
  // Step 2 for recalculation call all APIs and go to detail screen
  getSavedEstimate: (estimateId, estimateData) => async (dispatch, GetState) => {
    try {
      let empdropDownEdit = await inputService.userDataDropDown();
      // var estimateData = await inputService.getSavedEstimate(estimateId);
      let deepCopyEstimate = JSON.stringify(estimateData.data);
      //for IBMWeightedUtiliaztiondata
      // var formulaData = await inputService.WeightedUtilizationInHours();
      // dispatch({ type: actionTypes.WEIGHTED_UTILIZATION_HOURS, data: formulaData.data.response });
      // for calculateTicketDistributionPercentageAndBaselineHoursForL2
      let InputData = formulaInputData(estimateData.data['response']['estimate']['userInputs'], 'calculateTicketDistribution')
      var formulaCalculate = await inputService.calculateTicketDistributionPercentageAndBaselineHoursForL2(InputData);
      //adding state to new reducer
      var NonLabourData = await inputService.nonLaborCostStub();
      dispatch({ type: actionTypes.CALCULATE_TICKET_PERCENTAGE, data: formulaCalculate.data.response });
      // for calculateMinEnhWtHrsAndAdhocActivityWtPercentageAndYearOneBaselineTestingFTEs
      let inputDataFTE = formulaInputData(estimateData.data['response']['estimate']['userInputs'], 'BaselineTestingFTEs')
      var formulaDataFTE = await inputService.calculateMinEnhWtHrsAndAdhocActivityWtPercentageAndYearOneBaselineTestingFTEs(inputDataFTE);
      let deepCopyDATA = JSON.parse(deepCopyEstimate)
      dispatch({ type: actionTypes.YEAR_BASELINE_TESTING, data: formulaDataFTE.data.response });
      dispatch({ type: actionTypes.USER_DEFAULT_INPUT_DATA_ESTIMATEID, data: deepCopyDATA });
      dispatch({ type: actionTypes.USER_DEFAULT_DROP_DATA_EDIT, data: empdropDownEdit.data });
      dispatch({ type: actionTypes.USER_DEFAULT_OUTPUT_DATA_ESTIMATEID, data: estimateData.data });
      dispatch({ type: actionTypes.USER_DEFAULT_OUTPUT_MYESTIMATE_DATA });
      dispatch({ type: actionTypes.USER_SAVED_DATA_ESTIMATE, data: estimateData.data });
      dispatch({ type: actionTypes.USER_INPUT_NON_LABOUR_STUB, data: NonLabourData.data });
      let inputStateData = userInputEstimateData(estimateData.data['response']['estimate']);
      dispatch({ type: actionTypes.USER_ESTIMATE_STATE_DATA, data: inputStateData });
      let btnStatus = userInputbtnStatus2(estimateData.data['response']['estimate']);
      dispatch({ type: actionTypes.USER_DEFAULT_STATUS_DATA, data: btnStatus });
      return {
        status: 'SUCCESS', data: {
          dropdowndata: empdropDownEdit.data,
          inputData: deepCopyDATA,
          ticketDistribution: formulaCalculate.data.response,
          labourData: NonLabourData.data,
          calculateMinEnhWtHrs: formulaDataFTE.data.response
        }
      }
    } catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },
  // Step 1 estimateid fetch and get the migration/recalculate/normal flow
  getSavedEstimateMigration: (estimateId) => async (dispatch, GetState) => {
    try {
      var estimateData = await inputService.getSavedEstimate(estimateId);
      if (estimateData.data.response.isRecalculationPerformed) {
        //Recalculation Flow
        return { messageAlert: "Recalculation", estimateData }
      } else {
        // Normal Flow
        return { messageAlert: "Normal Flow", estimateData }
      }
    } catch (err) {
      if (err.response.data.status === "ERROR") {
        //Migration Flow
        return {
          errorMessage: err.response.data.errors[0].message,
          errorCode: err.response.data.errors[0].code,
          status: 'ERROR',
          messageAlert: 'MIGRATION'
        }
      } else {
        return {
          errorMessage: 'error',
        }
      }

    }
  },
  //Reset Button
  getSavedEstimateReset: (estimateId) => async (dispatch, GetState) => {
    try {
      let empdropDownEdit = await inputService.userDataDropDown();
      var estimateData = await inputService.getSavedEstimate(estimateId);
      let deepCopyEstimate = JSON.stringify(estimateData.data);
      //for IBMWeightedUtiliaztiondata
      // var formulaData = await inputService.WeightedUtilizationInHours();
      // dispatch({ type: actionTypes.WEIGHTED_UTILIZATION_HOURS, data: formulaData.data.response });
      // for calculateTicketDistributionPercentageAndBaselineHoursForL2
      let InputData = formulaInputData(estimateData.data['response']['estimate']['userInputs'], 'calculateTicketDistribution')
      var formulaCalculate = await inputService.calculateTicketDistributionPercentageAndBaselineHoursForL2(InputData);
      //adding state to new reducer
      var NonLabourData = await inputService.nonLaborCostStub();
      dispatch({ type: actionTypes.CALCULATE_TICKET_PERCENTAGE, data: formulaCalculate.data.response });
      // for calculateMinEnhWtHrsAndAdhocActivityWtPercentageAndYearOneBaselineTestingFTEs
      let inputDataFTE = formulaInputData(estimateData.data['response']['estimate']['userInputs'], 'BaselineTestingFTEs')
      var formulaDataFTE = await inputService.calculateMinEnhWtHrsAndAdhocActivityWtPercentageAndYearOneBaselineTestingFTEs(inputDataFTE);
      let deepCopyDATA = JSON.parse(deepCopyEstimate)
      dispatch({ type: actionTypes.YEAR_BASELINE_TESTING, data: formulaDataFTE.data.response });
      dispatch({ type: actionTypes.USER_DEFAULT_INPUT_DATA_ESTIMATEID, data: deepCopyDATA });
      dispatch({ type: actionTypes.USER_DEFAULT_DROP_DATA_EDIT, data: empdropDownEdit.data });
      dispatch({ type: actionTypes.USER_DEFAULT_OUTPUT_DATA_ESTIMATEID, data: estimateData.data });
      dispatch({ type: actionTypes.USER_DEFAULT_OUTPUT_MYESTIMATE_DATA });
      dispatch({ type: actionTypes.USER_SAVED_DATA_ESTIMATE, data: estimateData.data });
      dispatch({ type: actionTypes.USER_INPUT_NON_LABOUR_STUB, data: NonLabourData.data });
      let inputStateData = userInputEstimateData(estimateData.data['response']['estimate']);
      dispatch({ type: actionTypes.USER_ESTIMATE_STATE_DATA, data: inputStateData });
      let btnStatus = userInputbtnStatus2(estimateData.data['response']['estimate']);
      dispatch({ type: actionTypes.USER_DEFAULT_STATUS_DATA, data: btnStatus });
      return {
        status: 'SUCCESS', data: {
          dropdowndata: empdropDownEdit.data,
          inputData: deepCopyDATA,
          ticketDistribution: formulaCalculate.data.response,
          labourData: NonLabourData.data,
          calculateMinEnhWtHrs: formulaDataFTE.data.response
        }
      }
    } catch (err) {
      if (err.response.data.status === "ERROR") {
        //Migration Flow
        return {
          errorMessage: err.response.data.errors[0].message,
          errorCode: err.response.data.errors[0].code,
          status: 'ERROR',
          messageAlert: 'MIGRATION'
        }
      } else {
        return {
          errorMessage: 'error',
        }
      }

    }
  },

  getDashBoardData: (userData) => async (dispatch, GetState) => {
    try {
      var dashboardData = await inputService.getDashBoardData(userData);
      dispatch({ type: actionTypes.USER_DASHBOARD_DATA, data: dashboardData.data.response });
      console.log(dashboardData)
     // return {status: 'SUCCESS'}
       return { status: 'SUCCESS', isMaintenancePlanned: dashboardData.data.response.isMaintenancePlanned,maintenanceMessage:dashboardData.data.response.maintenanceMessage }
    } catch (err) {

      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },
  // feedback Action creator
  
  sendFeedback: (Feedbackdata) => async (dispatch, GetState) => {
    try {
     // API call for feedback DATA  -1)
      let FeedbackRes = await inputService.Feedbackdata(Feedbackdata);
     
     //dispatch -- 2
     //dispatch({ type: actionTypes.USER_DASHBOARD_DATA, data: dashboardData.data.response });
     
      return {status: 'SUCCESS'}
    } catch (err) {

      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },
  showScreenLoader: (key) => (dispatch, GetState) => {
    let obj = { flag: true, labelName: key };
    dispatch({ type: actionTypes.SCREEN_LOADER_SHOW, data: obj });
  },
  hideScreenLoader: (key) => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SCREEN_LOADER_HIDE, data: false });
  },
  showScreenDashLoader: (key) => (dispatch, GetState) => {
    let obj = { flag: true, labelName: key };
    dispatch({ type: actionTypes.SCREEN_LOADER_SHOW_DASH, data: obj });
  },
  hideScreenDashLoader: (key) => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SCREEN_LOADER_HIDE_DASH, data: false });
  },
  showScreenDashLoaderMigration: (key) => (dispatch, GetState) => {
    let obj = { flag: true, labelName: key };
    dispatch({ type: actionTypes.SCREEN_LOADER_SHOW_DASH_MIGRATION, data: obj });
  },
  hideScreenDashLoaderMigration: (key) => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SCREEN_LOADER_HIDE_DASH_MIGRATION, data: false });
  },
  showScreenPopupVersion: (key, status, ownerEmail) => (dispatch, GetState) => {
    let obj = { flagVersion: true, labelNameVersion: key, labelVersionStatus: status, ownerEmail: ownerEmail };
    dispatch({ type: actionTypes.SCREEN_POPUP_SHOW, data: obj });
  },
  ///////pdf approved dashboard
  setApprovalflow: (key, status,) => (dispatch, GetState) => {
    let obj = { flagVersion: true, labelNameVersion: key, labelVersionStatus: status, ownerEmail: " " };
    dispatch({ type: actionTypes.SCREEN_POPUP_SHOW, data: obj });
  },
  ///pdfdahboad

  hideScreenPopupVersion: (key) => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SCREEN_POPUP_HIDE, data: false });
  },
  showReviewerPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.REVIEWER_POPUP_SHOW, data: true });
  },
  hideReviewerPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.REVIEWER_POPUP_HIDE, data: true });
  },
  //  generate staffing popup
  showGeneratestaffingPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.STAFFING_POPUP_SHOW, data: true });
  },
  hideGeneratestaffingPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.STAFFING_POPUP_HIDE, data: true });
  },


  // Migration popup
  showMigrationPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.MIGRATION_POPUP_SHOW, data: true });
  },
  hideMigrationPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.MIGRATION_POPUP_HIDE, data: true });
  },
  // migration button popup
  showButtonMigrationPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.MIGRATIONBUTTON_POPUP_SHOW, data: true });
  },
  hideButtonMigrationPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.MIGRATIONBUTTON_POPUP_HIDE, data: true });
  },

  // Approve button for migration flow
  showButtonMigrationPopupApprovebtn: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.MIGRATIONAPPROVEBUTTON_POPUP_SHOW, data: true });
  },
  hideButtonMigrationPopupApproveBtn: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.MIGRATIONAPPROVEBUTTON_POPUP_HIDE, data: true });
  },

  // Reviewerpopup
  showReviewerSucessPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.REVIEWER_SUCESS_POPUP_SHOW, data: true });
  },
  hideReviewerSucessPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.REVIEWER_SUCESS_POPUP_HIDE, data: true });
  },
  showSentForReworkPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SENT_FOR_REWORK_POPUP_SHOW, data: true });
  },
  hideSentForReworkPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SENT_FOR_REWORK_POPUP_HIDE, data: true });
  },
  showSendForApprovalPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SEND_FOR_APPROVAL_POPUP_SHOW, data: true });
  },
  hideSendForApprovalPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SEND_FOR_APPROVAL_POPUP_HIDE, data: true });
  },
  // review Modal show popup in send for rework
  showSendForReworkModal: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SEND_FOR_REWORK_MODAL_SHOW, data: true });
  },
  hideSendForReworkModal: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SEND_FOR_REWORK_MODAL_HIDE, data: true });
  },
  //pdfpopup
  showSendForPDFApprovalPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SEND_FOR_PDFAPPROVAL_POPUP_SHOW, data: true });
  },
  hideSendForPDFApprovalPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SEND_FOR_PDFAPPROVAL_POPUP_HIDE, data: true });
  },

  //pfdopop

  showSendForApprovalSuccessPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SEND_FOR_APPROVAL_SUCESS_POPUP_SHOW, data: true });
  },
  hideSendForApprovalSuccessPopup: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.SEND_FOR_APPROVAL_SUCESS_POPUP_HIDE, data: true });
  }
  ,
  fetchAllActiveReviewers: (mailId) => async (dispatch, GetState) => {
    try {
      let userData = {
        "data": {
          "userInfo": {
            "email": mailId
          }
        }
      }
      var reviewerData = await inputService.fetchAllActiveReviewers(userData);
      dispatch({ type: actionTypes.USER_REVIEWER_DATA, data: reviewerData.data.response.users });
      return {
        status: 'SUCCESS',
        data: reviewerData.data.response.users
      }
    } catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },
  sendForRework: (estimateData) => async (dispatch, GetState) => {
    try {

      var reviewerData = await inputService.sendForRework(estimateData);
      dispatch({ type: actionTypes.USER_DEFAULT_INPUT_STATUS_REVID_REWORK_SAVE, data: {revid:reviewerData.data.response['_rev']} });
      return { status: 'SUCCESS' }
    } catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },

  ///pdfdashboarddata--- used for the pdf data on dashboard



  usergetpdfdashboarddata: (estimateId) => async (dispatch, GetState) => {
    try {
      let empdropDownEdit = await inputService.userDataDropDown();
      var reviewerData = await inputService.getpdfdashboarddata(estimateId);
      let userpdfdata = JSON.stringify(reviewerData.data);
      let deepCopyDATA = JSON.parse(userpdfdata)
      dispatch({ type: actionTypes.USER_DEFAULT_INPUT_DATA_ESTIMATEID, data: deepCopyDATA });
      dispatch({ type: actionTypes.USER_DEFAULT_DROP_DATA, data: empdropDownEdit.data });
      dispatch({ type: actionTypes.USER_DEFAULT_OUTPUT_DATA_ESTIMATEID, data: reviewerData.data });
      dispatch({ type: actionTypes.USER_DEFAULT_OUTPUT_MYESTIMATE_DATA });
      dispatch({ type: actionTypes.USER_SAVED_DATA_ESTIMATE, data: reviewerData.data });
      // dispatch({ type: actionTypes.USER_REVIEWER_DATA, data: reviewerData.data.response.users });
      return {
        status: 'SUCCESS', data: {
          dropdowndata: empdropDownEdit.data,
          inputData: deepCopyDATA
        }
      }
    } catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },


  //pdfdashboaddata
  sendToApprove: (estimateData) => async (dispatch, GetState) => {
    try {

      var approvalDetail = await inputService.sendForApprove(estimateData);
      dispatch({ type: actionTypes.USER_APPROVAL_DATA, data: approvalDetail });
     dispatch({ type: actionTypes.USER_DEFAULT_INPUT_STATUS_REVID_EDIT_SAVE, data: {status:approvalDetail.data.response.state,revid:approvalDetail.data.response['_rev']} });
      return { status: 'SUCCESS', reclaulate: approvalDetail.data.response.isRecalculationPerformed }
    } catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },
  resetDashBoard: () => async (dispatch, GetState) => {
    try {
      dispatch({ type: actionTypes.USER_DASHBOARD_DATA_RESET, data: "" });
    } catch (err) {
      return { status: 'ERROR', err: err }
    }

  },
  userinputStatus: (userStatus) => (dispatch, GetState) => {
    dispatch({ type: actionTypes.USER_DEFAULT_STATUS_DATA, data: userStatus });
  },
  // WeightedUtilizationInHrs: () => async (dispatch, GetState) => {
  //   try {
  //     //for IBMWeightedUtiliaztiondata
  //     var formulaData = await inputService.WeightedUtilizationInHours();
  //     if (formulaData.data.status === 'SUCCESS') {
  //       dispatch({ type: actionTypes.WEIGHTED_UTILIZATION_HOURS, data: formulaData.data.response });
  //       return { status: 'SUCCESS' }
  //     }
  //     else {
  //       return {
  //         errorMessage: formulaData.data.errors[0].message,
  //         status: 'ERROR'
  //       }
  //     }

  //   } catch (err) {

  //     return { status: 'ERROR', err: err }
  //   }

  // },
  calculateTicketDistributionPercentage: (inputData,isTicketDistributionPercentageOverride) => async (dispatch, GetState) => {
    try {
      let deepCopy = JSON.stringify(inputData);
      let dataFormula = JSON.parse(deepCopy)
      // for calculateTicketDistributionPercentageAndBaselineHoursForL2
      let dataInput = formulaInputData(dataFormula, 'calculateTicketDistribution',isTicketDistributionPercentageOverride);
      var formulaCalculate = await inputService.calculateTicketDistributionPercentageAndBaselineHoursForL2(dataInput);

      if (formulaCalculate.data.status === 'SUCCESS') {
        dispatch({ type: actionTypes.CALCULATE_TICKET_PERCENTAGE, data: formulaCalculate.data.response });
        return { status: 'SUCCESS', data: formulaCalculate.data.response }
      }
      else {
        return {
          errorMessage: formulaCalculate.data.errors[0].message,
          status: 'ERROR'
        }
      }

    } catch (err) {

      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }

  },
  navigationInputToggle: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.NAVBAR_INPUT_TOGGLE });
  },
  navigationInputToggleInputProductivity: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.NAVBAR_INPUT_TOGGLE_INPUT_PRODUCTIVITY });
  },
  navigationInputToggleOutputProductivity: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.NAVBAR_INPUT_TOGGLE_OUTPUT_PRODUCTIVITY });
  },
  navigationInputToggleDefault: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.NAVBAR_INPUT_TOGGLE_DEFAULT });
  },
  navigationInputToggleInputProductivityDefault: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.NAVBAR_INPUT_TOGGLE_INPUT_PRODUCTIVITY_DEFAULT });
  },
  navigationInputToggleOutputProductivityDefault: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.NAVBAR_INPUT_TOGGLE_OUTPUT_PRODUCTIVITY_DEFAULT });
  },
  navigationInputToggleOutputProductivityDefaultOpen: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.NAVBAR_INPUT_TOGGLE_OUTPUT_PRODUCTIVITY_DEFAULT_OPEN });
  },
  resetDashcalculateMinEnhWtHrs: (inputData) => async (dispatch, GetState) => {
    try {
      let deepCopy = JSON.stringify(inputData);
      let dataFormula = JSON.parse(deepCopy)
      let dataInput = formulaInputData(dataFormula, 'BaselineTestingFTEs')
      let formulaData = await inputService.calculateMinEnhWtHrsAndAdhocActivityWtPercentageAndYearOneBaselineTestingFTEs(dataInput);
      if (formulaData.data.status === 'SUCCESS') {
        dispatch({ type: actionTypes.YEAR_BASELINE_TESTING, data: formulaData.data.response });
        return { status: 'SUCCESS', data: formulaData.data.response }
      }
      else {
        return {
          errorMessage: formulaData.data.errors[0].message,
          status: 'ERROR'
        }
      }

    } catch (err) {

      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }

  },
  calculateClientCloudLandscapeAction: (cloudAppData, cloudLandscpeData) => async (dispatch, GetState) => {
    try {
      let InputData = CloudAppLandscapeData(cloudAppData, cloudLandscpeData)
      let formulaData = await inputService.calculateClientCloudLandscapeAPI(InputData);
      if (formulaData.data.status === 'SUCCESS') {
        return { status: 'SUCCESS', data: formulaData.data.response.clientCloudLandscapeCalculation }
      }
      else {
        return {
          errorMessage: formulaData.data.errors[0].message,
          status: 'ERROR'
        }
      }

    } catch (err) {

      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }

  },
  exportInProgressPopupShow: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.EXPORT_INPROGRESS_POPUP_SHOW, data: true });
  },
  exportReadyPopupShow: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.EXPORT_READY_POPUP_SHOW, data: true });
  },
  exportPopupReset: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.EXPORT_POPUP_RESET, data: true });
  },
  //close Modal dashboard
  closeExportModalResetDashboard: () => (dispatch, GetState) => {
    dispatch({ type: actionTypes.USER_DASHBOARD_DATA_RESET_MODAL_CLOSE, data: true });
  },

  userInputNonLabourStub: () => async (dispatch, GetState) => {
    try {
      var NonLabourData = await inputService.nonLaborCostStub();
      dispatch({ type: actionTypes.USER_INPUT_NON_LABOUR_STUB, data: NonLabourData.data });
    }
    catch (err) {
      let errorCodeNo = '';
      if (err.response) {
        errorCodeNo = err.response.data.errors[0].code;
      }
      return {
        errorMessage: err.message,
        errorCode: errorCodeNo,
        status: 'ERROR'
      }
    }
  },






};



