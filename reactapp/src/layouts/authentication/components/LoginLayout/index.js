/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../../../components/MDBox";

// Material Dashboard 2 React example components
import DefaultNavbar from "../../../../examples/Navbars/DashboardNavbar";
import PageLayout from "../../../../examples/LayoutContainers/PageLayout";

// Authentication pages components
import Footer from "../../../../layouts/authentication/components/Footer";

function LoginLayout({ image, children }) {
  return (
    <PageLayout>
     {/*remove it becouse of the login  <DefaultNavbar
        action={{
          type: "external",
          route: "https://creative-tim.com/product/material-dashboard-react",
          label: "free download",
          color: "dark",
        }}
      />
      */}
      <MDBox
        position="absolute"
        width="100%"
        minHeight="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MDBox px={1} width="100%" height="100%" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
            {children}
          </Grid>
        </Grid>
      </MDBox>
    </PageLayout>
  );
}

// Typechecking props for the BasicLayout
LoginLayout.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
