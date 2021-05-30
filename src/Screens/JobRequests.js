import React from "react"
import {Typography, Container, makeStyles} from '@material-ui/core'
import JobRequest from "../Components/JobRequests/Request"

const JobRequests = ()=>{
    return (
       <Container maxWidth="lg">
         <Typography variant="h3" color="initial">Job Request</Typography>
         <JobRequest />
       </Container>

    )
}


export default JobRequests