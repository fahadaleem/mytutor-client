import React, { useContext, useEffect, useState } from "react";
import CourseDetailsHeader from "./Components/CourseDetailsHeader";
import CourseOutline from "./Components/CourseOutline";
import CourseTeacherDetails from "./Components/CourseTeacherDetails";
import SimpleBackdrop from "../../Utilities/BackdropLoader";
import Reviews from "./Components/Reviews";
import { Container, makeStyles, Box, Typography, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { CourseContext } from "../../../Contexts/CourseContext";
import { AuthContext } from "../../../Contexts/AdminAuthContexts";
import Snackbars from "../../Utilities/Snakbar";



const useStyles =makeStyles(theme=>({
  container:{
    [theme.breakpoints.down('xs')]:{
      padding:"15px 0px"
    }
  },
  actionBtn: {
    fontSize: "20px",
    padding: "15px 45px",
    margin: "5px 15px",
    backgroundColor: "#185ADB",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#185adbba",
    },
    [theme.breakpoints.down('xs')]:{
      padding:"5px 20px",
      margin:"10px 3px"
    }
  },
  secondActionBtn: {
    backgroundColor: "#0A1931",
    "&:hover": {
      backgroundColor: "#0a1931cc",
    },
  },
  assignedCourseBtn:{
    backgroundColor:"#29524A",
    [theme.breakpoints.down('xs')]:{
      width:"100%"
    }
  }
}))


const ActionBtns = (props) => {
  const classes = useStyles();
  return (
    <Box px={1}>
      <Typography variant="h4" color="initial">
        Actions
      </Typography>
      <Button variant="contained" className={`${classes.actionBtn}`}>
        {props.role === "Administrator" ? "Edit Course" : "Buy This Course"}
      </Button>
      <Button
        variant="contained"
        className={`${classes.actionBtn} ${classes.secondActionBtn}`}
      >
        {props.role === "Administrator" ? "Delete Course" : "Add to Wishlist"}
      </Button>
      {props.isCourseAssigned&&
      <Button
        variant="contained"
        className={`${classes.actionBtn} ${classes.assignedCourseBtn}`}
      >
        {props.role === "Administrator" ? "Assigned this Course" : "Add to Wishlist"}
      </Button>
}
    </Box>
  );
};

const CourseDetails = () => {
  const { id: courseID } = useParams();
  const { handleGetCourseDetails, courseDetails, loading, handleAddNewReview } =
    useContext(CourseContext);

  const {admin} = useContext(AuthContext)

  console.log(admin)

  console.log(courseID);



  const classes = useStyles()

  useEffect(() => {
    handleGetCourseDetails(courseID);
  }, [courseID]);

  return (
    <div>
      {loading ? (
        <SimpleBackdrop />
      ) : (
        <Container maxWidth="lg" className={classes.container}>
          {courseDetails.is_course_assigned&&<Snackbars style={{margin:"10px 0"}} message="This is course is not assigned to any teacher!" />}
          <CourseDetailsHeader
            courseCategory={courseDetails.course_category}
            courseName={courseDetails.course_name}
            courseTitle={courseDetails.course_title}
            courseDescription={courseDetails.course_description}
            isCourseAssigned={courseDetails.is_course_assigned}
            totalReviews={courseDetails.total_reviews}
            courseTeacher={courseDetails.teacher_name}
            courseLanguage={courseDetails.course_language}
            courseDuration={courseDetails.course_duration}
            coursePrice={courseDetails.course_price}
          />
          <CourseOutline courseOutline={courseDetails.course_outline} />
          {!courseDetails.is_course_assigned && (
            <div>
              <CourseTeacherDetails
                courseTeacherName={courseDetails.teacher_name}
                courseTeacherExperience={
                  courseDetails.teacher_teaching_experience
                }
                courseTeacherIntro={courseDetails.teacher_intro}
              />
              <Reviews handleAddNewReview={handleAddNewReview} courseReviews={courseDetails.reviews} role={admin.role?admin.role:""}/>
            </div>
          )}

              {(admin.role==='Administrator' || admin.role==='Moderator') && <ActionBtns role={admin.role} isCourseAssigned={courseDetails.is_course_assigned}/>  }
            
        </Container>
      )}
    </div>
  );
};

export default CourseDetails;
