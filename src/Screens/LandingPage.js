import React from "react";
import Navbar from "../Components/Navbar/MainNav";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Grid, makeStyles, Grow, Typography, Button } from "@material-ui/core";
import Image from "../Assests/online-learn.svg";
import Cards from "../Components/LandingPage/Cards";
import Features from "../Components/LandingPage/Features";
import Footer from "../Components/LandingPage/Footer";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "400px",
    padding:"3vw 1vw"
  },
  image: {
    //  background: "linear-gradient(90deg,#94bbe9,#4466df)",
    paddingTop: "40px",
    paddingLeft: "100px",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar pageName="home" />
      <div className={classes.header}>
        <Grid container alignItems="center">
          <Grid item lg={6}>
            {" "}
            <Typography
              variant="h4"
              color="initial"
              style={{ paddingTop: "40px", paddingLeft: "30px" }}
            >
             An online teaching platform that provides a user-friendly environment for students. The Admin keeps track of all needs and manages all concerns.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{
                marginTop: "40px",
                marginLeft: "30px",
                width: "190px",
                height: "50px",
                borderRadius:"50px",
                backgroundColor:"#2F1793"
              }}
            >
              Get Started
            </Button>
          </Grid>

          <div className={classes.image}>
            <Grid item lg={6}>
              {" "}
              <img
                src={Image}
                alt=""
                style={{ width: "500px", height: "320px" }}
              />{" "}
            </Grid>
          </div>
        </Grid>
      </div>
      {/* <h1>landing here</h1> */}

      <Cards />

      <Features />

      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
