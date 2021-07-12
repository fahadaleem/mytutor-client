import React, {useState} from "react"
import {Box, Typography, makeStyles} from "@material-ui/core"
import AddNewReviewForm from "./AddNewReviewForm"

const useStyles = makeStyles(theme=>({
    root:{
        margin:"20px 0", 
        padding:"0 35px"
    }
}))

const Reviews = (props)=>{
    const classes = useStyles()
    
    return (
        <Box className={classes.root}>
            <Typography variant="h4" color="initial">Student Feedback</Typography>
            <AddNewReviewForm handleAddNewReview={props.handleAddNewReview}/>
        </Box>
    )
}

export default Reviews