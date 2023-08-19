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
import MDButton from "../../components/MDButton";
import { translateWord  } from "../../locales/HandleLocale";
import { useEffect, useState } from "react";
import BusnissUnitApi from "../../CallingApis/BusnissUnitApi";
//import WeatherforecastTableData_V2 from "../../layouts/tables/data/weatherforecastTableData_V2";




function BusnissUnitList() {

  
  const [RowsData,setRowsData]=useState([])

  const Author = ({  name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
    {/**  <MDAvatar src={image} name={name} size="sm" /> */}
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );
/**
 *  "id": 4,
    "name": "apitest1",
    "ownerName": "apitest1",
    "ownerPhone": "56468454",
    "ownerEmail": "apitest1",
    "ownerSignature": null,
    "ownerProfitPercentage": 50
 */
    useEffect(()=>{
     
      BusnissUnitApi.GetAll()
      .then((response)=>{
        console.log('BusnissUnitApi',response)
        setRowsData(response)
      })
  
    },[])
   
    
    
  const columns=  [
    { Header:  translateWord("name"), accessor: "name", width: "45%", align: "left" },
    { Header: translateWord("owner-name"), accessor: "ownerName", align: "left" },
    { Header: translateWord("owner-phone"), accessor: "ownerPhone", align: "center" },
   // { Header: "Owner Signature", accessor: "ownerSignature", align: "center" },
    { Header: translateWord("owner-profit-percentage"), accessor: "ownerProfitPercentage", align: "center" },
    {  accessor: "action", align: "center" },
  ];

var rows=RowsData.map((row)=> {
  return {
    name:  <Job title={row.name} description="Organization" />,
    ownerName:<Author  name={row.ownerName} email={row.ownerEmail} />,
    ownerPhone: (
    <MDBox ml={-1}>
     {row.ownerPhone}
     {/** <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" /> */}
    </MDBox>
  ),
  ownerProfitPercentage: (
    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    {row.ownerProfitPercentage}%
    </MDTypography>
  ),
  action: (
    <MDTypography component="a" href={"/BusnissUnit/edit/"+row.id}  variant="caption" color="text" fontWeight="medium">
      Edit
    </MDTypography>
  )
  }
})


  return (
    <DashboardLayout>
      <DashboardNavbar />
   <Grid container>

<Grid item xs={2}>
<MDButton  component="a" href="/BusnissUnit/new" size="large"  variant="gradient" color="info" fullWidth  >
{translateWord("insert")}
              </MDButton>

</Grid>
<Grid item xs={10}></Grid>
   </Grid>
    
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
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
                textAlign="center"
              >
                <MDTypography variant="h4" color="white">
                  {translateWord("busniss-units")}
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
         {/*
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
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
                  </Grid>
         <WetherforcastList/>

*/}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default BusnissUnitList;
