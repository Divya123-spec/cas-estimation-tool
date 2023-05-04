import React, { useState, useEffect } from 'react';
import { Modal } from 'carbon-components-react';
import './../OpportunityInputsParameter/SaveModal.scss';
import { englishValue } from '../../Utils/CommonFunc';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Export from '../Export/Export';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/actions/ActionCreator';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
function mapStateToProps(state) {
    return {
        userDropDownData: state.userDropDown,
        userInpuData: state.userInputData,
        userOutputData: state.userOutputData,
        userSessionData: state.userSessionData,
    };
}
function MigrationPdf(props) {
    const [open, setOpen] = useState(true);
    const cancelHandler = () => {
        props.hideScreenPopupVersion();
    }
    const SectorIndustryHandler=()=>{
        let newArr=[];
        props?.userDropDownData?.defaultDropDown['response']['defaultDropdown']?.sector?.map(sectorObj=>{
           sectorObj.industry?.map(ele=>newArr.push(ele))
        })
        return newArr;
        
       }
// pdf container logic where the pages will arrange in a container and download will happen  
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
        var fileName = "est_" + props.userSessionData.savedEstimateData['response']['estimate'].estimationTitle + "_" + props.userSessionData.savedEstimateData['response']['estimate'].clientName
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
                props.hideScreenDashLoader();
            });
    }
    return (<div><Modal
        open={true} modalHeading='Export is Ready' modalLabel=''
        preventCloseOnClickOutside={true}
        secondaryButtonText="Cancel"
        primaryButtonText="Download PDF"
        onSecondarySubmit={() => {
            props.exportPopupReset();
            props.hideSendForPDFApprovalPopup();
        }}
        onRequestSubmit={() => {
            props.exportPopupReset();
           props.showScreenDashLoader(props.toggle);
            handlePdfMultiplePages();
            props.hideSendForPDFApprovalPopup();
        }}
        onRequestClose={() => {
            props.exportPopupReset();
            props.hideSendForPDFApprovalPopup();
        }}
        onClose={() => {
            props.hideSendForPDFApprovalPopup();
            props.exportPopupReset();
        }}

    >

        <div id="exportPdfContainer"  >
        {/* passing props to fetch the data from the export  */}
      
            <Export {...props} industry={SectorIndustryHandler()}
                salesStage={props.userDropDownData.defaultDropDown.response.defaultDropdown.salesStage}
                estimate={props.userSessionData.savedEstimateData['response']['estimate']} />
        </div>
    </Modal>


    </div>)
}
export default connect(mapStateToProps, mapDispatchToProps)(MigrationPdf);;