import React from 'react';
class Page23 extends React.Component {


    render() {

        let estimate = this.props.estimate;

        return (<div id="page18" className="page">
            {/* page23 Security (Used for On-Premises solutions only) */}

            <table>
                <tr><td><span className="heading2">{this.props.englishValue("SECURITY")}</span></td></tr>
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
                    <td className="BorderClass">{this.props.englishValue("penTestPriceAnnual")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.penTestPriceAnnual.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.penTestPriceAnnual.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.penTestPriceAnnual.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.penTestPriceAnnual.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.penTestPriceAnnual.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.penTestPriceAnnual.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.penTestPriceAnnual.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.penTestPriceAnnual.totalOfHighRangeInUSD)}</td>

                    <td></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.penTestPriceAnnual.averageOfAnnualRecurringCostInUSD)}</td>

                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("devOpsIntegrationPrice")}</td>


                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.devOpsIntegrationPrice.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.devOpsIntegrationPrice.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.devOpsIntegrationPrice.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.devOpsIntegrationPrice.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.devOpsIntegrationPrice.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.devOpsIntegrationPrice.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass"></td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.devOpsIntegrationPrice.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.devOpsIntegrationPrice.totalOfHighRangeInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.devOpsIntegrationPrice.averageOfOneTimeCostInUSD)}</td>
                    <td></td>

                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("vulnerabilityScanPrice")}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.vulnerabilityScanPrice.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.vulnerabilityScanPrice.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.vulnerabilityScanPrice.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.vulnerabilityScanPrice.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.vulnerabilityScanPrice.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td></td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.vulnerabilityScanPrice.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.vulnerabilityScanPrice.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.vulnerabilityScanPrice.totalOfHighRangeInUSD)}</td>

                    <td></td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.vulnerabilityScanPrice.averageOfAnnualRecurringCostInUSD)}</td>

                </tr>

                <tr className="borderBottom1px ">
                    <td className="BorderClass">{this.props.englishValue("consultingPrice")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.totalOfHighRangeInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.averageOfOneTimeCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.consultingPrice.averageOfAnnualRecurringCostInUSD)}</td>

                </tr>


                <tr className="borderBottom1px tableBold">
                    <td className="BorderClass">{this.props.englishValue("totalPriceY1")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.totalOfHighRangeInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.averageOfOneTimeCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.totalPriceY1.averageOfAnnualRecurringCostInUSD)}</td>

                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("perApplicationPricePerYear")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerYear.totalOfHighRangeInUSD)}</td>
                    <td ></td>
                    <td ></td>
                </tr>

                <tr className="borderBottom1px">
                    <td className="BorderClass">{this.props.englishValue("perApplicationPricePerMonth")}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.simple.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.simple.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.simple.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.simple.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.medium.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.medium.lowRange.annualRecurringCostInUSD)}</td>
                    <td>{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.medium.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.medium.highRange.annualRecurringCostInUSD)}</td>

                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.complex.lowRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.complex.lowRange.annualRecurringCostInUSD)}</td>
                    <td >{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.complex.highRange.oneTimeCostInUSD)}</td>
                    <td className="BorderClass">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.complex.highRange.annualRecurringCostInUSD)}</td>

                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.totalOfLowRangeInUSD)}</td>
                    <td className="BorderClass tableBold">{this.props.currencyCoverter(estimate.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.securityCost.perApplicationPricePerMonth.totalOfHighRangeInUSD)}</td>
                    <td ></td>
                    <td ></td>

                </tr>



            </table>

        </div>);
    }
}
export default Page23