import React from 'react';
import * as html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


class PageHeader extends React.Component {
  
    render() {

        let estimate = this.props.estimate;
return (<table className="hide"><tr><td>Opportunity Inputs</td><td style={{float:"right"}}>{estimate.estimationTitle}</td></tr>
        <tr><td colSpan="2"><hr/></td></tr>
        </table>
        );
    }
}
export default PageHeader;