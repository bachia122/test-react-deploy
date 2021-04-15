import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import paginationFactory from 'react-bootstrap-table2-paginator';
import "./facitable.css"

class FaciTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {}
    };
    this.testnameFilter = null;
    this.citynameFilter = null;
  }

  onTableChange = (type, newState) => {
    this.setState({
      filters: newState.filters
    });
  };

  resetFilters = () => {
    this.testnameFilter("");
    this.citynameFilter("");
  };

  render() {
  const selectTest = {
      "RT-PCR (swab)": "RT-PCR (swab)",
      "RT-PCR (saliva)": "RT-PCR (saliva)",
      "Rapid Antigen" : "Rapid Antigen",
      "Rapid Antibody CLIA" : "Rapid Antibody CLIA",
      "GeneXpert" : "GeneXpert"
    };
  const selectCity = {
    "Cebu City" : "Cebu City",
    "Mandaue City" : "Mandaue City",
    "Lapu-lapu City" : "Lapu-lapu City",
    "Bogo City" : "Bogo City"
  }

  const products = () => {
    const { filters } = this.state;
    let items = require('./faciData.json');

    const testnameFilter = filters.testname ? filters.testname.filterVal : null;
    const citynameFilter = filters.cityname ? filters.cityname.filterVal : null;

    if (testnameFilter) {
      items = items.filter(item => item.testname === testnameFilter);
    }

    if (citynameFilter) {
      items = items.filter(item => item.cityname === citynameFilter);
    }

    return items;
  };

  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      hidden: true,
    },
    {
      dataField: "testname",
      text: "Test Type",
      headerStyle: () => {
        return { width: "20%", textAlign:"center", verticalAlign:"middle" };
      },
      filter: selectFilter({
        style: { backgroundColor: 'rgba(255,255,255, 0.8)', fontSize: '11px', height:'auto' }, // edit
        options: selectTest,
        getFilter: filter => {
          this.testnameFilter = filter;
        }
      })
    },
    {
      dataField: "faci_name",
      text: "Testing Facility",
      sort: true,
      headerStyle: () => {
        return { width: "55%", textAlign:"center", verticalAlign:"middle" };
      }
    },
    {
      dataField: "cityname",
      text: "City",
      headerStyle: () => {
        return { width: "15%", textAlign:"center", verticalAlign:"middle" };
      },
      filter: selectFilter({
        style: { backgroundColor: 'rgba(255,255,255, 0.8)', fontSize: '11px', height:'auto' }, //edit
        options: selectCity,
        getFilter: filter => {
          this.citynameFilter = filter;
        }
      })
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
      headerStyle: () => {
        return { width: "10%", textAlign:"center", verticalAlign:"middle" };
      }
    },      
  ];

  const expandRow = {
    renderer: row => (
      <div className="expander">

        <div className="l-col">
          <p>Address: {`${row.address}`}</p>
          <p>Testing schedule: {`${row.schedule}`}</p>
          <p>{`${row.notes}`} </p>
        </div>
        <div className="r-col">
          <p>Contact: {`${row.contact}`}</p>
          <p><a href={`${row.booking}`} target='_blank'>Book now</a></p>
        </div>
      </div>
    ),
    showExpandColumn: true,
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
      if (isAnyExpands) {
        return <b>-</b>;
      }
      return <b>+</b>;
    },
    expandColumnRenderer: ({ expanded }) => {
      if (expanded) {
        return (
          <b></b>
        );
      }
      return (
        <b></b>
      );
    }
  };


  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      &nbsp; Showing { from } to { to } of { size } Results
    </span>
  );

  const options = {
    paginationSize: 5,
    pageStartIndex: 1,
    alwaysShowAllBtns: false, 
    withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value: 25
    }] 
  };


  
    return (
      <div style={{color:"white"}}>

        <div className="text-right">
        <div className='text-info' onClick={this.resetFilters}>Reset Filters</div></div>
        <BootstrapTable
          //bootstrap4
          keyField="id"
          data={products()}
          columns={columns}
          //size="sm"
          //responsive="sm"
          //striped
          //hover
          condensed
          //variant="dark"
          bordered={ false }
          //headerClasses = "header-class"
          expandRow = { expandRow }
          remote={{ filter: true }}
          onTableChange={this.onTableChange}
          filter={filterFactory()}
          //filterPosition="top"
          pagination={ paginationFactory(options) }
        />
      </div>
    );
  }
}



export default FaciTable;

