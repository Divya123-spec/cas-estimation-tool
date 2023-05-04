
import React, { useState, useEffect } from 'react';
import { Modal, ToastNotification } from 'carbon-components-react';
import './../OpportunityInputsParameter/SaveModal.scss';
import { englishValue } from '../../Utils/CommonFunc';
function StaffingModal(props) {
    //Close the Modal 
    const [open, setOpen] = useState(true);
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData)
    const cancelHandler = () => {
        setOpen(false);
        props.hideGeneratestaffingPopup();
    }
    
    return (
        <div className='saveModal2'>
            <ToastNotification
                iconDescription=""
                subtitle={<span>The Staffing file has been generated.</span>}
                kind="success"
                title=""
                caption=""
                lowContrast={true}
                timeout={1800}
                onClose={cancelHandler}
            />

        </div>
    );
}
export default StaffingModal;