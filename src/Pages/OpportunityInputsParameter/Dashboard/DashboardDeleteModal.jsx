import React from 'react';
import { ModalHeader, Modal } from 'carbon-components-react';
import { englishValue } from "../../../Utils/CommonFunc"

function DashboardDeleteModal(props) {


    return (
        <div className='ModalStyle'>
            <Modal danger open={props.open} modalHeading='Delete Estimate'
                preventCloseOnClickOutside={true}
                secondaryButtonText={englishValue('Cancel')}
                primaryButtonText={englishValue('Delete')}
                onRequestSubmit={() => {
                    props.showScreenDashLoader(props.toggle)
                    props.deleteEstimate(props.estimateId)}}
                onSecondarySubmit={props.close}
                onRequestClose={props.close}
            >
                <ModalHeader  className="closeBtnHiding" onClick={props.close} />
                <p className="bx--modal-content__text">Are you sure you want to delete the estimate?</p>
            </Modal>
        </div>
    );
}



export default DashboardDeleteModal;
