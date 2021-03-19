import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2'
import axios from 'axios'
import '../App.css'

const BarChart = () => {

  const [chartData, setChartData] = useState([]);


  const getChartData = () => {
    let activeURL = 'https://testflask122.herokuapp.com/api/cases/charts?status=ACTIVE';
    let recovURL = 'https://testflask122.herokuapp.com/api/cases/charts?status=RECOV';
    let diedURL = 'https://testflask122.herokuapp.com/api/cases/charts?status=DIED';
    let dates = [];
    let casesActive = [];
    let casesDied = [];
    let casesRecov = [];
    const activeReq = axios.get(activeURL);
    const recovReq = axios.get(recovURL); 
    const diedReq = axios.get(diedURL);

    axios
    .all([activeReq, recovReq, diedReq])
    .then(
      axios.spread((...responses) => {

        const dataActive = responses[0];
          dataActive.data.forEach((dataObj) => {
            casesActive.push(dataObj.active_cases);
            dates.push(dataObj.DateRepConf);
            });
     
        const dataRecov = responses[1];
          dataRecov.data.forEach((dataObj) => {
            casesRecov.push(dataObj.recoveries);
            });

        const dataDied = responses[2];
          dataDied.data.forEach((dataObj) => {
            casesDied.push(dataObj.deaths);
            });
      
        setChartData({
          labels: dates,
          datasets: [
            {    
              label: 'Active Cases',
              data: casesActive,
              backgroundColor: 'rgba(255, 64, 64, 0.7)',
              borderColor: 'white',
            },
            {    
              label: 'Recoveries',
              data: casesRecov,
              backgroundColor: 'rgba(64, 159, 64, 0.7)',
              borderColor: 'white',
            },
            {    
              label: 'Deaths',
              data: casesDied,
              backgroundColor: 'rgba(75, 192, 192, 0.9)',
              borderColor: 'white',
            }
          ]});
      })
    )
  };

  
  useEffect(() => {
    getChartData();
  }, []);

    return(
    <div className='timeseries'><Bar
        data={chartData}
        //width={700}
        //height={200}
        options={{
          legend: {
            position: 'top',
            labels: {
              boxWidth: 20,
              fontStyle: 'bold',
              fontColor: 'rgba(255,255,255,0.8)',
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
                  }
                ]
            } }}
    />
    </div>
    
    );
};
 
  
export default BarChart;