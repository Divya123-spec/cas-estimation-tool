import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'carbon-components-react';
import './SaveModal.scss';
import { englishValue } from '../../Utils/CommonFunc';
function ExportInprogressModal(props) {
    //Close the Modal 
    const [open, setOpen] = useState(false);

    const cancelHandler = () => {
        setOpen(false);
    }
    return (
        <div className='saveModal'>
            <Modal passiveModal open={open}
                modalHeading="Estimate Export functionality Coming Soon"
                title=""
                preventCloseOnClickOutside={true}
                onRequestClose={cancelHandler}

            >
                <p></p>
            </Modal>
            {props.title !== "input" ?
                <Button kind="tertiary" disabled={!props.userinputStatusData.Export} onClick={() => {
                    setOpen(true);
                }}>Export</Button> : ''}
        </div>
    );
}
export default ExportInprogressModal;