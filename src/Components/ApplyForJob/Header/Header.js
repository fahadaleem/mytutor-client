import React from "react";
import "./Header.css";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
import HeaderImage from "../../../Assests/header1.svg";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#e63946",
    position: "relative",
    overflow: "hidden",
    padding: "60px 80px 120px 80px",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 40px 120px 40px",
    },
  },
  rightCol: {
    textAlign: "center",
  },

  headerImage: {
    width: "80%",
  },
  headerTitle: {
    color: "#2F1793",
    margin: "20px 0",
    textTransform: "uppercase",
    letterSpacing: "2px",
    "& span": {
      fontWeight: "bold",
      color: "#f1faee",
      fontSize: "3rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "2.2rem",
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.2rem",
    },
  },
  message: {
    color: "#f1faee",
    fontSize: "1.6rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Grid container spacing={1} alignItems="center">
        <Grid item lg={6} sm={6} md={6} className={classes.leftCol}>
          <Typography
            variant="h2"
            color="initial"
            className={classes.headerTitle}
          >
            <span>Do you want to teach at</span> My Tutor?
          </Typography>
          <Typography
            variant="h6"
            component="p"
            className={classes.message}
            color="initial"
          >
            Fill out the below form, we'll reach out at your Email!
          </Typography>
        </Grid>
        <Grid item lg={6} sm={6} md={6} className={classes.rightCol}>
          <img
            src={HeaderImage}
            alt="header-img"
            className={classes.headerImage}
          />
        </Grid>
      </Grid>
      <div className="custom-shape-divider-bottom-1622634231">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Box>
  );
};

export default Header;
