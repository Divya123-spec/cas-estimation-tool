import React, { useState } from 'react';
import NavBar from '../../Components/CommonFuncs/NavBar/Navbar';
import { Content } from 'carbon-components-react';
import HeaderInputs from '../OpportunityInputsParameter/HeaderInputs';
import './MainOutput.scss';
import { englishValue } from '../../Utils/CommonFunc';
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import LoaderApp from '../LoaderApp';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/actions/ActionCreator';
import { connect } from 'react-redux';
import  Feedback from '../../Pages/Feedback/Feedback'
 
// this file code represents EffortBaselinePerTech in application
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
function mapStateToProps(state) {
    let effortBaselinePerTechData = state.userOutputData.defaultOutputData.response.intermediateOutputs?.effortBaselineOutput;
    effortBaselinePerTechData = effortBaselinePerTechData ? effortBaselinePerTechData.standardWorkStreams : [];
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
        effortBaselinePerTechData: effortBaselinePerTechData
    };
}

const HEADER = [
    englishValue("workStream"),
    englishValue("subWorkStream"),
    englishValue("distr.") + " " + englishValue("dist_L1.5"),
    englishValue("distr.") + " " + englishValue("dist_L2"),
    englishValue("distr.") + " " + englishValue("dist_L3"),
    englishValue("distr.") + " " + englishValue("dist_L4"),
    englishValue("distr.") + " " + englishValue("dist_min_enh"),
    englishValue("hrs_tkt") + " " + englishValue("hrs_tkt_L1.5"),
    englishValue("hrs_tkt") + " " + englishValue("hrs_tkt_L2"),
    englishValue("hrs_tkt") + " " + englishValue("hrs_tkt_L3"),
    englishValue("hrs_tkt") + " " + englishValue("hrs_tkt_L4"),
    englishValue("hrs_tkt") + " " + englishValue("hrs_tkt_min_enh"),
    englishValue("adhoc_uplift"),
];


const EffortBaselinePerTech = (props) => {
    return (
        <div className="inputName">
            <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />

            <NavBar {...props} userNavBar={props.userInpuData.defaultInputData['response']['estimate']}
                title='EffortBaselinePerTech'></NavBar>
            <Content>
                <HeaderInputs  {...props} userData1={props.userInpuData.defaultInputData['response']['estimate']}
                    title='output'
                > </HeaderInputs>
                <div className='outputMainHead'>
                    <div className='outputMain'>
                        <div className='mainOutputs'>
                            <DataTable
                                rows={props.effortBaselinePerTechData}
                                headers={HEADER}>
                                {({ rows, headers, getHeaderProps }) => (
                                    <TableContainer
                                        title={englishValue('EffortBaselinePerTech')}
                                        description={''}
                                    >
                                        <Table >
                                            <TableHead>
                                                <TableRow>
                                                    {headers.map((header) => (
                                                        <TableHeader >
                                                            {header}
                                                        </TableHeader>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody >
                                                {
                                                    props.effortBaselinePerTechData.map(item =>
                                                        <TableRow >
                                                            <TableCell>{item.workStream}</TableCell>
                                                            <TableCell>{item.subWorkStream}</TableCell>
                                                            <TableCell>{item.ticketDistributionPercentage.l_1}%</TableCell>
                                                            <TableCell>{item.ticketDistributionPercentage.l_2}%</TableCell>
                                                            <TableCell>{item.ticketDistributionPercentage.l_3}%</TableCell>
                                                            <TableCell>{item.ticketDistributionPercentage.l_4}%</TableCell>
                                                            <TableCell>{item.ticketDistributionPercentage.min_enh}%</TableCell>
                                                            <TableCell>{item.hoursPerTicket.l_1}</TableCell>
                                                            <TableCell>{item.hoursPerTicket.l_2}</TableCell>
                                                            <TableCell>{item.hoursPerTicket.l_3}</TableCell>
                                                            <TableCell>{item.hoursPerTicket.l_4}</TableCell>
                                                            <TableCell>{item.hoursPerTicket.min_enh}</TableCell>
                                                            <TableCell>{item.adhocUpliftPercentage}%</TableCell>
                                                        </TableRow>
                                                    )
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                )}
                            </DataTable>
                        </div>
                    </div>
                </div>
                <Feedback/>
            </Content>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(EffortBaselinePerTech);