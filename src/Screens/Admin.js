import "../admin.css";

import React, {useState, useContext} from "react";
import firebase from "../Components/firebaseconfig";
import AdminLogin from "./AdminLogin";
import Dashboard from "./Dashboard";
import {AuthContext, AuthContextProvider} from "../Contexts/AuthContexts";

// color #2F2963

const Admin = (props) => {
  const {isLogin} = useContext(AuthContext);
  console.log(isLogin)
  // {isLogin ? <Dashboard />:<AdminLogin />}

  return <div>{true? <Dashboard /> : <AdminLogin />}</div>;
};

export default Admin;
