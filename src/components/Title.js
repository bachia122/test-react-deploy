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
        <h1 className="page-title">
          CEBU COVID-19 Tracker &nbsp;
    
            <small> <a href='https://bit.ly/DataDropPH'>Source data</a>  as of { UpdateDate.source_date }</small>
          
        </h1>

     
    
      </div>
    )
  }
  
  export default Title;