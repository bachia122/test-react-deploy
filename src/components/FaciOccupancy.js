import React, { Component, useState, useEffect } from 'react';
import '../App.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion';
import AnimateNumber from 'react-animated-number';


function FaciOccupancy() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData () {
    const response = await fetch('https://testflask122.herokuapp.com/api/beds/crit_faci');
    const json = await response.json();
    setData(json);
  };

  return (
      <div>

<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <h4>FACILITIES WITH CRITICAL (>=85%) OCCUPANCY</h4>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>{data.map(record => <div><li>{record.faci_name}</li></div>)}</Card.Body>
    </Accordion.Collapse>
  </Card>
  
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      <h4>FACILITIES WITH SEVERE (70-85%) OCCUPANCY</h4>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>placeholder</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
      <h4>FACILITIES WITH HIGH (60-70%) OCCUPANCY</h4> 
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>placeholder</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        
        
         

      </div>
)};

export default FaciOccupancy;

