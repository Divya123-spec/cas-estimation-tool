import React, { useState,useEffect } from 'react';
import { ModalHeader, Modal, Button } from 'carbon-components-react';
import './HeaderInputs.scss';
import { englishValue } from '../../Utils/CommonFunc';
function ResetModal(props) {

    //Close the Modal 
    const [open, setOpen] = useState(false);

    const cancelHandler = () => {
        setOpen(false);
    }

    function onRequestSubmit() {
        cancelHandler();
        props.resetHandler()
    }
    // useEffect(() => {
    //     if (open) {
    //         document.body.style.overflowY = "hidden";
    //     } else {
    //         document.body.style.overflowY = "auto";
    //     }
    // })

    return (
        <div className='ModalStyle'>
            <Modal open={open} modalHeading='Are you sure you want to reset?'
                preventCloseOnClickOutside={true}
                secondaryButtonText="Cancel"
                primaryButtonText="Reset"
                onRequestSubmit={onRequestSubmit}
                onSecondarySubmit={cancelHandler}
                onRequestClose={cancelHandler}

            // onClick={() => setOpen(false)}                                
            >
                <ModalHeader className="closeBtnHiding" onClick={cancelHandler} />
                <p className="bx--modal-content__text">By confirming, you agree to lose the changes made and restore the default values.</p>
            </Modal>
            <Button
                kind="tertiary"
                disabled={!props.resetButtonStatus}
                onClick={() => setOpen(true)}
            >{englishValue('Reset')}</Button>
        </div >
    );
}



export default ResetModal;
