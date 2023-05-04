import React, { useState, useEffect } from 'react';
import { Modal } from 'carbon-components-react';
import './../OpportunityInputsParameter/SaveModal.scss';
import { englishValue } from '../../Utils/CommonFunc';
import { REVIEWER_POPUP_HIDE } from '../../store/actions/ActionType';
function MigrationModalInReview(props) {

    //Close the Modal 
    const [open, setOpen] = useState(true);
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData);
    let dahboardEstimateData = props.userSessionData?.dashBoardData?.estimates;
    const startEstimateHandler = () => {
        if (props.AppScreenLoader.labelVersionStatus == 'InReview') {
            props.hideScreenPopupVersion();
            sendForRework_local();
        }
    }

    const ownerNameExtract = () => {
        let estimateId = window.localStorage.getItem('estimateId');
        estimateId = JSON.parse(estimateId);
        let ownerName = '';
        props.userSessionData.dashBoardData.estimates.map(ele => {
            if (ele.id == estimateId) {
                ownerName = ele.ownerName
            }
        })

        return ownerName;
    }
    const cancelHandler = () => {
        props.hideReviewerPopup();
    }

    const sendForRework_local = () => {
        let estimateId = window.localStorage.getItem('estimateId');
        estimateId = JSON.parse(estimateId);

        //rev_id ==

        let EstimateRecord = dahboardEstimateData?.filter((ele) => ele['_id'] === estimateId)
        let approvalComments = window.localStorage.getItem('approvalComment');
        approvalComments = JSON.parse(approvalComments)



        let userData = {
            "data": {
                "_id": estimateId,
                "_rev": EstimateRecord[0]?.['_rev'],
                "approvalComment": `${approvalComments} . System has assigned estimate back to owner as this record needs migration to the latest available estimation template.`
            }
        }

        props.showScreenDashLoader(props.toggle);

        props.sendForRework(userData).then((res) => {
            if (res.status === 'SUCCESS') {
                props.hideScreenDashLoader();
                props.showSentForReworkPopup();
            }
            else {
                if (res.errorCode === 'ERRCAS401B') {
                    props.history.push('/');
                }else if (res.errorCode === 'ERRCASDB409'){
                    alert(res.errorMessage)
                }  else {
                    alert(englishValue('TechnicalError'))
                }
                props.hideScreenDashLoader();
            }
        }).catch((err) => {
            alert(englishValue('TechnicalError'))
            props.hideScreenDashLoader();
        });

    }
    const stateMigrationData = () => {
        if (props.AppScreenLoader.labelVersionStatus == 'InReview') {
            return (
                <p>{englishValue('MigrationModelReview')} {ownerNameExtract()}</p>
            )
        }
    }
    return (
        <>
            <div className='saveModal2'>
                <Modal open={open}
                    modalHeading='Updated version of template identifed'
                    preventCloseOnClickOutside={false}
                    primaryButtonText="OK"
                    onRequestSubmit={() => startEstimateHandler()}
                >
                    {stateMigrationData()}
                </Modal>
            </div>


        </>

    );
}
export default MigrationModalInReview;