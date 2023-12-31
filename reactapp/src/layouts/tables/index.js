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
import WetherforcastList from "../../layouts/tables/WetherforcastList";
import MDButton from "../../components/MDButton";
import { translateWord  } from "../../locales/HandleLocale";
//import WeatherforecastTableData_V2 from "../../layouts/tables/data/weatherforecastTableData_V2";

function Stuff() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
 //  const { columns: WColumns, rows: WRows } = WeatherforecastTableData_V2;
 const user="menna"
  return (
    <DashboardLayout>
      <DashboardNavbar />
   <Grid container>

<Grid item xs={2}>
<MDButton  variant="gradient" color="info" fullWidth>
                new Stuff
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
              >
                <MDTypography variant="h6" color="white">
                  {translateWord("Stuff")}
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

export default Stuff;
