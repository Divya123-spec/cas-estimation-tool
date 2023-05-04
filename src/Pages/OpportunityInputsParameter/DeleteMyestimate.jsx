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
import { useHistory } from 'react-router';
import inputService from '../../services/InputService';
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
function mapStateToProps(state) {
    return {
        userSessionData: state.userSessionData,
        history: state.history,
        userinputStatusData: state.inputStatus

    };
}

function DeleteMyestimate(props) {

    //Close the Modal 
    const [open, setOpen] = useState(false);
    let history = useHistory();
    const cancelHandler = () => {
        setOpen(false);
        // props.deleteHandler(false,props.rowID)
    }
    // useEffect(() => {
    //     if (open) {
    //         document.body.style.overflowY = "hidden";
    //     } else {
    //         document.body.style.overflowY = "auto";
    //     }
    // })
    //Pass Data from START ESTIMATE to the Inputs In Opportunity 
    const startEstimateHandler = (userEstimateEdit) => {
        setOpen(false);
        props.estimateHandler(true)
    }
    const sendForRework_local = () => {
        let userData = {
            "data": {
                "_id": props.userSessionData.savedEstimateData.response.estimate._id,
                "_rev":props.userSessionData.savedEstimateData.response.estimate._rev,
                approvalComment:'testing'
            }
        }

        props.showScreenLoader()
        props.sendForRework(userData).then((res) => {
            if (res.status === 'SUCCESS') {
                props.hideScreenLoader()
                props.showSentForReworkPopup();
            }
            else {
                if (res.errorCode === 'ERRCAS401B') {
                    history.push('/');
                } else if (res.errorCode === 'ERRCASDB409'){
                    alert(res.errorMessage)
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
    // all status checking
    const isNew = () => {
        return "New" === props.userestimateState.state;
    }
    const isReWork = () => {
        return "Rework" === props.userestimateState.state;
    }
    const isInReview = () => {
        return "InReview" === props.userestimateState.state;
    }
    const isInApproved = () => {
        return "Approved" === props.userestimateState.state;
    }

    const isFromReviewDashboard = () => {
        let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData)

        if (props.userestimateState !== undefined) {
            return props.userestimateState.reviewerEmail === userData.email
        }
        return false;
    }
    // for to myestimates
    const isFromEstimateDashboard = () => {
        let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData)
        if (props.userestimateState !== undefined) {
            return props.userestimateState.ownerEmail === userData.email
        }
        return false;
    }
    // sendfor reviewer button
    const getReviewerButtonsString = () => {
        if (isFromReviewDashboard()) {
            if (isInReview())
                return (<div class="review-div">
                    <Button className="rework-button" kind="secondary" onClick={props.showSendForReworkModal}
                    >{englishValue('SendRework')}</Button>
                    <Button className="approve-button" kind="primary" onClick={props.showSendForApprovalPopup}
                    >{englishValue('Approve')}</Button>
                    <SendforReworkModal {...props} />
                    <SendforApprovalModal {...props} />

                </div>)
        }

    }

    const myEstimateButtonString = () => {
        if (isFromEstimateDashboard()) {
            if (isNew()) {
                return (<div className="MyEstimate-button"><Button onClick={() => setOpen(true)} >{englishValue('MyEstimates')}</Button></div>)
            } else if (isReWork()) {
                return (<div className="MyEstimate-button"><Button onClick={() => setOpen(true)} >{englishValue('MyEstimates')}</Button></div>)
            } else if (isInReview()) {
                return (<div className="MyEstimate-button"><Button onClick={() => setOpen(true)} >{englishValue('MyEstimates')}</Button></div>)
            } else if (isInApproved()) {
                return (<div className="MyEstimate-button"><Button onClick={() => setOpen(true)} >{englishValue('MyEstimates')}</Button></div>)
            }
        }
    }
    const generateStaffinghandler = () => {
        props.showScreenLoader() ;

        let estimateId =
          props.userInpuData.defaultInputData.response.estimate["_id"];
        let filenme =
          props.userInpuData.defaultInputData.response.estimate.estimationTitle+"_"+props.userInpuData.defaultInputData.response.estimate.clientName;
        inputService.exportDataGenerateStaffing(
          estimateId,
          `${filenme}`,props
        );
        
        //   props.hideScreenLoader();
      };
      const GenerateStaffing = () => {
        // return (<ExportInprogressModal {...props}/>)
        if (props.title === "output" )
        
            return (
                <div className='MyEstimate-button2'>
            <Button kind="tertiary" className="ModalStyle" onClick={generateStaffinghandler} 
                        disabled={!props.userinputStatusData.Export}>{englishValue('GenerateStaffing')}</Button></div>)
            
            // <HeaderInputModal industry={props.userDropDownData.defaultDropDown.response.defaultDropdown.industry}
            //     salesStage={props.userDropDownData.defaultDropDown.response.defaultDropdown.salesStage}
            //     {...props} estimate={estimateJson}></HeaderInputModal>
        else{

        }
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
            {getReviewerButtonsString()}
            {myEstimateButtonString()}
            {/* {GenerateStaffing()} */}

        </div >
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMyestimate);
