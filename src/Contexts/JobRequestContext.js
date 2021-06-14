import React, { useEffect, createContext, useState } from "react";
import axios from "axios";
import baseUrl from "../mytutor-backend";

const JobRequestContext = createContext();

const JobRequestContextProvider = (props) => {
  const [jobRequests, setJobRequests] = useState([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    handleLoadJobRequests();
  }, []);
  return (
    <JobRequestContext.Provider value={{ jobRequests, loading }}>
      {props.children}
    </JobRequestContext.Provider>
  );
};

export { JobRequestContext, JobRequestContextProvider };
