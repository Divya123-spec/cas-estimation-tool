import React, { useState, useEffect } from 'react';
import { bindActionCreators } from "redux";
import { TextInput } from 'carbon-components-react';
import NavBar from '../../Components/CommonFuncs/NavBar/Navbar';
import HeaderInputs from '../OpportunityInputsParameter/HeaderInputs';
import { connect } from "react-redux";
import DevSecOps from './DevSecOps';
import Automation from './Automation';
import Cloud from './Cloud';
import Testing from './Testing';
import Efficiency from './Efficiency';
import LoaderApp from '../LoaderApp';
import { actionCreators } from '../../store/actions/ActionCreator';
import { Content } from 'carbon-components-react';
import { englishValue, NumberValidationPercentage } from '../../Utils/CommonFunc';
import './ProductivityInput.scss';
import { productivity_testing_productivityPercentagePlannedForUseOfY1 } from '../../Components/CommonFuncs/formula/formulaProductivity_testing';
import { productivity_efficiency_productivityPercentagePlannedForUseOfY1 } from '../../Components/CommonFuncs/formula/formulaProductivity_efficency';
import { productivity_cloud_productivityPercentagePlannedForUseOfY1 } from '../../Components/CommonFuncs/formula/formulaProductivity_cloud';
import { productivity_automation_productivityPercentagePlannedForUseOfY1 } from '../../Components/CommonFuncs/formula/formulaProductivity_automation';
import {  productivity_devscops_productivityPercentagePlannedForUseOfY1 } from '../../Components/CommonFuncs/formula/formulaProductivity_devscops';
import { input_validation_main } from '../../Components/CommonFuncs/formula/Validations/ValidationMain';
import Feedback from '../Feedback/Feedback';
// import { productivity_productivityPercentagePlannedForUseOfY1 } from '../../Components/CommonFuncs/formula/formulaProductivity_devscops';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
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
    userAppScreenLoader: state.userScreenLoaderApp
  };
}

