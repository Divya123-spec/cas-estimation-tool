import React from 'react';
class Page19 extends React.Component {


    render() {

        let estimate = this.props.estimate;

        return (<div id="page18" className="page">

            <table>


                <tr><td><span className="heading2">{this.props.englishValue("costPerApplicationCategoryMonthlyForY1")}</span></td></tr>

            </table>
            {/* Page19   Cost per Application (Monthly for Year 1) */}

            <table>
                <tr className="trHeader">
                    <td className="aligncontents borderbottomClass BorderClass otherHeader ">{this.props.englishValue("ApplicationComplexity")}</td>
                    <td colSpan={4} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Simple")}  </td>
                    <td colSpan={4} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Moderate")}  </td>
                    <td colSpan={4} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("Complex")}  </td>
                    <td colSpan={2} className="aligncontents borderbottomClass BorderClass otherHeader">{this.props.englishValue("TOTALS")}  </td>
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
                    <td className="aligncontents borderbottomClass otherHeader"></td>

                </tr>


                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("coreApplicationSupportCost")}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.simple.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.simple.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.medium.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.medium.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.complex.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.totalOfHighRangeInUSD)}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.coreApplicationSupportCostMonthly.distributionHighPercentage)}</td>
                </tr>
                {estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly ?
                    <tr className="borderBottom1px">
                        <td className="BorderClass">{this.props.englishValue("appOpsCostMonthly")}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.simple.lowRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.simple.lowRange.recurringCostInUSD)}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.simple.highRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.simple.highRange.recurringCostInUSD)}</td>

                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.medium.lowRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.medium.lowRange.recurringCostInUSD)}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.medium.highRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.medium.highRange.recurringCostInUSD)}</td>

                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.complex.lowRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.complex.lowRange.recurringCostInUSD)}</td>
                        <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.complex.highRange.oneTimeCostInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.complex.highRange.recurringCostInUSD)}</td>

                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.totalOfLowRangeInUSD)}</td>
                        <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.totalOfHighRangeInUSD)}</td>

                        <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.appOpsCostMonthly.distributionHighPercentage)}</td>
                    </tr>
                    : ''
                }

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("automationCost")}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.simple.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.simple.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.medium.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.medium.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.complex.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.totalOfHighRangeInUSD)}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.automationCostMonthly.distributionHighPercentage)}</td>
                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("testingCost")}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.simple.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.simple.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.medium.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.medium.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.complex.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.totalOfHighRangeInUSD)}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.testingCostMonthly.distributionHighPercentage)}</td>
                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("securityCost")}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.simple.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.simple.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.medium.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.medium.highRange.recurringCostInUSD)}</td>

                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.complex.lowRange.recurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.totalOfHighRangeInUSD)}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.securityCostMonthly.distributionHighPercentage)}</td>
                </tr>
                <tr className="borderBottom1px">
                    <td className="BorderClass tableBold">{this.props.englishValue("totalCostMonthly")}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.simple.lowRange.recurringCostInUSD)}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.simple.highRange.recurringCostInUSD)}</td>

                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.medium.lowRange.recurringCostInUSD)}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.medium.highRange.recurringCostInUSD)}</td>

                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.complex.lowRange.recurringCostInUSD)}</td>
                    <td className="tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.complex.highRange.recurringCostInUSD)}</td>

                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.totalOfHighRangeInUSD)}</td>

                    <td className="tableBold">{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputYearOneROMCost.costSummary.costPerApplicationCategoryMonthlyForY1.totalCostMonthly.distributionHighPercentage)}</td>
                </tr>

            </table>







        </div>);
    }
}
export default Page19