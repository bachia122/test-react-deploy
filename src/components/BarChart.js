import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2'
import axios from 'axios'
import '../App.css'

const BarChart = () => {

  const [chartData, setChartData] = useState([]);

  const getChartData = () => {
    let newURL = 'https://testflask122.herokuapp.com/api/cases/charts?status=NEW';
    let recovURL = 'https://testflask122.herokuapp.com/api/cases/charts?status=RECOV';
    let diedURL = 'https://testflask122.herokuapp.com/api/cases/charts?status=DIED';
    let aveNewURL = 'https://testflask122.herokuapp.com/api/cases/charts/average';
    let dates = [];
    let casesNew = [];
    let casesDied = [];
    let casesRecov = [];
    let aveNew = [];
    const newReq = axios.get(newURL);
    const recovReq = axios.get(recovURL); 
    const diedReq = axios.get(diedURL);
    const aveNewReq = axios.get(aveNewURL);

    axios
    .all([newReq, recovReq, diedReq, aveNewReq])
    .then(
      axios.spread((...responses) => {
     
        const dataNew = responses[0];
          dataNew.data.forEach((dataObj) => {
            casesNew.push(dataObj.new_cases);
            dates.push(dataObj.DateNewCase);
            });

        const dataRecov = responses[1];
          dataRecov.data.forEach((dataObj) => {
            casesRecov.push(dataObj.recoveries);
            });

        const dataDied = responses[2];
          dataDied.data.forEach((dataObj) => {
            casesDied.push(dataObj.deaths);
            });
          
        const dataAveNew = responses[3];
          dataAveNew.data.forEach((dataObj) => {
            aveNew.push(dataObj.new_ave);
            });
      
        setChartData({
          labels: dates,
          datasets: [
            {    
              label: 'Deaths',
              data: casesDied,
              backgroundColor: 'rgba(75, 192, 192, 0.9)',
              borderColor: 'white',
              hidden: true,
            },
            {    
              label: 'Recoveries',
              data: casesRecov,
              backgroundColor: 'rgba(64, 159, 64, 0.7)',
              borderColor: 'white',
              hidden: true,
            },     
            {    
            label: 'New Cases',
            data: casesNew,
            backgroundColor: 'rgba(255, 64, 64, 0.5)',
            borderColor: 'white',
            },     
            {    
            label: 'New Cases (7 Day Ave.)',
            type: 'line',
            pointStyle: 'line',
            lineTension: 0.8,
            data: aveNew,
            pointRadius: 0, 
            fill: false,
            //backgroundColor: 'rgba(255, 0,0, 0.5)',
            borderColor: 'rgba(252, 86, 86,0.7)',
            borderWidth: 2,
            }
          ]
        });
      })
    )
  };

  
  useEffect(() => {
    getChartData();
  }, []);

  return(
    <div className='timeseries'>
      <Bar
        data={chartData}
        options={{
          legend: {
            position: 'top',
            reverse:true,
            labels: {
              boxWidth: 10,
              fontStyle: 'bold',
              fontColor: 'rgba(255,255,255,0.8)',
              usePointStyle: true,
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales:{
            xAxes: [{ 
              gridLines: {
                display: true ,
                color: 'rgba(255,255,255,0.1)',
              },
              ticks:{
                fontColor: 'rgba(255,255,255,0.4)',
                fontFamily: 'Tahoma',
                maxTicksLimit: 10,
                maxRotation: 0,
                minRotation: 0,
              },
              type: 'time',
              time: { unit: 'month'},
              stacked: true
            }],
            yAxes: [{
              gridLines: {
                display: true ,
                color: 'rgba(255,255,255,0.1)',
              },
              ticks:{
                fontFamily: 'Tahoma',
                beginAtZero: true,
              },
              stacked: false
            }]
          } 
        }}
      />
    </div>
  );
};
  
export default BarChart;