// function foe productivity input(devscops /automation/cloud testing/effiency)
const ProductivityInput = (props) => {
  const InputTextValue = props.userInpuData.defaultInputData['response']['estimate'].userInputs.productivity.productivityPercentagePlannedForUseOfY1;
  const [inputTextProd, setInputTextProd] = useState(InputTextValue);
  const [resetHandleFlag, setresetHandleFlag] = useState(false);
  const [readOnlyStatus, setreadOnlyStatus] = useState(false);
  const [initialstate, setInitialstate] = useState(props.userInpuData.defaultInputData['response']['estimate'].userInputs)

  const { tableCellInput } = (initialstate.productivity);
  useEffect(() => {
    let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData)
       
        let readOnlyStatus = false;
        if (props.userestimateState.state === 'InReview' || props.userestimateState.state === 'Approved') {
            readOnlyStatus = true;
        } else if (props.userestimateState.reviewerEmail === userData.email || props.userestimateState.state === "ReWork") {
            readOnlyStatus = true;
        }
        setreadOnlyStatus(readOnlyStatus)
    if (resetHandleFlag ) {
      const InputTextValue = props.userInpuData.defaultInputData['response']['estimate'].userInputs.productivity.productivityPercentagePlannedForUseOfY1;

      setInputTextProd(InputTextValue)
        setInitialstate({ ...props.userInpuData.defaultInputData['response']['estimate'].userInputs});
        setresetHandleFlag(false);
      
    }
})

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
// on chnge og y1 productivity %
  const changeHandler = (e) => {
    let ObjBtnStatus = {
      errorBtn: false,
      cheackBtn: false
  }
    if (e.target.value === '' || e.target.value === '%') {
      initialstate.productivity.productivityPercentagePlannedForUseOfY1 = 0;
      setInputTextProd(0);
      //calculations
      productivity_devscops_productivityPercentagePlannedForUseOfY1(props, initialstate);
      productivity_testing_productivityPercentagePlannedForUseOfY1(props, initialstate);
      productivity_efficiency_productivityPercentagePlannedForUseOfY1(props, initialstate);
      productivity_cloud_productivityPercentagePlannedForUseOfY1(props, initialstate);
      productivity_automation_productivityPercentagePlannedForUseOfY1(props, initialstate);
      input_validation_main(props, initialstate, ObjBtnStatus);
      let btnInput = btnFunction(ObjBtnStatus);
      // setNewHandleFlag(true)
      // in redux sending and seting up data
      props.userInputDataEditFormulaInfo(initialstate, btnInput);
      setInitialstate({ ...initialstate });
    } else if (e.target.value === '0' || e.target.value === '0%') {
      initialstate.productivity.productivityPercentagePlannedForUseOfY1 = 0;
      setInputTextProd(0);
      productivity_devscops_productivityPercentagePlannedForUseOfY1(props, initialstate);
      productivity_testing_productivityPercentagePlannedForUseOfY1(props, initialstate);
      productivity_efficiency_productivityPercentagePlannedForUseOfY1(props, initialstate);
      productivity_cloud_productivityPercentagePlannedForUseOfY1(props, initialstate);
      productivity_automation_productivityPercentagePlannedForUseOfY1(props, initialstate);
      input_validation_main(props, initialstate, ObjBtnStatus);
      let btnInput = btnFunction(ObjBtnStatus);
      // setNewHandleFlag(true)
      props.userInputDataEditFormulaInfo(initialstate, btnInput);
      setInitialstate({ ...initialstate });
    }
    else {
      let value = e.target.value.replace(/^0+/, 0);
      initialstate.productivity.productivityPercentagePlannedForUseOfY1 = Number(value);
      if (NumberValidationPercentage((e.target.value))) {
        setInputTextProd(value);
        productivity_devscops_productivityPercentagePlannedForUseOfY1(props, initialstate);
        productivity_testing_productivityPercentagePlannedForUseOfY1(props, initialstate);
        productivity_efficiency_productivityPercentagePlannedForUseOfY1(props, initialstate);
        productivity_cloud_productivityPercentagePlannedForUseOfY1(props, initialstate);
        productivity_automation_productivityPercentagePlannedForUseOfY1(props, initialstate);
        input_validation_main(props, initialstate, ObjBtnStatus);
        let btnInput = btnFunction(ObjBtnStatus);
        // setNewHandleFlag(true)
        props.userInputDataEditFormulaInfo(initialstate, btnInput);
        setInitialstate({ ...initialstate });

      }


    }
  }
  const dataHandler = (userInputData) => {
    setInitialstate({ ...userInputData });
  }
  const resetHandler = () => {
    setresetHandleFlag(true);
}

  return (
    <div className="inputName">
      <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />
      <NavBar {...props} userNavBar={props.userInpuData.defaultInputData['response']['estimate']}
        title='ProductivityInput'></NavBar>
      <Content>
        <HeaderInputs title='input'
          userData1={props.userInpuData.defaultInputData['response']['estimate']}
          resetHandler={resetHandler}
          {...props}
        ></HeaderInputs>

        <div className='amsInputMainHead'>
          <div className='amsInput'>
            <div className="Sectionclass">
              <div className="Y1Productivity">
                <TextInput
                  type='text'
                  value={inputTextProd}
                  readOnly={readOnlyStatus}
                  labelText={englishValue('Y1 Productivity %')}
                  onChange={changeHandler}
                />
              </div>
              <div className="text-rigt">
              The year 1 productivity is flexible because we may not want to apply productivity for full year so you can reduce the applicability for Year 1. Eg: for 6 months we can use 50%.
              </div>
            </div>
            <div className="MiddleLine">
              *Changing Client Maturity and Applicability will affect the final productivity.
              Sub-Productivity Lever with non-default values will be highlighted.
            </div>
          </div>

          <DevSecOps
            inputTextProdVal={inputTextProd}
            initialstateData={initialstate}
            {...props}
            dataHandler={dataHandler}
            resetHandleFlagDev={resetHandleFlag}
            readOnlyStatusVal={readOnlyStatus}
            id={englishValue("devsecops_1")}></DevSecOps>
          <Automation
            initialstateData={initialstate}
            inputTextProdVal={inputTextProd}
            resetHandleFlag={resetHandleFlag}
            dataHandler={dataHandler}
            resetHandleFlagDev={resetHandleFlag}
            readOnlyStatusVal={readOnlyStatus}
            {...props} id={englishValue("Automation_1")}></Automation>
          <Cloud resetHandleFlag={resetHandleFlag}  readOnlyStatusVal={readOnlyStatus} resetHandleFlagDev={resetHandleFlag} dataHandler={dataHandler} initialstateData={initialstate} inputTextProdVal={inputTextProd}  {...props} id={englishValue("Cloud_1")}></Cloud>
          <Testing resetHandleFlag={resetHandleFlag}  readOnlyStatusVal={readOnlyStatus} resetHandleFlagDev={resetHandleFlag}  dataHandler={dataHandler} initialstateData={initialstate} inputTextProdVal={inputTextProd}  {...props} id={englishValue("Testing_1")}></Testing>
          <Efficiency resetHandleFlag={resetHandleFlag}   readOnlyStatusVal={readOnlyStatus} resetHandleFlagDev={resetHandleFlag} dataHandler={dataHandler} initialstateData={initialstate} inputTextProdVal={inputTextProd}  {...props} id={englishValue("Efficiency_1")}></Efficiency>
        </div>
        <Feedback/>
      </Content>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductivityInput);