import React, { useState,useEffect } from 'react';
import { Modal } from 'carbon-components-react';
import { Button } from 'carbon-components-react';
import { englishValue } from '../../Utils/CommonFunc';
import jsPDF from 'jspdf';


function MigrationPDFApprovedModal(props) {
 
  jsPDF.API.closePopup = function (props) {
    props.exportPopupReset();

}
const [open, setOpen] = useState(true);

  const getExportString = () => {
    // For export  added condition  exportInProgressShow and exportReadyShow  to prevent rerendering of export and increasing the performance
    //JIRA 609
  // if ((props.userSessionData.exportInProgressShow || props.userSessionData.exportReadyShow) && props.estimate) 
      return (<div><Modal
          open={open} modalHeading='Export is Ready' modalLabel=''
          preventCloseOnClickOutside={true}
          secondaryButtonText="Cancel"
          primaryButtonText="Download PDF"
          onSecondarySubmit={() => {
              props.exportPopupReset();
          }}
          onRequestSubmit={() => {
              props.exportPopupReset();
              props.showScreenLoader()
              // handlePdfMultiplePages()
          }}
          onRequestClose={() => {
              props.exportPopupReset();
          }}
          onClose={() => {
              props.exportPopupReset();
          }}

      >

          {/* <div id="exportPdfContainer"  >
              <Export {...props} />
          </div> */}
      </Modal>

         
      </div>
      )
  
 

}




  return (
   <>
{ getExportString()}
     
</>

  )

}

export default MigrationPDFApprovedModal