import React from 'react';
import { englishValue } from '../../Utils/CommonFunc';
class Page24 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const arrCoversionOrder = (originalArr, orderArr) => {
            let newOrderedArr = [];
            orderArr.forEach((ele) => {
                originalArr.forEach((e) => {
                    if (ele == e[0]) {
                        newOrderedArr.push(e)
                    }
                })
            })
            return newOrderedArr;
        }
        {/* Jira- 711--UI Task- AIOPS UI update on PDF */ }

        let estimate = this.props.estimate;


        let ApplicationOperations = (this.props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.appOpsCost);

        let ApplicationOperationscost = Object.entries(ApplicationOperations);
        let ApplicationOperationscostdata = arrCoversionOrder((ApplicationOperationscost), [
            "costAIOpsObservability",
            "costAIOpsARM",
            "costSubTotal",
            "costAnnual",
            "totalCostsY1",
            "perApplicationCostPerYear",
            "perApplicationCostPerMonth"
        ]);


        return (<div id="page18" className="page">
            {/* page24 Application Operations */}
            <table>
                <tr><td><span className="heading2">{this.props.englishValue("ApplicationOperations")}</span></td></tr>
            </table>
            <table>
                <tr className="trHeader">
                    <td className="aligncontents borderbottomClass BorderClass otherHeader ">{this.props.englishValue("ApplicationComplexity")}</td>
                    <td colSpan={4} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Simple")}  </td>
                    <td colSpan={4} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Moderate")}  </td>
                    <td colSpan={4} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Complex")}  </td>
                    <td colSpan={2} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("TOTALS")}  </td>
                    <td colSpan={2} className="aligncontents borderbottomClass  otherHeader">{this.props.englishValue("Average")}  </td>


                </tr>
                <tr className="trHeader">
                    <td className="aligncontents borderbottomClass BorderClass midHeader">{this.props.englishValue("Range")}</td>
                    <td colSpan={2} className="aligncontents borderbottomClass BorderClass midHeader">{this.props.englishValue("RangeLow")}  </td>
                    <td colSpan={2} className="aligncontents borderbottomClass BorderClass midHeader">{this.props.englishValue("RangeHigh")}  </td>
                    <td colSpan={2} className="aligncontents borderbottomClass BorderClass midHeader">{this.props.englishValue("RangeLow")}  </td>
                    <td colSpan={2} className="aligncontents borderbottomClass BorderClass midHeader">{this.props.englishValue("RangeHigh")}  </td>
                    <td colSpan={2} className="aligncontents borderbottomClass BorderClass midHeader">{this.props.englishValue("RangeLow")}  </td>
                    <td colSpan={2} className="aligncontents borderbottomClass BorderClass midHeader">{this.props.englishValue("RangeHigh")}  </td>
                    <td className="aligncontents borderbottomClass BorderClass midHeader">{this.props.englishValue("LOW")}  </td>
                    <td className="aligncontents borderbottomClass BorderClass midHeader">{this.props.englishValue("HIGH")}  </td>
                    <td className="aligncontents borderbottomClass midHeader"></td>
                    <td className="aligncontents borderbottomClass  midHeader"></td>

                </tr>

                <tr className="trHeader">
                    <td className="aligncontents borderbottomClass otherHeader BorderClass"></td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("OTC")}</td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("MRC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("OTC")}</td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("MRC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("OTC")}</td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("MRC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader ">{this.props.englishValue("OTC")}</td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("MRC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("OTC")}</td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("MRC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("OTC")}</td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("MRC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass"></td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass"></td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("OTC")}</td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("MRC")}  </td>


                </tr>

                {ApplicationOperationscostdata.map((tds) => {
                    let cname = "borderBottom1px"
                    cname = ""

                    if (tds[0] === 'costSubTotal' || tds[0] === 'totalCostsY1') {
                        return (
                            <tr className={cname} >
                                <td className=" tableBold borderBottom1px  BorderClass2"  > {englishValue(tds[0])}</td>

                                <td className=" tableBold borderBottom1px" >{typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className=" tableBold borderBottom1px BorderClass">{typeof (tds[1].simple.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].simple.lowRange.monthlyRecurringCostInUSD)}` : ''}</td>
                                <td className=" tableBold borderBottom1px" >{typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className=" tableBold borderBottom1px BorderClass">{typeof (tds[1].simple.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].simple.highRange.monthlyRecurringCostInUSD)}` : ''}</td>

                                <td className=" tableBold borderBottom1px" >{typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className=" tableBold borderBottom1px BorderClass">{typeof (tds[1].medium.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].medium.lowRange.monthlyRecurringCostInUSD)}` : ''}</td>
                                <td className=" tableBold borderBottom1px" >{typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className=" tableBold borderBottom1px BorderClass">{typeof (tds[1].medium.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].medium.highRange.monthlyRecurringCostInUSD)}` : ''}</td>

                                <td className=" tableBold borderBottom1px" >{typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className=" tableBold borderBottom1px  BorderClass">{typeof (tds[1].complex.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].complex.lowRange.monthlyRecurringCostInUSD)}` : ''}</td>
                                <td className=" tableBold borderBottom1px" >{typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className=" tableBold borderBottom1px  BorderClass">{typeof (tds[1].complex.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].complex.highRange.monthlyRecurringCostInUSD)}` : ''}</td>


                                <td className=" tableBold borderBottom1px BorderClass" >{typeof (tds[1].totalOfLowRangeInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].totalOfLowRangeInUSD)}` : ''}</td>
                                <td className=" tableBold borderBottom1px BorderClass" >{typeof (tds[1].totalOfHighRangeInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].totalOfHighRangeInUSD)}` : ''}</td>
                                <td className=" tableBold borderBottom1px"  >{typeof (tds[1].averageOfOneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}` : ''}</td>
                                <td className=" tableBold borderBottom1px"  >{typeof (tds[1].averageOfMonthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].averageOfMonthlyRecurringCostInUSD)}` : ''}</td>

                            </tr>
                        )
                    }
                    if (tds[0] === 'perApplicationCostPerYear' || tds[0] === 'perApplicationCostPerMonth') {
                        return (
                            <tr className={cname} >
                                <td className=" BorderClass2"  > {englishValue(tds[0])}</td>

                                <td className=" borderBottom1px tableBold">{typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className=" borderBottom1px tableBold BorderClass">{typeof (tds[1].simple.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].simple.lowRange.monthlyRecurringCostInUSD)}` : ''}</td>
                                <td className=" borderBottom1px tableBold">{typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className=" borderBottom1px tableBold BorderClass">{typeof (tds[1].simple.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].simple.highRange.monthlyRecurringCostInUSD)}` : ''}</td>

                                <td className=" borderBottom1px tableBold">{typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className=" borderBottom1px tableBold BorderClass">{typeof (tds[1].medium.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].medium.lowRange.monthlyRecurringCostInUSD)}` : ''}</td>
                                <td className=" borderBottom1px tableBold">{typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className=" borderBottom1px tableBold BorderClass">{typeof (tds[1].medium.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].medium.highRange.monthlyRecurringCostInUSD)}` : ''}</td>

                                <td className=" borderBottom1px tableBold" >{typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className=" borderBottom1px tableBold BorderClass">{typeof (tds[1].complex.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].complex.lowRange.monthlyRecurringCostInUSD)}` : ''}</td>
                                <td className=" borderBottom1px tableBold">{typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className=" borderBottom1px tableBold BorderClass">{typeof (tds[1].complex.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].complex.highRange.monthlyRecurringCostInUSD)}` : ''}</td>


                                <td className=" borderBottom1px tableBold BorderClass" >{typeof (tds[1].totalOfLowRangeInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].totalOfLowRangeInUSD)}` : ''}</td>
                                <td className=" borderBottom1px tableBold BorderClass" >{typeof (tds[1].totalOfHighRangeInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].totalOfHighRangeInUSD)}` : ''}</td>
                                <td className=" borderBottom1px tableBold" >{typeof (tds[1].averageOfOneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}` : ''}</td>
                                <td className=" borderBottom1px tableBold" >{typeof (tds[1].averageOfMonthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].averageOfMonthlyRecurringCostInUSD)}` : ''}</td>

                            </tr>
                        )
                    }

                    else {
                        return (
                            <tr className={cname} >
                                <td className="borderBottom1px BorderClass2">{englishValue(tds[0])}</td>

                                <td className="borderBottom1px" >{typeof (tds[1].simple.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].simple.lowRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className="borderBottom1px BorderClass">{typeof (tds[1].simple.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].simple.lowRange.monthlyRecurringCostInUSD)}` : ''}</td>
                                <td className="borderBottom1px" >{typeof (tds[1].simple.highRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].simple.highRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className="borderBottom1px BorderClass">{typeof (tds[1].simple.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].simple.highRange.monthlyRecurringCostInUSD)}` : ''}</td>


                                <td className="borderBottom1px" >{typeof (tds[1].medium.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].medium.lowRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className="borderBottom1px BorderClass">{typeof (tds[1].medium.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].medium.lowRange.monthlyRecurringCostInUSD)}` : ''}</td>
                                <td className="borderBottom1px" >{typeof (tds[1].medium.highRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].medium.highRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className="borderBottom1px BorderClass">{typeof (tds[1].medium.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].medium.highRange.monthlyRecurringCostInUSD)}` : ''}</td>

                                <td className="borderBottom1px" >{typeof (tds[1].complex.lowRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].complex.lowRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className="borderBottom1px BorderClass">{typeof (tds[1].complex.lowRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].complex.lowRange.monthlyRecurringCostInUSD)}` : ''}</td>
                                <td className="borderBottom1px" >{typeof (tds[1].complex.highRange.oneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].complex.highRange.oneTimeCostInUSD)}` : ''}</td>
                                <td className="borderBottom1px BorderClass">{typeof (tds[1].complex.highRange.monthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].complex.highRange.monthlyRecurringCostInUSD)}` : ''}</td>


                                <td className="borderBottom1px BorderClass"  >{typeof (tds[1].totalOfLowRangeInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].totalOfLowRangeInUSD)}` : ''}</td>
                                <td className="borderBottom1px BorderClass" >{typeof (tds[1].totalOfHighRangeInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].totalOfHighRangeInUSD)}` : ''}</td>
                                <td className="borderBottom1px"  >{typeof (tds[1].averageOfOneTimeCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].averageOfOneTimeCostInUSD)}` : ''}</td>
                                <td className="borderBottom1px" >{typeof (tds[1].averageOfMonthlyRecurringCostInUSD) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].averageOfMonthlyRecurringCostInUSD)}` : ''}</td>

                            </tr>
                        )
                    }

                })

                }

            </table>

        </div>);
    }
}
export default Page24