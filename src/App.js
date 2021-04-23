import './App.css';
import {Route, Switch} from "react-router-dom"
import Admin from "./Screens/Admin"
import LandingPage from "./Screens/LandingPage"
import TeacherProfile from "./Screens/TeacherProfile"
import {AuthContextProvider} from "./Contexts/AdminAuthContexts"
import ResetPassword from "./Screens/ResetPassword"

function App() {
  return (
    <AuthContextProvider>
    <Switch>
      <Route path="/" exact render={()=><LandingPage />}></Route>
      <Route path="/admin"  render={()=><Admin />}></Route>    
      <Route path="/teacher" render={()=><TeacherProfile />}></Route>   
      <Route path="/resetpassword"  render={()=><ResetPassword/>}></Route>    
      
      <Route render={()=><h1>Not Found</h1>}></Route>    
      {/* Student Route  */}
    </Switch>
    </AuthContextProvider>
  );
}

export default App;
