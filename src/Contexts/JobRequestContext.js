import React, { useEffect, createContext, useState } from "react";
import axios from "axios";
import baseUrl from "../mytutor-backend";

const JobRequestContext = createContext();

const JobRequestContextProvider = (props) => {
  const [jobRequests, setJobRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [applicantDetailsLoading, setApplicantDetailsLoading] = useState(false);
  const [applicantDetails, setApplicantDetails] = useState({});
  const [willingToTeachCourses, setWillingToTeachCourses] = useState([]);

  async function handleLoadJobRequests() {
    setLoading(true);
    const response = await axios
      .get(`${baseUrl}/get-all-applicants`)
      .then((resp) => {
        setJobRequests(resp.data.applicants);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function handleFetchApplicantDetails(id) {
    setApplicantDetailsLoading(true);
    await axios
      .get(`${baseUrl}/view-applicant/${id}`)
      .then((resp) => {
        const json = {
          ...resp.data,
        };
        setApplicantDetails({
          ...json,
          willing_to_teach_courses: json.willing_to_teach_courses.split(","),
        });
        setApplicantDetailsLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    handleLoadJobRequests();
  }, []);
  return (
    <JobRequestContext.Provider
      value={{
        jobRequests,
        loading,
        handleFetchApplicantDetails,
        applicantDetails,
        applicantDetailsLoading,
      }}
    >
      {props.children}
    </JobRequestContext.Provider>
  );
};

export { JobRequestContext, JobRequestContextProvider };
