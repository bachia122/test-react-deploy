import React, { useState, useEffect } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import '../../App.css'

const BedsStats = () => {

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  async function getData () {
    const response = await fetch('https://cebu-covid-api.herokuapp.com/api/beds/bedoverview');
    const json = await response.json();     
    const data1 = []
    const data2 = []
    data1.push(json[2].o_icu_beds)
    data1.push(json[6].o_nonicu)
    data2.push(json[3].v_icu_beds)
    data2.push(json[7].v_nonicu)
    setData1(data1)
    setData2(data2)
  }; 

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
           stacked: true,
      }],
      yAxes: [{
           stacked: true
      }]
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <HorizontalBar
        data={{labels: ['ICU', 'non-ICU'],
        datasets: [
          {    
            data: data1,
            label: 'occupied',
            backgroundColor: 'rgba(255, 64, 64, 0.5)',
            borderColor: 'rgba(255, 64, 64, 0.5)',
            borderWidth: 1,
            
          },
          {    
            data: data2,
            label: 'vacant',
            backgroundColor: 'rgba(222,235,247,0.5)',
            borderColor: 'rgba(244, 244, 245, 0.2)',
            borderWidth: 1,
            
          }]}}
        options={options}
      />
    </div>
  );
}

export default BedsStats;  


/*

,
          {    
            data: data2,
            backgroundColor: ['rgba(200,176,187,0.33)',
            'rgba(200,176,187,0.33)'],
            borderColor: 'rgba(244, 244, 245, 0.2)',
            borderWidth: 1,
            
          }

import React, { useState, useEffect } from 'react';

import '../App.css'

function BedsStats() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData () {
    const response = await fetch('https://testflask122.herokuapp.com/api/beds/bedoverview');
    const json = await response.json();
    setData(json);
  };


  return (
      <div>
        <h4>ICU BED OCCUPANCY (%)</h4>{data.map(record => <div>{record.pct_icu_occ}</div>)}  
        <h4>NON-ICU BED OCCUPANCY (%)</h4>{data.map(record => <div>{record.pct_nonicu_occ}</div>)}  
        <h5>NO. of Dedicated COVID19 Facilities {data.map(record => <div>{record.num_faci}</div>)}  </h5>
      </div>
)};

export default BedsStats;

*/