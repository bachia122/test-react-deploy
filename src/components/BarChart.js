import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2'
import axios from 'axios'

const BarChart = () => {

  const [chartData, setChartData] = useState([]);


  const getChartData = () => {
    let newURL = 'https://testflask122.herokuapp.com/api/charts?status=NEW';
    let recovURL = 'https://testflask122.herokuapp.com/api/charts?status=RECOV';
    let diedURL = 'https://testflask122.herokuapp.com/api/charts?status=DIED';
    let dates = [];
    let casesNew = [];
    let casesDied = [];
    let casesRecov = [];
    const newReq = axios.get(newURL);
    const recovReq = axios.get(recovURL); 
    const diedReq = axios.get(diedURL);

    axios
    .all([newReq, recovReq, diedReq])
    .then(
      axios.spread((...responses) => {

        const dataNew = responses[0];
          dataNew.data.forEach((dataObj) => {
            casesNew.push(dataObj.new_cases);
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
              label: 'New Cases',
              data: casesNew,
              backgroundColor: 'rgba(255, 159, 64, 0.5)',
              borderColor: 'white',
            },
            {    
              label: 'Recoveries',
              data: casesRecov,
              backgroundColor: 'rgba(75, 192, 192, 0.7)',
              borderColor: 'white',
            },
            {    
              label: 'Deaths',
              data: casesDied,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
    <div><Bar
        data={chartData}
        width={900}
        height={500}
        options={{maintainAspectRatio: false,
            scales:{
                xAxes: [{ stacked: true}],
                yAxes: [{
                    ticks:{
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