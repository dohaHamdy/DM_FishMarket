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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDInput from "../../../components/MDInput";
import MDButton from "../../../components/MDButton";

// Authentication layout components
import LoginLayout from "../../../layouts/authentication/components/LoginLayout";

// Images
import bgImage from "../../../assets/images/blue-soft-lighting.jpg";
import typography from "../../../assets/theme/base/typography";
import { Image } from "@mui/icons-material";
import MDAvatar from "../../../components/MDAvatar";

function Basic() {
  const { size } = typography;

  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);


  return (
      <LoginLayout >
        <MDBox  component="form" role="form"  textAlign="center"   position="absolute"
        width="100%"
        minHeight="100%"
       >
          <Grid container >
          <Grid item xs={6} sx={{ pt: 5 }}  > <Grid sx={{ p: 5 }}>
          <MDBox mt={3} textAlign="center" >
              <MDTypography fontWeight="bold" variant="button" >
              Welcome to Huwat</MDTypography>
            </MDBox>
            <MDBox mt={1} textAlign="center">
              <MDTypography fontWeight="light" variant="button" color="text">
              Select your role in order to login with your personal <br/>
               credentials or register a new account on our platform
              </MDTypography>
            </MDBox>
<Grid container>
  <Grid item  xs={6} sx={{ p: 2 }}  > <MDBox  mt={3} mb={1} textAlign="center" >  <Card>
    <Grid container>
    <Grid item  xs={4}>  <MDAvatar sx={{ p: 1 }}  src={bgImage} name={'test'} size="xl" /> </Grid>
    <Grid item  xs={8}>
    <MDBox>
              <MDTypography  variant="button" >Fisherman </MDTypography></MDBox>
              <MDBox>   <MDTypography  variant="button" color="text">Company </MDTypography></MDBox>
              
    </Grid>

</Grid>
              <MDTypography  variant="button" color="text"> 
              Fisherman company is an identity
which owns multiple shipping
vessels and workers</MDTypography>
</Card>
            </MDBox>  
            </Grid>

            <Grid item xs={6} sx={{ p: 2 }} > <MDBox mt={3} mb={1} textAlign="center" ><Card>
            <Grid container>
    <Grid item  xs={4}>  <MDAvatar sx={{ p: 1 }}  src={bgImage} name={'test'} size="xl" /> </Grid>
    <Grid item  xs={8}>
    <MDBox>   <MDTypography variant="button" >Fisherman</MDTypography></MDBox>
    <MDBox>   <MDTypography  variant="button" color="text">individual</MDTypography> </MDBox>
              </Grid></Grid>
              <MDTypography  variant="button" color="text">
                Fisherman individual is a person<br/>
which owns multiple shipping<br/>
vessels and workers</MDTypography></Card>
            </MDBox> </Grid>
            <Grid item xs={6} sx={{ p: 2 }} > <MDBox mt={3} mb={1} textAlign="center" ><Card>
            <Grid container>
    <Grid item  xs={4}>  <MDAvatar sx={{ p: 1 }}  src={bgImage} name={'test'} size="xl" /> </Grid>
    <Grid item  xs={8}>
    <MDBox> <MDTypography variant="button">Fishing </MDTypography></MDBox>
    <MDBox>     <MDTypography  variant="button" color="text">market</MDTypography> </MDBox>
                </Grid> </Grid>
                <MDTypography  variant="button" color="text">
                  Fishing market is the place where<br/>
you can find the daily fish types <br/>
orders and requests</MDTypography></Card>
            </MDBox> </Grid>
            <Grid item xs={6} sx={{ p: 2 }} > <MDBox mt={3} mb={1} textAlign="center" ><Card>
            <Grid container>
    <Grid item  xs={4}>  <MDAvatar sx={{ p: 1 }}  src={bgImage} name={'test'} size="xl" /> </Grid>
    <Grid item  xs={8}>
    <MDBox><MDTypography variant="button" >Fisheries</MDTypography></MDBox>
    <MDBox>   <MDTypography  variant="button" color="text">Government</MDTypography></MDBox>
              </Grid> </Grid>
              <MDTypography  variant="button" color="text">
                Government fisheries have info<br/>
about all the fisheries inside the<br/>
Kingdom of Saudi Arabia</MDTypography></Card>
            </MDBox> </Grid>
</Grid>

</Grid>
          </Grid>
          <Grid   item xs={6}  sx={{p: 5 ,
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          bgImage &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        > <Grid sx={{ p: 5  }}   >
<Grid sx={{ p: 5 }}>
          <MDBox mt={3} textAlign="center" >
              <MDTypography fontWeight="bold" color="white" variant="button" >
              Fish Market Login
               
              </MDTypography>
            </MDBox>
            <MDBox mt={1}  textAlign="center">
              <MDTypography  fontWeight="light" variant="button" color="white">
              Login to your account using your <br/> 
              email and Buy some fish today
              </MDTypography>
            </MDBox>
          <MDBox>
            <MDBox mb={2} textAlign="left"  >
            <MDTypography    fontWeight="light" variant="button" color="white">
              Email Address
              </MDTypography>
              <MDInput type="email" color="white"  fullWidth />
            </MDBox>
            <MDBox mb={2} textAlign="left"  >
            <MDTypography    fontWeight="light" variant="button" color="white">
              Password
              </MDTypography>
              <MDInput type="password" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="white"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="white">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
          </Grid>


          </Grid>
          </Grid>

          </Grid>
        </MDBox>
    </LoginLayout>
  
    
  );
}

export default Basic;
