/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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


// Material Dashboard 2 React components
import { useState, useEffect, useMemo } from "react";


import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDAvatar from "../../../components/MDAvatar";
import MDBadge from "../../../components/MDBadge";

// Images
import team2 from "../../../assets/images/team-2.jpg";
import team3 from "../../../assets/images/team-3.jpg";
import team4 from "../../../assets/images/team-4.jpg";

const WetherforecastTableData=()=> {
    const [rowstemp, setrowstemp] = useState([]);
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
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

    useEffect(() => {
      
        async function fetch() {
          let Rowtemp=[];
            var response = await fetch('weatherforecast')
            var Rowsdata = await response.json()
            console.log("Rowsdata: ",Rowsdata)
            Rowsdata.forEach(element => {
              Rowtemp.push({
                ID: <Author image={team2} name={element.ID} email={element.ID} />,
                Date: <Job title="Manager" description="Organization" />,
                TemperatureC: (
                    <MDBox ml={-1}>
                        <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
                    </MDBox>
                ),
                TemperatureF: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        23/04/18
                    </MDTypography>
                ),
                Summary: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        23/04/18
                    </MDTypography>
                ),
                action: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        Edit
                    </MDTypography>
                ),
            })
            });
            
            setrowstemp(Rowtemp)
        };
         fetch();

    }, [])
   


    return {
        columns: [

            { Header: "ID", accessor: "ID", width: "45%", align: "left" },
            { Header: "Date", accessor: "Date", align: "left" },
            { Header: "TemperatureC", accessor: "TemperatureC", align: "center" },
            { Header: "TemperatureF", accessor: "TemperatureF", align: "center" },
            { Header: "Summary", accessor: "Summary", align: "center" },
            { Header: "action", accessor: "action", align: "center" },
        ],

        rows: rowstemp,
    };
}

export default WetherforecastTableData
