import React from 'react';
class Page22 extends React.Component {


    render() {

        let estimate = this.props.estimate;

        return (<div id="page18" className="page">
            {/* page22 TESTING (Used if test FTE >=5) */}


            <table>

                <tr><td><span className="heading2">{this.props.englishValue("TESTING")}</span></td></tr>

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




                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("igniteSetupCost")}</td>


                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteSetupCost.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteSetupCost.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteSetupCost.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteSetupCost.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteSetupCost.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteSetupCost.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteSetupCost.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteSetupCost.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td></td>

                </tr>


                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("igniteMaintenanceCost")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteMaintenanceCost.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteMaintenanceCost.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteMaintenanceCost.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteMaintenanceCost.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteMaintenanceCost.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteMaintenanceCost.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteMaintenanceCost.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteMaintenanceCost.totalOfHighRangeInUSD)}</td>

                    <td></td>
                    <td></td>

                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("igniteLicenseCost")}</td>


                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteLicenseCost.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteLicenseCost.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteLicenseCost.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteLicenseCost.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteLicenseCost.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteLicenseCost.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteLicenseCost.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.igniteLicenseCost.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td></td>

                </tr>


                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("monthlyRecurringCostForY1")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.monthlyRecurringCostForY1.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.monthlyRecurringCostForY1.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.monthlyRecurringCostForY1.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.monthlyRecurringCostForY1.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.monthlyRecurringCostForY1.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.monthlyRecurringCostForY1.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.monthlyRecurringCostForY1.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.monthlyRecurringCostForY1.totalOfHighRangeInUSD)}</td>

                    <td></td>
                    <td></td>

                </tr>


                <tr className="borderBottom1px tableBold">
                    <td className="BorderClass">{this.props.englishValue("costsForY1")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.totalOfHighRangeInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.averageOfOneTimeCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.costsForY1.averageOfMonthlyRecurringCostInUSD)}</td>

                </tr>
                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("perApplicationCostPerYear")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerYear.totalOfHighRangeInUSD)}</td>
                    <td ></td>
                    <td ></td>
                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("perApplicationCostPerMonth")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.testingCost.perApplicationCostPerMonth.totalOfHighRangeInUSD)}</td>
                    <td ></td>
                    <td ></td>

                </tr>

            </table>

        </div>);
    }
}
export default Page22