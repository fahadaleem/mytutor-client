import React, { useState } from "react";
import {
  Box,
  Typography,
  makeStyles,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@material-ui/core";
import AddNewReviewForm from "./AddNewReviewForm";
import ReviewCard from "./ReviewCard";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px 0",
    padding: "0 35px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 10px",
    },
  },
  loadMoreBtnDiv: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  loadMoreBtn: {
    color: "#29524A !important",
    borderColor: "#29524A !important",
    padding: "10px 35px",
    "&:hover": {
      backgroundColor: "#29524A",
      color: "#FFFFFF !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "7px 21px",
      fontSize: "0.9375rem",
    },
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
  },
  secondActionBtn: {
    backgroundColor: "#0A1931",
    "&:hover": {
      backgroundColor: "#0a1931cc",
    },
  },
}));

const ActionBtns = (props) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h4" color="initial">
        Actions
      </Typography>
      <Button variant="contained" className={`${classes.actionBtn}`}>
      {props.role==='Administrator'?'Edit Course':"Buy This Course"}  
      </Button>
      <Button
        variant="contained"
        className={`${classes.actionBtn} ${classes.secondActionBtn}`}
      >
        {props.role==='Administrator'?'Delete Course':"Add to Wishlist"}  
      </Button>
    </Box>
  );
};

const Reviews = (props) => {
  const classes = useStyles();
  const startReviewsCount = 0;
  const [endReviewsCount, setEndReviewsCount] = useState(5);

  const handleIncrementEndReviewsCount = () => {
    setEndReviewsCount(endReviewsCount + 5);
  };

  console.log(props);

  return (
    <Box className={classes.root}>
      <Typography variant="h4" color="initial">
        Student Feedback
      </Typography>
      <AddNewReviewForm handleAddNewReview={props.handleAddNewReview} />
      <Typography variant="h4" color="initial">
        Reviews
      </Typography>
      {props.courseReviews &&
        props.courseReviews
          .slice(startReviewsCount, endReviewsCount)
          .map((elem) => {
            return (
              <ReviewCard
                key={elem.id}
                reviewerName={elem.reviewer_name}
                rating={elem.rating}
                date={elem.date}
                comment={elem.comment}
              />
            );
          })}
      <Box align="center">
        <FormControl className={classes.loadMoreBtnDiv}>
          <Button
            color="primary"
            variant="outlined"
            className={classes.loadMoreBtn}
            onClick={handleIncrementEndReviewsCount}
          >
            Load More Reviews
          </Button>
        </FormControl>
      </Box>
      <ActionBtns role={props.role}/>
    </Box>
  );
};

export default Reviews;
