
import React, { useState, useEffect } from 'react';
import { Modal, ToastNotification } from 'carbon-components-react';
import './../OpportunityInputsParameter/SaveModal.scss';
import { englishValue } from '../../Utils/CommonFunc';
function RecalculationModal(props) {
    //Close the Modal 
    const [open, setOpen] = useState(true);
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData)
    const cancelHandler = () => {
        setOpen(false);
        props.hideScreenPopupVersion();
        props.showScreenDashLoader(props.toggle);
    }
    // const stateMigrationData = () => {

    //     if (props.AppScreenLoader.labelVersionStatus == 'New' || (props.AppScreenLoader.labelVersionStatus == 'Rework' && props.AppScreenLoader.ownerEmail == userData.email)) {
    //         return (
    //             <p>{englishValue('RecalculationModel')}</p>
    //         )
    //     } else if (props.AppScreenLoader.labelVersionStatus == 'Rework' && props.AppScreenLoader.ownerEmail !== userData.email) {
    //         return (
    //             <p>Rework Modal</p>
    //         )
    //     } else if (props.AppScreenLoader.labelVersionStatus == 'Approved') {
    //         return (
    //             <p>Approved Modal</p>
    //         )
    //     } else if (props.AppScreenLoader.labelVersionStatus == 'InReview' && props.AppScreenLoader.ownerEmail === userData.email) {
    //         return (
    //             <p>InReview Modal owner</p>
    //         )
    //     } else if (props.AppScreenLoader.labelVersionStatus == 'InReview' && props.AppScreenLoader.ownerEmail !== userData.email) {
    //         return (
    //             <p>InReview Modal Reviwer</p>
    //         )

    //     }
    // }
    return (
        <div className='saveModal2'>
            <ToastNotification
                iconDescription="Update complete!"
                subtitle={<span>Estimate has been refreshed with latest version.</span>}
                kind="success"
                title="Update complete!"
                caption=""
                lowContrast={true}
                timeout={1800}
                onClose={cancelHandler}
            />

        </div>
    );
}
export default RecalculationModal;