import React from "react";
import { Box, makeStyles, Paper, Typography, Button } from "@material-ui/core";
import Categories from "../../../../categories.json";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    overflow: "hidden",
    borderRadius: "10px",
    // minHeight:"350px",
    // maxHeight:"450px",
    position: "relative",
    backgroundPosition: "center !important",
    backgroundSize: "cover !important",
    padding: "25px 35px",
    [theme.breakpoints.down("xs")]: {
      padding: "25px 18px",
    },
  },
  headerInfo: {
    color: "white",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      height: "350px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "330px",
    },
  },
  catAndName: {
    fontSize: "16px",
    margin: "15px 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  description: {
    margin: "10px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
    // [theme.breakpoints.down('xs')]:{
    //   fontSize:"1.2rem"
    // },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "22px",
    },
  },
  reviewsAndTeacher: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px !important",
    },
  },
}));

const CourseDetailsHeader = (props) => {
  const {
    courseCategory,
    courseName,
    courseTitle,
    courseDescription,
    isCourseAssigned,
    totalReviews,
    courseTeacher,
  } = props;

  console.log(isCourseAssigned);

  const classes = useStyles();

  const handleSetBackground = () => {
    const categoryImage = Categories[courseCategory];
    console.log(categoryImage);

    return {
      background: `linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,0.5)), url(${categoryImage})`,
    };
  };

  return (
    <Box
      className={classes.container}
      component={Paper}
      style={handleSetBackground()}
    >
      <div className={classes.headerInfo}>
        <div className={classes.topInfo}>
          <Typography
            variant="h4"
            color="initial"
            className={classes.catAndName}
          >
            {courseCategory} {">"} {courseName}
          </Typography>
          <Typography variant="h4" color="initial" className={classes.title}>
            {courseTitle}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            className={classes.description}
          >
            {courseDescription}
          </Typography>
        </div>
        {!isCourseAssigned && (
          <div className={classes.bottomInfo}>
            <Typography
              variant="h5"
              color="initial"
              className={classes.reviewsAndTeacher}
            >
              Reviews: {totalReviews}
            </Typography>
            <Typography
              variant="h5"
              color="initial"
              className={classes.reviewsAndTeacher}
            >
              Teacher: {courseTeacher}
            </Typography>
          </div>
        )}
      </div>
    </Box>
  );
};

export default CourseDetailsHeader;
