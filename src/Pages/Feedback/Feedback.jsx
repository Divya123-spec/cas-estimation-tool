import React, { useState, useEffect } from 'react';
import { ModalHeader, Modal, TooltipIcon, Button, RadioButtonGroup, RadioButton, TextArea, Toggle } from 'carbon-components-react';
import { englishValue } from '../../Utils/CommonFunc';
import './Feedback.scss'
import FeedbackNotification from './FeedbackNotification';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/actions/ActionCreator';
import LoaderApp from '../LoaderApp';

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
// feedback button thats is displayed
function Feedback(props) {
    //notification Modal
    const [notificationOpen, setNotificationOpen] = useState(false)

    //Close the Modal 
    const [open, setOpen] = useState(false);
    //radioBtn
    const [radioBtn, setradioBtn] = useState('suggestion');

    //Text Area 
    const [helpText, setHelpText] = useState("0/300");
    const [commentFeedaback, setCommentFeedback] = useState('');

    //Toggle
    const [toggle, setToggle] = useState(false)

    //button disable
    const [disableBtn, setDisableBtn] = useState(false)


    // reset all values to original 
    const cancelHandler = () => {
        setOpen(false);
        setCommentFeedback('');
        setNotificationOpen(false);
        setradioBtn('suggestion');
        setDisableBtn(false)
    }

    // submisson of the comments
    const startEstimateHandler = () => {
        let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData);
        let userFeedbackData = {
            "data": {
                "email": userData.email,
                "feedbackType": radioBtn,
                "comments": commentFeedaback,

            }
        }
        props.showScreenLoader();
        props.sendFeedback(userFeedbackData).then((res) => {
            if (res.status === 'SUCCESS') {
                setOpen(false);
                setCommentFeedback('');
                setNotificationOpen(true);
                setDisableBtn(false);
                setradioBtn('suggestion');
                props.hideScreenLoader();

            }

            else {
                if (res.errorCode === 'ERRCAS401B') {
                    props.history.push('/');
                } else {
                    alert(englishValue('TechnicalError'));
                }
                // setOpen(false);
                // setCommentFeedback('');
                // setDisableBtn(false);
                // setNotificationOpen(false);
                props.hideScreenLoader();
            }
        }).catch((err) => {
            alert(englishValue('TechnicalError'))
            // setOpen(false);
            // setCommentFeedback('');
            // setDisableBtn(false);
            //setNotificationOpen(false);
            props.hideScreenLoader();
        });

    }

    //radioBtn 
    const radioBoxHandler = (e) => {
        setradioBtn(e)
    }

    //toggle handler not used in app
    const toggleHandler = (e) => {
        setToggle(e)
    }

    //btn
    const commentHandler = (e) => {
        if ((e.target.value).length > 5) {
            setDisableBtn(true)
        } else {
            setDisableBtn(false)
        }
        setCommentFeedback(e.target.value)
        setHelpText(e.target.value.length + "/300")
    }


    return (
        <>
            <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />
            <div className='ModalStyle FeedbackModalStyle'>
                <Modal open={open} modalHeading={englishValue('FeedbackValue')}
                    preventCloseOnClickOutside={true}
                    secondaryButtonText={englishValue('CANCEL')}
                    primaryButtonText={englishValue('Submit')}
                    onRequestSubmit={() => startEstimateHandler()}
                    onSecondarySubmit={cancelHandler}
                    onRequestClose={cancelHandler}
                    primaryButtonDisabled={!disableBtn}
                >
                    <ModalHeader className="closeBtnHiding" onClick={cancelHandler} />
                    {/* Radio btn */}
                    <RadioButtonGroup
                        className='RadioFeedbacktype'
                        name="radio-button-group"
                        defaultSelected="suggestion"
                        valueSelected={radioBtn}
                        onChange={(e) => radioBoxHandler(e)}
                    >
                        <RadioButton labelText={englishValue('Compliment')} value="compliment" id="Compliment1" />
                        <RadioButton labelText={englishValue('Suggestion')} value="suggestion" id="Suggestion1" />
                        <RadioButton labelText={englishValue('Bug')} value="issue" id="Bug1" />
                        <RadioButton labelText={englishValue('addReviewer')} value="addReviewer" id="addReviewer" />
                    </RadioButtonGroup>

                    {/* Text area */}

                    <TextArea
                        cols={20}
                        id="FeedbackComment"
                        maxLength="300"
                        labelText={"Description/Comments(Minium 5 Characters)"}
                        helperText={helpText}
                        value={commentFeedaback}
                        placeholder="Let us know ur thoughts"
                        rows={5}
                        onChange={(e) => commentHandler(e)}
                    />

                    {/* toggle
                <Toggle
                    labelText="Would you like to follow up on your feedback"
                    labelA="No"
                    labelB="Yes"
                    id="Feedbacktoggle"
                    value={toggle}
                    onToggle={toggleHandler}
                /> */}

                </Modal>
                <Button kind="secondary" className="feedback" onClick={() => setOpen(true)}>
                  {englishValue('FeedbackValue')}
                </Button>
            </div >
            {/* toast message on submission */}
            {notificationOpen ? <FeedbackNotification cancelHandler={cancelHandler} /> : ''}

        </>

    );
}



export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
