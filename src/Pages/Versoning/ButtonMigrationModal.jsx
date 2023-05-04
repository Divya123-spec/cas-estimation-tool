import React, { useState, useEffect } from 'react';
import { Modal } from 'carbon-components-react';
import './../OpportunityInputsParameter/SaveModal.scss';
import { englishValue } from '../../Utils/CommonFunc';
import { productivityDevscops_validation } from '../../Components/CommonFuncs/formula/Validations/Productivity_validation';
function ButtonMigrationModal(props) {
    //Close the Modal 
    const [open, setOpen] = useState(true);
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData)


    const cancelHandler = () => {
        setOpen(false)
        props.resetDashBoard();
        props.closeExportModalResetDashboard();
        props.navigationInputToggleDefault();
        props.navigationInputToggleInputProductivityDefault();
        props.navigationInputToggleOutputProductivityDefault();
        props.history.push('/dashboard');
        props.hideButtonMigrationPopup();
    }


    return (
        <>
            <div className='saveModal'>
                <Modal passiveModal open={open}
                    modalHeading='Migration'
                    preventCloseOnClickOutside={false}
                    onClick={() => cancelHandler()}
                >
                    <p>{englishValue('ButtonMigrationModal')}</p>
                </Modal></div>


        </>

    );
}
export default ButtonMigrationModal;