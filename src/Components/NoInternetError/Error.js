import React from "react";
import NoInternetErrorImage from "../../Assests/internet-issue-error.jpg";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Hidden,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "50px",
    },
  },
  image: {
    marginTop: "25px",
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "55px",
    },
  },
  mainHeading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },
  oopsHeading: {
    fontSize: "5rem",
    letterSpacing: "3px",
    color: "#2F1793",
  },
  primaryHeading: {
    color: "#2A2A2A",
  },
}));


const NoInternetError = () => {
    const classes = useStyles();
    return (
      <Container maxWidth="md" className={classes.container}>
        <Box style={{ textAlign: "center" }}>
          <img
            src={NoInternetErrorImage}
            className={classes.image}
            alt="no internet error"
          />
        </Box>
        <Hidden lgUp mdUp>
          <Typography
            variant="h2"
            color="initial"
            align="center"
            className={classes.oopsHeading}
          >
            Oops!
          </Typography>
          <Typography
            variant="h2"
            color="initial"
            align="center"
            className={classes.mainHeading}
          >
            We're disconnected,
          </Typography>
        </Hidden>
        <Hidden mdDown>
          <Typography
            variant="h2"
            color="initial"
            align="center"
            className={classes.mainHeading}
          >
            Oops! We're disconnected,
          </Typography>
        </Hidden>
        <Typography
          variant="h5"
          color="initial"
          align="center"
          className={classes.primaryHeading}
        >
          Check your internet connection and comeback again!
        </Typography>
      </Container>
    );
  };
  
  export default NoInternetError;
  