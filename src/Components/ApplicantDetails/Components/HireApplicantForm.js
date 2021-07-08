import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Box,
  Select,
  InputLabel,
  MenuItem,
  makeStyles,
  Typography,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import HiringDatePicker from "./HiringDatePicker";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: "20px",
    "& .MuiInput-underline:after": {
      borderBottomColor: "#29524A",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#29524A",
      fontSize: "18px",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dialogCancelBtn: {
    backgroundColor: "#2A2A2A",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#6d6b6b",
    },
  },
  dialogSubmitBtn: {
    backgroundColor: "#29524A",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#427c71",
    },
  },
}));

const handleGetFormattedDate = () => {
  const newDate = new Date();
  const day =
    newDate.getDate().toString().length === 1
      ? `0${newDate.getDate()}`
      : newDate.getDate();
  const month =
    newDate.getMonth().toString().length === 1
      ? `0${newDate.getMonth() + 1}`
      : newDate.getMonth();
  const year = newDate.getFullYear();
  const completeDate = `${year}-${month}-${day}`;
  return completeDate;
};

export default function HireApplicantForm(props) {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const [passwordVisiblity, setPasswordVisibility] = useState(false);
  const [TeacherPassword, setTeacherPassword] = useState("");
  const [error, setError] = useState(false);

  const [hiredTeacherDetails, setHiredTeacherDetails] = useState({
    hiringDate: handleGetFormattedDate(),
    salary: "",
    courseCode1: "",
    courseCode2: "",
    email: props.email,
    password: "",
    id: props.id,
  });

  const checkValidation = () => {
    if (
      hiredTeacherDetails.salary === "" ||
      hiredTeacherDetails.courseCode === "" ||
      hiredTeacherDetails.email === "" ||
      hiredTeacherDetails.password === ""
    ) {
      setError(true);
    } else {
      setError(false);
    }
  };

  useEffect(() => {
    checkValidation();
  }, [hiredTeacherDetails]);

  const handleGeneratePassword = () => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*<>?-+";
    const randomNo = Math.floor(Math.random() * 20 + 8);
    let password = "";
    for (let i = 0; i < randomNo; i++) {
      const rand = Math.floor(Math.random() * characters.length);
      password += characters[rand];
    }

    setHiredTeacherDetails({
      ...hiredTeacherDetails,
      password,
    });
  };

  return (
    <div>
      <Dialog
        open={props.formState}
        scroll={"paper"}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          className: classes.dialog,
        }}
      >
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          New Teacher Hiring Form
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText>
            To hire new teacher, Please enter the following intormation to
            complete the hiring process.
          </DialogContentText>
          <form>
            <FormControl fullWidth className={classes.formControl}>
              <HiringDatePicker
                hiredTeacherDetails={hiredTeacherDetails}
                handleSetHiredTeacherDetails={setHiredTeacherDetails}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="salary"
                label="Salary Per Month"
                type="number"
                fullWidth
                value={hiredTeacherDetails.salary}
                onChange={(e) => {
                  setHiredTeacherDetails({
                    ...hiredTeacherDetails,
                    salary: e.target.value,
                  });
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Teaching Course 1
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={hiredTeacherDetails.courseCode}
                onChange={(e) => {
                  setHiredTeacherDetails({
                    ...hiredTeacherDetails,
                    courseCode1: e.target.value,
                  });
                }}
              >
                {props.allCourses.map((elem, index) => {
                  if (elem.is_course_assigned !== "true")
                    return (
                      <MenuItem key={elem.id} value={elem.id}>
                        {elem.id} - {elem.name}
                      </MenuItem>
                    );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Teaching Course 2
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={hiredTeacherDetails.courseCode}
                onChange={(e) => {
                  setHiredTeacherDetails({
                    ...hiredTeacherDetails,
                    courseCode2: e.target.value,
                  });
                }}
              >
                {props.allCourses.map((elem, index) => {
                  if (elem.is_course_assigned !== "true")
                    return (
                      <MenuItem key={elem.id} value={elem.id}>
                        {elem.id} - {elem.name}
                      </MenuItem>
                    );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <Typography variant="h5" color="initial">
                Account Creation:
              </Typography>
              <TextField
                id="teacher-email"
                label="Email"
                value={hiredTeacherDetails.email}
                onChange={(e) => {
                  setHiredTeacherDetails({
                    ...hiredTeacherDetails,
                    email: e.target.value,
                  });
                }}
                inputProps={{
                  autoComplete: "email",
                  form: {
                    autoComplete: "off",
                  },
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="teacher-password"
                label="Password"
                autoComplete="off"
                value={hiredTeacherDetails.password}
                onChange={(e) => {
                  setHiredTeacherDetails({
                    ...hiredTeacherDetails,
                    password: e.target.value,
                  });
                }}
                type={passwordVisiblity ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          setPasswordVisibility(!passwordVisiblity);
                        }}
                      >
                        {passwordVisiblity ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                inputProps={{
                  autoComplete: "new-password",
                  form: {
                    autoComplete: "off",
                  },
                }}
              />
              <Box my={2}>
                <Button
                  variant="outlined"
                  color="default"
                  onClick={handleGeneratePassword}
                >
                  Generate Password
                </Button>
              </Box>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.handleClose}
            variant="contained"
            color="secondary"
            className={classes.dialogCancelBtn}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              props.handleHireTeacher(hiredTeacherDetails);
            }}
            variant="contained"
            color="primary"
            className={classes.dialogSubmitBtn}
            disabled={error}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
