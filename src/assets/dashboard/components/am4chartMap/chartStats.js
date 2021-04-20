import React, { useState, useEffect } from 'react';
import AnimatedNumber from 'react-animated-number';
function ChartStats() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData () {
    const response = await fetch('https://cebu-covid-api.herokuapp.com/api/cases/top5');
    const json = await response.json();
    setData(json);
  };

  return (
      <div>
        <h3>ACTIVE CASES</h3>
        {data.map((record, index) => 
        <div key={index}><h4>{record.top_5}</h4>
        <AnimatedNumber
                value={record.cases}
                initialValue={0}
                duration={1000} 
                stepPrecision={0}
                formatValue={n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
              />
        
         </div>)}  
      </div>
)};

export default ChartStats;

