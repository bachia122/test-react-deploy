import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/testFaciData';
import Markers from '../VenueMarkers';

class TestFaciMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 10.299846294413271,  lng: 123.94660897568372 },
      zoom: 13,
    }
  }
  render() {
    const { currentLocation, zoom } = this.state;
    return (
      <MapContainer style={{ height: "400px", width: "70vw" }} center={currentLocation} zoom={zoom} scrollWheelZoom = {false}>
        <TileLayer
          url="https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=leLR1VA8lmHQnwK3WZM9"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />      
        <Markers venues={data.venues}/>
      </MapContainer>
    );
  }
}
export default TestFaciMap;
