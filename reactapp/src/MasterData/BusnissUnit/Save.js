import  React,{useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
//import AddressForm from './AddressForm';
//import PaymentForm from './PaymentForm';
//import Review from './Review';
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout';
import MDBox from '../../components/MDBox';
import {  Grid, TextField } from '@mui/material';
import MDButton from '../../components/MDButton';
import MDTypography from '../../components/MDTypography';
import { translateWord } from '../../locales/HandleLocale';
import BusnissUnitApi from '../../CallingApis/BusnissUnitApi';
import {  useNavigate, useParams } from 'react-router';




function  BusnissUnitSave(prop) {
  let { id } = useParams();
  
  const navigation = useNavigate()
  const [isEdit, setIsEdit]=useState(false)
  const [state, setState] = useState({
   
    name: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    ownerSignature: "",
    ownerProfitPercentage: 50
  })
useEffect(()=>{
if(id)//in edit mode
{
setIsEdit(true);
BusnissUnitApi.GetOne(id).then((response )=>{
  setState({
    name: response.name,
    ownerName: response.ownerName,
    ownerPhone: response.ownerPhone,
    ownerEmail: response.ownerEmail,
    ownerSignature:response.ownerSignature,
    ownerProfitPercentage: response.ownerProfitPercentage
  })
})
} 


},[]) 

  const handleSubmit = (event) => {
    event.preventDefault();

    if(isEdit)
    {
      state.id=id
      BusnissUnitApi.UpdateOne({...state,id}).then((response)=>
      {
        navigation("/BusnissUnit")
      })
    }
else 
{
  BusnissUnitApi.InsertOne(state).then((response)=>
    {
      navigation("/BusnissUnit")
    })
}
    
  }

  const handleChange=(evt)=> {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (
    <DashboardLayout>
    <MDBox pt={6} pb={5}>
        <Grid container spacing={8}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 , mx:5 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, mx: { xs: 5, md: 6 }, }}>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
           {translateWord("inserting-new-busnissunit")}
          </MDTypography>
          
        </MDBox>

        <form   onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={6} sm={6}container>
                <Grid xs={6} sm={6} >
                    <MDTypography color="info" fontWeight="bold" variant="button" >{translateWord("name")}</MDTypography>
                </Grid>
                <Grid xs={6} sm={6} >  
         
                    <TextField
                      required
                      id="name"
                      name="name"
                      value={state.name}
                      label={translateWord("name")}
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <Grid item xs={6} sm={6}container>
                <Grid xs={6} sm={6} >
                    <MDTypography color="info" fontWeight="bold" variant="button" >{translateWord("owner-name")}</MDTypography>
                </Grid>
                <Grid xs={6} sm={6} >  
         
                    <TextField
                      required
                      id="ownerName"
                      name="ownerName"
                      value={state.ownerName}
                      label={translateWord("owner-name")}
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      onChange={handleChange}
                    />
                </Grid>
            </Grid>

            <Grid item xs={6} sm={6}container>
                <Grid xs={6} sm={6} >
                    <MDTypography color="info" fontWeight="bold" variant="button" >{translateWord("Email")}</MDTypography>
                </Grid>
                <Grid xs={6} sm={6} >  
         
                    <TextField
                      required
                      id="ownerEmail"
                      name="ownerEmail"
                      value={state.ownerEmail}
                      label={translateWord("Email")}
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      onChange={handleChange}
                    />
                </Grid>
            </Grid>

            <Grid item xs={6} sm={6}container>
                <Grid xs={6} sm={6} >
                    <MDTypography color="info" fontWeight="bold" variant="button" >{translateWord("owner-phone")}</MDTypography>
                </Grid>
                <Grid xs={6} sm={6} >  
         
                    <TextField
                      required
                      id="ownerPhone"
                      name="ownerPhone"
                      value={state.ownerPhone}
                      label={translateWord("owner-phone")}
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <Grid item xs={6} sm={6}container>
                <Grid xs={6} sm={6} >
                    <MDTypography color="info" fontWeight="bold" variant="button" >{translateWord("owner-profit-percentage")}</MDTypography>
                </Grid>
                <Grid xs={6} sm={6} >  
         
                    <TextField
                      required
                      id="ownerProfitPercentage"
                      name="ownerProfitPercentage"
                      value={state.ownerProfitPercentage}
                      label={translateWord("owner-profit-percentage")}
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <Grid xs={6} sm={6} ></Grid>
            <MDButton
                 variant="gradient" color="info"  type="submit"
                 // variant="contained"
                 
                  sx={{ mt: 3, ml: 1 }}
                >
                 save {/*activeStep === steps.length - 1 ? 'Place order' : 'Next'*/}
                </MDButton>
   {/** 
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
*/}
      </Grid>
</form>
        </Paper>
    {/**    <Copyright /> */}
      </Container>
      </Grid>
      </MDBox>
      </DashboardLayout>
  );
}

export default BusnissUnitSave;