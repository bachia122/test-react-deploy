import React, { Component, useState, useEffect } from 'react';






function ChartStats() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData () {
    const response = await fetch('https://testflask122.herokuapp.com/api/cases/top5');
    const json = await response.json();
    setData(json);
  };

  return (
      <div>
        <h3>ACTIVE CASES</h3>
        {data.map(record => 
        <div><h4>{record.top_5}</h4> {record.cases}</div>)}  
      </div>
)};

export default ChartStats;

