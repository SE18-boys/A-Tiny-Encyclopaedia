import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export class EntryDetailRadar extends React.Component{
    componentDidMount() {
        let num = this.props.num;

        let chart = am4core.create("chartdiv", am4charts.RadarChart);

        chart.data=[
            {
                "name": "就诊科室",
                "number": num.department,
            },
            {
                "name": "症状",
                "number": num.symptom,
            },
            {
                "name": "检查",
                "number": num.check,
            },
            {
                "name": "并发症",
                "number": num.accompany,
            },
            {
                "name": "药物",
                "number": num.drug,
            },
            {
                "name": "宜吃食物",
                "number": num.doeat,
            },
            {
                "name": "忌吃食物",
                "number": num.noteat,
            }
        ];

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "name";
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        let series = chart.series.push(new am4charts.RadarSeries());
        series.dataFields.valueY = "number";
        series.dataFields.categoryX = "name";
        series.name = "number";
        series.strokeWidth = 2;

    }

    render() {
        return(
            <div id="chartdiv" style={{width: "100%", height: "500px"}}/>
        )
    }

}
