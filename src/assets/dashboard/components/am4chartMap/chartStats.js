import React, { Component, useState, useEffect } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_phHigh from "@amcharts/amcharts4-geodata/philippinesHigh";

import AnimateNumber from 'react-animated-number';
import s from './am4chartMap.module.scss';




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
        <div><h5>{record.top_5}</h5> {record.cases}</div>)}  
      </div>
)};

export default ChartStats;

