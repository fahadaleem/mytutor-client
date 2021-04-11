import "../admin.css";

import React, {useState} from "react";
import firebase from "../Components/firebaseconfig";
import AdminLogin from "./AdminLogin";
import Dashboard from "./Dashboard"

// color #2F2963

const Admin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
    errorCode: 0,
  });

  const handleLogin = (credentials) => {
    setLoading(true);

    if (credentials.email === "" && credentials.password === "") {
      setError({
        isError: true,
        errorMessage: "Please Enter Email and Password",
        errorCode: 104,
      });
      setLoading(false);

      return false;
    } else if (credentials.email === "") {
      setError({
        isError: true,
        errorMessage: "Please Enter Email",
        errorCode: 102,
      });
      setLoading(false);

      return false;
    } else if (credentials.password === "") {
      setError({
        isError: true,
        errorMessage: "Please Enter Password",
        errorCode: 103,
      });
      setLoading(false);

      return false;
    } else if (credentials.email && credentials.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then((data) => {
            setLoading(false)
            setIsLogin(true)
        })
        .catch((error) => {
          setLoading(false);
          setError({
            isError: true,
            errorMessage: error.message,
            errorCode: 101,
          });
        });
    }
  };

  return (
      <div>
    {isLogin ? <Dashboard />:<AdminLogin
        handleSubmit={handleLogin}
        loading={loading}
        error={error}
        handleSetError={setError}
      />}
  </div>)
};

export default Admin;
