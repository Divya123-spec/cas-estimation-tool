import React from "react";
import ReactDOM from "react-dom";
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { englishValue } from "../../Utils/CommonFunc";
//import "./styling.scss";

export default class Productivity extends React.Component {
	// Productivity graph on Datavizaulization
	state = {
		data: [
			{
				"group": englishValue('proYoY'),
				"key": "Y1",
				"value": this.props.fiveYearOutputCharts.productivityYoY.productivityYoYForY1
			},
			{
				"group": englishValue('proCumulative'),
				"key": "Y1",
				"value": this.props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY1
			},
			{
				"group": englishValue('proYoY'),
				"key": "Y2",
				"value": this.props.fiveYearOutputCharts.productivityYoY.productivityYoYForY2
			},
			{
				"group": englishValue('proCumulative'),
				"key": "Y2",
				"value": this.props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY2
			},
			{
				"group": englishValue('proYoY'),
				"key": "Y3",
				"value": this.props.fiveYearOutputCharts.productivityYoY.productivityYoYForY3
			},
			{
				"group": englishValue('proCumulative'),
				"key": "Y3",
				"value": this.props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY3
			}, {
				"group": englishValue('proYoY'),
				"key": "Y4",
				"value": this.props.fiveYearOutputCharts.productivityYoY.productivityYoYForY4
			},
			{
				"group": englishValue('proCumulative'),
				"key": "Y4",
				"value": this.props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY4
			},
			{
				"group": englishValue('proYoY'),
				"key": "Y5",
				"value": this.props.fiveYearOutputCharts.productivityYoY.productivityYoYForY5
			},
			{
				"group": englishValue('proCumulative'),
				"key": "Y5",
				"value": this.props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY5
			},

			{
				"group": englishValue('proYoY'),
				"key": "Y6",
				"value": this.props.fiveYearOutputCharts.productivityYoY.productivityYoYForY6
			},
			{
				"group": englishValue('proCumulative'),
				"key": "Y6",
				"value": this.props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY6
			},
			{
				"group": englishValue('proYoY'),
				"key": "Y7",
				"value": this.props.fiveYearOutputCharts.productivityYoY.productivityYoYForY7
			},
			{
				"group": englishValue('proCumulative'),
				"key": "Y7",
				"value": this.props.fiveYearOutputCharts.productivityCumulative.productivityCumulativeForY7
			},



		],

		options: {
			"title": englishValue('Productivity'),
			"axes": {
				"bottom": {
					"title": "FTE/Mnth",
					"mapsTo": "key",
					"scaleType": "labels"
				},
				"left": {
					"mapsTo": "value",
					"title": " (values in %) ",
					"scaleType": "linear"
				}
			},
			"tooltip": {
				"showTotal": false
			},
			// "legend":{
			// 	"alignment":"center",
			// 	// "position":"right"
			// },
			"width": "350px",
			"height": "400px"
		}
	};


	render = () => (
		<LineChart
			data={this.state.data}
			options={this.state.options}>
		</LineChart>
	);
}
//ReactDOM.render(<App />, document.getElementById("root"));