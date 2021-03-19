import React, { Component, useState, useEffect } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_phHigh from "@amcharts/amcharts4-geodata/philippinesHigh";

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
      <div>
        <h4>TOTAL INDIVIDUALS TESTED</h4>{data.map(record => <div>{record.total_indv_test}</div>)}  
        <h5>NO. of Test Labs {data.map(record => <div>{record.test_labs}</div>)}  </h5>
        
        <p></p>
        <h4>DAILY TALLY </h4>
        
        <h5>NEWLY TESTED </h5>{data.map(record => <div>{record.new_indv_test}</div>)}  
        <h5>NUMBER OF CONFIRMED POSITIVE </h5>{data.map(record => <div>{record.pos_indv_test}</div>)}  
        <h5>COVID19 POSITIVITY RATE</h5>{data.map(record => <div>{record.pct_pos}</div>)} % 
        <h5>AVAILABLE TESTS REMAINING</h5>{data.map(record => <div>{record.remaining_tests}</div>)}
        <p></p>
        as of {data.map(record => <div>{record.date_reported}</div>)}
      </div>
)};

export default TestStats;

