import React from "react";
import { Box, makeStyles, Paper, Typography, Button } from "@material-ui/core";
import Categories from "../../../../categories.json";
import LanguageIcon from "@material-ui/icons/Language";
import ScheduleIcon from "@material-ui/icons/Schedule";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
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
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      minHeight: "350px",
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
  language: {
    fontSize: "14px",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  Icon: {
    position: "relative",
    top: "2px",
    fontSize: "14px",
  },
  langAndDuration: {
    display: "flex",
    justifyContent: "space-between",
    width: "160px",
  },
  orignalPrice: {
    fontSize: "24px",
    textDecoration: "line-through",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  price: {
    margin: "10px 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
    },
  },
  actionBtn: {
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
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
    courseLanguage,
    courseDuration,
    coursePrice,
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
          <Box my={1} className={classes.langAndDuration}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.language}
            >
              <LanguageIcon className={classes.Icon} /> {courseLanguage}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              className={classes.language}
            >
              <ScheduleIcon className={classes.Icon} /> {courseDuration}
            </Typography>
          </Box>
        </div>
        <div className={classes.bottom}>
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
          <Typography variant="h4" color="initial" className={classes.price}>
            Price: ${coursePrice * 0.9}{" "}
            <span className={classes.orignalPrice}>${coursePrice}</span>{" "}
          </Typography>
        </div>
      </div>
      <Box my={2}>
        <Box my={3} display="inline">
          <Button
            variant="outlined"
            color="default"
            className={classes.actionBtn}
            endIcon={<FavoriteBorderIcon />}
          >
            Add to Wishlist
          </Button>
        </Box>
        <Box my={3} mx={1} display="inline">
          <Button
            variant="outlined"
            color="default"
            className={classes.actionBtn}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Enroll
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetailsHeader;
