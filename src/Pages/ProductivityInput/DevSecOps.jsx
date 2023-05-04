import React, { useState, useEffect } from "react";
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableExpandedRow,
  TableExpandRow,
  Select,
  SelectItem,
  Checkbox,
  TableContainer,
  TableHeader,
  TableRow,
  TableHead,
  TooltipIcon

} from "carbon-components-react";
import './ProductivityInput.scss';
import { englishValue } from "../../Utils/CommonFunc";
import BriefEstimate from '../OppurtunityParameter/BriefEstimate';
import DevSecOpsLink from './DevSecOpsLink';
import { CloseOutline16, CheckmarkOutline16, CheckmarkFilled16, ErrorFilled16, WarningFilled16 } from "@carbon/icons-react";
import { devscops_isScopeApplicablity } from "../../Components/CommonFuncs/formula/formulaProductivity_devscops";
import { input_validation_main } from "../../Components/CommonFuncs/formula/Validations/ValidationMain";
const headerData = [
  {
    key: "",
    header: ""
  },
  {
    key: "ProductivityLever",
    header: englishValue('productivityLever')
  },
  {
    key: "ClientMaturity",
    header: englishValue('clientMaturity')
  },
  {
    key: "Applicability",
    header: englishValue('Applicability')
  },
  {
    key: "ApplicationScope",
    header: englishValue('ApplicationScope')
  },
  {
    key: "Y1",
    header: englishValue('y1')
  },
  {
    key: "Y2",
    header: englishValue('y2')
  },
  {
    key: "Y3",
    header: englishValue('y3')
  },
  {
    key: "Y4",
    header: englishValue('y4')
  },
  {
    key: "Y5",
    header: englishValue('y5')
  },
  {
    key: "Y6",
    header: englishValue('y6')
  },
  {
    key: "Y7",
    header: englishValue('y7')
  }


];
function DevSecOps({ id, ...props }) {

  const dataProductivity = props.initialstateData.productivity.devSecOps;
  const [initialstate, setInitialstate] = useState(props.initialstateData);
  useEffect(() => {
    if (props.resetHandleFlagDev) {
      setInitialstate({ ...props.userInpuData.defaultInputData['response']['estimate'].userInputs });

    }
  })
  const dropDownValueHandle1 = (id, val) => {
    let DropdownValue = '';
    props.userDropDownData.defaultDropDown['response'].productivity.devSecOpsLevers.map((ele) => {
      if (ele.code == id) {

        return (ele.clientMaturityLevelOptions.map((item, index) => {
          if (val == item.key) {
            DropdownValue = item.value;
          }
        }));
      }
    }
    );
    return DropdownValue;
  }
  var newObj = [];
  initialstate.productivity.devSecOps.devSecOpsLevers.forEach(ele => {
    let valueDropDown = dropDownValueHandle1(ele.code, ele.clientMaturityLevelSelectionKey)
     if(ele.code!=='devSecOps_111140'){
      newObj.push({
        'id': ele.code,
        'ProductivityLever': ele.productivityLever,
        'ClientMaturity': valueDropDown,
        'Applicability': ele.isScopeApplicable,
        'ApplicationScope': ele.appScopeCoveredPercentage,
        'Y1': ele.finalProductivityPercentageByApplicability.y1,
        'Y2': ele.finalProductivityPercentageByApplicability.y2,
        'Y3': ele.finalProductivityPercentageByApplicability.y3,
        'Y4': ele.finalProductivityPercentageByApplicability.y4,
        'Y5': ele.finalProductivityPercentageByApplicability.y5,
        'Y6': ele.finalProductivityPercentageByApplicability.y6,
        'Y7': ele.finalProductivityPercentageByApplicability.y7
      })
     }
   

  });
  let ObjBtnStatus = {
    errorBtn: false,
    cheackBtn: false
  }
  let headerTitle = (<span className='AMSHeader'>DevSecOps
    {dataProductivity.uiStatus.iconStatus.ok ?
      <>
        <span className="tickmark-class" style={{ paddingLeft: '1rem' }}><CheckmarkFilled16 /></span>

      </>
      :
      <>
        <span className="warning-productivity-class" style={{ paddingLeft: '1rem' }}>
          {/* <TooltipIcon tooltipText='eeee' direction='right'>
                  <ErrorFilled16 />
              </TooltipIcon>
              </span> */}
          <WarningFilled16 />
        </span>
      </>
    }
  </span >)

// main validation for devscops 
  const uistatusValidation = (userInputData) => {
    let obj = {}
    let uiValidation = userInputData.productivity.devSecOps.devSecOpsLevers.every((ele) => ele['uiStatus']['iconStatus']['ok']);
    uiValidation ? obj = {
      "iconStatus": {
        "warning": false,
        "ok": true,
        "warningMessage": ""
      }
    } : obj = {
      "iconStatus": {
        "warning": true,
        "ok": false,
        "warningMessage": ""
      }
    }
    userInputData.productivity.devSecOps['uiStatus'] = obj;
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
  const dropDownValueHandler = (cell, val) => {
    var x = cell;
    let DropdownValue = '';
    let defaultdropdownValue = '';
    let id = x.split(':')[0];
    props.userDropDownData.defaultDropDown['response'].productivity.devSecOpsLevers.map((ele) => {
      if (ele.code == id) {   
        defaultdropdownValue = ele.clientMaturityLevelDefaultSelectionKey;
        return (ele.clientMaturityLevelOptions.map((item, index) => {
          if (val == item.value) {
            DropdownValue = item.key;
          }
        }));
      }
    }
    );
    return { DropdownValue, defaultdropdownValue };
  }
  const dropdowncalculation = (initialstateData, cell) => {
    
    let id = cell.split(':')[0];
  
    let newArray = initialstateData.productivity.devSecOps.devSecOpsLevers.map((ele) => {
      if (id == ele.code) {
        let Selectionkey = ele.clientMaturityLevelSelectionKey;
        ele.selectedProductivityPercentageByClientMaturityLevel = DropdowdataValues(Selectionkey, id);
        return ele;
      } else {
        return ele;
      }
    }
    );
    initialstateData.productivity.devSecOps.devSecOpsLevers = newArray;

  }

  const DropdowdataValues = (Selectionkey, id) => {
    let newDatakeyObj = {}
    props.userDropDownData.defaultDropDown['response'].productivity.devSecOpsLevers.map((ele) => {
      if (ele.code == id) {
        newDatakeyObj = ele.productivityPercentageByClientMaturityLevel[Selectionkey]

      }
    }
    );
    return newDatakeyObj;
  }
  const defaultDropDownValueHandler = (cell) => {
    var x = cell;
    let defaultdropdownValue = '';
    let id = x.split(':')[0];
    props.userDropDownData.defaultDropDown['response'].productivity.devSecOpsLevers.map((ele) => {
      if (ele.code == id) {
        defaultdropdownValue = ele.clientMaturityLevelDefaultSelectionKey;
      }
    }
    );
    return defaultdropdownValue;
  }
  // for drop down
  function handleDropDownChange(e, cell) {
    let initialStateData = initialstate;
    let initialStateProducitvity = [...initialstate.productivity.devSecOps.devSecOpsLevers];
    let valDropdown = dropDownValueHandler(cell.id, e.target.value);
    // making warning false /true
    let dataIntial = initialStateProducitvity.map(ele => (`${ele.code}:ClientMaturity` === cell.id ? (valDropdown.defaultdropdownValue == valDropdown.DropdownValue && ele.isScopeApplicable ? {
      ...ele,
      "uiStatus": {
        "iconStatus": {
          "warning": false,
          "ok": true,
          "warningMessage": ""
        }
      },
      clientMaturityLevelSelectionKey: valDropdown.DropdownValue
    } : {
        ...ele,
        "uiStatus": {
          "iconStatus": {
            "warning": true,
            "ok": false,
            "warningMessage": ""
          }
        },
        clientMaturityLevelSelectionKey: valDropdown.DropdownValue
      }) : ele));
    initialStateData.productivity.devSecOps.devSecOpsLevers = dataIntial;
    dropdowncalculation(initialStateData, cell.id);
    uistatusValidation(initialStateData);
    devscops_isScopeApplicablity(props, initialStateData);
    input_validation_main(props, initialstate, ObjBtnStatus);
    let btnInput = btnFunction(ObjBtnStatus);
    props.userInputDataEditFormulaInfo(initialstate, btnInput);
    props.dataHandler(initialStateData);
    setInitialstate({ ...initialStateData });
  }
  // for checkbox onchange
  const handleCheckboxHandler = (value, cell) => {
    let initialStateData = initialstate;
    let initialStateProducitvity = [...initialstate.productivity.devSecOps.devSecOpsLevers];
    let handlerDropValue = defaultDropDownValueHandler(cell.id);
    //Value of dropdown should be equal to scopeapplicableDefault JIRA 682
    let dataIntial = initialStateProducitvity.map(ele => (`${ele.code}:Applicability` === cell.id ? ((value==ele.isScopeApplicableByDefault) && handlerDropValue == ele.clientMaturityLevelSelectionKey ? {
      ...ele,
      "uiStatus": {
        "iconStatus": {
          "warning": false,
          "ok": true,
          "warningMessage": ""
        }
      },
      isScopeApplicable: value
    } : {
        ...ele,
        "uiStatus": {
          "iconStatus": {
            "warning": true,
            "ok": false,
            "warningMessage": ""
          }
        },
        isScopeApplicable: value
      }) : ele));
    initialStateData.productivity.devSecOps.devSecOpsLevers = dataIntial;
    uistatusValidation(initialStateData);
    //calculation on devscops
    devscops_isScopeApplicablity(props, initialStateData);
    input_validation_main(props, initialstate, ObjBtnStatus);
    let btnInput = btnFunction(ObjBtnStatus);
    //sending data to redux
    props.userInputDataEditFormulaInfo(initialstate, btnInput);
    props.dataHandler(initialStateData);
    setInitialstate({ ...initialStateData });

  }
  const Validationhandler = (id) => {
    let warningClass = '';
    initialstate.productivity.devSecOps.devSecOpsLevers.filter((ele) => {
      if (ele.code == id) {
        warningClass = ele.uiStatus.iconStatus.warning ? 'warning' : '';
      }
    })
    return warningClass;
  }
  const selectDropDownDynamic = (cell) => {
    var x = cell.id;
    let id = x.split(':')[0]
    let dataOptions = props.userDropDownData.defaultDropDown['response'].productivity.devSecOpsLevers.map((ele) => {
      if (ele.code == id) {
        return (ele.clientMaturityLevelOptions.map((item, index) =>
          <SelectItem key={item.key} value={item.value} text={item.value} />));
      }
    }
    );
    let readOnlyStatusData = props.readOnlyStatusVal ? 'readonly' : ''
    // let readOnlyStatusData = this.state.readOnlyStatus ? 'readonly' : ''
    return (

      <Select className="SelectClass"
        labelText=''
        value={cell.value}
         // adding diabled true or false for in review/approved/rework  JIRA - bug id 621/622
         disabled ={props.readOnlyStatusVal}
       
        onChange={e => handleDropDownChange(e, cell)}
      >
        {dataOptions}
      </Select>

    )
  }
  // the rows that come after expanding the row in each cell
  const expandedRowData = (cell) => {
    let dataOptions = initialstate.productivity.devSecOps.devSecOpsLevers.map((ele) => {
      if (ele.code == cell) {
        return (
          <div className="SubMainClass">
            <span className="headingScopeclass">{englishValue('ScopeofApplicability')}</span>
            <span className="verticalSpan"></span>

            <div className="vertical-content">
              {ele.applicabilityScope.l1 ? <CheckmarkOutline16 fill="#42BE65" /> : <CloseOutline16 fill="red" />}
              <span className="applicable">{englishValue('L1.5')}</span>

            </div>
            <div className="vertical-content">
              {ele.applicabilityScope.l2 ? <CheckmarkOutline16 fill="#42BE65" /> : <CloseOutline16 fill="red" />}
              <span className="applicable">{englishValue('L2')}</span>


            </div>
            <div className="vertical-content">
              {ele.applicabilityScope.l3 ? <CheckmarkOutline16 fill="#42BE65" /> : <CloseOutline16 fill="red" />}
              <span className="applicable">{englishValue('L3')}</span>

            </div>
            <div className="vertical-content">
              {ele.applicabilityScope.l4 ? <CheckmarkOutline16 fill="#42BE65" /> : <CloseOutline16 fill="red" />}
              <span className="applicable">{englishValue('L4')}</span>


            </div>
            <div className="vertical-content">
              {ele.applicabilityScope.min_enh ? <CheckmarkOutline16 fill="#42BE65" /> : <CloseOutline16 fill="red" />}
              <span className="applicable">{englishValue('Min.Enh.')}</span>

            </div>
            <div className="vertical-content">
              {ele.applicabilityScope.testing ? <CheckmarkOutline16 fill="#42BE65" /> : <CloseOutline16 fill="red" />}
              <span className="applicable">{englishValue('TestingP')}</span>

            </div>
          </div>

        );
      }
    }
    );
    return (
      <>
        {dataOptions}
      </>
    )

  }



  return (
    <div className='Devscopsmain' id={id}>
      <div className='outputMain'>
        <div className='mainOutputs'>
          < DataTable rows={newObj} headers={headerData} >
            {({ rows, headers, getHeaderProps, getTableProps, getRowProps, getSelectionProps, }) => (
              <TableContainer title={headerTitle}>
                <div className="BriefEstimateModal">

                  <DevSecOpsLink {...props}></DevSecOpsLink>
                </div>
                <Table {...getTableProps()}>
                  <TableHead>
                    <TableRow>
                      {headers.map((header) => (
                        <TableHeader {...getHeaderProps({ header })}>
                          {header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <React.Fragment key={row.id}>
                        {/* to display the warning line btn  adding warning class if warning=true else false */}
                        <TableExpandRow className={Validationhandler(row.id)} {...getRowProps({ row })}>
                          {row.cells.map((cell) => {
                            if (cell.info.header === "ClientMaturity") {
                              return <TableCell key={cell.id}>
                                {selectDropDownDynamic(cell)}
                              </TableCell>
                            }
                            if (cell.info.header === "Applicability") {
                              return <TableCell key={cell.id} >

                                <Checkbox checked={cell.value} labelText=''
                                  onChange={(event) => {
                                    if (!props.readOnlyStatusVal) {
                                      handleCheckboxHandler(event, cell)
                                    }
                                  }}
                                  id={cell.id}
                                />
                              </TableCell>
                            } if (cell.info.header === "ProductivityLever") {
                              return <TableCell key={cell.id}  >{cell.value}</TableCell>
                            }
                            if (cell.info.header === "") {
                              return ''
                            }
                            else {
                              //display remainig cell (y1-----y7)
                              return <TableCell key={cell.id}  >{cell.value}%</TableCell>
                            }
                          })}
                        </TableExpandRow>
                        <TableExpandedRow
                          colSpan={headers.length + 1}
                          className="demo-expanded-td">
                          {expandedRowData(row.id)}
                        </TableExpandedRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </DataTable>
        </div>
      </div>
    </div>

  )
}


export default DevSecOps;