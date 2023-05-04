import React, { useEffect } from 'react';
import { Button } from 'carbon-components-react';
import Export from '../Export/Export'
import * as html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Modal } from 'carbon-components-react';
import { englishValue } from '../../Utils/CommonFunc';

function HeaderInputModal(props) {
    jsPDF.API.closePopup = function (props) {
        props.exportPopupReset();

    }
    const exportButtonHandler = () => {
        props.exportInProgressPopupShow()
        setTimeout(() => { props.exportReadyPopupShow() }, 2000)
    }
    // useEffect(() => {
    //     if (props.userSessionData.exportInProgressShow||props.userSessionData.exportReadyShow) {
    //         document.body.style.overflowY = "hidden";
    //     } else {
    //         document.body.style.overflowY = "auto";
    //     }
    // })
    // for to myestimates
    const isFromEstimateDashboard = () => {
        let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData)
        if (props.userestimateState !== undefined) {
            return props.userestimateState.ownerEmail === userData.email
        }
        return false;
    }
    // for to be reviewdtab
    const isFromReviewDashboard = () => {
        let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData)
        if (props.userestimateState !== undefined) {
            return props.userestimateState.reviewerEmail === userData.email
        }
        return false;
    }

    // all status checking
    const isNew = () => {
        return "New" === props.userestimateState.state;
    }
    const isReWork = () => {
        return "Rework" === props.userestimateState.state;
    }
    const isInReview = () => {
        return "InReview" === props.userestimateState.state;
    }
    const isInApproved = () => {
        return "Approved" === props.userestimateState.state;
    }
    //Close the Modal 
    //const [open, setOpen] = useState(false);
    const ExportModelString = () => {
        if (isFromEstimateDashboard() || isFromReviewDashboard()) {
            if (isNew() || isInReview()) {
                if (props.title === "input") {
                } else {
                    return (<Button kind="tertiary" disabled={!props.userinputStatusData.Export} onClick={() => {
                        exportButtonHandler()
                    }}>{englishValue('Export')}</Button>)
                }
            } else if (isReWork() || isInApproved()) {
                if (props.title === "input") {
                } else {
                    return (<Button kind="tertiary" disabled={!props.userinputStatusData.Export} onClick={() => {
                        exportButtonHandler()
                    }}>{englishValue('Export')}</Button>)
                }
            }
        }
    }
// popup show whn we clicked on the export button for exporting PDf
    let getExportInProgressPopup = () => {

        if (props.userSessionData.exportInProgressShow)
            return (
                <div class="bx--loading-overlay">
                    <Modal passiveModal open className="exportInProgress"
                        modalHeading="Estimate Export in progress"
                        title="Estimate Export in progress"
                        caption=""
                        lowContrast={true}
                    ><p>The estimate is being exported. It can be downloaded once done.</p>
                    </Modal>
                </div>
            )
    }
    // setting up all the export pages in to a container and makking thoe into html pages as images and inserting those into pdf by giving PDF width and hight of the images
    let handlePdfMultiplePages = () => {
        var container = document.getElementById("export");
        var HTML_Width = parseInt(container.offsetWidth);
        var HTML_Height = parseInt(container.offsetHeight);;
        var top_left_margin = 15;
        var PDF_Width = HTML_Width + (top_left_margin * 2);
        var PDF_Height = 900;
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;
        var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
        var fileName = "est_" + props.estimate.estimationTitle + "_" + props.estimate.clientName
        html2canvas(container, { allowTaint: true })
            .then(function (canvas) {
                
                canvas.getContext('2d');
                var imgData = canvas.toDataURL("image/jpeg", 1.0);
                var imgData = canvas.toDataURL("image/jpeg", 1.0);
                var pdf = new jsPDF('portrait', 'px', [PDF_Width, PDF_Height]);
                pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
                for (var i = 1; i <= totalPDFPages; i++) {
                    pdf.addPage();
                    pdf.addImage(imgData, 'JPG', top_left_margin, (-(PDF_Height * i) + (top_left_margin * 4)), canvas_image_width, canvas_image_height);
                }
                pdf.save(fileName);
                pdf.closePopup(props);
                props.hideScreenLoader();
            });
    }
    const getExportString = () => {
          // For export  added condition  exportInProgressShow and exportReadyShow  to prevent rerendering of export and increasing the performance
          //JIRA 609
        if ((props.userSessionData.exportInProgressShow || props.userSessionData.exportReadyShow) && props.estimate) {
            return (<div><Modal
                open={props.userSessionData.exportReadyShow} modalHeading='Export is Ready' modalLabel=''
                preventCloseOnClickOutside={true}
                secondaryButtonText="Cancel"
                primaryButtonText="Download PDF"
                onSecondarySubmit={() => {
                    props.exportPopupReset();
                }}
                onRequestSubmit={() => {
                    props.exportPopupReset();
                    props.showScreenLoader()
                    handlePdfMultiplePages()
                }}
                onRequestClose={() => {
                    props.exportPopupReset();
                }}
                onClose={() => {
                    props.exportPopupReset();
                }}

            >

                <div id="exportPdfContainer"  >
                    <Export {...props}   />
                </div>
            </Modal>

                {getExportInProgressPopup()}
                {ExportModelString()}
            </div>
            )
        }
        else {
          //For export  added condition props.estimate for else condition for approve and rework
          //JIRA 609
            if(props.estimate){
                if (isFromEstimateDashboard() || isFromReviewDashboard()) {
                    if (isNew() || isInReview()) {
                        if (props.title === "input") {
                        } else {
                            return (<Button kind="tertiary" disabled={!props.userinputStatusData.Export} onClick={() => {
                                exportButtonHandler()
                            }}>{englishValue('Export')}</Button>)
                        }
                    } else if (isReWork() || isInApproved()) {
                        if (props.title === "input") {
                        } else {
                            return (<Button kind="tertiary" disabled={!props.userinputStatusData.Export} onClick={() => {
                                exportButtonHandler()
                            }}>{englishValue('Export')}</Button>)
                        }
                    }
                }
            }else{
                return (<div>
                    {props.title === "input" ? <></> : <><Button kind="tertiary" disabled>{englishValue('Export')}</Button></>}
                </div>)
            }
          
        }

    }

    return (
        <div className='ModalStyle headerInputModal'>
            {getExportString()}
        </div>
    );

}



export default HeaderInputModal;
