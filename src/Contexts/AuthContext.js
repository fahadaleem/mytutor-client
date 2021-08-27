import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../mytutor-backend";
import firebase from "../Components/firebaseconfig";
import { useHistory } from "react-router-dom";

const AppAuthContext = createContext();

const handleSignupForm = () => {};

const AppAuthContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [loginErrors, setLoginErrors] = useState({
    isError: false,
    errorCode: "",
    errorMessage: "",
  });
  const History = useHistory();
  const [isUserLogin, setIsUserLogin] = useState(false);
  const handleValidateLogin = (credentials) => {
    if (credentials.email === "" && credentials.password === "") {
      setLoading(false);

      setLoginErrors({
        isError: true,
        errorCode: 201,
        errorMessage: "Please Enter Email and Password",
      });
    } else if (credentials.email === "") {
      setLoading(false);
      setLoginErrors({
        isError: true,
        errorCode: 202,
        errorMessage: "Please Enter Email",
      });
    } else if (credentials.password === "") {
      setLoading(false);

      setLoginErrors({
        isError: true,
        errorCode: 203,
        errorMessage: "Please Enter Password",
      });
    } else if (credentials.accountType === "") {
      setLoading(false);

      setLoginErrors({
        isError: true,
        errorCode: 204,
        errorMessage: "Please Enter Your Account Type",
      });
    } else {
      setLoading(false);

      setLoginErrors({
        isError: false,
        errorCode: 200,
      });
    }
  };

  const handleValidate = (data) => {
    const fields = Object.keys(data);
    const errors = fields.filter((elem, index) => {
      return data[elem] === "";
    });

    return errors;
  };

  const handleRemoveErrors = (state, errors) => {
    return errors.filter((elem) => {
      return state[elem] === "";
    });
  };

  async function handleCreateAccount(data) {
    setLoading(true);
    const studentData = {
      full_name: data.fullName,
      guardian_name: data.guardianName,
      gender: data.gender,
      CNIC: data.CNIC,
      age: data.age,
      current_institute: data.currentInstitute,
      email: data.email,
    };
    try {
      const resp = await axios({
        method: "POST",
        url: `${baseUrl}/add-new-student`,
        data: studentData,
      });

      const response = firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          return resp;
        })
        .catch((error) => {
          return resp;
        });
      setLoading(false);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogin(credentials) {
    setLoading(true);
    handleValidateLogin(credentials);
    if (
      credentials.email !== "" &&
      credentials.password !== "" &&
      credentials.accountType !== ""
    ) {
      if (credentials.accountType === "student") {
        try {
          const resp = await axios.get(
            `${baseUrl}/get-all-students?email=${credentials.email}`
          );
          console.log(resp);
          if (resp.data.code === "201") {
            setLoginErrors({
              isError: true,
              errorCode: 202,
              errorMessage: "Email Not Found",
            });
          } else if (resp.data.code === "200") {
            firebase
              .auth()
              .signInWithEmailAndPassword(
                credentials.email,
                credentials.password
              )
              .then((data) => {
                setLoading(false);
                setIsUserLogin(true);
                if (credentials.rememberMe) {
                  window.localStorage.setItem("isLogin", true);

                  // after login route to the page here
                }
                History.push("/student-dashboard");
              })
              .catch((error) => {
                setLoading(false);
                setLoginErrors({
                  isError: true,
                  errorMessage: error.message,
                  errorCode: 101,
                });
              });
          }
        } catch (error) {
          console.log(error);
        }
      } else if (credentials.accountType === "teacher") {
        try {
          const resp = await axios.get(
            `${baseUrl}/get-all-teachers?email=${credentials.email}`
          );
          console.log(resp);
          if (resp.data.code === "201") {
            setLoginErrors({
              isError: true,
              errorCode: 202,
              errorMessage: "Email Not Found",
            });
          } else if (resp.data.code === "200") {
            firebase
              .auth()
              .signInWithEmailAndPassword(
                credentials.email,
                credentials.password
              )
              .then((data) => {
                setLoading(false);
                setIsUserLogin(true);
                if (credentials.rememberMe) {
                  window.localStorage.setItem("isLogin", true);

                  // after login route to the page here
                }
              })
              .catch((error) => {
                setLoading(false);
                setLoginErrors({
                  isError: true,
                  errorMessage: error.message,
                  errorCode: 101,
                });
              });
          }
        } catch (error) {}
      }
    }
  }
  return (
    <AppAuthContext.Provider
      value={{
        handleValidateSignup: handleValidate,
        handleRemoveErrors,
        handleCreateAccount,
        handleLogin,
        loginErrors,
        isUserLogin,
        loading,
      }}
    >
      {props.children}
    </AppAuthContext.Provider>
  );
};

export { AppAuthContext, AppAuthContextProvider };
