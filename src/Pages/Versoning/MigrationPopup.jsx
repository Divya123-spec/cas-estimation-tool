import React, { useState, useEffect } from 'react';
import { Modal } from 'carbon-components-react';
import './../OpportunityInputsParameter/SaveModal.scss';
import { englishValue } from '../../Utils/CommonFunc';
function MigrationPopup(props) {
    //Close the Modal 
    const [open, setOpen] = useState(true);
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData)


    const cancelHandler = () => {
        setOpen(false)
        props.hideMigrationPopup();
    }


    return (
        <>
            <div className='saveModal'>
                <Modal passiveModal open={open}
                    modalHeading=''
                    preventCloseOnClickOutside={false}
                    onClick={() => cancelHandler()}
                >
                    <p>{englishValue('MigrationModelPopup')}</p>
                </Modal></div>


        </>

    );
}
export default MigrationPopup;