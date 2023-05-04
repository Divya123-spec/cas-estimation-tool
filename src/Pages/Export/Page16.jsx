import React from 'react';
class Page16 extends React.Component {


    render() {

        let estimate = this.props.estimate;

        return (<div id="page17" className="page">
            <table className="hide"><tr><td>{this.props.englishValue("TODO")}OUTPUT</td><td style={{ float: "right" }}>{estimate.estimationTitle}</td></tr>
                <tr><td colSpan="2"><hr /></td></tr>
            </table>
            {/* 7 Year FTE Output- (FTEs Per month) table*/}

            <table>
                <tr><td><span className="heading allcaps">{this.props.englishValue("OUTPUT")}</span></td></tr>
                <tr><td><span className="heading">{this.props.englishValue("_PDF5YearFTEOutput")}</span></td></tr>
                <tr className="trHeader"><td>{this.props.englishValue("FTE Post Productivity")}</td>
                    <td>{this.props.englishValue("FTE/Month - Y1")}  </td>
                    <td>{this.props.englishValue("FTE/Month - Y2")} </td>
                    <td>{this.props.englishValue("FTE/Month - Y3")}</td>
                    <td>{this.props.englishValue("FTE/Month - Y4")}</td>
                    <td>{this.props.englishValue("FTE/Month - Y5")}</td>
                    <td>{this.props.englishValue("FTE/Month - Y6")}</td>
                    <td>{this.props.englishValue("FTE/Month - Y7")}</td>
                </tr>
                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityOnL1MonthlyFTEsForY1")}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY7}</td>

                </tr>

                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityOnL2MonthlyFTEsForY1")}</td>

                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY7}</td>


                </tr>
                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityOnL3MonthlyFTEsForY1")}</td>

                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY7}</td>


                </tr>
                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityOnL4MonthlyFTEsForY1")}</td>

                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY7}</td>

                </tr>
                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityOnMinorEnhMonthlyFTEsForY1")}</td>

                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7}</td>


                </tr>
                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityOnOptionalCapacityMonthlyFTEsForY1")}</td>


                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7}</td>

                </tr>

                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityOnAdhocActivitiesMonthlyFTEsForY1")}</td>

                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7}</td>

                </tr>

                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityOnTestingMonthlyFTEsForY1")}</td>


                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7}</td>


                </tr>

                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityOnAdditionalTestingMonthlyFTEsForY1")}</td>

                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityFTEs.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7}</td>


                </tr>


                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityOnSecurityMonthlyFTEsForY1")}</td>


                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7}</td>


                </tr>

                <tr className="borderBottom1px tableBold">
                    <td>{this.props.englishValue("subTotalSupportFTEs")}</td>


                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalSupportFTEs.subTotalPostProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalSupportFTEs.subTotalPostProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalSupportFTEs.subTotalPostProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalSupportFTEs.subTotalPostProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalSupportFTEs.subTotalPostProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalSupportFTEs.subTotalPostProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalSupportFTEs.subTotalPostProductivityMonthlyFTEsForY7}</td>


                </tr>


                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityOnAutomationMonthlyFTEsForY1")}</td>

                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityAutomationAndSecurityFTEs.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7}</td>


                </tr>
                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityOnSOCMonthlyFTEsForY1")}</td>

                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7}</td>


                </tr>

                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityOnDevOpsMonthlyFTEsForY1")}</td>

                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivitySOCAndDevOpsFTEs.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7}</td>


                </tr>
                <tr className="borderBottom1px tableBold">
                    <td>{this.props.englishValue("subTotalTransformResourcesFTEs")}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalTransformResourcesFTEs.subTotalPostProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalTransformResourcesFTEs.subTotalPostProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalTransformResourcesFTEs.subTotalPostProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalTransformResourcesFTEs.subTotalPostProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalTransformResourcesFTEs.subTotalPostProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalTransformResourcesFTEs.subTotalPostProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.subTotalFTEsSupportAndTransformResources.subTotalTransformResourcesFTEs.subTotalPostProductivityMonthlyFTEsForY7}</td>


                </tr>
                {estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.appDecommissionFTEs ?
                    <tr className="borderBottom1px tableBold">
                        <td>{this.props.englishValue("appDecommissionFTEs")}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.appDecommissionFTEs.postProductivityAppDecommissionFTEsForY1}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.appDecommissionFTEs.postProductivityAppDecommissionFTEsForY2}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.appDecommissionFTEs.postProductivityAppDecommissionFTEsForY3}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.appDecommissionFTEs.postProductivityAppDecommissionFTEsForY4}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.appDecommissionFTEs.postProductivityAppDecommissionFTEsForY5}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.appDecommissionFTEs.postProductivityAppDecommissionFTEsForY6}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.appDecommissionFTEs.postProductivityAppDecommissionFTEsForY7}</td>

                    </tr>
                    : ''}

                {estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityGovernanceUpliftFTEs ?
                    <tr className="borderBottom1px tableBold">
                        <td>{this.props.englishValue("postProductivityGovernanceUpliftFTEs")}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityGovernanceUpliftFTEs.postProductivityMonthlyFTEsForY1}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityGovernanceUpliftFTEs.postProductivityMonthlyFTEsForY2}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityGovernanceUpliftFTEs.postProductivityMonthlyFTEsForY3}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityGovernanceUpliftFTEs.postProductivityMonthlyFTEsForY4}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityGovernanceUpliftFTEs.postProductivityMonthlyFTEsForY5}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityGovernanceUpliftFTEs.postProductivityMonthlyFTEsForY6}</td>
                        <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.postProductivityGovernanceUpliftFTEs.postProductivityMonthlyFTEsForY7}</td>

                    </tr>
                    : ''}







                <tr className="borderBottom1px tableBold">
                    <td>{this.props.englishValue("totalFTEsPostProductivity")}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY1}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY2}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY3}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY4}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY5}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY6}</td>
                    <td>{estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.totalFTEsPostProductivity.totalPostProductivityMonthlyFTEsForY7}</td>

                </tr>

                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityYoY")}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYoY.productivityYoYForY1)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYoY.productivityYoYForY2)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYoY.productivityYoYForY3)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYoY.productivityYoYForY4)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYoY.productivityYoYForY5)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYoY.productivityYoYForY6)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYoY.productivityYoYForY7)}</td>

                </tr>

                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityCumulative")}</td>

                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityCumulative.productivityCumulativeForY1)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityCumulative.productivityCumulativeForY2)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityCumulative.productivityCumulativeForY3)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityCumulative.productivityCumulativeForY4)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityCumulative.productivityCumulativeForY5)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityCumulative.productivityCumulativeForY6)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityCumulative.productivityCumulativeForY7)}</td>


                </tr>

                <tr className="borderBottom1px">
                    <td>{this.props.englishValue("productivityYearlyAppliedPercentage")}</td>


                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYearlyAppliedPercentage.productivityYearlyAppliedPercentageForY1)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYearlyAppliedPercentage.productivityYearlyAppliedPercentageForY2)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYearlyAppliedPercentage.productivityYearlyAppliedPercentageForY3)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYearlyAppliedPercentage.productivityYearlyAppliedPercentageForY4)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYearlyAppliedPercentage.productivityYearlyAppliedPercentageForY5)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYearlyAppliedPercentage.productivityYearlyAppliedPercentageForY6)}</td>
                    <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.fiveYearFTEsOutput.totalFTEsYoYCumulativeAndYearlyAppliedProductivity.productivityYearlyAppliedPercentage.productivityYearlyAppliedPercentageForY7)}</td>

                </tr>
            </table>

        </div>);
    }
}
export default Page16