import React, { useState, useEffect } from 'react';
import { Modal } from 'carbon-components-react';
import './../OpportunityInputsParameter/SaveModal.scss';
import { englishValue } from '../../Utils/CommonFunc';
function ReworkVersionModal(props) {
    //Close the Modal 
    const [open, setOpen] = useState(true);
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData)


    const cancelHandler = () => {
        setOpen(false)
        props.hideSentForReworkPopup();
        props.resetDashBoard();
        props.history.push('/dashboard');
    }


    const ownerNameExtract = () => {
        let estimateId = window.localStorage.getItem('estimateId');
        estimateId = JSON.parse(estimateId);
        let ownerName = '';
        props.userSessionData.dashBoardData.estimates.map(ele => {
            if (ele.id == estimateId) {
                ownerName = ele.ownerName
            }
        })

        return ownerName;
    }

    return (
        <>
            <div className='saveModal'>
                <Modal passiveModal open={open}
                    modalHeading='Estimate assigned for rework'
                    preventCloseOnClickOutside={false}
                    onClick={() => cancelHandler()}
                >
                    <p>{englishValue('MigrationModelEstimate1')} {ownerNameExtract()} {englishValue('MigrationModelEstimate2')}</p>
                </Modal></div>


        </>

    );
}
export default ReworkVersionModal;