import React, { useState, useEffect } from 'react';
import { ToastNotification, Modal, Button, RadioButtonGroup, RadioButton, Search } from 'carbon-components-react';
import './SendForReviewModal.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions/ActionCreator";
import { englishValue } from '../../Utils/CommonFunc';
import { UserAvatarFilledAlt32 } from '@carbon/icons-react';
import { useHistory } from 'react-router';
import ButtonMigrationModal from '../Versoning/ButtonMigrationModal';
import RecalculationModal from '../Versoning/RecalculationModal';
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
function mapStateToProps(state) {
    return {
        userSessionData: state.userSessionData,
        userestimateState: state.userEstimateState,
        userAppScreenLoader: state.screendashLoader,
    };
}
function SendforReviewModal(props) {
    const [radioBtn, setRadioBtn] = useState('default');
    const [reviwersData, setReviwersData] = useState([]);
    const [Submitdisable, setSubmitdisable] = useState('true');
    const [SelectedReviewr, setSelectedReviewr] = useState({ name: '', email: '' });
    const [searchData, setSearchData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchEmail, setSearchEmail] = useState('');
    let history = useHistory();
    const handlerChange = event => {
        if (event.target !== undefined) {
            const { value } = event.target;
            setRadioBtn(value)
        }
    }
    const resetAllValues = () => {
        setReviwersData([]);
        setSearchData([]);
        setSearchValue('')
        setSearchEmail('')
        setSelectedReviewr({
            name: '',
            email: ''
        })
    }
    const cancelHandler = () => {
        setRadioBtn("default")
        props.hideReviewerPopup()
        setRadioBtn('default');
        resetAllValues()
    }
    const sendForReviewHandler2 = () => {
        let nameMailArray = radioBtn.split("#")
        if (SelectedReviewr.name && SelectedReviewr.email) {
            let reviwerData = {
                "data": {
                    "_id": props.userInpuData.defaultInputData['response']['estimate']['_id'],
                    "_rev":props.userInpuData.defaultInputData['response']['estimate']['_rev'],
                    "reviewerEmail": SelectedReviewr.email,
                    "reviewerName": SelectedReviewr.name
                }
            }
            let InputData = { "data": { "userInfo": { "email": props.userData1.ownerEmail } } }
            props.hideReviewerPopup()
            props.showScreenLoader()
            props.sendForReviewEstimateData(reviwerData, InputData).then((res) => {
                if (res.status === 'SUCCESS') {
                    if(res.recalculate){
                        props.showScreenPopupVersion('Recalculation', '', '');
                    }
                    props.hideScreenLoader();
                    props.navigationInputToggleDefault();
                    props.navigationInputToggleInputProductivityDefault();
                    props.navigationInputToggleOutputProductivityDefault();
                    props.showReviewerSucessPopup();
                }
                else {
                    if (res.errorCode === 'ERRCAS401B') {
                        history.push('/');
                     // 409 error for migration flow
                    } else if (res.errorCode === 'ERRCAS409') {
                        props.showButtonMigrationPopup();
                    }else if (res.errorCode === 'ERRCASDB409'){
                        alert(res.errorMessage)
                    } 
                    else {
                        alert(englishValue('TechnicalError'))
                    }
                    props.hideScreenLoader();
                }
            }).catch((err) => {
                alert(englishValue('TechnicalError'))
                props.hideScreenLoader()
                props.hideReviewerPopup()
            });
        }
    }
    let reviewrsArr = (dataReviewrs) => {
        let arrData = dataReviewrs.map((ele) => {
            return { name: ele.name, email: ele.email, image: `https://w3-unifiedprofile-api.dal1a.cirrus.ibm.com/v3/image/${ele.email}`, imgeError: true }
        })
        setReviwersData(arrData);
        // setSearchData(arrData);
    }
    let fetchAllActiveReviewers_local = () => {
        props.showScreenLoader();
        let userData = window.localStorage.getItem('userData');
        if (Object.keys(userData).length !== 0 && !props.userSessionData.reviewerPopup) {
            userData = JSON.parse(userData)
            props.showScreenLoader()
            props.fetchAllActiveReviewers(userData.email).then((res) => {
                if (res.status === 'SUCCESS') {
                    reviewrsArr(res.data);
                    props.showReviewerPopup();
                    props.hideScreenLoader();
                }
                else {
                    if (res.errorCode === 'ERRCAS401B') {
                        props.history.push('/');
                    } else {
                        alert(englishValue('TechnicalError'))
                    }
                    props.hideScreenLoader();
                }
            });
        }
    }
    let getReviewerDataText = () => {
        if (props.userSessionData.reviewers !== undefined) {
            if (radioBtn === "default")
                setRadioBtn("" + props.userSessionData.reviewers[0].name + "#" + props.userSessionData.reviewers[0].email)
            return (
                <RadioButtonGroup
                    legendText="Radio button heading"
                    name="radio-button-group"
                    onChange={handlerChange}
                    orientation='vertical'
                    defaultSelected={radioBtn}
                >
                    {props.userSessionData.reviewers.map((reviewer, index) => {
                        if (index === 0 && reviewer !== undefined && radioBtn === "default") {
                            setTimeout(() => {
                                setRadioBtn(props.userSessionData.reviewers[props.userSessionData.reviewers.length - 1].name + "#" +
                                    props.userSessionData.reviewers[props.userSessionData.reviewers.length - 1].email)
                            }, 100)
                            setTimeout(() => { setRadioBtn(props.userSessionData.reviewers[0].name + "#" + props.userSessionData.reviewers[0].email) }, 120)
                        }
                        return <RadioButton labelText={reviewer.name} value={reviewer.name + "#" + reviewer.email} id={"review_" + reviewer.email} onClick={() => {
                            setRadioBtn("" + reviewer.name + "#" + reviewer.email)
                        }} />
                    })}
                </RadioButtonGroup>
            )
        }
        else {
            return (<div>No Reviewers available.</div>)
        }
    }
    let searchBoxValue = (e) => {
        let valueSearch = e.target.value;
        let serachBoxValue = [];
        if (valueSearch.length == 0) {
            setSearchData([])
        } else {
            let xy = valueSearch.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "");
            let regex = new RegExp(`^${xy}`, 'i');
            searchBoxValue = reviwersData.sort().filter((item) => regex.test(item.name) || regex.test(item.email));
            setSearchData(searchBoxValue)
        }
        setSearchValue(valueSearch);
        setSubmitdisable(true)
        setSelectedReviewr({
            name: '',
            email: ''
        })
    }
    let onImageError = (item) => {
        let splitarr = item.target.currentSrc.split('/');
        let emailname = splitarr[splitarr.length - 1];
        let searchdataReview = searchData.map((ele) => {
            if (ele.email === emailname) {
                return {
                    name: ele.name,
                    email: ele.email,
                    image: `https://w3-unifiedprofile-api.dal1a.cirrus.ibm.com/v3/image/${ele.email}`,
                    imgeError: false
                }
            } else {
                return { ...ele }
            }
        })
        setSearchData(searchdataReview)
    }
    let selectedvalueHandler = (e, item) => {
        setSearchValue(item.name);
        setSearchEmail(item.email)
        let regex = new RegExp(`^${item.name}`, 'i');
        // searchBoxValue = reviwersData.sort().filter((item) => regex.test(item.name));
        // setSearchData(searchBoxValue)
        setSearchData([])
        setSelectedReviewr({
            name: item.name,
            email: item.email
        })
        setSubmitdisable(false)
    }
    let searchBox = (e) => {
        return (
            <>
                <Search value={searchValue} onChange={(e) => searchBoxValue(e)} placeHolderText=" Search By Name or Email Id" onClick={() => setSearchValue('')} />
                <ul>
                    {searchData.map((item) => <li className='listreviers' onClick={(e) => selectedvalueHandler(e, item)} >
                        <div className='sendReviwerData'>
                            <p>
                                {
                                    item.imgeError ?
                                        <img
                                            src={item.image}
                                            className="img-class"
                                            width="30"
                                            height="30"
                                            onError={(item) => onImageError(item)}
                                        />
                                        :
                                        <UserAvatarFilledAlt32 />
                                }
                            </p>
                            <div>
                                <p>
                                    {item.name}
                                </p>
                                <p>
                                    {item.email}
                                </p>
                            </div>
                        </div>
                    </li>)}
                </ul>
                <div >
                    <p className={SelectedReviewr.name ? 'selectedreviewer' : ''}>
                        {SelectedReviewr.name}
                    </p>
                    {/* <p>
                        {SelectedReviewr.email}
                    </p> */}
                </div>
            </>
        )
    }
    const isApproved = () => {
        if (props.userestimateState !== undefined)
            return "Approved" === props.userestimateState.state;
        return false;
    }
    const isInReview = () => {
        if (props.userestimateState !== undefined)
            return "InReview" === props.userestimateState.state;
        return false;
    }
    let getReviewButtonBasedOnState = () => {
        if ((props.userestimateState !== undefined) && !isInReview() && !isApproved())
            return (
                <Button kind="tertiary" onClick={() => {
                    fetchAllActiveReviewers_local()
                }} className={props.outputClass}
                    disabled={!props.sendForreivewButtonStatus} >{englishValue('SendReviewBtn')}</Button>
            )
    }
    let getReviewerSucessPopup = () => {
        if (props.userSessionData.reviewerSucessPopup)
            return (
                <div class="bx--loading-overlay reviewerSucessPopup">
                    <Modal passiveModal open={props.userSessionData.reviewerSucessPopup}
                        modalHeading="Estimate Sent for Review"
                        preventCloseOnClickOutside={false}
                        onClick={() => {
                            props.resetDashBoard();
                            props.hideReviewerSucessPopup();
                            props.history.push("/dashboard")
                        }}
                        title="Estimate Sent for Review"
                        caption=""
                        lowContrast={true}
                    ><p>The estimate has been assigned for review.
                        You can view estimate from 'My Estimates' on dashboard.</p>
                    </Modal>
                    {/* <ToastNotification
                        iconDescription="Estimate Sent for Review"
                        subtitle={<span></span>}
                        kind="success"
                        title="Estimate Sent for Review"
                        caption=""
                        lowContrast={true}
                        onCloseButtonClick={() => {
                            props.resetDashBoard();
                            props.hideReviewerSucessPopup();
                            props.history.push("/dashboard")
                        }}
                    />*/}
                </div>
            )
    }
    let getReviewContentOnState = () => {
        if (props.userSessionData.reviewerPopup) {
            return (
                <div className='ModalStyle reviewerPopup ' >
                    <Modal
                        open={props.userSessionData.reviewerPopup}
                        modalHeading='Send for Review'
                        preventCloseOnClickOutside={true}
                        secondaryButtonText={englishValue('Cancel')}
                        primaryButtonText={englishValue('SendReviewBtn')}
                        primaryButtonDisabled={Submitdisable}
                        onSecondarySubmit={() => cancelHandler()}
                        onRequestSubmit={() => sendForReviewHandler2()}
                        onRequestClose={() => {
                            resetAllValues()
                            setRadioBtn('default');
                            props.hideReviewerPopup()
                        }}
                        onClose={() => {
                            resetAllValues()
                            props.hideReviewerPopup()
                        }}
                    >
                        <p className="bx--modal-content__text"></p>
                        {/* {getReviewerDataText()} */}
                        {searchBox()}
                    </Modal>
                </div>
            )
        } else return (<div></div>)
    }
    return (
        <>
           {props.userAppScreenLoader?.labelVersion == 'Recalculation' ?
                <RecalculationModal {...props}></RecalculationModal>
                : ''}
            {props.userSessionData.migrationButtonPopup ?
                <ButtonMigrationModal {...props}></ButtonMigrationModal>
                : ''}
            <div id="reviewerModalDiv" className="headerInputModal"  >
                <div>
                    {getReviewContentOnState()}
                    {getReviewButtonBasedOnState()}
                    {getReviewerSucessPopup()}
                </div >
            </div>
        </>

    );
}
export default connect(mapStateToProps, mapDispatchToProps)(SendforReviewModal);