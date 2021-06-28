import React, { createContext, useState } from "react";
import axios from "axios";
import baseUrl from "../mytutor-backend";
import firebase from "../Components/firebaseconfig";

const AppAuthContext = createContext();

const handleSignupForm = () => {};

const AppAuthContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
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

  return (
    <AppAuthContext.Provider
      value={{
        handleValidateSignup: handleValidate,
        handleRemoveErrors,
        handleCreateAccount,
        loading,
      }}
    >
      {props.children}
    </AppAuthContext.Provider>
  );
};

export { AppAuthContext, AppAuthContextProvider };
