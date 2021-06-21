import React, { useEffect, createContext, useState, useContext } from "react";
import axios from "axios";
import baseUrl from "../mytutor-backend";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import {TeacherAuthContext} from "./TeacherAuthContext"



const JobRequestContext = createContext();

const JobRequestContextProvider = (props) => {
  const [jobRequests, setJobRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [applicantDetailsLoading, setApplicantDetailsLoading] = useState(false);
  const [applicantDetails, setApplicantDetails] = useState({});
  const [willingToTeachCourses, setWillingToTeachCourses] = useState([]);
  const {handleSignup} = useContext(TeacherAuthContext)

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

  const handleFormatJSONtoSend = (data) => {
    return {
      name: data.name,
      country: data.country,
      email: data.email,
      password: data.password,
      phone_no: data.phone_no,
      gender: data.gender,
      intro: data.intro,
      education: data.education,
      course_code_1: data.courseCode1,
      course_code_2: data.courseCode2,
      teaching_experience: data.teaching_experience,
      salary: data.salary,
      preferred_currency: data.preferred_currency,
      hiring_date: data.hiringDate,
      resume: data.resume,
    };
  };

  async function handleHireTeacher(teacherInfo) {


    try {
      const jsonData = handleFormatJSONtoSend({ ...applicantDetails, ...teacherInfo }) 

      const isUserSignup =  handleSignup(jsonData.email, jsonData.password)

      const resp = await axios({
        method: "POST",
        url: `https://mytutor-iad-backend.herokuapp.com/hire-applicant`,
        data: jsonData,
      });

      Swal.fire({
        icon:"success",
        title:"Teacher Hired!",
        text:"Teacher account created and hired succesfully.",
        customClass:{
          container:"my-swal"
        }
      }).then(rep=>{
        handleLoadJobRequests();
        History.push("/admin/jobs");
      })
      
    } catch (error) {
      alert(error);
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
