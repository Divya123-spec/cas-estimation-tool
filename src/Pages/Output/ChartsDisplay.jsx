import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions/ActionCreator";
import NavBar from '../../Components/CommonFuncs/NavBar/Navbar';
import HeaderInputs from '../OpportunityInputsParameter/HeaderInputs';
import './MainOutput.scss';
import './ChartDisplay.scss';
import { Content, DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TooltipIcon } from 'carbon-components-react';
import Calculatemodal from '../../Pages/OpportunityInputsParameter/Calculatemodal'
import { englishValue } from '../../Utils/CommonFunc';
import TableData from '../../Components/CommonFuncs/TableData';
import LoaderApp from '../LoaderApp';
import SaveModal from '../OpportunityInputsParameter/SaveModal';
import Day1complexity from '../../Components/Charts/Day1complexity';
import ComplexityFunc from '../../Components/Charts/ComplexityFunc';
import Productivity from '../../Components/Charts/Productivity';
import ExportChartsData from './ExportChartsData';
import YOYProductivity from '../../Components/Charts/YOYProductivity';
import ExportProductivityCharts from './ExportProductivityCharts';
import ExportDay1ComlexityCharts from './ExportDay1ComlexityCharts';
import ExportYOYProductivityCharts from './ExportYOYProductivityCharts'
import { CircleFilled16 } from '@carbon/icons-react';
import EffortdistributionPertech from '../../Components/Charts/EffortdistributionPertech';
import ExportEffortdistributionCharts from './ExportEffortdistributionCharts';


// This js file represents the main chart file from this file all the chart components are called, so this represnts data 
// Visualizaation in application 
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

//function to display charts data visulaization
const MainOutputCharts = (props) => {
    const [disableBtn] = useState(false);
    const [loaderBtn, setloaderBtn] = useState(false);
    const [BtnName, setBtnName] = useState('');
    const estimateHandler = (FlagModal) => {
        setloaderBtn(FlagModal)
    }
    const saveHandler = (FlagModal, btnName) => {
        setBtnName(btnName)
        setloaderBtn(FlagModal);
    }
    const exportHandler = () => {

    }

    let monthlyEffortsInHours = (props.userOutputData.defaultOutputData['response']['finalOutputs'].outputEffort.yearOneEffortOutput.monthlyEffortsInHours);
    let fiveYearOutput = { ...props.userOutputData.defaultOutputData['response']['finalOutputs'].outputEffort.fiveYearFTEsOutput.postProductivityFTEs, ...props.userOutputData.defaultOutputData['response']['finalOutputs'].outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs, ...props.userOutputData.defaultOutputData['response']['finalOutputs'].outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity, ...props.userOutputData.defaultOutputData['response']['finalOutputs'].outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs };



    let effortDistributionByTechnology = (props.userOutputData.defaultOutputData.response.finalOutputs.outputEffort.effortDistributionByTechnology);
    let newArray;
    let newArray1;
    //jira ticket CMIWET-656 - Graph addition for new table Effort distribution by tech 
    if (effortDistributionByTechnology) {

        let effortdistdata = (effortDistributionByTechnology.perMonthFTEsCalculationForEachTechnology);

       
        newArray = effortdistdata.map((ele) => {
            return {
                "group": ele.subWorkStream,
                "value": ele.appDistributionPercentage
            }
        }
        );
        newArray1 = effortdistdata.map((ele) => {
            return {
                "SecondaryTechnology": ele.subWorkStream,
                "DistributionEffort": `${Number((ele.appDistributionPercentage).toFixed(2))}%`,

            }
        }
        );
    }



    return (
        <div className="inputName charts">

            <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />
            <NavBar {...props}
                userNavBar={props.userInpuData.defaultInputData['response']['estimate']}
                title='mainOutputCharts'></NavBar>
            <Content >
                <HeaderInputs {...props} title='output'
                    userData1={props.userInpuData.defaultInputData['response']['estimate']}
                > </HeaderInputs>
                {props.userinputStatusData.calculateModal ? <Calculatemodal {...props} /> :
                    ''}
                {props.userinputStatusData.saveModal ? <SaveModal {...props} /> : ''}
                <div className="ChartsDisplay">

                    <div className="Day1complexity">
                    {/* stack bar chart */}
                        <Day1complexity monthlyEffortsInHoursCharts={monthlyEffortsInHours}></Day1complexity>
                        <ExportDay1ComlexityCharts monthlyEffortsInHoursCharts={monthlyEffortsInHours}></ExportDay1ComlexityCharts>
                    </div>
                    {/* donut chart */}
                    <div className="ComplexityFunc">
                        <ComplexityFunc monthlyEffortsInHoursCharts={monthlyEffortsInHours}></ComplexityFunc>
                        <ExportChartsData monthlyEffortsInHoursCharts={monthlyEffortsInHours}></ExportChartsData>
                    </div>
                </div>
                <div className="ChartDisplayYOY">
                    <div className='YOYProductivity'>
                        {/* stackbar chart */}
                        <YOYProductivity fiveYearOutputCharts={fiveYearOutput}></YOYProductivity>
                        <div className="placeHolders">
                            <p>Total FTE/Mnth</p>
                            <p className="paraFunc">(All Functions)</p>
                            <span className="Y1"><span>Y1 : </span>{fiveYearOutput.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY1}</span>
                            <span className="Y2"><span>Y2 : </span>{fiveYearOutput.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY2}</span>
                            <span className="Y3"><span>Y3 : </span>{fiveYearOutput.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY3}</span>
                            <span className="Y4"><span>Y4 : </span>{fiveYearOutput.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY4}</span>
                            <span className="Y5"><span>Y5 : </span>{fiveYearOutput.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY5}</span>
                            <span className="Y6"><span>Y6 : </span>{fiveYearOutput.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY6}</span>
                            <span className="Y7"><span>Y7 : </span>{fiveYearOutput.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY7}</span>
                        </div>
                        <ExportYOYProductivityCharts fiveYearOutputCharts={fiveYearOutput}></ExportYOYProductivityCharts>

                    </div>
                    <div className='Productivity'>
                        {/* linear chart */}
                        <Productivity fiveYearOutputCharts={fiveYearOutput}></Productivity>
                        <ExportProductivityCharts fiveYearOutputCharts={fiveYearOutput}></ExportProductivityCharts>
                    </div>

                    {(props.userOutputData.defaultOutputData.response.finalOutputs.outputEffort.effortDistributionByTechnology) ?

                        <div className="Effotedistdisplay">
                            {/* donut chart */}
                            <div className='Effortdisttech'>  <EffortdistributionPertech EffortdistributionPertechdata={newArray}></EffortdistributionPertech>
                                <ExportEffortdistributionCharts EffortdistributionPertechdata1={newArray1}></ExportEffortdistributionCharts>
                            </div>
                        </div> : ''

                    }




                </div>
            </Content>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(MainOutputCharts);