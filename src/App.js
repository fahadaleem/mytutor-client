import "./App.css";
import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Admin from "./Screens/Admin";
import LandingPage from "./Screens/LandingPage";
import TeacherProfile from "./Screens/TeacherProfile";
import ResetPassword from "./Screens/ResetPassword";
import ApplyForJob from "./Screens/ApplyForJob";
import StudentSignUp from "./Screens/StudentSignUp";
import StudentLogin from "./Screens/StudentLogin";
import CombineContext from "./Contexts/CombineContext";
import StudentDashboard from "./Screens/StudentDashboard";
import Page404 from "./Screens/Page404";
import NoInternetError from "./Screens/NoInternetError"

function App() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    console.log(
      "Initially " + (window.navigator.onLine ? "on" : "off") + "line"
    );

    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    return () => {
      window.removeEventListener("offline", () => {
        setIsOnline(false);
      });
      window.addEventListener("online", () => {
        setIsOnline(true);
      });
    };
  }, []);

  return (
    <>
      {isOnline ? (
        <CombineContext>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/admin" component={Admin} />
            <Route path="/teacher" component={TeacherProfile} />
            <Route path="/resetpassword" component={ResetPassword} />
            <Route path="/careers" component={ApplyForJob} />
            <Route path="/login" component={StudentLogin} />
            <Route path="/signup" component={StudentSignUp} />
            <Route path="/student" component={StudentDashboard} />

            <Route component={Page404}></Route>
            {/* Student Route  */}
          </Switch>
        </CombineContext>
      ) : (
        <NoInternetError />
      )}
    </>
  );
}

export default App;
