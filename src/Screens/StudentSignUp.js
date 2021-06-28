import React, {useState, useContext} from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {makeStyles, Typography} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Autocomplete from "@material-ui/lab/Autocomplete";
import StudentSignUpForm from "../Components/StudentSignupForm/SignupForm";
import Image from "../Assests/create-account.png";
import Navbar from "../Components/Navbar/MainNav";
import { AppAuthContext } from "../Contexts/AuthContext";
import SimpleBackdrop from "../Components/Utilities/BackdropLoader"


const useStyle = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#E9EAED",
    // backgroundColor: "#3d275a",
    backgroundColor: "#f1faee",
    paddingBottom: "30px",

    [theme.breakpoints.down("xs")]: {
      backgroundColor: "white",
    },
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
    // marginBottom: "20px",
    padding: "70px 50px",
    borderRadius: "15px",
    boxShadow: "0 6px 8px 0px rgba(0,0,0,0.2)",
    [theme.breakpoints.down("xs")]: {
      padding: "70px 15px",
    },
  },
  customFont: {
    fontFamily: "'Quicksand', sans-serif",
    color: "#3d275a",
  },
  mainHeading: {
    fontWeight: "bold",
  },
  textField: {
    margin: "10px 0",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2F1793 !important",
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
    color: "#2F1793 !important",
    fontWeight: "500",
  },
  sideImage: {
    width: "100%",
  },
  sideDiv: {
    textAlign: "center",
  },
  welcomeHeading: {
    color: "#e63946 !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.75rem",
    },
  },
}));

const StudentSignUp = () => {
  const classes = useStyle();

  const {loading} = useContext(AppAuthContext)
  return (
    <div className={classes.root}>
      <Navbar />
      <Container maxWidth="lg" className={classes.mainContainer}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          className={classes.grid}
        >
          <Grid item lg={6} md={6} sm={12} className={classes.sideDiv}>
            <Typography variant="h2" className={classes.welcomeHeading}>
              Welcome to MyTutor!
            </Typography>
            <Typography variant="h6" color="initial">
              Create your account here to started your journey
            </Typography>
            <img src={Image} alt="side-img" className={classes.sideImage} />
          </Grid>
          <Grid item lg={6} md={6}>
            <StudentSignUpForm />
          </Grid>
        </Grid>
        {loading&&<SimpleBackdrop />}
      </Container>
    </div>
  );
};

export default StudentSignUp;
