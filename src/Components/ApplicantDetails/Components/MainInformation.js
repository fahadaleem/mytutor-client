import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  Typography,
  makeStyles,
  Box,
  Divider,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import HireApplicantForm from "./HireApplicantForm"


const useStyles = makeStyles((theme) => ({
  root: {
    // padding: "25px 20px",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  avatar: {
    width: "150px",
  },
  divider: {
    width: "35%",
    backgroundColor: "#29524A",
    height: "4px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  info: {
    margin: "15px 0 5px 0",
    textTransform: "uppercase",
    fontSize: "1.75rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  actionBtns: {
    margin: "25px 15px 25px 0",
    fontSize: "18px",
    padding: "15px 35px",
    backgroundColor: "#2A2A2A",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "10px 0",
      fontSize: "16px",
    },
  },
  hireBtn: {
    backgroundColor: "#6200ee",
  },
  name: {
    fontSize: "2.75rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      textAlign: "center",
    },
  },
}));

const ApplicantMainInformation = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const {
    id,
    experience,
    willingToTeachCourses,
    expectedSalary,
    preferredCurrency,
    name,
    intro,
    email,
    handleDeleteApplicant,
    handleHireTeacher
  } = props;
  return (
    <div className={classes.root}>
      <Typography
        variant="h3"
        color="initial"
        className={`${classes.info} ${classes.name}`}
      >
        {name}
        <Divider className={classes.divider} />
      </Typography>

      <Typography variant="h4" color="initial" className={classes.info}>
        About:
      </Typography>
      <Typography variant="body1" color="initial">
        {intro!==""?intro:"There is No Introducation"}
      </Typography>
      <Typography variant="h4" color="initial" className={classes.info}>
        Experience:
      </Typography>
      <Typography variant="body1" color="initial">
        - {experience}
      </Typography>

      <Typography variant="h4" color="initial" className={classes.info}>
        Willing to teach courses:
      </Typography>
      {willingToTeachCourses &&
        willingToTeachCourses.map((elem, index) => {
          return (
            elem.trim().length > 0 && (
              <Typography variant="body1" color="initial" key={index} >
                {index + 1}- {elem}
              </Typography>
            )
          );
        })}
      <Typography variant="h4" color="initial" className={classes.info}>
        Expected Salary:
      </Typography>
      <Typography variant="body1" color="initial">
        - {expectedSalary} {preferredCurrency}/Month
      </Typography>
      {open&&<HireApplicantForm formState={open} email = {email} handleClose={handleClose} handleHireTeacher={handleHireTeacher}/>} 

      <Button
        variant="contained"
        color="primary"
        className={`${classes.actionBtns} ${classes.hireBtn}`}
        onClick={handleClickOpen}
      >
        Hire Applicant
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.actionBtns}
        onClick={()=>{
          handleDeleteApplicant(id)
        }}
      >
        Reject Application
      </Button>
    </div>
  );
};

export default ApplicantMainInformation;
