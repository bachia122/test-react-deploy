import React, { useState, useEffect } from 'react';
import {Doughnut} from 'react-chartjs-2';
import '../../App.css'

const TestingStat = () => {

  const [data, setData] = useState([]);

  async function getData () {
    const response = await fetch('https://testflask122.herokuapp.com/api/tests/testoverview');
    const json = await response.json();     
    const data = []
    data.push(json[2].total_pos)
    data.push(json[3].total_neg)
    setData(data)
  }; 

    const option = {
      legend:{
        display:true,
        position:'right',
        labels: {
          boxWidth: 12,
          fontStyle: 'bold',
          fontColor: 'rgba(255,255,255,0.8)',
        },
        onClick: (e) => e.stopPropagation() //prevent hiding dataset on click
      },
      cutoutPercentage: 65, // inner radius
      slices: {
        1: {
            offset: 2
        }
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var meta = dataset._meta[Object.keys(dataset._meta)[0]];
            var total = meta.total;
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = parseFloat((currentValue/total*100).toFixed(1));
            return currentValue + ' (' + percentage + '%)';
          },
          title: function(tooltipItem, data) {
            return data.labels[tooltipItem[0].index];
          }
        }
      }
    }
    


  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Doughnut
        data={{labels: ['positive', 'negative'],
        datasets: [
          {    
            data: data,
            backgroundColor: ['#a9d18e','rgba(222,235,247,0.5)'],
            borderColor: 'rgba(244, 244, 245, 0.2)',
            borderWidth: 1,
            hoverOffset: 4,
          }]}}
        options={option}
      />
    </div>
  );
}

export default TestingStat;  