import React from 'react';

class Page13 extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      let estimate = this.props.estimate;
      return (<div id="page13" className="page">
         <table className="hide"><tr><td>{this.props.englishValue("OUTPUT")}</td><td style={{ float: "right" }}>{estimate.estimationTitle}</td></tr>
            <tr><td colSpan="2"><hr /></td></tr>
         </table>
         {/* Year 1 Effort Output-Effort By FTE (per month) */}
         <table>
            <tr ><td><span className="heading hide">{this.props.englishValue("OUTPUT")}</span></td></tr>
            <tr><td colSpan="3"><span className="heading">{this.props.englishValue("_pdf_Year 1 Effort Output-Effort By FTE (per month)")}</span></td></tr>
            <tr className="trHeader"><td>{this.props.englishValue("EffortByFTE(per month)")}</td>
               <td>{this.props.englishValue("Simple")} </td>
               <td>{this.props.englishValue("Moderate")}  </td>
               <td>{this.props.englishValue("Complex")}</td>
               <td> {this.props.englishValue("Day1FTE")}</td>
               <td>{this.props.englishValue("EndY1FTE")}</td></tr>
            <tr className="borderBottom1px">
               <td>{this.props.englishValue("incidentsMonthlyFTEs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.incidentsMonthlyFTEs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.incidentsMonthlyFTEs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.incidentsMonthlyFTEs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.incidentsMonthlyFTEs.day1FTEs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.incidentsMonthlyFTEs.endOfY1FTEs}</td>

            </tr>

            <tr className="borderBottom1px"><td>{this.props.englishValue("minorEnhMonthlyFTEs")}</td>


               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.minorEnhMonthlyFTEs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.minorEnhMonthlyFTEs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.minorEnhMonthlyFTEs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.minorEnhMonthlyFTEs.day1FTEs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.minorEnhMonthlyFTEs.endOfY1FTEs}</td>

            </tr>
            <tr className="borderBottom1px"><td>{this.props.englishValue("optionalCapacityMonthlyFTEs")}</td>


               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.optionalCapacityMonthlyFTEs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.optionalCapacityMonthlyFTEs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.optionalCapacityMonthlyFTEs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.optionalCapacityMonthlyFTEs.day1FTEs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.optionalCapacityMonthlyFTEs.endOfY1FTEs}</td>

            </tr>
            <tr className="borderBottom1px"><td>{this.props.englishValue("testingMonthlyFTEs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.testingMonthlyFTEs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.testingMonthlyFTEs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.testingMonthlyFTEs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.testingMonthlyFTEs.day1FTEs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.testingMonthlyFTEs.endOfY1FTEs}</td>

            </tr>

            <tr className="borderBottom1px"><td>{this.props.englishValue("additionalTestingMonthlyFTEs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.additionalTestingMonthlyFTEs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.additionalTestingMonthlyFTEs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.additionalTestingMonthlyFTEs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.additionalTestingMonthlyFTEs.day1FTEs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.additionalTestingMonthlyFTEs.endOfY1FTEs}</td>

            </tr>
            <tr className="borderBottom1px"><td>{this.props.englishValue("adhocActivitiesMonthlyFTEs")}</td>

               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.adhocActivitiesMonthlyFTEs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.adhocActivitiesMonthlyFTEs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.adhocActivitiesMonthlyFTEs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.adhocActivitiesMonthlyFTEs.day1FTEs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.adhocActivitiesMonthlyFTEs.endOfY1FTEs}</td>

            </tr>
            <tr className="borderBottom1px"><td>{this.props.englishValue("automationMonthlyFTEs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.automationMonthlyFTEs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.automationMonthlyFTEs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.automationMonthlyFTEs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.automationMonthlyFTEs.day1FTEs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.automationMonthlyFTEs.endOfY1FTEs}</td>

            </tr>

            <tr className="borderBottom1px"><td>{this.props.englishValue("socMonthlyFTEs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.socMonthlyFTEs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.socMonthlyFTEs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.socMonthlyFTEs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.socMonthlyFTEs.day1FTEs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.socMonthlyFTEs.endOfY1FTEs}</td>

            </tr>

            <tr className="borderBottom1px"><td>{this.props.englishValue("devOpsMonthlyHrs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.devOpsMonthlyFTEs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.devOpsMonthlyFTEs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.devOpsMonthlyFTEs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.devOpsMonthlyFTEs.day1FTEs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.devOpsMonthlyFTEs.endOfY1FTEs}</td>

            </tr>

            <tr className="borderBottom1px"><td>{this.props.englishValue("securityMonthlyFTEs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.securityMonthlyFTEs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.securityMonthlyFTEs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.securityMonthlyFTEs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.securityMonthlyFTEs.day1FTEs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.securityMonthlyFTEs.endOfY1FTEs}</td>

            </tr>

            <tr className="borderBottom1px tableBold"><td>{this.props.englishValue("totalFTEsInScope")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.totalFTEsInScope.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.totalFTEsInScope.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.totalFTEsInScope.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.totalFTEsInScope.day1FTEs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.totalFTEsInScope.endOfY1FTEs}</td>

            </tr>

            <tr className="borderBottom1px tableBold"><td>{this.props.englishValue("governanceUpliftFTEs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.governanceUpliftFTEs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.governanceUpliftFTEs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.governanceUpliftFTEs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.governanceUpliftFTEs.day1FTEs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.governanceUpliftFTEs.endOfY1FTEs}</td>

            </tr>

            <tr className="borderBottom1px tableBold"><td>{this.props.englishValue("totalFTEsInScopeIncludingGovernanceUplift")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.totalFTEsInScopeIncludingGovernanceUplift.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.totalFTEsInScopeIncludingGovernanceUplift.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.totalFTEsInScopeIncludingGovernanceUplift.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.totalFTEsInScopeIncludingGovernanceUplift.day1FTEs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.totalFTEsInScopeIncludingGovernanceUplift.endOfY1FTEs}</td>

            </tr>



            <tr className="borderBottom1px"><td>{this.props.englishValue("distributionPercentageOfTotalFTEsInScope")}</td>
               <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.distributionPercentageOfTotalFTEsInScope.simple)}</td>
               <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.distributionPercentageOfTotalFTEsInScope.moderate)}</td>
               <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.distributionPercentageOfTotalFTEsInScope.complex)}</td>
               {/* <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.distributionPercentageOfTotalFTEsInScope.day1FTEs)}</td>
               <td>{this.props.getPdfPercentPrintValue(estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsByFTEs.distributionPercentageOfTotalFTEsInScope.endOfY1FTEs)}</td> */}

            </tr>
         </table></div>);
   }
}
export default Page13