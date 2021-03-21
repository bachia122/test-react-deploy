
import React from 'react'
import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";


class ApexChart extends React.Component {



    constructor(props) {
      super(props);

      this.state = {
      
        series: [30 , 67],
        options: {
          chart: {
            height: 100,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              offsetY: 0,
              startAngle: 0,
              endAngle: 270,
              hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  show: true,
                  color: 'white',
                }
              }
            }
          },
          colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
          labels: ['Non-ICU', 'ICU'],
          legend: {
            show: true,
            floating: true,
            fontSize: '12px',
            
            position: 'left',
            offsetX: -40,
            offsetY: -5,
            labels: {
              useSeriesColors: true,
            },
            markers: {
              size: 0
            },
            formatter: function(seriesName, opts) {
              return seriesName 
            },
            itemMargin: {
              vertical: 1
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                  show: false
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
        


  <div id="chart">
<Chart options={this.state.options} series={this.state.series} type="radialBar" height={150} />
</div>
);
}
}


export default ApexChart;