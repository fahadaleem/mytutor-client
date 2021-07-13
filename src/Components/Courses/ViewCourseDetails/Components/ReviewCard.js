import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Hidden,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px 15px",
    [theme.breakpoints.down("xs")]: {
      padding: "25px 5px",
    },
  },
  userAvatar: {
    // backgroundColor: "#29524A",
    height: "75px",
    width: "75px",
    borderRadius: "50%",
    padding: "22px 0",
    color: "#EEEEEE",
    margin: "0 5px 0 0",
    fontSize: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      height: "55px",
      width: "55px",
      padding: "15px 0",
    },
  },
  name: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    color: "orange",
  },
  ratingAndDate: {
    display: "flex",
    justifyContent: "space-between",
  },
  reviewCardTop: {
    display: "flex",
    justifyContent: "space-between",
  },
  rightContainer:{
      padding:"0 0 0 15px !important",
      [theme.breakpoints.down('xs')]:{
          padding:"10px 0 !important"
      }
  }
}));


const ReviewCard = (props) => {
  const { reviewerName, rating, comment, date } = props;

  const classes = useStyles();


  const handleGenerateRandomColor = ()=>{
      const red = Math.floor(Math.random()*225);
      const green = Math.floor(Math.random()*225);
      const blue = Math.floor(Math.random()*225);

      console.log(red)

      return `rgb(${red},${green},${blue})`
  }


  const handleGenerateAvatar = () => {
    const names = reviewerName.split(" ");

    if (names.length > 1) {
      return `${names[0][0]}${names[1][0]}`;
    } else {
      return `${names[0][0]}${names[0][1]}`;
    }
  };
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item lg={1} xs={12} className={classes.name}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h4"
            color="initial"
            align="center"
            className={classes.userAvatar}
            style={{backgroundColor:handleGenerateRandomColor()}}
          >
            {reviewerName && handleGenerateAvatar()}
          </Typography>
          <Hidden mdUp>
            <Typography variant="h5" color="initial">
              {reviewerName}
            </Typography>
          </Hidden>
        </div>
      </Grid>
      <Grid item lg={11} xs={12} className={classes.rightContainer}>
        <Box className={classes.reviewCardTop}>
          <Hidden mdDown>
            <Typography variant="h4" color="initial">
              {reviewerName}
            </Typography>
          </Hidden>
        </Box>
        <Box className={classes.ratingAndDate}>
          <div>
            {rating &&
              Array(rating)
                .fill(0)
                .map((elem) => {
                  return <StarIcon className={classes.icon} />;
                })}
          </div>
          <Typography variant="subtitle1" color="initial">
            {date}
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="initial">
          {comment}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReviewCard;
