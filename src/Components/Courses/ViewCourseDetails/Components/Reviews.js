import React from "react"
import {Box, Typography, makeStyles} from "@material-ui/core"


const useStyles = makeStyles(theme=>({
    root:{
        margin:"20px 0", 
        padding:"0 35px"
    }
}))

const Reviews = ()=>{
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Typography variant="h4" color="initial">Student Feedback</Typography>
        </Box>
    )
}

export default Reviews