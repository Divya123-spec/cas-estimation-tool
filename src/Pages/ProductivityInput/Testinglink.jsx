import React, { useState, useEffect } from 'react';
import { ModalHeader, Modal } from 'carbon-components-react';
import { englishValue } from '../../Utils/CommonFunc';
import TestinglinkTable from './TestinglinkTable';
import './ProductivityInput.scss';

function Testinglink(props) {
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
        <div className='ModalStyle1'>
            <div className='ModalStyle'>
                <Modal passiveModal open={open} modalHeading={englishValue('BaselineperclientMaturity')}
                    preventCloseOnClickOutside={true}
                    onRequestClose={cancelHandler}>
                    <ModalHeader  className="closeBtnHiding" onClick={cancelHandler} />
                    <TestinglinkTable data={props} />
                </Modal><a className='EffortBaseline' onClick={() => setOpen(true)}>
                    {englishValue('DevsecOpsLink')}
                </a>

            </div>

        </div >
    );
}



export default Testinglink;
