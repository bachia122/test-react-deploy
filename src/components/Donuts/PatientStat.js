import React, { useState, useEffect } from 'react';
import {Doughnut} from 'react-chartjs-2';
import '../../App.css'

const PatientStat = () => {

  const [data, setData] = useState([]);

  async function getData () {
    const response = await fetch('https://cebu-covid-api.herokuapp.com/api/cases/symptoms');
    const json = await response.json();     
    const data = []
    data.push(json[1].num_asym)
    data.push(json[2].num_mild)
    data.push(json[3].num_severe)
    data.push(json[4].num_crit)
    setData(data)
  }; 

    const option = {
      maintainAspectRatio: false,
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
        data={{labels: ['asymp.', 'mild', 'severe', 'critical'],
        datasets: [
          {    
            data: data,
            backgroundColor: ['rgba(234,242,251,0.5)', 'rgb(100,148,204)', 'rgb(40,90,150)', 'rgb(30,60,90)'],
            borderColor: 'rgba(244, 244, 245, 0.2)',
            borderWidth: 1,
          }
        ]}}
        options={option}
      />
    </div>
  );
  
}

export default PatientStat;  