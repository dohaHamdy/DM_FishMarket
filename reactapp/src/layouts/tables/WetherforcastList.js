/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import DataTable from "../../examples/Tables/DataTable";

// Data
import authorsTableData from "../../layouts/tables/data/authorsTableData";
import projectsTableData from "../../layouts/tables/data/projectsTableData";
import { useEffect, useState } from "react";
import { Icon } from "@mui/material";

function WetherforcastList() {
//  const { columns, rows } = authorsTableData();
  const [forecasts, setforecasts]=useState([]);
  const [loading, setloading]=useState(true);
 



  ///////////////////////////
  
  //static displayName = App.name;

   // constructor(props) {
    //    super(props);

   // this.state = { forecasts: [], loading: true };
    //}
useEffect(()=>{
  fetch('weatherforecast')
  .then((response)=>{
    response.json().then((data)=>{
      setforecasts(data);
      setloading(false);
    })
  })

},[])





    var renderForecastsTable= (forecasts)=> {
      console.log("forecasts:",forecasts)
      var  columns=[
        { Header: "id", accessor: "id", width: "30%", align: "left" },
        { Header: "date", accessor: "date", align: "left" },
        { Header: "temperatureC", accessor: "temperatureC", align: "center" },
        { Header: "temperatureF", accessor: "temperatureF", align: "center" },
        { Header: "summary", accessor: "summary", align: "center" },
        { Header: "action", accessor: "action", align: "center" },
      ]

      var  rows=forecasts.map((a)=>{
       return( {
        id: (
            <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
             {a.id}
            </MDTypography>
          ),
          date: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {a.date}
            </MDTypography>
          ),
          temperatureC: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {a.temperatureC}
            </MDTypography>
          ),
          temperatureF: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {a.temperatureF}
            </MDTypography>
          ),
          summary: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {a.summary}
            </MDTypography>
          ),
          action: (
            <MDTypography component="a" href="#" color="text">
              <Icon>more_vert</Icon>
            </MDTypography>
          ),
        })
      })

        return (
          <Grid item xs={12}>
          <Card>
            <MDBox
              mx={2}
              mt={-3}
              py={3}
              px={2}
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
            >
              <MDTypography variant="h6" color="white">
                Authors Table
              </MDTypography>
            </MDBox>
            <MDBox pt={3}>
            
              <DataTable
                table={{ columns, rows }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
                noEndBorder
              />
             
            </MDBox>
          </Card>
        </Grid>

        );
    }

    var contents = loading
    ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See  for more details.</em></p>
    : renderForecastsTable(forecasts);
    

    
    return (
      <>
            {contents}

      </>
    );




}

export default WetherforcastList;
