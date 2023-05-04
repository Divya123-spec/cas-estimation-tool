import React, { useState } from 'react';
import { ModalHeader, Modal } from 'carbon-components-react';
import { englishValue } from '../../../Utils/CommonFunc';
function PrivacyStatement(props) {
    const [open, setOpen] = useState(false);
    return (
        <div className='ModalStyle'>
            <Modal
                passiveModal
                danger open={open} modalHeading='Privacy Statement'
                preventCloseOnClickOutside='false'
                onRequestClose={() => setOpen(false)}
                onClick={() => setOpen(false)}
            >
                <ModalHeader />
                <p className="bx--modal-content__text">
                    {englishValue('PrivacyData')}</p>
            </Modal>
            <a className="privacy-class" onClick={() => setOpen(true)} >{englishValue('PrivacyStatement')}</a>
        </div >
    );
}



export default PrivacyStatement;
