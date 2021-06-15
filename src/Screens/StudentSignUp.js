import React, {useState, useContext} from "react";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles, Typography } from "@material-ui/core"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Autocomplete from "@material-ui/lab/Autocomplete";
import StudentSignUpForm from "../Components/StudentSignupForm/SignupForm"
import Image from "../Assests/create-account.png"
import Navbar from "../Components/Navbar/MainNav"


const useStyle = makeStyles(theme => ({
    root: {
        // backgroundColor: "#E9EAED",
        // backgroundColor: "#3d275a",
        backgroundColor:"#f1faee",
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
        borderRadius: "15px 50px",
        boxShadow: '0 6px 8px 0px rgba(0,0,0,0.2)'

        

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
      sideImage:{
        width:"100%"
      },
      sideDiv:{
        textAlign:"center"
      },
     
    
}))


const StudentSignUp = () => {


    const classes = useStyle()


    return (
        <div className={classes.root}>
            <Navbar />
            <Container maxWidth="lg" className={classes.mainContainer}>
              <Grid container spacing={3} alignItems="center" className={classes.grid}>
              <Grid item lg={6} sm={12} className={classes.sideDiv}>
                  <Typography variant="h3" color="initial">Welcome to MyTutor!</Typography>
                <Typography variant="body1" color="initial">Create your account here to started your journey</Typography>
                <img src={Image} alt="side-img" className={classes.sideImage}/>
                </Grid>
                <Grid item lg={6}>
                <StudentSignUpForm />
                </Grid>
                
              </Grid>
               
            </Container>

        </div>
    )
}

export default StudentSignUp;