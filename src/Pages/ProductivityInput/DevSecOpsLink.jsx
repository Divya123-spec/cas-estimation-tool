import React, { useState, useEffect } from 'react';
import { ModalHeader, Modal } from 'carbon-components-react';
import { englishValue } from '../../Utils/CommonFunc';
import DevSecOpslinktable from './DevSecOpslinktable';
import './ProductivityInput.scss';
//function to display data of the devscops link
function DevSecOpsLink(props) {
    //Close the Modal 
    const [open, setOpen] = useState(false);
    // useEffect(() => {
    //     if (open) {
    //         document.body.style.overflowY = "hidden";
    //     } else {
    //         document.body.style.overflowY = "auto";
    //     }
    // })
    const cancelHandler = () => {
        setOpen(false);
    }


    return (
        <div className='ModalStyle1' >
            <div className='ModalStyle' >
                <Modal passiveModal open={open} modalHeading={englishValue('BaselineperclientMaturity')}
                    preventCloseOnClickOutside={true}
                    onRequestClose={cancelHandler}>
                    <ModalHeader className="closeBtnHiding" onClick={cancelHandler} />
                    <DevSecOpslinktable data={props} />
                </Modal>
                <a className='EffortBaseline' onClick={() => setOpen(true)}>
                    {englishValue('DevsecOpsLink')}
                </a>

            </div>

        </div >
    );
}



export default DevSecOpsLink;
