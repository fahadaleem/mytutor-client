import React, { createContext } from "react";
import firebase from "../Components/firebaseconfig";

const TeacherAuthContext = createContext();

const TeacherAuthContextProvider = (props) => {


  const handleSignup = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user)
        return true;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
  };

  return (
    <TeacherAuthContext.Provider value={{handleSignup}}>{props.children}</TeacherAuthContext.Provider>
  );
};


export {
    TeacherAuthContext, 
    TeacherAuthContextProvider
}