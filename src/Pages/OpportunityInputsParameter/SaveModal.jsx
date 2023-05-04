import React, { useState ,useEffect} from 'react';
import { Modal } from 'carbon-components-react';
import './SaveModal.scss';
import { englishValue } from '../../Utils/CommonFunc';
function SaveModal(props) {
    //Close the Modal 
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
        let sendReview = true;
        if (props.userInpuData.defaultInputData['response'].estimate.saleStage === 'rom') {
            sendReview = false;
        }
      
        props.userinputStatus({
            RestButton: false,
            EstimateButton: true,
            SaveButton: false,
            CalculateButton: false,
            SendForReivewButton: sendReview,
            Export: true,
            outputButton: true,
            inputButton: true,
            calculateModal: false,
            saveModal: false
        })
    }
    return (
        <div className='saveModal'>
            <Modal passiveModal open={open}
                modalHeading={englishValue('EstimateSaved')}
                preventCloseOnClickOutside={true}
                onRequestClose={cancelHandler}
            // onClick={() => cancelHandler()}
            >
                <p>{englishValue('SaveModal')}</p>
            </Modal>
        </div>
    );
}
export default SaveModal;