import React, { useState, useEffect } from 'react';
import NavBar from '../../../Components/CommonFuncs/NavBar/Navbar';
import HeaderInputs from '../../OpportunityInputsParameter/HeaderInputs';
import { Content } from 'carbon-components-react';
import { arrangeColumn, arrCoversionOrder, englishValue } from "../../../Utils/CommonFunc";
import { breadcrumb } from '../../../Components/CommonFuncs/BreadCumbs';
import TableData from '../../../Components/CommonFuncs/TableInputStatic';
import UseCustomInput from '../UseCustomInput';
import LoaderApp from '../../LoaderApp';
import { actionCreators } from '../../../store/actions/ActionCreator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Transition.scss';
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
const Transition = React.memo((props) => {
    let { tableCellInput } = UseCustomInput(props.userInpuData.defaultInputData['response']['estimate'].userInputs.transition);
     //reagranging of rows
     tableCellInput=  arrCoversionOrder(tableCellInput, [
        "managerTravelToolCostDistributionPercentage",
        "typicalCostDistribution_USD",
        "rampUpReductionConsideredDistributionPercentage",
        "uiStatus"
    ]);
    tableCellInput=arrangeColumn(tableCellInput,['simple','medium','complex','total','range','uiStatus'])
    const [resetHandleFlag, setresetHandleFlag] = useState(false);

    useEffect(() => {
        if (resetHandleFlag) {

            setresetHandleFlag(false);
        }
    })
    const resetHandler = () => {
        setresetHandleFlag(true);
    }
    const handlerChange = (e) => {

    }
    return (
        <div className="inputName">
            <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />

            <NavBar {...props} title='transition'
                userNavBar={props.userInpuData.defaultInputData['response']['estimate']}

            />
            <Content>
                <HeaderInputs {...props} title='input'
                    userData1={props.userInpuData.defaultInputData['response']['estimate']}
                    resetHandler={resetHandler}
                ></HeaderInputs>
                <div className='transitionInputMainHead'>
                    <div className='transitionInput'>
                        {breadcrumb('Transition')}
                    </div>
                    <div className='transitionInputMain'>
                        <div className='transitionInputMain'>
                            <div className="heading">
                                {englishValue('ApplicationCategory')}
                            </div>
                            <div className='table-class'>
                                <TableData
                                    title=""
                                    idTitle="transition"
                                    description=""
                                    handlerChange={handlerChange}
                                    headers={["", "", englishValue('simple'), englishValue('medium'), englishValue('complex'), englishValue('total'), englishValue('range')]}
                                    rows={tableCellInput}
                                ></TableData>
                            </div>

                        </div>

                    </div>
                </div>
                <Feedback/>
            </Content>
        </div>
    );
});
export default connect(mapStateToProps, mapDispatchToProps)(Transition);