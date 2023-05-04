import React, { useState, useEffect } from 'react';
import { ModalHeader, Modal } from 'carbon-components-react';
import { Delete16 } from '../../Components/CommonFuncs/Icons';
import { englishValue } from '../../Utils/CommonFunc';
import BriefEstimateTable from './BriefEstimateTable';

function BriefEstimate(props) {

    var dataRow=props.dropDownList.standardWorkStreams
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
        <div className='ModalStyle'>
            <Modal passiveModal open={open} modalHeading={englishValue('EffortBaseline')}
                preventCloseOnClickOutside={true}
                onRequestClose={cancelHandler}
            >
                <ModalHeader  className="closeBtnHiding" onClick={cancelHandler} />
                <BriefEstimateTable  dataRow={dataRow}></BriefEstimateTable>
            </Modal><a className='EffortBaseline' onClick={() => setOpen(true)}>
                {englishValue('EffortBaseline')}
            </a>


        </div >
    );
}



export default BriefEstimate;
