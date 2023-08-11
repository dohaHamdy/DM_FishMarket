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
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDAvatar from "../../../components/MDAvatar";
import MDBadge from "../../../components/MDBadge";

// Images
import team2 from "../../../assets/images/team-2.jpg";
import team3 from "../../../assets/images/team-3.jpg";
import team4 from "../../../assets/images/team-4.jpg";

export default function data() {
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

  return {
    columns: [
      { Header: "stuff", accessor: "stuff", width: "45%", align: "left" },
      { Header: "stuff group", accessor: "stuffgroup", align: "left" },
      { Header: "phone", accessor: "phone", align: "center" },
      { Header: "default salary ", accessor: "defaultsalary", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        stuff: <Author  name="John Michael" email="john@creative-tim.com" />,
        stuffgroup: <Job title="Manager" description="Organization" />,
        phone: (
          <MDBox ml={-1}>
            0157852005
           {/** <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" /> */}
          </MDBox>
        ),
        defaultsalary: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           100 SR
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        stuff: <Author  name="John Michael" email="john@creative-tim.com" />,
        stuffgroup: <Job title="Manager" description="Organization" />,
        phone: (
          <MDBox ml={-1}>
            0157852005
           {/** <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" /> */}
          </MDBox>
        ),
        defaultsalary: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           100 SR
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        stuff: <Author  name="John Michael" email="john@creative-tim.com" />,
        stuffgroup: <Job title="Manager" description="Organization" />,
        phone: (
          <MDBox ml={-1}>
            0157852005
           {/** <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" /> */}
          </MDBox>
        ),
        defaultsalary: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           100 SR
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        stuff: <Author  name="John Michael" email="john@creative-tim.com" />,
        stuffgroup: <Job title="Manager" description="Organization" />,
        phone: (
          <MDBox ml={-1}>
            0157852005
           {/** <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" /> */}
          </MDBox>
        ),
        defaultsalary: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           5 %
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        stuff: <Author  name="John Michael" email="john@creative-tim.com" />,
        stuffgroup: <Job title="Manager" description="Organization" />,
        phone: (
          <MDBox ml={-1}>
            0157852005
           {/** <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" /> */}
          </MDBox>
        ),
        defaultsalary: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           5 %
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },  {
        stuff: <Author  name="John Michael" email="john@creative-tim.com" />,
        stuffgroup: <Job title="Manager" description="Organization" />,
        phone: (
          <MDBox ml={-1}>
            0157852005
           {/** <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" /> */}
          </MDBox>
        ),
        defaultsalary: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           5 %
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },  {
        stuff: <Author  name="John Michael" email="john@creative-tim.com" />,
        stuffgroup: <Job title="Manager" description="Organization" />,
        phone: (
          <MDBox ml={-1}>
            0157852005
           {/** <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" /> */}
          </MDBox>
        ),
        defaultsalary: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           5 %
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },  {
        stuff: <Author  name="John Michael" email="john@creative-tim.com" />,
        stuffgroup: <Job title="Manager" description="Organization" />,
        phone: (
          <MDBox ml={-1}>
            0157852005
           {/** <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" /> */}
          </MDBox>
        ),
        defaultsalary: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           5 %
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },  {
        stuff: <Author  name="John Michael" email="john@creative-tim.com" />,
        stuffgroup: <Job title="Manager" description="Organization" />,
        phone: (
          <MDBox ml={-1}>
            0157852005
           {/** <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" /> */}
          </MDBox>
        ),
        defaultsalary: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           5 %
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },  {
        stuff: <Author  name="John Michael" email="john@creative-tim.com" />,
        stuffgroup: <Job title="Manager" description="Organization" />,
        phone: (
          <MDBox ml={-1}>
            0157852005
           {/** <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" /> */}
          </MDBox>
        ),
        defaultsalary: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           5 %
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },  {
        stuff: <Author  name="John Michael" email="john@creative-tim.com" />,
        stuffgroup: <Job title="Manager" description="Organization" />,
        phone: (
          <MDBox ml={-1}>
            0157852005
           {/** <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" /> */}
          </MDBox>
        ),
        defaultsalary: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           5 %
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
