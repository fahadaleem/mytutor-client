import React from "react"
import {Typography, Container, makeStyles} from '@material-ui/core'
import JobRequest from "../Components/JobRequests/Request"

const JobRequests = ()=>{
  const jobRequests = [
    {
        id:1,
        name:"Muhammad Fahad Aleem",
        country:"pakistan",
        appliedDate:"05/15/2021",
        designation:"React JS Developer",
        imageUrl:"https://avatars.githubusercontent.com/u/55811140?v=4"
    },
    {
      id:2,
      name:"Muhammad Ammar Sohail Siddiqui",
      country:"pakistan",
      appliedDate:"12-01-2020",
      designation:"Backend Developer",
      imageUrl:"https://avatars.githubusercontent.com/u/10863520?v=4"
  },
  {
    id:3,
      name:"Hammad Saeed Khan",
      country:"Pakistan",
      appliedDate:"5-20-2021",
      designation:"Frontend Developer",
      imageUrl:"https://avatars.githubusercontent.com/u/65037715?v=4"
  }
]
    return (
       <Container maxWidth="lg">
         <Typography variant="h4" color="initial">Job Requests</Typography>

        {jobRequests.map((element,index)=>{
          return <JobRequest key={element.id} name={element.name} country={element.country} appliedDate={element.appliedDate} designation={element.designation} image={element.imageUrl} />
        })}

       </Container>

    )
}


export default JobRequests