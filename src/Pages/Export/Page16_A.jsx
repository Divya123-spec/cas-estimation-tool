import React from 'react';
class Page16_A extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        let estimate = this.props.estimate;

        //jira-673-- UI Task- Update PDF w.r.t Effort distribution by Tech
        let effortDistributionByTechnology = (this.props.userOutputData.defaultOutputData.response.finalOutputs.outputEffort.effortDistributionByTechnology);
        let effortDistribution = (effortDistributionByTechnology.perMonthFTEsCalculationForEachTechnology);
        let effortDistributionTotal = effortDistributionByTechnology.totalFTEsPerYear;

        return (<div id="page16A" className="page">


            <table>
                <tr><td><span className="heading">{this.props.englishValue("EffortDistributionbyTechnology_PDF")}</span></td></tr>


            </table>
            <table>
                <tr className="trHeader"><td>{this.props.englishValue("PrimaryTechnology_PDF")}</td>
                    <td>{this.props.englishValue("SecondaryTechnology_PDF")}  </td>
                    <td>{this.props.englishValue("DistributionEffort_PDF")}  </td>
                    <td>{this.props.englishValue("D1BaselineFTEs_PDF")}  </td>
                    <td colSpan="7" className="aligncontents">{this.props.englishValue("FTEMonth_PDF")}  </td>



                </tr>
                <tr className="trHeader">

                    <td colSpan="4">  </td>
                    <td>{this.props.englishValue("Effort_y1")}  </td>
                    <td>{this.props.englishValue("Effort_y2")}  </td>
                    <td>{this.props.englishValue("Effort_y3")}  </td>
                    <td>{this.props.englishValue("Effort_y4")}  </td>
                    <td>{this.props.englishValue("Effort_y5")}  </td>
                    <td>{this.props.englishValue("Effort_y6")}  </td>
                    <td>{this.props.englishValue("Effort_y7")}  </td>

                </tr>

                {effortDistribution.map((ele) => {
                    let cname = "borderBottom1px"
                    cname = ""
                    return (<tr className={cname} className="borderBottom1px">
                        <td>{ele.workStream}</td>
                        <td>{ele.subWorkStream}</td>
                        <td>{this.props.getPdfPercentPrintValue(ele.appDistributionPercentage)}</td>
                        <td>{ele.perMonthFTEsCalculation.dayOneBaselineFTEs}</td>
                        <td>{ele.perMonthFTEsCalculation.perMonthFTEsForY1}</td>
                        <td>{ele.perMonthFTEsCalculation.perMonthFTEsForY2}</td>
                        <td>{ele.perMonthFTEsCalculation.perMonthFTEsForY3}</td>
                        <td>{ele.perMonthFTEsCalculation.perMonthFTEsForY4}</td>
                        <td>{ele.perMonthFTEsCalculation.perMonthFTEsForY5}</td>
                        <td>{ele.perMonthFTEsCalculation.perMonthFTEsForY6}</td>
                        <td>{ele.perMonthFTEsCalculation.perMonthFTEsForY7}</td>

                    </tr>

                    )
                })

                }
                <tr className="borderBottom1px tableBold">
                    <td >{this.props.englishValue("TotalFTEs_PDF")}</td>
                    <td colSpan="2"></td>
                    <td>{effortDistributionTotal.dayOneBaselineFTEs}</td>
                    <td>{effortDistributionTotal.perMonthFTEsForY1}</td>
                    <td>{effortDistributionTotal.perMonthFTEsForY2}</td>
                    <td>{effortDistributionTotal.perMonthFTEsForY3}</td>
                    <td>{effortDistributionTotal.perMonthFTEsForY4}</td>
                    <td>{effortDistributionTotal.perMonthFTEsForY5}</td>
                    <td>{effortDistributionTotal.perMonthFTEsForY6}</td>
                    <td>{effortDistributionTotal.perMonthFTEsForY7}</td>

                </tr>
            </table>


        </div>);
    }
}
export default Page16_A