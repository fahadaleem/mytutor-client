import React from "react";
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#E9EAED",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  customFont: {
    fontFamily: "'Quicksand', sans-serif",
  },
  mainHeading: {
    fontWeight: "bold",
  },
  form: {
    padding: "45px 35px",
    marginTop: "6rem",
  },
  textField: {
    margin: "10px 0",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#29524A !important",
    },
  },
  inputLabel: {
    color: "green !important",
    fontWeight: "500",
  },
  submitBtn: {
    width: "80%",
    margin: "0 auto",
    backgroundColor: "#29524A",
    "&:hover": {
      backgroundColor: "#669b90",
    },
  },
  linkBtn: {
    textDecoration: "none",
    fontSize: "20px",
    color: "#29524A",
  },
});

const AdminLogin = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="xs" component={Paper} elevation={3}>
        <form className={`${classes.form}`}>
          <Box my={2}>
            <Typography
              variant="h3"
              color="initial"
              align="center"
              className={`${classes.customFont} ${classes.mainHeading}`}
            >
              Admin Login
            </Typography>
          </Box>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            className={`${classes.textField} ${classes.customFont}`}
            InputLabelProps={{className: classes.inputLabel}}
          />
          <TextField
            id="password"
            label="password"
            variant="outlined"
            type="password"
            fullWidth
            InputLabelProps={{className: classes.inputLabel}}
            className={classes.textField}
          />

          <Box style={{textAlign: "center"}} my={1}>
            <Button color="primary">
              <a href="#" className={classes.linkBtn}>
                Reset Password
              </a>
            </Button>
          </Box>
          <Box style={{textAlign: "center"}}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<KeyboardArrowRightIcon />}
              className={classes.submitBtn}
              size="large"
              type="submit"
            >
              Login
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default AdminLogin;
