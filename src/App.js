import React, { useState, useEffect } from 'react';
import Tweet from './Tweet';


  /*
function App(){

  const [users, setUsers] = useState([
    {name:"bern", msg: "sup"},
    {name:"anind", msg: "i'm fat"},
    {name: "mmk", msg: "no couches allowed" }
  ]);

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+2);
    //setRed(true);
    //"!" to opposite value
    setRed(!isRed); */


/*
      /* FETCH DATA FROM JSON FILE */
  const Url = "http://127.0.0.1:5000/api/cases/totalcases";

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
      <div className="App">
        <header className="App-header">
          <h2>Total COVID19 Cases in Cebu </h2>
        </header>
        <div className="user-container">
          <h2>
          {userData.map(user => <div>{user.total}</div>)}
          </h2>
        </div>
        
      </div>
    );

  
    
/*
  return(
    <div className="app">
      {users.map(user => (
        <Tweet name = {user.name} msg={user.msg} />
      ))}
    </div>
  );
/*  return(
    <div className="app"> 
    
     <h2 className={isRed ? 'red' : ''}> change my color </h2>
      <button onClick={increment}>INcrement</button>
      <h1>{count}</h1> -->
    </div>
  );//"jsx"; "?... :..." if-then 
}
*/


}
export default App;