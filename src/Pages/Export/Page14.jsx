import React from 'react';
import * as html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PageHeader from './PageHeader';

class Page14 extends React.Component {

   render() {
      let estimate = this.props.estimate;
      return (<div id="page14" className="page">
         <table className="hide"><tr><td>{this.props.englishValue("TODO")}OUTPUT</td><td style={{ float: "right" }}>{estimate.estimationTitle}</td></tr>
            <tr><td colSpan="2"><hr /></td></tr>
         </table>
         {/* Year 1 Effort Output - Effort in hours (Per Month) */}

         <table>
            <tr><td colSpan="3"><span className="heading allcaps hide">{this.props.englishValue("OUTPUT")}</span></td></tr>
            <tr><td colSpan="3"><span className="heading">{this.props.englishValue("_pdf_Year 1 Effort Output - Effort in hours (Per Month)")}</span></td></tr>
            <tr className="trHeader"><td>{this.props.englishValue("EffortInHours(per month)")}</td>
               <td>{this.props.englishValue("Simple")} </td><td>{this.props.englishValue("Moderate")} </td><td>{this.props.englishValue("Complex")}</td><td> {this.props.englishValue("Day1")}</td><td>{this.props.englishValue("EndY1")}</td></tr>

            <tr className="borderBottom1px">
               <td>{this.props.englishValue("incidentsMonthlyHrs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.incidentsMonthlyHrs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.incidentsMonthlyHrs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.incidentsMonthlyHrs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.incidentsMonthlyHrs.day1Hrs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.incidentsMonthlyHrs.endOfY1Hrs}</td>
            </tr>

            <tr className="borderBottom1px"><td>{this.props.englishValue("minorEnhMonthlyHrs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.minorEnhMonthlyHrs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.minorEnhMonthlyHrs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.minorEnhMonthlyHrs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.minorEnhMonthlyHrs.day1Hrs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.minorEnhMonthlyHrs.endOfY1Hrs}</td>

            </tr>
            <tr className="borderBottom1px"><td>{this.props.englishValue("optionalCapacityMonthlyHrs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.optionalCapacityMonthlyHrs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.optionalCapacityMonthlyHrs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.optionalCapacityMonthlyHrs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.optionalCapacityMonthlyHrs.day1Hrs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.optionalCapacityMonthlyHrs.endOfY1Hrs}</td>

            </tr>
            <tr className="borderBottom1px"><td>{this.props.englishValue("testingMonthlyHrs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.testingMonthlyHrs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.testingMonthlyHrs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.testingMonthlyHrs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.testingMonthlyHrs.day1Hrs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.testingMonthlyHrs.endOfY1Hrs}</td>

            </tr>

            <tr className="borderBottom1px"><td>{this.props.englishValue("additionalTestingMonthlyHrs")}</td>

               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.additionalTestingMonthlyHrs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.additionalTestingMonthlyHrs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.additionalTestingMonthlyHrs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.additionalTestingMonthlyHrs.day1Hrs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.additionalTestingMonthlyHrs.endOfY1Hrs}</td>

            </tr>
            <tr className="borderBottom1px"><td>{this.props.englishValue("adhocActivitiesMonthlyHrs")}</td>

               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.adhocActivitiesMonthlyHrs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.adhocActivitiesMonthlyHrs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.adhocActivitiesMonthlyHrs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.adhocActivitiesMonthlyHrs.day1Hrs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.adhocActivitiesMonthlyHrs.endOfY1Hrs}</td>

            </tr>
            <tr className="borderBottom1px"><td>{this.props.englishValue("automationMonthlyHrs")}</td>

               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.automationMonthlyHrs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.automationMonthlyHrs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.automationMonthlyHrs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.automationMonthlyHrs.day1Hrs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.automationMonthlyHrs.endOfY1Hrs}</td>

            </tr>

            <tr className="borderBottom1px"><td>{this.props.englishValue("socMonthlyHrs")}</td>

               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.socMonthlyHrs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.socMonthlyHrs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.socMonthlyHrs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.socMonthlyHrs.day1Hrs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.socMonthlyHrs.endOfY1Hrs}</td>

            </tr>


            <tr className="borderBottom1px"><td>{this.props.englishValue("devOpsMonthlyHrs")}</td>

               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.devOpsMonthlyHrs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.devOpsMonthlyHrs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.devOpsMonthlyHrs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.devOpsMonthlyHrs.day1Hrs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.devOpsMonthlyHrs.endOfY1Hrs}</td>

            </tr>

            <tr className="borderBottom1px"><td>{this.props.englishValue("securityMonthlyHrs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.securityMonthlyHrs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.securityMonthlyHrs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.securityMonthlyHrs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.securityMonthlyHrs.day1Hrs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.securityMonthlyHrs.endOfY1Hrs}</td>

            </tr>

            <tr className="tableBold borderBottom1px"><td>{this.props.englishValue("totalHoursInScope")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.totalHoursInScope.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.totalHoursInScope.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.totalHoursInScope.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.totalHoursInScope.day1Hrs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.totalHoursInScope.endOfY1Hrs}</td>
            </tr>


            <tr className="tableBold borderBottom1px"><td>{this.props.englishValue("governanceUpliftHrs")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.governanceUpliftHrs.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.governanceUpliftHrs.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.governanceUpliftHrs.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.governanceUpliftHrs.day1Hrs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.governanceUpliftHrs.endOfY1Hrs}</td>
            </tr>

            <tr className="tableBold borderBottom1px"><td>{this.props.englishValue("totalHoursInScopeIncludingGovernanceUplift")}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.totalHoursInScopeIncludingGovernanceUplift.simple}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.totalHoursInScopeIncludingGovernanceUplift.moderate}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.totalHoursInScopeIncludingGovernanceUplift.complex}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.totalHoursInScopeIncludingGovernanceUplift.day1Hrs}</td>
               <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.monthlyEffortsInHours.totalHoursInScopeIncludingGovernanceUplift.endOfY1Hrs}</td>
            </tr>





         </table></div>);
   }
}
export default Page14