import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import StudentNavbar from "./DashboardComponents/AppBar"
import Header from "./DashboardComponents/Header"
const useStyles = makeStyles((theme) => ({
  
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  
  const menuId = "primary-search-account-menu";
 
  return (
    <div id="Dashboard">
      <StudentNavbar />
      <Header />
    </div>
  );
}
