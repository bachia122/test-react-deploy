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
    <div className='col1' style={{textAlign: 'center'}}>

      <div className = 'lead'>
        <h4>Total Cases</h4> {caseCounts.map(count => <div>{count.total}</div>)}  
      </div>

      <div className ='lead'>
        <h4> Active </h4> 
        {caseCounts.map(count => <div className='text-danger'>{count.active}</div>)} 
        <div className='text-danger'>+{caseCounts.map(count => <>{count.new_today}</>)} </div>
      </div>
      
      <div className = 'lead'> 
        <h4> Recoveries </h4>
        {caseCounts.map(count => <div className='text-success'>{count.recoveries}</div>)} 
      </div>
      
      <div className = 'lead'>  
        <h4> Deaths </h4>
        {caseCounts.map(count => <div className='text-info'>{count.deaths}</div>)}
      </div>
    </div> 
  );
}
export default App;

