import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
  Box,
  MenuItem,
  Select,
  InputLabel,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: "10px 0",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#29524A !important",
    },
    width: "100%",
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#29524A !important",
    },
  },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  ratingIcon: {
    fontSize: "26px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  formBottom: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 0",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  submitBtn: {
    width: "125px",
    color: "#29524A",
    borderColor: "#29524A",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "10px 0",
    },
    "&:hover": {
      borderColor: "#29524A",
    },
  },
}));


const handleGetDate = ()=>{
    return new Date().toDateString().slice(4,)
}

const AddNewReviewForm = (props) => {
  const classes = useStyles();
  const [hoverRating, setHoverRating] = useState();

  const [reviewData, setReviewData] = useState({
    date:handleGetDate(),  
    comment: "",
    rating: 0,
  });
  const handleSetRating = (ratedValue) => {
    setReviewData({
      ...reviewData,
      rating: ratedValue,
    });
  };

  const handlePostReview = (e)=>{
    e.preventDefault();
    console.log(reviewData)
  }

  return (
    <form onSubmit={handlePostReview}>
      <Box my={2}>
        <FormControl fullWidth>
          <TextField
            id="comment"
            label="Comment"
            placeholder="Write a Comment"
            variant="outlined"
            multiline={true}
            rows={7}
            className={classes.textField}
            onChange={(e)=>{
                setReviewData({
                    ...reviewData, 
                    comment:e.target.value
                })
            }}
          />
        </FormControl>
        <div className={classes.formBottom}>
          <Box className={classes.rating}>
            <Typography variant="h6" color="initial">
              Rating:{" "}
            </Typography>
            <StarIcon
              className={classes.ratingIcon}
              onMouseEnter={() => {
                setHoverRating(1);
              }}
              onMouseLeave={() => {
                setHoverRating(0);
              }}
              style={{
                color:
                  (hoverRating === 1 ||
                    hoverRating === 2 ||
                    hoverRating === 3 ||
                    hoverRating === 4 ||
                    hoverRating === 5 ||
                    reviewData.rating === 1 ||
                    reviewData.rating === 2 ||
                    reviewData.rating === 3 ||
                    reviewData.rating === 4 ||
                    reviewData.rating === 5) &&
                  "orange",
              }}
              onClick={() => {
                handleSetRating(1);
              }}
            />
            <StarIcon
              className={classes.ratingIcon}
              onMouseEnter={() => {
                setHoverRating(2);
              }}
              onMouseLeave={() => {
                setHoverRating(0);
              }}
              style={{
                color:
                  (hoverRating === 2 ||
                    hoverRating === 3 ||
                    hoverRating === 4 ||
                    hoverRating === 5 ||
                    reviewData.rating === 2 ||
                    reviewData.rating === 3 ||
                    reviewData.rating === 4 ||
                    reviewData.rating === 5) &&
                  "orange",
              }}
              onClick={() => {
                handleSetRating(2);
              }}
            />
            <StarIcon
              className={classes.ratingIcon}
              onMouseEnter={() => {
                setHoverRating(3);
              }}
              onMouseLeave={() => {
                setHoverRating(0);
              }}
              style={{
                color:
                  (hoverRating === 3 ||
                    hoverRating === 4 ||
                    hoverRating === 5 ||
                    reviewData.rating === 3 ||
                    reviewData.rating === 4 ||
                    reviewData.rating === 5) &&
                  "orange",
              }}
              onClick={() => {
                handleSetRating(3);
              }}
            />
            <StarIcon
              className={classes.ratingIcon}
              onMouseEnter={() => {
                setHoverRating(4);
              }}
              onMouseLeave={() => {
                setHoverRating(0);
              }}
              style={{
                color:
                  (hoverRating === 4 ||
                    hoverRating === 5 ||
                    reviewData.rating === 4 ||
                    reviewData.rating === 5) &&
                  "orange",
              }}
              onClick={() => {
                handleSetRating(4);
              }}
            />
            <StarIcon
              className={classes.ratingIcon}
              onMouseEnter={() => {
                setHoverRating(5);
              }}
              onMouseLeave={() => {
                setHoverRating(0);
              }}
              style={{
                color:
                  (hoverRating === 5 || reviewData.rating === 5) && "orange",
              }}
              onClick={() => {
                handleSetRating(5);
              }}
            />
          </Box>
          <Box>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              type="submit"
              className={classes.submitBtn}
            >
              Submit
            </Button>
          </Box>
        </div>
      </Box>
    </form>
  );
};

export default AddNewReviewForm;
