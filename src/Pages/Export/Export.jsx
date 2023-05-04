import React from 'react';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page5_A from './Page5_A';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';
import Page11 from './Page11';
import Page12 from './Page12';
import Page12_A from './Page12_A';
import Page13 from './Page13';
import Page14 from './Page14';
import Page15 from './Page15';
import Page16 from './Page16';
import Page16_A from './Page16_A';
import Page17 from './Page17';
import Page18 from './Page18';
import Page19 from './Page19';
import Page20 from './Page20';
import Page21 from './Page21';
import Page22 from './Page22';
import Page23 from './Page23';
import Page24 from './Page24';

import { CheckmarkOutline16, Warning16, CheckmarkFilled16, WarningFilled16, PageLast24 } from '@carbon/icons-react';


import { getPdfPrintValue, getPdfPercentPrintValue, getPdfDecimalPrintValue, currencyCoverter, englishValue } from '../../Utils/CommonFunc'

class Export extends React.Component {

  constructor(props) {
    super(props)
    this.estimateTitle = props.estimate.estimateTitle
  }

  render() {
    let customProps = { ...this.props }
    customProps.getPdfPercentPrintValue = getPdfPercentPrintValue;
    customProps.getPdfDecimalPrintValue = getPdfDecimalPrintValue;
    customProps.getPdfPrintValue = getPdfPrintValue;
    customProps.currencyCoverter = currencyCoverter;
    customProps.englishValue = (key) => {
      if (englishValue(key) === undefined) { return key + " ^" } else {
        return englishValue(key)
      }
    };

    customProps.getOrangeOrGreenTickWithMessage = (obj, message) => {
      if (obj.iconStatus.ok) {
        return <div><div className="iconDiv" ><span className="tableSuccess"><CheckmarkOutline16 /></span></div> <div className="messageDiv">{message}</div></div>
      }
      else if (obj.iconStatus.warning) {
        return (<div><div className="iconDiv" ><span className="tableWarning"><Warning16 /></span></div> <div className="messageDiv"><div className="message">{message}</div>
          <div className="warningMessage">{obj.iconStatus.warningMessage} </div>
        </div></div>)
      }
    };
    customProps.getOrangeOrGreenTickWithMessage4 = (obj, message) => {
      if (obj.iconStatus.ok) {
        return <div><div className="iconDiv" ><span className="tableSuccess"><CheckmarkOutline16 /></span></div> <div className="messageDiv">{message}</div></div>
      }
      else if (obj.iconStatus.warning) {
        return (<div><div className="iconDiv" ><span className="tableWarning"><Warning16 /></span></div> <div className="messageDiv"><div className="message">{message}</div>
          <div className="warningMessage"> Too many applications considered in the scope of AIOPS </div>
        </div></div>)
      }
    };
    customProps.getOrangeOrGreenTickWithMessage2 = (obj, message) => {
      if (obj.iconStatus.ok) {
        return <><div className="iconDiv2" ><span className="tableSuccess"></span></div> </>
      }
      else if (obj.iconStatus.warning) {
        return (
          <><div className="iconDiv2" ><span className="tableWarning"><Warning16 /></span></div>
          </>)
      }
    };
    // for effot estimation parameters
    customProps.getOrangeOrGreenTickWithMessage3 = (obj, message) => {
      if (obj.iconStatus.ok) {
        return <div><div className="iconDiv" ><span className="tableSuccess"></span></div></div>
      }
      else if (obj.iconStatus.warning) {
        return (<div><div className="iconDiv" ><span className="tableWarning"><Warning16 /></span></div></div>)
      }
    };


    // customProps.getOrangeOrGreenTickWithMessage2 = (obj, message) => {
    //   if (obj.iconStatus.ok) {
    //     return <div><div className="iconDiv" ><span className="tableSuccess"></span></div> <div className="messageDiv">{message}</div></div>
    //   }
    //   else if (obj.iconStatus.warning) {
    //     return (<div><div className="iconDiv" ><span className="tableWarning2"></span></div> <div className="messageDiv"><div className="message">{message}</div>
    //       <div className="warningMessage">{obj.iconStatus.warningMessage} </div>
    //     </div></div>)
    //   }
    // };

    customProps.getStatusIconForSections = (obj, message) => {
      if (obj.iconStatus.ok) {
        return <div><div className="statusIconDiv" >{message}<span className="colorGreen padding5px"><CheckmarkFilled16 /></span></div>
        </div>
      }
      else if (obj.iconStatus.warning) {
        return (<div>
          <div className="statusIconDiv" >{message}<span className="colorOrange padding5px"><WarningFilled16 /></span></div>
        </div>)
      }
    }

    return (<div><div id="hidPdfContainer"  >
      <input type="button" className="hide" value="export pdf" onClick={() => { this.handlePdfMultiplePages() }} />
      <div id="export"  >
        {/* page1 Oppurnutnity id details & Index of the PDF */}
        <Page1 {...customProps} />
        {/* page2 Basic Info Application technology, Effort estimation parameter, Additional Cost */}
        <Page2 {...customProps} />
        {/* Page3 Genneral- Application Distribution COTS/3rd Party Applications Critical Applications */}
        <Page3 {...customProps} />
        {/* Page4 Average Ticket Count(Monthly), L1.5 + Small SRs , L2 + Medium SRs */}
        <Page4 {...customProps} />
        {/* Page5 L3 + Large SRs,L4,Minor Enhancements + V.Large SRs,Monthly Additional AD Capacity (Optional),Recommended Uplift */}
        <Page5 {...customProps} />
        {/* Page5_A AIOps table */}
        {/* Jira- 711--UI Task- AIOPS UI update on PDF */}
        {this.props['userInpuData']['defaultInputData']['response']['estimate']['userInputs']['general']['aiOpsAppPercentageOfTotalApps'] || this.props['userInpuData']['defaultInputData']['response']['estimate']['userInputs']['general']['aiOpsAppCountDistribution'] ?
          <Page5_A {...customProps} />
          : ''}
        {/* page7 AMS INPUT Utilization Calculation, YoY Tickets */}
        <Page7  {...customProps} />
        {/* Page8 CLOUD + DEVSECOPS-- Applications on Cloud , Deployment Model of Applications on Cloud, Containerized Applications,Move to Cloud (Cloud Migration Pattern) */}
        <Page8 {...customProps} />
        {/* page6 Client's Cloud Landscape(Advanced Cloud Input) */}
        <Page6  {...customProps} />
        {/* page9 AUTOMATION table-- ,Automation Effort , Distribution of One time cost for Cognitive Agent Assist & ECA Tools,
        Automation Tools ,Bot Monitoring coverage (AOCC coverage), DW Scope on perform Activities */}
        <Page9  {...customProps} />
        {/* Page10 Testing & Security  */}
        <Page10  {...customProps} />
        {/* Page11  TRANSITION, NON LABOUR */}
        <Page11  {...customProps} />
        {/* page 12 ProduvtivityInput DevsecopsTable */}
        <Page12  {...customProps} />
        {/* Page12_A ProduvtivityInputtables- AutomationTable, Cloud, Testing, Eficiency*/}
        <Page12_A  {...customProps} />

        {/*  Page15 Suggestedsquqrds but we removed this from Ui */}
        <Page15  {...customProps} />

        {/* MainOutPut */}
        {/* Page16 7 Year FTE Output- (FTEs Per month) table*/}
        <Page16  {...customProps} />

        {/* Page17 7 Year Productivity Costs
Cost of Implementing the Productivity YoY */}
        <Page17  {...customProps} />

        {/* Page16_A Effort Distribution by Technology */}

        {/* //jira-673-- UI Task- Update PDF w.r.t Effort distribution by Tech */}
        {(this.props.userOutputData.defaultOutputData.response.finalOutputs.outputEffort.effortDistributionByTechnology) ?
          <Page16_A  {...customProps} /> : ''}
        {/* Page13 Year 1 Effort Output-Effort By FTE (per month) */}
        <Page13  {...customProps} />
        {/* Page14 Year 1 Effort Output - Effort in hours (Per Month) */}
        <Page14  {...customProps} />
        {/* page18 Year 1 ROM Cost
        Total Costs for All Applications and Cost per Application Category (Year 1)*/}
        <Page18  {...customProps} />
        {/* Page19   Cost per Application (Monthly for Year 1) */}
        <Page19  {...customProps} />
        {/* Page20   Details of cost for each component of the integrated offering
              CORE APPLICATION SUPPORT */}
        <Page20  {...customProps} />
        {/* page24 Application Operations */}
        {/* Jira- 711--UI Task- AIOPS UI update on PDF  */}
        {(this.props.userOutputData.defaultOutputData.response.finalOutputs.outputYearOneROMCost.costDetailsEachComponentInOffering.appOpsCost) ?
          <Page24  {...customProps} /> : ''}
        {/* page21 AUTOMATION */}
        <Page21  {...customProps} />
        {/* page22 TESTING (Used if test FTE >=5) */}
        <Page22  {...customProps} />
        {/* page23 Security (Used for On-Premises solutions only) */}
        <Page23  {...customProps} />
      </div>
    </div>
    </div>
    );
  }
};



export default Export;