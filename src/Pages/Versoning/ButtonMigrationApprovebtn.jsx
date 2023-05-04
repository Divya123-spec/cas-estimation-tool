import React, { useState, useEffect } from 'react';
import { Modal } from 'carbon-components-react';
import './../OpportunityInputsParameter/SaveModal.scss';
import { englishValue } from '../../Utils/CommonFunc';
import { useHistory } from 'react-router-dom';
function ButtonMigrationApprovebtn(props) {
    //Close the Modal 
    const [open, setOpen] = useState(true);
    let history = useHistory();
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData)
    //All dahbaord estimates
    let dahboardEstimateData = props.userSessionData?.dashBoardData?.estimates;
    const cancelHandler = () => {
    setOpen(false)
      sendForRework_local();
      
    }

    
    const sendForRework_local = () => {
        let estimateId = window.localStorage.getItem('estimateId');
        estimateId = JSON.parse(estimateId)
         //rev_id ==

         let EstimateRecord = dahboardEstimateData?.filter((ele) => ele['_id'] === estimateId)
        // appenending comments for migration case sysytem generated msg
        let userData = {
            "data": {
                "_id": estimateId,
                "_rev": EstimateRecord[0]?.['_rev'],
                "approvalComment":`${props.userInpuData.defaultInputData.response.estimate.approvalComment} . System has assigned estimate back to owner as this record needs migration to the latest available estimation template.`
            }
        }

       // props.showScreenDashLoader(props.toggle);
        
        props.sendForRework(userData).then((res) => {
            if (res.status === 'SUCCESS') {
                props.hideButtonMigrationPopupApproveBtn();
                props.resetDashBoard();
                history.push('/dashboard');
               // props.hideButtonMigrationPopupApprovebtn();
            }
            else {
                if (res.errorCode === 'ERRCAS401B') {
                    props.history.push('/');
                } else if (res.errorCode === 'ERRCASDB409'){
                    alert(res.errorMessage)
                } else {
                    alert(englishValue('TechnicalError'))
                }
            }
        }).catch((err) => {
            alert(englishValue('TechnicalError'))
        });

    }

    const ownerNameExtract =()=>{
        let estimateId = window.localStorage.getItem('estimateId');
        estimateId = JSON.parse(estimateId);
        let ownerName='';
        props.userSessionData.dashBoardData.estimates.map(ele=>{
            if(ele.id==estimateId){
                ownerName=ele.ownerName
            }
        })
         
        return ownerName;
    }
    return (
        <>
            <div className='saveModal'>
                <Modal passiveModal open={open}
                    modalHeading='Migration'
                    preventCloseOnClickOutside={false}
                    onClick={() => cancelHandler()}
                >
                    <p>{englishValue('ButtonMigrationApprovebtn')}{ownerNameExtract()}.</p>
                </Modal></div>


        </>

    );
}
export default ButtonMigrationApprovebtn;