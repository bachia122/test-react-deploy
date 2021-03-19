import React, { Component, useState, useEffect } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_phHigh from "@amcharts/amcharts4-geodata/philippinesHigh";

import AnimateNumber from 'react-animated-number';





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

