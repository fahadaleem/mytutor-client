import React, {useState, useContext} from "react";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles, Typography } from "@material-ui/core"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Autocomplete from "@material-ui/lab/Autocomplete";



const useStyle = makeStyles(theme => ({
    root: {
        // backgroundColor: "#E9EAED",
        backgroundColor: "#3d275a",
        position: "absolute",
        height: "maxContent",
        width: "100%",
    },
    button: {
        backgroundColor: "orange",
        padding: "25px",
        fontSize: "22px",
        align: "center",
    },
    mainContainer: {
        backgroundColor: "white",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "30px 50px",
        borderRadius: "15px 50px"
        

    },
    customFont: {
        fontFamily: "'Quicksand', sans-serif",
        color: "#3d275a"
      },
    mainHeading: {
        fontWeight: "bold",
    
    },
    textField: {
        margin: "10px 0",
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#3d275a !important",
        },
        width: "100%",
    },
    submitBtn: {
        width: "100%",
        marginTop: "20px",
        backgroundColor: "#3d275a",
        "&:hover": {
          backgroundColor: "#b57cff",
        },
        align: "center",
        
      },
      inputLabel: {
        color: "#3d275a !important",
        fontWeight: "500",
      },
    
}))


const StudentSignUp = () => {


    const classes = useStyle()


    const [studentData, setStudentData] = useState({
        fullName: "",
        fatherName: "",
        CNIC: "",
        currentInstitute: "",
        email: "",
        password: "",
        confirmPassword: "",

    });



    return (
        <div className={classes.root}>
            <Container maxWidth="xs" className={classes.mainContainer}>
                <Typography variant="h3"
                            color="initial"
                            align="center"
                            className={`${classes.customFont} ${classes.mainHeading}`} 
                            style={{marginBottom: "30px"}}>
                    Sign Up
                </Typography>
                <TextField
                  
                  id="name"
                  label="Full Name"
                  variant="outlined"
                  InputLabelProps={{className: classes.inputLabel}}
                  className={`${classes.textField} ${classes.customFont}`}
                  value={studentData.fullName}
                  onChange = {(e)=>{
                    setStudentData({
                      ...studentData,
                      fullName: e.target.value,
                    });
                  }}
                  >
                  
                </TextField>
                <TextField
                  id="fatherName"
                  label="Father's Name"
                  variant="outlined"
                  InputLabelProps={{className: classes.inputLabel}}
                  className={`${classes.textField} ${classes.customFont}`} 
                  value={studentData.fatherName}
                  onChange = {(e)=>{
                    setStudentData({
                      ...studentData,
                      fatherName: e.target.value,
                    });
                  }}
                  >
                  
                </TextField>
                <TextField
                  id="cnic"
                  label="CNIC"
                  variant="outlined"
                  InputLabelProps={{className: classes.inputLabel}}
                  className={`${classes.textField} ${classes.customFont}`} 
                  value={studentData.CNIC}
                  onChange = {(e)=>{
                    setStudentData({
                      ...studentData,
                      CNIC: e.target.value,
                    });
                  }}
                  >
                  
                </TextField>
                <TextField
                  id="institute"
                  label="Current Institute"
                  variant="outlined"
                  InputLabelProps={{className: classes.inputLabel}}
                  className={`${classes.textField} ${classes.customFont}`} 
                  value={studentData.currentInstitute}
                  onChange = {(e)=>{
                    setStudentData({
                      ...studentData,
                      currentInstitute: e.target.value,
                    });
                  }}
                  >
                  
                </TextField>
                <TextField
                  id="email"
                  label="Email Address"
                  variant="outlined"
                  InputLabelProps={{className: classes.inputLabel}}
                  className={`${classes.textField} ${classes.customFont}`} 
                  value={studentData.email}
                  onChange = {(e)=>{
                    setStudentData({
                      ...studentData,
                      email: e.target.value,
                    });
                  }}
                  >
                  
                </TextField>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  InputLabelProps={{className: classes.inputLabel}}
                  className={`${classes.textField} ${classes.customFont}`} 
                  inputProps={{
                    autocomplete: 'new-password',
                    form: {
                      autocomplete: 'off',
                    },
                  }}
                  type="password"
                  value={studentData.password}
                  onChange = {(e)=>{
                    setStudentData({
                      ...studentData,
                      password: e.target.value,
                    });
                  }}
                  >
                  
                </TextField>
                <TextField
                  id="cPassword"
                  label="Confirm Password"
                  variant="outlined"
                  InputLabelProps={{className: classes.inputLabel}}
                  className={`${classes.textField} ${classes.customFont}`} 
                  inputProps={{
                    autocomplete: 'new-password',
                    form: {
                      autocomplete: 'off',
                    },
                  }}
                  type="password"
                  value={studentData.confirmPassword}
                  onChange = {(e)=>{
                    setStudentData({
                      ...studentData,
                      confirmPassword: e.target.value,
                    });
                  }}
                  >
                  
                </TextField>
                <Button variant="contained"
                color="primary"
                endIcon={<KeyboardArrowRightIcon />}
                className={`${classes.submitBtn} ${classes.textField}`}
                size="large"
                type="submit"
                 >
                  Sign Up
                </Button>
            </Container>

        </div>
    )
}

export default StudentSignUp;