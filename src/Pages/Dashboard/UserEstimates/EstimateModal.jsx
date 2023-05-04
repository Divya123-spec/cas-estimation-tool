import React, { useState, useEffect } from 'react';
import { ComposedModal, Button, Loading } from 'carbon-components-react';
import NewEstimate from './NewEstimate'
import { Add16 } from '@carbon/icons-react';
import LoaderApp from '../../../Pages/LoaderApp';
import { errorCodeMsg, englishValue } from '../../../Utils/CommonFunc';

// function for New Estimate Btn in Application
function EstimateModal(props) {
    const [open, setOpen] = useState(props.userDropDownData.modalOpen);
    const [fetched, setFetched] = useState(false);
    const cancelHandler = () => {

        props.cancelhandlerModal();
        setOpen(false);
    }

    const modalOpenFetch = () => {
        setFetched(true)
        //After clicking on btn new estimate A API to load default drop downs have to be called
        props.userDefaultDataDropEdit().then((res) => {
            if (res.status === 'SUCCESS') {
                setFetched(false)
            }
            else {
                if (res.errorCode === 'ERRCAS401B') {
                    props.history.push('/');
                } else {
                    alert(englishValue('TechnicalError'))
                }
                props.hideScreenLoader();
            }

        }).catch((err) => {
            alert(englishValue('TechnicalError'))
            setFetched(false)
        });
    }

    //Pass Data from START ESTIMATE to the Inputs In Opportunity 
    const startEstimateHandler = (userEstimateEdit) => {
    
        setFetched(true)
        let userDataOwner = window.localStorage.getItem('userData');
        if (userDataOwner) {
            userDataOwner = JSON.parse(userDataOwner);
            userEstimateEdit = {
                ...userEstimateEdit,
                "ownerEmail": userDataOwner.email,
                "ownerName": userDataOwner.name,
            }
            let userData = {
                "data": {
                    "estimationBasicDetails": {
                        "estimationTitle": userEstimateEdit.estimateTitle,
                        "opportunityId": userEstimateEdit.opportunityId,
                        "opportunityName": userEstimateEdit.opportunityName,
                        "opportunityShortDesc": userEstimateEdit.opportunityShortDesc,
                        "clientName": userEstimateEdit.clientName,
                        "saleStage": userEstimateEdit.saleStage,
                        "industry": userEstimateEdit.industry,
                        "ownerEmail": userDataOwner.email,
                        "ownerName": userDataOwner.name
                    }
                }
            }
            //API call to send data to backend and create a new EStimate 
            props.userInputDataEditData(userData).then((res) => {
                
                if (res.status === 'SUCCESS') {
                    props.history.push('/OppParamter');
                    setFetched(false)
                }
                else {
                    if (res.errorCode === 'ERRCAS401B') {
                        setFetched(false);
                        props.history.push('/');
                    } else if (res.errorCode === 'CAS100008') {
                        alert(errorCodeMsg(res.errorCode))
                        setFetched(false)
                    } else {
                        alert(englishValue('TechnicalError'))
                        setFetched(false)
                    }

                }

            }

            ).catch((err) => {
                alert(englishValue('TechnicalError'))
                props.history.push('/dashboard');
                setFetched(false)
            });
        }
    }

    if (props.toggle === "ownerTab") {
        return (
            <>
                <div className='ModalStyle'>
                    <ComposedModal
                        preventCloseOnClickOutside='false'
                        open={open} onClose={() => setOpen(false)}>
                        <NewEstimate cancelHandler={cancelHandler} startEstimateHandler={startEstimateHandler} {...props}></NewEstimate>
                    </ComposedModal>
                    {fetched ? <LoaderApp loaderBtn={fetched}></LoaderApp> : ''}
                    <Button kind="primary" renderIcon={Add16} className="buttonNewEstimate" onClick={modalOpenFetch}>{englishValue('NewEstimate')}</Button>
                </div>

            </>
        );
    } else {
        return (
            <>
                {fetched ? <Loading></Loading> :
                    <>
                        <div className='ModalStyle'>
                            <ComposedModal
                                preventCloseOnClickOutside='false'
                                open={open} onClose={() => setOpen(false)}>
                                <NewEstimate cancelHandler={cancelHandler} startEstimateHandler={startEstimateHandler} {...props}></NewEstimate>
                            </ComposedModal>
                        </div>
                    </>
                }

            </>


        )
    }
}

export default EstimateModal;
