import React from 'react';
class Page20 extends React.Component {


    render() {

        let estimate = this.props.estimate;

        return (<div id="page18" className="page">

            <table>

                <tr><td><span className="heading1">{this.props.englishValue("Usedsecuritysonly")}</span></td></tr>
                <tr><td><span className="heading2">{this.props.englishValue("coreApplicationSupportCost")}</span></td></tr>

            </table>
            {/* Page20   Details of cost for each component of the integrated offering
              CORE APPLICATION SUPPORT */}

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
                    <td className="BorderClass">{this.props.englishValue("rangeFTEs")}</td>
                    <td></td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.rangeFTEs.simple.lowRange.fteMRC)}</td>
                    <td></td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.rangeFTEs.simple.highRange.fteMRC)}</td>

                    <td></td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.rangeFTEs.medium.lowRange.fteMRC)}</td>
                    <td></td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.rangeFTEs.medium.highRange.fteMRC)}</td>

                    <td></td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.rangeFTEs.complex.lowRange.fteMRC)}</td>
                    <td></td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.rangeFTEs.complex.highRange.fteMRC)}</td>

                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.rangeFTEs.totalOfLowRange)}</td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.rangeFTEs.totalOfHighRange)}</td>
                    <td></td>
                    <td></td>

                </tr>
                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("bandMix")}</td>
                    <td></td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.bandMix.simple.lowRange.bandMixMRC)}</td>
                    <td></td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.bandMix.simple.highRange.bandMixMRC)}</td>

                    <td></td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.bandMix.medium.lowRange.bandMixMRC)}</td>
                    <td></td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.bandMix.medium.highRange.bandMixMRC)}</td>

                    <td></td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.bandMix.complex.lowRange.bandMixMRC)}</td>
                    <td></td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.bandMix.complex.highRange.bandMixMRC)}</td>

                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.bandMix.totalOfLowRange)}</td>
                    <td className="BorderClass">{(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.bandMix.totalOfHighRange)}</td>
                    <td></td>
                    <td></td>

                </tr>


                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("costPerHour")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costPerHour.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costPerHour.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costPerHour.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costPerHour.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costPerHour.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costPerHour.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass"></td>
                    <td className="BorderClass"></td>
                    <td></td>
                    <td></td>

                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("labourCostPerMonthPerMRC")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerMonthPerMRC.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerMonthPerMRC.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerMonthPerMRC.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerMonthPerMRC.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerMonthPerMRC.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerMonthPerMRC.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass"></td>
                    <td className="BorderClass"></td>
                    <td></td>
                    <td></td>

                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("labourCostPerSteadyStateInY1")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerSteadyStateInY1.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerSteadyStateInY1.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerSteadyStateInY1.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerSteadyStateInY1.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerSteadyStateInY1.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerSteadyStateInY1.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerSteadyStateInY1.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.labourCostPerSteadyStateInY1.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td></td>

                </tr>

                <tr className="borderBottom1px RowColor">
                    <td className="BorderClass">{this.props.englishValue("transitionNonLabourCosts")}</td>


                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionNonLabourCosts.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionNonLabourCosts.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionNonLabourCosts.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionNonLabourCosts.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionNonLabourCosts.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionNonLabourCosts.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionNonLabourCosts.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionNonLabourCosts.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td></td>

                </tr>

                <tr className="borderBottom1px RowColor">
                    <td className="BorderClass">{this.props.englishValue("transitionLabourCosts")}</td>


                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionLabourCosts.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionLabourCosts.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionLabourCosts.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionLabourCosts.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionLabourCosts.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionLabourCosts.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionLabourCosts.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.transitionLabourCosts.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td></td>

                </tr>

                <tr className="borderBottom1px RowColor">
                    <td className="BorderClass">{this.props.englishValue("nonLabourCosts")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.nonLabourCosts.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.nonLabourCosts.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.nonLabourCosts.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.nonLabourCosts.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.nonLabourCosts.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.nonLabourCosts.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.nonLabourCosts.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.nonLabourCosts.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td></td>

                </tr>


                <tr className="borderBottom1px tableBold">
                    <td className="BorderClass">{this.props.englishValue("subTotalCostsY1")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.totalOfHighRangeInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.averageOfOneTimeCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.subTotalCostsY1.averageOfMonthlyRecurringCostInUSD)}</td>

                </tr>

                <tr className="borderBottom1px RowColor">
                    <td className="BorderClass">{this.props.englishValue("costProductivityFPL")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityFPL.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityFPL.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityFPL.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityFPL.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityFPL.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityFPL.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityFPL.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityFPL.totalOfHighRangeInUSD)}</td>

                    <td></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityFPL.averageOfMonthlyRecurringCostInUSD)}</td>

                </tr>

                <tr className="borderBottom1px RowColor">
                    <td className="BorderClass">{this.props.englishValue("costProductivityAQL")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAQL.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAQL.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAQL.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAQL.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAQL.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAQL.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAQL.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAQL.totalOfHighRangeInUSD)}</td>

                    <td></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAQL.averageOfMonthlyRecurringCostInUSD)}</td>

                </tr>
                <tr className="borderBottom1px RowColor">
                    <td className="BorderClass">{this.props.englishValue("costProductivityAgileCoach")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAgileCoach.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAgileCoach.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAgileCoach.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAgileCoach.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAgileCoach.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAgileCoach.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAgileCoach.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAgileCoach.totalOfHighRangeInUSD)}</td>

                    <td></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.costProductivityAgileCoach.averageOfMonthlyRecurringCostInUSD)}</td>

                </tr>


                <tr className="borderBottom1px tableBold">
                    <td className="BorderClass">{this.props.englishValue("totalCostsY1")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.totalCostsY1.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td></td>

                </tr>

                <tr className="borderBottom1px ">
                    <td className="BorderClass">{this.props.englishValue("perApplicationCostPerYear")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerYear.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td></td>

                </tr>

                <tr className="borderBottom1px ">
                    <td className="BorderClass">{this.props.englishValue("perApplicationCostPerMonth")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.simple.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.simple.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.medium.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.medium.highRange.monthlyRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.complex.lowRange.monthlyRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.complex.highRange.monthlyRecurringCostInUSD)}</td>

                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.coreApplicationSupportCost.perApplicationCostPerMonth.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td></td>

                </tr>

            </table>

        </div>);
    }
}
export default Page20