import React, {createContext, useState, useEffect} from "react"
import axios from "axios"
import baseUrl from "../mytutor-backend"

const ApplicantDetailsContext = createContext()



const ApplicantDetailsContextProvider = (props)=>{

    const [applicantId, setApplicantId] = useState(null)

    async function handleFetchApplicantDetails(id){
        const response = await axios.get(`${baseUrl}/view-applicant/${id}`).catch(error=>{
            alert(error)
        })

        setApplicantId(response.data)
        
    }
  

    return (
        <ApplicantDetailsContext.Provider value={{handleSetApplicantId:setApplicantId}}>
            {props.children}
        </ApplicantDetailsContext.Provider>
    )
}


export {
    ApplicantDetailsContext, ApplicantDetailsContextProvider
}

