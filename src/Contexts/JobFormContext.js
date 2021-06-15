import React, { createContext, useState, useEffect } from "react";
import firebase from "../Components/firebaseconfig";
import Swal from "sweetalert2";
import axios from "axios";

const JobFormContext = createContext();

const JobFormContextProvider = (props) => {
  let [errors, setErrors] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [resumeDownloadUrl, setResumeDownloadUrl] = useState("");
  const [json, setJson] = useState(null);
  const [loading, setLoading] = useState(false)
  const [applicantData, setApplicantData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: {},
    phone: "",
    gender: "",
    education: "",
    teachingExperience: "",
    willingToTeachCourse1: "",
    willingToTeachCourse2: "",
    expectedSalary: "",
    preferredCurrency: "",
    shortIntro: "",
    resume: [],
  });

  const removedError = () => {
    const allErrors = [...errors];
    if (applicantData.firstName !== "" && allErrors.includes("first-name")) {
      const errorIndex = allErrors.indexOf("first-name");
      allErrors.splice(errorIndex, 1);
      setErrors(allErrors);
    }
    if (applicantData.lastName !== "" && allErrors.includes("last-name")) {
      const errorIndex = allErrors.indexOf("last-name");
      allErrors.splice(errorIndex, 1);
      setErrors(allErrors);
    }
    if (applicantData.email !== "" && allErrors.includes("email")) {
      const errorIndex = allErrors.indexOf("email");
      allErrors.splice(errorIndex, 1);
      setErrors(allErrors);
    }
    if (
      applicantData.country.label !== undefined &&
      allErrors.includes("country-select")
    ) {
      const errorIndex = allErrors.indexOf("country-select");
      allErrors.splice(errorIndex, 1);
      setErrors(allErrors);
    }
    if (applicantData.phone !== "" && allErrors.includes("phone-no")) {
      const errorIndex = allErrors.indexOf("phone-no");
      allErrors.splice(errorIndex, 1);
      setErrors(allErrors);
    }
    if (applicantData.gender !== "" && allErrors.includes("gender")) {
      const errorIndex = allErrors.indexOf("gender");
      allErrors.splice(errorIndex, 1);
      setErrors(allErrors);
    }
    if (
      applicantData.education !== "" &&
      allErrors.includes("education-select")
    ) {
      const errorIndex = allErrors.indexOf("education-select");
      allErrors.splice(errorIndex, 1);
      setErrors(allErrors);
    }
    if (
      applicantData.teachingExperience !== "" &&
      allErrors.includes("teaching-experience-select")
    ) {
      const errorIndex = allErrors.indexOf("teaching-experience-select");
      allErrors.splice(errorIndex, 1);
      setErrors(allErrors);
    }
    if (
      (applicantData.willingToTeachCourse1 !== "" ||
        applicantData.willingToTeachCourse2 !== "") &&
      allErrors.includes("course-select")
    ) {
      const errorIndex = allErrors.indexOf("course-select");
      allErrors.splice(errorIndex, 1);
      setErrors(allErrors);
    }
    if (applicantData.expectedSalary !== "" && allErrors.includes("salary")) {
      const errorIndex = allErrors.indexOf("salary");
      allErrors.splice(errorIndex, 1);
      setErrors(allErrors);
    }
    if (
      applicantData.preferredCurrency !== "" &&
      allErrors.includes("currency")
    ) {
      const errorIndex = allErrors.indexOf("currency");
      allErrors.splice(errorIndex, 1);
      setErrors(allErrors);
    }
    if (applicantData.resume.length > 0 && allErrors.includes("resume")) {
      const errorIndex = allErrors.indexOf("resume");
      allErrors.splice(errorIndex, 1);
      setErrors(allErrors);
    }
  };

  const handleValidate = () => {
    if (!Boolean(applicantData.firstName) && !errors.includes("first-name")) {
      errors = errors.concat("first-name");
      setErrors(errors);
    }
    if (!Boolean(applicantData.lastName) && !errors.includes("last-name")) {
      errors = errors.concat("last-name");
      setErrors(errors);
    }
    if (!Boolean(applicantData.email) && !errors.includes("email")) {
      errors = errors.concat("email");
      setErrors(errors);
    }
    if (!Boolean(applicantData.phone) && !errors.includes("phone-no")) {
      errors = errors.concat("phone-no");
      setErrors(errors);
    }
    if (
      !Boolean(applicantData.country.label) &&
      !errors.includes("country-select")
    ) {
      errors = errors.concat("country-select");
      setErrors(errors);
    }
    if (!Boolean(applicantData.gender) && !errors.includes("gender")) {
      errors = errors.concat("gender");
      setErrors(errors);
    }
    if (
      !Boolean(applicantData.willingToTeachCourse1) &&
      !Boolean(applicantData.willingToTeachCourse2) &&
      !errors.includes("course-select")
    ) {
      errors = errors.concat("course-select");
      setErrors(errors);
    }
    if (
      !Boolean(applicantData.education) &&
      !errors.includes("education-select")
    ) {
      errors = errors.concat("education-select");
      setErrors(errors);
    }
    if (
      !Boolean(applicantData.teachingExperience) &&
      !errors.includes("teaching-experience-select")
    ) {
      errors = errors.concat("teaching-experience-select");
      setErrors(errors);
    }
    if (!Boolean(applicantData.expectedSalary) && !errors.includes("salary")) {
      errors = errors.concat("salary");
      setErrors(errors);
    }
    if (
      !Boolean(applicantData.preferredCurrency) &&
      !errors.includes("currency")
    ) {
      errors = errors.concat("currency");
      setErrors(errors);
    }

    if (applicantData.resume.length <= 0 && !errors.includes("resume")) {
      errors = errors.concat("resume");
      setErrors(errors);
    }
  };

  const handleUploadApplicant =  ()=> {
    const resumeFile = applicantData.resume[0];

    const fileUrl = firebase
      .storage()
      .ref("applicants-resume")
      .child(resumeFile.name)
      .put(resumeFile);

    fileUrl.on(
      "state_changed",
      (snapshot) => {
        //progress
      },
      (error) => {
        // error
        console.log(error);
      },
      () => {
        // complete
        const url = firebase
          .storage()
          .ref("applicants-resume")
          .child(resumeFile.name)
          .getDownloadURL()
          .then((url) => {
            const applicantDataJSON = handleFormatDataForSend(url);
            handleAddNewApplicant(applicantDataJSON);
          });
      }
    );
  }

  const handleFormatDataForSend = (resumeDownloadUrl) => {
    return {
      name: `${applicantData.firstName} ${applicantData.lastName}`,
      email: applicantData.email,
      phone_no: `${applicantData.country.phone} ${applicantData.phone}` ,
      country: applicantData.country.label,
      gender: applicantData.gender,
      education: applicantData.education,
      teaching_experience: applicantData.teachingExperience,
      willing_to_teach_courses: `${applicantData.willingToTeachCourse1}, ${applicantData.willingToTeachCourse2}`,
      expected_salary: applicantData.expectedSalary,
      preferred_currency: applicantData.preferredCurrency,
      intro: applicantData.shortIntro,
      resume: resumeDownloadUrl,
    };
  };

  const handleFormSubmit = (e) => {
    // stop page to reload
    e.preventDefault();
    // check for errors
    handleValidate();
    // if there is errors then show an alert one time
    if (errors.length > 0 && !showErrorMessage) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Fill out all the required fields!",
      });
      setShowErrorMessage(true);
      // if resume not uploaded, then alert for the resume
    } else if (errors[0] === "resume") {
      Swal.fire({
        icon: "error",
        title: "Resume Required!",
        text: "Upload Your Resume!",
      });
      // if there is not error, then send the applicant data to the backend
    } else if(errors.length===0){
      setLoading(true)
      handleUploadApplicant();
    }
  };

  function handleAddNewApplicant(applicantDataJSON) {

    const resp = axios({
      method: "POST",
      data: applicantDataJSON,
      url: `https://mytutor-iad-backend.herokuapp.com/add-new-applicant`,
    })
      .then((resp) => {
        if (resp.data.code === "201") {
          setLoading(false)

          Swal.fire({
            title: "Stop",
            icon: "warning",
            text: "You already submitted application, your application is under consideration. we'll inform you soon. Be patience!",
          });
        } else if (resp.data.code === "200") {
        setLoading(false)

          Swal.fire({
            title: "Application Submitted",
            icon: "success",
            text: "Thank you for taking interest to teach at Mytutor, we'll inform you soon once you hired.",
          });

          setApplicantData({
            firstName: "",
            lastName: "",
            email: "",
            country: {},
            phone: "",
            gender: "",
            education: "",
            teachingExperience: "",
            willingToTeachCourse1: "",
            willingToTeachCourse2: "",
            expectedSalary: "",
            preferredCurrency: "",
            shortIntro: "",
            resume: [],
          });
        }
      })
      .catch((error) => {
        setLoading(false)
        alert(error.message);
      });
  }

  useEffect(() => {
    removedError();
    handleFormatDataForSend();
  }, [applicantData]);

  return (
    <JobFormContext.Provider
      value={{ errors, applicantData, setApplicantData, handleFormSubmit, loading }}
    >
      {props.children}
    </JobFormContext.Provider>
  );
};

export { JobFormContext, JobFormContextProvider };
