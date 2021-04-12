import React, { createContext, useState, useEffect } from "react"
import firebase from "../Components/firebaseconfig"
import AdminLogin from "../Screens/AdminLogin";
import Dashboard from "../Screens/Dashboard"
import Admin from "../Screens/Admin"


const AuthContext = createContext();

const AuthContextProvider = (props)=>{

    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState({
      isError: false,
      errorMessage: "",
      errorCode: 0,
    });

    const [isRemember, setIsRemember] = useState(false)
  
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
              if(credentials.rememberMe)
              {
                  window.localStorage.setItem("isLogin", true)
              }
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
  

    useEffect(() => {
        const checkLogin = window.localStorage.getItem("isLogin")
        setIsLogin(checkLogin)
    }, []);



    return (
        <AuthContext.Provider value={{handleSubmit:handleLogin, loading, error, handleSetError:setError, isLogin, handleSetIsRememberMe:setIsRemember }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext, AuthContextProvider
}

