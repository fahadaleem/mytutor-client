import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import ErrorImage from "../Assests/404 Error.svg";
import ErrorImage1 from "../Assests/404 Error Robot.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root:{
        margin:"20px 0"
    },
  errorImage: {
    width: "100%",
    maxHeight: "550px",
    minHeight: "250px",
  },
  pageNotFoundHeading: {
    color: "#e63946",
    fontWeight: "600",
    letterSpacing: "3px",
    fontSize: "4rem",
  },
  goToHomeBtn: {
    backgroundColor: "#e63946",
    margin: "20px 0",
    color: "white",
    "&:hover": {
      backgroundColor: "#2F1793",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

const Page404 = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container spacing={4} alignItems="center">
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <img
            src={ErrorImage1}
            alt="404 image"
            className={classes.errorImage}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography
            variant="h2"
            color="initial"
            align="center"
            className={classes.pageNotFoundHeading}
          >
            Page Not Found
          </Typography>
          <Typography variant="h6" color="initial" align="center">
            We're sorry, the page you are requested could not be found.{" "}
            <br></br> Please go back to the homepage
          </Typography>
          <Box style={{ textAlign: "center" }}>
            <Link to="/" className={classes.link}>
              <Button
                variant="outlined"
                size="large"
                className={classes.goToHomeBtn}
                color="default"
              >
                Go to Home
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page404;
