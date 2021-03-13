import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/testFaciData';
import Markers from './VenueMarkers';

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
      <MapContainer center={currentLocation} zoom={zoom} scrollWheelZoom = {false}>
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

/*   

<Marker position={[10.323176,123.93145]}>
      <Popup>
      Facility Name 1<br />Total Samples Tested:
      </Popup>
      
      </Marker>
      */