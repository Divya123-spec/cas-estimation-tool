import React, { useState, useEffect } from 'react';
import NavBar from '../../../Components/CommonFuncs/NavBar/Navbar';
import HeaderInputs from '../../OpportunityInputsParameter/HeaderInputs';
import AdditionalCost from '../../OppurtunityParameter/AdditionalCost';
import AdditionalInfo from '../../OppurtunityParameter/ApplicationTechnology';
import EffortEstimationParameters from '../../OppurtunityParameter/NonStandardEstimate/EffortEstimationParameters';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/actions/ActionCreator";
import { Content } from 'carbon-components-react';
import LoaderApp from '../../LoaderApp';
import { BasicInfoNumberOfApplicationScope, BasicInfoNumberOfApplicationScopeDealstartDate, retiringApplicationHandler } from '../../../Components/CommonFuncs/formula/FormulaComponent_Basic';
import { NonLabourNumberOfApplicationScope } from '../../../Components/CommonFuncs/formula/FormulaComponent_NonLabour';
import { EffortEsimationScope, OpportunityParameterAdditionalCost } from '../../../Components/CommonFuncs/formula/FormulaComponent_applicationCost'
import MigrationPopup from '../../../Pages/Versoning/MigrationPopup'
import { applicationTechnologyFormula } from
  '../../../Components/CommonFuncs/formula/FormulaComponent_applicationTechnology'
