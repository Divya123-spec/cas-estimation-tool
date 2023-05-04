import React, { useState,useEffect } from 'react';
import { Modal } from 'carbon-components-react';
import './Calculatemodal.scss';
import { englishValue } from '../../Utils/CommonFunc';
function Calculatemodal(props) {
    const [open, setOpen] = useState(true);
    // useEffect(() => {
    //     if (open) {
    //         document.body.style.overflowY = "hidden";
    //     } else {
    //         document.body.style.overflowY = "auto";
    //     }
    // })
    const cancelHandler = () => {
        setOpen(false);
        props.userinputStatus({
            RestButton: true,
            EstimateButton: true,
            SaveButton: true,
            CalculateButton: false,
            SendForReivewButton: false,
            Export: false,
            outputButton: true,
            inputButton: true,
            calculateModal: false,
            saveModal: false

        })
    }

    return (
        <div className='calculateModal'>
            <Modal passiveModal open={open}
                // preventCloseOnClickOutside={true}
                modalHeading={englishValue('OutputGenerated')}
                onClick={() => cancelHandler()}
                // onRequestClose={cancelHandler}
            >
                <p>{englishValue('calculateModal')}</p>
            </Modal>
        </div>


    );
}



export default Calculatemodal;
