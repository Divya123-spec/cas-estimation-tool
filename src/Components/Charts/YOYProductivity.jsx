import React from "react";
import ReactDOM from "react-dom";
import { StackedBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { englishValue } from "../../Utils/CommonFunc";
export default class YOYProductivity extends React.Component {
    // Year on Year FTE with Productivity chart on Data Vizualization

    state = {
        data: [
            {
                "group": englishValue('productivityOnL1MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY1'),
                "value": this.props.fiveYearOutputCharts.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY1
            },
            {
                "group": englishValue('productivityOnL2MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY1'),
                "value": this.props.fiveYearOutputCharts.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY1
            },
            {
                "group": englishValue('productivityOnL3MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY1'),
                "value": this.props.fiveYearOutputCharts.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY1
            },
            {
                "group": englishValue('productivityOnL4MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY1'),
                "value": this.props.fiveYearOutputCharts.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY1
            },
            {
                "group": englishValue('minorEnhGraph'),
                "key": englishValue('key_FTEY1'),
                "value": this.props.fiveYearOutputCharts.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1
            },
            {
                "group": englishValue('CapacityHours'),
                "key": englishValue('key_FTEY1'),
                "value": this.props.fiveYearOutputCharts.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1
            },
            {
                "group": englishValue('productivityOnAdhocActivitiesMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY1'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1
            },
            {
                "group": englishValue('productivityOnTestingMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY1'),
                "value": this.props.fiveYearOutputCharts.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1
            },
            {
                "group": englishValue('Additionaltesting'),
                "key": englishValue('key_FTEY1'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1
            },
            {
                "group": englishValue('productivityOnSecurityMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY1'),
                "value": this.props.fiveYearOutputCharts.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1
            },
            {
                "group": englishValue('productivityOnAutomationMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY1'),
                "value": this.props.fiveYearOutputCharts.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1
            },
            // UI Issue - SOC and DEVOPS missing in graph and Download data as CSV
            // CMIWET-774
            {
                "group": englishValue('productivityOnSOCMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY1'),
                "value": this.props.fiveYearOutputCharts.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1
            },
            {
                "group": englishValue('productivityOnDevOpsMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY1'),
                "value": this.props.fiveYearOutputCharts.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY1
            },
           
            {
                "group": englishValue('productivityOnL1MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY2'),
                "value": this.props.fiveYearOutputCharts.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY2
            },
            {
                "group": englishValue('productivityOnL2MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY2'),
                "value": this.props.fiveYearOutputCharts.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY2
            },
            {
                "group": englishValue('productivityOnL3MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY2'),
                "value": this.props.fiveYearOutputCharts.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY2
            },
            {
                "group": englishValue('productivityOnL4MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY2'),
                "value": this.props.fiveYearOutputCharts.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY2
            },
            {
                "group": englishValue('minorEnhGraph'),
                "key": englishValue('key_FTEY2'),
                "value": this.props.fiveYearOutputCharts.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2
            },
            {
                "group": englishValue('CapacityHours'),
                "key": englishValue('key_FTEY2'),
                "value": this.props.fiveYearOutputCharts.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2
            },
            {
                "group": englishValue('productivityOnAdhocActivitiesMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY2'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2
            },
            {
                "group": englishValue('productivityOnTestingMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY2'),
                "value": this.props.fiveYearOutputCharts.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2
            },
            {
                "group": englishValue('Additionaltesting'),
                "key": englishValue('key_FTEY2'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2
            },
            {
                "group": englishValue('productivityOnSecurityMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY2'),
                "value": this.props.fiveYearOutputCharts.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2
            },
            {
                "group": englishValue('productivityOnAutomationMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY2'),
                "value": this.props.fiveYearOutputCharts.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2
            },
            // UI Issue - SOC and DEVOPS missing in graph and Download data as CSV
            // CMIWET-774
            {
                "group": englishValue('productivityOnSOCMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY2'),
                "value": this.props.fiveYearOutputCharts.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2
            },
            {
                "group": englishValue('productivityOnDevOpsMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY2'),
                "value": this.props.fiveYearOutputCharts.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY2
            },
           
            {
                "group": englishValue('productivityOnL1MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY3'),
                "value": this.props.fiveYearOutputCharts.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY3
            },
            {
                "group": englishValue('productivityOnL2MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY3'),
                "value": this.props.fiveYearOutputCharts.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY3
            },
            {
                "group": englishValue('productivityOnL3MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY3'),
                "value": this.props.fiveYearOutputCharts.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY3
            },
            {
                "group": englishValue('productivityOnL4MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY3'),
                "value": this.props.fiveYearOutputCharts.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY3
            },
            {
                "group": englishValue('minorEnhGraph'),
                "key": englishValue('key_FTEY3'),
                "value": this.props.fiveYearOutputCharts.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3
            },
            {
                "group": englishValue('CapacityHours'),
                "key": englishValue('key_FTEY3'),
                "value": this.props.fiveYearOutputCharts.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3
            },
            {
                "group": englishValue('productivityOnAdhocActivitiesMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY3'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3
            },
            {
                "group": englishValue('productivityOnTestingMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY3'),
                "value": this.props.fiveYearOutputCharts.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3
            },
            {
                "group": englishValue('Additionaltesting'),
                "key": englishValue('key_FTEY3'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3
            },
            {
                "group": englishValue('productivityOnSecurityMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY3'),
                "value": this.props.fiveYearOutputCharts.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3
            },
            {
                "group": englishValue('productivityOnAutomationMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY3'),
                "value": this.props.fiveYearOutputCharts.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3
            },
            // UI Issue - SOC and DEVOPS missing in graph and Download data as CSV
            // CMIWET-774
            {
                "group": englishValue('productivityOnSOCMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY3'),
                "value": this.props.fiveYearOutputCharts.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3
            },
            {
                "group": englishValue('productivityOnDevOpsMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY3'),
                "value": this.props.fiveYearOutputCharts.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY3
            },
           
            {
                "group": englishValue('productivityOnL1MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY4'),
                "value": this.props.fiveYearOutputCharts.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY4
            },
            {
                "group": englishValue('productivityOnL2MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY4'),
                "value": this.props.fiveYearOutputCharts.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY4
            },
            {
                "group": englishValue('productivityOnL3MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY4'),
                "value": this.props.fiveYearOutputCharts.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY4
            },
            {
                "group": englishValue('productivityOnL4MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY4'),
                "value": this.props.fiveYearOutputCharts.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY4
            },
            {
                "group": englishValue('minorEnhGraph'),
                "key": englishValue('key_FTEY4'),
                "value": this.props.fiveYearOutputCharts.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4
            },
            {
                "group": englishValue('CapacityHours'),
                "key": englishValue('key_FTEY4'),
                "value": this.props.fiveYearOutputCharts.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4
            },
            {
                "group": englishValue('productivityOnAdhocActivitiesMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY4'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4
            },
            {
                "group": englishValue('productivityOnTestingMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY4'),
                "value": this.props.fiveYearOutputCharts.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4
            },
            {
                "group": englishValue('Additionaltesting'),
                "key": englishValue('key_FTEY4'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4
            },
            {
                "group": englishValue('productivityOnSecurityMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY4'),
                "value": this.props.fiveYearOutputCharts.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4
            },
            {
                "group": englishValue('productivityOnAutomationMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY4'),
                "value": this.props.fiveYearOutputCharts.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4
            },
            // UI Issue - SOC and DEVOPS missing in graph and Download data as CSV
            // CMIWET-774
            {
                "group": englishValue('productivityOnSOCMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY4'),
                "value": this.props.fiveYearOutputCharts.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4
            },
            {
                "group": englishValue('productivityOnDevOpsMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY4'),
                "value": this.props.fiveYearOutputCharts.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY4
            },
          
            {
                "group": englishValue('productivityOnL1MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY5'),
                "value": this.props.fiveYearOutputCharts.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY5
            },
            {
                "group": englishValue('productivityOnL2MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY5'),
                "value": this.props.fiveYearOutputCharts.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY5
            },
            {
                "group": englishValue('productivityOnL3MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY5'),
                "value": this.props.fiveYearOutputCharts.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY5
            },
            {
                "group": englishValue('productivityOnL4MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY5'),
                "value": this.props.fiveYearOutputCharts.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY5
            },
            {
                "group": englishValue('minorEnhGraph'),
                "key": englishValue('key_FTEY5'),
                "value": this.props.fiveYearOutputCharts.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5
            },
            {
                "group": englishValue('CapacityHours'),
                "key": englishValue('key_FTEY5'),
                "value": this.props.fiveYearOutputCharts.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5
            },
            {
                "group": englishValue('productivityOnAdhocActivitiesMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY5'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5
            },
            {
                "group": englishValue('productivityOnTestingMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY5'),
                "value": this.props.fiveYearOutputCharts.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5
            },
            {
                "group": englishValue('Additionaltesting'),
                "key": englishValue('key_FTEY5'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5
            },
            {
                "group": englishValue('productivityOnSecurityMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY5'),
                "value": this.props.fiveYearOutputCharts.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5
            },
            {
                "group": englishValue('productivityOnAutomationMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY5'),
                "value": this.props.fiveYearOutputCharts.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5
            },   
              // UI Issue - SOC and DEVOPS missing in graph and Download data as CSV
            // CMIWET-774
            {
                "group": englishValue('productivityOnSOCMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY5'),
                "value": this.props.fiveYearOutputCharts.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5
            },
            {
                "group": englishValue('productivityOnDevOpsMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY5'),
                "value": this.props.fiveYearOutputCharts.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY5
            },
          


            {
                "group": englishValue('productivityOnL1MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY6'),
                "value": this.props.fiveYearOutputCharts.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY6
            },
            {
                "group": englishValue('productivityOnL2MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY6'),
                "value": this.props.fiveYearOutputCharts.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY6
            },
            {
                "group": englishValue('productivityOnL3MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY6'),
                "value": this.props.fiveYearOutputCharts.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY6
            },
            {
                "group": englishValue('productivityOnL4MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY6'),
                "value": this.props.fiveYearOutputCharts.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY6
            },
            {
                "group": englishValue('minorEnhGraph'),
                "key": englishValue('key_FTEY6'),
                "value": this.props.fiveYearOutputCharts.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6
            },
            {
                "group": englishValue('CapacityHours'),
                "key": englishValue('key_FTEY6'),
                "value": this.props.fiveYearOutputCharts.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6
            },
            {
                "group": englishValue('productivityOnAdhocActivitiesMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY6'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6
            },
            {
                "group": englishValue('productivityOnTestingMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY6'),
                "value": this.props.fiveYearOutputCharts.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6
            },
            {
                "group": englishValue('Additionaltesting'),
                "key": englishValue('key_FTEY6'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6
            },
            {
                "group": englishValue('productivityOnSecurityMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY6'),
                "value": this.props.fiveYearOutputCharts.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6
            },
            {
                "group": englishValue('productivityOnAutomationMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY6'),
                "value": this.props.fiveYearOutputCharts.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6
            },
              // UI Issue - SOC and DEVOPS missing in graph and Download data as CSV
            // CMIWET-774
            {
                "group": englishValue('productivityOnSOCMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY6'),
                "value": this.props.fiveYearOutputCharts.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6
            },
            {
                "group": englishValue('productivityOnDevOpsMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY6'),
                "value": this.props.fiveYearOutputCharts.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY6
            },
           


            {
                "group": englishValue('productivityOnL1MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY7'),
                "value": this.props.fiveYearOutputCharts.productivityOnL1MonthlyFTEsForY1.postProductivityMonthlyFTEsForY7
            },
            {
                "group": englishValue('productivityOnL2MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY7'),
                "value": this.props.fiveYearOutputCharts.productivityOnL2MonthlyFTEsForY1.postProductivityMonthlyFTEsForY7
            },
            {
                "group": englishValue('productivityOnL3MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY7'),
                "value": this.props.fiveYearOutputCharts.productivityOnL3MonthlyFTEsForY1.postProductivityMonthlyFTEsForY7
            },
            {
                "group": englishValue('productivityOnL4MonthlyFTEsForY1'),
                "key": englishValue('key_FTEY7'),
                "value": this.props.fiveYearOutputCharts.productivityOnL4MonthlyFTEsForY1.postProductivityMonthlyFTEsForY7
            },
            {
                "group": englishValue('minorEnhGraph'),
                "key": englishValue('key_FTEY7'),
                "value": this.props.fiveYearOutputCharts.productivityOnMinorEnhMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7
            },
            {
                "group": englishValue('CapacityHours'),
                "key": englishValue('key_FTEY7'),
                "value": this.props.fiveYearOutputCharts.productivityOnOptionalCapacityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7
            },
            {
                "group": englishValue('productivityOnAdhocActivitiesMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY7'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdhocActivitiesMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7
            },
            {
                "group": englishValue('productivityOnTestingMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY7'),
                "value": this.props.fiveYearOutputCharts.productivityOnTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7
            },
            {
                "group": englishValue('Additionaltesting'),
                "key": englishValue('key_FTEY7'),
                "value": this.props.fiveYearOutputCharts.productivityOnAdditionalTestingMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7
            },
            {
                "group": englishValue('productivityOnSecurityMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY7'),
                "value": this.props.fiveYearOutputCharts.productivityOnSecurityMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7
            },
            {
                "group": englishValue('productivityOnAutomationMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY7'),
                "value": this.props.fiveYearOutputCharts.productivityOnAutomationMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7
            },
           // UI Issue - SOC and DEVOPS missing in graph and Download data as CSV
            // CMIWET-774
            {
                "group": englishValue('productivityOnSOCMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY7'),
                "value": this.props.fiveYearOutputCharts.productivityOnSOCMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7
            },
            {
                "group": englishValue('productivityOnDevOpsMonthlyFTEsForY1'),
                "key": englishValue('key_FTEY7'),
                "value": this.props.fiveYearOutputCharts.productivityOnDevOpsMonthlyFTEsForY1.postProductivityMonthlyFTEsForY7
            },
         


        ],
        // CMIWET-657-jira task to change the namefor the Year on Year FTE with Productivity graph
        options: {
            "title": englishValue('Yearfunctionschart'),
            "axes": {
                "left": {
                    "mapsTo": "value",
                    "stacked": true
                },
                "bottom": {
                    "mapsTo": "key",
                    "title": "FTE/Mnth",
                    "scaleType": "labels"
                }
            },
            // "legend":{
            //     "alignment":"center",
            //     // "position":"right"
            // },
            "width": "500px",
            "height": "400px"
        }
    };
    render = () => (
        <StackedBarChart
            data={this.state.data}
            options={this.state.options}>
        </StackedBarChart>
    );
}

