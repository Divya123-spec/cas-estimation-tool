import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import { Download16 } from '@carbon/icons-react';
import { TooltipIcon } from 'carbon-components-react';

// this file code represents the download tooltip in all the charts in data visulazation in application .
let x='';
const ExportChartsData = (props) => {
  // let  data = `Day 1 Complexity Distribution\r\n,Effort In hours (per month),Simple,Moderate,Complex
  //  ${x} ,Total Hours in Scope,${props.monthlyEffortsInHoursCharts.totalHoursInScope.simple},${props.monthlyEffortsInHoursCharts.totalHoursInScope.moderate},${props.monthlyEffortsInHoursCharts.totalHoursInScope.complex}
  // `;
 
  const headers = [
    {label:"Day 1 Complexity Distribution\r\n",key:"DayComplexity"},
    { label: "Effort In hours (per month)", key: "EffortInhours" },
    { label: "Simple", key: "Simple" },
    { label: "Moderate", key: "Moderate" },
    { label: "Complex", key: "Complex" }
  ];
  
  const data = [
    { EffortInhours: "Total Hours in Scope", Simple: props.monthlyEffortsInHoursCharts.totalHoursInScope.simple, Moderate: props.monthlyEffortsInHoursCharts.totalHoursInScope.moderate, Complex: props.monthlyEffortsInHoursCharts.totalHoursInScope.complex },

   ];
  // data = json2csv(arrayOfLiteralObjects);
  return (
    <div className="data">
      <CSVLink data={data} headers={headers}
        filename={'Day1_Complexity_Dtribution.csv'}
      >
        <TooltipIcon tooltipText='Download Data'>
          <Download16 />
        </TooltipIcon>
      </CSVLink>
    </div>
  );
}
export default ExportChartsData;