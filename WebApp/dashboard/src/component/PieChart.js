import React, { Component } from 'react';
import CanvasJSReact from '../lib/canvasjs.react'

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {

    constructor(props) {
      super(props);
    }

    render() {

      const dataPoints = []

      this.props.dataPoints.forEach(element => {
        const label = Object.keys(element)[0];
        let datay = Object.values(element)[0];
        const y = (datay*100).toFixed(2);
        const dataPoint = {label, y};
        dataPoints.push(dataPoint);
      });

      const options = {
        animationEnabled: true,
        backgroundColor: null,
        title: {
          text: "Top 15 factors affecting your consumption",
          fontColor: "black"
        },
        height: 400,
        axisY: {
          gridThickness: 0,
        },
        axisX: {
          interval: 1,
        },
        data: [{				
          type: "pie",
          indexLabel: "{label}: {y}%",
          indexLabelFontColor: "DarkSlateGray",
          legendText: "{label}",
          showInLegend: true,
          dataPoints
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options = {options}/>
        </div>
      );
    }
  }

export default PieChart;