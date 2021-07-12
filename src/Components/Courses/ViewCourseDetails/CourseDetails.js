import React, { useContext, useEffect } from "react";
import CourseDetailsHeader from "./Components/CourseDetailsHeader";
import CourseOutline from "./Components/CourseOutline";
import CourseTeacherDetails from "./Components/CourseTeacherDetails";
import SimpleBackdrop from "../../Utilities/BackdropLoader";
import Reviews from "./Components/Reviews";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { CourseContext } from "../../../Contexts/CourseContext";

const CourseDetails = () => {
  const { id: courseID } = useParams();
  const { handleGetCourseDetails, courseDetails, loading, handleAddNewReview } =
    useContext(CourseContext);
  console.log(courseID);

  useEffect(() => {
    handleGetCourseDetails(courseID);
  }, [courseID]);

  return (
    <div>
      {loading ? (
        <SimpleBackdrop />
      ) : (
        <Container maxWidth="lg">
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
              <Reviews handleAddNewReview={handleAddNewReview}/>
            </div>
          )}
        </Container>
      )}
    </div>
  );
};

export default CourseDetails;
