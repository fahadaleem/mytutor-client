import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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
import Autocomplete from "@material-ui/lab/Autocomplete";

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

  const [studentData, setStudentData] = useState({
    email: "",
    password: "",
  });

  const handleToggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <Container maxWidth="xs" className={classes.mainContainer}>
      <Typography
        variant="h3"
        color="initial"
        align="center"
        className={`${classes.customFont} ${classes.mainHeading}`}
        style={{ marginBottom: "30px" }}
      >
        Login Here!
      </Typography>
      <TextField
        id="user-email"
        label="Email Address"
        variant="outlined"
        InputLabelProps={{ className: classes.inputLabel }}
        className={`${classes.textField} ${classes.customFont}`}
        value={studentData.email}
        inputProps={{
            autocomplete: "new-user-password",
            form: {
              autocomplete: "off",
            },
          }}
        onChange={(e) => {
          setStudentData({
            ...studentData,
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
        value={studentData.password}
        onChange={(e) => {
          setStudentData({
            ...studentData,
            password: e.target.value,
          });
        }}
      ></TextField>
      <FormLabel component="p" style={{ marginTop: "15px" }}>
        Account Type:
      </FormLabel>
      <FormControl component="div">
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

      <Button
        variant="contained"
        color="primary"
        endIcon={<KeyboardArrowRightIcon />}
        className={`${classes.submitBtn} ${classes.textField}`}
        size="large"
        type="submit"
      >
        Login
      </Button>
    </Container>
  );
};

export default LoginForm;
