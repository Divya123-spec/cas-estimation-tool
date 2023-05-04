import React, { useState, useEffect } from 'react';
import { ModalHeader, Modal, TooltipIcon } from 'carbon-components-react';
import { Delete16 } from '../../Components/CommonFuncs/Icons';
import { englishValue } from '../../Utils/CommonFunc';

function DeleteModal(props) {

    //Close the Modal 
    const [open, setOpen] = useState(false);

    const cancelHandler = () => {
        setOpen(false);
        //props.deleteHandler(false, props.rowID)
    }
    // useEffect(() => {
    //     if (open) {
    //         document.body.style.overflowY = "hidden";
    //     } else {
    //         document.body.style.overflowY = "auto";
    //     }
    // })

    //Pass Data from START ESTIMATE to the Inputs In Opportunity 
    const startEstimateHandler = (userEstimateEdit) => {
        cancelHandler();
        setOpen(false);
        if(props.distributionArr.length==1){
            props.deleteHandler(false, props.rowID)
        }else{
            props.deleteHandler(true, props.rowID)
        }
       

    }


    return (
        <div className='ModalStyle'>
            <Modal danger open={open} modalHeading='Delete Application Technology'
                preventCloseOnClickOutside={true}
                secondaryButtonText={englishValue('Cancel')}
                primaryButtonText={englishValue('Delete')}
                onRequestSubmit={() => startEstimateHandler()}
                onSecondarySubmit={cancelHandler}
                onRequestClose={cancelHandler}

            // onClick={() => setOpen(false)}
            >
                <ModalHeader className="closeBtnHiding" onClick={cancelHandler} />
                <p className="bx--modal-content__text">Are you sure you want to delete the technology?</p>
            </Modal>
            {props.deleteAppTech||props.distributionArr.length==1 ?
                <TooltipIcon tooltipText={ englishValue('deleteTechnolgies')} direction='left'>
                    <span className="deleteModalBtn"
                        data-attr={props.readOnlyStatusData}><Delete16 /></span>
                </TooltipIcon>
                :
                <span className="deleteModalBtn"
                    onClick={() => setOpen(true)}
                    data-attr={props.readOnlyStatusData}><Delete16 /></span>}

        </div >
    );
}



export default DeleteModal;
