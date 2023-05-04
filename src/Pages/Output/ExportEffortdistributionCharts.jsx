import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import { Download16 } from '@carbon/icons-react';
import { TooltipIcon } from 'carbon-components-react';

// This file code represnets the "Effort Distribution by Tech." chart in Data Visualization section in application.
//jira ticket CMIWET-656 - Graph addition for new table Effort distribution by tech 
let x = '';
const ExportEffortdistributionCharts = (props) => {
    // let  data = `Day 1 Complexity Distribution\r\n,Effort In hours (per month),Simple,Moderate,Complex
    //  ${x} ,Total Hours in Scope,${props.monthlyEffortsInHoursCharts.totalHoursInScope.simple},${props.monthlyEffortsInHoursCharts.totalHoursInScope.moderate},${props.monthlyEffortsInHoursCharts.totalHoursInScope.complex}
    // `;

    const headers = [
        { label: "Effort Distribution by Tech.\r\n", key: "EffortDistributionbyTech." },
        { label: "Secondary Technology", key: "SecondaryTechnology" },
        { label: "Distribution Effort", key: "DistributionEffort" },

    ];

    let data = props.EffortdistributionPertechdata1;

    let data1 = data.push({ SecondaryTechnology: "Total", DistributionEffort: `${(100)}%` });

    // data = json2csv(arrayOfLiteralObjects);
    return (
        <div className="data">
            <CSVLink data={data} headers={headers}
                filename={'EffortdistributionPertech.csv'}
            >
                <TooltipIcon tooltipText='Download Data'>
                    <Download16 />
                </TooltipIcon>
            </CSVLink>
        </div>
    );
}
export default ExportEffortdistributionCharts;