import React, {useEffect, useContext} from "react";
import {
  Typography,
  Grid,
  Toolbar,
  AppBar,
  Box,
  Hidden,
} from "@material-ui/core";
import {makeStyles, Button} from "@material-ui/core";
import AdminDashboardNavbar from "../Components/Admin/AdminDashboardNavbar";
import {SideDrawer} from "../Components/Admin/SideDrawer";
import {Route, Switch} from "react-router-dom";
import ViewAllTeachers from "./ViewAllTeachers";
import ViewAllStudents from "./ViewAllStudents";
import AddNewTeacher from "./AddNewTeacher";
import ViewStudentRecord from "./ViewStudentRecord";
import ViewTeacherRecord from "./ViewTeacherRecord";
import AddNewCourse from "./AddNewCourse";
import Messages from "./Messages";
import Accounts from "./Accounts";
import ViewAllCourses from "./ViewAllCourses";
import ViewCourseDetails from "./ViewCourseDetails";
import JobRequests from "./JobRequests";
import ApplicantDetails from "./ApplicantDetails";
import {JobRequestContext} from "../Contexts/JobRequestContext";

const useStyles = makeStyles((theme) => ({
  bodySection: {
    marginLeft: "230px",
    marginTop: "80px",
    padding: "25px 10px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const {handleLoadJobRequests} = useContext(JobRequestContext);

  // fetch job requests when dashboard is shown
  useEffect(() => {
    handleLoadJobRequests();
  }, []);

  return (
    <div>
      <AdminDashboardNavbar />
      <Hidden xsDown>
        <SideDrawer />
      </Hidden>
      <div className={classes.bodySection}>
        <Switch>
          <Route path="/admin/allteachers" component={ViewAllTeachers} />
          <Route path="/admin/allstudents" component={ViewAllStudents} />
          <Route path="/admin/addnewteacher" component={AddNewTeacher} />
          <Route path="/admin/teacherrecord" component={ViewTeacherRecord} />
          <Route path="/admin/studentrecord" component={ViewStudentRecord} />
          <Route path="/admin/allcourses" component={ViewAllCourses} />
          <Route path="/admin/coursedetails" component={ViewCourseDetails} />
          <Route path="/admin/addnewcourse" component={AddNewCourse} />
          <Route path="/admin/accounts" component={Accounts} />
          <Route path="/admin/messages" component={Messages} />
          <Route exact path="/admin/jobs" component={JobRequests} />
          <Route
            path="/admin/jobs/applicant/:id"
            component={ApplicantDetails}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
