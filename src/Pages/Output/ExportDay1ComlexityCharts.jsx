import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import { Download16 } from '@carbon/icons-react';
import { TooltipIcon } from 'carbon-components-react';

// This file code represnets the "Day 1 Complexity Distribution by Function" chart in Data Visualization section in application .

const ExportDay1ComlexityCharts = (props) => {

    const headers = [
        { label: "Day 1 Complexity Distribution by Function\r\n", key: "DayComplexityFunction" },
        { label: "Effort In hours (per month)", key: "EffortInhours" },
        { label: "Simple", key: "Simple" },
        { label: "Moderate", key: "Moderate" },
        { label: "Complex", key: "Complex" }
    ];

    const data = [
        { EffortInhours: "Incidents", Simple: props.monthlyEffortsInHoursCharts.incidentsMonthlyHrs.simple, Moderate: props.monthlyEffortsInHoursCharts.incidentsMonthlyHrs.moderate, Complex: props.monthlyEffortsInHoursCharts.incidentsMonthlyHrs.complex },
        { EffortInhours: "Minor Enhancements", Simple: props.monthlyEffortsInHoursCharts.minorEnhMonthlyHrs.simple, Moderate: props.monthlyEffortsInHoursCharts.minorEnhMonthlyHrs.moderate, Complex: props.monthlyEffortsInHoursCharts.minorEnhMonthlyHrs.complex },
        { EffortInhours: "AD Capacity (Additional)", Simple: props.monthlyEffortsInHoursCharts.optionalCapacityMonthlyHrs.simple, Moderate: props.monthlyEffortsInHoursCharts.optionalCapacityMonthlyHrs.moderate, Complex: props.monthlyEffortsInHoursCharts.optionalCapacityMonthlyHrs.complex },
        { EffortInhours: "Testing (included in solution)", Simple: props.monthlyEffortsInHoursCharts.testingMonthlyHrs.simple, Moderate: props.monthlyEffortsInHoursCharts.testingMonthlyHrs.moderate, Complex: props.monthlyEffortsInHoursCharts.testingMonthlyHrs.complex },
        { EffortInhours: "Testing (Additional)", Simple: props.monthlyEffortsInHoursCharts.additionalTestingMonthlyHrs.simple, Moderate: props.monthlyEffortsInHoursCharts.additionalTestingMonthlyHrs.moderate, Complex: props.monthlyEffortsInHoursCharts.additionalTestingMonthlyHrs.complex },
        { EffortInhours: "Adhoc", Simple: props.monthlyEffortsInHoursCharts.adhocActivitiesMonthlyHrs.simple, Moderate: props.monthlyEffortsInHoursCharts.adhocActivitiesMonthlyHrs.moderate, Complex: props.monthlyEffortsInHoursCharts.adhocActivitiesMonthlyHrs.complex },

        { EffortInhours: "Automation", Simple: props.monthlyEffortsInHoursCharts.automationMonthlyHrs.simple, Moderate: props.monthlyEffortsInHoursCharts.automationMonthlyHrs.moderate, Complex: props.monthlyEffortsInHoursCharts.automationMonthlyHrs.complex },
            // UI Issue - SOC and DEVOPS missing in graph and Download data as CSV
            // CMIWET-774
        { EffortInhours: "SOC", Simple: props.monthlyEffortsInHoursCharts.socMonthlyHrs.simple, Moderate: props.monthlyEffortsInHoursCharts.socMonthlyHrs.moderate, Complex: props.monthlyEffortsInHoursCharts.socMonthlyHrs.complex },
        { EffortInhours: "DevOps", Simple: props.monthlyEffortsInHoursCharts.devOpsMonthlyHrs.simple, Moderate: props.monthlyEffortsInHoursCharts.devOpsMonthlyHrs.moderate, Complex: props.monthlyEffortsInHoursCharts.devOpsMonthlyHrs.complex },
        { EffortInhours: "Security", Simple: props.monthlyEffortsInHoursCharts.securityMonthlyHrs.simple, Moderate: props.monthlyEffortsInHoursCharts.securityMonthlyHrs.moderate, Complex: props.monthlyEffortsInHoursCharts.securityMonthlyHrs.complex },

    ];

    return (
        <div className="data">
            <CSVLink data={data} headers={headers}
                filename={'Day1_Complexity_Distribution_Function.csv'}
            >
                <TooltipIcon tooltipText='Download Data'>
                    <Download16 />
                </TooltipIcon>

            </CSVLink>
        </div>
    );
}
export default ExportDay1ComlexityCharts;;