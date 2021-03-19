import React, { Component, useState, useEffect } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_phHigh from "@amcharts/amcharts4-geodata/philippinesHigh";
import ChartStats from "./chartStats"
import AnimateNumber from 'react-animated-number';
import s from './am4chartMap.module.scss';



class Am4chartMap extends Component {
  
  
  async componentDidMount() {    
    

    
    const Url = 'https://testflask122.herokuapp.com/api/cases/casebycitymun';
    const response = await fetch(Url);
    const cities = await response.json();
    console.log(cities);



    let map = am4core.create("map", am4maps.MapChart);
    map.geodata = am4geodata_phHigh; 
    map.geodataSource.url = 'https://api.maptiler.com/data/ae68c8c7-5a03-4882-a5ce-f52afd8514ff/features.json?key=leLR1VA8lmHQnwK3WZM9'; 
    map.percentHeight = 100;
    map.dy = 10;
    map.projection = new am4maps.projections.Mercator();
    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    map.homeZoomLevel = 1; 
    map.homeGeoPoint = { latitude: 12.5, longitude: 119.9 }
    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.layout = 'horizontal';
    map.zoomControl.align = 'left';
    map.zoomControl.valign = 'bottom';
    map.zoomControl.dy = -30;
    map.zoomControl.dx = 10;
    map.zoomControl.contentHeight = 20;
    map.zoomControl.minusButton.background.fill = am4core.color("rgba(229, 249, 255, 0.74)");
    map.zoomControl.minusButton.background.stroke = am4core.color("#e5f9ff");
    map.zoomControl.minusButton.label.fontWeight = 600;
    map.zoomControl.minusButton.label.fontSize = 22;
    map.zoomControl.minusButton.scale = .75;
    map.zoomControl.minusButton.label.scale = .75;
    map.zoomControl.plusButton.background.fill = am4core.color("rgba(229, 249, 255, 0.74)");
    map.zoomControl.plusButton.background.stroke = am4core.color("#e5f9ff");
    map.zoomControl.plusButton.label.fontWeight = 600;
    map.zoomControl.plusButton.label.fontSize = 22;
    map.zoomControl.plusButton.label.align = "center";
    map.zoomControl.plusButton.scale = .75;
    map.zoomControl.plusButton.label.scale = .75;
    map.zoomControl.plusButton.dx = 5;
    map.chartContainer.wheelable = true; 
    let plusButtonHoverState = map.zoomControl.plusButton.background.states.create("hover");
    plusButtonHoverState.properties.fill = am4core.color("#354D84");
    let minusButtonHoverState = map.zoomControl.minusButton.background.states.create("hover");
    minusButtonHoverState.properties.fill = am4core.color("#354D84");
    let polygonTemplate = polygonSeries.mapPolygons.template;
    //polygonTemplate.tooltipText = "{name}"; 
    polygonTemplate.fill = am4core.color("rgba(79, 171, 167, 0.21)"); // fill 
    polygonTemplate.stroke = am4core.color("rgba(244, 244, 245, 0.2)") // borders
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("rgba(12, 49, 47, 0.92))"); // fill on hover
    let citySeries = map.series.push(new am4maps.MapImageSeries());
    citySeries.data = cities;
    citySeries.dataFields.value = "size"; 
    let city = citySeries.mapImages.template;
    city.nonScaling = true;
    city.propertyFields.latitude = "latitude";
    city.propertyFields.longitude = "longitude";
    let circle = city.createChild(am4core.Circle);
    circle.fill = am4core.color("rgba(255, 0, 0, 0.25);"); // circle color
    circle.strokeWidth = 0;
    let circleHoverState = circle.states.create("hover");
    circleHoverState.properties.strokeWidth = 1;
    circle.tooltipText = `[bold]{CityMunRes}[/]
    Active Cases: {local_cases}`; //tooltip
    //circle.tooltipPointerOrientation = "vertical";
    circle.propertyFields.radius = 'size'; // "size"
    this.map = map;
  }

  componentWillUnmount() {
    if(this.map) {
      this.map.dispose();
    }
  }

  render() {
    return (
      <div className={s.mapChart}>
        <div className={s.stats}>

          <ChartStats />
         
        </div>
        <div className={s.map} id="map">
          <span>Loading map</span>
        </div>
      </div>
    );
  }
}

export default Am4chartMap;


/*
 <h6 className="mt-1">NEW CASES AS OF //DATE// (not updated) </h6>
          <p className="h3 m-0">
            <span className="mr-xs fw-normal">
              <AnimateNumber
                value={261}
                initialValue={0}
                duration={1000} 
                stepPrecision={0}
                formatValue={n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
              /></span>
            <i className="fa fa-map-marker" />
          </p>
*/