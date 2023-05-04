import React, { useState, useEffect } from "react";
import "./GeneralInput.scss";
import NavBar from "../../../Components/CommonFuncs/NavBar/Navbar";
import HeaderInputs from "../HeaderInputs";
import {
  englishValue,
  NumberValidationPercentage,
  NumberValidation,
  arrCoversionOrder,
  arrangeColumn,
  arrangeColumnAIOPS,
} from "../../../Utils/CommonFunc";
import { UpArrow, DownArrow } from "../../../Components/CommonFuncs/Icons";
import TableData from "../../../Components/CommonFuncs/TableInput";
import { breadcrumb } from "../../../Components/CommonFuncs/BreadCumbs";
import { Accordion, AccordionItem } from "carbon-components-react";
import { Content } from "carbon-components-react";
import UseCustomInput from "../UseCustomInput";
import LoaderApp from "../../LoaderApp";
import  Feedback from '../../../Pages/Feedback/Feedback'
import {
  general_appComplexityBasedDistributionPercentage_C30,
  general_appComplexityBasedDistributionPercentage_D30,
  general_appComplexityBasedDistributionPercentage_E30,
  general_criticalAppPercentageOfTotalApps_C36,
  general_criticalAppPercentageOfTotalApps_D36,
  general_criticalAppPercentageOfTotalApps_E36,
  general_monthlyAverageTicketCountPerAppCategory_C39,
  general_monthlyAverageTicketCountPerAppCategory_D39,
  general_monthlyAverageTicketCountPerAppCategory_E39,
  general_additionalBatchJobsSupportUpliftPercentage_C43,
  general_additionalBatchJobsSupportUpliftPercentage_D43,
  general_additionalBatchJobsSupportUpliftPercentage_E43,
  general_l1DistributionPercentage_C47,
  general_l1DistributionPercentage_D47,
  general_l1DistributionPercentage_E47,
  general_l2DistributionPercentage_E50,
  general_l2DistributionPercentage_C50,
  general_l2DistributionPercentage_D50,
  general_minorEnhDistributionPercentage_C59,
  general_minorEnhDistributionPercentage_D59,
  general_l4DistributionPercentage_C56,
  general_l4DistributionPercentage_D56,
  general_l4DistributionPercentage_E56,
  general_minorEnhDistributionPercentage_E59,
  general_l3DistributionPercentage_C53,
  general_l3DistributionPercentage_D53,
  general_additionalADCapacityHrsDistributionPercentage_F65,
  general_additionalADCapacityHrsDistributionPercentage_E65,
  general_additionalADCapacityHrsDistributionPercentage_D65,
  general_additionalADCapacityHrsDistributionPercentage_C65,
  general_nonTicketingActivitiesUpliftDistributionPercentage_E68,
  general_nonTicketingActivitiesUpliftDistributionPercentage_C68,
  general_nonTicketingActivitiesUpliftDistributionPercentage_D68,
  general_l3DistributionPercentage_E53,
  general_aiOpsAppPercentageOfTotalApps_complex,
  general_aiOpsAppPercentageOfTotalApps_medium,
  general_aiOpsAppPercentageOfTotalApps_simple,
} from '../../../Components/CommonFuncs/formula/FormulaComponent_General';
import {
  calculateTicketDistributionPercentageAndBaselineHoursForL2,
  calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs,
} from "../../../Components/CommonFuncs/formula/FormulaComponent_applicationTechnology";
import { input_validation_main } from "../../../Components/CommonFuncs/formula/Validations/ValidationMain";
import { actionCreators } from "../../../store/actions/ActionCreator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
function mapStateToProps(state) {
  return {
    userDropDownData: state.userDropDown,
    userInpuData: state.userInputData,
    userOutputData: state.userOutputData,
    userSessionData: state.userSessionData,
    userApiIbmWeightedUtilize: state.ApiIbmWeightedUtilize,
    userCalculateTicketPercentage: state.CalculateTicketPercentage,
    userYearOneBaselineTestingFTEs: state.YearOneBaselineTestingFTEs,
    userinputStatusData: state.inputStatus,
    userestimateState: state.userEstimateState,
    userNavbarToggle: state.userNavbarReducer,
    userAppScreenLoader: state.userScreenLoaderApp,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
let userData = ''
let Inputfunction = '';
let fullData = '';
let userBlurHandlerLocal = '';
let userHistory = '';
let userFocusInitalValue = '';
let userdefaultdropfown = '';
const btnFunction = (objBtn) => {
  let inputBtnData = {};
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
      saveModal: false,
    };
  } else {
    inputBtnData = {
      RestButton: true,
      EstimateButton: true,
      SaveButton: false,
      CalculateButton: true,
      SendForReivewButton: false,
      Export: false,
      inputButton: true,
      outputButton: false,
      calculateModal: false,
      saveModal: false,
    };
  }
  return inputBtnData;
};
const inputEditData = (userInputData, objStatus) => {
  // Inputfunction(userInputData);
  //calculateTicketDistributionPercentage
  fullData
    .calculateTicketDistributionPercentage(userInputData,true)
    .then((res) => {
      if (res.status === "SUCCESS") {
        //Now API output change feilds calculateTicketDistributionPercentage
        calculateTicketDistributionPercentageAndBaselineHoursForL2(
          fullData,
          userInputData,
          res.data
        );
        fullData
          .resetDashcalculateMinEnhWtHrs(userInputData)
          .then((res) => {
            if (res.status === "SUCCESS") {
              //Now API output change feilds calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs
              calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs(
                fullData,
                userInputData,
                res.data
              );
              input_validation_main(fullData, userInputData, objStatus);
              let btnInput = btnFunction(objStatus);
              userBlurHandlerLocal();
              Inputfunction(userInputData, btnInput);
            } else {
              if (res.errorCode === "ERRCAS401B") {
                userHistory.push("/");
              } else {
                alert(englishValue("TechnicalError"));
              }

              let btnInput = btnFunction(objStatus);
              userBlurHandlerLocal();
              Inputfunction(userInputData, btnInput);
            }
          })
          .catch((err) => {
            alert(englishValue("TechnicalError"));
            let btnInput = btnFunction(objStatus);
            userBlurHandlerLocal();
            Inputfunction(userInputData, btnInput);
          });
      } else {
        if (res.errorCode === "ERRCAS401B") {
          userHistory.push("/");
        } else {
          alert(englishValue("TechnicalError"));
        }

        let btnInput = btnFunction(objStatus);
        userBlurHandlerLocal();
        Inputfunction(userInputData, btnInput);
      }
    })
    .catch((err) => {
      alert(englishValue("TechnicalError"));
      let btnInput = btnFunction(objStatus);
      userBlurHandlerLocal();
      Inputfunction(userInputData, btnInput);
    });
};
const inputEditDataNormal = (userInputData, objStatus) => {
  input_validation_main(fullData, userInputData, objStatus);
  let btnInput = btnFunction(objStatus);
  userBlurHandlerLocal();
  Inputfunction(userInputData, btnInput);
};
const inputEditBaselineTestingFTEs = (userInputData, objStatus) => {
  // Inputfunction(userInputData);
  //Now API output change feilds calculateTicketDistributionPercentage
  fullData
    .resetDashcalculateMinEnhWtHrs(userInputData)
    .then((res) => {
      if (res.status === "SUCCESS") {
        //Now API output change feilds calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs
        calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs(
          fullData,
          userInputData,
          res.data
        );
        input_validation_main(fullData, userInputData, objStatus);
        let btnInput = btnFunction(objStatus);
        userBlurHandlerLocal();
        Inputfunction(userInputData, btnInput);
      } else {
        if (res.errorCode === "ERRCAS401B") {
          userHistory.push("/");
        } else {
          alert(englishValue("TechnicalError"));
        }

        let btnInput = btnFunction(objStatus);
        userBlurHandlerLocal();
        Inputfunction(userInputData, btnInput);
      }
    })
    .catch((err) => {
      alert(englishValue("TechnicalError"));
      let btnInput = btnFunction(objStatus);
      userBlurHandlerLocal();
      Inputfunction(userInputData, btnInput);
    });
};
//on blur
const handlerChange = (e) => {
  let ObjBtnStatus = {
    errorBtn: false,
    cheackBtn: false,
  };
  let valueChange = e.target.id;
  let valueOppParameter = valueChange.split("_");
  let idOppParameter = valueOppParameter[1] + "_" + valueOppParameter[2];
  let userInputData = userData["estimate"]["userInputs"];
  var IntitalValue =
    userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]];

  userFocusInitalValue();
  if (parseFloat(IntitalValue) === parseFloat(e.target.value)) {
  }
  else {
    //jira 810 total value converting as a number after updating the value in general-monthly addtnl. ad capacity total section

    if (idOppParameter == "additionalADCapacityHrsDistributionPercentage_total") {
      userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = (e.target.value);
    } else {
      userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = parseFloat(e.target.value);
    }

    switch (idOppParameter) {
      case "appComplexityBasedDistributionPercentage_simple":
        general_appComplexityBasedDistributionPercentage_C30(
          fullData,
          userInputData
        );
        inputEditData(userInputData, ObjBtnStatus);
        break;
      case "appComplexityBasedDistributionPercentage_medium":
        general_appComplexityBasedDistributionPercentage_D30(
          fullData,
          userInputData
        );
        inputEditData(userInputData, ObjBtnStatus);
        break;
      case "appComplexityBasedDistributionPercentage_complex":
        general_appComplexityBasedDistributionPercentage_E30(
          fullData,
          userInputData
        );
        inputEditData(userInputData, ObjBtnStatus);
        break;
      case "criticalAppPercentageOfTotalApps_simple":
        general_criticalAppPercentageOfTotalApps_C36(fullData, userInputData);
        inputEditDataNormal(userInputData, ObjBtnStatus);
        break;
      case "criticalAppPercentageOfTotalApps_medium":
        general_criticalAppPercentageOfTotalApps_D36(fullData, userInputData);
        inputEditDataNormal(userInputData, ObjBtnStatus);
        break;
      case "criticalAppPercentageOfTotalApps_complex":
        general_criticalAppPercentageOfTotalApps_E36(fullData, userInputData);
        inputEditDataNormal(userInputData, ObjBtnStatus);
        break;
      case "monthlyAverageTicketCountPerAppCategory_simple":
        general_monthlyAverageTicketCountPerAppCategory_C39(
          fullData,
          userInputData
        );
        inputEditData(userInputData, ObjBtnStatus);
        break;
      case "monthlyAverageTicketCountPerAppCategory_medium":
        general_monthlyAverageTicketCountPerAppCategory_D39(
          fullData,
          userInputData
        );
        inputEditData(userInputData, ObjBtnStatus);
        break;
      case "monthlyAverageTicketCountPerAppCategory_complex":
        general_monthlyAverageTicketCountPerAppCategory_E39(
          fullData,
          userInputData
        );
        inputEditData(userInputData, ObjBtnStatus);
        break;
      case "additionalBatchJobsSupportUpliftPercentage_simple":
        general_additionalBatchJobsSupportUpliftPercentage_C43(
          fullData,
          userInputData
        );
        inputEditData(userInputData, ObjBtnStatus);
        break;
      case "additionalBatchJobsSupportUpliftPercentage_medium":
        general_additionalBatchJobsSupportUpliftPercentage_D43(
          fullData,
          userInputData
        );
        inputEditData(userInputData, ObjBtnStatus);
        break;
      case "additionalBatchJobsSupportUpliftPercentage_complex":
        general_additionalBatchJobsSupportUpliftPercentage_E43(
          fullData,
          userInputData
        );
        inputEditData(userInputData, ObjBtnStatus);
        break;
      case "l1DistributionPercentage_simple":
        general_l1DistributionPercentage_C47(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "l1DistributionPercentage_medium":
        general_l1DistributionPercentage_D47(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "l1DistributionPercentage_complex":
        general_l1DistributionPercentage_E47(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "l2DistributionPercentage_simple":
        general_l2DistributionPercentage_C50(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "l2DistributionPercentage_medium":
        general_l2DistributionPercentage_D50(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "l2DistributionPercentage_complex":
        general_l2DistributionPercentage_E50(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "l3DistributionPercentage_simple":
        general_l3DistributionPercentage_C53(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "l3DistributionPercentage_medium":
        general_l3DistributionPercentage_D53(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "l3DistributionPercentage_complex":
        general_l3DistributionPercentage_E53(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;

      case "l4DistributionPercentage_simple":
        general_l4DistributionPercentage_C56(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "l4DistributionPercentage_medium":
        general_l4DistributionPercentage_D56(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "l4DistributionPercentage_complex":
        general_l4DistributionPercentage_E56(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "minorEnhDistributionPercentage_simple":
        general_minorEnhDistributionPercentage_C59(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "minorEnhDistributionPercentage_medium":
        general_minorEnhDistributionPercentage_D59(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "minorEnhDistributionPercentage_complex":
        general_minorEnhDistributionPercentage_E59(fullData, userInputData);
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "nonTicketingActivitiesUpliftDistributionPercentage_simple":
        general_nonTicketingActivitiesUpliftDistributionPercentage_C68(
          fullData,
          userInputData
        );
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "nonTicketingActivitiesUpliftDistributionPercentage_medium":
        general_nonTicketingActivitiesUpliftDistributionPercentage_D68(
          fullData,
          userInputData
        );
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "nonTicketingActivitiesUpliftDistributionPercentage_complex":
        general_nonTicketingActivitiesUpliftDistributionPercentage_E68(
          fullData,
          userInputData
        );
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case "additionalADCapacityHrsDistributionPercentage_simple":
        general_additionalADCapacityHrsDistributionPercentage_C65(
          fullData,
          userInputData
        );
        inputEditDataNormal(userInputData, ObjBtnStatus);
        break;
      case "additionalADCapacityHrsDistributionPercentage_medium":
        general_additionalADCapacityHrsDistributionPercentage_D65(
          fullData,
          userInputData
        );
        inputEditDataNormal(userInputData, ObjBtnStatus);
        break;
      case "additionalADCapacityHrsDistributionPercentage_complex":
        general_additionalADCapacityHrsDistributionPercentage_E65(
          fullData,
          userInputData
        );
        inputEditDataNormal(userInputData, ObjBtnStatus);
        break;
      case "additionalADCapacityHrsDistributionPercentage_total":
        general_additionalADCapacityHrsDistributionPercentage_F65(
          fullData,
          userInputData
        );
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        break;
      case 'aiOpsAppPercentageOfTotalApps_simple':
        general_aiOpsAppPercentageOfTotalApps_simple(fullData, userInputData);
        inputEditDataNormal(userInputData, ObjBtnStatus);
        break;
      case 'aiOpsAppPercentageOfTotalApps_medium':
        general_aiOpsAppPercentageOfTotalApps_medium(fullData, userInputData);
        inputEditDataNormal(userInputData, ObjBtnStatus);
        break;
      case 'aiOpsAppPercentageOfTotalApps_complex':
        general_aiOpsAppPercentageOfTotalApps_complex(fullData, userInputData);
        inputEditDataNormal(userInputData, ObjBtnStatus);
        break;
      default:
        inputEditDataNormal(userInputData, ObjBtnStatus);
        break;
    }

  }
  // update AMS info
};
{/* JIRAA 688 AIOPs  2dn accordain dropdown*/ }
const keyDropdownkey = (callvalue, objvalue) => {
  let selectvalue = '';
  let dataOptions = objvalue.forEach((item) => {
    if (item.value == callvalue) {
      selectvalue = item.key
    }
  }
  );
  return selectvalue;
}
const handlerChangeSelectHandler = (e) => {
  let ObjBtnStatus = {
    errorBtn: false,
    cheackBtn: false
  }

  let valueChange = e.target.id;
  let valueOppParameter = valueChange.split('_');
  let userInputData = userData['estimate']['userInputs'];
  userFocusInitalValue();

  let keyvalue = keyDropdownkey(e.target.value, userdefaultdropfown[valueOppParameter[0]])
  userInputData[valueOppParameter[1]][valueOppParameter[2]] = keyvalue
  inputEditDataNormal(userInputData, ObjBtnStatus);


};

const Accordion1 = (tableCellData, client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, title, FocusFlag, FocusValueIdFlag, props) => {
  return (
    <Accordion>
      <AccordionItem title={title} open={client}>
        <div className="table-class">
          <TableData
            {...props}
            idTitle="general"
            handlerChange={handlerChange}
            headers={[
              "",
              "",
              englishValue("simple"),
              englishValue("medium"),
              englishValue("complex"),
              englishValue("total"),
              englishValue("Range"),
            ]}
            rows={tableCellData}
            UserState={UserStateData}
            UserEmail={UserEmailData}
            handlerChangeData={handlerChangeData}
            handlerFocus={handlerFocus}
            // for the readonly staus true /false these focus flag and focusValueIDFlag used
            FocusFlag={FocusFlag}
            FocusValueIdFlag={FocusValueIdFlag}
          ></TableData>
        </div>
      </AccordionItem>
    </Accordion>
  )
}
{/* JIRAA 688 AIOPs  2 dn accordain*/ }
const Accordion2 = (tableCellInput, client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, title, FocusFlag, FocusValueIdFlag, props) => {
  return (
    <Accordion>
      <AccordionItem title={title} open={client}>
        <div className="table-class AiopsTable">
          <TableData
            {...props}
            idTitle="general"
            handlerChange={handlerChange}
            headers={["", "", englishValue('simple'), englishValue('medium'), englishValue('complex'), englishValue('total'), englishValue('Range')]}
            rows={tableCellInput}
            UserState={UserStateData}
            UserEmail={UserEmailData}
            handlerChangeData={handlerChangeData}
            handlerFocus={handlerFocus}
            FocusFlag={FocusFlag}
            FocusValueIdFlag={FocusValueIdFlag}
            handlerChangeSelectHandler={handlerChangeSelectHandler}

          >
          </TableData>
        </div>
      </AccordionItem>
    </Accordion>
  )
}

const GeneralInput = React.memo((props) => {
  const [initialstate, setInitialstate] = useState(
    props.userInpuData.defaultInputData["response"]["estimate"].userInputs
  );
  const [FocusFlag, setFocusFlag] = useState(false);
  const [FocusValueIdFlag, setFocusValueIdFlag] = useState("");

  const sumGeneralHandler = () => {
    let totalPercent = 100;
    let sumGeneral = 100;
    let simpleValue = (
      Number(initialstate["general"]["l1DistributionPercentage"]["simple"]) +
      Number(initialstate["general"]["l2DistributionPercentage"]["simple"]) +
      Number(initialstate["general"]["l3DistributionPercentage"]["simple"]) +
      Number(initialstate["general"]["l4DistributionPercentage"]["simple"]) +
      Number(
        initialstate["general"]["minorEnhDistributionPercentage"]["simple"]
      )
    ).toFixed(2);

    let mediumValue = (
      Number(initialstate["general"]["l1DistributionPercentage"]["medium"]) +
      Number(initialstate["general"]["l2DistributionPercentage"]["medium"]) +
      Number(initialstate["general"]["l3DistributionPercentage"]["medium"]) +
      Number(initialstate["general"]["l4DistributionPercentage"]["medium"]) +
      Number(
        initialstate["general"]["minorEnhDistributionPercentage"]["medium"]
      )
    ).toFixed(2);

    let complexValue = (
      Number(initialstate["general"]["l1DistributionPercentage"]["complex"]) +
      Number(initialstate["general"]["l2DistributionPercentage"]["complex"]) +
      Number(initialstate["general"]["l3DistributionPercentage"]["complex"]) +
      Number(initialstate["general"]["l4DistributionPercentage"]["complex"]) +
      Number(
        initialstate["general"]["minorEnhDistributionPercentage"]["complex"]
      )
    ).toFixed(2);
    if (
      simpleValue !== totalPercent.toFixed(2) ||
      mediumValue !== totalPercent.toFixed(2) ||
      complexValue !== totalPercent.toFixed(2)
    ) {
      sumGeneral = {
        simple: simpleValue,
        medium: mediumValue,
        complex: complexValue,
        total: "",
        range: "",
        uiStatus: {
          iconStatus: {
            warning: false,
            ok: false,
            warningMessage: "",
          },
          editableStatus: {
            simple: false,
            medium: false,
            complex: false,
            total: false,
            range: false,
          },
        },
      };
      initialstate["general"]["sumTotalGeneral"] = sumGeneral;
    } else {
      sumGeneral = {
        simple: simpleValue,
        medium: mediumValue,
        complex: complexValue,
        total: "",
        range: "",
        uiStatus: {
          iconStatus: {
            warning: false,
            ok: true,
            warningMessage: "",
          },
          editableStatus: {
            simple: false,
            medium: false,
            complex: false,
            total: false,
            range: false,
          },
        },
      };
      initialstate["general"]["sumTotalGeneral"] = sumGeneral;
    }
  }

  sumGeneralHandler();
  const tableData = [initialstate.general][0];
  const [client, setClient] = useState(false);
  const { tableCellInput } = UseCustomInput(tableData);
  const [resetHandleFlag, setresetHandleFlag] = useState(false);
  const [NewHandleFlag, setNewHandleFlag] = useState(false);
  const BlurChangeData = () => {
    setNewHandleFlag(true);
  };
  const userFocusInital = () => {
    setFocusValueIdFlag("");
    setFocusFlag(false);
  };
  useEffect(() => {
    if (resetHandleFlag || NewHandleFlag) {
      setInitialstate({
        ...props.userInpuData.defaultInputData["response"]["estimate"]
          .userInputs,
      });
      setresetHandleFlag(false);
      setNewHandleFlag(false);
    }
  });

  userData = props.userInpuData.defaultInputData.response;
  Inputfunction = props.userInputDataEditFormulaInfo;
  fullData = props;
  userBlurHandlerLocal = BlurChangeData;
  userHistory = props.history;
  userdefaultdropfown = props.userDropDownData.defaultDropDown['response'].defaultDropdown;
  userFocusInitalValue = userFocusInital
  const resetHandler = () => {
    setresetHandleFlag(true);
  };

  //on focus function to remove % on click
  const handlerFocus = (e) => {
    let valueChange = e.target.id;
    setFocusValueIdFlag(valueChange);
    setFocusFlag(true);
  };

  //on change function
  const handlerChangeData = (e) => {
    let valueChange = e.target.id;
    let valueOppParameter = valueChange.split("_");
    var newState = JSON.parse(JSON.stringify(initialstate));
  // add 0 
    if (e.target.value === "" || e.target.value === "%") {
      newState[valueOppParameter[0]][valueOppParameter[1]][
        valueOppParameter[2]
      ] = 0;
      setInitialstate({ ...newState });
    } else if (e.target.value === "0" || e.target.value === "0%") {
      newState[valueOppParameter[0]][valueOppParameter[1]][
        valueOppParameter[2]
      ] = 0;
      setInitialstate({ ...newState });
    } else {
      //multiple 0's
      let value = e.target.value.replace(/^0+/, 0);
      newState[valueOppParameter[0]][valueOppParameter[1]][
        valueOppParameter[2]
      ] = value;
    //JIRA 662 and JIRA 1032 additionalADCapacityHrsDistributionPercentage is a number feild so add a condition so that its not considered as Percentage
     //Run percentage Validation 
     //JIRA 1032 percentage validation done 
     if ((valueOppParameter[1]).includes('Percentage') && `${valueOppParameter[1]}_${valueOppParameter[2]}` != 'additionalADCapacityHrsDistributionPercentage_total') {
        let value = (e.target.value.replace(/%/, ''));
        value = value.replace(/^0+/, 0)
        newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = value;
        if (NumberValidationPercentage((value))) {
          setInitialstate({ ...newState });
        }
      } else {
        // Number Validation 
        if (NumberValidation(e.target.value)) {
          setInitialstate({ ...newState });
        }
      }
    }
  };

  let UserStateData = props.userestimateState.state;
  let UserEmailData = props.userestimateState.reviewerEmail;
  return (
    <div className="inputName">
      <LoaderApp
        loaderBtn={props.userAppScreenLoader.flag}
        labelLoader={props.userAppScreenLoader.label}
      />

      <NavBar
        {...props}
        userNavBar={props.userInpuData.defaultInputData["response"]["estimate"]}
        title="general"
      ></NavBar>
      <Content>
        <HeaderInputs
          {...props}
          userData1={
            props.userInpuData.defaultInputData["response"]["estimate"]
          }
          title="input"
          resetHandler={resetHandler}
        ></HeaderInputs>
        <div className="generalInput">
          <div className="breadCrumbgeneral">
            {breadcrumb("General")}
            <div className="accordianAll">
              <span
                className="collapseAll"
                onClick={() => {
                  setClient(false);
                }}
              >
                {englishValue("collapseAll")}
                <span className="upArrow">
                  <UpArrow />
                </span>
              </span>
              <span className="expandAll" onClick={() => setClient(true)}>
                {englishValue("expandAll")}
                <span className="downArrow">
                  <DownArrow />
                </span>
              </span>
            </div>
          </div>
          <div className="generalDiv">
            <div className="heading">{englishValue("ApplicationCategory")}</div>
            <div className="Accordion-class">
              {/* rearaanging of rows first then called columns function */}
              {Accordion1(arrangeColumn((arrCoversionOrder(tableCellInput, [
                "appComplexityBasedDistributionPercentage",
                "appCountComplexityBasedDistribution"
              ])),['simple','medium','complex','total','range','uiStatus']), "true", UserStateData, UserEmailData, handlerChangeData, handlerFocus, englishValue('Application Distribution'), FocusFlag, FocusValueIdFlag, props)}
              {Accordion1(arrangeColumn((arrCoversionOrder(tableCellInput, [
                "cotsThirdPartyPercentageOfTotalApps",
                "cotsThirdPartyAppCountDistribution"
              ])),['simple','medium','complex','total','range','uiStatus']), client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, englishValue('COTS/3rd Party Applications'), FocusFlag, FocusValueIdFlag, props)}
              {Accordion1(arrangeColumn((arrCoversionOrder(tableCellInput, [
                "criticalAppPercentageOfTotalApps",
                "criticalAppCountDistribution"
              ])),['simple','medium','complex','total','range','uiStatus']), client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, englishValue('Critical Applications'), FocusFlag, FocusValueIdFlag, props)}
              {Accordion1(arrangeColumn((arrCoversionOrder(tableCellInput, [
                "monthlyAverageTicketCountPerAppCategory",
                "monthlyTotalTicketsAssumed",
                "monthlyL1TicketsAssumed",
                "ticketDistributionPercentage",
                "additionalBatchJobsSupportUpliftPercentage",
                "approxNumberOfBatchJobsTicketsToSupport",
                "monthlyTotalandBatchJobsTickets"
              ])),['simple','medium','complex','total','range','uiStatus']), client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, englishValue('Average Ticket Count(Monthly)'), FocusFlag, FocusValueIdFlag, props)}
              {Accordion1(arrangeColumn((arrCoversionOrder(tableCellInput, [
                "l1DistributionPercentage",
                "l1TicketsCountDistribution"
              ])),['simple','medium','complex','total','range','uiStatus']), client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, englishValue('L1.5 + Small SRs'), FocusFlag, FocusValueIdFlag, props)}
              {Accordion1(arrangeColumn((arrCoversionOrder(tableCellInput, [
                "l2DistributionPercentage",
                "l2TicketsCountDistribution"
              ])),['simple','medium','complex','total','range','uiStatus']), client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, englishValue('L2 + Medium SRs'), FocusFlag, FocusValueIdFlag, props)}
              {Accordion1(arrangeColumn((arrCoversionOrder(tableCellInput, [
                "l3DistributionPercentage",
                "l3TicketsCountDistribution"
              ])),['simple','medium','complex','total','range','uiStatus']), client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, englishValue('L3 + Large SRs'), FocusFlag, FocusValueIdFlag, props)}
              {Accordion1(arrangeColumn((arrCoversionOrder(tableCellInput, [
                "l4DistributionPercentage",
                "l4TicketsCountDistribution"
              ])),['simple','medium','complex','total','range','uiStatus']), client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, englishValue('L4'), FocusFlag, FocusValueIdFlag, props)}
              {Accordion1(arrangeColumn((arrCoversionOrder(tableCellInput, [
                "minorEnhDistributionPercentage",
                "minorEnhTicketsCountDistribution",
                "minorEnhCapacityOfHoursDistribution"
              ])),['simple','medium','complex','total','range','uiStatus']), client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, englishValue('Minor Enhancements + V.Large SRs'), FocusFlag, FocusValueIdFlag, props)}
              {Accordion1(arrangeColumn((arrCoversionOrder(tableCellInput, [
                "sumTotalGeneral"
              ])),['simple','medium','complex','total','range','uiStatus']), client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, englishValue('sumTotalGeneral'), FocusFlag, FocusValueIdFlag, props)}
              {Accordion1(arrangeColumn((arrCoversionOrder(tableCellInput, [
                "additionalADCapacityHrsDistributionPercentage",
                "additionalADCapacityHrsDistribution"
              ])),['simple','medium','complex','total','range','uiStatus']), client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, englishValue('Monthly Additional AD Capacity (Optional)'), FocusFlag, FocusValueIdFlag, props)}
              {Accordion1(arrangeColumn((arrCoversionOrder(tableCellInput, [
                "nonTicketingActivitiesUpliftDistributionPercentage",
              ])),['simple','medium','complex','total','range','uiStatus']), client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, englishValue('Recommended Uplift'), FocusFlag, FocusValueIdFlag, props)}
              
              {/* JIRAA 688 AIOPs */}
              {props['userInpuData']['defaultInputData']['response']['estimate']['userInputs']['general']['aiOpsAppPercentageOfTotalApps'] || props['userInpuData']['defaultInputData']['response']['estimate']['userInputs']['general']['aiOpsAppCountDistribution'] ?
                Accordion2(arrangeColumnAIOPS((arrCoversionOrder(tableCellInput, [
                  "aiOpsAppPercentageOfTotalApps",
                  "aiOpsAppCountDistribution",
                  "aiOpsObservabilityToolDefaultSelection",
                  "aiOpsArmToolDefaultSelection",
                  "uiStatus"
                ])),['simple','medium','complex','total','range','uiStatus']), client, UserStateData, UserEmailData, handlerChangeData, handlerFocus, englishValue('AIOps'), FocusFlag, FocusValueIdFlag, props)
                : ''}
            </div>
          </div>
        </div>
        <Feedback/>
      </Content>
    </div>
  );
});

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInput);
