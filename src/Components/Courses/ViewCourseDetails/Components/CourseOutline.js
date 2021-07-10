import React from "react"
import {Box, makeStyles, Typography} from "@material-ui/core"

const useStyles = makeStyles(theme=>({
    root:{
        margin:"20px 0"
    },
    courseOutline:{
        padding:"5px 0px",
        '& p, h1, h2, h3, h4, h5, h6':{
            margin:"0 0 20px 0",
            fontWeight:"normal"
        }, 
        '& ul, ol':{
            margin:"10px 40px"
        }, 
        [theme.breakpoints.down('xs')]:{
            '& ul, ol':{
                margin:"10px 25px"
            }, 
        }
    }
}))


const CourseOutline = (props)=>{
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box my={2}>
            <Typography variant="h4" color="initial" className={classes.heading}>Course Details</Typography>
            </Box>
            <div className={classes.courseOutline} dangerouslySetInnerHTML={{ __html: props.courseOutline }} />
        </Box>
    )
}

export default CourseOutline