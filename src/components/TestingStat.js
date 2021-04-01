import React, { Component, useState, useEffect } from 'react';
import '../App.css'

import AnimateNumber from 'react-animated-number';





function TestStats() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData () {
    const response = await fetch('https://testflask122.herokuapp.com/api/tests/testoverview');
    const json = await response.json();
    setData(json);
  };

  return (
      <div className = 'test-stats'>
      
        <h5>NO. of Test Labs {data.map(record => <div>{record.test_labs}</div>)}  </h5>
        
        <p></p>
        <h3>DAILY STATS </h3>
        
        <h5>NEWLY TESTED </h5>{data.map(record => <div>{record.new_indv_test}</div>)}  
        <h5>NUMBER OF CONFIRMED POSITIVE </h5>{data.map(record => <div>{record.pos_indv_test}</div>)}  
        <h5>COVID19 POSITIVITY RATE</h5>{data.map(record => <b>{record.pct_pos}</b>)} % 
        <h5>AVAILABLE TESTS REMAINING</h5>{data.map(record => <div>{record.remaining_tests}</div>)}
        <p></p>
        as of {data.map(record => <b>{record.date_reported}</b>)}
      </div>
)};

export default TestStats;

