import React from 'react';
import './App.css';

function Section({name, total}){
    return(
        <div className="section">
            <h3>{name}</h3>
            <h3>{total}</h3>
        </div>
    )
}

export default Section;