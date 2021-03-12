import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2'
import axios from 'axios'

const BarChart = () => {

  const [chartData, setChartData] = useState([]);
  const [dateData, setDateData] = useState([]);
  const [caseData, setCaseData] = useState([]);

  const getChartData = () => {
    let dates = [];
    let casesNew = [];
    let casesDied = [];
/*
    axios.get('http://127.0.0.1:5000/api/cases/all')
    .then(resConf => {
      console.log(resConf);
      {
        resConf.data.map((dataObj) => {
          dates.push(dataObj.DateRepConf);
        })
      }
    })
*/
    axios
    .get('http://127.0.0.1:5000/api/charts?status=NEW')
    .then(resNew => {
      console.log(resNew);
      {
        resNew.data.map((dataObj) => {
          casesNew.push(dataObj.new_cases);
      })}

    axios
    .get('http://127.0.0.1:5000/api/charts?status=DIED')
    .then(resDied => {
      console.log(resDied);
      {
        resDied.data.map((dataObj) => {
          casesDied.push(dataObj.deaths);
          dates.push(dataObj.DateDied);
        })
      }
    }

    )
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
            label: 'Deaths',
            data: casesDied,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderColor: 'white',
    
          }
        ]
      });


    })
    .catch(err =>{
      console.log(err);
    });
    console.log(dates, casesDied)


 
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