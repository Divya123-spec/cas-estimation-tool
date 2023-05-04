import React from 'react';
import PageHeader from './PageHeader';

class Page12 extends React.Component {
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

            {/* //ProductivityInput table */}
            <table>
                <br />
                <br />
                <br />
                <tr><td><span className="heading allcaps">{this.props.englishValue("_PDF-ProductivityInput")

                }</span></td></tr>
            </table>
            <table>
                <tr className="heading">
                    <td >{this.props.englishValue("Y1ProductivityPercentage")}</td>
                    <td className="aligncontents3">{this.props.getPdfPercentPrintValue(estimate.userInputs.productivity.productivityPercentagePlannedForUseOfY1)}</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table>
                <tr className="heading5">
                    <td>*Changing Client Maturity and Applicability will affect the final productivity.
                        Sub-Productivity Lever with non-default values will be highlighted.</td>
                </tr>
            </table>
            {/* ProduvtivityInput DevsecopsTable */}
            <table>
                <tr><td><span className="heading allcaps">{
                    this.props.getStatusIconForSections(estimate.userInputs.productivity.devSecOps.uiStatus, this.props.englishValue("DevSecOps"))

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

                {estimate.userInputs.productivity.devSecOps.devSecOpsLevers.map((rowElement, index) => {
                    let cname = "borderBottom1px"
                    if (index + 1 === estimate.userInputs.productivity.devSecOps.devSecOpsLevers.length)
                        cname = ""
                    if (rowElement.code !== 'devSecOps_111140') {
                        return (<tr className={cname} >
                            <td className="borderBottom1px tdHeaderNew">{this.props.getOrangeOrGreenTickWithMessage2(rowElement.uiStatus)}</td>
                            <td className="borderBottom1px" >{rowElement.productivityLever}</td>
                            <td className="borderBottom1px allcaps2">{this.dropDownValueHandle1(rowElement.code, rowElement.clientMaturityLevelSelectionKey,'devSecOpsLevers')}</td>
                            <td className="borderBottom1px" >{getYesorNo(rowElement.isScopeApplicable)}</td>
                            <td className="borderBottom1px" >{this.props.getPdfPercentPrintValue(rowElement.appScopeCoveredPercentage)}</td>
                            <td className="borderBottom1px" >{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y1)}</td>
                            <td className="borderBottom1px" >{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y2)}</td>
                            <td className="borderBottom1px" >{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y3)}</td>
                            <td className="borderBottom1px" >{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y4)}</td>
                            <td className="borderBottom1px" >{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y5)}</td>
                            <td className="borderBottom1px" >{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y6)}</td>
                            <td className="borderBottom1px" >{this.props.getPdfPercentPrintValue(rowElement.finalProductivityPercentageByApplicability.y7)}</td>
                            <td className="borderBottom1px" >{getYorN(rowElement.applicabilityScope.l1)}</td>
                            <td className="borderBottom1px" >{getYorN(rowElement.applicabilityScope.l2)}</td>
                            <td className="borderBottom1px" >{getYorN(rowElement.applicabilityScope.l3)}</td>
                            <td className="borderBottom1px" >{getYorN(rowElement.applicabilityScope.l4)}</td>
                            <td className="borderBottom1px" >{getYorN(rowElement.applicabilityScope.min_enh)}</td>
                            <td className="borderBottom1px" >{getYorN(rowElement.applicabilityScope.testing)}</td>

                        </tr>)
                    }
                })

                }
            </table>


        </div >);
    }
}
export default Page12