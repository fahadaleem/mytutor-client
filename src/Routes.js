import { Route, Switch } from "react-router-dom";
import Admin from "./Screens/Admin";
import LandingPage from "./Screens/LandingPage";
import TeacherProfile from "./Screens/TeacherProfile";
import ResetPassword from "./Screens/ResetPassword";
import ApplyForJob from "./Screens/ApplyForJob";
import StudentSignUp from "./Screens/StudentSignUp";
import Login from "./Screens/Login";
import StudentDashboard from "./Screens/StudentDashboard";
import Page404 from "./Screens/Page404";
import Complaint from "./Screens/Complaint"
const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/admin" component={Admin} />
      <Route path="/teacher" component={TeacherProfile} />
      <Route path="/resetpassword" component={ResetPassword} />
      <Route path="/careers" component={ApplyForJob} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={StudentSignUp} />
      <Route path="/student" component={StudentDashboard} />
      <Route path="/complaint" component={Complaint} />


      <Route component={Page404}></Route>
      {/* Student Route  */}
    </Switch>
  );
};

export default AppRoutes;
