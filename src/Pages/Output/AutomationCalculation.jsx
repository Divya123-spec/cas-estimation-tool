import React, { useState } from 'react';
import NavBar from '../../Components/CommonFuncs/NavBar/Navbar';
import { Content, DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import HeaderInputs from '../OpportunityInputsParameter/HeaderInputs';
import './MainOutput.scss';
import { englishValue } from '../../Utils/CommonFunc';
import LoaderApp from '../LoaderApp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/actions/ActionCreator';
import DataTableOutput from './DataTableOutput';
import Feedback from '../Feedback/Feedback';

// This js file has the code AutomationCalculation output section in Application.
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
};


const AutomationCalculation = (props) => {
    const headerMain = [englishValue('ApplicationComplexity'), englishValue('Simple'), englishValue('Moderate'), englishValue('Complex'),""];
    const header2 = [englishValue('Range'), englishValue('RangeLow'), englishValue('RangeHigh'), englishValue('RangeLow'), englishValue('RangeHigh'), englishValue('RangeLow'), englishValue('RangeHigh'),englishValue('TOTAL')];
    const header3 = ['', englishValue('OTC'), englishValue('ARC'), englishValue('OTC'), englishValue('ARC'), englishValue('OTC'), englishValue('ARC'), englishValue('OTC'), englishValue('ARC'), englishValue('OTC'), englishValue('ARC'), englishValue('OTC'), englishValue('ARC'),englishValue('OTC'),englishValue('Y1')];

    let automationOutput = (props.userOutputData.defaultOutputData.response.intermediateOutputs.automationOutput);
   
  

    return (
        <div className="inputName" id='AutomationSummary'>
            <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />
            <NavBar {...props} userNavBar={props.userInpuData.defaultInputData['response']['estimate']}
                title='AutomationCalculation'></NavBar>
            <Content>
                <HeaderInputs  {...props} userData1={props.userInpuData.defaultInputData['response']['estimate']}
                    title='output'
                > </HeaderInputs>
                <div className='outputMainHead'>
                    <div className='outputMain'>
                        <div className='mainOutputs'>
                            <DataTableOutput
                              title={englishValue('AutomationSummary')}
                              description={englishValue('ForRomCostY1')}
                              headerMain={headerMain}
                              header2={header2}
                              header3={header3}
                              automationOutput={automationOutput}
                            ></DataTableOutput>
                        </div>
                    </div>

                </div>
                <Feedback/>
            </Content>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(AutomationCalculation);