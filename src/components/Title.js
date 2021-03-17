import React, { useState, useEffect }  from 'react';

const Url = "https://testflask122.herokuapp.com/api/dates";



function Title() {

  const [UpdateDate, setUpdateDate] = useState([]);
  
    useEffect(() => {
      getDataWithFetch();
    }, []);
  
    const getDataWithFetch = async () => {
      const response = await fetch(Url);
      const json = await response.json();
      setUpdateDate(json);
      console.log("result =", json);
    };
    return (
      <div >

     <h1>CEBU COVID19 TRACKER</h1>

      <a href='https://bit.ly/DataDropPH'>Source</a> data as of { UpdateDate.source_date }
    
      </div>
    )
  }
  
  export default Title;