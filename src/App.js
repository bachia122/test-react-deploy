import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import TestFaciMap from './components/TestFaciMap';
import Tabs from "./components/Tabs"; 
import Title from "./components/Title"; 
import Logo from './components/Logo';
import Radio from './components/Radio';
import Dashboard from './assets/dashboard';
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
          <h5>Total Cases</h5> {caseCounts.map(count => <div>{count.total}</div>)}  
        </div>

          <div className = 'section'>
          <h5> Active Cases </h5> 
          {caseCounts.map(count => <div>{count.active}</div>)} 
          {caseCounts.map(count => <div>{count.new_today}</div>)} 
        </div>
        
        <div className = 'section'> 
        <h5> Recoveries </h5>
        {caseCounts.map(count => <div>{count.recoveries}</div>)} 
        {caseCounts.map(count => <div>{count.recov_today}</div>)} 
        </div>
        
        <div className = 'section'>  
        <h5> Deaths </h5>
        {caseCounts.map(count => <div>{count.deaths}</div>)}
        {caseCounts.map(count => <div>{count.died_today}</div>)} 
        </div>
 
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
   <Dashboard />
        

        <span>Email me at <a style={{ marginLeft: '.5rem' }}  href="mailto:cebucovidtracker@gmail.com">cebucovidtracker@gmail.com</a></span>
      </div>

    </div>
     
    );



}
export default App;