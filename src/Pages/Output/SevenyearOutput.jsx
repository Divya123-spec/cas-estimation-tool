
import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions/ActionCreator";
import NavBar from '../../Components/CommonFuncs/NavBar/Navbar';
import HeaderInputs from '../OpportunityInputsParameter/HeaderInputs';
import './MainOutput.scss';
import { Content, DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TooltipIcon } from 'carbon-components-react';
import Calculatemodal from '../../Pages/OpportunityInputsParameter/Calculatemodal'

import { currencyCoverter, englishValue } from '../../Utils/CommonFunc';
import { Information12 } from '../../Components/CommonFuncs/Icons'
import { Information32 } from '@carbon/icons-react';
import LoaderApp from '../LoaderApp';
import SaveModal from '../OpportunityInputsParameter/SaveModal';
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

const SevenyearOutput = (props) => {
    const arrCoversionOrder = (originalArr, orderArr) => {
        let newOrderedArr = [];
        orderArr.forEach((ele) => {
            originalArr.forEach((e) => {
                if (ele == e[0]) {
                    newOrderedArr.push(e)
                }
            })
        })
        return newOrderedArr;
    }

    let sevenYearProductivityCostOutput = (props.userOutputData.defaultOutputData.response.finalOutputs.outputEffort.sevenYearProductivityCostOutput)
   
    let sevenYearProductivity = Object.entries(sevenYearProductivityCostOutput);


    // let AiopssevenYearProductivitycost = Object.entries(AiopssevenYearProductivity.sevenYearProductivityCostOutput);
    //let sevenYearProductivitycost = sevenYearProductivity.concat(AiopssevenYearProductivitycost);

    
    let SevenYearinfo;
    if (props.userOutputData.defaultOutputData.response.finalOutputs.outputEffort.sevenYearProductivityCostOutput.aiOpsObservability || props.userOutputData.defaultOutputData.response.finalOutputs.outputEffort.sevenYearProductivityCostOutput.aiOpsArm) {
        SevenYearinfo = arrCoversionOrder((sevenYearProductivity), [
            "automationRPA",
            "automationAgentAssist",
            "automationECATool",
            "automationDigitalWorkers",
            "testingIgnite",
            "efficiencyAgile",
            "efficiencyAQL",
            "efficiencyFPL",
            "security",
            "aiOpsObservability",
            "aiOpsArm",
            "totalPerYear",
            "cumulativePerYear",
        ]);
    }

    else {
        SevenYearinfo = arrCoversionOrder((sevenYearProductivity), [
            "automationRPA",
            "automationAgentAssist",
            "automationECATool",
            "automationDigitalWorkers",
            "testingIgnite",
            "efficiencyAgile",
            "efficiencyAQL",
            "efficiencyFPL",
            "security",
            "totalPerYear",
            "cumulativePerYear",
        ]);
    }
   


    const headerData = [" ", englishValue('productivitylevers'), englishValue('OTCY1'), englishValue('productivityy1'),
        englishValue('productivityy2'), englishValue('productivityy3'), englishValue('productivityy4'), englishValue('productivityy5'),
        englishValue('productivityy6'), englishValue('productivityy7'),]
    return (
        <div className='mainOutputs'>
            <DataTable
                rows={SevenYearinfo}
                headers={headerData}>
                {({ rows, headers, getHeaderProps }) => (
                    <TableContainer
                        title={englishValue('7YearProductivityCosts')}
                        description={englishValue('sevenoutputdes')}
                    >
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableHeader></TableHeader>
                                    <TableHeader> {englishValue('productivitylevers')}</TableHeader>
                                    <TableHeader> {englishValue('OTCY1')}</TableHeader>
                                    {/* displaying line depending on the Calculated number of years on opportunity paramter */}
                                    <TableHeader className={props.transtionYear == 1 ? " borderOutput" : ""}>{englishValue('productivityy1')}</TableHeader>
                                    <TableHeader className={props.transtionYear == 2 ? " borderOutput" : ""}>{englishValue('productivityy2')}</TableHeader>
                                    <TableHeader className={props.transtionYear == 3 ? " borderOutput" : ""}>{englishValue('productivityy3')}</TableHeader>
                                    <TableHeader className={props.transtionYear == 4 ? " borderOutput" : ""}>{englishValue('productivityy4')}</TableHeader>
                                    <TableHeader className={props.transtionYear == 5 ? " borderOutput" : ""}>{englishValue('productivityy5')}</TableHeader>
                                    <TableHeader className={props.transtionYear == 6 ? " borderOutput" : ""}>{englishValue('productivityy6')}</TableHeader>
                                    <TableHeader className={props.transtionYear == 7 ? " borderOutput" : ""}>{englishValue('productivityy7')}</TableHeader>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {SevenYearinfo.map(tds => {
                                    if (tds[0] === 'devSecOpsCommandCenterSREMonitoring' || tds[0] == "automationCog") {
                                        return (
                                            // <TableRow>
                                            //     <TableCell className="productinfoClasss"><Information32 />  </TableCell>
                                            //     <TableCell> {englishValue(tds[0])}<p className ="innertext"> Contact SME for Cost </p></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            // </TableRow>
                                            <>
                                            </>
                                        )
                                    }
                                    if (tds[0] === "devSecOpsOverall") {
                                        return (
                                            //     <TableRow>
                                            //         <TableCell><TooltipIcon className="toolTip" tooltipText={englishValue('devSecOpsOveralltoolTiptext')} direction='bottom'><p className="productinfoClasss"><Information32 /></p></TooltipIcon></TableCell>
                                            //         <TableCell >{englishValue(tds[0])} <p className ="innertext"> Contact SME for Cost </p></TableCell>
                                            //         <TableCell></TableCell>
                                            //         <TableCell></TableCell>
                                            //         <TableCell></TableCell>
                                            //         <TableCell></TableCell>
                                            //         <TableCell></TableCell>
                                            //         <TableCell></TableCell>
                                            //         <TableCell></TableCell>
                                            //         <TableCell></TableCell>
                                            //     </TableRow>
                                            <>
                                            </>
                                        )

                                    }
                                    else if (tds[0] === "automationAnsible") {
                                        return (
                                            // <TableRow>
                                            //     <TableCell></TableCell>
                                            //     <TableCell>  {englishValue(tds[0])} <p className ="innertext"> Contact SME for Cost </p></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            //     <TableCell></TableCell>
                                            // </TableRow>
                                            <>
                                            </>
                                        )
                                    }
                                    else if (tds[0] === "efficiencyFPL") {
                                        return (
                                            <TableRow>
                                                <TableCell><TooltipIcon className="toolTip" tooltipText={englishValue('EffeciencyFPLtooltipText')} direction='bottom'><p className="productinfoClasss"><Information32 /></p></TooltipIcon></TableCell>
                                                <TableCell> {englishValue(tds[0])}</TableCell>
                                                <TableCell className={props.transtionYear >= 1 ? "tableBoldValue" : ""}> {typeof (tds[1].otcY1) !== 'undefined' ? `${currencyCoverter(tds[1].otcY1)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 1 ? (props.transtionYear == 1 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y1) !== 'undefined' ? `${currencyCoverter(tds[1].y1)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 2 ? (props.transtionYear == 2 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y2) !== 'undefined' ? `${currencyCoverter(tds[1].y2)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 3 ? (props.transtionYear == 3 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y3) !== 'undefined' ? `${currencyCoverter(tds[1].y3)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 4 ? (props.transtionYear == 4 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y4) !== 'undefined' ? `${currencyCoverter(tds[1].y4)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 5 ? (props.transtionYear == 5 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y5) !== 'undefined' ? `${currencyCoverter(tds[1].y5)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 6 ? (props.transtionYear == 6 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y6) !== 'undefined' ? `${currencyCoverter(tds[1].y6)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 7 ? (props.transtionYear == 7 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y7) !== 'undefined' ? `${currencyCoverter(tds[1].y7)}` : ''}</TableCell>
                                            </TableRow>

                                        )
                                    }
                                    //Jira- 689--UI Task- AIOPS UI update ROM Cost Output

                                    else if (tds[0] === "aiOpsObservability") {
                                        return (
                                            <TableRow>
                                                <TableCell><TooltipIcon className="toolTip" tooltipText={englishValue('aiOpsObservabilityTooltip')} direction='bottom'><p className="productinfoClasss"><Information32 /></p></TooltipIcon></TableCell>
                                                <TableCell> {englishValue(tds[0])}</TableCell>
                                                <TableCell className={props.transtionYear >= 1 ? "tableBoldValue" : ""}> {typeof (tds[1].otcY1) !== 'undefined' ? `${currencyCoverter(tds[1].otcY1)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 1 ? (props.transtionYear == 1 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y1) !== 'undefined' ? `${currencyCoverter(tds[1].y1)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 2 ? (props.transtionYear == 2 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y2) !== 'undefined' ? `${currencyCoverter(tds[1].y2)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 3 ? (props.transtionYear == 3 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y3) !== 'undefined' ? `${currencyCoverter(tds[1].y3)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 4 ? (props.transtionYear == 4 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y4) !== 'undefined' ? `${currencyCoverter(tds[1].y4)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 5 ? (props.transtionYear == 5 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y5) !== 'undefined' ? `${currencyCoverter(tds[1].y5)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 6 ? (props.transtionYear == 6 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y6) !== 'undefined' ? `${currencyCoverter(tds[1].y6)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 7 ? (props.transtionYear == 7 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y7) !== 'undefined' ? `${currencyCoverter(tds[1].y7)}` : ''}</TableCell>
                                            </TableRow>

                                        )
                                    }
                                    //Jira- 689--UI Task- AIOPS UI update ROM Cost Output

                                    else if (tds[0] === "aiOpsArm") {
                                        return (
                                            <TableRow>
                                                <TableCell><TooltipIcon className="toolTip" tooltipText={englishValue('aiOpsArmTooltip')} direction='bottom'><p className="productinfoClasss"><Information32 /></p></TooltipIcon></TableCell>
                                                <TableCell> {englishValue(tds[0])}</TableCell>
                                                <TableCell className={props.transtionYear >= 1 ? "tableBoldValue" : ""}> {typeof (tds[1].otcY1) !== 'undefined' ? `${currencyCoverter(tds[1].otcY1)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 1 ? (props.transtionYear == 1 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y1) !== 'undefined' ? `${currencyCoverter(tds[1].y1)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 2 ? (props.transtionYear == 2 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y2) !== 'undefined' ? `${currencyCoverter(tds[1].y2)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 3 ? (props.transtionYear == 3 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y3) !== 'undefined' ? `${currencyCoverter(tds[1].y3)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 4 ? (props.transtionYear == 4 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y4) !== 'undefined' ? `${currencyCoverter(tds[1].y4)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 5 ? (props.transtionYear == 5 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y5) !== 'undefined' ? `${currencyCoverter(tds[1].y5)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 6 ? (props.transtionYear == 6 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y6) !== 'undefined' ? `${currencyCoverter(tds[1].y6)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 7 ? (props.transtionYear == 7 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y7) !== 'undefined' ? `${currencyCoverter(tds[1].y7)}` : ''}</TableCell>
                                            </TableRow>

                                        )
                                    }


                                    else if (tds[0] === "testingIgnite") {
                                        if (!tds[1]) {
                                            return (
                                                <TableRow>
                                                    <TableCell><TooltipIcon className="toolTip" tooltipText={englishValue('testingIgnitetooltipText')} direction='bottom'><p className="productinfoClasss"><Information32 /></p></TooltipIcon></TableCell>
                                                    <TableCell>  {englishValue(tds[0])}</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>

                                            )
                                        }

                                        else {
                                            return (
                                                // if transitionyear =3 and in condition for y1 y2 also bold values should come the border line after 3 so thsi below condition
                                                // curency coverter to dispaly the values in $
                                                <TableRow>
                                                    <TableCell><TooltipIcon className="toolTip" tooltipText={englishValue('testingIgnitetooltipText')} direction='bottom'><p className="productinfoClasss"><Information32 /></p></TooltipIcon></TableCell>
                                                    <TableCell> {englishValue(tds[0])}</TableCell>
                                                    <TableCell className={props.transtionYear >= 1 ? "tableBoldValue" : ""}> {typeof (tds[1].otcY1) !== 'undefined' ? `${currencyCoverter(tds[1].otcY1)}` : ''}</TableCell>
                                                    <TableCell className={props.transtionYear >= 1 ? (props.transtionYear == 1 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y1) !== 'undefined' ? `${currencyCoverter(tds[1].y1)}` : ''}</TableCell>
                                                    <TableCell className={props.transtionYear >= 2 ? (props.transtionYear == 2 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y2) !== 'undefined' ? `${currencyCoverter(tds[1].y2)}` : ''}</TableCell>
                                                    <TableCell className={props.transtionYear >= 3 ? (props.transtionYear == 3 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y3) !== 'undefined' ? `${currencyCoverter(tds[1].y3)}` : ''}</TableCell>
                                                    <TableCell className={props.transtionYear >= 4 ? (props.transtionYear == 4 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y4) !== 'undefined' ? `${currencyCoverter(tds[1].y4)}` : ''}</TableCell>
                                                    <TableCell className={props.transtionYear >= 5 ? (props.transtionYear == 5 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y5) !== 'undefined' ? `${currencyCoverter(tds[1].y5)}` : ''}</TableCell>
                                                    <TableCell className={props.transtionYear >= 6 ? (props.transtionYear == 6 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y6) !== 'undefined' ? `${currencyCoverter(tds[1].y6)}` : ''}</TableCell>
                                                    <TableCell className={props.transtionYear >= 7 ? (props.transtionYear == 7 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y7) !== 'undefined' ? `${currencyCoverter(tds[1].y7)}` : ''}</TableCell>
                                                </TableRow>

                                            )
                                        }
                                    }





                                    else if (tds[0] === "totalPerYear" || tds[0] === "cumulativePerYear") {
                                        return (
                                            <TableRow>
                                                <TableCell></TableCell>
                                                <TableCell className="tableBold">{englishValue(tds[0])}</TableCell>
                                                <TableCell className={props.transtionYear >= 1 ? "tableBoldValue" : ""}> {typeof (tds[1].otcY1) !== 'undefined' ? `${currencyCoverter(tds[1].otcY1)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 1 ? (props.transtionYear == 1 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y1) !== 'undefined' ? `${currencyCoverter(tds[1].y1)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 2 ? (props.transtionYear == 2 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y2) !== 'undefined' ? `${currencyCoverter(tds[1].y2)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 3 ? (props.transtionYear == 3 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y3) !== 'undefined' ? `${currencyCoverter(tds[1].y3)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 4 ? (props.transtionYear == 4 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y4) !== 'undefined' ? `${currencyCoverter(tds[1].y4)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 5 ? (props.transtionYear == 5 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y5) !== 'undefined' ? `${currencyCoverter(tds[1].y5)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 6 ? (props.transtionYear == 6 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y6) !== 'undefined' ? `${currencyCoverter(tds[1].y6)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 7 ? (props.transtionYear == 7 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y7) !== 'undefined' ? `${currencyCoverter(tds[1].y7)}` : ''}</TableCell>
                                            </TableRow>
                                        )
                                    }
                                    else {
                                        return (
                                            <TableRow>
                                                <TableCell></TableCell>
                                                <TableCell>{englishValue(tds[0])}</TableCell>
                                                <TableCell className={props.transtionYear >= 1 ? "tableBoldValue" : ""}> {typeof (tds[1].otcY1) !== 'undefined' ? `${currencyCoverter(tds[1].otcY1)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 1 ? (props.transtionYear == 1 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y1) !== 'undefined' ? `${currencyCoverter(tds[1].y1)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 2 ? (props.transtionYear == 2 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y2) !== 'undefined' ? `${currencyCoverter(tds[1].y2)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 3 ? (props.transtionYear == 3 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y3) !== 'undefined' ? `${currencyCoverter(tds[1].y3)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 4 ? (props.transtionYear == 4 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y4) !== 'undefined' ? `${currencyCoverter(tds[1].y4)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 5 ? (props.transtionYear == 5 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y5) !== 'undefined' ? `${currencyCoverter(tds[1].y5)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 6 ? (props.transtionYear == 6 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y6) !== 'undefined' ? `${currencyCoverter(tds[1].y6)}` : ''}</TableCell>
                                                <TableCell className={props.transtionYear >= 7 ? (props.transtionYear == 7 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y7) !== 'undefined' ? `${currencyCoverter(tds[1].y7)}` : ''}</TableCell>

                                            </TableRow>

                                        )
                                    }


                                }


                                )}



                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </DataTable>

            <div className="MiddleLine">
                <p style={{ fontSize: "14px" }}>Note:</p>
                <p style={{ fontSize: "14px" }}>Please contact respective SMEs for the cost for the following Productivity Levers : </p>
                <p style={{ fontSize: "14px" }}>1.DevSecOps - Command Center, SRE, Monitoring</p>
                <p style={{ fontSize: "14px" }}>2.DevSecOps - DevOps - Overall </p>
                <p style={{ fontSize: "14px" }}>3.Automation - Cog1 (Integration with Snow, Remedy, etc.) </p>
                <p style={{ fontSize: "14px" }}>4.Automation - Ansible</p>
            </div>
        </div>

    );
}
export default connect(mapStateToProps, mapDispatchToProps)(SevenyearOutput);