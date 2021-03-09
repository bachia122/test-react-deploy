import React, { useState, useEffect } from 'react';
import './App.css';

  const Url = "https://testflask122.herokuapp.com/api/cases/totalcases";

  function App() {
    const [userData, setUserData] = useState([]);
  
    useEffect(() => {
      getDataWithFetch();
    }, []);
  
    const getDataWithFetch = async () => {
      const response = await fetch(Url);
      const json = await response.json();
      setUserData(json);
      console.log("result =", json);
    };

    return (
      <div className="app">
    
          <h2>Total COVID19 Cases in Cebu </h2>
     
        <div className="tweet">
          <h2>
          {userData.map(user => <div>{user.total}</div>)}
          </h2>
        </div>
        
      </div>
    );



}
export default App;