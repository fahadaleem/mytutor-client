import React from "react"
import {Container, Typography, makeStyles, TextField, Grid, Checkbox, FormControlLabel, Radio,RadioGroup, FormLabel} from '@material-ui/core'


const useStyles = makeStyles(theme=>({
    container:{
        padding:"70px 20px"
    },
    applyHeading:{
        color:"#2F1793",
        fontSize:"3.2rem",
        textTransform:"uppercase",
        letterSpacing:"1px",
    },
    form:{
        margin:"20px 10px"
    },
    textField:{
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2F1793 !important",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#2F1793 !important",
          },
    },
    
    radioBtn:{
        '& .PrivateRadioButtonIcon-checked-31':{
            color:"#2F1793 !important"
        }
    }

}))

const JobForm = ()=>{

    const classes = useStyles()
    return (
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h2" color="initial" align="center" className={classes.applyHeading}>Apply For Teaching</Typography>
        <form className={classes.form}>
            <Grid container spacing={3}>
                <Grid item lg={4} sm={4} xs={6}>
                    <TextField
                      id="first-name"
                      label="First Name*"
                      variant="outlined"
                      fullWidth
                      className={classes.textField}
                      InputLabelProps={
                          {className:classes.inputLabel}
                      }
                    />
                </Grid>
                <Grid item lg={4} sm={4} xs={6}>
                    <TextField
                      id="last-name"
                      label="Last Name*"
                      variant="outlined"
                      fullWidth
                      className={classes.textField}
                      InputLabelProps={
                          {className:classes.inputLabel}
                      }

                    />
                </Grid>
                <Grid item lg={4} sm={4} xs={12}>
                    <TextField
                      id="email"
                      label="Email*"
                      variant="outlined"
                      fullWidth
                      type="email"
                      className={classes.textField}
                      InputLabelProps={
                          {className:classes.inputLabel}
                      }

                    />
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                    <TextField
                      id="phone-no"
                      label="Phone No*"
                      variant="outlined"
                      fullWidth
                      type="phone"
                      className={classes.textField}
                      InputLabelProps={
                          {className:classes.inputLabel}
                      }
                    />
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                    <TextField
                      id="country"
                      label="Country*"
                      variant="outlined"
                      fullWidth
                      type="text"
                      className={classes.textField}
                      InputLabelProps={
                          {className:classes.inputLabel}
                      }
                    />
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                 <RadioGroup name="gender">
                     <FormLabel>Gender:</FormLabel>
                 <FormControlLabel value="male" name="gender" label="Male" control={<Radio className={classes.radioBtn} />} />
                   <FormControlLabel value="female" name="gender" label="Female" control={<Radio className={classes.radioBtn} />} />
                 </RadioGroup>
                </Grid>
            </Grid>
        </form>
        </Container>
    )   
}


export default JobForm