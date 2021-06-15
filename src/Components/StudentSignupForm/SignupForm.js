import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Typography, Select, MenuItem, InputLabel, Menu, FormControl } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyle = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#E9EAED",
    backgroundColor: "#3d275a",
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
  },
  customFont: {
    // fontFamily: "'Quicksand', sans-serif",
    color: "#2F1793",
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
    backgroundColor: "#2F1793",
    "&:hover": {
      backgroundColor: "#e63946",
    },
    align: "center",
  },
  inputLabel: {
    color: "#2F1793 !important",
    fontWeight: "500",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const StudentSignUpForm = () => {

  const classes = useStyle()


  const [studentData, setStudentData] = useState({
    fullName: "",
    fatherName: "",
    CNIC: "",
    age: "",
    gender: "",
    currentInstitute: "",
    email: "",
    password: "",
    confirmPassword: "",

  });
  return (
    <div>
      <Typography
        variant="h3"
        color="initial"
        align="center"
        className={`${classes.customFont}`}
        style={{ marginBottom: "30px" }}
      >
        Sign Up Here
      </Typography>
      <form>
        <TextField
          id="name"
          label="Full Name"
          variant="outlined"
          InputLabelProps={{ className: classes.inputLabel }}
          className={`${classes.textField} ${classes.customFont}`}
          value={studentData.fullName}
          onChange={(e) => {
            setStudentData({
              ...studentData,
              fullName: e.target.value,
            });
          }}
        ></TextField>
        <TextField
          id="fatherName"
          label="Father's Name"
          variant="outlined"
          InputLabelProps={{ className: classes.inputLabel }}
          className={`${classes.textField} ${classes.customFont}`}
          value={studentData.fatherName}
          onChange={(e) => {
            setStudentData({
              ...studentData,
              fatherName: e.target.value,
            });
          }}
        ></TextField>
        <TextField
          id="cnic"
          label="CNIC"
          variant="outlined"
          InputLabelProps={{ className: classes.inputLabel }}
          className={`${classes.textField} ${classes.customFont}`}
          value={studentData.CNIC}
          onChange={(e) => {
            setStudentData({
              ...studentData,
              CNIC: e.target.value,
            });
          }}
        ></TextField>

        <TextField
          id="age"
          label="Age"
          variant="outlined"
          type="number"
          InputLabelProps={{ className: classes.inputLabel }}
          className={`${classes.textField} ${classes.customFont}`}
          value={studentData.age}
          onChange={(e) => {
            setStudentData({
              ...studentData,
              age: e.target.value,
            });
          }}
        ></TextField>

        <TextField
          id="gender"
          select
          label="Gender"
          variant="outlined"
          InputLabelProps={{ className: classes.inputLabel }}
          className={`${classes.textField} ${classes.customFont}`}
          value={studentData.gender}
          onChange={(e) => {
            setStudentData({
              ...studentData,
              gender: e.target.value,
            });
          }}
        >

          <MenuItem key={"1"} value={"male"}>
            Male
              </MenuItem>
          <MenuItem key={"2"} value={"female"}>
            Female
              </MenuItem>
          <MenuItem key={"3"} value={"other"}>
            Other
              </MenuItem>

        </TextField>


        <TextField
          id="institute"
          label="Current Institute"
          variant="outlined"
          InputLabelProps={{ className: classes.inputLabel }}
          className={`${classes.textField} ${classes.customFont}`}
          value={studentData.currentInstitute}
          onChange={(e) => {
            setStudentData({
              ...studentData,
              currentInstitute: e.target.value,
            });
          }}
        ></TextField>
        <TextField
          id="email"
          label="Email Address"
          variant="outlined"
          InputLabelProps={{ className: classes.inputLabel }}
          className={`${classes.textField} ${classes.customFont}`}
          value={studentData.email}
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
          inputProps={{
            autocomplete: "new-password",
            form: {
              autocomplete: "off",
            },
          }}
          type="password"
          value={studentData.password}
          onChange={(e) => {
            setStudentData({
              ...studentData,
              password: e.target.value,
            });
          }}
        ></TextField>
        <TextField
          id="cPassword"
          label="Confirm Password"
          variant="outlined"
          InputLabelProps={{ className: classes.inputLabel }}
          className={`${classes.textField} ${classes.customFont}`}
          inputProps={{
            autocomplete: "new-password",
            form: {
              autocomplete: "off",
            },
          }}
          type="password"
          value={studentData.confirmPassword}
          onChange={(e) => {
            setStudentData({
              ...studentData,
              confirmPassword: e.target.value,
            });
          }}
        ></TextField>


        <Button
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
          className={`${classes.submitBtn} ${classes.textField}`}
          size="large"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default StudentSignUpForm;
