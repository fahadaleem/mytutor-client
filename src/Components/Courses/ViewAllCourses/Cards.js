import React from "react";
import { Paper, Box, Typography, makeStyles, Button } from "@material-ui/core";
import courseCategories from "../../../categories.json";
import {Link} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: "5px",
    overflow: "hidden",
  },
  imageDiv: {
    background: "linear-gradient(120deg, rgba(0,0,0,1), rgba(0,0,0,0.2))",
    height: "260px",
    zIndex: "1000",
  },
  containerImage: {
    width: "100%",
    opacity: "0.55",
    height: "100%",
  },
  topInformation: {
    position: "relative",
    top: "-245px",
    left: "20px",
    color: "white",
    letterSpacing: "1px",
    textTransform: "uppercase",
    [theme.breakpoints.down('xs')]:{
        letterSpacing:"0"
    }
  },
  title:{
      lineHeight:"1.2 !important",
      marginBottom:"8px"
  }
}));

const CourseCard = (props) => {
  const classes = useStyles();
  const { id, name, category, title, description } = props;
  const courseImage = courseCategories[category];
  return (
    <Paper className={classes.container}>
      <Box className={classes.imageDiv}>
        <img
          src={courseImage}
          alt="course-image"
          className={classes.containerImage}
        />
      </Box>
      <Typography className={classes.topInformation}>
        {category} - {id}
      </Typography>
      <Typography variant="h5" className={classes.topInformation}>
        {name}
      </Typography>
      <Box px={2} pb={2} mt={-5}>
        <Typography variant="h6" color="initial" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" color="initial">
            {description.slice(0,75)}....
        </Typography>
        <Box textAlign="right" mt={2}>
          <Link to={`/admin/courses/${id}`}>
        <Button color="primary">
          View Details
        </Button>
        </Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default CourseCard;
