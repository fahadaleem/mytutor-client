import React, {createContext} from "react"

const AppAuthContext = createContext()


const AppAuthContextProvider = (props)=>{


    const handleValidateSignup = (signupData)=>{
        
        const signupFields = Object.keys(signupData);
        let isError ;
        const errors = [];
        signupFields.forEach((elem, index)=>{
            if(signupData[elem]==="")
            {
               errors.push(elem)
            }
        })

        return errors
        
    }

  

    return (
        <AppAuthContext.Provider value={{handleValidateSignup}}>
            {props.children}
        </AppAuthContext.Provider>
    )
}


export {
    AppAuthContext,
    AppAuthContextProvider
}