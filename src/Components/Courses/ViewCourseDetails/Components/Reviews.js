import React, {useState} from "react"
import {Box, Typography, makeStyles} from "@material-ui/core"
import AddNewReviewForm from "./AddNewReviewForm"

const useStyles = makeStyles(theme=>({
    root:{
        margin:"20px 0", 
        padding:"0 35px"
    }
}))

const Reviews = ()=>{
    const classes = useStyles()
    const [reviewData, setReviewData] = useState({
        comment:'',
        rating:0
    })
    return (
        <Box className={classes.root}>
            <Typography variant="h4" color="initial">Student Feedback</Typography>
            <AddNewReviewForm reviewData={reviewData} handleSetReviewData={setReviewData}/>
        </Box>
    )
}

export default Reviews