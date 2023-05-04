import React, { useState, useEffect } from 'react';
import NavBar from '../../../Components/CommonFuncs/NavBar/Navbar';
import HeaderInputs from '../../OpportunityInputsParameter/HeaderInputs';
import { Content } from 'carbon-components-react';
import { arrangeColumn, arrCoversionOrder, englishValue } from "../../../Utils/CommonFunc";
import { breadcrumb } from '../../../Components/CommonFuncs/BreadCumbs';
import TableData from '../../../Components/CommonFuncs/TableInputStatic';
import './NonLabour.scss'
import UseCustomInput from '../UseCustomInput';
import LoaderApp from '../../LoaderApp';
import { connect } from 'react-redux';
import { actionCreators } from '../../../store/actions/ActionCreator';
import { bindActionCreators } from 'redux';
import {NonLabourFormulaData} from '../../../Components/CommonFuncs/formula/FormulaComponent_NonLabour';
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
const NonLabour = React.memo((props) => {
    let { tableCellInput } = UseCustomInput(props.userInpuData.defaultInputData['response']['estimate'].userInputs.nonLabour);
   //reagranging of rows
   tableCellInput=  arrCoversionOrder(tableCellInput, [
       "nonLabourCostDistributionPercentage",
       "typicalCostDistribution_USD",
        "uiStatus"
    ]);
    tableCellInput=arrangeColumn(tableCellInput,['simple','medium','complex','total','range','uiStatus'])
    const [loaderBtn, setloaderBtn] = useState(false);
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

            <NavBar {...props} title='nonLabour'
                userNavBar={props.userInpuData.defaultInputData['response']['estimate']}

            />
            <Content>
                <HeaderInputs {...props}
                    userData1={props.userInpuData.defaultInputData['response']['estimate']}
                    title='input'

                    resetHandler={resetHandler}

                ></HeaderInputs>
                <div className='nonLabourInputMainHead'>
                    <div className='nonLabourInput'>
                        {breadcrumb('Non Labour')}
                    </div>
                    <div className='nonLabourInputMain'>
                        <div className="heading">
                            {englishValue('ApplicationCategory')}
                        </div>
                        <div className='table-class'>
                            <TableData
                                title=""
                                description=""
                                idTitle="nonlabour"
                                handlerChange={handlerChange}
                                headers={["", "", englishValue('simple'), englishValue('medium'), englishValue('complex'), englishValue('total'), englishValue('range')]}
                                rows={tableCellInput}
                            ></TableData>
                        </div>

                    </div>
                </div>
                <Feedback/>
            </Content>
        </div>
    );
});
export default connect(mapStateToProps, mapDispatchToProps)(NonLabour);