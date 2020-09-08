import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_sunburst from "@amcharts/amcharts4/plugins/sunburst";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export class AuditSunburst extends React.Component{
    constructor() {
        super();
        this.state = {
            UnauditedNum : 0,
            ApprovedNum : 0,
            DisapprovingNum : 0,
        }
    }

    componentDidMount() {
        let u = this.props.Unaudited;
        let a = this.props.Approved;
        let d = this.props.Disapproving;
        this.setState({
            UnauditedNum: u,
            ApprovedNum: a,
            DisapprovingNum: d,
        });

        let chart = am4core.create("chartdiv", am4plugins_sunburst.Sunburst);

        chart.radius = am4core.percent(100);

        chart.data = [
            {
                name: "待审核",
                value: u,
                color: "grey",
            },
            {
                name: "未审核",
                children: [
                    {name: "已通过", value: a, color: "#90EE90"},
                    {name: "未通过", value: d, color: "#ff6f60"},
                ]
            }
        ];

        chart.dataFields.value = "value";
        chart.dataFields.name = "name";
        chart.dataFields.children = "children";
        chart.dataFields.color = "color";
    }

    render() {
        return(
            <div id="chartdiv" style={{width: "100%", height: "500px"}}/>
        )
    }
}
