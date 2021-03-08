import React, { useState, useEffect } from 'react';
import Tweet from './Tweet'
/*
function App(){

  const [users, setUsers] = useState([
    {name:"bern", msg: "sup"},
    {name:"anind", msg: "i'm fat"},
    {name: "mmk", msg: "no couches allowed" }
  ]);
  /*
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+2);
    //setRed(true);
    //"!" to opposite value
    setRed(!isRed); */



      /* FETCH DATA FROM JSON FILE */
  const gitHubUrl = "https://cors-anywhere.herokuapp.com/https://testflask122.herokuapp.com/api/cases/totalcases";

  function App() {
    const [userData, setUserData] = useState({});
  
    useEffect(() => {
      getGitHubUserWithFetch();
    }, []);
  
    const getGitHubUserWithFetch = async () => {
      const response = await fetch(gitHubUrl);
      const jsonData = await response.json();
      setUserData(jsonData);
    };
  
    
  
    return (
      <div className="App">
        <header className="App-header">
          <h2>GitHub User Data</h2>
        </header>
        <div className="user-container">
          <h5 className="info-item">{userData.total}</h5>
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