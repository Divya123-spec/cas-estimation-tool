import React from 'react';
import { englishValue } from '../../Utils/CommonFunc';

class Page17 extends React.Component {


    render() {

        let estimate = this.props.estimate;

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

        let sevenYearProductivityCostOutput = (this.props.userOutputData.defaultOutputData.response.finalOutputs.outputEffort.sevenYearProductivityCostOutput)

        let sevenYearProductivity = Object.entries(sevenYearProductivityCostOutput);



        let SevenYearinfo;
        if (this.props.userOutputData.defaultOutputData.response.finalOutputs.outputEffort.sevenYearProductivityCostOutput.aiOpsObservability || this.props.userOutputData.defaultOutputData.response.finalOutputs.outputEffort.sevenYearProductivityCostOutput.aiOpsArm) {
            SevenYearinfo = arrCoversionOrder((sevenYearProductivity), [
                "automationRPA",
                "automationAgentAssist",
                "automationECATool",
                "automationDigitalWorkers",
                "testingIgnite",
                "efficiencyAgile",
                "efficiencyAQL",
                "efficiencyFPL",
                "security",
                "aiOpsObservability",
                "aiOpsArm",
                "totalPerYear",
                "cumulativePerYear",
            ]);
        }
        else {
            SevenYearinfo = arrCoversionOrder((sevenYearProductivity), [
                "automationRPA",
                "automationAgentAssist",
                "automationECATool",
                "automationDigitalWorkers",
                "testingIgnite",
                "efficiencyAgile",
                "efficiencyAQL",
                "efficiencyFPL",
                "security",
                "totalPerYear",
                "cumulativePerYear",
            ]);
        }


        return (<div id="page7A" className="page">

            {/* 7 Year Productivity Costs
Cost of Implementing the Productivity YoY */}
            <table>

                <tr><td><span className="heading">{this.props.englishValue("7YearProductivityCosts")}</span></td></tr>
                <tr><td><span className="heading">{this.props.englishValue("sevenoutputdes")}</span></td></tr>

            </table>
            <table>
                <tr className="trHeader"><td>{this.props.englishValue("productivitylevers")}</td>
                    <td>{this.props.englishValue("OTCY1")}  </td>
                    <td>{this.props.englishValue("productivityy1")}  </td>
                    <td>{this.props.englishValue("productivityy2")}  </td>
                    <td>{this.props.englishValue("productivityy3")}  </td>
                    <td>{this.props.englishValue("productivityy4")}  </td>
                    <td>{this.props.englishValue("productivityy5")}  </td>
                    <td>{this.props.englishValue("productivityy6")}  </td>
                    <td>{this.props.englishValue("productivityy7")}  </td>

                </tr>
                {SevenYearinfo.map(tds => {


                    if (tds[0] === "totalPerYear" || tds[0] === "cumulativePerYear") {
                        return (
                            <tr className="borderBottom1px tableBold">

                                <td> {englishValue(tds[0])}</td>
                                <td > {typeof (tds[1].otcY1) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].otcY1)}` : ''}</td>
                                <td className={this.props.transtionYear >= 1 ? (this.props.transtionYear == 1 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y1) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y1)}` : ''}</td>
                                <td className={this.props.transtionYear >= 2 ? (this.props.transtionYear == 2 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y2) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y2)}` : ''}</td>
                                <td className={this.props.transtionYear >= 3 ? (this.props.transtionYear == 3 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y3) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y3)}` : ''}</td>
                                <td className={this.props.transtionYear >= 4 ? (this.props.transtionYear == 4 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y4) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y4)}` : ''}</td>
                                <td className={this.props.transtionYear >= 5 ? (this.props.transtionYear == 5 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y5) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y5)}` : ''}</td>
                                <td className={this.props.transtionYear >= 6 ? (this.props.transtionYear == 6 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y6) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y6)}` : ''}</td>
                                <td className={this.props.transtionYear >= 7 ? (this.props.transtionYear == 7 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y7) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y7)}` : ''}</td>
                            </tr>

                        )
                    }
                    else {
                        return (
                            <tr className="borderBottom1px">

                                <td> {englishValue(tds[0])}</td>
                                <td > {typeof (tds[1].otcY1) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].otcY1)}` : ''}</td>
                                <td className={this.props.transtionYear >= 1 ? (this.props.transtionYear == 1 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y1) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y1)}` : ''}</td>
                                <td className={this.props.transtionYear >= 2 ? (this.props.transtionYear == 2 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y2) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y2)}` : ''}</td>
                                <td className={this.props.transtionYear >= 3 ? (this.props.transtionYear == 3 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y3) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y3)}` : ''}</td>
                                <td className={this.props.transtionYear >= 4 ? (this.props.transtionYear == 4 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y4) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y4)}` : ''}</td>
                                <td className={this.props.transtionYear >= 5 ? (this.props.transtionYear == 5 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y5) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y5)}` : ''}</td>
                                <td className={this.props.transtionYear >= 6 ? (this.props.transtionYear == 6 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y6) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y6)}` : ''}</td>
                                <td className={this.props.transtionYear >= 7 ? (this.props.transtionYear == 7 ? " borderOutput  tableBoldValue" : "  tableBoldValue") : ""}> {typeof (tds[1].y7) !== 'undefined' ? `${this.props.currencyCoverter(tds[1].y7)}` : ''}</td>
                            </tr>

                        )
                    }


                }
                )}


            </table>

            <table >
                <p className="notesfont">Note:</p>
                <p className="notesfont"> Please contact respective SMEs for the cost for the following Productivity Levers :</p>
                <p className="notesfont"> 1. DevSecOps - Command Center, SRE, Monitoring</p>
                <p className="notesfont"> 2. DevSecOps - DevOps - Overall</p>
                <p className="notesfont"> 3. Automation - Cog1 (Integration with Snow, Remedy, etc.</p>
                <p className="notesfont"> 4. Automation - Ansible </p>

            </table>






        </div>);
    }
}
export default Page17