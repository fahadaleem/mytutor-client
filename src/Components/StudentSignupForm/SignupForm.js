import React, {useState, useContext, useEffect} from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  Menu,
  FormControl,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Swal from "sweetalert2"


import {AppAuthContext} from "../../Contexts/AuthContext";

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
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#2F1793 !important",
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
  // inputLabel: {
  //   color: "#2F1793 !important",
  //   fontWeight: "500",
  // },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const StudentSignUpForm = () => {
  const classes = useStyle();

  const {handleValidateSignup, handleRemoveErrors,handleCreateAccount} = useContext(AppAuthContext);
  const [errors, setErrors] = useState([]);

  const [data, setData] = useState({
    fullName: "",
    guardianName: "",
    CNIC: "",
    age: "",
    gender: "",
    currentInstitute: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsArr = handleValidateSignup(data);
    setErrors(errorsArr);
    if(errorsArr.length==0)
    {
      handleCreateAccount(data).then(resp=>{
        if(resp.data.code==="200")
      {
          Swal.fire({
              icon:"success",
              title:"Account Created",
              text:"Your student account is created successfully!"
          }).then(resp=>{
            setData({
              fullName: "",
              guardianName: "",
              CNIC: "",
              age: "",
              gender: "",
              currentInstitute: "",
              email: "",
              password: "",
              confirmPassword: "",
            })
          })
      }
      else if(resp.data.code==="201")
      {
          Swal.fire({
              icon:"error",
              title:"Error",
              text:"This account already exist!"
          }).then(resp=>{

          })
      }
      })
      
      
    }
  };

  useEffect(() => {
    const removedError = handleRemoveErrors(data, errors);
    setErrors(removedError);
  }, [data]);

  return (
    <div>
      <Typography
        variant="h3"
        color="initial"
        align="center"
        className={`${classes.customFont}`}
        style={{marginBottom: "30px"}}
      >
        Sign Up Here
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl error={true} fullWidth>
          <TextField
            id="name"
            label="Full Name"
            variant="outlined"
            InputLabelProps={{className: classes.inputLabel}}
            className={`${classes.textField} ${classes.customFont}`}
            error={errors.includes("fullName")}
            value={data.fullName}
            onChange={(e) => {
              setData({
                ...data,
                fullName: e.target.value,
              });
            }}
          ></TextField>
        </FormControl>
        <TextField
          id="guardian-name"
          label="Guardian's Name"
          variant="outlined"
          error={errors.includes("guardianName")}
          InputLabelProps={{className: classes.inputLabel}}
          className={`${classes.textField} ${classes.customFont}`}
          value={data.guardianName}
          onChange={(e) => {
            setData({
              ...data,
              guardianName: e.target.value,
            });
          }}
        ></TextField>
        <TextField
          id="cnic"
          label="CNIC"
          variant="outlined"
          InputLabelProps={{className: classes.inputLabel}}
          className={`${classes.textField} ${classes.customFont}`}
          error={errors.includes("CNIC")}
          value={data.CNIC}
          onChange={(e) => {
            setData({
              ...data,
              CNIC: e.target.value,
            });
          }}
        ></TextField>

        <TextField
          id="age"
          label="Age"
          variant="outlined"
          type="number"
          InputLabelProps={{className: classes.inputLabel}}
          className={`${classes.textField} ${classes.customFont}`}
          value={data.age}
          error={errors.includes("age")}
          onChange={(e) => {
            setData({
              ...data,
              age: e.target.value,
            });
          }}
        ></TextField>

        <TextField
          id="gender"
          select
          label="Gender"
          error={errors.includes("gender")}
          variant="outlined"
          InputLabelProps={{className: classes.inputLabel}}
          className={`${classes.textField} ${classes.customFont}`}
          value={data.gender}
          onChange={(e) => {
            setData({
              ...data,
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
          InputLabelProps={{className: classes.inputLabel}}
          className={`${classes.textField} ${classes.customFont}`}
          error={errors.includes("currentInstitute")}
          value={data.currentInstitute}
          onChange={(e) => {
            setData({
              ...data,
              currentInstitute: e.target.value,
            });
          }}
        ></TextField>
        <TextField
          id="email"
          label="Email Address"
          variant="outlined"
          InputLabelProps={{className: classes.inputLabel}}
          className={`${classes.textField} ${classes.customFont}`}
          value={data.email}
          error={errors.includes("email")}
          onChange={(e) => {
            setData({
              ...data,
              email: e.target.value,
            });
          }}
        ></TextField>
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          error={errors.includes("password")}
          InputLabelProps={{className: classes.inputLabel}}
          className={`${classes.textField} ${classes.customFont}`}
          inputProps={{
            autocomplete: "new-password",
            form: {
              autocomplete: "off",
            },
          }}
          type="password"
          value={data.password}
          onChange={(e) => {
            setData({
              ...data,
              password: e.target.value,
            });
          }}
        ></TextField>
        <TextField
          id="cPassword"
          label="Confirm Password"
          variant="outlined"
          error={errors.includes("confirmPassword")}
          InputLabelProps={{className: classes.inputLabel}}
          className={`${classes.textField} ${classes.customFont}`}
          inputProps={{
            autocomplete: "new-password",
            form: {
              autocomplete: "off",
            },
          }}
          type="password"
          value={data.confirmPassword}
          onChange={(e) => {
            setData({
              ...data,
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
