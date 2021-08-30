import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import StudentNavbar from "./DashboardComponents/AppBar";
import CourseSearch from "../SearchCourses/SearchCourses";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const menuId = "primary-search-account-menu";

  return (
    <div id="Dashboard">
      <StudentNavbar />
      {/* <CourseSearch /> */}
      <Switch>
        <Route exact path="/student" component={Home} />
        <Route exact path="/student/search-course" component={CourseSearch} />
      </Switch>
    </div>
  );
}
