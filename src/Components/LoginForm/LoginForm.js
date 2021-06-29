import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { AppAuthContext } from "../../Contexts/AuthContext";
import CircularProgress from "@material-ui/core/CircularProgress";

import Alert from "@material-ui/lab/Alert";


const useStyle = makeStyles((theme) => ({
  button: {
    backgroundColor: "orange",
    padding: "25px",
    fontSize: "22px",
    align: "center",
  },
  mainContainer: {
    backgroundColor: "white",
    marginTop: "40px",
    marginBottom: "40px",
    padding: "30px 50px",
    borderRadius: "5px",
  },
  customFont: {
    color: "#2F1793",
  },
  mainHeading: {
    fontWeight: "500",
  },
  textField: {
    margin: "10px 0",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2F1793 !important",
    },
    width: "100%",
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#2F1793 !important",
    },
  },
  submitBtn: {
    width: "100%",
    marginTop: "0px",
    backgroundColor: "#2F1793",
    "&:hover": {
      backgroundColor: "#e63946",
    },
    align: "center",
  },
  radioBtn: {
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: "#2F1793 !important",
    },
  },
  checkbox: {
    "& .MuiCheckbox-colorPrimary.Mui-checked": {
      color: "#2F1793 !important",
    },
  },
  linkBtn: {
    textDecoration: "none",
    fontSize: "18px",
    color: "#3d275a",
  },
}));

const LoginForm = () => {
  const classes = useStyle();

  const [rememberMe, setRememberMe] = useState(false);
  const {handleLogin, loginErrors, loading} = useContext(AppAuthContext)

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
    accountType:"",
  });

  const handleToggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e)=>{
      e.preventDefault();
      handleLogin({
          ...loginCredentials,
          rememberMe
      });
  }

  return (
    <Container maxWidth="xs" className={classes.mainContainer}>
        <form onSubmit={handleSubmit}>
      <Typography
        variant="h3"
        color="initial"
        align="center"
        className={`${classes.customFont} ${classes.mainHeading}`}
        style={{ marginBottom: "30px" }}
      >
        Login Here!
      </Typography>
      <Box my={1}>
            {loginErrors.isError ? (
              <Alert severity="error">{loginErrors.errorMessage}</Alert>
            ) : (
              ""
            )}
          </Box>
      <TextField
        id="user-email"
        label="Email Address"
        variant="outlined"
        InputLabelProps={{ className: classes.inputLabel }}
        className={`${classes.textField} ${classes.customFont}`}
        value={loginCredentials.email}
        inputProps={{
          autocomplete: "new-user-password",
          form: {
            autocomplete: "off",
          },
        }}
        onChange={(e) => {
          setLoginCredentials({
            ...loginCredentials,
            email: e.target.value,
          });
        }}
      ></TextField>
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        InputLabelProps={{ className: classes.inputLabel }}
        className={`${classes.textField} ${classes.customFont}`}
        autoComplete="off"
        type="password"
        value={loginCredentials.password}
        onChange={(e) => {
          setLoginCredentials({
            ...loginCredentials,
            password: e.target.value,
          });
        }}
      ></TextField>
      <FormLabel component="p" style={{ marginTop: "15px" }}>
        Account Type:
      </FormLabel>
      <FormControl component="div" onChange={(e)=>setLoginCredentials({
          ...loginCredentials, 
            accountType:e.target.value
      })}>
        <RadioGroup aria-label="" name="account-type">
          <FormControlLabel
            value="student"
            className={classes.radioBtn}
            control={<Radio />}
            label="Student"
          />
          <FormControlLabel
            value="teacher"
            className={classes.radioBtn}
            control={<Radio />}
            label="Teacher"
          />
        </RadioGroup>
      </FormControl>

      <FormControl component="div" fullWidth>
        <FormControlLabel
          label="Remember Me"
          className={classes.checkbox}
          control={
            <Checkbox
              value="Remember Me"
              checked={rememberMe}
              onChange={handleToggleRememberMe}
              color="primary"
            />
          }
        />
      </FormControl>

      <Box style={{ textAlign: "center" }} my={1}>
        <Button color="primary">
          <a href="#" className={classes.linkBtn}>
            Reset Password
          </a>
        </Button>
      </Box>

      {loading ? (
              <Button
                variant="contained"
                color="primary"
                className={classes.submitBtn}
                size="large"
                type="submit"
              >
                <CircularProgress style={{color: "white"}} />
              </Button>
            ) : (
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
            )}
      </form>
    </Container>
    
  );
};

export default LoginForm;
