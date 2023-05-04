import React from "react";
import ReactDOM from "react-dom";
import { StackedBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { englishValue } from "../../Utils/CommonFunc";
// "Day 1 Complexity Distribution by Function" table on data visualisation
export default class Day1complexity extends React.Component {
    state = {
        data: [
            {
                "group": englishValue('SimpleChart'),
                "key": englishValue('key_Incidents'),
                "value": this.props.monthlyEffortsInHoursCharts.incidentsMonthlyHrs.simple
            },
            {
                "group": englishValue('SimpleChart'),
                "key": englishValue('key_MinorEnch'),
                "value": this.props.monthlyEffortsInHoursCharts.minorEnhMonthlyHrs.simple
            },
            {
                "group": englishValue('SimpleChart'),
                "key": englishValue('key_ADCapacity'),
                "value": this.props.monthlyEffortsInHoursCharts.optionalCapacityMonthlyHrs.simple
            },
            {
                "group": englishValue('SimpleChart'),
                "key": englishValue('key_Adhoc'),
                "value": this.props.monthlyEffortsInHoursCharts.adhocActivitiesMonthlyHrs.simple
            },
            {
                "group": englishValue('SimpleChart'),
                "key": englishValue('Testing'),
                "value": this.props.monthlyEffortsInHoursCharts.testingMonthlyHrs.simple
            },
            {
                "group": englishValue('SimpleChart'),
                "key": englishValue('key_Testing(addl)'),
                "value": this.props.monthlyEffortsInHoursCharts.additionalTestingMonthlyHrs.simple
            },
            {
                "group": englishValue('SimpleChart'),
                "key": englishValue('key_Security'),
                "value": this.props.monthlyEffortsInHoursCharts.securityMonthlyHrs.simple
            },
            {
                "group": englishValue('SimpleChart'),
                "key": englishValue('key_Automation'),
                "value": this.props.monthlyEffortsInHoursCharts.automationMonthlyHrs.simple
            },
            
                        // UI Issue - SOC and DEVOPS missing in graph and Download data as CSV
            // CMIWET-774
            {
                "group": englishValue('SimpleChart'),
                "key": englishValue('socMonthlyHrs'),
                "value": this.props.monthlyEffortsInHoursCharts.socMonthlyHrs.simple
            },
            {
                "group": englishValue('SimpleChart'),
                "key": englishValue('devOpsMonthlyHrs'),
                "value": this.props.monthlyEffortsInHoursCharts.devOpsMonthlyHrs.simple
            },
            
            {
                "group": englishValue('ModerateChart'),
                "key": englishValue('key_Incidents'),
                "value": this.props.monthlyEffortsInHoursCharts.incidentsMonthlyHrs.moderate
            },
            {
                "group": englishValue('ModerateChart'),
                "key": englishValue('key_MinorEnch'),
                "value": this.props.monthlyEffortsInHoursCharts.minorEnhMonthlyHrs.moderate
            },
            {
                "group": englishValue('ModerateChart'),
                "key": englishValue('key_ADCapacity'),
                "value": this.props.monthlyEffortsInHoursCharts.optionalCapacityMonthlyHrs.moderate
            },
            {
                "group": englishValue('ModerateChart'),
                "key": englishValue('Testing'),
                "value": this.props.monthlyEffortsInHoursCharts.testingMonthlyHrs.moderate
            },
            {
                "group": englishValue('ModerateChart'),
                "key": englishValue('key_Testing(addl)'),
                "value": this.props.monthlyEffortsInHoursCharts.additionalTestingMonthlyHrs.moderate
            },
            {
                "group": englishValue('ModerateChart'),
                "key": englishValue('key_Adhoc'),
                "value": this.props.monthlyEffortsInHoursCharts.adhocActivitiesMonthlyHrs.moderate
            },
            {
                "group": englishValue('ModerateChart'),
                "key": englishValue('key_Automation'),
                "value": this.props.monthlyEffortsInHoursCharts.automationMonthlyHrs.moderate
            },
            // UI Issue - SOC and DEVOPS missing in graph and Download data as CSV
            // CMIWET-774
            {
                "group": englishValue('ModerateChart'),
                "key": englishValue('socMonthlyHrs'),
                "value": this.props.monthlyEffortsInHoursCharts.socMonthlyHrs.moderate
            },
            {
                "group": englishValue('ModerateChart'),
                "key": englishValue('devOpsMonthlyHrs'),
                "value": this.props.monthlyEffortsInHoursCharts.devOpsMonthlyHrs.moderate
            },
            {
                "group": englishValue('ModerateChart'),
                "key": englishValue('key_Security'),
                "value": this.props.monthlyEffortsInHoursCharts.securityMonthlyHrs.moderate
            },
            {
                "group": englishValue('ComplexChart'),
                "key": englishValue('key_Incidents'),
                "value": this.props.monthlyEffortsInHoursCharts.incidentsMonthlyHrs.complex
            },
            {
                "group": englishValue('ComplexChart'),
                "key": englishValue('key_MinorEnch'),
                "value": this.props.monthlyEffortsInHoursCharts.minorEnhMonthlyHrs.complex
            },
            {
                "group": englishValue('ComplexChart'),
                "key": englishValue('key_ADCapacity'),
                "value": this.props.monthlyEffortsInHoursCharts.optionalCapacityMonthlyHrs.complex
            },
            {
                "group": englishValue('ComplexChart'),
                "key": englishValue('Testing'),
                "value": this.props.monthlyEffortsInHoursCharts.testingMonthlyHrs.complex
            },
            {
                "group": englishValue('ComplexChart'),
                "key": englishValue('key_Testing(addl)'),
                "value": this.props.monthlyEffortsInHoursCharts.additionalTestingMonthlyHrs.complex
            },
            {
                "group": englishValue('ComplexChart'),
                "key": englishValue('key_Adhoc'),
                "value": this.props.monthlyEffortsInHoursCharts.adhocActivitiesMonthlyHrs.complex
            },
            {
                "group": englishValue('ComplexChart'),
                "key": englishValue('key_Automation'),
                "value": this.props.monthlyEffortsInHoursCharts.automationMonthlyHrs.complex
            },
            {
                "group": englishValue('ComplexChart'),
                "key": englishValue('socMonthlyHrs'),
                "value": this.props.monthlyEffortsInHoursCharts.socMonthlyHrs.complex
            },
            {
                "group": englishValue('ComplexChart'),
                "key": englishValue('devOpsMonthlyHrs'),
                "value": this.props.monthlyEffortsInHoursCharts.devOpsMonthlyHrs.complex
            },
            {
                "group": englishValue('ComplexChart'),
                "key": englishValue('key_Security'),
                "value": this.props.monthlyEffortsInHoursCharts.securityMonthlyHrs.complex
            },
        ],
        options: {
            "title": englishValue('DayComplexityDistributionFunction'),
            "axes": {
                "left": {
                    "mapsTo": "value",
                    "stacked": true
                },
                "bottom": {
                    "mapsTo": "key",
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
