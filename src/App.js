import './App.css';
import {Route, Switch} from "react-router-dom"
import Admin from "./Screens/Admin"
import LandingPage from "./Screens/LandingPage"
import TeacherProfile from "./Screens/TeacherProfile"

function App() {
  return (
    <Switch>
      <Route path="/" exact render={()=><LandingPage />}></Route>
      <Route path="/admin" render={()=><Admin />}></Route>    
      <Route path="/teacher" render={()=><TeacherProfile />}></Route>    
      <Route render={()=><h1>Not Found</h1>}></Route>    
      {/* Student Route  */}
    </Switch>
  );
}

export default App;
