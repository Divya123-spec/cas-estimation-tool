import React from 'react';
import * as html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PageHeader from './PageHeader';

class Page15 extends React.Component {
   constructor(props){
      super(props)
    }
    
    render() {
      let estimate = this.props.estimate;
      return (<div id="page15" className="page hide">
            <table><tr><td>{this.props.englishValue("TODO")}OUTPUT</td><td style={{float:"right"}}>{estimate.estimationTitle}</td></tr>
        <tr><td colSpan="2"><hr/></td></tr>
        </table>
<table>
<tr><td><span className="heading">{this.props.englishValue("TODO")}OUTPUT</span></td></tr>
<tr><td><span className="heading">{this.props.englishValue("TODO")}Suggested SQUADS</span></td></tr>
<tr  className="trHeader"><td>{this.props.englishValue("TODO")}Suggested SQUADS</td><td>{this.props.englishValue("TODO")} V Large </td><td>{this.props.englishValue("TODO")}Large </td><td>{this.props.englishValue("TODO")}Medium</td><td> {this.props.englishValue("TODO")}Small</td><td>{this.props.englishValue("TODO")}Total SQUADS</td></tr>

<tr className="borderBottom1px">
    <td>{this.props.englishValue("TODO")}Incidents</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.incidentsSuggestedSquads.vLarge}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.incidentsSuggestedSquads.large}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.incidentsSuggestedSquads.medium}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.incidentsSuggestedSquads.small}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.incidentsSuggestedSquads.totalSquads}</td>

    </tr>

 <tr className="borderBottom1px"><td>{this.props.englishValue("TODO")}Minor Enhancments</td>
 
 <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.minorEnhSuggestedSquads.vLarge}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.minorEnhSuggestedSquads.large}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.minorEnhSuggestedSquads.medium}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.minorEnhSuggestedSquads.small}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.minorEnhSuggestedSquads.totalSquads}</td>
 </tr>   
 <tr className="borderBottom1px"><td>{this.props.englishValue("TODO")}AD Capacity(Additional)</td>
 
 <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.optionalCapacitySuggestedSquads.vLarge}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.optionalCapacitySuggestedSquads.large}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.optionalCapacitySuggestedSquads.medium}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.optionalCapacitySuggestedSquads.small}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.optionalCapacitySuggestedSquads.totalSquads}</td>
 </tr>   
 <tr className="borderBottom1px"><td>{this.props.englishValue("TODO")}Testing (included in solution)</td>
 
 
 <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.testingSuggestedSquads.vLarge}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.testingSuggestedSquads.large}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.testingSuggestedSquads.medium}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.testingSuggestedSquads.small}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.testingSuggestedSquads.totalSquads}</td>
 </tr>   
 
 <tr className="borderBottom1px"><td>{this.props.englishValue("TODO")}Testing (Additional)</td>
 
 <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.additionalTestingSuggestedSquads.vLarge}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.additionalTestingSuggestedSquads.large}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.additionalTestingSuggestedSquads.medium}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.additionalTestingSuggestedSquads.small}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.additionalTestingSuggestedSquads.totalSquads}</td>
 </tr>   
 <tr className="borderBottom1px"><td>{this.props.englishValue("TODO")}Adhoc</td>
 
 <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.adhocActivitiesSuggestedSquads.vLarge}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.adhocActivitiesSuggestedSquads.large}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.adhocActivitiesSuggestedSquads.medium}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.adhocActivitiesSuggestedSquads.small}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.adhocActivitiesSuggestedSquads.totalSquads}</td>

 </tr>   
 <tr className="borderBottom1px"><td>{this.props.englishValue("TODO")}Automation</td>
 
 <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.automationSuggestedSquads.vLarge}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.automationSuggestedSquads.large}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.automationSuggestedSquads.medium}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.automationSuggestedSquads.small}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.automationSuggestedSquads.totalSquads}</td>
    
 </tr>   
 
 <tr className="borderBottom1px"><td>{this.props.englishValue("TODO")}Security</td>

 
 <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.securitySuggestedSquads.vLarge}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.securitySuggestedSquads.large}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.securitySuggestedSquads.medium}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.securitySuggestedSquads.small}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.securitySuggestedSquads.totalSquads}</td>
    
 </tr>   
 
 <tr className="borderBottom1px"><td>{this.props.englishValue("TODO")}Total FTE by Squads</td>
 
 <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.totalFTEsBySquads.vLarge}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.totalFTEsBySquads.large}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.totalFTEsBySquads.medium}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.totalFTEsBySquads.small}</td>
    <td>{estimate.finalOutputs.outputEffort.yearOneEffortOutput.suggestedSquads.totalFTEsBySquads.totalSquads}</td>
    
 </tr>   



</table></div>);
    }
}
export default Page15