import React from 'react';
class Page18 extends React.Component {


    
    render() {

        let estimate = this.props.estimate;

        return (<div id="page18A" className="page">
            {/* page18 Year 1 ROM Cost
        Total Costs for All Applications */}

            <table>

                <tr><td><span className="heading2">{this.props.englishValue("YearROMCost")}</span></td></tr>
                <tr><td><span className="heading1">{this.props.englishValue("descriptotalCost")}</span></td></tr>
                <tr><td><span className="heading2">{this.props.englishValue("totalCostsForAllApplicationsForY1")}</span></td></tr>

            </table>
            <table>
                <tr className="trHeader">
                    <td className="aligncontents borderbottomClass BorderClass otherHeader ">{this.props.englishValue("ApplicationComplexity")}</td>
                    <td colSpan={4} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Simple")}  </td>
                    <td colSpan={4} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Moderate")}  </td>
                    <td colSpan={4} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Complex")}  </td>
                    <td colSpan={2} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("TOTALS")}  </td>
                    <td colSpan={2} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Average")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("Dist")}  </td>

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
                    <td className="aligncontents borderbottomClass BorderClass midHeader"></td>
                    <td className="aligncontents borderbottomClass midHeader ">{this.props.englishValue("HIGH")}  </td>

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
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("MRC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader"></td>

                </tr>


                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("coreApplicationSupportCost")}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.simple.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.simple.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.medium.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.medium.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.complex.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.totalOfHighRangeInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.averageOfOneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.averageRecurringCostInUSD)}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.coreApplicationSupportCostTotal.distributionHighPercentage)}</td>
                </tr>
                {estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal ?
                    <tr className="borderBottom1px">
                        <td className="BorderClass">{this.props.englishValue("appOpsCostTotal")}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.simple.lowRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.simple.lowRange.recurringCostInUSD)}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.simple.highRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.simple.highRange.recurringCostInUSD)}</td>

                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.medium.lowRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.medium.lowRange.recurringCostInUSD)}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.medium.highRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.medium.highRange.recurringCostInUSD)}</td>

                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.complex.lowRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.complex.lowRange.recurringCostInUSD)}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.complex.highRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.complex.highRange.recurringCostInUSD)}</td>

                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.totalOfLowRangeInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.totalOfHighRangeInUSD)}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.averageOfOneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.averageRecurringCostInUSD)}</td>

                        <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.appOpsCostTotal.distributionHighPercentage)}</td>
                    </tr>
                    : ''}

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("automationCost")}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.simple.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.simple.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.medium.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.medium.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.complex.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.totalOfHighRangeInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.averageOfOneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.averageRecurringCostInUSD)}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.automationCostTotal.distributionHighPercentage)}</td>
                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("testingCost")}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.simple.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.simple.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.medium.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.medium.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.complex.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.totalOfHighRangeInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.averageOfOneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.averageRecurringCostInUSD)}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.testingCostTotal.distributionHighPercentage)}</td>
                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("securityCost")}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.simple.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.simple.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.medium.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.medium.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.complex.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.totalOfHighRangeInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.averageOfOneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.averageRecurringCostInUSD)}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.securityCostTotal.distributionHighPercentage)}</td>
                </tr>
                <tr className="borderBottom1px">
                    <td className="BorderClass tableBold">{this.props.englishValue("totalCostMonthly")}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.simple.lowRange.recurringCostInUSD)}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.simple.highRange.recurringCostInUSD)}</td>

                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.medium.lowRange.recurringCostInUSD)}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.medium.highRange.recurringCostInUSD)}</td>

                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.complex.lowRange.recurringCostInUSD)}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.totalOfHighRangeInUSD)}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.averageOfOneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.averageRecurringCostInUSD)}</td>

                    <td className="tableBold">{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.totalCostsForAllApplicationsForY1.totalCostTotal.distributionHighPercentage)}</td>
                </tr>

            </table>


            {/* /////////Rom cosst 2nd table////////////// */}
            {/* Page18  Cost per Application Category (Year 1) */}


            <table>


                <tr><td><span className="heading2">{this.props.englishValue("costPerApplicationCategoryYearlyForY1")}</span></td></tr>

            </table>
            <table>
                <tr className="trHeader">
                    <td className="aligncontents borderbottomClass BorderClass otherHeader ">{this.props.englishValue("ApplicationComplexity")}</td>
                    <td colSpan={4} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Simple")}  </td>
                    <td colSpan={4} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Moderate")}  </td>
                    <td colSpan={4} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Complex")}  </td>
                    <td colSpan={2} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("TOTALS")}  </td>
                    <td colSpan={2} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Average")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("Dist")}  </td>

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
                    <td className="aligncontents borderbottomClass BorderClass midHeader"></td>
                    <td className="aligncontents borderbottomClass midHeader ">{this.props.englishValue("HIGH")}  </td>

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
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("MRC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader"></td>

                </tr>


                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("coreApplicationSupportCost")}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.simple.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.simple.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.medium.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.medium.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.complex.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.averageOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.averageOfHighRangeInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.avgOfAvgOfLowAndHighRangesInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.avgOfAvgOfLowAndHighRangesAndAvgOfHighRangeInUSD)}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.coreApplicationSupportCostYearly.distributionHighPercentage)}</td>
                </tr>
                {estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly ?
                    <tr className="borderBottom1px">
                        <td className="BorderClass">{this.props.englishValue("appOpsCostYearly")}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.simple.lowRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.simple.lowRange.recurringCostInUSD)}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.simple.highRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.simple.highRange.recurringCostInUSD)}</td>

                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.medium.lowRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.medium.lowRange.recurringCostInUSD)}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.medium.highRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.medium.highRange.recurringCostInUSD)}</td>

                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.complex.lowRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.complex.lowRange.recurringCostInUSD)}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.complex.highRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.complex.highRange.recurringCostInUSD)}</td>

                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.averageOfLowRangeInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.averageOfHighRangeInUSD)}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.avgOfAvgOfLowAndHighRangesInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.avgOfAvgOfLowAndHighRangesAndAvgOfHighRangeInUSD)}</td>

                        <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.appOpsCostYearly.distributionHighPercentage)}</td>
                    </tr>
                    : ''}
                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("automationCost")}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.simple.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.simple.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.medium.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.medium.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.complex.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.averageOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.averageOfHighRangeInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.avgOfAvgOfLowAndHighRangesInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.avgOfAvgOfLowAndHighRangesAndAvgOfHighRangeInUSD)}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.automationCostYearly.distributionHighPercentage)}</td>
                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("testingCost")}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.simple.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.simple.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.medium.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.medium.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.complex.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.averageOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.averageOfHighRangeInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.avgOfAvgOfLowAndHighRangesInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.avgOfAvgOfLowAndHighRangesAndAvgOfHighRangeInUSD)}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.testingCostYearly.distributionHighPercentage)}</td>
                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("securityCost")}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.simple.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.simple.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.medium.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.medium.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.complex.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.averageOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.averageOfHighRangeInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.avgOfAvgOfLowAndHighRangesInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.avgOfAvgOfLowAndHighRangesAndAvgOfHighRangeInUSD)}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.securityCostYearly.distributionHighPercentage)}</td>
                </tr>
                <tr className="borderBottom1px">
                    <td className="BorderClass tableBold">{this.props.englishValue("totalCostMonthly")}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.simple.lowRange.recurringCostInUSD)}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.simple.highRange.recurringCostInUSD)}</td>

                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.medium.lowRange.recurringCostInUSD)}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.medium.highRange.recurringCostInUSD)}</td>

                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.complex.lowRange.recurringCostInUSD)}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.averageOfLowRangeInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.averageOfHighRangeInUSD)}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.avgOfAvgOfLowAndHighRangesInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.avgOfAvgOfLowAndHighRangesAndAvgOfHighRangeInUSD)}</td>

                    <td className="tableBold">{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryYearlyForY1.totalCostYearly.distributionHighPercentage)}</td>
                </tr>

            </table>






        </div>);
    }
}
export default Page18