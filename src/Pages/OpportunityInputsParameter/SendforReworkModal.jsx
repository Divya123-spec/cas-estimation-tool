import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, TextArea, ToastNotification } from 'carbon-components-react';
import './SendforReworkModal.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions/ActionCreator";
import { englishValue } from '../../Utils/CommonFunc';
import { useHistory } from 'react-router-dom';
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
function mapStateToProps(state) {
    return {
        userSessionData: state.userSessionData,
        history: state.history
    };  
}
function SendforReworkModal(props) {
    const [helpText, setHelpText] = useState("0/1000");
    let textVal=props.userInpuData.defaultInputData.response.estimate.approvalComment;
    const [commentFeedaback, setCommentFeedback] = useState(textVal);
    let history = useHistory();
  
    useEffect(() => {
        if (props.userSessionData.reworkPopup) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    })

    const resetValueHandler = () => {
        setCommentFeedback(props.userInpuData.defaultInputData.response.estimate.approvalComment)
    }

    const sendForRework_local = () => {
        // let comment = "" +document.getElementById("approvalComment").value;
        let userData = {
            "data": {
                "_id": props.userSessionData.savedEstimateData.response.estimate._id,
                "_rev": props.userSessionData.savedEstimateData.response.estimate._rev,
                approvalComment: commentFeedaback
            }
        }

        // props.userInpuData.defaultInputData.response.estimate.approvalComment='commments post add'

        props.showScreenLoader();
        props.hideSendForReworkModal();
        props.sendForRework(userData).then((res) => {
            if (res.status === 'SUCCESS') {
                props.hideScreenLoader();
                resetValueHandler();
                props.showSentForReworkPopup();
            }
            else {
                if (res.errorCode === 'ERRCAS401B') {
                    history.push('/');
                }else if (res.errorCode === 'ERRCASDB409'){
                    alert(res.errorMessage)
                }  else {
                    alert(englishValue('TechnicalError'))
                }
                props.hideScreenLoader();
            }
        }).catch((err) => {
            alert(englishValue('TechnicalError'))
            props.hideScreenLoader();
        });

    }
    let getReworkSucessPopup = () => {
        if (props.userSessionData.reworkPopup) {
            return (
                <div class="bx--loading-overlay">


                    <ToastNotification
                        iconDescription="Estimate Sent for Rework"
                        subtitle={<span>The estimate has been assigned for Rework.
                            You can view estimate from 'Review Estimates' on dashboard</span>}
                        kind="success"
                        title="Estimate Sent for Rework"
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

    return (<div>
        <Modal open={props.userSessionData.reworkModal} modalHeading='Review Comment'
            preventCloseOnClickOutside={false}
            secondaryButtonText="Cancel"
            primaryButtonText="Save"
            onRequestSubmit={() => sendForRework_local()}
            onRequestClose={() => {
                resetValueHandler()
                props.hideSendForReworkModal()
            }}

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
                        setHelpText(e.target.value.length + "/1000")
                    }}
                />
            </ModalBody>
        </Modal>
        {getReworkSucessPopup()}

    </div >
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(SendforReworkModal);

