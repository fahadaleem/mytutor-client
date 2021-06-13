import './App.css';
import {Route, Switch} from "react-router-dom"
import Admin from "./Screens/Admin"
import LandingPage from "./Screens/LandingPage"
import TeacherProfile from "./Screens/TeacherProfile"
import {AuthContextProvider} from "./Contexts/AdminAuthContexts"
import {JobFormContextProvider} from "./Contexts/JobFormContext"
import ResetPassword from "./Screens/ResetPassword"
import ApplyForJob from "./Screens/ApplyForJob"
import StudentSignUp from "./Screens/StudentSignUp"
import StudentLogin from "./Screens/StudentLogin"
import CombineContext from "./Contexts/CombineContext"

function App() {
  return (
    <CombineContext>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/admin"  component={Admin} />    
      <Route path="/teacher" component={TeacherProfile} />   
      <Route path="/resetpassword"  component={ResetPassword} />   
      <Route path="/careers" component={ApplyForJob}/> 
      <Route path="/login" component={StudentLogin}/> 
      <Route path="/signup" component={StudentSignUp}/> 
      
      <Route render={()=><h1>Not Found</h1>}></Route>    
      {/* Student Route  */}
    </Switch>
    </CombineContext>
    
  );
}

export default App;
