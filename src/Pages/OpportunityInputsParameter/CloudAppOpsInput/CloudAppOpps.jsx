import React, { useState, useEffect } from 'react';
import NavBar from '../../../Components/CommonFuncs/NavBar/Navbar';
import HeaderInputs from '../HeaderInputs';
import MultipleAccoridon from './MultipleAccoridon'
import { Accordion, AccordionItem, Breadcrumb, BreadcrumbItem, Content } from 'carbon-components-react';
import English from "../../../Json/English.json"
import { UpArrow, DownArrow } from '../../../Components/CommonFuncs/Icons';
import TableData from '../../../Components/CommonFuncs/TableInput';
import {
  cloudAppos__onCloudAppCountDistribution_C71,
  cloudAppos__onCloudAppCountDistribution_D71,
  cloudAppos__onCloudAppCountDistribution_E71,
  cloudAppOps_rehostedAppsOnCloudDistributionPercentage_C76,
  cloudAppOps_rehostedAppsOnCloudDistributionPercentage_D76,
  cloudAppOps_rehostedAppsOnCloudDistributionPercentage_E76,
  cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_C78,
  cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_D78,
  cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_E78,
  cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_C80,
  cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_D80,
  cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_E80,
  cloudAppOps_saasAppsOnCloudDistributionPercentage_C82,
  cloudAppOps_saasAppsOnCloudDistributionPercentage_D82,
  cloudAppOps_saasAppsOnCloudDistributionPercentage_E82,
  cloudAppOps_totalContainerizedAppsOnCloudCountDistribution_C88,
  cloudAppos_totalContainerizedAppsOnCloudCountDistribution_D88,
  cloudAppos_totalContainerizedAppsOnCloudCountDistribution_E88,
  cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_C89,
  cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_D89,
  cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_E89
} from "../../../Components/CommonFuncs/formula/FormulaComponent_CloudOpps"
import { arrangeColumn, arrCoversionOrder, CloudlandscapeData, englishValue, NumberValidation, NumberValidationPercentage } from "../../../Utils/CommonFunc"
import UseCustomInput from '../UseCustomInput';
import LoaderApp from '../../LoaderApp';
import { calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs } from '../../../Components/CommonFuncs/formula/FormulaComponent_applicationTechnology';
import { input_validation_main } from '../../../Components/CommonFuncs/formula/Validations/ValidationMain';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store/actions/ActionCreator';
import { connect } from 'react-redux';
import "./CloudAppOps.scss"
import MovetoCloud from './MovetoCloud';
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
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const CloudAppOpps = React.memo((props) => {
  const [initialstate, setInitialstate] = useState(props.userInpuData.defaultInputData['response']['estimate'].userInputs)
  const [resetHandleFlag, setresetHandleFlag] = useState(false);
  const [NewHandleFlag, setNewHandleFlag] = useState(false);
  const [FocusFlag, setFocusFlag] = useState(false);
  const [FocusValueIdFlag, setFocusValueIdFlag] = useState('');

  useEffect(() => {
    if (resetHandleFlag || NewHandleFlag) {
      setInitialstate({ ...props.userInpuData.defaultInputData['response']['estimate'].userInputs });
      setCloudaps(props.userInpuData.defaultInputData['response']['estimate'].userInputs['clientCloudLandscape']['cloudAppsAndblendedEffortsDistributionPercentage']);
      setresetHandleFlag(false);
      setNewHandleFlag(false)
    }
  })
  const sumCloudHandler = () => {
    let totalPercent = 100;
    let sumCloudAps = {}
    let simpleValue = (((Number(initialstate['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['simple'])) +
      (Number(initialstate['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['simple'])) +
      (Number(initialstate['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['simple'])) +
      (Number(initialstate['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['simple']))).toFixed(2));
    let mediumValue = (((Number(initialstate['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['medium'])) +
      (Number(initialstate['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['medium'])) +
      (Number(initialstate['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['medium'])) +
      (Number(initialstate['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['medium']))).toFixed(2));
    let complexValue = (((Number(initialstate['cloudAppOps']['rehostedAppsOnCloudDistributionPercentage']['complex'])) +
      (Number(initialstate['cloudAppOps']['replatformRefactorAppsOnCloudDistributionPercentage']['complex'])) +
      (Number(initialstate['cloudAppOps']['reArchitectReBuildAppsOnCloudDistributionPercentage']['complex'])) +
      (Number(initialstate['cloudAppOps']['saasAppsOnCloudDistributionPercentage']['complex']))).toFixed(2));
    if ((simpleValue !== totalPercent.toFixed(2)) || (mediumValue !== totalPercent.toFixed(2)) || (complexValue !== totalPercent.toFixed(2))) {
      sumCloudAps = {
        "simple": simpleValue,
        "medium": mediumValue,
        "complex": complexValue,
        "total": "",
        "range": "",
        "uiStatus": {
          "iconStatus": {
            "warning": false,
            "ok": false,
            "warningMessage": ""
          },
          "editableStatus": {
            "simple": false,
            "medium": false,
            "complex": false,
            "total": false,
            "range": false
          }
        }
      }
      initialstate['cloudAppOps']['sumTotalCloudApps'] = sumCloudAps;
    } else {
      sumCloudAps = {
        "simple": simpleValue,
        "medium": mediumValue,
        "complex": complexValue,
        "total": "",
        "range": "",
        "uiStatus": {
          "iconStatus": {
            "warning": false,
            "ok": true,
            "warningMessage": ""
          },
          "editableStatus": {
            "simple": false,
            "medium": false,
            "complex": false,
            "total": false,
            "range": false
          }
        }
      }
      initialstate['cloudAppOps']['sumTotalCloudApps'] = sumCloudAps;
    }
  }
  sumCloudHandler();
  let data = Object.keys(initialstate.clientCloudLandscape.totalBlendedEffortsForCloudAppsDistribution);
  //rearranging of columns
  data = CloudlandscapeData(data, ['totalBlendedEffortsForL1', 'totalBlendedEffortsForL2', 'totalBlendedEffortsForL3', 'totalBlendedEffortsForL4', 'totalBlendedEffortsForMinorEnh'])
  const datakeys = initialstate.clientCloudLandscape.totalBlendedEffortsForCloudAppsDistribution;
  const cloudApp = initialstate.clientCloudLandscape.cloudAppsAndblendedEffortsDistributionPercentage;
  const dict = { ...English };
  const tableTwo = [initialstate.cloudAppOps][0];

  const { disableBtn, tableCellInput } = UseCustomInput(tableTwo);
  //reagranging of rows
  let tdd = arrCoversionOrder(tableCellInput, [
    "onCloudAppDistributionPercentage",
    "onCloudAppCountDistribution",
    "notOnCloudAppCountDistribution"
  ]);
  tdd = arrangeColumn(tdd, ['simple', 'medium', 'complex', 'total', 'range', 'uiStatus'])
  let td2 = arrCoversionOrder(tableCellInput, [
    "rehostedAppsOnCloudDistributionPercentage",
    "rehostedAppsOnCloudCountDistribution",
    "replatformRefactorAppsOnCloudDistributionPercentage",
    "replatformRefactorAppsOnCloudCountDistribution",
    "reArchitectReBuildAppsOnCloudDistributionPercentage",
    "reArchitectReBuildAppsOnCloudCountDistribution",
    "saasAppsOnCloudDistributionPercentage",
    "saasAppsOnCloudCountDistribution",
    "totalAppsOnCloudCountDistribution",
    "sumTotalCloudApps"
  ]);
  td2 = arrangeColumn(td2, ['simple', 'medium', 'complex', 'total', 'range', 'uiStatus'])
  let td3 = arrCoversionOrder(tableCellInput, [
    "replatformRefactorAppsMovingToContainerDistributionPercentage",
    "reArchitectReBuildAppsMovingToContainerDistributionPercentage",
    "totalContainerizedAppsOnCloudCountDistribution"
  ]);
  td3 = arrangeColumn(td3, ['simple', 'medium', 'complex', 'total', 'range', 'uiStatus'])
  const [client, setClient] = useState(true);
  const [headerClient, setHeaderClient] = useState(false);
  const [headerCloud, setHeaderCloud] = useState(false);
  let [cloudaps, setCloudaps] = useState(cloudApp);

  const handleClick = (e, id) => {
    let arr = cloudaps.map(ele => {
      if (ele.rowId === id.rowId) {
        return { ...ele, enabled: e }
      }
      else {
        return { ...ele }

      }
    });
    let userData = props.userInpuData.defaultInputData.response;
    let userCloudInputData = userData['estimate']['userInputs']['cloudAppOps'];
    let ObjBtnStatus = {
      errorBtn: false,
      cheackBtn: false
    }
    props.calculateClientCloudLandscapeAction(userCloudInputData, arr).then((res) => {
      if (res.status === 'SUCCESS') {
        let userInputData = userData['estimate']['userInputs'];
        userInputData['clientCloudLandscape'] = res.data;
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        setCloudaps(res.data.cloudAppsAndblendedEffortsDistributionPercentage);
      }
      else {
        if (res.errorCode === 'ERRCAS401B') {
          props.history.push('/');
        } else {
          alert(englishValue('TechnicalError'))
        }
      }

    }).catch((err) => {
      alert(englishValue('TechnicalError'))
    });

  }
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
  const inputEditDataNormal = (userInputData, objStatus) => {

    input_validation_main(props, userInputData, objStatus);
    let btnInput = btnFunction(objStatus);
    setNewHandleFlag(true)
    props.userInputDataEditFormulaInfo(userInputData, btnInput);

  }
  const InputCloudAppopss = (userInputData, ObjBtnStatus) => {
    let userCloudInputData = userInputData['cloudAppOps'];
    props.calculateClientCloudLandscapeAction(userCloudInputData, cloudaps).then((res) => {
      if (res.status === 'SUCCESS') {
        // let userInputData = userData['estimate']['userInputs'];
        userInputData['clientCloudLandscape'] = res.data;
        inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
        setCloudaps(res.data.cloudAppsAndblendedEffortsDistributionPercentage);
      }
      else {
        if (res.errorCode === 'ERRCAS401B') {
          props.history.push('/');
        } else {
          alert(englishValue('TechnicalError'))
        }
      }
    }).catch((err) => {
      alert(englishValue('TechnicalError'))
    });

  }
  const inputEditBaselineTestingFTEs = (userInputData, objStatus) => {
    props.resetDashcalculateMinEnhWtHrs(userInputData).then((res) => {
      if (res.status === 'SUCCESS') {
        calculateMinEnhWtHrsAndAdhocActivityWtOneBaselineTestingFTEs(props, userInputData, res.data);
        input_validation_main(props, userInputData, objStatus);
        let btnInput = btnFunction(objStatus);
        setNewHandleFlag(true)
        props.userInputDataEditFormulaInfo(userInputData, btnInput);

      }

      else {
        if (res.errorCode === 'ERRCAS401B') {
          props.history.push('/');
        } else {
          alert(englishValue('TechnicalError'))
        }

        let btnInput = btnFunction(objStatus);
        setNewHandleFlag(true)
        props.userInputDataEditFormulaInfo(userInputData, btnInput);
      }
    }).catch((err) => {
      alert(englishValue('TechnicalError'))
      let btnInput = btnFunction(objStatus);
      setNewHandleFlag(true)
      props.userInputDataEditFormulaInfo(userInputData, btnInput);

    });
  }
  const handlerChange = ((e) => {
    let ObjBtnStatus = {
      errorBtn: false,
      cheackBtn: false
    }
    let valueChange = e.target.id;
    let valueOppParameter = valueChange.split('_');
    let idOppParameter = valueOppParameter[1] + '_' + valueOppParameter[2];
    let userData = props.userInpuData.defaultInputData.response;
    let userInputData = userData['estimate']['userInputs'];
    var IntitalValue = userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]];
    setFocusValueIdFlag("");
    setFocusFlag(false);
    if (parseFloat(IntitalValue) === parseFloat(e.target.value)) {
    } else {
      userInputData[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = parseFloat(e.target.value)
      switch (idOppParameter) {
        case 'onCloudAppDistributionPercentage_simple':
          cloudAppos__onCloudAppCountDistribution_C71(props, userInputData);

          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "onCloudAppDistributionPercentage_medium":
          cloudAppos__onCloudAppCountDistribution_D71(props, userInputData);
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "onCloudAppDistributionPercentage_complex":
          cloudAppos__onCloudAppCountDistribution_E71(props, userInputData);
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "rehostedAppsOnCloudDistributionPercentage_simple":
          cloudAppOps_rehostedAppsOnCloudDistributionPercentage_C76(props, userInputData);
          // inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "rehostedAppsOnCloudDistributionPercentage_medium":
          cloudAppOps_rehostedAppsOnCloudDistributionPercentage_D76(props, userInputData);
          // inputEditDataNormal(userInputData, ObjBtnStatus);
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "rehostedAppsOnCloudDistributionPercentage_complex":
          cloudAppOps_rehostedAppsOnCloudDistributionPercentage_E76(props, userInputData);
          // inputEditDataNormal(userInputData, ObjBtnStatus);
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "replatformRefactorAppsOnCloudDistributionPercentage_simple":
          cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_C78(props, userInputData);
          // inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "replatformRefactorAppsOnCloudDistributionPercentage_medium":
          cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_D78(props, userInputData);
          // inputEditDataNormal(userInputData, ObjBtnStatus);
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "replatformRefactorAppsOnCloudDistributionPercentage_complex":
          cloudAppOps_replatformRefactorAppsOnCloudDistributionPercentage_E78(props, userInputData);
          // inputEditDataNormal(userInputData, ObjBtnStatus);
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "reArchitectReBuildAppsOnCloudDistributionPercentage_simple":
          cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_C80(props, userInputData);
          // inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "reArchitectReBuildAppsOnCloudDistributionPercentage_medium":
          cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_D80(props, userInputData);
          // inputEditDataNormal(userInputData, ObjBtnStatus)
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "reArchitectReBuildAppsOnCloudDistributionPercentage_complex":
          cloudAppOps_reArchitectReBuildAppsOnCloudDistributionPercentage_E80(props, userInputData);
          // inputEditDataNormal(userInputData, ObjBtnStatus)
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "saasAppsOnCloudDistributionPercentage_simple":
          cloudAppOps_saasAppsOnCloudDistributionPercentage_C82(props, userInputData);
          // inputEditBaselineTestingFTEs(userInputData, ObjBtnStatus);
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "saasAppsOnCloudDistributionPercentage_medium":
          cloudAppOps_saasAppsOnCloudDistributionPercentage_D82(props, userInputData);
          // inputEditDataNormal(userInputData, ObjBtnStatus)
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "saasAppsOnCloudDistributionPercentage_complex":
          cloudAppOps_saasAppsOnCloudDistributionPercentage_E82(props, userInputData);
          // inputEditDataNormal(userInputData, ObjBtnStatus)
          InputCloudAppopss(userInputData, ObjBtnStatus);
          break;
        case "replatformRefactorAppsMovingToContainerDistributionPercentage_simple":
          cloudAppOps_totalContainerizedAppsOnCloudCountDistribution_C88(props, userInputData);
          inputEditDataNormal(userInputData, ObjBtnStatus)
          break;
        case "replatformRefactorAppsMovingToContainerDistributionPercentage_medium":
          cloudAppos_totalContainerizedAppsOnCloudCountDistribution_D88(props, userInputData);
          inputEditDataNormal(userInputData, ObjBtnStatus)
          break;
        case "replatformRefactorAppsMovingToContainerDistributionPercentage_complex":
          cloudAppos_totalContainerizedAppsOnCloudCountDistribution_E88(props, userInputData);
          inputEditDataNormal(userInputData, ObjBtnStatus)
          break;
        case "reArchitectReBuildAppsMovingToContainerDistributionPercentage_simple":
          cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_C89(props, userInputData);
          inputEditDataNormal(userInputData, ObjBtnStatus)
          break;
        case "reArchitectReBuildAppsMovingToContainerDistributionPercentage_medium":
          cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_D89(props, userInputData);
          inputEditDataNormal(userInputData, ObjBtnStatus)
          break;
        case "reArchitectReBuildAppsMovingToContainerDistributionPercentage_complex":
          cloudAppOps_reArchitectReBuildAppsMovingToContainerDistributionPercentage_E89(props, userInputData);
          inputEditDataNormal(userInputData, ObjBtnStatus)
          break;
        default:
          inputEditDataNormal(userInputData, ObjBtnStatus)
          break
      }
    }
  });
  const handlerFocus = (e) => {
    let valueChange = e.target.id;
    setFocusValueIdFlag(valueChange);
    setFocusFlag(true);
  }

  const handlerChangeData = (e) => {
    let valueChange = e.target.id;
    let valueOppParameter = valueChange.split('_');
    var newState = JSON.parse(JSON.stringify(initialstate));


    if (e.target.value === '' || e.target.value === '%') {
      newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = 0;
      setInitialstate({ ...newState });
    } else if (e.target.value === '0' || e.target.value === '0%') {
      newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = 0;
      setInitialstate({ ...newState });
    } else {
      let value = e.target.value.replace(/^0+/, 0);
      newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = value;
      if ((valueOppParameter[1]).includes('Percentage')) {
        let value = (e.target.value.replace(/%/, ''))
        value = value.replace(/^0+/, 0);
        newState[valueOppParameter[0]][valueOppParameter[1]][valueOppParameter[2]] = value;
        if (NumberValidationPercentage((value))) {
          setInitialstate({ ...newState });
        }
      }
      else {
        if (NumberValidation((e.target.value))) {
          setInitialstate({ ...newState });
        }

      }

    }


  }


  const resetHandler = () => {
    setresetHandleFlag(true);
  }
  return (
    <div className="inputName">
      <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />
      <NavBar {...props}
        userNavBar={props.userInpuData.defaultInputData['response']['estimate']}
        title='cloudApps' />
      <Content>
        <HeaderInputs {...props}
          userData1={props.userInpuData.defaultInputData['response']['estimate']}
          title='input'
          resetHandler={resetHandler}
        ></HeaderInputs>
        <div className='generalInput cloudAppOpps'>
          <div className="breadCrumbCloud">
            <Breadcrumb>
              <BreadcrumbItem href="javascript:void(0)">Opportunity Inputs</BreadcrumbItem>
              <BreadcrumbItem href="javascript:void(0)">Cloud + DevSecOps</BreadcrumbItem>
              <span className="accordianAll">
                <span className="collapseAll" onClick={() => setHeaderCloud(false)}>{englishValue('collapseAll')}<span className="arrow"><UpArrow /></span></span>
                <span className="expandAll" onClick={() => setHeaderCloud(true)}>{englishValue('expandAll')}<span className="arrow"><DownArrow /></span></span>
              </span>
            </Breadcrumb>
          </div>
          <div className="clientCloudDiv" >

            <Accordion>
              <div className="clientInner">
                <p className="sub-head">{englishValue("sub-head")}</p>
                {/* 1st accordin Application on cloud display */}
                <AccordionItem title={englishValue('applicationCloud')} open={true}>
                  <div className='CloudAppsTable'>
                    <TableData
                      title=""
                      description=""
                      idTitle="cloudAppOps"
                      handlerChange={handlerChange}
                      headers={["", "", englishValue('simple'), englishValue('medium'), englishValue('complex'), englishValue('total'), englishValue('range')]}
                      rows={tdd}
                      UserState={props.userestimateState.state}
                      UserEmail={props.userestimateState.reviewerEmail}
                      handlerChangeData={handlerChangeData}
                      handlerFocus={handlerFocus}
                      FocusFlag={FocusFlag}
                      FocusValueIdFlag={FocusValueIdFlag}
                    ></TableData>
                  </div>
                </AccordionItem>
                {/* 2nd accordin Deployment model of application on cloud*/}
                <AccordionItem title={englishValue('deploymentModelCloud')} open={headerCloud}>
                  <div className='CloudAppsTable'>
                    <TableData
                      title=""
                      description=""
                      handlerChange={handlerChange}
                      idTitle="cloudAppOps"
                      headers={["", "", englishValue('simple'), englishValue('medium'), englishValue('complex'), englishValue('total'), englishValue('range')]}
                      rows={td2}
                      UserState={props.userestimateState.state}
                      UserEmail={props.userestimateState.reviewerEmail}
                      handlerChangeData={handlerChangeData}
                      handlerFocus={handlerFocus}
                      FocusFlag={FocusFlag}
                      FocusValueIdFlag={FocusValueIdFlag}
                    ></TableData>
                  </div>
                </AccordionItem>
                 {/* 3rd accordin Contarnized Applications*/}
                <AccordionItem title={englishValue('containerizedApplications')} open={headerCloud}>
                  <div className='CloudAppsTable'>
                    <TableData
                      title=""
                      description=""
                      idTitle="cloudAppOps"
                      handlerChange={handlerChange}
                      headers={["", "", englishValue('simple'), englishValue('medium'), englishValue('complex'), englishValue('total'), englishValue('range')]}
                      rows={td3}
                      UserState={props.userestimateState.state}
                      UserEmail={props.userestimateState.reviewerEmail}
                      handlerChangeData={handlerChangeData}
                      handlerFocus={handlerFocus}
                      FocusFlag={FocusFlag}
                      FocusValueIdFlag={FocusValueIdFlag}
                    ></TableData>
                  </div>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
          <div className="break"></div>
          <MovetoCloud {...props} UserEmail={props.userestimateState.reviewerEmail} UserState={props.userestimateState.state} resetHandleFlag={resetHandleFlag} handlerFocus={handlerFocus}
            FocusFlag={FocusFlag}
            FocusValueIdFlag={FocusValueIdFlag}></MovetoCloud>
          <div className="break"></div>
          <div className="clientCloudDiv">

            <div className="clientMainDiv clientInner cloddiv">
              <span className="head">{englishValue('clientCloudLandscape')}<span style={{ color: '#da1e28' }}>{englishValue('Readonly')}</span></span>
              <p className="CloudAppsTable">
                <span className="accordianAll">
                  <span className="collapseAll" onClick={() => setClient(!false)}>{englishValue('collapseAll')} <span className="arrow"><UpArrow /></span></span>

                  <span className="expandAll" onClick={() => setClient(!true)}>{englishValue('expandAll')}<span className="arrow"><DownArrow /></span></span>
                </span> </p>
              <p className="clientclouddescrip" >
                {englishValue('cloudAppDiscrip')}
              </p><br /><br />
              <p className="blendPer">{englishValue("totalBlended")}</p>
              <div className="CloudClienaccord">
                <div style={{ display: "flex" }}>
                  {
                    data.map((d1, index) =>
                      <>
                        <div style={{ flex: "1 1 auto" }}>
                          <div className="my-content">
                            <span className="minorBlend" >{datakeys[d1]}%</span>
                            <span
                              style={{}}>{dict[d1]}</span>
                          </div>
                        </div>
                        <span className={index != data.length - 1 ? "borderLine" : ""}></span>
                      </>
                    )
                  }
                </div>
              </div>
              {cloudaps.map((id, index) =>
                <AccordionItem cloudApp={cloudaps} title={id.serviceType + '-' + id.cloudApplicationDistribution} open={headerClient ? headerClient : !client} key={index}>
                  <MultipleAccoridon id={id} handleClick={handleClick} dict={dict} isEnable={id.enabled} {...props} />
                </AccordionItem>
              )}</div>
          </div>
        </div>
        <Feedback/>
      </Content>
      <span className="space"></span>
    </div>
  );
});

export default connect(mapStateToProps, mapDispatchToProps)(CloudAppOpps);