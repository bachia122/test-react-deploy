import React, { Component, useState, useEffect } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_phHigh from "@amcharts/amcharts4-geodata/philippinesHigh";

import AnimateNumber from 'react-animated-number';





function FaciOccupancy() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData () {
    const response = await fetch('https://testflask122.herokuapp.com/api/beds/crit_faci');
    const json = await response.json();
    setData(json);
  };

  return (
      <div>
        <h4>FACILITIES WITH CRITICAL (>=85%) OCCUPANCY</h4>{data.map(record => <div>{record.faci_name}</div>)}
        <h4>FACILITIES WITH SEVERE (70-85%) OCCUPANCY</h4>
        <h4>FACILITIES WITH HIGH (60-70%) OCCUPANCY</h4>  

      </div>
)};

export default FaciOccupancy;

