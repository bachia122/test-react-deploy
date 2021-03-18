import React, { useState, useEffect } from 'react';
import '../App.css'

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
  <div >

    
 
<div className = 'section'>
        <h5>Total Cases</h5> {caseCounts.map(count => <div>{count.total}</div>)}  
      </div>

        <div className = 'section'>
        <h5> Active Cases </h5> 
        {caseCounts.map(count => <div className='text-danger'>{count.active}</div>)} 
        {caseCounts.map(count => <div className='text-danger'>{count.new_today}</div>)} 
      </div>
      
      <div className = 'section'> 
      <h5> Recoveries </h5>
      {caseCounts.map(count => <div className='text-success'>{count.recoveries}</div>)} 
      {caseCounts.map(count => <div className='text-success'> {count.recov_today}</div>)} 
      </div>
      
      <div className = 'section'>  
      <h5> Deaths </h5>
      {caseCounts.map(count => <div className='text-info'>{count.deaths}</div>)}
      {caseCounts.map(count => <div className='text-info'>{count.died_today}</div>)} 
      </div>
    

 </div>

    

   

 
  );



}
export default App;

