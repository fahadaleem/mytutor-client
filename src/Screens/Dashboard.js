import React, { useEffect, useContext } from "react";
import {
  Typography,
  Grid,
  Toolbar,
  AppBar,
  Box,
  Hidden,
} from "@material-ui/core";
import { makeStyles, Button } from "@material-ui/core";
import AdminDashboardNavbar from "../Components/Admin/AdminDashboardNavbar";
import { SideDrawer } from "../Components/Admin/SideDrawer";
import { Route, Switch } from "react-router-dom";
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
import CourseDetails from "../Components/Courses/ViewCourseDetails/CourseDetails";
import { JobRequestContext } from "../Contexts/JobRequestContext";
import { TeachersContext } from "../Contexts/TeachersContext";
import { AuthContext } from "../Contexts/AdminAuthContexts";

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

  const { handleLoadJobRequests } = useContext(JobRequestContext);
  const { admin } = useContext(AuthContext);

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
          {(admin.role === "Administrator" || admin.role === "Moderator") && (
            <Route path="/admin/addnewteacher" component={AddNewTeacher} />
          )}
          <Route path="/admin/teacherrecord" component={ViewTeacherRecord} />
          <Route path="/admin/studentrecord" component={ViewStudentRecord} />
          <Route path="/admin/allcourses" component={ViewAllCourses} />
          <Route path="/admin/coursedetails" component={ViewCourseDetails} />
          {(admin.role === "Administrator" || admin.role === "Moderator") && (
            <Route path="/admin/addnewcourse" component={AddNewCourse} />
          )}

          {admin.role === "Administrator" && (
            <Route path="/admin/accounts" component={Accounts} />
          )}
          <Route path="/admin/messages" component={Messages} />
          <Route exact path="/admin/jobs" component={JobRequests} />
          <Route
            path="/admin/jobs/applicant/:id"
            component={ApplicantDetails}
          />
          <Route path="/admin/courses/:id" component={CourseDetails} />
          <Route render={() => <Typography variant="h3" color="initial" align="center">WELCOME TO MYTUTOR ADMIN</Typography>} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
