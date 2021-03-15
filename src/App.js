import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import TestFaciMap from './components/TestFaciMap';
import Tabs from "./components/Tabs"; 
import Title from "./components/Title"; 
import Logo from './components/Logo';
import './App.css';
import './index.css';
import 'leaflet/dist/leaflet.css';

  const Url = "https://testflask122.herokuapp.com/api/cases/totals";

  function App() {
    const [caseCounts, setCaseCounts] = useState([]);
  
    useEffect(() => {
      getDataWithFetch();
    }, []);
  
    const getDataWithFetch = async () => {
      const response = await fetch(Url);
      const json = await response.json();
      setCaseCounts(json);
      console.log("result =", json);
    };

    return (

      <div className="app">
        <Logo className="App-logo" />
        <Title className="Title" />

        <div className = 'section'>
          Total Cases {caseCounts.map(count => <div>{count.total}</div>)}  </div>
          <div className = 'section'>
          Active Cases {caseCounts.map(count => <div>{count.active}</div>)} 
        </div>
        
        <div className = 'section'> Recoveries
        {caseCounts.map(count => <div>{count.recoveries}</div>)} </div>
        <div className = 'section'>  Deaths
        {caseCounts.map(count => <div>{count.deaths}</div>)}</div>
 
      <div >
     
        <Tabs> 
          <div label="BarChart"> 
            <h4>Daily Incidences Chart</h4>
            <BarChart /> 
          </div> 
          <div label="Map"> 
          <h4>COVID19 Testing Facilities in Cebu</h4>
            <TestFaciMap />    
          </div>
        </Tabs> 
   
        

        <span>Email me at <a style={{ marginLeft: '.5rem' }}  href="mailto:cebucovidtracker@gmail.com">cebucovidtracker@gmail.com</a></span>
      </div>

    </div>
     
    );



}
export default App;