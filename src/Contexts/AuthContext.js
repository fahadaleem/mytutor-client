import React, {createContext} from "react";

const AppAuthContext = createContext();


const handleSignupForm  = ()=>{
    
}

const AppAuthContextProvider = (props) => {
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

  return (
    <AppAuthContext.Provider
      value={{handleValidateSignup: handleValidate, handleRemoveErrors}}
    >
      {props.children}
    </AppAuthContext.Provider>
  );
};

export {AppAuthContext, AppAuthContextProvider};
