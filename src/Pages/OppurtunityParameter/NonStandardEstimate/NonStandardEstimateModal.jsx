import React, { useState } from 'react';
import './NonStandard.scss';
import { ModalHeader, Modal } from 'carbon-components-react';
import { WarningAlt32 } from '@carbon/icons-react';

function NonStandardEstimateModal(props) {

    //Close the Modal 
    const [open, setOpen] = useState(false);
    const cancelHandler = () => {
        setOpen(false);
        props.deleteHandler(false, props.rowID)
    }
    //Pass Data from START ESTIMATE to the Inputs In Opportunity 
    const startEstimateHandler = (userEstimateEdit) => {
        setOpen(false);
        props.deleteHandler(true, props.rowID)

    }

    return (
        <div className='ModalStyle'>
            <Modal open={open} modalHeading='Switch to Non-Standard Estimation'
                secondaryButtonText="Cancel"
                primaryButtonText="Confirm"
                onRequestClose={() => setOpen(false)}
                onClick={() => setOpen(false)}
                onSecondarySubmit={() => cancelHandler()}
                onRequestSubmit={() => startEstimateHandler()}
            >
                <ModalHeader />
                <div className='nonStandardDiv'>
                <p className="bx--modal-content__text">      
                Using non standard estimation is not recommended. If you wish to continue, 
                please note that you will not be able to use standard estimation. 
                Are you sure you want to switch? By confirming you agree to use non standard estimation 
                and provide the data for the custom technologies.     
                    </p>
                    <p className='WarninIconNonStandard'><WarningAlt32/></p>
                </div>
              
            </Modal>
            <p className='NonStandardEstimation' onClick={() => setOpen(true)}>
                Switch to Non-Standard Estimation instead
            </p>
        </div >
    );
}



export default NonStandardEstimateModal;
