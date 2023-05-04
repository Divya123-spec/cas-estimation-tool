import React, { useState, useEffect } from 'react';
import { Modal } from 'carbon-components-react';
import './../OpportunityInputsParameter/SaveModal.scss';
import { englishValue } from '../../Utils/CommonFunc';
function MigrationModal(props) {
    //Close the Modal 
    const [open, setOpen] = useState(true);
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData)
    const startEstimateHandler=()=>{
        if (props.AppScreenLoader.labelVersionStatus == 'New' || (props.AppScreenLoader.labelVersionStatus == 'Rework' && props.AppScreenLoader.ownerEmail == userData.email)) {
            props.hideScreenPopupVersion();
            props.showScreenDashLoader(props.toggle);
            props.MigrationFlowOKData()
        }else if (props.AppScreenLoader.labelVersionStatus == 'Rework' && props.AppScreenLoader.ownerEmail !== userData.email){
            props.hideScreenPopupVersion();
        }

       
    }
    const stateMigrationData = () => {

        if (props.AppScreenLoader.labelVersionStatus == 'New' || (props.AppScreenLoader.labelVersionStatus == 'Rework' && props.AppScreenLoader.ownerEmail == userData.email)) {
            return (
                <p>{englishValue('MigrationModel')}</p>
            )
        } else if (props.AppScreenLoader.labelVersionStatus == 'Rework' && props.AppScreenLoader.ownerEmail !== userData.email) {
            return (
                <p>{englishValue('MigrationModelReworkReviwer')}</p>
            )
        } else if (props.AppScreenLoader.labelVersionStatus == 'Approved') {
            return (
                <p>Approved Modal</p>
            )
        } else if (props.AppScreenLoader.labelVersionStatus == 'InReview' && props.AppScreenLoader.ownerEmail === userData.email) {
            return (
                <p>InReview Modal owner</p>
            )
        } else if (props.AppScreenLoader.labelVersionStatus == 'InReview' && props.AppScreenLoader.ownerEmail !== userData.email) {
            return (
                <p>InReview Modal Reviwer</p>
            )

        }
    }
    return (
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
    );
}
export default MigrationModal;