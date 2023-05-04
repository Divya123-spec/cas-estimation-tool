import React from 'react';
import PageHeader from './PageHeader';

class Page12_A extends React.Component {
    constructor(props) {
        super(props)
    }
     dropDownValueHandle1 = (id, val,lever) => {
        let DropdownValue = '';
        this.props.userDropDownData.defaultDropDown['response'].productivity[lever].map((ele) => {
          if (ele.code == id) {
    
            return (ele.clientMaturityLevelOptions.map((item, index) => {
              if (val == item.key) {
                DropdownValue = item.value;
              }
            }));
          }
        }
        );
        return DropdownValue;
      }
    render() {
        let estimate = this.props.estimate;
        let getYorN = (value) => {
            return value ? "Y" : "N";
        }
        let getYesorNo = (value) => {
            return value ? "Yes" : "No";
        }

        return (<div id="page12A" className="page">
            <PageHeader {...this.props} />
            {/* //Automation// */}
{/* Start Automation Table */}
            <table>
                <tr><td><span className="heading allcaps">{
                    this.props.getStatusIconForSections(estimate.userInputs.productivity.automation.uiStatus, this.props.englishValue("automation"))

                }</span></td></tr>
            </table>
            <table>
                <tr className="trHeader">
                    <td></td>
                    <td>{this.props.englishValue("productivityLever")}</td>
                    <td >{this.props.englishValue("clientMaturity")}</td>
                    <td>{this.props.englishValue("Applicability")}</td>
                    <td>{this.props.englishValue("ApplicationScope")}</td>
                    <td colSpan="7" className="aligncontents">{this.props.englishValue("_PDF_FinalProductivity")}</td>
                    <td colSpan="6" className="aligncontents">{this.props.englishValue("_PDF_ScopeofApplicability")}</td>
                    {/* <td>{this.props.englishValue("Complexity Change")}</td> */}
                </tr>

                <tr className="trHeader">
                    <td colSpan="5"></td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y1")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y2")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y3")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y4")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y5")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y6")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y7")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L1.5")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L2")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L3")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L4")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Minor_Enh.")}</td>
                    <td className="aligncontents"> {this.props.englishValue("PC_Testing")}</td>

                </tr>

                {estimate.userInputs.productivity.automation.automationLevers.map((rowElement, index) => {
                    let cname = "borderBottom1px"
                    if (index + 1 === estimate.userInputs.productivity.automation.automationLevers.length)
                        cname = ""
                    return (<tr className={cname} >
                        <td className="borderBottom1px tdHeaderNew">{this.props.getOrangeOrGreenTickWithMessage2(rowElement.uiStatus)}</td>
                        <td className="borderBottom1px">{rowElement.productivityLever}</td>
                        <td className="borderBottom1px allcaps2">{this.dropDownValueHandle1(rowElement.code, rowElement.clientMaturityLevelSelectionKey,'automationLevers')}</td>
                        <td className="borderBottom1px">{getYesorNo(rowElement.isScopeApplicable)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.appScopeCoveredPercentage)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y1)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y2)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y3)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y4)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y5)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y6)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y7)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l1)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l2)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l3)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l4)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.min_enh)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.testing)}</td>

                    </tr>)
                })

                }
            </table>
{/* Automation Table  End*/}



            {/* Start//cloud// */}

            <table>
                <tr><td><span className="heading allcaps">{
                    this.props.getStatusIconForSections(estimate.userInputs.productivity.cloud.uiStatus, this.props.englishValue("cloud"))

                }</span></td></tr>
            </table>
            <table>

                <tr className="trHeader">
                    <td></td>
                    <td>{this.props.englishValue("productivityLever")}</td>
                    <td >{this.props.englishValue("clientMaturity")}</td>
                    <td>{this.props.englishValue("Applicability")}</td>
                    <td>{this.props.englishValue("ApplicationScope")}</td>
                    <td colSpan="7" className="aligncontents">{this.props.englishValue("_PDF_FinalProductivity")}</td>
                    <td colSpan="6" className="aligncontents">{this.props.englishValue("_PDF_ScopeofApplicability")}</td>
                    {/* <td>{this.props.englishValue("Complexity Change")}</td> */}
                </tr>

                <tr className="trHeader">
                    <td colSpan="5"></td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y1")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y2")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y3")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y4")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y5")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y6")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y7")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L1.5")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L2")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L3")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L4")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Minor_Enh.")}</td>
                    <td className="aligncontents"> {this.props.englishValue("PC_Testing")}</td>

                </tr>

                {estimate.userInputs.productivity.cloud.cloudLevers.map((rowElement, index) => {
                    let cname = "borderBottom1px"
                    if (index + 1 === estimate.userInputs.productivity.cloud.cloudLevers.length)
                        cname = ""
                    return (<tr className={cname} >
                        <td className="borderBottom1px tdHeaderNew">{this.props.getOrangeOrGreenTickWithMessage2(rowElement.uiStatus)}</td>
                        <td className="borderBottom1px">{rowElement.productivityLever}</td>
                        <td className="borderBottom1px allcaps2">{this.dropDownValueHandle1(rowElement.code, rowElement.clientMaturityLevelSelectionKey,'cloudLevers')}</td>
                        <td className="borderBottom1px">{getYesorNo(rowElement.isScopeApplicable)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.appScopeCoveredPercentage)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y1)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y2)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y3)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y4)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y5)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y6)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y7)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l1)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l2)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l3)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l4)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.min_enh)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.testing)}</td>

                    </tr>)
                })

                }
            </table>
            {/* //cloud// End*/}


            {/* Start//testing// */}

            <table>
                <tr><td><span className="heading allcaps">{
                    this.props.getStatusIconForSections(estimate.userInputs.productivity.testing.uiStatus, this.props.englishValue("testing"))

                }</span></td></tr>
            </table>
            <table>

                <tr className="trHeader">
                    <td></td>
                    <td>{this.props.englishValue("productivityLever")}</td>
                    <td>{this.props.englishValue("clientMaturity")}</td>
                    <td>{this.props.englishValue("Applicability")}</td>
                    <td>{this.props.englishValue("ApplicationScope")}</td>
                    <td colSpan="7" className="aligncontents">{this.props.englishValue("_PDF_FinalProductivity")}</td>
                    <td colSpan="6" className="aligncontents">{this.props.englishValue("_PDF_ScopeofApplicability")}</td>
                    {/* <td>{this.props.englishValue("Complexity Change")}</td> */}
                </tr>

                <tr className="trHeader">
                    <td colSpan="5"></td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y1")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y2")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y3")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y4")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y5")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y6")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y7")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L1.5")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L2")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L3")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L4")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Minor_Enh.")}</td>
                    <td className="aligncontents"> {this.props.englishValue("PC_Testing")}</td>

                </tr>

                {estimate.userInputs.productivity.testing.testingLevers.map((rowElement, index) => {
                    let cname = "borderBottom1px"
                    if (index + 1 === estimate.userInputs.productivity.testing.testingLevers.length)
                        cname = ""
                    return (<tr className={cname} >
                        <td className="borderBottom1px tdHeaderNew">{this.props.getOrangeOrGreenTickWithMessage2(rowElement.uiStatus)}</td>
                        <td className="borderBottom1px">{rowElement.productivityLever}</td>
                        <td className="borderBottom1px allcaps2">{this.dropDownValueHandle1(rowElement.code, rowElement.clientMaturityLevelSelectionKey,'testingLevers')}</td>
                        <td className="borderBottom1px">{getYesorNo(rowElement.isScopeApplicable)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.appScopeCoveredPercentage)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y1)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y2)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y3)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y4)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y5)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y6)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y7)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l1)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l2)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l3)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l4)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.min_enh)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.testing)}</td>

                    </tr>)
                })

                }
            </table>
                        {/* //testing// End */}


            {/* Start //efficiency// */}


            <table>
                <tr><td><span className="heading allcaps">{
                    this.props.getStatusIconForSections(estimate.userInputs.productivity.efficiency.uiStatus, this.props.englishValue("efficiency"))

                }</span></td></tr>
            </table>
            <table>

                <tr className="trHeader">
                    <td></td>
                    <td>{this.props.englishValue("productivityLever")}</td>
                    <td >{this.props.englishValue("clientMaturity")}</td>
                    <td>{this.props.englishValue("Applicability")}</td>
                    <td>{this.props.englishValue("ApplicationScope")}</td>
                    <td colSpan="7" className="aligncontents">{this.props.englishValue("_PDF_FinalProductivity")}</td>
                    <td colSpan="6" className="aligncontents">{this.props.englishValue("_PDF_ScopeofApplicability")}</td>
                    {/* <td>{this.props.englishValue("Complexity Change")}</td> */}
                </tr>

                <tr className="trHeader">
                    <td colSpan="5"></td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y1")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y2")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y3")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y4")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y5")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y6")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Y7")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L1.5")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L2")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L3")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_L4")}</td>
                    <td className="aligncontents">{this.props.englishValue("PC_Minor_Enh.")}</td>
                    <td className="aligncontents"> {this.props.englishValue("PC_Testing")}</td>

                </tr>

                {estimate.userInputs.productivity.efficiency.efficiencyLevers.map((rowElement, index) => {
                    let cname = "borderBottom1px"
                    if (index + 1 === estimate.userInputs.productivity.efficiency.efficiencyLevers.length)
                        cname = ""
                    return (<tr className={cname} >
                        <td className="borderBottom1px tdHeaderNew">{this.props.getOrangeOrGreenTickWithMessage2(rowElement.uiStatus)}</td>
                        <td className="borderBottom1px">{rowElement.productivityLever}</td>
                        <td className="borderBottom1px allcaps2">{this.dropDownValueHandle1(rowElement.code, rowElement.clientMaturityLevelSelectionKey,'efficiencyLevers')}</td>
                        <td className="borderBottom1px">{getYesorNo(rowElement.isScopeApplicable)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.appScopeCoveredPercentage)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y1)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y2)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y3)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y4)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y5)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y6)}</td>
                        <td className="borderBottom1px">{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y7)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l1)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l2)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l3)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.l4)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.min_enh)}</td>
                        <td className="borderBottom1px">{getYorN(rowElement.applicabilityScope.testing)}</td>

                    </tr>)
                })

                }
            </table>

            {/* Start //efficiency// */}


        </div >);
    }
}
export default Page12_A