import Feedback from '../../Feedback/Feedback';

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
    userNonLabourStub:state.userNonLabourStub
    
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const OpportunityParameters = (props) => {
  const [disableBtn, setDisableBtn] = useState(false);
  const [loaderBtnCost, setloaderBtnCost] = useState(false);
  const [randomKey, setrandomKey] = useState("");
  const [resetHandleFlag, setresetHandleFlag] = useState(false);
  const [NewHandleFlag, setNewHandleFlag] = useState(false);
  const [opportunityParameter, setOpportunityParameter] = useState({
    basicInfo: props.userInpuData.defaultInputData['response']['estimate'].userInputs['basicInfo'],
    appTechnologyDistribution: props.userInpuData.defaultInputData['response']['estimate'].userInputs['appTechnologyDistribution'],
    additionalCostInfo: props.userInpuData.defaultInputData['response']['estimate'].userInputs['additionalCostInfo'],
    effortEstimationParameters: props.userInpuData.defaultInputData['response']['estimate'].userInputs['effortEstimationParameters']
  });
  useEffect(() => {
    if (resetHandleFlag || NewHandleFlag) {
      setOpportunityParameter({
        basicInfo: props.userInpuData.defaultInputData['response']['estimate'].userInputs['basicInfo'],
        appTechnologyDistribution: props.userInpuData.defaultInputData['response']['estimate'].userInputs['appTechnologyDistribution'],
        additionalCostInfo: props.userInpuData.defaultInputData['response']['estimate'].userInputs['additionalCostInfo']
      });
      setresetHandleFlag(false);
      setNewHandleFlag(false);
    }
  })

  const [initialstate, setInitialstate] = useState(props.userInpuData.defaultInputData['response']['estimate'].userInputs)
  const disableBtnHandler = (FlagValue) => {
    setDisableBtn(FlagValue);
  }

  const HandlerBtn = (flag) => {
    setloaderBtnCost(flag)
  }

  const resetHandler = () => {
    setresetHandleFlag(true);
    setrandomKey(Math.random());
    HandlerBtn(true);
  }



  const handleChangeOppBasic = (basicInfo, newDistributionArr) => {
    let newAddInfo = { ...opportunityParameter }
    newAddInfo['appTechnologyDistribution'] = {
      ...newAddInfo['appTechnologyDistribution'],
      stdNonStdWorkStreams: newDistributionArr
    }
    let newBasic = { ...opportunityParameter }
    newBasic['basicInfo'] = { ...basicInfo }
    setOpportunityParameter({
      ...newBasic,
      ...newAddInfo,
    });
    setNewHandleFlag(true)
   // call formulaComponent basic to append the updated values in redux 
    BasicInfoNumberOfApplicationScope(props, basicInfo, newDistributionArr)


  }
  //JIRA 1137   retiring application
  const handleChangeOppRetiringApplication = (basicInfo) => {
   
    let newBasic = { ...opportunityParameter }
    newBasic['basicInfo'] = { ...basicInfo }
    setOpportunityParameter({
      ...newBasic,
    });
    setNewHandleFlag(true)
   // call formulaComponent basic to append the updated values in redux 
   retiringApplicationHandler(props, basicInfo)


  }

  const handleChangeOppBasicDealStartDate = (basicInfo, newDistributionArr) => {
    let newAddInfo = { ...opportunityParameter }
    newAddInfo['appTechnologyDistribution'] = {
      ...newAddInfo['appTechnologyDistribution'],
      stdNonStdWorkStreams: newDistributionArr
    }
    let newBasic = { ...opportunityParameter }
    newBasic['basicInfo'] = { ...basicInfo }
    setOpportunityParameter({
      ...newBasic,
      ...newAddInfo,
    });
    setNewHandleFlag(true)

    BasicInfoNumberOfApplicationScopeDealstartDate(props, basicInfo, newDistributionArr)


  }
  const handleChangeOppAdditionalDis = (newDistributionArr) => {
    let newAddInfo = { ...opportunityParameter }
    newAddInfo['appTechnologyDistribution'] = {
      ...newAddInfo['appTechnologyDistribution'],
      stdNonStdWorkStreams: newDistributionArr
    }

    setOpportunityParameter({
      ...newAddInfo
    });
    applicationTechnologyFormula(props, newDistributionArr)


  }
  const handleChangeOppAdditionalCost = (additionalCostData) => {

    OpportunityParameterAdditionalCost(props, additionalCostData);
  }

  function handleEffortEstimationParams(params) {
    HandlerBtn(true);
    EffortEsimationScope(props, params);

  }
  return (
    <>
    {props.userSessionData.migrationPopup?
    <MigrationPopup {...props}></MigrationPopup>
    :''}
    <div className="inputName inputNameOpp">
      <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />

      <NavBar {...props}
        userNavBar={props.userInpuData.defaultInputData['response']['estimate']}
        title='OpportunityParameter' />
      <Content>
        <HeaderInputs title='input'
          userData1={props.userInpuData.defaultInputData['response']['estimate']}
          {...props}

          resetHandler={resetHandler}

        ></HeaderInputs>
        <div className='generalInput'>
          <div className="oppurtunity-input">
            <AdditionalInfo
              key={randomKey}
              {...props}
              dropDownList={props.userDropDownData.defaultDropDown['response']}
              additionaldistribution={opportunityParameter['appTechnologyDistribution']}
              basicinput={opportunityParameter['basicInfo']} disableBtnHandler={disableBtnHandler}
              handleChangeOppBasic={handleChangeOppBasic}
              // retirinng application
              handleChangeOppRetiringApplication={handleChangeOppRetiringApplication}
              handleChangeOppBasicDealStartDate={handleChangeOppBasicDealStartDate}
              handleChangeOppAdditionalDis={handleChangeOppAdditionalDis}
            >
            </AdditionalInfo>
            <EffortEstimationParameters
              {...props}
              additionalcost={opportunityParameter["additionalCostInfo"]}
              loaderBtnCost={loaderBtnCost}
              HandlerBtn={HandlerBtn}
              handleEffortEstimationParams={handleEffortEstimationParams}
            />
            <AdditionalCost
              {...props}
              dropDownList={props.userDropDownData.defaultDropDown['response']['defaultDropdown']}
              additionalcost={opportunityParameter['additionalCostInfo']}
              ChangeOppAdditionalCost={handleChangeOppAdditionalCost}
              loaderBtnCost={loaderBtnCost}
              HandlerBtn={HandlerBtn}
            >

            </AdditionalCost>
          </div>
        </div>
        <Feedback/>
      </Content>
    </div>
    </>
    
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(OpportunityParameters);

