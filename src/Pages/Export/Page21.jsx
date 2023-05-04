import React from 'react';
class Page21 extends React.Component {


    render() {

        let estimate = this.props.estimate;

        return (<div id="page18" className="page">
            {/* page21 AUTOMATION */}

            <table>

                <tr><td><span className="heading2">{this.props.englishValue("AUTOMATION")}</span></td></tr>

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
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("ARC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("OTC")}</td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("ARC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("OTC")}</td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("ARC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader ">{this.props.englishValue("OTC")}</td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("ARC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("OTC")}</td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("ARC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("OTC")}</td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass">{this.props.englishValue("ARC")}  </td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass"></td>
                    <td className="aligncontents borderbottomClass otherHeader BorderClass"></td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("OTC")}</td>
                    <td className="aligncontents borderbottomClass otherHeader">{this.props.englishValue("ARC")}  </td>


                </tr>


                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("numberOfUCsFromAutomationEstimationTool")}</td>
                    <td colSpan={4} className="aligncontents  BorderClass">{estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.numberOfUCsFromAutomationEstimationTool.simple}  </td>
                    <td colSpan={4} className="aligncontents  BorderClass">{estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.numberOfUCsFromAutomationEstimationTool.medium}  </td>
                    <td colSpan={4} className="aligncontents  BorderClass">{estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.numberOfUCsFromAutomationEstimationTool.complex}  </td>
                    <td colSpan={2} className="aligncontents  BorderClass">{estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.numberOfUCsFromAutomationEstimationTool.total}  </td>

                    <td></td>
                    <td></td>

                </tr>

                <tr className="borderBottom1px ">
                    <td className="BorderClass">{this.props.englishValue("costRpaAoccLicense")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.totalOfHighRangeInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.averageOfOneTimeCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costRpaAoccLicense.averageOfAnnualRecurringCostInUSD)}</td>

                </tr>
                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("costCognitiveAgentAssist")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costCognitiveAgentAssist.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costCognitiveAgentAssist.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costCognitiveAgentAssist.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costCognitiveAgentAssist.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costCognitiveAgentAssist.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costCognitiveAgentAssist.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costCognitiveAgentAssist.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costCognitiveAgentAssist.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costCognitiveAgentAssist.averageOfAnnualRecurringCostInUSD)}</td>


                </tr>


                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("costECATools")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costECATools.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costECATools.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costECATools.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costECATools.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costECATools.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costECATools.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costECATools.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costECATools.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costECATools.averageOfAnnualRecurringCostInUSD)}</td>


                </tr>
                <tr className="borderBottom1px ">
                    <td className="BorderClass">{this.props.englishValue("costDigitalPMO")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.totalOfHighRangeInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.averageOfOneTimeCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalPMO.averageOfAnnualRecurringCostInUSD)}</td>

                </tr>
                <tr className="borderBottom1px ">
                    <td className="BorderClass">{this.props.englishValue("costDigitalQA")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.totalOfHighRangeInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.averageOfOneTimeCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalQA.averageOfAnnualRecurringCostInUSD)}</td>

                </tr>
                <tr className="borderBottom1px ">
                    <td className="BorderClass">{this.props.englishValue("costDigitalTicketManager")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.totalOfHighRangeInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.averageOfOneTimeCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalTicketManager.averageOfAnnualRecurringCostInUSD)}</td>

                </tr>
                <tr className="borderBottom1px ">
                    <td className="BorderClass">{this.props.englishValue("costDigitalJobMonitor")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.totalOfHighRangeInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.averageOfOneTimeCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costDigitalJobMonitor.averageOfAnnualRecurringCostInUSD)}</td>

                </tr>

                <tr className="borderBottom1px ">
                    <td className="BorderClass">{this.props.englishValue("costSubTotal")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costSubTotal.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("annualRecurringCostForY1")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.annualRecurringCostForY1.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.annualRecurringCostForY1.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.annualRecurringCostForY1.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.annualRecurringCostForY1.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.annualRecurringCostForY1.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.annualRecurringCostForY1.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                </tr>

                <tr className="borderBottom1px tableBold">
                    <td className="BorderClass">{this.props.englishValue("costsForY1")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.costsForY1.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="borderBottom1px ">
                    <td className="BorderClass">{this.props.englishValue("perApplicationCostPerYear")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerYear.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="borderBottom1px ">
                    <td className="BorderClass">{this.props.englishValue("perApplicationCostPerMonth")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.automationCost.perApplicationCostPerMonth.totalOfHighRangeInUSD)}</td>
                    <td></td>
                    <td></td>
                </tr>

            </table>

        </div>);
    }
}
export default Page21