import React, { useState, useEffect } from 'react';
import { ModalHeader, Modal, Button } from 'carbon-components-react';
import './HeaderInputs.scss';
import './DeleteMyestimate.scss';
import SendforReworkModal from "./SendforReworkModal"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions/ActionCreator";
import SendforApprovalModal from './SendforApprovalModal';
import { englishValue } from '../../Utils/CommonFunc';
import { useHistory } from "react-router-dom";

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
function mapStateToProps(state) {
    return {
        userSessionData: state.userSessionData,
        userInpuData: state.userInputData,
        history: state.history,
        userinputStatusData: state.inputStatus

    };
}
let dashboardValue = '/dashboard'
function DeleteHeaderEstimate(props) {

    //Close the Modal 
    const [open, setOpen] = useState(false);
    let history = useHistory();
    const estimateHandler = () => {
        props.showScreenLoader('EstimateBtn');
       

        if (props) {
            let userData = window.localStorage.getItem('userData');
            userData = JSON.parse(userData);
                let InputData = { "data": { "userInfo": { "email": userData.email } } }
                props.userMyEstimateData(InputData).then((res) => {
                    if (res.status === 'SUCCESS') {
                        props.userinputStatus({
                            RestButton: false, EstimateButton: true,
                            SaveButton: false,
                            CalculateButton: false,
                            SendForReivewButton: false,
                            Export: false,
                            outputButton: false,
                            inputButton: false,
                            calculateModal: false,
                            saveModal: false
                        });
                        history.push(dashboardValue);
                        props.navigationInputToggleDefault();
                        props.navigationInputToggleInputProductivityDefault();
                        props.navigationInputToggleOutputProductivityDefault();
                        props.hideScreenLoader();
                    }
                    else {
                        if (res.errorCode === 'ERRCAS401B') {
                            history.push('/');
                        } else {
                            alert(englishValue('TechnicalError'))
                        }
                        props.hideScreenLoader();

                    }

                }).catch((err) => {
                    alert(englishValue('TechnicalError'))
                    props.hideScreenLoader();
                });
            



        }
    }

    const cancelHandler = () => {
        setOpen(false);
        // props.deleteHandler(false,props.rowID)
    }
    const startEstimateHandler = (userEstimateEdit) => {
        setOpen(false);
        estimateHandler(true)
    }





    return (
        <div className='ModalStyle'>
            <Modal danger open={open} modalHeading={!props.userinputStatusData.SaveButton && !props.userinputStatusData.CalculateButton ? 'Are you sure you want to leave the Page' : 'Are you sure you want to exit?'}
                preventCloseOnClickOutside={true}
                secondaryButtonText="No"
                primaryButtonText="Yes"
                onSecondarySubmit={() => cancelHandler()}
                onRequestSubmit={() => startEstimateHandler()}
                onRequestClose={() => setOpen(false)}
            // onClick={() => setOpen(false)}
            >
                <ModalHeader className="closeBtnHiding" onClick={cancelHandler} />
                {!props.userinputStatusData.SaveButton && !props.userinputStatusData.CalculateButton ?
                    ''
                    : <p className="bx--modal-content__text">The changes have not been saved.If you exit all the unsaved changes will be discarded.</p>}

            </Modal>
            {window.location.pathname == '/TermsConditions' ?
                <p>{englishValue('IBMIntegratedEstimationTool')}</p>
                : <p onClick={() => {
                    if (window.location.pathname == '/dashboard') {
                        setOpen(false);
                    } else {
                        setOpen(true);
                    }

                }}>{englishValue('IBMIntegratedEstimationTool')}</p>}

        </div >
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteHeaderEstimate);
