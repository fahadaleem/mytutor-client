import React, { createContext, useState, useEffect } from "react"
import firebase from "../Components/firebaseconfig"
import AdminLogin from "../Screens/AdminLogin";
import Dashboard from "../Screens/Dashboard"
import Admin from "../Screens/Admin"


const AuthContext = createContext();

const AuthContextProvider = (props)=>{

    // to check if the user is login or not
    const [isLogin, setIsLogin] = useState(true);

    // used for loader, it runs till the response comes from the firebase
    const [loading, setLoading] = useState(null);

    // this is used for error checking
    const [error, setError] = useState({
      isError: false,
      errorMessage: "",
      errorCode: 0,
    });

  
    // function that will execute when the form is submitted
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

    const handleLogOut = ()=>{
      setIsLogin(false)
      window.localStorage.setItem("isLogin", false)
    }

    const handleResetPassword = (emailAddress)=>{
        // login to reset the password.
        firebase.auth().sendPasswordResetEmail(emailAddress).then(function() {
          // Email sent.
          alert("Email has be sent to your email!")
        }).catch(function(error) {
          alert(error.message)
          // An error happened.
        });
    }
  

    useEffect(() => {
        const checkLogin = window.localStorage.getItem("isLogin")
        setIsLogin(JSON.parse(checkLogin))
    }, []);



    return (
        <AuthContext.Provider value={{handleSubmit:handleLogin, loading, error, handleSetError:setError, isLogin, handleLogOut, handleResetPassword }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext, AuthContextProvider
}

