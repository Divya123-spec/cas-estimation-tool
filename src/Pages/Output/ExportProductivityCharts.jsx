import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import { Download16 } from '@carbon/icons-react';
import { TooltipIcon } from 'carbon-components-react';

// This file code represnets the "Productivity" chart in Data Visualization section in application .
const ExportProductivityCharts = (props) => {

    const headers = [
        { label: "Productivity\r\n", key: "Productivity" },
        { label: "FTE Post Productivity", key: "FTEPostProductivity" },
        { label: "FTE/Month - Y1", key: "FTEMonthY1" },
        { label: "FTE/Month - Y2", key: "FTEMonthY2" },
        { label: "FTE/Month - Y3", key: "FTEMonthY3" },
        { label: "FTE/Month - Y4", key: "FTEMonthY4" },
        { label: "FTE/Month - Y5", key: "FTEMonthY5" },
        { label: "FTE/Month - Y6", key: "FTEMonthY6" },
        { label: "FTE/Month - Y7", key: "FTEMonthY7" }

    ];

    const data = [
        { FTEPostProductivity: "YoY Productivity Applied", FTEMonthY1: `${props.fiveYearOutputCharts.productivityYoY.productivityYoYForY1}%`, FTEMonthY2: `${props.fiveYearOutputCharts.productivityYoY.productivityYoYForY2}%`, FTEMonthY3: `${props.fiveYearOutputCharts.productivityYoY.productivityYoYForY3}%`, FTEMonthY4: `${props.fiveYearOutputCharts.productivityYoY.productivityYoYForY4}%`, FTEMonthY5: `${props.fiveYearOutputCharts.productivityYoY.productivityYoYForY5}%`, FTEMonthY6: `${props.fiveYearOutputCharts.productivityYoY.productivityYoYForY6}%`, FTEMonthY7: `${props.fiveYearOutputCharts.productivityYoY.productivityYoYForY7}%` },
        { FTEPostProductivity: "Cumulative Productivity", FTEMonthY1: `${props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY1}%`, FTEMonthY2: `${props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY2}%`, FTEMonthY3: `${props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY3}%`, FTEMonthY4: `${props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY4}%`, FTEMonthY5: `${props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY5}%`, FTEMonthY6: `${props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY6}%`, FTEMonthY7: `${props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY7}%` }
    ];

    return (
        <div className="data">
            <CSVLink data={data} headers={headers}
                filename={'Productivity.csv'}>
                <TooltipIcon tooltipText='Download Data'>
                    <Download16 />
                </TooltipIcon>

            </CSVLink>
        </div>
    );
}
export default ExportProductivityCharts;