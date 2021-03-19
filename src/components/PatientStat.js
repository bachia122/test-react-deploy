import React, { Component, useState, useEffect } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_phHigh from "@amcharts/amcharts4-geodata/philippinesHigh";

import AnimateNumber from 'react-animated-number';





function PatientStats() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData () {
    const response = await fetch('https://testflask122.herokuapp.com/api/cases/symptoms');
    const json = await response.json();
    setData(json);
  };

  return (
      <div>
        <h5>ASYMPTOMATIC</h5>{data.map(record => <div>{record.num_asym}</div>)}  
        <h5>MILD</h5>{data.map(record => <div>{record.num_mild}</div>)}  
        <h5>SEVERE</h5>{data.map(record => <div>{record.num_severe}</div>)}  
        <h5>CRITICAL</h5>{data.map(record => <div>{record.num_crit}</div>)}  
      </div>
)};

export default PatientStats;

