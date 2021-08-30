import React, { createContext, useState } from "react";
import axios from "axios";
import baseUrl from "../mytutor-backend";
import {useHistory} from "react-router-dom"
import Swal from "sweetalert2";

const CourseContext = createContext();

const CourseContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [allCourses, setAllCourses] = useState([]);
  const [courseDetails, setCourseDetails] = useState({});

  const History = useHistory()

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

  async function handleAddNewCourse(courseData) {
    setLoading(true);
    try {
      const resp = await axios({
        method: "POST",
        url: `${baseUrl}/add-new-course`,
        data: {
          ...courseData,
          course_outline: courseData.courseOutline,
          is_course_assigned: "false",
        },
      });
      setLoading(false);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGetAllCourses() {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/get-all-courses`);
      setAllCourses(response.data.courses);
      setLoading(false);
    } catch (error) {}
  }

  async function handleGetCourseDetails(courseId) {
    setLoading(true)
    try {
      const response = await axios.get(
        `${baseUrl}/get-course-details?course-id=${courseId}`
      );
      setCourseDetails(response.data);
      console.log(response);
    setLoading(false)

    } catch (error) {
      alert(error);
    }
  }

  async function handleAddNewReview(data){
    try{
      const response = axios({
        method:"POST",
        url:`${baseUrl}/add-new-review`,
        data
      }).then(resp=>{
        alert("posted!")
        handleGetCourseDetails(data.course_id)
      })
    }
    catch(error)
    {
      alert(error)
    }
  }


  async function handleDeleteCourse (courseId){
    try{
      const response = await axios(`${baseUrl}/delete-course/${courseId}`);
      Swal.fire({
        icon:"success",
        title:"Course Deleted",
        text:"Course Deleted"
      }).then(resp=>{
        History.push("/admin/allcourses");
      })
    }
    catch(error){
      alert(error.message)
    }
  }

  return (
    <CourseContext.Provider
      value={{
        handleAddNewCourse,
        loading,
        handleValidate,
        handleRemoveErrors,
        handleGetAllCourses,
        handleGetCourseDetails,
        handleAddNewReview,
        courseDetails,
        allCourses,
        handleDeleteCourse
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export { CourseContext, CourseContextProvider };
