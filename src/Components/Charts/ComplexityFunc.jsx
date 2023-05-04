import React from "react";
import ReactDOM from "react-dom";
import { DonutChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { englishValue } from '../../Utils/CommonFunc'
import '../Charts/charts.scss'

export default class ComplexityFunc extends React.Component {
    //Day 1 Complexity Distribution chart on data vizualization
    state = {
        data: [
            {
                "group": englishValue('SimpleChart'),
                "value": this.props.monthlyEffortsInHoursCharts.totalHoursInScope.simple
            },
            {
                "group": englishValue('ModerateChart'),
                "value": this.props.monthlyEffortsInHoursCharts.totalHoursInScope.moderate
            },
            {
                "group": englishValue('ComplexChart'),
                "value": this.props.monthlyEffortsInHoursCharts.totalHoursInScope.complex
            },
        ],
        options: {
            "title": englishValue('Day1ComplexityFunction'),
            "resizable": true,
            "donut": {
                "center": {
                    "label": englishValue('EffHours')
                }
            },
            "legend": {
                "order": [englishValue('SimpleChart'), englishValue('ModerateChart'), englishValue('ComplexChart')],
                // "alignment":"center",
                // // "position":"right"
            },
            "height": "400px",
            "width": "300px"
        }
    };
    render = () => (
        <DonutChart
            data={this.state.data}
            options={this.state.options}>
        </DonutChart>
    );
}
