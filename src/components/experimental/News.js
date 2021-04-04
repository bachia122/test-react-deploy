import React, { useState, useEffect } from 'react';

function News () {
    const [data, setData] = useState([]);

    useEffect(() => {
      getData();
    }, []);

    async function getData () {
        const Url = 'https://testflask122.herokuapp.com/api/news';
        const response = await fetch(Url);
        const data = await response.json();
        setData(data);
    }
    
    return (
        <div>
            <ul>{data.map(record => <li><a href={record.link} target='_blank'>{record.title}</a></li>)}
            </ul>
        </div>
    );
}


export default News;