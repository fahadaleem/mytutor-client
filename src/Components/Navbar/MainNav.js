import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Grid,
  Box,
  Hidden,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SimpleMenu from "./MobileMenu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#2F1793",
    padding: "15px",
  },
  title: {
    color: "#f1faee",
  },
  tagLine: {
    color: "#a8dadc",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    "& a": {
      color: "#f1faee",
      padding:"0px 20px",
      textDecoration: "none",
      "& h6": {
        letterSpacing: "1px !important",
        fontSize: "18px",
        padding: "10px 0",
        borderBottom: "2px solid transparent",
        "&:hover": {
          borderBottom: "solid #e63946",
        },
      },
    },
  },
  btn: {
    margin: "0 10px",
    borderRadius: "25px",
    padding: "10px 35px",
  },
  loginBtn: {
    backgroundColor: "#e63946",
    color: "#f1faee",
    letterSpacing: "1px !important",
    "&:hover": {
      backgroundColor: "#f1faee",
      color: "#e63946",
    },
  },
  signupBtn: {
    backgroundColor: "#a8dadc",
    letterSpacing: "1px !important",
    color: "#1d3557",
    "&:hover": {
      backgroundColor: "#f1faee",
      color: "#1d3557",
    },
  },
  divider: {
    width: "15%",
    backgroundColor: "#a8dadc",
    height: "2px",
    margin: "5px 0",
  },
  active:{
    borderBottom: "solid #e63946 !important",
  },
  btnLink:{
    textDecoration:"none"
  }
}));

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar>
        <Grid container spacing={3} justify="space-between" alignItems="center">
          <Hidden mdUp>
            <Grid item lg={3} md={3}>
              <Typography
                variant="h6"
                color="initial"
                className={classes.title}
              >
                My Tutor
              </Typography>
              <Divider className={classes.divider} />
              <Typography
                variant="p"
                color="initial"
                className={classes.tagLine}
              >
                Your Online Teaching and <br />
                Learning Solution
              </Typography>
            </Grid>
          </Hidden>
          <Hidden mdDown>
            <Grid item lg={3} md={3}>
              <Typography
                variant="h6"
                color="initial"
                className={classes.title}
              >
                My Tutor
              </Typography>
              <Divider className={classes.divider} />
              <Typography
                variant="p"
                color="initial"
                className={classes.tagLine}
              >
                Your Online Teaching and <br />
                Learning Solution
              </Typography>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <SimpleMenu />
          </Hidden>
          <Hidden smDown>
            <Grid item lg={6} md={7}>
              <Box className={classes.menu}>
                <Link to="/">
                  <Typography variant="h6" color="initial" className={props.pageName==="home"&&classes.active}>
                    Home
                  </Typography>
                </Link>
                <Link to="/about">
                  <Typography variant="h6" color="initial">
                    About My Tutor
                  </Typography>
                </Link>
                {/* <Link>
                  <Typography variant="h6" color="initial">
                    Testimonials
                  </Typography>
                </Link> */}
                <Link to="/careers">
                  <Typography variant="h6" color="initial" className={props.pageName==="careers"&&classes.active}>
                    Careers
                  </Typography>
                </Link>
                <Link to="/complaint">
                  <Typography variant="h6" color="initial">
                    Complaint
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item lg={3} md={5} style={{ textAlign: "right" }}>
              <Link to="login" className={classes.btnLink}>
              <Button
                size="large"
                variant="contained"
                color="default"
                className={`${classes.btn} ${classes.loginBtn}`}
              >
                Login
              </Button>
              </Link>
              <Link to="signup" className={classes.btnLink}>
              <Button
                size="large"
                variant="contained"
                color="default"
                className={`${classes.btn} ${classes.signupBtn}`}
              >
                Sign Up
              </Button>
              </Link>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
