import "../admin.css";

import React, {useState, useContext} from "react";
import firebase from "../Components/firebaseconfig";
import AdminLogin from "./AdminLogin";
import Dashboard from "./Dashboard";
import {AuthContext, AuthContextProvider} from "../Contexts/AdminAuthContexts";

// color #2F2963

const Admin = (props) => {
  const {isLogin} = useContext(AuthContext);
  console.log(isLogin)

  return <div>{isLogin? <Dashboard /> : <AdminLogin />}</div>;
};

export default Admin;
