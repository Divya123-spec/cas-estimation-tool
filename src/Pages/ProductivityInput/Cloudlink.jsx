import React, { useState, useEffect } from 'react';
import { ModalHeader, Modal, TooltipIcon } from 'carbon-components-react';
import { englishValue } from '../../Utils/CommonFunc';
import CloudlinkTable from './CloudlinkTable';
import './ProductivityInput.scss';

function Cloudlink(props) {
    //Close the Modal 
    const [open, setOpen] = useState(false);
    const cancelHandler = () => {
        setOpen(false);
    }

    return (
        <div className='ModalStyle1'>
            <div className='ModalStyle'>
                <Modal passiveModal open={open} modalHeading={englishValue('BaselineperclientMaturity')}
                    preventCloseOnClickOutside={true}
                    onRequestClose={cancelHandler}>
                    <ModalHeader className="closeBtnHiding" onClick={cancelHandler} />
                    <CloudlinkTable data={props} />
                </Modal>

                <a className='EffortBaseline' onClick={() => setOpen(true)}>
                    {englishValue('DevsecOpsLink')}
                </a>

            </div>

        </div >
    );
}



export default Cloudlink;
