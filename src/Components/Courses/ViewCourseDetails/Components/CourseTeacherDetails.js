import React from "react";
import { Box, makeStyles, Paper, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EEEEEE",
    padding: "15px 25px",
  },
  userAvatar: {
    backgroundColor: "#29524A",
    textAlign: "center",
    height: "115px",
    width: "115px",
    borderRadius: "50%",
    padding: "30px 0",
    color: "#EEEEEE",
    margin: "0 15px 0 0",
    fontSize: "2.7rem",
  },
  container: {
    margin: "15px 0",
  },
  teacherInfo: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  name: {
    [theme.breakpoints.down]:{
        fontSize: "24px",
    }
  },
  experience: {
    fontSize: "18px",
  },
}));

const CourseTeacherDetails = (props) => {

    const {courseTeacherName, courseTeacherExperience, courseTeacherIntro} = props


   const handleGenerateAvatar = ()=>{
       const names = courseTeacherName.split(' ')

       if(names.length>1)
       {
        return `${names[0][0]}${names[1][0]}`
       }
       else{
           return `${names[0][0]}${names[0][1]}`
       }
   } 

  const classes = useStyles();
  return (
    <Box className={classes.root} component={Paper} elevation={1}>
      <Typography variant="h4" color="initial">
        Instructor
      </Typography>
      <Grid container alignItems="center" className={classes.container}>
        <Grid item lg={2} sm={2} xs={12}>
          <Box align="center">
            <Typography
              variant="h4"
              color="initial"
              className={classes.userAvatar}
            >
              {/* {handleGenerateAvatar()} */}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          lg={10}
          sm={12}
          md={10}
          xs={12}
          className={classes.teacherInfo}
        >
          <Typography variant="h4" color="initial" className={classes.name}>
            {courseTeacherName}
          </Typography>
          <Typography
            variant="h5"
            color="initial"
            className={classes.experience}
          >
            {courseTeacherExperience} Experienced
          </Typography>
          <Typography variant="body1" color="initial">
           {courseTeacherIntro}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseTeacherDetails;
