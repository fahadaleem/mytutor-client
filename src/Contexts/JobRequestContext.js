import React, { useEffect, createContext, useState } from "react";
import axios from "axios";
import baseUrl from "../mytutor-backend";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const JobRequestContext = createContext();

const JobRequestContextProvider = (props) => {
  const [jobRequests, setJobRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [applicantDetailsLoading, setApplicantDetailsLoading] = useState(false);
  const [applicantDetails, setApplicantDetails] = useState({});
  const [willingToTeachCourses, setWillingToTeachCourses] = useState([]);

  const History = useHistory();

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

  async function handleDeleteApplicant(id) {
    try {
      const resp = await axios.get(
        `https://mytutor-iad-backend.herokuapp.com/delete-applicant/${id}`
      );

      if (resp.data.code === "200") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Applicant Deleted Successfully!",
        }).then((resp) => {
          handleLoadJobRequests();
          History.push("/admin/jobs");
          // window.location.reload();
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${error.message}`,
      });
    }
  }

  async function handleHireTeacher(teacherInfo) {
    try {
      const teacher = {
        name: applicantDetails.name,
        country: applicantDetails.country,
        email: applicantDetails.email,
        phone_no: applicantDetails.phone_no,
        gender: applicantDetails.gender,
        intro: applicantDetails.intro,
        preferred_currency: applicantDetails.preferred_currency,
        resume: applicantDetails.resume,
        teaching_experience: applicantDetails.teaching_experience,
        education: applicantDetails.education,
        ...teacherInfo,
      };

      const resp = await axios({
        method:"POST",
        url: `https://mytutor-iad-backend.herokuapp.com/hire-applicant`,
        data:teacher
      })

      console.log(resp)
      handleLoadJobRequests();
      History.push("/admin/jobs");
    }
    catch(error)
    {
      alert(error)
    }

  
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
        handleDeleteApplicant,
        handleLoadJobRequests,
        handleHireTeacher,
      }}
    >
      {props.children}
    </JobRequestContext.Provider>
  );
};

export { JobRequestContext, JobRequestContextProvider };
