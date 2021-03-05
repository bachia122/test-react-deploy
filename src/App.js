import React, { useState } from 'react';
import Tweet from './Tweet'

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