import React,{useContext} from "react";
import Navbar from "../Components/Navbar/MainNav";
import Header from "../Components/ApplyForJob/Header/Header"
import JobForm from "../Components/ApplyForJob/JobForm/JobForm"
import BackdropLoader from "../Components/Utilities/BackdropLoader"
import { Box, makeStyles } from "@material-ui/core";
import {JobFormContext} from "../Contexts/JobFormContext" 
const useStyles = makeStyles((theme) => ({
  
}));

const ApplyForJob = () => {
  const classes = useStyles();
  const {loading} = useContext(JobFormContext)
  return (
    <div>
      <Navbar pageName="careers" />
      <Header />
      {loading && <BackdropLoader />}
      <JobForm />
    </div>
  );
};

export default ApplyForJob;
