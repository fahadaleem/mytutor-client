import React, { useEffect, createContext, useState } from "react";
import axios from "axios";
import baseUrl from "../mytutor-backend";

const JobRequestContext = createContext();

const JobRequestContextProvider = (props) => {
  const [jobRequests, setJobRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [applicantDetails, setApplicantDetails] = useState(null)

  async function handleLoadJobRequests() {
    setLoading(true);
    const response = await axios
      .get(`${baseUrl}/get-all-applicants`)
      .catch((error) => {
        alert(error);
      });

    setJobRequests(response.data.applicants);
    setLoading(false);
  }


  async function handleFetchApplicantDetails(id){
    const response = await axios.get(`${baseUrl}/view-applicant/${id}`).catch(error=>{
        alert(error)
    })

    console.log(response)
}

  useEffect(() => {
    handleLoadJobRequests();
  }, []);
  return (
    <JobRequestContext.Provider value={{ jobRequests, loading, handleFetchApplicantDetails }}>
      {props.children}
    </JobRequestContext.Provider>
  );
};

export { JobRequestContext, JobRequestContextProvider };
