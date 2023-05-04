import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, TextArea, ToastNotification } from 'carbon-components-react';
import './SendforApprovalModal.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions/ActionCreator";
import { englishValue } from '../../Utils/CommonFunc'
import { useHistory } from 'react-router';
import ButtonMigrationApprovebtn from '../Versoning/ButtonMigrationApprovebtn'
import RecalculationModal from '../Versoning/RecalculationModal';
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
function mapStateToProps(state) {
    return {
        userSessionData: state.userSessionData,
    };
}
function SendforApprovalModal(props) {
    const [helpText, setHelpText] = useState("0/1000");
    //JIRA 942 display the previous approval comment
    let textVal=props.userInpuData.defaultInputData.response.estimate.approvalComment;
    const [commentFeedaback, setCommentFeedback] = useState(textVal);
    let history = useHistory();
    // useEffect(() => {
    //     if (props.userSessionData.approvalPopup) {
    //         document.body.style.overflowY = "hidden";
    //     } else {
    //         document.body.style.overflowY = "auto";
    //     }
    // })
    const resetValueHandler = () => {
        setCommentFeedback(props.userInpuData.defaultInputData.response.estimate.approvalComment)
    }

    // For Approve button migration flow calling send for rework api
    const sendForApproval_local = () => {
        // let comment = "" + document.getElementById("approvalComment").value;
        let userData = {
            "data": {
                "_id": props.userSessionData.savedEstimateData.response.estimate._id,
                "_rev": props.userSessionData.savedEstimateData.response.estimate._rev,
                "approvalComment": commentFeedaback
            }
        }
        props.showScreenLoader();
        props.hideSendForApprovalPopup();
        props.sendToApprove(userData).then((res) => {
            if (res.status === 'SUCCESS') {
                if (res.reclaulate) {
                    props.showScreenPopupVersion('Recalculation', '', '');
                }
                props.hideScreenLoader()
                props.showSendForApprovalSuccessPopup()
            }
            else {
                if (res.errorCode === 'ERRCAS401B') {
                    history.push('/');
                           // 409 error for migration flow
                } else if (res.errorCode === 'ERRCAS409') {
                    props.showButtonMigrationPopupApprovebtn();
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

    let getApprovalSucessPopup = () => {
        if (props.userSessionData.approvalSucessPopup) {
            return (
                <div class="bx--loading-overlay">

                    <ToastNotification
                        iconDescription="Estimate Approved"
                        subtitle={<span>The estimate has been Approved.
                You can view estimate from 'Review Estimates' on dashboard</span>}
                        kind="success"
                        title="Estimate Approved"
                        caption=""
                        lowContrast={true}
                        onCloseButtonClick={() => {
                            props.resetDashBoard();
                            props.hideSentForReworkPopup()
                                ;
                            if (props.history !== undefined) {
                                props.history.push("/dashboard")
                            } else {
                                //UGLY FIX NEEDS FINE TUNING
                                window.location.href = window.location.origin + "/dashboard"
                            }
                        }}
                    />
                </div>
            )
        }
    }
    return (
        <>
         {props.userAppScreenLoader?.labelVersion == 'Recalculation' ?
                <RecalculationModal {...props}></RecalculationModal>
                : ''}
         {props.userSessionData.migrationApproveButtonPopup ?
                <ButtonMigrationApprovebtn {...props}></ButtonMigrationApprovebtn>
                : ''}
         <div className='ModalStyle approvalPopup'>
            <Modal open={props.userSessionData.approvalPopup} modalHeading='Approval Comment'
                preventCloseOnClickOutside={false}
                secondaryButtonText="Cancel"
                primaryButtonText="Save"
                onRequestSubmit={() => sendForApproval_local()}
                onRequestClose={() => {
                    resetValueHandler()
                    props.hideSendForApprovalPopup()}}

            >
                <ModalBody>
                    <TextArea
                        cols={20}
                        id="approvalComment"
                        maxLength="1000"
                        labelText={"Comment"}
                        helperText={helpText}
                        value={commentFeedaback}
                        placeholder="Enter Comment Here"
                        rows={3}
                        onChange={(e) => {
                            setCommentFeedback(e.target.value)
                            setHelpText(e.target.value.length + "/1000") }}
                    />
                </ModalBody>
            </Modal>
            {getApprovalSucessPopup()}
        </div >
        </>
       
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(SendforApprovalModal);

