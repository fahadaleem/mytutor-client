import React, {useState} from "react"
import {Box, Typography, makeStyles, Button, FormControl, FormHelperText, FormLabel} from "@material-ui/core"
import AddNewReviewForm from "./AddNewReviewForm"
import ReviewCard from "./ReviewCard"


const useStyles = makeStyles(theme=>({
    root:{
        margin:"20px 0", 
        padding:"0 35px",
        [theme.breakpoints.down('xs')]:{
            padding:"10px 10px"
        }
    }
}))

const Reviews = (props)=>{
    const classes = useStyles()
      const startReviewsCount = 0;
  const [endReviewsCount, setEndReviewsCount] = useState(5)

  const handleIncrementEndReviewsCount = ()=>{
    setEndReviewsCount(endReviewsCount+5)
  }

    console.log(props)
    
    return (
        <Box className={classes.root}>
            <Typography variant="h4" color="initial">Student Feedback</Typography>
            <AddNewReviewForm handleAddNewReview={props.handleAddNewReview}/>
            <Typography variant="h4" color="initial">Reviews</Typography>
            {props.courseReviews&&props.courseReviews.slice(startReviewsCount,endReviewsCount).map((elem)=>{
                return (
                    <ReviewCard key={elem.id} reviewerName={elem.reviewer_name} rating={elem.rating} date={elem.date} comment={elem.comment}/>
                )
            })}
           <FormControl fullWidth>
                <Button color="primary" variant="outlined" onClick={handleIncrementEndReviewsCount}>
                  Load More Reviews
                </Button>
           </FormControl>
        </Box>
    )
}

export default Reviews