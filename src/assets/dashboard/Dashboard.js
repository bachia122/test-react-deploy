import React from "react";
import { Row, Col } from "reactstrap";
import Widget from "./components/Widget";
import Map from "./components/am4chartMap/am4chartMap";
import BarChart from "../../components/BarChart"
import Overview from "../../components/Overview"
import Title from "../../components/Title"
import TestingStat from "../../components/Donuts/TestingStat"
import BedsStats from "../../components/Donuts/BedsStat"
import PatientStats from "../../components/Donuts/PatientStat"
import FaciTable from '../../components/FaciTable/FaciTable'
import s from "./Dashboard.module.scss";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
    };
    this.checkTable = this.checkTable.bind(this);
  }

  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <Title />
        
        <Col lg={6}>

          <Row className="row justify-content-center"> 
            <Col lg={3}>
                <Widget
                  className="bg-transparent"
                  title={<h3 className='card-title'>OVERVIEW</h3>}>
                  <Overview />
                </Widget>
            </Col>
            <Col lg={9}>
              <Widget className="bg-transparent" >
                <Map />
              </Widget>
            </Col>
          </Row>

          <Row>
            <Widget className="bg-transparent" title={<h3 className='card-title'> TIME SERIES </h3> }>
                <BarChart />
            </Widget>
          </Row>

        </Col>

        <Col lg={6}>

            <Row> 
              <Widget className="bg-transparent" style={{"padding-bottom": "10px"}}>
                <Col lg={4} >
                  <h3 className='card-title'> TESTING STATS</h3>
                  <TestingStat />
                </Col>
                <Col lg={4}>
                  <h3 className='card-title'> ADMITTED PATIENTS </h3>
                    <PatientStats />
                </Col>
                <Col lg={4}>
                  <h3 className='card-title'> BED OCCUPANCY  </h3> 
                  <BedsStats />
                </Col>
              </Widget>
            </Row>

            <Row>
                <Widget className="bg-transparent" title={<h3 className='card-title'> Testing Facilities </h3> }>
                  <FaciTable />
                </Widget>
            </Row>
            <div className="text-center">
                  <a href="mailto:cebucovidtracker@gmail.com">Report an issue</a> &nbsp;
                  <a href="https://testflask122.herokuapp.com/"> Visit the API </a>
            </div>
        </Col>

      </div>
    );
  }
}

export default Dashboard;


