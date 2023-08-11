import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, ListItem, MenuItem, Select } from '@mui/material';
import MDTypography from '../../components/MDTypography';

export default function AddressForm() {
  return (
    <React.Fragment>
    <br/>
    <br/>
    <br/>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}container>
        <Grid xs={6} sm={6} ><MDTypography color="info" fontWeight="bold" variant="button" >First Name</MDTypography></Grid>
<Grid xs={6} sm={6} >  <MDTypography xs={6} sm={6} fontWeight="light" variant="button" color="text">Ahmed Mohammed</MDTypography> </Grid>
         
         {/** <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
          */} 
        </Grid>
        <Grid item xs={12} sm={6} container>
            
        <Grid xs={6} sm={6} ><MDTypography color="info" fontWeight="bold" variant="button" >stuff group</MDTypography></Grid>
<Grid xs={6} sm={6} >  <MDTypography xs={6} sm={6} fontWeight="light" variant="button" color="text">Group one</MDTypography> </Grid>
         {/*
        <FormControl  xs={12} variant='standard' sx={{ m: 1, minWidth: 520  , minHeight:50}}>
        <InputLabel id="demo-simple-select-helper-label">Stuff Group</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="stuff group"
          value={10}
          label="related boat"
         // onChange={handleChange}
        >
          <MenuItem value={10}>group 1</MenuItem>
          <MenuItem value={20}>group 2</MenuItem>
          <MenuItem value={30}>group 3</MenuItem>
        </Select>
       {/**<FormHelperText>With label + helper text</FormHelperText> *} 
      </FormControl>
      */}
        </Grid>
     
        <Grid item xs={12} sm={6} container>
            
        <Grid xs={6} sm={6} ><MDTypography color="info" fontWeight="bold" variant="button" >phone</MDTypography></Grid>
<Grid xs={6} sm={6} >  <MDTypography xs={6} sm={6} fontWeight="light" variant="button" color="text">014869962</MDTypography> </Grid>
        {/*
          <TextField
            required
            id="phone"
            name="phone"
            label="phone"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        */}
        </Grid>
        <Grid item xs={12} sm={6} container>
            
        <Grid xs={6} sm={6} ><MDTypography color="info" fontWeight="bold" variant="button" >related boat</MDTypography></Grid>
<Grid xs={6} sm={6} >  <MDTypography xs={6} sm={6} fontWeight="light" variant="button" color="text">boat one</MDTypography> </Grid>
{/*
        <FormControl  xs={12} variant='standard' sx={{ m: 1, minWidth: 520  , minHeight:50}}>
        <InputLabel id="demo-simple-select-helper-label">related boat</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="relatedBoat"
          value={10}
          label="related boat"
         // onChange={handleChange}
        >
          <MenuItem value={10}>boat 1</MenuItem>
          <MenuItem value={20}>boat 2</MenuItem>
          <MenuItem value={30}>boat 3</MenuItem>
        </Select>
       {/**<FormHelperText>With label + helper text</FormHelperText> *} 
      </FormControl>
      */}
        </Grid>
        <Grid item xs={12} container>
            
            <Grid xs={6} sm={3} ><MDTypography color="info" fontWeight="bold" variant="button" >Address</MDTypography></Grid>
    <Grid xs={6} sm={9} >  <MDTypography xs={6} sm={6} fontWeight="light" variant="button" color="text"> here is long address  here is long address  here is long address  here is long address  here is long address  here is long address  here is long address </MDTypography> </Grid>
             {/*
              <TextField
                required
                id="address1"
                name="address"
                label="Address"
                fullWidth
                autoComplete="shipping address-line"
                variant="standard"
              />
              */}
            </Grid>
         
   {/** 
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
*/}
      </Grid>
    </React.Fragment>
  );
}