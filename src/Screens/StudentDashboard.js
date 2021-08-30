import React, { useContext } from "react";
import Dashboard from "../Components/Student/Dashboard";
import { AppAuthContext } from "../Contexts/AuthContext";
import Login from "./Login";

const StudentDashboard = () => {
  const { isUserLogin } = useContext(AppAuthContext);
  return <div>{isUserLogin ? <Dashboard /> : <Login />}</div>;
};

export default StudentDashboard;
