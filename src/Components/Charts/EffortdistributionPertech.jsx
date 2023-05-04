import React from "react";
import ReactDOM from "react-dom";
import { DonutChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { englishValue } from '../../Utils/CommonFunc'
import { isNaN } from "lodash";

//jira ticket CMIWET-656 - Graph addition for new table Effort distribution by tech on data vizualization
export default class EffortdistributionPertech extends React.Component {



    state = {
        data: this.props.EffortdistributionPertechdata,

        //    numberx: this.props.num,
        options: {
            "title": englishValue('EffortDistributionbyTech.'),
            "resizable": true,

            donut: {

                center: {

                    // "number": "10" + "%",

                    //   "string": "100%",

                    "label": "Total Percentage"

                }

            },
            legend: {
                position: "right"
            },
            height: "400px"
        }
    };


    //         "donut": {
    //             "center": {

    //                 "label": englishValue('TotalDistributionEffort')
    //             }
    //         },
    //         "legend": {
    //             "order": [englishValue('SimpleChart'), englishValue('ModerateChart'), englishValue('ComplexChart')],
    //             // "alignment":"center",
    //             "position": "right"
    //         },
    //         "height": "400px",
    //         "width": "300px"
    //     }
    // };
    render = () => (


        <DonutChart
            data={this.state.data}
            options={this.state.options}>
        </DonutChart>
    );
}
