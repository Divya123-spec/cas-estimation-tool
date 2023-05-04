import React, { useState, useEffect } from 'react';
import { Modal } from 'carbon-components-react';
import './../OpportunityInputsParameter/SaveModal.scss';
import { englishValue } from '../../Utils/CommonFunc';
function MigrationModalApproved(props) {
    const [open, setOpen] = useState(true);
    const cancelHandler = () => {
        props.hideScreenPopupVersion();
    }
    const stateMigrationData = () => {
        if (props.AppScreenLoader.labelVersionStatus == 'Approved') {
            return (
                <p>{englishValue('MigrationModelApprove')}</p>
            )
        }
    }

    return (
        // approved modal where the initial modal willl appear om the dashboard 
        <div className='saveModal2'>
            <Modal open={open}
                modalHeading='Updated version of template identifed'
                preventCloseOnClickOutside={false}
                secondaryButtonText="Cancel"
                primaryButtonText="Download"
                onSecondarySubmit={() => cancelHandler()}
                onRequestSubmit={() => props.startEstimateHandler()}
            >
                {stateMigrationData()}
            </Modal>
        </div>
    );
}
export default MigrationModalApproved;