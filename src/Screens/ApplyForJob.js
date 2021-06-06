import React from "react";
import Navbar from "../Components/Navbar/MainNav";
import Header from "../Components/ApplyForJob/Header/Header"
import JobForm from "../Components/ApplyForJob/JobForm/JobForm"
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  
}));

const ApplyForJob = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar pageName="careers" />
      <Header />
      <JobForm />
    </div>
  );
};

export default ApplyForJob;
